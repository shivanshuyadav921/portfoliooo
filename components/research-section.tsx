'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, BookOpenText, FlaskConical, ShieldCheck } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

const publications = [
  {
    title: 'Evaluating Hallucinations in Hindi and Punjabi LLMs',
    doi: 'https://zenodo.org/records/20681355',
    problem:
      'Language models are often judged on English-centric assumptions that do not capture low-resource multilingual failure modes.',
    methodology:
      'The work studies hallucination behavior across Hindi and Punjabi and frames the evaluation around trustworthiness rather than surface fluency alone.',
    findings:
      'The analysis highlights where standard benchmarks miss multilingual brittleness and why evidence-backed evaluation matters for deployment.',
  },
  {
    title: 'TraceRAG: Explainable Agentic RAG for Technical QA',
    doi: 'https://zenodo.org/records/20542423',
    problem:
      'Technical question answering needs answers that can be inspected, not only responses that sound correct.',
    methodology:
      'TraceRAG adds structured evidence pathways to retrieval-augmented generation so the chain from query to answer can be read and challenged.',
    findings:
      'The system treats retrieval traces as first-class artifacts, making the reasoning easier to audit for technical users.',
  },
];

const signals = [
  { label: 'Interpretability', value: 'Traceable evidence' },
  { label: 'Experimentation', value: 'Ablations and comparison' },
  { label: 'Transparency', value: 'Public DOI records' },
  { label: 'Curiosity', value: 'Questions before claims' },
];

function PublicationRow({
  title,
  doi,
  problem,
  methodology,
  findings,
  index,
}: {
  title: string;
  doi: string;
  problem: string;
  methodology: string;
  findings: string;
  index: number;
}) {
  return (
    <article className="border-t border-white/[0.08] py-8 first:border-t-0 first:pt-0">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-10">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">
            {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="editorial-serif mt-4 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h3>
          <a
            href={doi}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-100 transition hover:text-white"
          >
            DOI link
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="grid gap-5">
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.24em] text-slate-500">Problem</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">{problem}</p>
            </div>
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.24em] text-slate-500">Methodology</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">{methodology}</p>
            </div>
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.24em] text-slate-500">Findings</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">{findings}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ResearchSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="research" className="scroll-mt-24 border-t border-white/[0.08] py-24 sm:py-32">
      <div className="mx-auto max-w-[92rem] px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.26 }}
          transition={{ duration: reduceMotion ? 0 : 0.45, ease }}
          className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">Research</p>
            <h2 className="editorial-serif mt-5 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Thinking made visible.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-slate-300 lg:justify-self-end">
            Research is the emotional center of the portfolio because it shows how curiosity, rigor, and
            transparency become engineering choices rather than abstract values.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease }}
            className="rounded-[2rem] border border-white/[0.08] bg-[#060c17] p-6 sm:p-8"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Semantic pathways</p>
              <ShieldCheck className="h-4 w-4 text-cyan-300/70" aria-hidden="true" />
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-white/[0.06] bg-slate-950/70 p-6">
              <svg viewBox="0 0 860 560" className="w-full" aria-hidden="true">
                <defs>
                  <linearGradient id="research-path" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(103,232,249,0)" />
                    <stop offset="50%" stopColor="rgba(103,232,249,0.92)" />
                    <stop offset="100%" stopColor="rgba(103,232,249,0)" />
                  </linearGradient>
                </defs>
                {[
                  'M110 410 C245 330, 355 298, 430 250 S620 140, 760 92',
                  'M110 232 C250 220, 345 232, 430 250 S616 292, 760 336',
                  'M110 410 C265 390, 360 368, 430 324 S620 222, 760 176',
                ].map((path, index) => (
                  <motion.path
                    key={path}
                    d={path}
                    fill="none"
                    stroke="url(#research-path)"
                    strokeLinecap="round"
                    strokeWidth={index === 0 ? 3.5 : 2.25}
                    initial={{ opacity: 0, pathLength: 0 }}
                    whileInView={{ opacity: 1, pathLength: 1 }}
                    viewport={{ once: true, amount: 0.22 }}
                    transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.08 + index * 0.06, ease }}
                  />
                ))}

                {[
                  [110, 410],
                  [430, 250],
                  [760, 92],
                  [110, 232],
                  [760, 336],
                  [430, 324],
                  [760, 176],
                ].map(([cx, cy], index) => (
                  <motion.circle
                    key={`${cx}-${cy}`}
                    cx={cx}
                    cy={cy}
                    r={index === 1 ? 11 : 6}
                    fill={index === 1 ? '#67e8f9' : 'rgba(103,232,249,0.82)'}
                    initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.22 }}
                    transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.1 + index * 0.03, ease }}
                  />
                ))}
              </svg>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {signals.map((signal) => (
                <div key={signal.label} className="border-t border-white/[0.08] pt-4">
                  <p className="text-[0.62rem] uppercase tracking-[0.24em] text-slate-500">{signal.label}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{signal.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-0">
            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: reduceMotion ? 0 : 0.45, ease }}
              className="border-t border-white/[0.08] pt-0"
            >
              {publications.map((publication, index) => (
                <PublicationRow key={publication.title} index={index} {...publication} />
              ))}
            </motion.div>

            <div className="mt-8 border-t border-white/[0.08] pt-6">
              <div className="flex flex-wrap items-center gap-3">
                <BookOpenText className="h-4 w-4 text-cyan-300/70" aria-hidden="true" />
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                  Publication record stays public, readable, and linked to the source of truth.
                </p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: reduceMotion ? 0 : 0.45, ease }}
          className="mt-14 rounded-[2rem] border border-white/[0.08] bg-[#060c17] p-6 sm:p-8"
        >
          <div className="flex items-center gap-3">
            <FlaskConical className="h-4 w-4 text-cyan-300/70" aria-hidden="true" />
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Research posture</p>
          </div>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-300">
            The work keeps returning to the same instinct: make model behavior inspectable, make evaluation honest,
            and make the evidence easy enough to challenge that it can actually earn trust.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
