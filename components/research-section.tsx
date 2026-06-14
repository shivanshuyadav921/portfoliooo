'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Fingerprint, FlaskConical, Layers3, Search, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

type ResearchItem = {
  title: string;
  focus: string;
  technologies: string[];
  highlights: string[];
  status: string;
  authors?: string;
  href?: string;
  ctaLabel?: string;
};

const researchItems: ResearchItem[] = [
  {
    title: 'Probabilistic Tree Transducers for Syntax-to-Semantics Conversion',
    focus: 'Explainable semantic parsing through formal language methods.',
    technologies: ['Python', 'PyTorch', 'OpenFST', 'Stanford CoreNLP', 'spaCy', 'NLTK'],
    highlights: [
      'Designed a probabilistic tree transducer framework.',
      'Achieved 78.4% exact-match accuracy on GeoQuery.',
      'Achieved 74.1% exact-match accuracy on ATIS.',
      'Conducted benchmark evaluations and ablation studies.',
      'Prioritized traceability and interpretability.',
    ],
    status: 'Published May 2026',
    authors: 'Shivanshu Yadav & Tarun T.',
    href: 'https://doi.org/10.5281/zenodo.20437981',
    ctaLabel: 'View Publication & DOI',
  },
  {
    title: 'Evaluating Hallucinations in Hindi and Punjabi LLMs',
    focus: 'Cross-lingual trustworthiness evaluation.',
    technologies: ['Cross-Lingual NLP', 'Multilingual LLMs', 'Low-Resource Languages'],
    highlights: [
      'Investigated multilingual hallucination detection.',
      'Identified limitations of English-centric evaluation benchmarks.',
      'Studied reliability challenges in low-resource languages.',
      'Proposed future directions for trustworthy multilingual AI.',
    ],
    status: 'Independent Research',
    href: 'https://zenodo.org/records/20681355',
    ctaLabel: 'View Publication',
  },
  {
    title: 'TraceRAG: Explainable Agentic RAG for Technical QA',
    focus: 'Evidence attribution and explainability in retrieval systems.',
    technologies: ['RAG', 'Explainable AI', 'Technical QA'],
    highlights: [
      'Designed structured attribution traces.',
      'Improved transparency of retrieval pipelines.',
      'Explored explainable reasoning methodologies.',
    ],
    status: 'Independent Research',
    href: 'https://zenodo.org/records/20542423',
    ctaLabel: 'View Publication',
  },
];

const metrics = [
  { icon: BookOpen, label: 'Publication', value: 'Zenodo / May 2026', note: 'Public record with DOI' },
  { icon: Fingerprint, label: 'Evidence', value: '2 benchmarks', note: 'GeoQuery and ATIS' },
  { icon: FlaskConical, label: 'Analysis', value: 'Ablations', note: 'Traceable model behavior' },
  { icon: ShieldCheck, label: 'Intent', value: 'Interpretability', note: 'Designed for inspection' },
];

const leadHighlights = researchItems[0].highlights;
const supportingItems = researchItems.slice(1);

const ease = [0.22, 1, 0.36, 1] as const;

export function ResearchSection() {
  const reduceMotion = useReducedMotion();

  const sectionVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
        delayChildren: reduceMotion ? 0 : 0.08,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.72, ease },
    },
  };

  const revealLine = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: (delay: number) => ({
      opacity: 1,
      pathLength: 1,
      transition: {
        opacity: { duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : delay },
        pathLength: { duration: reduceMotion ? 0 : 1.05, delay: reduceMotion ? 0 : delay, ease },
      },
    }),
  };

  return (
    <section id="research" className="scroll-mt-24 border-t border-slate-800/80 bg-slate-900/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={sectionVariants}
          className="mb-14 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end"
        >
          <motion.div variants={fadeUp}>
            <p className="font-mono text-xs text-cyan-300/70">02 / RESEARCH</p>
            <h2 className="editorial-serif mt-5 text-5xl font-semibold tracking-normal text-white sm:text-6xl">
              Thinking
              <span className="block text-slate-500">made visible.</span>
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base leading-8 text-slate-300 lg:justify-self-end"
          >
            Research into semantic parsing, multilingual reliability, and retrieval systems that make
            their reasoning legible before they make a claim.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={sectionVariants}
          className="overflow-hidden rounded-[2rem] border border-slate-800/90 bg-gradient-to-br from-cyan-300/[0.08] via-slate-950 to-slate-950 shadow-[0_35px_100px_-65px_rgba(34,211,238,0.55)]"
        >
          <motion.div variants={fadeUp} className="grid border-b border-slate-800/90 bg-white/[0.025] sm:grid-cols-4">
            {metrics.map(({ icon: Icon, label, value, note }) => (
              <div
                key={label}
                className="flex items-start gap-3 border-b border-slate-800/80 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.22em] text-slate-500">{label}</p>
                  <p className="mt-1 text-sm text-slate-100">{value}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{note}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
            <motion.div variants={fadeUp} className="space-y-6 p-7 sm:p-8">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs uppercase tracking-[0.26em] text-cyan-300/75">
                    {researchItems[0].status}
                  </p>
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3 py-1 text-xs text-cyan-100">
                    Transparent publication record
                  </span>
                </div>

                <h3 className="editorial-serif max-w-3xl text-3xl font-semibold tracking-normal text-white sm:text-4xl">
                  {researchItems[0].title}
                </h3>

                {researchItems[0].authors ? (
                  <p className="text-sm font-medium text-slate-200">{researchItems[0].authors}</p>
                ) : null}

                <p className="max-w-2xl text-sm leading-7 text-slate-300">{researchItems[0].focus}</p>

                {researchItems[0].href ? (
                  <a
                    href={researchItems[0].href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-100"
                  >
                    {researchItems[0].ctaLabel ?? 'View Publication & DOI'}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : null}
              </div>

              <div className="relative overflow-hidden rounded-[1.6rem] border border-cyan-200/10 bg-slate-950">
                <Image
                  src="/story/interpretable-ai-pathways.png"
                  alt="Interpretable AI pathways visual showing semantic routes converging and branching through a reasoning trace."
                  width={1024}
                  height={576}
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  priority={false}
                  className="aspect-[16/9] w-full object-cover opacity-90"
                />

                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0,rgba(2,6,23,0.12)_42%,rgba(2,6,23,0.82)_100%)]" />

                <svg
                  viewBox="0 0 1200 675"
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="researchGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(103, 232, 249, 0)" />
                      <stop offset="50%" stopColor="rgba(103, 232, 249, 0.95)" />
                      <stop offset="100%" stopColor="rgba(103, 232, 249, 0)" />
                    </linearGradient>
                  </defs>
                  {[
                    'M90 510 C240 430, 380 395, 560 330 S910 170, 1110 120',
                    'M150 465 C300 430, 430 410, 590 355 S860 250, 1045 215',
                    'M1120 560 C980 500, 865 445, 740 360 S500 260, 300 125',
                  ].map((path, index) => (
                    <motion.path
                      key={path}
                      d={path}
                      fill="none"
                      stroke="url(#researchGlow)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={index === 0 ? 4 : 2.5}
                      custom={0.18 + index * 0.14}
                      variants={revealLine}
                    />
                  ))}
                  {[
                    [90, 510],
                    [560, 330],
                    [1110, 120],
                    [150, 465],
                    [590, 355],
                    [1045, 215],
                    [1120, 560],
                    [740, 360],
                    [300, 125],
                  ].map(([cx, cy], index) => (
                    <motion.circle
                      key={`${cx}-${cy}`}
                      cx={cx}
                      cy={cy}
                      r={index % 3 === 1 ? 6 : 4}
                      fill="rgba(103, 232, 249, 0.92)"
                      custom={0.35 + index * 0.05}
                      variants={{
                        hidden: { opacity: 0, scale: 0.7 },
                        visible: (delay: number) => ({
                          opacity: 1,
                          scale: 1,
                          transition: {
                            duration: reduceMotion ? 0 : 0.45,
                            delay: reduceMotion ? 0 : delay,
                            ease,
                          },
                        }),
                      }}
                    />
                  ))}
                </svg>

                <div className="absolute inset-x-0 bottom-0 border-t border-cyan-300/10 bg-slate-950/72 px-4 py-3 backdrop-blur-md">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full border border-cyan-200/15 bg-slate-950/80 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.22em] text-cyan-100">
                      Semantic trace map
                    </span>
                    <span className="text-xs text-slate-300">
                      Pathways illuminate before the conclusion does
                    </span>
                  </div>
                </div>
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.18 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: reduceMotion ? 0 : 0.05,
                      delayChildren: reduceMotion ? 0 : 0.08,
                    },
                  },
                }}
                className="grid gap-3 sm:grid-cols-2"
              >
                {researchItems[0].technologies.map((technology) => (
                  <motion.span
                    key={technology}
                    variants={{
                      hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: reduceMotion ? 0 : 0.45, ease },
                      },
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-800/90 bg-slate-900/85 px-4 py-2 text-sm text-slate-200"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                    {technology}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.aside variants={fadeUp} className="border-t border-slate-800/90 p-7 sm:p-8 lg:border-l lg:border-t-0">
              <div className="rounded-[1.4rem] border border-white/[0.06] bg-white/[0.025] p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Reported evidence</p>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.18 }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: reduceMotion ? 0 : 0.1,
                        delayChildren: reduceMotion ? 0 : 0.08,
                      },
                    },
                  }}
                  className="mt-4 grid gap-3 sm:grid-cols-2"
                >
                  {[
                    { value: '78.4%', label: 'GeoQuery exact match', caption: 'Formal semantic parsing' },
                    { value: '74.1%', label: 'ATIS exact match', caption: 'Controlled evaluation' },
                  ].map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      variants={{
                        hidden: { opacity: 0, y: reduceMotion ? 0 : 14, scale: reduceMotion ? 1 : 0.98 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: {
                            duration: reduceMotion ? 0 : 0.5,
                            delay: reduceMotion ? 0 : 0.12 + index * 0.1,
                            ease,
                          },
                        },
                      }}
                      className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4"
                    >
                      <p className="stat-display text-3xl font-semibold text-white">{metric.value}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-cyan-200/70">
                        {metric.label}
                      </p>
                      <p className="mt-2 text-xs leading-5 text-slate-500">{metric.caption}</p>
                    </motion.div>
                  ))}
                </motion.div>

                <p className="mt-5 border-l border-cyan-300/40 pl-4 text-sm leading-7 text-slate-300">
                  The work connects formal, inspectable transformations with modern NLP tooling, making
                  model behavior easier to trace than opaque end-to-end generation.
                </p>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/75">Contributions</p>
                  <span className="inline-flex items-center gap-2 text-xs text-slate-500">
                    <Search className="h-3.5 w-3.5" aria-hidden="true" />
                    One idea at a time
                  </span>
                </div>

                <motion.ol
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.18 }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: reduceMotion ? 0 : 0.08,
                        delayChildren: reduceMotion ? 0 : 0.08,
                      },
                    },
                  }}
                  className="mt-4 space-y-3"
                >
                  {leadHighlights.map((highlight, index) => (
                    <motion.li
                      key={highlight}
                      variants={{
                        hidden: { opacity: 0, x: reduceMotion ? 0 : -10 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: reduceMotion ? 0 : 0.45, ease },
                        },
                      }}
                      className="flex gap-3 text-sm leading-7 text-slate-300"
                    >
                      <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] text-[0.65rem] font-semibold text-cyan-100">
                        0{index + 1}
                      </span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </motion.ol>
              </div>

              <div className="mt-8 rounded-[1.4rem] border border-slate-800/90 bg-slate-950/75 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Method note</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  The goal is not to disguise complexity. It is to make the chain of evidence visible so
                  the reasoning can be inspected, challenged, and trusted.
                </p>
              </div>
            </motion.aside>
          </div>
        </motion.div>

              <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {supportingItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : index * 0.08, ease }}
              className="overflow-hidden rounded-[1.5rem] border border-slate-800/90 bg-slate-950/60 p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/75">{item.status}</p>
                <Layers3 className="h-4 w-4 text-slate-500" aria-hidden="true" />
              </div>
              <h3 className="editorial-serif mt-4 text-2xl font-semibold tracking-normal text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.focus}</p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {item.highlights.map((highlight) => (
                  <p
                    key={highlight}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm leading-6 text-slate-300"
                  >
                    {highlight}
                  </p>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-800 px-3 py-1.5 text-xs text-slate-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-100"
                >
                  {item.ctaLabel ?? 'View Publication'}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
