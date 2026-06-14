import { motion } from 'framer-motion';
import { JourneyEntry } from '@/data/timeline';

type TimelineCardProps = {
  entry: JourneyEntry;
  index: number;
};

export function TimelineCard({ entry, index }: TimelineCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay: index * 0.07 }}
      className="group rounded-[2rem] border border-slate-800/90 bg-slate-950/80 p-7 shadow-[0_0_0_1px_rgba(148,163,184,0.06)] transition hover:-translate-y-0.5"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-300/10">
              <span className="text-sm font-semibold">{index + 1}</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{entry.title}</h3>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">{entry.period}</p>
            </div>
          </div>
          {entry.role ? <p className="text-sm text-slate-400">{entry.role}</p> : null}
        </div>

        {entry.tags ? (
          <div className="flex flex-wrap gap-2">
            {entry.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-slate-800/90 bg-slate-900/85 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      <div className="mt-6 space-y-4">
        {entry.details.map((detail) => (
          <p key={detail} className="text-sm leading-7 text-slate-300">
            {detail}
          </p>
        ))}
      </div>
    </motion.article>
  );
}
