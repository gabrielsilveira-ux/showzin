export const dynamic = 'force-dynamic';
import Link from 'next/link';
import { getEventBySlug } from '@/lib/repos/events';

export default async function EventoDetalhe({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) return <p>Evento não encontrado.</p>;

  return (
    <article className="card">
      <p className="meta">Evento</p>
      <h1>{event.title}</h1>
      <p><strong>Local:</strong> {event.venue}</p>
      <p><strong>Cidade:</strong> {event.city}/{event.state}</p>
      <p><strong>Data:</strong> {new Date(event.date).toLocaleString('pt-BR')}</p>
      <p><strong>Gênero:</strong> {event.genre}</p>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <a className="btn" href={event.officialUrl} target="_blank">Comprar ingresso oficial</a>
        <Link href="/eventos">Voltar para eventos</Link>
      </div>
      <hr style={{ borderColor: 'rgba(154,167,214,.25)', margin: '16px 0' }} />
      <h3>Planeje sua viagem</h3>
      <p className="meta">Em breve: blocos de afiliados para hotéis, translado e restaurantes próximos.</p>
    </article>
  );
}
