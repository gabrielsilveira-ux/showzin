import { NextResponse } from 'next/server';
import { Prisma } from '@prisma/client';
import { createEvent, listEvents } from '@/lib/repos/events';

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
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      return NextResponse.json({ error: 'Slug já existe. Use um slug único para o evento.' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Falha ao salvar evento. Verifique DATABASE_URL e migrations do Prisma.' }, { status: 500 });
  }
}
