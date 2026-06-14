'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { BookOpen, FileText, Github, MoveUpRight } from 'lucide-react';

const concepts = [
  { label: 'Engineering', className: 'left-[2%] top-[19%]' },
  { label: 'Research', className: 'right-[1%] top-[31%]' },
  { label: 'Human understanding', className: 'bottom-[13%] left-[5%]' },
  { label: 'Trust', className: 'bottom-[9%] right-[17%]' },
];

export function HeroOrbit() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.aside
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: reduceMotion ? 0 : 1, delay: reduceMotion ? 0 : 0.25 }}
      className="relative mx-auto flex aspect-square w-full max-w-[22rem] items-center justify-center lg:justify-self-end"
      aria-label="Research focus: systems and trust"
    >
      <div aria-hidden="true" className="absolute inset-[6%] rounded-full border border-slate-700/60" />
      <div
        aria-hidden="true"
        className={`absolute inset-[6%] rounded-full ${reduceMotion ? '' : 'orbit-spin'}`}
      >
        <span className="absolute left-1/2 top-[-0.3rem] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan-200 shadow-[0_0_22px_rgba(103,232,249,0.8)]" />
      </div>
      <div
        aria-hidden="true"
        className={`absolute inset-[19%] rounded-full border border-dashed border-cyan-300/20 ${
          reduceMotion ? '' : 'orbit-spin-reverse'
        }`}
      />
      <div aria-hidden="true" className="absolute left-1/2 top-[18%] h-[64%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-200/35 to-transparent" />
      <div aria-hidden="true" className="absolute left-[18%] top-1/2 h-px w-[64%] -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-200/30 to-transparent" />
      <div className="absolute inset-[31%] rounded-full border border-white/10 bg-slate-950/90 shadow-[0_0_60px_rgba(34,211,238,0.12)]">
        <div className="flex h-full flex-col items-center justify-center text-center">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-slate-500">
            Signature axis
          </span>
          <strong className="mt-2 text-lg font-medium text-white">Systems</strong>
          <span className="text-xs text-cyan-200">x</span>
          <strong className="text-lg font-medium text-white">Human need</strong>
        </div>
      </div>
      {concepts.map((concept) => (
        <span
          key={concept.label}
          aria-hidden="true"
          className={`absolute text-[0.6rem] uppercase tracking-[0.18em] text-slate-500 ${concept.className}`}
        >
          {concept.label}
        </span>
      ))}
    </motion.aside>
  );
}

const proofItems = [
  {
    label: 'DOI publication',
    href: 'https://doi.org/10.5281/zenodo.20437981',
    icon: BookOpen,
  },
  { label: 'Resume', href: '/resume.pdf', icon: FileText },
  { label: 'GitHub', href: 'https://github.com/shivanshuyadav921', icon: Github },
];

export function HeroProofStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.75 }}
      className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-800/80 pt-5"
      aria-label="Professional proof points"
    >
      {proofItems.map(({ label, href, icon: Icon }) => {
        const external = href.startsWith('http');
        return (
          <a
            key={label}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            className="link-underline inline-flex items-center gap-2 text-xs font-medium text-slate-400 transition-colors hover:text-cyan-200"
          >
            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
            {label}
            <MoveUpRight className="h-3 w-3 opacity-60" aria-hidden="true" />
          </a>
        );
      })}
    </motion.div>
  );
}
