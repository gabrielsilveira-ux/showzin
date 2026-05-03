import { db } from '@/lib/db';

export async function listEvents() {
  return db.event.findMany({ orderBy: { date: 'asc' } });
}

export async function getEventBySlug(slug: string) {
  return db.event.findUnique({ where: { slug } });
}

export async function createEvent(input: {
  slug: string; title: string; city: string; state: string; genre: string; date: string; venue: string; officialUrl: string;
}) {
  return db.event.create({
    data: { ...input, date: new Date(input.date) }
  });
}
