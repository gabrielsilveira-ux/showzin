export const dynamic = 'force-dynamic';
import { getEventBySlug } from '@/lib/repos/events';

export default async function EventoDetalhe({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) return <p>Evento não encontrado.</p>;
  return (
    <article className="card">
      <h2>{event.title}</h2>
      <p>{event.venue}</p>
      <p>{new Date(event.date).toLocaleString('pt-BR')}</p>
      <a href={event.officialUrl} target="_blank">Comprar ingresso oficial</a>
      <p>Afiliados (MVP): hotéis e translado serão exibidos aqui.</p>
    </article>
  );
}
