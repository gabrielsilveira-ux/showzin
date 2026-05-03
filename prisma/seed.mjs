import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const events = [
  {
    slug: 'festival-indie-campinas-2026',
    title: 'Festival Indie Campinas 2026',
    city: 'Campinas',
    state: 'SP',
    genre: 'Rock',
    date: new Date('2026-07-19T15:00:00-03:00'),
    venue: 'Largo do Rosário',
    officialUrl: 'https://example.com/ingressos/festival-indie-campinas-2026'
  },
  {
    slug: 'noite-sertaneja-jundiai-2026',
    title: 'Noite Sertaneja Jundiaí',
    city: 'Jundiaí',
    state: 'SP',
    genre: 'Sertanejo',
    date: new Date('2026-08-02T20:30:00-03:00'),
    venue: 'Parque da Uva',
    officialUrl: 'https://example.com/ingressos/noite-sertaneja-jundiai-2026'
  },
  {
    slug: 'sunset-eletronico-ribeirao-preto-2026',
    title: 'Sunset Eletrônico Ribeirão Preto',
    city: 'Ribeirão Preto',
    state: 'SP',
    genre: 'Eletrônico',
    date: new Date('2026-08-15T16:00:00-03:00'),
    venue: 'Arena Independência',
    officialUrl: 'https://example.com/ingressos/sunset-eletronico-ribeirao-preto-2026'
  }
];

const posts = [
  {
    slug: 'shows-em-campinas-maio-2026',
    title: 'Shows em Campinas em maio de 2026: guia rápido',
    excerpt: 'Seleção de eventos próximos com dicas de hospedagem e deslocamento.',
    city: 'Campinas',
    publishedAt: new Date('2026-05-01')
  },
  {
    slug: 'o-que-fazer-em-jundiai-fim-de-semana',
    title: 'O que fazer em Jundiaí no fim de semana',
    excerpt: 'Roteiro com eventos, restaurantes e opções de hospedagem para curtir a cidade.',
    city: 'Jundiaí',
    publishedAt: new Date('2026-05-03')
  },
  {
    slug: 'agenda-musical-interior-sp-agosto-2026',
    title: 'Agenda musical do interior de SP em agosto de 2026',
    excerpt: 'Resumo dos principais shows do mês com links oficiais e sugestões de viagem.',
    city: 'São Paulo',
    publishedAt: new Date('2026-05-05')
  }
];

async function main() {
  await prisma.event.createMany({ data: events, skipDuplicates: true });
  await prisma.post.createMany({ data: posts, skipDuplicates: true });
  console.log('Seed concluído com sucesso.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
