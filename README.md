# Enabion BCOS - Phase 1 (X-first)

Foundation of the Enabion Business Collaboration OS (BCOS): monorepo with Next.js (App Router + TypeScript), shared core package, Prisma/Postgres, and ready-to-deploy wiring for the dev environment.

## Stack & package manager

- pnpm workspace (`pnpm@8.15.6`) managing `apps/*` and `packages/*`.
- Next.js 14 (App Router, TypeScript, ESLint/Prettier).
- Prisma ORM targeting Postgres (EU), with `Organization` as the first model.
- Shared domain/DB utilities in `@enabion/core`, consumed by the web app.
- GitHub Actions lint workflow (`.github/workflows/lint.yml`).

## Repo structure

- `apps/web` - Next.js app (App Router) with landing page and API routes.
- `packages/core` - domain types, Prisma schema/client helpers, AI gateway placeholder.
- `infra/` - infra-as-code placeholder for later phases.
- `docs/` - product specs (master: `docs/Phase1_MVP-Spec.md`, current version noted inside the file).

## Getting started (local)

1. Install Node.js 20+ and pnpm 8.  
2. `pnpm install`  
3. `cp .env.example .env` and set `DATABASE_URL` + `APP_ENV` (e.g., `dev`).  
4. Generate Prisma client: `pnpm db:generate`.  
5. First migration (once DB is reachable): `pnpm db:migrate` (uses the `init` migration name).  
6. Run the app: `pnpm dev` (Next dev server at http://localhost:3000).  

The app starts even without a database; `/api/health` will report `status: "degraded"` until `DATABASE_URL` is valid and reachable.

## Environment

- `DATABASE_URL` - Postgres connection string (EU region).  
- `APP_ENV` - environment label (`dev` for dev branch deploys).  

Store secrets in `.env` locally; set the same keys in Vercel for the **Development** environment.

## Database & Prisma

- Schema: `packages/core/prisma/schema.prisma` (`Organization` with `id`, `orgType`, `name`, timestamps).  
- Scripts (root): `pnpm db:generate` (Prisma client) and `pnpm db:migrate` (first migration).  
- Prisma client and DB helpers live in `packages/core/src/db/*`; `getPrismaClient` handles missing DB config gracefully.

## Healthcheck API

- Route: `/api/health` (Next.js route handler).  
- Response fields: `status`, `organizationsCount` (may be `null` if DB unavailable), `env`.  

Test locally:

```bash
curl -s http://localhost:3000/api/health | jq
```

Expect `status: "ok"` with a count once DB is reachable; otherwise `status: "degraded"`.

## Workspaces & shared core

- Workspace alias: `@enabion/core` (transpiled via `next.config.mjs` `transpilePackages`).  
- Domain stubs: `packages/core/src/domain/*` (expand in Phase 1).  
- AI gateway placeholder: `packages/core/src/ai/gateway.ts` (dummy healthcheck).

## Deploy (dev on Vercel)

- Connect repo to Vercel; set the project root to the repo root.  
- Branch flow: `feature/*` -> PR into `dev` -> deploys to the **Development** environment on Vercel.  
- Env vars for the Vercel **Development** environment:  
  - `APP_ENV=dev`  
  - `DATABASE_URL` (use your managed Postgres in EU)  

Build: Vercel auto-detects Next.js; pnpm is supported (see `packageManager` in `package.json`).

## Linting & formatting

- `pnpm lint` runs lint across workspaces (Next + core).  
- `pnpm format` formats across packages/apps.  
- CI: `.github/workflows/lint.yml` runs on `dev` and `main` pushes/PRs.

## M0 status

- [x] Monorepo scaffold (`apps/`, `packages/`, `infra/`, `docs/`) with pnpm workspaces.  
- [x] Next.js app (`apps/web`) with starter page.  
- [x] Core package wiring (`@enabion/core` import path) + domain stubs.  
- [x] Prisma config + `Organization` model + migration/generate scripts.  
- [x] `/api/health` with graceful DB handling.  
- [x] Dev deploy plan for Vercel (`dev` branch + env keys).  
- [x] ESLint/Prettier and lint workflow.  
- [ ] Phase 1 feature modules (Intent Studio, etc.).  

## Process & AI collaboration (CEO + Mieszko2.0 + Ewa)

- **Single source of truth (product):**  
  Phase 1 product scope, modules, FR/NFR, data model and milestones M0-M6 sa opisane w `docs/Phase1_MVP-Spec.md`. W przypadku konfliktu miedzy README / issues / Project -> ten plik wygrywa.

- **Single source of truth (delivery):**  
  GitHub Project "Enabion-BCOS" jest widokiem zadan. Wszystkie issues powinny odpowiadac elementom M0-M6 opisanym w sekcji `12. Execution & Backlog` w `docs/Phase1_MVP-Spec.md`.  

- **Role:**  
  - CEO - opisuje potrzeby i decyzje biznesowe w `docs/Phase1_MVP-Spec.md` (sekcje 1-7, 12).  
  - Mieszko2.0 - aktualizuje spec (moduly, FR/NFR, architektura) i proponuje kolejne kroki.  
  - Ewa - implementuje kod i infrastrukture zgodnie ze specem, synchronizuje GitHub Project z sekcja 12 speca.  

- **Daily routine:**  
  - CEO zaczyna dzien od krotkiej notatki do Mieszko2.0 (wg szablonu w sekcji `0.2 Working with AI` w `docs/Phase1_MVP-Spec.md` - aktualna wersja pliku jest masterem).  
  - Ewa przed praca przeglada `docs/Phase1_MVP-Spec.md` (sekcje 5, 7, 9, 10 i 12) i aktualizuje issues / Project, jesli spec sie zmienil.  
  - Jesli board != spec (nowe zadania lub zmiany scope), w specu w sekcji "Board Sync Status" ustawiamy `Drift: YES` dopoki Ewa nie zsynchronizuje GitHub Project z dokumentem.  

For detailed rules, daily prompt templates for CEO and Ewa, and Definition of Done for M0-M6, see `docs/Phase1_MVP-Spec.md` (sections `0.2 Working with AI` and `12. Execution & Backlog`).
