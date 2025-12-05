# EnabionNexus – Phase1_MVP-Spec_v0.6 (X-first)

**Status:** Draft (Phase 1 – working master, X-first)
**Owner:** CEO (business) + Mieszko2.0 (product/tech)
**Last update:** 2025-12-05
**Source:** EnabionNexus Playbook v1.6 (master vision)
**Scope:** Single source of truth for Phase 1 execution (X-first, Y-lite). All Phase 1 content lives here.

> Phase 1 = X-first MVP. The hero is company X (has a need, but not a clear plan or partners). Vendors Y are handled as Vendor-lite / Y-lite (guest portal + response + basic workspace), without a full OS on their side.

---

## 0. How to read this document

- Playbook v1.6 = vision 2030 (CONNECT → POWER → GROW, 5-Step Lifecycle, Trust Graph).
- Phase1_MVP-Spec_v0.6 (X-first) = focused, shippable scope for the first product for X.

The document covers:
1. Business goal of Phase 1 for X.
2. Product scope (MVP modules).
3. Functional and non-functional requirements (v0).
4. Architecture and data model v0 (X-first, Y-lite).
5. Markets and languages (PL / DE / EN).
6. Success metrics and milestones.

### 0.1 Change Log (Phase 1 – Spec versioning)
- 2025-12-05 – v0.5 → v0.6 – [Mieszko2.0 + Ewa] English-only spec; synced M0 scope with repo (README, Project "Enabion-BCOS", issues #2–#7); clarified M0 mapping and Board Sync.
- 2025-12-04 – v0.4 → v0.5 – [CEO + Mieszko2.0]
  - Refined team workflow (section 0.2 / 12.1.4).
  - Added Execution & Backlog rules.
  - Clarified M0 tasks and “M0 done” definition.
- 2025-12-03 – v0.4 – initial public draft (X-first scope).

---

## 1. Phase 1 – goal, scope, success (X-first)

### 1.1 Goal of Phase 1 (from X perspective)
Deliver an X-first MVP Business Collaboration OS that helps X in PL/DE:
- turn unstructured ideas, mails, and decks into a structured Intent,
- build and prioritize partner selection criteria,
- compare and decide on a partner in one Decision Room,
- provide a minimal NDA / L1/L2 + Trust Room layer for first conversations.

Covers steps 1–3 of Enabion 5-Step Partnership Lifecycle: Clarify → Match & Align → Commit & Assure, with a minimal Deliver (Trust Room).

### 1.2 High-level MVP scope
1) X Intent Studio / Intent Coach (Clarify).  
2) Decision Model Builder (partner selection criteria).  
3) Vendor Candidates & Vendor-lite Response (BYOV – bring your own vendors).  
4) Evaluation Matrix & Decision Room (Match & Align → Commit & Assure).  
5) NDA & Confidentiality L1/L2 (Warstwa 0/1/2 lite).  
6) X↔Y Trust Room (lite) for the selected partner.  
7) X Intent Pipeline (Draft → Clarify → Evaluate → Decision).  
8) Languages: EN (default) + PL and DE (native).  
9) Y-lite workspace: simple org account for Y, list of received Intents, respond via Vendor-lite Portal, Avatar assistance for answers.

### 1.3 Out of scope (Phase 1)
- Open X↔Y marketplace (public listings, bidding, ranking).
- Full OS for Y (Y pipeline, Y dashboard, advanced TrustScore for Y).
- Financial layer (escrow, financial TrustScore, dispute resolution).
- EnableMark program, Hubs, full Trust Graph (only minimal Trust v0 here).
- Data Models 2/3 (Shielded/Sovereign) as a product (only in architecture prep).

### 1.4 Definition of success (Phase 1)
- Min. 3 pilots (X in PL/DE) using the system to select a partner Y.  
- Min. 10 Intents processed end-to-end: Intent → Criteria → Vendor Responses → Decision.  
- X “wow” feedback: “Without Enabion we’d drown in mails/slides”; clear Decision Summary for leadership/procurement.  
- System stable, multi-tenant, Data Model 1 – Standard (EU region) and ready for Phase 2 (full OS for Y).

---

## 2. Markets and languages – PL / DE / EN

### 2.1 Markets (Phase 1)
- Poland (PL): X planning tech/AI/digital projects; Y as vendors.  
- Germany (DE): X and Y; includes cross-border X↔Y PL/DE.

### 2.2 Product languages
- EN – default UI/product copy/documentation.  
- PL – full localization + Avatars read/write PL.  
- DE – full localization + Avatars read/write DE.

Implications: all UI strings in i18n files (no hardcoded text); Organization has `default_language` (EN/PL/DE); User has `preferred_language` (EN/PL/DE); Avatars understand EN/PL/DE input, respond in user language, can translate Intent/Decision Summary EN↔PL↔DE.

---

## 3. ICP and personas (X-first)

### 3.1 ICP – companies X
ICP-X-1: mid-size X (PL/DE) 50–500 employees:  
- planning tech/AI/digital project,  
- immature IT procurement process,  
- fear of picking the wrong partner,  
- drowning in documents/mails/RFP variants.  
Sectors: retail, manufacturing, finance, services.

### 3.2 Personas
1. Project Owner X – business owner with budget/KPIs, needs decision rationale (vendor A vs B).  
2. Transformation / IT Lead X – translates business needs into tech reqs, co-decides criteria and vendors.  
3. Procurement / Legal Reviewer – compliance, needs Decision Summary fit for audit.  
4. Vendor Y – Guest/User – responds to Intent via Vendor-lite Portal, minimal UI/Y-lite workspace.  
5. Small firms: roles may be combined in one person on X/Y side.

---

## 4. Key experiences (UX / WOW)

### 4.1 “From chaos to decision”
X starts with a fuzzy “we need to do something”: unclear scope, partners, no criteria or single comparison view.  
In one day with Enabion: clarified Intent; partner criteria; compare 2–3 vendors; recommendation (AI + human); Decision Summary for leadership/procurement; communications to vendors inside Enabion (Avatar helps).

### 4.2 Vendor Y – better than “send us a deck”
Y avoids 20 RFP formats; receives a structured Intent + Response Form; Avatar helps craft answers in EN/PL/DE.

---

## 5. MVP modules (X-first)

### 5.1 X Organizations & Users
- Basic model for org X (and minimal Y) with users/roles.  
- In scope: org_type X|Y; profile (name, country, industries, size band, markets, languages, URL); X roles: OrgAdmin, ProjectOwner, Evaluator, Viewer; Y as vendor-lite or VendorCandidate only.  
- Out of scope: granular roles, complex hierarchies.

### 5.2 X Intent Studio (Intent Coach)
- Clarify X’s need.  
- Create Intent from scratch or pasted text (mail/notes/transcript).  
- Avatar Intent Coach asks clarifying questions; fills business goal, context, high-level scope, KPI, budget ranges, timeline, risks, constraints, preferred collaboration model, language.  
- Mark confidentiality level (L1/L2).  
- Edit/version Intents (v1, v2…).  
- Out: ultra-specific industry templates; direct integrations with notes/whiteboards (Phase 2+).

### 5.3 Decision Model Builder (partner criteria)
- Avatar proposes criteria list (competence, experience, location, language, price, risks, culture, governance).  
- User adds/removes criteria, sets weights (0–5), marks must-have vs nice-to-have.  
- Builds evaluation matrix to be used later; generates short “How we choose vendors” text for Decision Summary.  
- Out: advanced ML scoring on history; auto-import criteria from corp policies (Phase 2+).

### 5.4 Vendor Candidates (BYOV) & Invitations
- Add VendorCandidate: simple record (name, contact, country, URL, note) or link to existing Y org when full OS exists later.  
- Generate individual invites (links) to Vendor-lite Response Portal.  
- Track status: invited / opened / responded / no response.  
- Optional Avatar help: propose vendors from public sources; X chooses which to add.  
- Out: public vendor catalog; ads/listing fees/tokenized slots.

### 5.5 Vendor-lite Response Portal (Y Guest)
- Minimal portal: Y views Intent and responds in structured form; Avatar assists crafting answers in EN/PL/DE.  
- Out: full Y OS, advanced TrustScore for Y (Phase 2+).

### 5.6 Evaluation Matrix & Scoring
- Combine Decision Model + Vendor responses; AI-assisted scoring with human override.  
- View per-criterion scores, weights, overall ranking; allow manual edits and comments.  
- Out: ML-on-history, auto-calibration (Phase 2+).

### 5.7 NDA & Confidentiality (L1/L2 lite)
- Basic NDA/confidentiality handling tied to Intent/vendor context.  
- Out: advanced legal workflows, e-sign, multi-level approvals (Phase 2+).

### 5.8 X↔Y Trust Room (lite)
- Minimal shared space for selected vendor; key messages, attachments, next steps.  
- Out: full collaboration suite, rich audit trails (Phase 2+).

### 5.9 X Intent Pipeline
- States: Draft → Clarify → Evaluate → Decision.  
- Simple list/pipeline view; move Intent between states.

### 5.10 Languages (i18n)
- EN default; PL/DE fully supported; all UI strings in localization files; Avatar supports EN/PL/DE input/output.

---

## 6. Journeys (high level)
- X creates Intent (blank/paste) → Avatar structures → X edits/approves v1.  
- X sets Decision Model → invites Vendors (BYOV) → Vendors respond via portal.  
- Evaluation Matrix/Decision Room → recommendation → Decision Summary for leadership.  
- Trust Room (lite) for selected vendor.  
- NDA/Confidentiality applied at Intent/vendor level.

---

## 7. Non-functional requirements (Phase 1)
- Region: EU (data, hosting, AI endpoints where possible).  
- Security: 2FA enforced (GitHub, Vercel); secrets via env vars (no secrets in git).  
- Reliability: basic monitoring/healthcheck; daily DB backups.  
- Performance: acceptable for MVP (small tenant counts), but design for multi-tenant.  
- Compliance: minimal NDA/confidentiality; GDPR-aware (EU region, data minimization).  
- i18n: EN/PL/DE from day one, no hardcoded strings.  
- AI Gateway: provider-neutral interface (can start with one provider).

---

## 8. Architecture overview (v0)
- Frontend / Web: Next.js (App Router), React, TypeScript; minimal design system; localization EN/PL/DE.  
- Backend/API: Next.js Route Handlers; shared domain logic in `/packages/core`; `/apps/api` placeholder to extract later if needed.  
- DB: Postgres (EU) via Prisma; multi-tenant (organization_id on key tables).  
- AI Gateway: module/service managing all model calls (Intent Coach, Criteria Builder, Evaluation Assistant, Summaries); interface stays provider-neutral.  
- Auth: simple (email/password or magic link) for MVP; SSO later.  
- Logging: stdout + provider logging integration.

---

## 9. Stack v0 (execution)
- Node.js LTS 20.x, pnpm workspace.  
- Next.js 14 (App Router, TS, ESLint/Prettier).  
- Prisma ORM targeting Postgres (EU).  
- Packages: `/packages/core` (domain, Prisma, AI gateway placeholder), `/packages/ui` (shared UI placeholder).  
- Apps: `/apps/web` (Next.js), `/apps/api` (placeholder).  
- CI: lint workflow; healthcheck route; build on Vercel dev.  
- i18n: EN/PL/DE scaffolding; no hardcoded strings.

---

## 10. Data Model v0 (conceptual)
- Organization { id, org_type, name, country, industries[], size_band, markets[], languages[], default_language, website, created_at, updated_at }  
- User { id, organization_id, role, email, preferred_language, created_at, updated_at }  
- Intent { id, organization_id, title, description, business_goal, context, scope, KPIs, budget_range, timeline, risks, constraints, preferred_model, language, confidentiality_level, status (Draft/Clarify/Evaluate/Decision), version, created_at, updated_at }  
- DecisionModel { id, intent_id, criteria[] (weight, must_have), created_at, updated_at }  
- VendorCandidate { id, intent_id, organization_id (Y optional), name, contact, country, url, note, invite_status, created_at }  
- VendorResponse { id, vendor_candidate_id, intent_id, responses (JSON), created_at, updated_at }  
- Evaluation { id, intent_id, vendor_candidate_id, scores (by criterion), overall_score, created_at, updated_at }  
- NDA/Confidentiality { id, intent_id, vendor_candidate_id, level (L1/L2), created_at }  
- TrustRoom { id, intent_id, vendor_candidate_id, messages[], attachments[], created_at }  
- AvatarContext { id, organization_id, intent_id, vendor_candidate_id, payload (JSON), updated_at }

---

## 11. Metrics (Phase 1)
- North Star: reduce time from “idea/executive ask” to “vendor selected” by ≥50%.  
- Product: Intents per org X per month; % Intents with Decision Model; number of vendors evaluated per Intent; % Intents ending with explicit decision.  
- UX/AI: “How much did Enabion help justify the decision?” (pilot survey); average AI score overrides per Intent.

---

## 12. Milestones (proposed)
- **M0 – Environment, tools, hosting, working name (setup CEO + Mieszko2.0 + Ewa)** – details below.  
- **M1 – X Intent Studio E2E:** org X + user + Intent creation + AI + save.  
- **M2 – Decision Model + VendorCandidates + invites.**  
- **M3 – Vendor-lite Portal + Evaluation Matrix (AI scoring).**  
- **M4 – Decision Room + NDA + Trust Room.**  
- **M5 – Frontend “wow”, strong UX/CX.**  
- **M6 – 3–5 pilots (X) who ran full flow and provided feedback.**

### 12.1 M0 – Setup CEO + Mieszko2.0 + Ewa – full description

#### 12.1.1 Goal of M0
Move from “Playbook + this doc + CEO laptop” to:
- working code repo with first running app skeleton (“Hello BCOS-Enabion”),
- cloud dev environment (EU) where Ewa can deploy every change,
- working habits for core team (CEO + Mieszko2.0 + Ewa),
- key decisions that are hard to change later: data region (EU), multi-tenant, base stack, working product name/domain.
M0 is done when: CEO sees the app landing in `dev` under Enabion domain; Ewa can clone/run locally and push to `dev` with auto-deploy; M0 checklist is filled in this document.

#### 12.1.2 Strategic decisions in M0 (hard to change later)
- Multi-tenancy from day one (`organization_id` on key tables).  
- Data region: EU (Postgres + storage + AI endpoints where possible).  
- Stack: modern TS-first (React/Next.js + Node/API + Postgres).  
- AI Gateway: single integration point (provider-neutral).  
- Brand: “Enabion” umbrella; product working name **Enabion BCOS**.  
- Single repo: monorepo `enabion-bcos` (frontend + backend + infra) over microservices for start.

#### 12.1.3 M0.1 – Repository and tools (issue #2)
- Monorepo layout:
  ```
  /apps
    /web    – Next.js frontend (X + Y-lite)
    /api    – backend / BCOS core placeholder
  /packages
    /ui     – shared UI components (placeholder)
    /core   – domain logic, models, helpers
  /infra    – IaC / env config (optional in M0)
  /docs     – spec, playbook, architecture notes
  ```
- Root scripts: `pnpm dev`, `pnpm build`, `pnpm lint`, `pnpm db:generate`, `pnpm db:migrate`.
- Shared ESLint + Prettier, `.gitignore`.
- Alias `@enabion/core` works (imported in apps/web from packages/core).
- Branch model: `main` (protected) and `dev` (default); feature branches PR -> dev.  
- Security hygiene: 2FA required on GitHub + Vercel; no secrets in git.
- Status (2025-12-05): implemented in repo; see issue #2 (Status: "Done").

#### 12.1.4 M0.2 – Stack & execution architecture (“Stack v0”) (issue #3)
- Next.js (App Router) + TypeScript running in `apps/web`.  
- Landing with mission text for Enabion BCOS (X-first, Y-lite).  
- `@enabion/core` imported on landing (alias verified).  
- Header/footer in `app/layout.tsx`; `app/globals.css` with reset + base typography/layout.  
- i18n scaffolding: locales structure (en/pl/de); simple `t()`/hook for lookups (even if texts still EN).  
- `pnpm dev` and `pnpm lint` pass locally.  
- README “Getting started / Local development” explains how to run dev + lint and what is visible on `/`.  
- Status (2025-12-05): implemented; see issue #3 (Status: "Done").

#### 12.1.5 M0.3 – Hosting & environments (EU) (issue #4)
- Hosting: Vercel (EU region) for dev.  
- Branch `dev` auto-deploys to Vercel Development environment.  
- Env vars (Vercel Dev): `APP_ENV=dev`, `DATABASE_URL=<Postgres EU connection string>`.  
- Dev URL: https://enabion-bcos-git-dev-staadits-projects.vercel.app  
- `.env.example` includes at least `DATABASE_URL`, `APP_ENV` (and future mandatory keys).  
- See README “Environments” for step-by-step; spec defines required envs/responsibilities.  
- Status (2025-12-05): done; CEO confirmed root-domain deployment and `/api/health`; issue #4 closed.

#### 12.1.6 M0.4 – DB (Postgres EU) connected (issue #5)
- Managed Postgres in EU (provider-neutral: Neon.).  
- `DATABASE_URL` set locally (`.env.local`) and in Vercel Dev env.  
- `pnpm db:generate` and `pnpm db:migrate` succeed on dev DB.  
- Prisma schema at `packages/core/prisma/schema.prisma`; `Organization` model/table exists.  
- Backups: at least daily (per NFR).  
- Dev DB tenancy: TBD by CEO (shared vs per-dev) – to be recorded here once decided; see issue #5.  
- Status (2025-12-05): done (issue #5 closed); tenancy decision pending CEO follow-up.

#### 12.1.7 M0.5 – Healthcheck endpoint (issue #6)
- Endpoint: GET `/api/health` (Next.js Route Handler in apps/web).  
- Behavior: always HTTP 200.  
  - DB OK → `{ "status": "ok", "organizationsCount": <number> }`
  - DB/Prisma issue → `{ "status": "degraded", "error": "<diagnostic>" }`
- Tests:  
  - Local: `curl http://localhost:3000/api/health` → without DB: degraded; with DB: ok + count.  
  - Dev: same endpoint on Vercel dev URL (no Prisma errors).  
- README has “Healthcheck” section with example responses and interpretation.  
- Status (2025-12-05): implemented; see issue #6 (Status: "Done").  

#### 12.1.8 M0.6 – Naming, domain & IP baseline (issue #7)
- Product name: **Enabion BCOS (Business Collaboration OS by Enabion)**.  
- Repo: https://github.com/staadit/enabion-bcos  
- Root domain: https://enabion.com – landing + app via Vercel (no subdomains in Phase 1).  
- Deployment runs on root domain; environments differ by `APP_ENV`.  
- CEO decision approved 2025-12-05.  
- Trademark check (CEO): preliminary search required in EUIPO/WIPO for “Enabion” and “Enabion BCOS”; record date/registries/outcome (e.g., no obvious conflicts / potential conflict).  
- Optional future (post-M0): decide subdomain strategy (app.enabion.com, bcos.enabion.com, etc.) and DNS when splitting landing vs app.  
- Status (2025-12-05): done for M0; TM search and DNS/subdomain strategy remain as CEO follow-up (issue #7 closed for M0).

#### 12.1.9 M0.7 – Dates, milestones, and checklist “M0 done”

**M0 checklist:**
1. **Repository**
   - [x] Repo `enabion-bcos` created, private.  
   - [x] Structure `/apps`, `/packages`, `/infra`, `/docs` exists.  
   - [x] README with stack and local run steps.
2. **Stack v0**
   - [x] Next.js + TypeScript installed, first page “Hello Enabion BCOS”.  
   - [x] ORM (Prisma) configured and Postgres connected (at least one simple table).  
   - [x] `ai-gateway` module/config placeholder with a simple call/healthcheck.
3. **Hosting**
   - [x] Hosting account (e.g., Vercel) + DB account (e.g., Neon) in EU.  
   - [x] `dev` environment wired to branch `dev`.  
   - [x] Dev URL works and CEO sees landing.  
   - [x] DB backup enabled.
4. **Collaboration**
   - [x] Task board established (`Backlog → In progress → For CEO → Ready for demo → Done`).  
   - [x] 2FA enabled on Git/hosting accounts.  
   - [x] PR flow tested (feature/* → dev → deploy).
5. **Name / domain / IP**
   - [x] Working name chosen: “Enabion BCOS / BCOS-Enabion” + repo `enabion-bcos`.  
   - [x] Decision: root domain `enabion.com` (Phase 1 without subdomains).  
   - [x] Preliminary TM search planned (“ENABION” / “ENABION BCOS” in EUIPO/WIPO) – manual, status NOT RUN.

Completed on 2025-12-05 — CEO confirmed root domain and API health.

#### M0 issues mapping (Project "Enabion-BCOS")
| M0 pillar                               | GitHub issue | Project status (field "Status") |
|-----------------------------------------|--------------|----------------------------------|
| M0.3 – Repo structure & tooling         | #2           | Done                            |
| M0.4 – Next.js app scaffolded           | #3           | Done                            |
| M0.5 – Dev environment on Vercel        | #4           | Done                            |
| M0.5b – DB (Postgres EU) connected      | #5           | Done                            |
| M0.6 – Healthcheck endpoint             | #6           | Done                            |
| M0.8 – Naming, domain & IP baseline     | #7           | Done                            |

#### 12.1.10 Board Sync Status (M0 + M1 kickoff)
- Spec version: v0.6
- Board: GitHub Project "Enabion-BCOS"
- Scope: M0 + M1.1–M1.5 (issues #2–#12)
- Last sync: 2025-12-05
- Synced by: Ewa
- Status: #2–#7 DONE; #8–#12 added (Backlog; #8 In progress)
- Drift: NO

#### 12.1.11 M0 factual state
- Issues M0 (#2–#7): closed (M0 completed on development side).  
- Domain: https://enabion.com works (BCOS landing).  
- API: `/api/health` and `/api/dbcheck` work (dev).  
- DB: Postgres EU (Neon) connected; migration applied.  
- App: Next.js running; landing active.  
- Board: synchronized (#2–#7 DONE).  
- Rule: ZERO new documents (all content in Phase1_MVP-Spec + CTO log).  
- Trademark: manual, status NOT RUN.  
- Ready to enter M1.

#### 12.1.12 Documentation rules (Phase 1)
- ZERO new documents. Phase 1 has only:  
  1) `docs/Phase1_MVP-Spec.md` (master spec).  
  2) `docs/cto/ctolog_2025-12.md` (CTO log for December 2025).  
- No other Markdown/TXT/PDF created.  
- All new information is added only to the master spec or CTO log.

#### 12.1.13 CTO Appendix (Architecture Enforcement Rules)
- Encoding: UTF-8 (no BOM) for all text files.  
- Multi-tenant: every main entity has `organization_id`.  
- AI: model calls go through AI Gateway (provider-neutral, can be in-app for MVP).  
- i18n: no hardcoded UI strings; all texts in EN/PL/DE localization files.  
- ENV minimum Phase 1: `DATABASE_URL`, `APP_ENV`; `OPENAI_API_KEY` from M1; `AI_GATEWAY_URL`, `NEXTAUTH_URL` from Phase 2+.  
- Repo: no direct push to main; PR → dev for all changes.

#### 12.1.14 M1 Boundary (Scope)
- M1 includes: create organization X + user; Intent Studio (create/paste); Avatar Intent Coach structures free text; save Intent v1 to DB; pipeline Draft → Clarify; list/pipeline view.  
- M1 excludes: criteria, vendors, vendor responses, evaluation matrix, NDA, Trust Room.  
- M1 is complete when X can create an Intent, Avatar structures it, and Intent v1 is saved in DB.

#### 12.1.15 M0 → M1 Transition (CTO Confirmation)
- CTO confirms M0 meets all starting conditions for M1: repo works; dev deploy works; root domain https://enabion.com works; `/api/health` + `/api/dbcheck` work; Postgres (Neon, EU) connected; Phase1_Spec updated with M0 state and CTO rules; CTO log active.  
- Entry to M1: 2025-12-05.

---
