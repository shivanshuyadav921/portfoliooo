import { motion } from 'framer-motion';
import { achievements } from '@/data/skills';
import { Sparkles } from 'lucide-react';

export function AchievementsSection() {
  return (
    <section id="achievements" className="scroll-mt-24 border-t border-slate-800/80 py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-10 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Achievements</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Recognized milestones that reflect creativity, technical rigor, and consistent problem solving.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            These achievements highlight competitive participation, research-driven collaboration, and a strong track record in algorithmic practice.
          </p>
        </motion.div>

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr] xl:items-start">
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <motion.article
                key={achievement.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.75, delay: index * 0.08 }}
                className="rounded-[2rem] border border-slate-800/90 bg-slate-950/80 p-7 shadow-[0_0_0_1px_rgba(148,163,184,0.06)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">{achievement.description}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.12 }}
            className="rounded-[2rem] border border-cyan-500/10 bg-slate-900/80 p-8 shadow-glow"
          >
            <div className="rounded-[2rem] border border-slate-800/90 bg-slate-950/85 p-8 text-slate-300 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Problem solving</p>
              <h3 className="mt-4 text-4xl font-semibold tracking-tight text-white">100+ problems solved</h3>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                A sustained problem-solving practice across algorithm platforms that reinforces both research thinking and software craftsmanship.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
