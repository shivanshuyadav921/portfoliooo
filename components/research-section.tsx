import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Fingerprint, FlaskConical } from 'lucide-react';
import Image from 'next/image';

type ResearchItem = {
  title: string;
  focus: string;
  technologies: string[];
  highlights: string[];
  status: string;
  authors?: string;
  href?: string;
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
    status: 'Independent Research.',
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
    status: 'Independent Research.',
  },
];

export function ResearchSection() {
  return (
    <section id="research" className="scroll-mt-24 border-t border-slate-800/80 bg-slate-900/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <p className="font-mono text-xs text-cyan-300/70">02 / RESEARCH</p>
            <h2 className="editorial-serif mt-5 text-5xl font-semibold tracking-normal text-white sm:text-6xl">
              Evidence over
              <span className="block text-slate-500">black boxes.</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-slate-300 lg:justify-self-end">
            Research into semantic parsing, multilingual reliability, and retrieval systems that can explain how they reached an answer.
          </p>
        </motion.div>

        <div className="space-y-8">
          {researchItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, delay: index * 0.1 }}
              className={`overflow-hidden border border-slate-800/90 ${
                index === 0
                  ? 'rounded-[2rem] bg-gradient-to-br from-cyan-300/[0.08] via-slate-950 to-slate-950 shadow-[0_35px_100px_-65px_rgba(34,211,238,0.6)]'
                  : 'rounded-[1.5rem] bg-slate-950/60'
              }`}
            >
              {index === 0 ? (
                <div className="grid border-b border-slate-800/90 bg-white/[0.025] sm:grid-cols-3">
                  {[
                    { icon: BookOpen, label: 'Publication', value: 'Zenodo / May 2026' },
                    { icon: Fingerprint, label: 'Persistent record', value: 'DOI registered' },
                    { icon: FlaskConical, label: 'Evaluation', value: '2 benchmarks + ablations' },
                  ].map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 border-b border-slate-800/80 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                    >
                      <Icon className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                      <div>
                        <p className="text-[0.65rem] uppercase tracking-[0.22em] text-slate-500">{label}</p>
                        <p className="mt-1 text-sm text-slate-100">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <div className="space-y-6 p-7 sm:p-8">
                  {index === 0 ? (
                    <div className="research-pathways relative -mx-2 mb-2 overflow-hidden rounded-[1.4rem] border border-cyan-200/10 bg-slate-950">
                      <Image
                        src="/story/interpretable-ai-pathways.png"
                        alt="Editorial visualization of interpretable AI pathways converging and branching through semantic reasoning traces."
                        width={1024}
                        height={576}
                        sizes="(min-width: 1024px) 54vw, 100vw"
                        priority={false}
                        className="aspect-[16/9] w-full object-cover opacity-90"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0,rgba(2,6,23,0.18)_42%,rgba(2,6,23,0.82)_100%)]" />
                      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3">
                        <span className="rounded-full border border-cyan-200/15 bg-slate-950/75 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.22em] text-cyan-100 backdrop-blur">
                          Semantic trace map
                        </span>
                        <span className="text-xs text-slate-300">Interpretability as a design material</span>
                      </div>
                    </div>
                  ) : null}
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-xs uppercase tracking-[0.26em] text-cyan-300/75">{item.status}</p>
                      {index === 0 ? (
                        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3 py-1 text-xs text-cyan-100">
                          Peer-readable artifact
                        </span>
                      ) : null}
                    </div>
                    <h3 className={`${index === 0 ? 'text-3xl sm:text-4xl' : 'text-2xl'} editorial-serif font-semibold tracking-normal text-white`}>
                      {item.title}
                    </h3>
                    {item.authors ? <p className="text-sm font-medium text-slate-200">{item.authors}</p> : null}
                    <p className="text-sm leading-7 text-slate-300">{item.focus}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-100"
                      >
                        View publication and DOI
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    ) : null}
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-800/90 bg-slate-900/85 px-4 py-2 text-sm text-slate-200"
                      >
                        <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-800/90 p-7 sm:p-8 lg:border-l lg:border-t-0">
                  {index === 0 ? (
                    <div className="mb-8">
                      <p className="mb-3 text-[0.65rem] uppercase tracking-[0.24em] text-slate-500">
                        Reported benchmark evidence
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4">
                          <p className="text-3xl font-semibold text-white">78.4%</p>
                          <p className="mt-1 text-xs text-slate-500">GeoQuery exact match</p>
                        </div>
                        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4">
                          <p className="text-3xl font-semibold text-white">74.1%</p>
                          <p className="mt-1 text-xs text-slate-500">ATIS exact match</p>
                        </div>
                      </div>
                      <p className="mt-5 border-l border-cyan-300/40 pl-4 text-sm leading-7 text-slate-300">
                        The work connects formal, inspectable transformations with modern NLP tooling,
                        making model behavior easier to trace than opaque end-to-end generation.
                      </p>
                    </div>
                  ) : null}
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/75">Method & contribution</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-400" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
