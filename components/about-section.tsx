import { motion } from 'framer-motion';

const storyCards = [
  {
    label: 'Research-led engineering',
    description:
      'I combine algorithmic rigor with practical software design to build systems that are both reliable and explainable.',
  },
  {
    label: 'Real-world systems',
    description:
      'I enjoy turning complex AI research into production-grade software with clean interfaces and thoughtful architecture.',
  },
  {
    label: 'Language-aware AI',
    description:
      'My work focuses on multilingual NLP, semantic parsing, and the trustworthiness of modern language systems.',
  },
];

const exploringTopics = [
  'Explainable AI (XAI)',
  'Multilingual NLP',
  'Agentic RAG Systems',
  'Semantic Parsing',
  'Full-Stack Engineering',
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-10 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">About Me</p>
          <h2 className="editorial-serif mt-4 text-4xl font-semibold tracking-normal text-white sm:text-5xl">
            Building reliable software and trustworthy AI systems.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            I am a Computer Science (Data Science) student at VIT Vellore with a strong passion for software engineering, algorithmic problem solving, and AI research. I focus on multilingual NLP, explainable AI, and retrieval-augmented generation systems, while building scalable applications that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="space-y-4 rounded-[2rem] border border-slate-800/90 bg-slate-950/80 p-7 shadow-[0_0_0_1px_rgba(148,163,184,0.06)] backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/75">My approach</p>
              <div className="space-y-4 text-slate-300">
                <p>
                  I believe strong software starts with clear abstractions and measurable outcomes. My work blends engineering discipline with research curiosity, so every feature is backed by purpose and every model is built for trust.
                </p>
                <p>
                  Whether I&apos;m optimizing a backend service, visualizing algorithms, or evaluating model reliability, I seek solutions that are maintainable, interpretable, and aligned with real user needs.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {storyCards.map((card, index) => (
                <motion.article
                  key={card.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  className="rounded-3xl border border-slate-800/90 bg-slate-900/80 p-6 shadow-[0_0_0_1px_rgba(148,163,184,0.05)]"
                >
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300/80">{card.label}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{card.description}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="rounded-[2rem] border border-slate-800/90 bg-slate-950/80 p-8 shadow-glow"
          >
            <div className="space-y-6">
              <div className="rounded-3xl bg-slate-900/95 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/75">Currently exploring</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {exploringTopics.map((topic) => (
                    <div key={topic} className="rounded-3xl border border-slate-800/90 bg-slate-950/90 px-4 py-3 text-sm text-slate-200 shadow-[0_8px_30px_-24px_rgba(56,189,248,0.9)] transition hover:-translate-y-0.5 hover:border-cyan-400/40">
                      {topic}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-800/90 bg-slate-900/90 p-6 text-slate-300">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/75">Research & engineering</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  I work at the intersection of production engineering and research innovation. This means building APIs, tools, and models that are not only performant but also explainable and trustworthy.
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
