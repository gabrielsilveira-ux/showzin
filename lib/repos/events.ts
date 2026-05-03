import { db } from '@/lib/db';

export async function listEvents() {
  try {
    return await db.event.findMany({ orderBy: { date: 'asc' } });
  } catch (error) {
    console.error('listEvents error', error);
    return [];
  }
}

export async function getEventBySlug(slug: string) {
  try {
    return await db.event.findUnique({ where: { slug } });
  } catch (error) {
    console.error('getEventBySlug error', error);
    return null;
  }
}

export async function createEvent(input: {
  slug: string; title: string; city: string; state: string; genre: string; date: string; venue: string; officialUrl: string;
}) {
  return db.event.create({
    data: { ...input, date: new Date(input.date) }
  });
}
