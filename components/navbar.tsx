'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navLinks } from '@/data/demo-data';

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050714]/80 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-4 py-3 md:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold" onClick={() => setOpen(false)}>
            StudySprint <span className="gradient-text">AI</span>
          </Link>

          <button
            className="rounded-lg border border-white/20 p-2 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>

          <ul className="hidden flex-wrap gap-2 md:flex">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={clsx(
                    'rounded-full px-3 py-2 text-sm transition hover:bg-white/10',
                    pathname === item.href ? 'bg-white/15 text-neonBlue' : 'text-slate-200',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {open && (
          <ul className="mt-3 grid gap-2 rounded-2xl border border-white/10 bg-slate-950/90 p-3 md:hidden">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    'block rounded-lg px-3 py-2 text-sm transition hover:bg-white/10',
                    pathname === item.href ? 'bg-white/15 text-neonBlue' : 'text-slate-200',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
