# Sofa Decor — Painel

*Landing, store, and admin panel for Sofa Decor House (React + Vite).*

Site institucional e vitrine de produtos, com área administrativa para gestão de produtos e usuários. Stack: **React 18**, **TypeScript**, **Vite**, **MUI** e **React Router**.

## Requisitos

- Node.js 24.x (exigido pela Vercel; use `.nvmrc` ou `nvm use`)
- npm

## Configuração

```bash
npm install
cp .env.example .env
```

Edite `.env` com os valores da sua API e do site (veja abaixo).

## Variáveis de ambiente

| Variável | Descrição |
|----------|-----------|
| `VITE_API_BASE_URL` | URL base da API backend (axios). |
| `VITE_SITE_URL` | URL pública do site em produção, **sem** barra final (ex.: `https://www.exemplo.com`). Usada em SEO (canonical, OG) e JSON-LD. Se vazio, usa `window.location.origin` no cliente. |
| `VITE_GOOGLE_API_KEY` | Chave da API Google (ex.: mapas), quando usada no app. |

No **Vercel** (ou outro host), defina as mesmas variáveis no painel do projeto, com prefixo `VITE_`.

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento (Vite, modo development). |
| `npm run build` | Typecheck (`tsc`) + build de produção em `dist/`. |
| `npm run preview` | Pré-visualização local do build de produção. |
| `npm run start` | Vite em modo production (uso pontual). |
| `npm run lint` | ESLint no projeto. |

## Rotas principais

| Caminho | Conteúdo |
|---------|----------|
| `/` | Landing |
| `/sobre` | Sobre |
| `/loja` | Listagem de produtos |
| `/loja/produto/:productName` | Detalhe do produto (nome na URL codificado) |
| `/painel/*` | Admin (login, produtos, usuários, edição) — rotas aninhadas sob `/painel` |

Arquivos estáticos de SEO: `public/robots.txt`, `public/sitemap.xml` (ajuste a URL base conforme o domínio real).

## Build para produção

```bash
npm run build
```

A pasta `dist/` é o que deve ser publicado. Em hosts como a Vercel, o preset **Vite** costuma detectar `npm run build` e o diretório de saída automaticamente.