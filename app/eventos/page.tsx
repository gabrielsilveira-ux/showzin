import Link from 'next/link';
import { listEvents } from '@/lib/repos/events';

export default async function EventosPage() {
  const events = await listEvents();
  return <div>{events.map(e => <div className="card" key={e.slug}><h3>{e.title}</h3><Link href={`/eventos/${e.slug}`}>Detalhes</Link></div>)}</div>;
}
