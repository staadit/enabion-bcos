import { getPrismaClient } from './client';

export const getOrganizationsCount = async (): Promise<{
  count: number | null;
  error?: string;
}> => {
  const { client, error: initError } = getPrismaClient();

  if (!client) {
    return { count: null, error: initError ?? 'Database is not configured' };
  }

  try {
    const count = await client.organization.count();
    return { count };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown database error';
    return { count: null, error: message };
  }
};
