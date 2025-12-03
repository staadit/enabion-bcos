import { PrismaClient } from '@prisma/client';
import { isDatabaseConfigured } from '../lib/env';

declare global {
  // eslint-disable-next-line no-var
  var __enabionPrisma: PrismaClient | undefined;
}

export const getPrismaClient = (): PrismaClient | null => {
  if (!isDatabaseConfigured) {
    return null;
  }

  if (!global.__enabionPrisma) {
    try {
      global.__enabionPrisma = new PrismaClient();
    } catch (error) {
      return null;
    }
  }

  return global.__enabionPrisma ?? null;
};
