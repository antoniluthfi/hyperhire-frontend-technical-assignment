# Hyperhire Frontend Technical Assignment

Landing page implementation based on the figma brief using Next.js 14 (TypeScript) with the App Router, Atomic Design, server‑side rendering via API Routes, TailwindCSS, and Framer Motion animations.

Design reference: https://www.figma.com/design/RAjThJ3L3gvoXlRQOqT4Hi/Assignment-for-Coin-siren--Copy-?node-id=0-1&p=f&t=29FMTu0TlHVk6NLW-0

## Tech Stack

- Next.js 14 (`app/` router) + TypeScript
- TailwindCSS with custom keyframes
- Framer Motion for rich interactions
- ESLint + Prettier

## Highlights

- SSR + API Routes: static sample data is provided in `app/api/*/route.ts`, then fetched in the server component `app/page.tsx` using `Promise.all` (parallel). Requests use `cache: "no-store"` to deliver per‑request freshness.
- Atomic Design: components are organized into `atoms`, `molecules`, `organisms`, and `templates` for clear responsibilities and scalability.
- Animations:
  - Tailwind keyframes (`fade-in`, `fade-in-up`) for hero text and subtle fades.
  - Framer Motion for the categories marquee and candidate carousel; honors `prefers-reduced-motion` for accessibility.
- SEO: `app/layout.tsx` sets `Metadata`, Open Graph, Twitter cards, and an Organization JSON‑LD. `app/robots.ts` and `app/sitemap.ts` are configured.

## Project Structure

- `app/` — App Router pages, metadata, robots, sitemap
- `app/api/` — JSON endpoints: `candidates`, `categories`, `services`, `contact`
- `components/` — Atomic Design layers
- `hooks/` — `use-window-size` for responsive logic
- `lib/` — utilities (`cn`, `getSiteUrl`)
- `types/` — TypeScript data models
- `public/images/` — static assets

## API Endpoints

All endpoints respond to `GET` with typed JSON:

- `/api/candidates` → `Candidate[]`
- `/api/categories` → `Category[]`
- `/api/services` → `ServiceCard[]`
- `/api/contact` → `ContactItem[]`
  These are consumed on the server in `app/page.tsx`.

## Run Locally

Prerequisites: Node.js 18+

```bash
# install deps
yarn
# start dev server
yarn dev
# open in browser
open http://localhost:3000
```

Environment:

- `NEXT_PUBLIC_SITE_URL` (optional) — used by metadata/robots/sitemap. Defaults to `http://localhost:3000`.

## Build & Production

```bash
# build for production
yarn build
# start production server
yarn start
```

## Deploy

Recommended: Vercel

1. Push the repo to GitHub.
2. Import on Vercel and set `NEXT_PUBLIC_SITE_URL` to your domain.
3. Vercel builds with `yarn build` and hosts the app.

Self‑hosting (Node):

```bash
yarn build
yarn start
# behind a reverse proxy (nginx) and set NEXT_PUBLIC_SITE_URL accordingly
```

## Quality

- Lint: `yarn lint` (fix: `yarn lint:fix`)
- Format: `yarn format`

## Brief Compliance

1. NextJS 14 (TS) — done
2. Atomic Design — applied
3. SSR with API Routes — parallel calls via `Promise.all`
4. TailwindCSS — used with custom animations
5. ESLint & Prettier — configured
6. Yellow text animations — implemented via Tailwind keyframes/Framer Motion
7. 3rd‑party library — `framer-motion`

## Notes

To switch from sample JSON to real data, replace `app/api/*` handlers with external fetches and adopt appropriate caching (ISR/`force-cache`) as needed.
