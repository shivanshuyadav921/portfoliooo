import { motion } from 'framer-motion';
import { BarChart3, Code2, Github } from 'lucide-react';
import { codingProfiles } from '@/data/skills';

const profileIcons = {
  GitHub: Github,
  LeetCode: Code2,
  HackerRank: BarChart3,
};

export function CodingProfilesSection() {
  return (
    <section id="coding-profiles" className="scroll-mt-24 border-t border-slate-800/80 py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-10 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Coding Profiles</p>
          <h2 className="editorial-serif mt-4 text-4xl font-semibold tracking-normal text-white sm:text-5xl">
            Public problem solving and code craftsmanship across modern developer platforms.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            These profiles capture my growth in open source, algorithmic practice, and applied programming challenges. Live stats can be connected later through APIs.
          </p>
        </motion.div>

        <div className="grid gap-6 xl:grid-cols-3">
          {codingProfiles.map((profile, index) => {
            const Icon = profileIcons[profile.platform as keyof typeof profileIcons];
            return (
              <motion.article
                key={profile.platform}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.75, delay: index * 0.08 }}
                className="group rounded-[2rem] border border-slate-800/90 bg-slate-950/80 p-6 shadow-[0_0_0_1px_rgba(148,163,184,0.06)] transition hover:-translate-y-1 hover:border-cyan-500/30"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">{profile.platform}</p>
                    <h3 className="mt-4 text-2xl font-semibold text-white">{profile.platform}</h3>
                  </div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
                    {Icon ? (
                      <Icon className="h-5 w-5" />
                    ) : (
                      <span className="text-xs">?</span>
                    )}
                  </span>
                </div>
                <p className="mt-6 text-sm leading-7 text-slate-300">{profile.description}</p>

                <div className="mt-6 grid gap-3">
                  {profile.stats.map((stat) => (
                    <div key={stat.label} className="rounded-3xl border border-slate-800/90 bg-slate-900/85 px-4 py-3 text-sm text-slate-200">
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{stat.label}</p>
                      <p className="mt-2 text-lg font-semibold text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {profile.href ? <div className="mt-6">
                  <a
                    href={profile.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-cyan-500/20 bg-slate-900/90 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/10"
                  >
                    Visit profile
                  </a>
                </div> : null}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
