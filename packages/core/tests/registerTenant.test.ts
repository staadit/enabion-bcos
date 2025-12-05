import { describe, expect, it, beforeAll, afterAll } from 'vitest';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { registerTenant, DomainError } from '../src';

const prisma = new PrismaClient();

describe('registerTenant', () => {
  beforeAll(async () => {
    await prisma.membership.deleteMany();
    await prisma.user.deleteMany();
    await prisma.tenant.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('creates tenant, user, and membership', async () => {
    const result = await registerTenant({
      firstName: 'Jane',
      lastName: 'Doe',
      companyName: 'Acme Labs',
      email: 'jane@example.com',
      password: 'supersecure',
    });

    const user = await prisma.user.findUnique({ where: { id: result.userId } });
    const tenant = await prisma.tenant.findUnique({ where: { id: result.tenantId } });
    const membership = await prisma.membership.findFirst({
      where: { userId: result.userId, tenantId: result.tenantId },
    });

    expect(user).not.toBeNull();
    expect(tenant).not.toBeNull();
    expect(membership).not.toBeNull();
    expect(user?.email).toBe('jane@example.com');
    expect(await bcrypt.compare('supersecure', user?.hashedPassword ?? '')).toBe(true);
  });

  it('rejects duplicate email', async () => {
    await expect(
      registerTenant({
        firstName: 'Jane',
        lastName: 'Doe',
        companyName: 'Acme Labs 2',
        email: 'jane@example.com',
        password: 'supersecure',
      }),
    ).rejects.toMatchObject({ code: 'CONFLICT' satisfies DomainError['code'] });
  });
});
