export const appEnv = process.env.APP_ENV?.trim() ?? 'local';

export const databaseUrl = process.env.DATABASE_URL?.trim();

export const isDatabaseConfigured = Boolean(databaseUrl && databaseUrl.trim().length > 0);

export const isDataProxy =
  databaseUrl?.startsWith('prisma://') || databaseUrl?.startsWith('prisma+postgres://');
