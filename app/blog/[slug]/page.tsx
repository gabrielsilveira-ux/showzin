import { getPostBySlug } from '@/lib/repos/posts';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return <p>Post não encontrado.</p>;
  return <article className="card"><h2>{post.title}</h2><p>{post.excerpt}</p></article>;
}
