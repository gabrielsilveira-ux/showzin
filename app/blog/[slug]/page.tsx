import { posts } from '@/lib/data';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <p>Post não encontrado.</p>;
  return <article className="card"><h2>{post.title}</h2><p>{post.excerpt}</p></article>;
}
