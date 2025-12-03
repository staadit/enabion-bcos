import Link from 'next/link';

const highlights = [
  'Next.js (App Router, TypeScript, ESLint/Prettier)',
  'Postgres via Prisma in @enabion/core',
  'Healthcheck API at /api/health with graceful DB handling',
  'Vercel-ready dev environment (dev branch)',
];

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Business Collaboration OS</p>
        <h1>Enabion BCOS – Phase 1 (X-first)</h1>
        <p className="lede">
          Foundation for the Enabion Business Collaboration OS: shared core package, Prisma-backed
          Postgres, and deploy-ready Next.js app.
        </p>
        <div className="pill-row">
          <span className="pill">Monorepo (apps + packages)</span>
          <span className="pill">AI Gateway placeholder</span>
          <span className="pill">Health-first</span>
        </div>
      </section>

      <section className="panel-grid">
        <div className="panel">
          <h2>Quick start</h2>
          <ol>
            <li>pnpm install</li>
            <li>cp .env.example .env &amp; set DATABASE_URL + APP_ENV</li>
            <li>pnpm db:generate</li>
            <li>pnpm dev</li>
          </ol>
        </div>

        <div className="panel">
          <h2>What&apos;s inside</h2>
          <ul>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="panel">
          <h2>API healthcheck</h2>
          <p>
            Call <code>/api/health</code> to verify the app and DB connection. Returns{' '}
            <code>{`{ status, organizationsCount, env }`}</code>.
          </p>
          <Link className="cta" href="/api/health">
            Try healthcheck
          </Link>
        </div>
      </section>
    </main>
  );
}
