import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ProjectButton, ProjectItem } from '@/data/projects';

type ProjectShowcaseProps = {
  project: ProjectItem;
  reverse?: boolean;
  index: number;
};

const ease = [0.22, 1, 0.36, 1] as const;

function ActionButton({ button }: { button: ProjectButton }) {
  return (
    <a
      href={button.href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-700 bg-white/[0.03] px-5 text-sm font-semibold text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/[0.07]"
    >
      {button.label}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

export function ProjectShowcase({ project, reverse = false, index }: ProjectShowcaseProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.85, ease }}
      className="group border-t border-slate-800/90 py-12 sm:py-16 lg:py-20"
    >
      <div className={`grid gap-10 lg:grid-cols-12 lg:items-start ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <div className="lg:col-span-5">
          <div className="flex items-center justify-between gap-5">
            <p className="font-mono text-xs text-cyan-300/70">0{index + 1} / SELECTED WORK</p>
            <span className="text-xs uppercase tracking-[0.2em] text-slate-600">{project.technologies[0]}</span>
          </div>
          <h3 className="mt-8 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            {project.title}
          </h3>
          <p className="mt-3 text-lg text-cyan-100/80">{project.subtitle}</p>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-300">{project.description}</p>

          <div className="mt-8 grid gap-6 border-y border-slate-800/80 py-7 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Engineering approach</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                {project.highlights.slice(0, 3).map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Outcome</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                {project.impact.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-800 px-3 py-1.5 text-xs text-slate-400 transition duration-300 group-hover:border-slate-700 group-hover:text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>

          {project.buttons.length ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.buttons.map((button) => (
                <ActionButton key={button.label} button={button} />
              ))}
            </div>
          ) : null}
        </div>

        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#07111f] p-4 shadow-[0_40px_100px_-55px_rgba(34,211,238,0.45)] sm:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,_rgba(34,211,238,0.12),_transparent_35%)]" />
            <div className="relative overflow-hidden rounded-[1.4rem] border border-white/[0.07] bg-slate-950/90">
              <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-4">
                <span className="h-2 w-2 rounded-full bg-rose-400/70" />
                <span className="h-2 w-2 rounded-full bg-amber-300/70" />
                <span className="h-2 w-2 rounded-full bg-emerald-300/70" />
                <span className="ml-4 text-[10px] uppercase tracking-[0.24em] text-slate-600">
                  {project.visualLabel}
                </span>
              </div>
              <div className="grid min-h-[24rem] gap-px bg-white/[0.05] sm:grid-cols-[0.34fr_0.66fr]">
                <div className="bg-slate-950 p-5">
                  <div className="h-2 w-16 rounded-full bg-cyan-300/25" />
                  <div className="mt-8 space-y-3">
                    {[72, 54, 64, 45].map((width) => (
                      <div key={width} className="h-2 rounded-full bg-slate-800" style={{ width: `${width}%` }} />
                    ))}
                  </div>
                  <div className="mt-12 aspect-square rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.03] p-4">
                    <div className="h-full rounded-xl border border-dashed border-cyan-300/20" />
                  </div>
                </div>
                <div className="bg-[#050c17] p-5 sm:p-7">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="h-2 w-20 rounded-full bg-slate-700" />
                      <div className="mt-3 h-5 w-40 rounded-full bg-slate-200/80" />
                    </div>
                    <div className="h-9 w-9 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06]" />
                  </div>
                  <div className="mt-10 grid gap-3 sm:grid-cols-3">
                    {[0, 1, 2].map((item) => (
                      <div key={item} className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-4">
                        <div className="h-2 w-10 rounded-full bg-slate-700" />
                        <div className="mt-4 h-6 w-16 rounded-full bg-cyan-200/70" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.025] p-5">
                    <div className="flex h-36 items-end gap-2">
                      {[38, 72, 55, 88, 68, 95, 76].map((height, item) => (
                        <div
                          key={`${height}-${item}`}
                          className="flex-1 rounded-t bg-gradient-to-t from-cyan-500/20 to-cyan-300/70"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
