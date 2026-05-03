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
npm run prisma:seed
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

## Erros comuns ao salvar no admin
- `Sem conexão com o banco...`:
  - em **Vercel > Settings > Environment Variables**, adicione `DATABASE_URL` também em **Preview** (não só Production)
  - depois faça Redeploy
- `Tabela Event/Post não encontrada...`:
  - rode `npm run prisma:deploy` no mesmo banco usado pela Vercel
- `Slug já existe`:
  - use slug diferente para novo evento/post
- `URL oficial deve começar com http:// ou https://`:
  - preencha URL completa (ex: `https://site.com/ingressos`)

## Sequência recomendada para Vercel
1. Configurar `DATABASE_URL`, `ADMIN_USER`, `ADMIN_PASS` em Production e Preview.
2. Rodar migrations no banco: `npm run prisma:deploy`.
3. Popular com exemplos: `npm run prisma:seed`.
4. Redeploy e testar em `/admin/eventos` e `/admin/blog`.

## Status do MVP
- Admin protegido por login
- APIs admin protegidas por middleware
- Persistência de eventos e posts em PostgreSQL via Prisma
- Fallback com conteúdo sample no frontend quando banco estiver vazio
