'use client';

import { FormEvent, useEffect, useState } from 'react';

type PostItem = { slug: string; title: string; excerpt: string; city?: string; publishedAt: string };

export default function AdminBlogPage() {
  const [items, setItems] = useState<PostItem[]>([]);

  async function load() {
    const res = await fetch('/api/admin/posts');
    setItems(await res.json());
  }

  useEffect(() => { load(); }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    await fetch('/api/admin/posts', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    e.currentTarget.reset();
    load();
  }

  return (
    <section>
      <h3>Cadastro de posts</h3>
      <form className="card" onSubmit={onSubmit}>
        <input name="title" placeholder="Título" required />
        <input name="slug" placeholder="slug" required />
        <input name="city" placeholder="cidade (opcional)" />
        <input name="publishedAt" type="date" required />
        <textarea name="excerpt" placeholder="resumo" required />
        <button type="submit">Salvar post</button>
      </form>
      {items.map((item) => <article className="card" key={item.slug}><strong>{item.title}</strong><p>{item.publishedAt}</p></article>)}
    </section>
  );
}
