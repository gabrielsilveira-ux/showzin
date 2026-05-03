import { db } from '@/lib/db';
import { posts as samplePosts } from '@/lib/data';

export async function listPosts() {
  try {
    const dbPosts = await db.post.findMany({ orderBy: { publishedAt: 'desc' } });
    if (dbPosts.length > 0) return dbPosts;
    return samplePosts.map((post) => ({ ...post, publishedAt: new Date(post.publishedAt) }));
  } catch (error) {
    console.error('listPosts error', error);
    return samplePosts.map((post) => ({ ...post, publishedAt: new Date(post.publishedAt) }));
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const dbPost = await db.post.findUnique({ where: { slug } });
    if (dbPost) return dbPost;
    const sample = samplePosts.find((item) => item.slug === slug);
    return sample ? { ...sample, publishedAt: new Date(sample.publishedAt) } : null;
  } catch (error) {
    console.error('getPostBySlug error', error);
    return null;
  }
}

export async function createPost(input: { slug: string; title: string; excerpt: string; city?: string; publishedAt: string }) {
  return db.post.create({ data: { ...input, publishedAt: new Date(input.publishedAt) } });
}
