export const dynamic = 'force-dynamic';
import Link from 'next/link';
import { listEvents } from '@/lib/repos/events';

export default async function EventosPage() {
  const events = await listEvents();

  return (
    <section>
      <div className="hero">
        <h1>Agenda completa de eventos</h1>
        <p>Explore shows por cidade e gênero. Atualizado via painel administrativo.</p>
      </div>
      <div className="grid">
        {events.map((e) => (
          <article className="card" key={e.slug}>
            <h3>{e.title}</h3>
            <p className="meta">{e.city}/{e.state} • {e.genre}</p>
            <p className="meta">{new Date(e.date).toLocaleString('pt-BR')}</p>
            <Link className="btn" href={`/eventos/${e.slug}`}>Detalhes</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
