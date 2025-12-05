import type { PrismaClient } from '@prisma/client';
import { MembershipRole } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { getPrismaClient } from '../../db/client';
import { DomainError } from '../errors';

export type RegisterTenantInput = {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  password: string;
};

export type RegisterTenantResult = {
  userId: string;
  tenantId: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

type SlugClient = {
  tenant: PrismaClient['tenant'];
};

const slugify = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');

const getUniqueSlug = async (client: SlugClient, base: string): Promise<string> => {
  let candidate = base || 'tenant';
  let suffix = 1;

  while (true) {
    const exists = await client.tenant.findUnique({ where: { slug: candidate } });
    if (!exists) {
      return candidate;
    }
    candidate = `${base}-${suffix++}`;
  }
};

export const registerTenant = async (input: RegisterTenantInput): Promise<RegisterTenantResult> => {
  const firstName = input.firstName?.trim();
  const lastName = input.lastName?.trim();
  const companyName = input.companyName?.trim();
  const email = input.email?.trim().toLowerCase();
  const password = input.password ?? '';

  if (!firstName || !lastName || !companyName || !email || !password) {
    throw new DomainError('All fields are required', 'VALIDATION');
  }

  if (!EMAIL_REGEX.test(email)) {
    throw new DomainError('Email is not valid', 'VALIDATION');
  }

  if (password.length < MIN_PASSWORD_LENGTH) {
    throw new DomainError(`Password must be at least ${MIN_PASSWORD_LENGTH} characters`, 'VALIDATION');
  }

  const { client, error } = getPrismaClient();
  if (!client) {
    throw new DomainError(error ?? 'Database not configured', 'NOT_CONFIGURED');
  }

  const existing = await client.user.findUnique({ where: { email } });
  if (existing) {
    throw new DomainError('A user with this email already exists', 'CONFLICT');
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const baseSlug = slugify(companyName);

  const result = await client.$transaction(async (tx) => {
    const slug = await getUniqueSlug(tx, baseSlug);

    const tenant = await tx.tenant.create({
      data: {
        name: companyName,
        slug,
      },
    });

    const user = await tx.user.create({
      data: {
        email,
        hashedPassword,
        firstName,
        lastName,
      },
    });

    await tx.membership.create({
      data: {
        userId: user.id,
        tenantId: tenant.id,
        role: MembershipRole.OWNER,
      },
    });

    return { tenantId: tenant.id, userId: user.id };
  });

  return result;
};
