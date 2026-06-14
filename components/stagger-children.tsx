'use client';

import { Children, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type StaggerChildrenProps = {
  children: ReactNode;
  className?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function StaggerChildren({ children, className }: StaggerChildrenProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.06 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduceMotion ? 0 : 0.1,
          },
        },
      }}
    >
      {Children.map(children, (child) => (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: reduceMotion ? 0 : 0.62, ease },
            },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
