import { NextResponse } from 'next/server';
import { getPrismaClient } from '@enabion/core';

export async function GET() {
  const { client, error } = getPrismaClient();

  if (!client || error) {
    return NextResponse.json({ db: 'down', error: error ?? 'DATABASE_URL not set' }, { status: 200 });
  }

  try {
    await client.$queryRaw`SELECT 1`;
    return NextResponse.json({ db: 'ok', timestamp: new Date().toISOString() });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown database error';
    return NextResponse.json({ db: 'down', error: message }, { status: 200 });
  }
}
