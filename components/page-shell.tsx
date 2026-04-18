'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Footer } from './footer';
import { Navbar } from './navbar';

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-grid bg-[size:22px_22px]">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="particle particle-1" />
        <div className="particle particle-2" />
        <div className="particle particle-3" />
      </div>
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 mx-auto max-w-7xl px-4 py-10 md:px-8"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
