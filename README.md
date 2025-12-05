# Enabion BCOS - Phase 1 (X-first, MVP)

Enabion BCOS (Business Collaboration OS by Enabion) - Phase 1 (X-first) MVP. The hero is company X; vendors Y are handled as Vendor-lite / Y-lite (guest portal + responses + basic workspace).

This repository holds the code for Phase 1 (X-first MVP) and is governed by `docs/Phase1_MVP-Spec.md` (single source of truth).

---

## Repo structure

```text
/apps
  /web        # Next.js frontend (X + Y-lite)
  /api        # Backend API / BCOS Core (placeholder; API routes currently live in /apps/web)
/packages
  /ui         # shared UI components (placeholder)
  /core       # domain logic, models, helpers
/infra       # IaC / env config (optional in M0)
/docs        # spec, architecture notes, links
```

## Tech stack (Stack v0 - M0)

- Frontend: Next.js (App Router), React, TypeScript; styling: base CSS for now (Tailwind/TBD in later iterations).
- i18n: EN (default), PL, DE planned in M1 with a library like `next-intl`.
- Backend/API: Next.js Route Handlers in `apps/web`; `/apps/api` as placeholder for future core split.
- Database: Postgres (EU) + Prisma (`packages/core/prisma/schema.prisma`, model `Organization`).
- AI Gateway: module in `packages/core/src/ai/*` (provider-neutral).
- Tooling: Node.js LTS 20.x, `pnpm@8.15.6`, TypeScript, ESLint/Prettier; CI lint in `.github/workflows/lint.yml`.

## Environments

- Local: `pnpm dev` (Next dev server at http://localhost:3000), env from `.env.local`.
- Dev (Vercel, EU): auto-deploy from `dev`; required env: `APP_ENV=dev`, `DATABASE_URL` (Postgres EU, e.g., Neon/Supabase). Dev URL: https://enabion-bcos-git-dev-staadits-projects.vercel.app
- Root domain (Phase 1): https://enabion.com — landing + app, no subdomains in Phase 1.
- Secrets: keep in `.env.local` locally; set the same keys in Vercel Development.

## Getting started (local)

1) Install Node.js LTS (>= 20.x) and pnpm (`corepack enable`).
2) Clone the repo:
   ```bash
   git clone https://github.com/staadit/enabion-bcos.git
   cd enabion-bcos
   ```
3) Install dependencies: `pnpm install`.
4) Copy `.env.example` to `.env.local` and fill:
   - `DATABASE_URL` - Postgres in EU,
   - `APP_ENV=dev`,
   - other keys (e.g., AI) when they appear.
5) Prisma: `pnpm db:generate`, and when DB is reachable `pnpm db:migrate`.
6) Run web: `pnpm dev` -> http://localhost:3000.
7) Healthcheck: http://localhost:3000/api/health (with DB: `status: "ok"`, without DB: `status: "degraded"`).
8) Registration flow (M1.1): open http://localhost:3000/register to create org + first user (calls POST `/api/auth/register`).

## Docs

- Product spec (SSOT): `./docs/Phase1_MVP-Spec.md` (M0-M6 scope and checklists, EN-only).
- Business Playbook: `./docs/EnabionNexus_Playbook_v1.6.md`.
- CTO log: `./docs/cto/ctolog_2025-12.md` (operational log).
- README and board must stay in sync with the spec (see section 12 in the spec).

## Tests

- Core domain (auth/tenancy): `pnpm --filter @enabion/core test` (requires `DATABASE_URL` set, e.g., from `.env.local`).

## Ways of working (CEO + Mieszko2.0 + Ewa)

- SSOT (product): `docs/Phase1_MVP-Spec.md`. If anything conflicts with README/issues, the spec wins.
- SSOT (delivery): GitHub Project "Enabion-BCOS" (columns Backlog -> In progress -> Ready for demo -> Done).
- Roles: CEO (business), Mieszko2.0 (product/tech decisions), Ewa (delivery + board<->spec sync).
- Routine: start day by reviewing the spec (sections 5/7/9/10/12) and update issues/board; if board != spec, set `Drift: YES` in spec Board Sync until aligned.
