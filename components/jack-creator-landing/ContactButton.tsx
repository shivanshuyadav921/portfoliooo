'use client';

import { motion } from 'framer-motion';

export function ContactButton({ label = 'Contact Me' }: { label?: string }) {
  return (
    <motion.a
      href="#contact"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center justify-center rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white outline-none sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
      style={{
        background:
          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid #ffffff',
        outlineOffset: '-3px',
      }}
    >
      {label}
    </motion.a>
  );
}

