import { PrismaClient } from '@prisma/client';
import { isDatabaseConfigured } from '../lib/env';

declare global {
  // eslint-disable-next-line no-var
  var __enabionPrisma: PrismaClient | undefined;
}

export const getPrismaClient = (): { client: PrismaClient | null; error?: string } => {
  if (!isDatabaseConfigured) {
    return { client: null, error: 'DATABASE_URL not set' };
  }

  if (!global.__enabionPrisma) {
    try {
      global.__enabionPrisma = new PrismaClient();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to init Prisma client';
      return { client: null, error: message };
    }
  }

  return { client: global.__enabionPrisma ?? null };
};
