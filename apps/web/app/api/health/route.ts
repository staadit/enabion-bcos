import { NextResponse } from 'next/server';
import { appEnv, getOrganizationsCount, isDatabaseConfigured } from '@enabion/core';

export async function GET() {
  let status: 'ok' | 'degraded' = 'ok';
  let organizationsCount: number | null = null;

  if (!isDatabaseConfigured) {
    status = 'degraded';
  } else {
    const result = await getOrganizationsCount();
    organizationsCount = result.count;
    if (result.error) {
      status = 'degraded';
    }
  }

  return NextResponse.json({
    status,
    organizationsCount,
    env: appEnv,
  });
}
