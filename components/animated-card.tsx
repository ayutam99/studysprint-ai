'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export function AnimatedCard({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="glass rounded-2xl p-5 shadow-glow"
    >
      {children}
    </motion.div>
  );
}
