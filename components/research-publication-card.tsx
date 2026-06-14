'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, BookOpen, CalendarDays, Users } from 'lucide-react';

export type Publication = {
  title: string;
  venue: string;
  status: string;
  authors: string;
  date: string;
  summary: string;
  methodology: string;
  doi: string;
  benchmarks: { value: string; label: string }[];
  contributions: string[];
  technologies: string[];
};

export function ResearchPublicationCard({ publication }: { publication: Publication }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/[0.08] via-slate-950 to-slate-950 p-7 shadow-[0_35px_100px_-65px_rgba(34,211,238,0.6)] sm:p-9"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-cyan-300/[0.06] blur-3xl"
      />
      <div className="relative">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-slate-400">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-3 py-1.5 font-medium text-cyan-100">
            <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
            {publication.venue}
          </span>
          <span className="inline-flex items-center gap-2">
            <Users className="h-3.5 w-3.5" aria-hidden="true" />
            {publication.authors}
          </span>
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {publication.date}
          </span>
          <span className="sm:ml-auto uppercase tracking-[0.2em] text-cyan-300/70">
            {publication.status}
          </span>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h3 className="editorial-serif max-w-3xl text-3xl font-semibold tracking-normal text-white sm:text-4xl">
              {publication.title}
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">{publication.summary}</p>

            <div className="mt-7 border-l border-cyan-300/40 pl-5">
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-300/70">Methodology</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{publication.methodology}</p>
            </div>

            <a
              href={publication.doi}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
            >
              View publication and DOI
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Reported evidence</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-2">
              {publication.benchmarks.map((benchmark) => (
                <div
                  key={benchmark.label}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4"
                >
                  <p className="stat-display text-3xl font-semibold text-white">{benchmark.value}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{benchmark.label}</p>
                </div>
              ))}
            </div>

            <p className="mt-7 text-xs uppercase tracking-[0.22em] text-slate-500">Contributions</p>
            <ul className="mt-4 space-y-3">
              {publication.contributions.map((contribution) => (
                <li key={contribution} className="flex gap-3 text-sm leading-6 text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" aria-hidden="true" />
                  {contribution}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-9 flex flex-wrap gap-2 border-t border-slate-800/80 pt-6">
          {publication.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-slate-800 px-3 py-1.5 text-xs text-slate-400"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
