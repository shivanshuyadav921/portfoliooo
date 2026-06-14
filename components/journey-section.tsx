import { motion } from 'framer-motion';
import { journeyTimeline } from '@/data/timeline';
import { TimelineCard } from '@/components/timeline-card';

export function JourneySection() {
  return (
    <section id="journey" className="scroll-mt-24 border-t border-slate-800/80 py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-10 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Journey</p>
          <h2 className="editorial-serif mt-4 text-4xl font-semibold tracking-normal text-white sm:text-5xl">
            A timeline of engineering judgment, research curiosity, and continuous learning.
          </h2>
        </motion.div>

        <div className="space-y-16">
          {journeyTimeline.map((section, sectionIndex) => (
            <div key={section.sectionTitle} className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: sectionIndex * 0.05 }}
                className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"
              >
                <div className="rounded-[2rem] border border-slate-800/90 bg-slate-950/80 p-7 shadow-[0_0_0_1px_rgba(148,163,184,0.06)]">
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">{section.sectionTitle}</p>
                  <p className="mt-4 text-lg leading-8 text-slate-300">{section.sectionRole}</p>
                </div>
                <div className="space-y-6">
                  {section.entries.map((entry, entryIndex) => (
                    <div key={entry.id} className="relative">
                      <div className="absolute left-0 top-4 h-10 w-0.5 bg-cyan-500/30" />
                      <TimelineCard entry={entry} index={entryIndex} />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
