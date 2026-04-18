import { ReactNode } from 'react';
import { Footer } from './footer';
import { Navbar } from './navbar';

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-grid bg-[size:22px_22px]">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-10 md:px-8">{children}</main>
      <Footer />
    </div>
  );
}
