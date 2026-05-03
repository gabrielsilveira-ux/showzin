import Link from 'next/link';
import { listEvents } from '@/lib/repos/events';

export default async function HomePage() {
  const events = await listEvents();
  return (
    <section>
      <h2>Portal de shows e eventos</h2>
      <p>Filtro MVP por cidade/estado/gênero com priorização por data próxima será integrado ao backend.</p>
      {events.map((event) => (
        <article className="card" key={event.slug}>
          <h3>{event.title}</h3>
          <p>{event.city.toUpperCase()} - {event.state.toUpperCase()} · {event.genre}</p>
          <Link href={`/eventos/${event.slug}`}>Ver evento</Link>
        </article>
      ))}
    </section>
  );
}
