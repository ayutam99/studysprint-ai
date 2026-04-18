'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export function AnimatedCard({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="glass card-glow rounded-2xl p-5"
    >
      {children}
    </motion.div>
  );
}
