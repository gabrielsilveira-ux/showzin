import Link from 'next/link';
import { store } from '@/lib/store';

export default function BlogPage() {
  return <div>{store.posts.map(p => <article className="card" key={p.slug}><h2>{p.title}</h2><p>{p.excerpt}</p><Link href={`/blog/${p.slug}`}>Ler artigo</Link></article>)}</div>;
}
