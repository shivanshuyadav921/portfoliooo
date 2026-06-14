import { motion } from 'framer-motion';
import { skillCategories } from '@/data/skills';

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-slate-800/80 py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-10 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Technical Skills</p>
          <h2 className="editorial-serif mt-4 text-4xl font-semibold tracking-normal text-white sm:text-5xl">
            An elegant blend of software engineering, AI research, and production-grade delivery.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            The technical foundation that supports my engineering work and research experiments across full-stack systems, machine learning pipelines, and reliability-focused architectures.
          </p>
        </motion.div>

        <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
          <div className="space-y-6">
            {skillCategories.map((category, index) => (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.75, delay: index * 0.06 }}
                className="rounded-[2rem] border border-slate-800/90 bg-slate-950/80 p-7 shadow-[0_0_0_1px_rgba(148,163,184,0.06)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{category.description}</p>
                  </div>
                  <div className="rounded-3xl bg-slate-900/90 px-4 py-2 text-xs uppercase tracking-[0.26em] text-cyan-300">
                    Core
                  </div>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="inline-flex items-center justify-between rounded-3xl border border-slate-800/90 bg-slate-900/85 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:bg-slate-950">
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.12 }}
            className="rounded-[2rem] border border-slate-800/90 bg-slate-950/80 p-8 shadow-glow"
          >
            <div className="rounded-[1.8rem] border border-slate-800/90 bg-slate-900/95 p-8 text-slate-300 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Expertise convergence</p>
                  <h3 className="mt-4 text-3xl font-semibold text-white">A skillset built for complex systems and trustworthy AI.</h3>
                </div>
                <p className="text-sm leading-7 text-slate-300">
                  This suite of skills supports everything from scalable product development to sophisticated research workflows in multilingual NLP and model evaluation.
                </p>
                <div className="grid gap-3">
                  <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-5 text-slate-200">
                    <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Research systems</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Build evaluation pipelines, semantic parsing models, and agents that prioritize explainability.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-slate-800/90 bg-slate-950/90 p-5 text-slate-200">
                    <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Engineering delivery</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Deploy production-ready services with secure API design, containerization, and CI/CD practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
