'use client';

import { FormEvent, useEffect, useState } from 'react';

type EventItem = { slug: string; title: string; city: string; state: string; genre: string; date: string; venue: string; officialUrl: string };

export default function AdminEventosPage() {
  const [items, setItems] = useState<EventItem[]>([]);
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');

  async function load() {
    const res = await fetch('/api/admin/events');
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
    const res = await fetch('/api/admin/events', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    const body = await res.json();

    if (!res.ok) {
      setError(body?.error ?? 'Erro ao salvar evento.');
      return;
    }

    setMessage('Evento salvo com sucesso.');
    e.currentTarget.reset();
    load();
  }

  return (
    <section>
      <h2>Painel de eventos</h2>
      <form className="card" onSubmit={onSubmit}>
        <label>Título</label><input name="title" placeholder="Título" required />
        <label>Slug</label><input name="slug" placeholder="show-cidade-2026" required />
        <label>Cidade</label><input name="city" placeholder="Campinas" required />
        <label>Estado</label><input name="state" placeholder="SP" required />
        <label>Gênero</label><input name="genre" placeholder="Rock" required />
        <label>Data e hora</label><input name="date" type="datetime-local" required />
        <label>Local</label><input name="venue" placeholder="Arena" required />
        <label>URL oficial</label><input name="officialUrl" placeholder="https://..." required />
        <button type="submit">Salvar evento</button>
        {message ? <p className="notice-ok">{message}</p> : null}
        {error ? <p className="notice-error">{error}</p> : null}
      </form>
      <div className="grid">
        {items.map((item) => <article className="card" key={item.slug}><strong>{item.title}</strong><p className="meta">{item.city}/{item.state} • {item.genre}</p></article>)}
      </div>
    </section>
  );
}
