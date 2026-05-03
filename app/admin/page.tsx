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
      <div className="hero">
        <h1>Painel administrativo</h1>
        <p>Cadastre eventos e posts para publicar instantaneamente no portal.</p>
      </div>
      <div className="grid">
        <article className="card">
          <h3>Eventos</h3>
          <p className="meta">Cadastrar agenda, links oficiais e local.</p>
          <Link className="btn" href="/admin/eventos">Gerenciar eventos</Link>
        </article>
        <article className="card">
          <h3>Blog</h3>
          <p className="meta">Publicar guias e conteúdo SEO por cidade.</p>
          <Link className="btn" href="/admin/blog">Gerenciar posts</Link>
        </article>
      </div>
      <div style={{ marginTop: 16 }}>
        <button type="button" onClick={logout}>Sair</button>
      </div>
    </section>
  );
}
