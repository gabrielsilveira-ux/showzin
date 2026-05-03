import { cookies } from 'next/headers';

const COOKIE_NAME = 'showzin_admin_session';

export function getAdminCredentials() {
  return {
    user: process.env.ADMIN_USER || 'admin',
    pass: process.env.ADMIN_PASS || 'admin123'
  };
}

export async function isAuthenticated() {
  const jar = await cookies();
  return jar.get(COOKIE_NAME)?.value === '1';
}

export const authCookieName = COOKIE_NAME;
