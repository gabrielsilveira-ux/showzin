import { NextResponse } from 'next/server';
import { store } from '@/lib/store';

export async function GET() {
  return NextResponse.json(store.events);
}

export async function POST(req: Request) {
  const body = await req.json();
  const item = {
    slug: body.slug,
    title: body.title,
    city: body.city,
    state: body.state,
    genre: body.genre,
    date: body.date,
    venue: body.venue,
    officialUrl: body.officialUrl
  };
  store.events.unshift(item);
  return NextResponse.json(item, { status: 201 });
}
