import { db } from '@/lib/db';
import { events as sampleEvents } from '@/lib/data';

export async function listEvents() {
  try {
    const dbEvents = await db.event.findMany({ orderBy: { date: 'asc' } });
    if (dbEvents.length > 0) return dbEvents;
    return sampleEvents.map((event) => ({ ...event, date: new Date(event.date) }));
  } catch (error) {
    console.error('listEvents error', error);
    return sampleEvents.map((event) => ({ ...event, date: new Date(event.date) }));
  }
}

export async function getEventBySlug(slug: string) {
  try {
    const dbEvent = await db.event.findUnique({ where: { slug } });
    if (dbEvent) return dbEvent;
    const sample = sampleEvents.find((item) => item.slug === slug);
    return sample ? { ...sample, date: new Date(sample.date) } : null;
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
