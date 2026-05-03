import Link from 'next/link';
import { store } from '@/lib/store';

export default function EventosPage() {
  return <div>{store.events.map(e => <div className="card" key={e.slug}><h3>{e.title}</h3><Link href={`/eventos/${e.slug}`}>Detalhes</Link></div>)}</div>;
}
