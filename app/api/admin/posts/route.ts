import { NextResponse } from 'next/server';
import { createPost, listPosts } from '@/lib/repos/posts';

export async function GET() {
  return NextResponse.json(await listPosts());
}

export async function POST(req: Request) {
  const body = await req.json();
  const item = await createPost(body);
  return NextResponse.json(item, { status: 201 });
}
