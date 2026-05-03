export const dynamic = 'force-dynamic';
import Link from 'next/link';
import { getPostBySlug } from '@/lib/repos/posts';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return <p>Post não encontrado.</p>;

  return (
    <article className="card">
      <p className="meta">{new Date(post.publishedAt).toLocaleDateString('pt-BR')} {post.city ? `• ${post.city}` : ''}</p>
      <h1>{post.title}</h1>
      <p>{post.excerpt}</p>
      <p className="meta">Estrutura pronta para conteúdo completo com heading, blocos e links internos para eventos/cidades.</p>
      <Link href="/blog">← Voltar para o blog</Link>
    </article>
  );
}
