import { NextResponse } from 'next/server';
import { Prisma } from '@prisma/client';
import { createPost, listPosts } from '@/lib/repos/posts';

function prismaHelpMessage(error: unknown) {
  if (error instanceof Prisma.PrismaClientInitializationError) {
    return 'Sem conexão com o banco. Confira DATABASE_URL no ambiente Preview da Vercel e rode prisma migrate deploy.';
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === 'P2002') return 'Slug já existe. Use um slug único para o post.';
    if (error.code === 'P2021') return 'Tabela Post não encontrada. Rode prisma migrate deploy no banco desse ambiente.';
  }

  return 'Falha ao salvar post. Verifique DATABASE_URL e migrations do Prisma.';
}

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
    return NextResponse.json({ error: prismaHelpMessage(error) }, { status: 500 });
  }
}
