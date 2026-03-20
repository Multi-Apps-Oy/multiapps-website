'use client';

import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

export function HeroAnimation({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
