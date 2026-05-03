import Link from 'next/link';
import { events } from '@/lib/data';

export default function EventosPage() {
  return <div>{events.map(e => <div className="card" key={e.slug}><h3>{e.title}</h3><Link href={`/eventos/${e.slug}`}>Detalhes</Link></div>)}</div>;
}
