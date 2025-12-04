import Link from 'next/link';

const highlights = [
  'Next.js (App Router, TypeScript, ESLint/Prettier)',
  'Postgres via Prisma in @enabion/core',
  'Healthcheck API at /api/health with graceful DB handling',
  'Vercel-ready dev environment (dev branch)',
];

const missions = [
  {
    lang: 'PL',
    copy:
      'Intent -> Decision dla X-first: zbieramy sygnaly z X, dodajemy kontekst i podajemy gotowe decyzje operacyjne.',
  },
  {
    lang: 'DE',
    copy:
      'Intent -> Decision fuer X-first: Signale aus X buendeln, Kontext verstehen und klare Entscheidungen liefern.',
  },
  {
    lang: 'EN',
    copy:
      'Intent -> Decision for X-first: capture signals from X, map the context, ship actionable decisions.',
  },
];

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Business Collaboration OS</p>
        <h1>Enabion BCOS - Phase 1 (X-first)</h1>
        <p className="lede">
          Intent -&gt; Decision for X-first: foundation for Enabion BCOS with shared core, Prisma-backed
          Postgres, and deploy-ready Next.js app.
        </p>
        <div className="pill-row">
          <span className="pill">Monorepo (apps + packages)</span>
          <span className="pill">AI Gateway placeholder</span>
          <span className="pill">Health-first</span>
        </div>
      </section>

      <section className="mission">
        <div className="mission-heading">
          <p className="eyebrow">Intent -&gt; Decision</p>
          <h2>Mission for X-first</h2>
          <p className="lede">
            One lane from intent to decision: capture signals, clarify context, deliver actions. Same
            promise in PL / DE / EN.
          </p>
        </div>
        <div className="mission-grid">
          {missions.map((entry) => (
            <div className="mission-card" key={entry.lang}>
              <span className="badge">{entry.lang}</span>
              <h3>Intent -&gt; Decision</h3>
              <p>{entry.copy}</p>
            </div>
          ))}
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
