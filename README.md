# Enabion BCOS - Phase 1 (X-first, MVP)

Enabion BCOS (Business Collaboration OS by Enabion) - Phase 1 (X-first) MVP.
Bohaterem jest firma X; firmy Y obslugujemy jako Vendor-lite / Y-lite (prosty portal + odpowiedzi + podstawowy workspace).

To repozytorium zawiera kod dla Phase 1 (X-first MVP) zgodnie z dokumentem `docs/Phase1_MVP-Spec.md`.

---

## Repo structure

```text
/apps
  /web        # Next.js frontend (X + Y-lite)
  /api        # Backend API / BCOS Core (placeholder; API routes zyja w /apps/web)
/packages
  /ui         # shared UI components (placeholder)
  /core       # domain logic, models, helpers
/infra       # IaC / env config (opcjonalnie w M0)
/docs        # spec, architecture notes, links
```

## Tech stack (Stack v0 - M0)

- Frontend: Next.js (App Router), React, TypeScript; styling: bazowy CSS (Tailwind/TBD w kolejnych iteracjach).
- i18n: EN (domyslny), PL, DE - biblioteka typu `next-intl` planowana w M1.
- Backend/API: Next.js Route Handlers w `apps/web`; `/apps/api` jako placeholder pod wydzielenie core.
- Database: Postgres (EU) + Prisma (`packages/core/prisma/schema.prisma`, model `Organization`).
- AI Gateway: modul w `packages/core/src/ai/*` (neutralny na providera).
- Tooling: Node.js LTS 20.x, `pnpm@8.15.6`, TypeScript, ESLint/Prettier; CI lint w `.github/workflows/lint.yml`.

## Environments

- Local: `pnpm dev` (Next dev server na http://localhost:3000), env z `.env.local`.
- Dev (Vercel, EU): auto-deploy z `dev`; wymagane env: `APP_ENV=dev`, `DATABASE_URL` (Postgres EU, np. Neon/Supabase). Dev URL: https://enabion-bcos-git-dev-staadits-projects.vercel.app
- Secrets: trzymaj w `.env.local` lokalnie; te same klucze ustaw w Vercel Development.

## Getting started (local)

1) Zainstaluj Node.js LTS (>= 20.x) i pnpm (`corepack enable`).
2) Sklonuj repo:
   ```bash
   git clone https://github.com/staadit/enabion-bcos.git
   cd enabion-bcos
   ```
3) Zainstaluj zaleznosci: `pnpm install`.
4) Skopiuj `.env.example` do `.env.local` i uzupelnij:
   - `DATABASE_URL` - Postgres w EU,
   - `APP_ENV=dev`,
   - inne klucze (np. AI) gdy dojda.
5) Prisma: `pnpm db:generate`, a gdy DB jest dostepna `pnpm db:migrate`.
6) Uruchom web: `pnpm dev` -> http://localhost:3000.
7) Healthcheck: http://localhost:3000/api/health (z DB: `status: "ok"`, bez DB: `status: "degraded"`).

## Docs

- Spec produktu: `./docs/Phase1_MVP-Spec.md` (SSOT dla scope'u i checklist M0-M6).
- Business Playbook: `./docs/EnabionNexus_Playbook_v1.6.md`.
- README i board maja byc synchronizowane ze specem (sekcja 12).

## Ways of working (CEO + Mieszko2.0 + Ewa)

- SSOT (product): `docs/Phase1_MVP-Spec.md`. W konflikcie ze skrotami w README/issues wygrywa spec.
- SSOT (delivery): GitHub Project "Enabion-BCOS" (kolumny Backlog -> In progress -> Ready for demo -> Done).
- Role: CEO (biznes), Mieszko2.0 (product/tech decisions), Ewa (delivery + sync board <-> spec).
- Rutyna: Ewa startuje dzien od przegladu speca (sekcje 5/7/9/10/12) i aktualizuje issues/board; gdy board != spec, w specu w sekcji Board Sync Status ustaw `Drift: YES` do czasu wyrownania.
