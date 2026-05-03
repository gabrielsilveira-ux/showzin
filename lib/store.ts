import { events as seedEvents, posts as seedPosts, type EventItem, type BlogPost } from './data';

const globalAny = globalThis as unknown as {
  showzinStore?: { events: EventItem[]; posts: BlogPost[] };
};

if (!globalAny.showzinStore) {
  globalAny.showzinStore = {
    events: [...seedEvents],
    posts: [...seedPosts]
  };
}

export const store = globalAny.showzinStore;
