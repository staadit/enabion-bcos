export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { appEnv, getOrganizationsCount, isDatabaseConfigured } from '@enabion/core';

export async function GET() {
  let status: 'ok' | 'degraded' = 'ok';
  let organizationsCount: number | null = null;
  let error: string | undefined;

  if (!isDatabaseConfigured) {
    status = 'degraded';
  } else {
    const result = await getOrganizationsCount();
    organizationsCount = result.count;
    if (result.error) {
      status = 'degraded';
      error = result.error;
    }
  }

  return NextResponse.json({
    status,
    organizationsCount,
    env: appEnv?.trim() || 'local',
    error,
    hasDatabaseUrl: Boolean(process.env.DATABASE_URL),
    databaseConfigured: isDatabaseConfigured,
  });
}
