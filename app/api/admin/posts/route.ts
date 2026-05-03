import { NextResponse } from 'next/server';
import { createPost, listPosts } from '@/lib/repos/posts';

export async function GET() {
  return NextResponse.json(await listPosts());
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const required = ['slug', 'title', 'excerpt', 'publishedAt'];
    for (const field of required) {
      if (!body[field]) return NextResponse.json({ error: `Campo obrigatório: ${field}` }, { status: 400 });
    }
    const item = await createPost(body);
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    console.error('POST /api/admin/posts', error);
    return NextResponse.json({ error: 'Falha ao salvar post. Verifique DATABASE_URL e migrations do Prisma.' }, { status: 500 });
  }
}
