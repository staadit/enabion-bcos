import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Enabion BCOS – Phase 1 (X-first)',
  description: 'Business Collaboration OS – foundation for Phase 1 (X-first).',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="app-shell">{children}</body>
    </html>
  );
}
