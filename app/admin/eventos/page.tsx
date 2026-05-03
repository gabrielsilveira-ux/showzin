'use client';

import { FormEvent, useEffect, useState } from 'react';

type EventItem = { slug: string; title: string; city: string; state: string; genre: string; date: string; venue: string; officialUrl: string };

export default function AdminEventosPage() {
  const [items, setItems] = useState<EventItem[]>([]);

  async function load() {
    const res = await fetch('/api/admin/events');
    setItems(await res.json());
  }

  useEffect(() => { load(); }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    await fetch('/api/admin/events', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    e.currentTarget.reset();
    load();
  }

  return (
    <section>
      <h3>Cadastro de eventos</h3>
      <form className="card" onSubmit={onSubmit}>
        <input name="title" placeholder="Título" required />
        <input name="slug" placeholder="slug" required />
        <input name="city" placeholder="cidade" required />
        <input name="state" placeholder="estado (ex: sp)" required />
        <input name="genre" placeholder="gênero" required />
        <input name="date" type="datetime-local" required />
        <input name="venue" placeholder="local" required />
        <input name="officialUrl" placeholder="URL oficial" required />
        <button type="submit">Salvar evento</button>
      </form>
      {items.map((item) => <article className="card" key={item.slug}><strong>{item.title}</strong><p>{item.city}/{item.state}</p></article>)}
    </section>
  );
}
