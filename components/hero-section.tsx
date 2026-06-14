'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { BookOpen, FileText, Github, MoveUpRight } from 'lucide-react';

type PrincipleId = 'engineering' | 'research' | 'understanding';

const proofItems = [
  {
    label: 'DOI Publications',
    href: '#research',
    icon: BookOpen,
  },
  { label: 'GitHub', href: 'https://github.com/shivanshuyadav921', icon: Github },
  { label: 'Resume', href: '/resume.pdf', icon: FileText },
];

const principles: {
  id: PrincipleId;
  label: string;
  note: string;
  position: string;
  path: string;
}[] = [
  {
    id: 'engineering',
    label: 'Engineering',
    note: 'Production systems',
    position: 'left-[10%] top-[18%]',
    path: 'M158 150 C250 176, 320 220, 400 304',
  },
  {
    id: 'research',
    label: 'Research',
    note: 'Interpretability',
    position: 'right-[10%] top-[18%]',
    path: 'M642 150 C550 176, 480 220, 400 304',
  },
  {
    id: 'understanding',
    label: 'Human Understanding',
    note: 'Readable evidence',
    position: 'left-[14%] bottom-[14%]',
    path: 'M196 592 C286 520, 338 452, 400 304',
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<PrincipleId>('engineering');
  const activePrinciple = principles.find((principle) => principle.id === active) ?? principles[0];

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="scroll-mt-24 min-h-[calc(100svh-4rem)] py-10 sm:py-12 lg:py-16"
    >
      <div className="grid gap-14 lg:min-h-[calc(100svh-8rem)] lg:grid-cols-[minmax(0,1.25fr)_minmax(19rem,0.75fr)] lg:items-end">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease }}
            className="mb-6 text-xs uppercase tracking-[0.32em] text-cyan-200/70"
          >
            Shivanshu Yadav / Software Engineer / AI Researcher
          </motion.p>

          <h1
            id="hero-heading"
            className="display-headline editorial-balance editorial-serif max-w-4xl text-white"
          >
            <motion.span
              initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.45, ease }}
              className="block"
            >
              Making
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.08, ease }}
              className="block"
            >
              Intelligence
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.16, ease }}
              className="block text-cyan-100"
            >
              Understandable.
            </motion.span>
          </h1>

          <div className="mt-10 max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.18, ease }}
              className="max-w-xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9"
            >
              Software Engineer and AI Researcher focused on explainable systems, multilingual NLP, and trustworthy retrieval.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.28, ease }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="#selected-work"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
              >
                View selected work
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/45 px-5 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/35 hover:text-white"
              >
                Contact
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.34, ease }}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/[0.08] pt-5"
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
                    className="link-underline inline-flex items-center gap-2 text-xs font-medium text-slate-400 transition-colors hover:text-cyan-100"
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    {label}
                    <MoveUpRight className="h-3 w-3 opacity-60" aria-hidden="true" />
                  </a>
                );
              })}
            </motion.div>
          </div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.24, ease }}
          className="space-y-6 lg:pl-8"
        >
          <div className="border-t border-white/[0.08] pt-6">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Concept</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
              Engineering trust is not a flourish. It is a structure that lets research remain visible and human judgment remain part of the system.
            </p>
          </div>

          <div
            className="relative overflow-hidden rounded-[2rem] border border-slate-800/90 bg-[#060d18]"
            aria-label="A slow moving editorial diagram of engineering, research, and human understanding"
          >
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.11),transparent_50%)]" />
            <div aria-hidden="true" className="absolute inset-[10%] rounded-[1.6rem] border border-white/[0.04]" />

            <svg viewBox="0 0 800 720" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <defs>
                <linearGradient id="hero-connection" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(103, 232, 249, 0)" />
                  <stop offset="50%" stopColor="rgba(103, 232, 249, 0.95)" />
                  <stop offset="100%" stopColor="rgba(103, 232, 249, 0)" />
                </linearGradient>
              </defs>
              {principles.map((principle, index) => (
                <motion.path
                  key={principle.id}
                  d={principle.path}
                  fill="none"
                  stroke={active === principle.id ? 'url(#hero-connection)' : 'rgba(148,163,184,0.18)'}
                  strokeLinecap="round"
                  strokeWidth={active === principle.id ? 3.5 : 2}
                  initial={false}
                  animate={
                    reduceMotion
                      ? { opacity: active === principle.id ? 0.9 : 0.45, pathLength: 1 }
                      : {
                          opacity: active === principle.id ? 1 : 0.35,
                          pathLength: active === principle.id ? 1 : 0.82,
                        }
                  }
                  transition={{ duration: reduceMotion ? 0 : 0.45, ease, delay: index * 0.04 }}
                />
              ))}
              <motion.circle
                cx="400"
                cy="304"
                r="124"
                fill="rgba(2,6,23,0.92)"
                stroke="rgba(103,232,249,0.12)"
                strokeWidth="1.5"
                initial={false}
                animate={
                  reduceMotion
                    ? { opacity: 1, scale: 1 }
                    : { opacity: [0.85, 0.92, 0.86], scale: [1, 1.012, 1] }
                }
                transition={reduceMotion ? { duration: 0 } : { duration: 14, repeat: Infinity, ease: 'easeInOut' }}
              />
            </svg>

            {principles.map((principle) => {
              const selected = active === principle.id;

              return (
                <button
                  key={principle.id}
                  type="button"
                  aria-pressed={selected}
                  onMouseEnter={() => setActive(principle.id)}
                  onFocus={() => setActive(principle.id)}
                  onClick={() => setActive(principle.id)}
                  className={`absolute ${principle.position} text-left`}
                >
                  <span
                    className={`inline-flex rounded-full border px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.22em] transition ${
                      selected
                        ? 'border-cyan-300/30 bg-cyan-300/[0.08] text-cyan-100'
                        : 'border-slate-700/70 bg-slate-950/80 text-slate-400'
                    }`}
                  >
                    {principle.label}
                  </span>
                  <span className="mt-2 block text-xs uppercase tracking-[0.2em] text-slate-500">
                    {principle.note}
                  </span>
                </button>
              );
            })}

            <div className="relative flex min-h-[26rem] items-center justify-center px-8 py-14 text-center">
              <div className="max-w-sm">
                <p className="text-[0.62rem] uppercase tracking-[0.24em] text-slate-500">Active frame</p>
                <motion.h2
                  key={active}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.45, ease }}
                  className="editorial-serif mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl"
                >
                  {activePrinciple.label}
                  <span className="mt-3 block text-cyan-100">Engineering trust without hiding the reasoning.</span>
                </motion.h2>
                <p className="mt-5 text-sm leading-7 text-slate-400">
                  A quiet system that connects implementation, evidence, and people into one legible surface.
                </p>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
