'use client';

import { FormEvent, useEffect, useState } from 'react';

type PostItem = { slug: string; title: string; excerpt: string; city?: string; publishedAt: string };

export default function AdminBlogPage() {
  const [items, setItems] = useState<PostItem[]>([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  async function load() {
    const res = await fetch('/api/admin/posts');
    const data = await res.json();
    setItems(Array.isArray(data) ? data : []);
  }

  useEffect(() => { load(); }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage('');
    setError('');
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    const res = await fetch('/api/admin/posts', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    const body = await res.json();

    if (!res.ok) {
      setError(body?.error ?? 'Erro ao salvar post.');
      return;
    }

    setMessage('Post salvo com sucesso.');
    e.currentTarget.reset();
    load();
  }

  return (
    <section>
      <h2>Painel de blog</h2>
      <form className="card" onSubmit={onSubmit}>
        <label>Título</label><input name="title" placeholder="Título" required />
        <label>Slug</label><input name="slug" placeholder="guia-shows-campinas" required />
        <label>Cidade (opcional)</label><input name="city" placeholder="Campinas" />
        <label>Data de publicação</label><input name="publishedAt" type="date" required />
        <label>Resumo</label><textarea name="excerpt" placeholder="resumo" required />
        <button type="submit">Salvar post</button>
        {message ? <p className="notice-ok">{message}</p> : null}
        {error ? <p className="notice-error">{error}</p> : null}
      </form>
      <div className="grid">
        {items.map((item) => <article className="card" key={item.slug}><strong>{item.title}</strong><p className="meta">{new Date(item.publishedAt).toLocaleDateString('pt-BR')}</p></article>)}
      </div>
    </section>
  );
}
