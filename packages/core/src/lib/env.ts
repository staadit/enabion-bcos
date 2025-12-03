export const appEnv = process.env.APP_ENV ?? 'local';

export const databaseUrl = process.env.DATABASE_URL;

export const isDatabaseConfigured = Boolean(databaseUrl && databaseUrl.trim().length > 0);
