import { NextResponse } from 'next/server';
import { store } from '@/lib/store';

export async function GET() {
  return NextResponse.json(store.posts);
}

export async function POST(req: Request) {
  const body = await req.json();
  const item = {
    slug: body.slug,
    title: body.title,
    excerpt: body.excerpt,
    city: body.city || undefined,
    publishedAt: body.publishedAt
  };
  store.posts.unshift(item);
  return NextResponse.json(item, { status: 201 });
}
