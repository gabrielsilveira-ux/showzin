# Showzin Portal

Portal de descoberta de shows e eventos com blog no domínio principal, preparado para deploy na Vercel.

## Stack
- Next.js (App Router)
- TypeScript

## Estrutura
- `app/` rotas públicas + admin MVP
- `components/` componentes de UI reutilizáveis
- `lib/` dados mock e utilitários

## Rodar localmente
```bash
npm install
npm run dev
```

## Login Admin (MVP)
Defina no `.env.local`:
```bash
ADMIN_USER=admin
ADMIN_PASS=admin123
```
Acesse `/login` para autenticar e entrar no painel.

## Próximos passos
- Integrar banco PostgreSQL
- Implementar autenticação robusta (NextAuth/Clerk)
- Conectar programa de afiliados
