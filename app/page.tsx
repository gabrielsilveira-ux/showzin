export const dynamic = 'force-dynamic';
import Link from 'next/link';
import { listEvents } from '@/lib/repos/events';

export default async function HomePage() {
  const events = await listEvents();

  return (
    <section>
      <div className="hero">
        <h1>Descubra shows e eventos no interior de São Paulo</h1>
        <p>Encontre os próximos eventos por cidade, gênero e data. Veja detalhes oficiais, local no mapa e oportunidades de viagem.</p>
      </div>

      <div className="filters">
        <div><label>Cidade</label><input placeholder="Campinas" disabled /></div>
        <div><label>Estado</label><input placeholder="SP" disabled /></div>
        <div><label>Gênero</label><input placeholder="Rock, Sertanejo..." disabled /></div>
        <div><label>Ordenação</label><input placeholder="Mais próximos" disabled /></div>
      </div>

      <h2 className="section-title">Próximos eventos</h2>
      <div className="grid">
        {events.map((event) => (
          <article className="card" key={event.slug}>
            <h3>{event.title}</h3>
            <p className="meta">{event.city.toUpperCase()} - {event.state.toUpperCase()} · {event.genre}</p>
            <p className="meta">{new Date(event.date).toLocaleString('pt-BR')}</p>
            <Link className="btn" href={`/eventos/${event.slug}`}>Ver evento</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
