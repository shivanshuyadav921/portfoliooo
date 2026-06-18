'use client';

import { motion } from 'framer-motion';

export function LiveProjectButton({ label = 'Live Project' }: { label?: string }) {
  return (
    <motion.a
      href="#"
      whileHover={{ backgroundColor: 'rgba(215,226,234,0.06)' }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] outline-none transition-colors sm:px-10 sm:py-3.5 sm:text-base"
    >
      {label}
    </motion.a>
  );
}

