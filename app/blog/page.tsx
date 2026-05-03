import Link from 'next/link';
import { listPosts } from '@/lib/repos/posts';

export default async function BlogPage() {
  const posts = await listPosts();
  return <div>{posts.map(p => <article className="card" key={p.slug}><h2>{p.title}</h2><p>{p.excerpt}</p><Link href={`/blog/${p.slug}`}>Ler artigo</Link></article>)}</div>;
}
