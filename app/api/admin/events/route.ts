import { NextResponse } from 'next/server';
import { Prisma } from '@prisma/client';
import { createEvent, listEvents } from '@/lib/repos/events';

function prismaHelpMessage(error: unknown) {
  if (error instanceof Prisma.PrismaClientInitializationError) {
    return 'Sem conexão com o banco. Confira DATABASE_URL no ambiente Preview da Vercel e rode prisma migrate deploy.';
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === 'P2002') return 'Slug já existe. Use um slug único para o evento.';
    if (error.code === 'P2021') return 'Tabela Event não encontrada. Rode prisma migrate deploy no banco desse ambiente.';
  }

  return 'Falha ao salvar evento. Verifique DATABASE_URL e migrations do Prisma.';
}

export async function GET() {
  return NextResponse.json(await listEvents());
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const required = ['slug', 'title', 'city', 'state', 'genre', 'date', 'venue', 'officialUrl'];
    for (const field of required) {
      if (!body[field]) return NextResponse.json({ error: `Campo obrigatório: ${field}` }, { status: 400 });
    }

    if (!String(body.officialUrl).startsWith('http')) {
      return NextResponse.json({ error: 'URL oficial deve começar com http:// ou https://.' }, { status: 400 });
    }

    const item = await createEvent(body);
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    console.error('POST /api/admin/events', error);
    return NextResponse.json({ error: prismaHelpMessage(error) }, { status: 500 });
  }
}
