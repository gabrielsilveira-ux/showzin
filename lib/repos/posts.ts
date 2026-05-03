import { db } from '@/lib/db';

export async function listPosts() {
  return db.post.findMany({ orderBy: { publishedAt: 'desc' } });
}

export async function getPostBySlug(slug: string) {
  return db.post.findUnique({ where: { slug } });
}

export async function createPost(input: { slug: string; title: string; excerpt: string; city?: string; publishedAt: string }) {
  return db.post.create({ data: { ...input, publishedAt: new Date(input.publishedAt) } });
}
