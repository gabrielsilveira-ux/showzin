import { NextResponse } from 'next/server';
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
    const item = await createEvent(body);
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    console.error('POST /api/admin/events', error);
    return NextResponse.json({ error: 'Falha ao salvar evento. Verifique DATABASE_URL e migrations do Prisma.' }, { status: 500 });
  }
}
