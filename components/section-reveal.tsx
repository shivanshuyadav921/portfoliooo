'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function SectionReveal({ children, className }: SectionRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: reduceMotion ? 0 : 0.45, ease }}
    >
      {children}
    </motion.div>
  );
}
