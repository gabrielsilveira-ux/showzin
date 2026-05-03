export type EventItem = {
  slug: string;
  title: string;
  city: string;
  state: string;
  genre: string;
  date: string;
  venue: string;
  officialUrl: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  city?: string;
  publishedAt: string;
};

export const events: EventItem[] = [
  {
    slug: 'festival-indie-campinas-2026',
    title: 'Festival Indie Campinas 2026',
    city: 'campinas',
    state: 'sp',
    genre: 'rock',
    date: '2026-07-19T15:00:00-03:00',
    venue: 'Largo do Rosário',
    officialUrl: 'https://example.com/ingressos/festival-indie-campinas-2026'
  }
];

export const posts: BlogPost[] = [
  {
    slug: 'shows-em-campinas-maio-2026',
    title: 'Shows em Campinas em maio de 2026: guia rápido',
    excerpt: 'Seleção de eventos próximos com dicas de hospedagem e deslocamento.',
    city: 'campinas',
    publishedAt: '2026-05-01'
  }
];
