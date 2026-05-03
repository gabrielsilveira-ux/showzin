# Showzin Portal

Portal de descoberta de shows e eventos com blog no domínio principal, preparado para deploy na Vercel.

## Stack
- Next.js (App Router)
- TypeScript
- PostgreSQL + Prisma

## Rodar localmente
```bash
npm install
cp .env.example .env.local
npm run prisma:generate
npm run prisma:migrate
npm run dev
```

## Variáveis de ambiente
```bash
DATABASE_URL="postgresql://user:pass@host:5432/showzin"
ADMIN_USER=admin
ADMIN_PASS=admin123
```

## Login Admin
Acesse `/login` para autenticar e entrar no painel.

## Status do MVP
- Admin protegido por login
- APIs admin protegidas por middleware
- Persistência de eventos e posts em PostgreSQL via Prisma
