import Link from 'next/link';
import { posts } from '@/lib/data';

export default function BlogPage() {
  return <div>{posts.map(p => <article className="card" key={p.slug}><h2>{p.title}</h2><p>{p.excerpt}</p><Link href={`/blog/${p.slug}`}>Ler artigo</Link></article>)}</div>;
}
