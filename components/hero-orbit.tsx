'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { BookOpen, FileText, Github, MoveUpRight } from 'lucide-react';

const proofItems = [
  {
    label: 'DOI publication',
    href: 'https://doi.org/10.5281/zenodo.20437981',
    icon: BookOpen,
  },
  { label: 'Resume', href: '/resume.pdf', icon: FileText },
  { label: 'GitHub', href: 'https://github.com/shivanshuyadav921', icon: Github },
];

const semanticNodes = [
  { label: 'trace', className: 'left-[12%] top-[18%]' },
  { label: 'evidence', className: 'right-[8%] top-[28%]' },
  { label: 'retrieval', className: 'left-[10%] bottom-[18%]' },
  { label: 'audit', className: 'right-[16%] bottom-[14%]' },
];

const connections = [
  'M160 170 C270 145, 365 160, 470 214 S690 332, 815 344',
  'M168 452 C282 408, 385 360, 500 296 S708 220, 845 176',
  'M850 468 C728 414, 630 356, 534 300 S340 190, 210 155',
];

const cycle = 24;
const ease = [0.22, 1, 0.36, 1] as const;

export function HeroOrbit() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.aside
      initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: reduceMotion ? 0 : 1.1, delay: reduceMotion ? 0 : 0.18, ease }}
      className="relative mx-auto flex aspect-square w-full max-w-[24rem] items-center justify-center lg:justify-self-end"
      aria-label="A slow evolving research composition showing trace, structure, and trust"
    >
      <div aria-hidden="true" className="absolute inset-[4%] rounded-[2rem] border border-slate-700/55" />

      <motion.div
        aria-hidden="true"
        className="absolute inset-[12%] rounded-full border border-slate-700/50"
        animate={
          reduceMotion
            ? { opacity: 1, scale: 1 }
            : { opacity: [0.45, 0.55, 0.65, 0.75, 0.65, 0.5, 0.45], scale: [1, 1.01, 1.02, 1.03, 1.02, 1.01, 1] }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: cycle, repeat: Infinity, ease: 'easeInOut' }
        }
      />

      <motion.div
        aria-hidden="true"
        className="absolute inset-[22%] rounded-full border border-dashed border-cyan-300/20"
        animate={
          reduceMotion
            ? { opacity: 1, scale: 1 }
            : { opacity: [0.15, 0.25, 0.4, 0.52, 0.45, 0.25, 0.15], scale: [1, 1, 1.005, 1.015, 1.02, 1.01, 1] }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: cycle, repeat: Infinity, ease: 'easeInOut' }
        }
      />

      <svg
        viewBox="0 0 960 960"
        className="pointer-events-none absolute inset-[7%] h-[86%] w-[86%]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hero-trace" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(103, 232, 249, 0)" />
            <stop offset="50%" stopColor="rgba(103, 232, 249, 0.95)" />
            <stop offset="100%" stopColor="rgba(103, 232, 249, 0)" />
          </linearGradient>
        </defs>

        {connections.map((path, index) => (
          <motion.path
            key={path}
            d={path}
            fill="none"
            stroke="url(#hero-trace)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={index === 0 ? 4 : 2.5}
            animate={
              reduceMotion
                ? { opacity: 0.7, pathLength: 1 }
                : {
                    opacity: [0.05, 0.1, 0.22, 0.72, 0.82, 0.48, 0.08],
                    pathLength: [0, 0, 0.08, 0.42, 1, 1, 0.2],
                  }
            }
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    duration: cycle,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.7,
                  }
            }
          />
        ))}

        {[
          [155, 178],
          [270, 286],
          [414, 236],
          [542, 360],
          [690, 276],
          [816, 344],
          [606, 540],
          [362, 504],
        ].map(([cx, cy], index) => (
          <motion.circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={index % 3 === 0 ? 7 : 4.5}
            fill="rgba(103, 232, 249, 0.94)"
            animate={
              reduceMotion
                ? { opacity: 0.55, scale: 1 }
                : {
                    opacity: [0, 0, 0.2, 0.92, 1, 0.72, 0],
                    scale: [0.7, 0.7, 0.85, 1, 1.05, 0.92, 0.7],
                  }
            }
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    duration: cycle,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.42,
                  }
            }
          />
        ))}
      </svg>

      {semanticNodes.map((node, index) => (
        <motion.span
          key={node.label}
          aria-hidden="true"
          className={`absolute rounded-full border border-cyan-300/18 bg-slate-950/82 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-slate-400 ${node.className}`}
          animate={
            reduceMotion
              ? { opacity: 0.75, y: 0 }
              : {
                  opacity: [0, 0, 0.35, 0.78, 0.95, 0.82, 0],
                  y: [8, 8, 4, 0, -2, 0, 8],
                }
          }
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  duration: cycle,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 3 + index * 0.8,
                }
          }
        >
          {node.label}
        </motion.span>
      ))}

      <motion.div
        aria-hidden="true"
        className="absolute inset-[31%] rounded-full border border-white/10 bg-slate-950/92 shadow-[0_0_60px_rgba(34,211,238,0.12)]"
        animate={
          reduceMotion
            ? { opacity: 1, scale: 1 }
            : {
                opacity: [0.45, 0.45, 0.55, 0.72, 0.88, 1, 0.85, 0.45],
                scale: [1, 1, 1.01, 1.03, 1.05, 1.06, 1.02, 1],
              }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: cycle, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        <div className="flex h-full flex-col items-center justify-center text-center">
          <motion.span
            className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-slate-500"
            animate={
              reduceMotion
                ? { opacity: 1 }
                : { opacity: [0.55, 0.55, 0.65, 0.75, 0.85, 0.95, 0.9, 0.55] }
            }
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: cycle, repeat: Infinity, ease: 'easeInOut' }
            }
          >
            Concept
          </motion.span>
          <motion.div
            className="mt-2 text-lg font-medium leading-tight text-white"
            animate={
              reduceMotion
                ? { opacity: 1 }
                : {
                    opacity: [0, 0, 0, 0.12, 0.45, 0.92, 1, 1],
                    scale: [0.98, 0.98, 0.985, 0.99, 1, 1.01, 1.01, 1],
                  }
            }
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: cycle, repeat: Infinity, ease: 'easeInOut' }
            }
          >
            <span className="block">Engineering</span>
            <span className="block text-cyan-200">Trustworthy Intelligence</span>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="absolute inset-[18%] rounded-full border border-cyan-300/10"
        animate={
          reduceMotion
            ? { opacity: 0.3, scale: 1 }
            : {
                opacity: [0.15, 0.15, 0.2, 0.36, 0.55, 0.72, 0.42, 0.18],
                scale: [0.995, 1, 1.01, 1.02, 1.04, 1.05, 1.02, 0.995],
              }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: cycle, repeat: Infinity, ease: 'easeInOut' }
        }
      />

      <div className="absolute inset-[8%] rounded-[2rem] border border-white/[0.03]" aria-hidden="true" />
    </motion.aside>
  );
}

export function HeroProofStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 1.1 }}
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
