export const dynamic = 'force-dynamic';
import Link from 'next/link';
import { listPosts } from '@/lib/repos/posts';

export default async function BlogPage() {
  const posts = await listPosts();

  return (
    <section>
      <div className="hero">
        <h1>Blog do Showzin</h1>
        <p>Guias por cidade, dicas de agenda cultural e conteúdos para aumentar descoberta orgânica.</p>
      </div>
      <div className="grid">
        {posts.map((p) => (
          <article className="card" key={p.slug}>
            <p className="meta">{new Date(p.publishedAt).toLocaleDateString('pt-BR')} {p.city ? `• ${p.city}` : ''}</p>
            <h2>{p.title}</h2>
            <p>{p.excerpt}</p>
            <Link className="btn" href={`/blog/${p.slug}`}>Ler artigo</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
