import Link from 'next/link';

export default function AdminPage() {
  return (
    <section>
      <h2>Painel administrativo (MVP)</h2>
      <ul>
        <li><Link href="/admin/eventos">Gerenciar eventos</Link></li>
        <li><Link href="/admin/blog">Gerenciar posts</Link></li>
      </ul>
    </section>
  );
}
