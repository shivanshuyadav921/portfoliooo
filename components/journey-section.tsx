'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { journeyTimeline } from '@/data/timeline';

const ease = [0.22, 1, 0.36, 1] as const;

export function JourneySection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="journey" className="scroll-mt-24 border-t border-white/[0.08] py-24 sm:py-32">
      <div className="mx-auto max-w-[92rem] px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: reduceMotion ? 0 : 0.45, ease }}
          className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-end"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">Journey</p>
            <h2 className="editorial-serif mt-5 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              A timeline of judgment.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-slate-300 lg:justify-self-end">
            The timeline stays intentionally spare. It shows how education, research, and project work are starting
            to converge into a single practice of building serious systems.
          </p>
        </motion.div>

        <div className="mt-14 space-y-12">
          {journeyTimeline.map((section, sectionIndex) => (
            <motion.div
              key={section.sectionTitle}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : sectionIndex * 0.04, ease }}
              className="grid gap-8 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:gap-12"
            >
              <div className="border-t border-white/[0.08] pt-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{section.sectionTitle}</p>
                {section.sectionRole ? (
                  <p className="mt-4 max-w-md text-base leading-8 text-slate-300">{section.sectionRole}</p>
                ) : null}
              </div>

              <div className="space-y-8">
                {section.entries.map((entry) => (
                  <article key={entry.id} className="border-t border-white/[0.08] pt-5">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-[0.62rem] uppercase tracking-[0.28em] text-cyan-200/70">{entry.period}</p>
                        <h3 className="editorial-serif mt-3 text-3xl font-semibold tracking-tight text-white">
                          {entry.title}
                        </h3>
                        {entry.role ? <p className="mt-3 text-sm text-slate-400">{entry.role}</p> : null}
                      </div>
                      {entry.tags ? (
                        <div className="flex flex-wrap gap-2">
                          {entry.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-slate-800/90 bg-slate-900/35 px-3 py-1.5 text-xs text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>

                    <div className="mt-5 space-y-3">
                      {entry.details.map((detail) => (
                        <p key={detail} className="max-w-3xl text-sm leading-7 text-slate-300">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
