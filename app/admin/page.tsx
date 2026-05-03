'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const router = useRouter();

  async function logout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
    router.refresh();
  }

  return (
    <section>
      <h2>Painel administrativo (MVP)</h2>
      <ul>
        <li><Link href="/admin/eventos">Gerenciar eventos</Link></li>
        <li><Link href="/admin/blog">Gerenciar posts</Link></li>
      </ul>
      <button type="button" onClick={logout}>Sair</button>
    </section>
  );
}
