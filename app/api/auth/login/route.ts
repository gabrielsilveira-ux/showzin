import { NextResponse } from 'next/server';
import { authCookieName, getAdminCredentials } from '@/lib/auth';

export async function POST(req: Request) {
  const body = await req.json();
  const creds = getAdminCredentials();
  if (body.user !== creds.user || body.pass !== creds.pass) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(authCookieName, '1', { httpOnly: true, sameSite: 'lax', path: '/' });
  return res;
}
