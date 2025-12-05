# Domain setup for enabion.com

## Goal
Serve Enabion BCOS from the root domain `enabion.com` via Vercel (Project: enabion-bcos).

## Steps (CEO / Infra)
1) Add domain in Vercel:
   - Vercel Dashboard ? enabion-bcos ? Settings ? Domains ? Add `enabion.com`.
   - Keep it as **apex (root)**; no subdomain.

2) DNS records (at your DNS provider):
   - Apex (`@`): A record ? `76.76.21.21` (Vercel edge). If provider supports ALIAS/ANAME flattening, you can use CNAME to `cname.vercel-dns.com` instead.
   - (Optional) www: CNAME ? `cname.vercel-dns.com` if you want www ? root.

3) Wait for DNS propagation (usually <15 min, may take up to 24h).

4) Verify in Vercel:
   - Domains tab should show `Valid`/`Configured`.
   - Trigger a redeploy of branch `dev` (or promote latest) to ensure the build is served on the new domain.

5) Test
   - Open https://enabion.com ? landing loads without SSL errors.
   - Check `/api/health` on the root domain.

## Notes
- Current dev URL: https://enabion-bcos-git-dev-staadits-projects.vercel.app (keep as fallback).
- No custom `outputDirectory` required for Next.js.
- Keep `APP_ENV=dev` and `DATABASE_URL` configured in Vercel env vars.
