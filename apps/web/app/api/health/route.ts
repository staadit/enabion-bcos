export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { appEnv, getOrganizationsCount, isDatabaseConfigured } from '@enabion/core';

export async function GET() {
  const result = isDatabaseConfigured ? await getOrganizationsCount() : { count: null, error: 'DATABASE_URL not set' };

  const db: 'ok' | 'down' = result.error ? 'down' : 'ok';
  const status: 'ok' | 'degraded' = db === 'ok' ? 'ok' : 'degraded';

  return NextResponse.json({
    status,
    app: 'enabion-bcos',
    env: appEnv?.trim() || 'local',
    db,
    timestamp: new Date().toISOString(),
    organizationsCount: result.count ?? 0,
    error: result.error,
  });
}
