import { NextResponse } from 'next/server';
import { createEvent, listEvents } from '@/lib/repos/events';

export async function GET() {
  return NextResponse.json(await listEvents());
}

export async function POST(req: Request) {
  const body = await req.json();
  const item = await createEvent(body);
  return NextResponse.json(item, { status: 201 });
}
