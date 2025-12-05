export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { DomainError, registerTenant, RegisterTenantInput } from '@enabion/core';

const parseBody = async (request: Request): Promise<RegisterTenantInput> => {
  const json = await request.json();
  return {
    firstName: json?.firstName ?? '',
    lastName: json?.lastName ?? '',
    companyName: json?.companyName ?? '',
    email: json?.email ?? '',
    password: json?.password ?? '',
  };
};

export async function POST(request: Request) {
  let payload: RegisterTenantInput;

  try {
    payload = await parseBody(request);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Invalid JSON payload';
    return NextResponse.json({ error: message }, { status: 400 });
  }

  try {
    const result = await registerTenant(payload);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    if (error instanceof DomainError) {
      if (error.code === 'VALIDATION') {
        return NextResponse.json({ error: error.message }, { status: 400 });
      }
      if (error.code === 'CONFLICT') {
        return NextResponse.json({ error: error.message }, { status: 409 });
      }
      if (error.code === 'NOT_CONFIGURED') {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
    }

    const message = error instanceof Error ? error.message : 'Unexpected error';
    console.error('[register] unexpected error', message);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
