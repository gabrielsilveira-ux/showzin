import { db } from '@/lib/db';

export async function listPosts() {
  try {
    return await db.post.findMany({ orderBy: { publishedAt: 'desc' } });
  } catch (error) {
    console.error('listPosts error', error);
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  try {
    return await db.post.findUnique({ where: { slug } });
  } catch (error) {
    console.error('getPostBySlug error', error);
    return null;
  }
}

export async function createPost(input: { slug: string; title: string; excerpt: string; city?: string; publishedAt: string }) {
  return db.post.create({ data: { ...input, publishedAt: new Date(input.publishedAt) } });
}
