'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, GitBranch, Layers3 } from 'lucide-react';
import { ProjectButton, ProjectItem } from '@/data/projects';

type ProjectShowcaseProps = {
  project: ProjectItem;
  index: number;
};

const ease = [0.22, 1, 0.36, 1] as const;

function ActionButton({ button }: { button: ProjectButton }) {
  return (
    <a
      href={button.href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-700 bg-white/[0.02] px-5 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.06]"
    >
      {button.label}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

function ChapterLine({
  label,
  body,
  accent = false,
}: {
  label: string;
  body: string;
  accent?: boolean;
}) {
  return (
    <div className="grid gap-4 border-t border-white/[0.08] pt-5 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-8">
      <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{label}</p>
      <p className={`max-w-3xl text-sm leading-7 ${accent ? 'text-slate-100' : 'text-slate-300'}`}>{body}</p>
    </div>
  );
}

export function ProjectVisual({ project }: { project: ProjectItem }) {
  if (project.visualVariant === 'graph' || !project.visualImage) {
    return (
      <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#060c17]">
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
          <span className="text-[0.62rem] uppercase tracking-[0.26em] text-slate-500">{project.visualLabel}</span>
          <GitBranch className="h-4 w-4 text-cyan-300/70" aria-hidden="true" />
        </div>
        <div className="relative min-h-[28rem] px-6 py-8 sm:px-8">
          <svg
            viewBox="0 0 720 420"
            role="img"
            aria-label="Repository topology with connected nodes for frontend, Python, workflow, and review"
            className="h-full w-full"
          >
            <g stroke="rgba(103,232,249,0.22)" strokeWidth="2">
              <line x1="125" y1="190" x2="290" y2="110" />
              <line x1="125" y1="190" x2="298" y2="300" />
              <line x1="290" y1="110" x2="515" y2="195" />
              <line x1="298" y1="300" x2="515" y2="195" />
              <line x1="290" y1="110" x2="298" y2="300" strokeDasharray="6 8" />
            </g>
            {[
              { x: 125, y: 190, label: 'React', fill: '#67e8f9' },
              { x: 290, y: 110, label: 'Python', fill: '#a5b4fc' },
              { x: 298, y: 300, label: 'Workflow', fill: '#6ee7b7' },
              { x: 515, y: 195, label: 'Review', fill: '#e2e8f0' },
            ].map((node) => (
              <g key={node.label}>
                <circle cx={node.x} cy={node.y} r="42" fill="rgba(2,6,23,0.95)" stroke={node.fill} strokeOpacity="0.55" />
                <circle cx={node.x} cy={node.y} r="5" fill={node.fill} />
                <text x={node.x} y={node.y + 62} fill="#94a3b8" fontSize="13" textAnchor="middle">
                  {node.label}
                </text>
              </g>
            ))}
          </svg>
          <p className="mt-6 max-w-lg border-l border-cyan-300/35 pl-4 text-sm leading-7 text-slate-300">
            {project.visualIntent}
          </p>
        </div>
        <div className="grid grid-cols-3 border-t border-white/[0.06]">
          {project.visualStats.map((stat) => (
            <div key={stat.label} className="border-r border-white/[0.06] p-4 last:border-r-0">
              <p className="text-[0.6rem] uppercase tracking-[0.2em] text-slate-600">{stat.label}</p>
              <p className="mt-1 text-sm font-medium text-slate-200">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#060c17]">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
        <span className="text-[0.62rem] uppercase tracking-[0.26em] text-slate-500">{project.visualLabel}</span>
        <Layers3 className="h-4 w-4 text-cyan-300/70" aria-hidden="true" />
      </div>
      <div className="relative min-h-[28rem] overflow-hidden">
        <Image
          src={project.visualImage}
          alt={project.visualAlt ?? project.visualLabel}
          width={1024}
          height={576}
          sizes="(min-width: 1024px) 52vw, 100vw"
          className="h-full min-h-[28rem] w-full object-cover opacity-90 saturate-[0.95]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.84))]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,transparent_0,rgba(2,6,23,0.12)_35%,rgba(2,6,23,0.86)_100%)]" />
        <p className="absolute bottom-6 left-6 right-6 max-w-xl border-l border-cyan-300/35 pl-4 text-sm leading-7 text-slate-100">
          {project.visualIntent}
        </p>
      </div>
      <div className="grid grid-cols-3 border-t border-white/[0.06]">
        {project.visualStats.map((stat) => (
          <div key={stat.label} className="border-r border-white/[0.06] p-4 last:border-r-0">
            <p className="text-[0.6rem] uppercase tracking-[0.2em] text-slate-600">{stat.label}</p>
            <p className="mt-1 text-sm font-medium text-slate-200">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectShowcase({ project, index }: ProjectShowcaseProps) {
  const reduceMotion = useReducedMotion();
  const mediaOnLeft = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: reduceMotion ? 0 : 0.45, ease }}
      className="scroll-mt-24 border-t border-white/[0.06] py-16 sm:py-20 lg:min-h-[112svh] lg:py-24"
    >
      <div className="mx-auto max-w-[92rem] px-4 sm:px-8 lg:px-12">
        <div
          className={`grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-16 ${
            mediaOnLeft ? 'lg:[grid-template-columns:minmax(0,1.08fr)_minmax(0,0.92fr)]' : ''
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease }}
            className={mediaOnLeft ? 'lg:order-2' : 'lg:order-1'}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">
              {String(index + 1).padStart(2, '0')} / Selected Work
            </p>
            <h3 className="editorial-serif mt-5 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              {project.title}
            </h3>
            <p className="mt-5 max-w-xl text-lg leading-8 text-cyan-100/82">{project.subtitle}</p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">{project.description}</p>

            <div className="mt-10 space-y-5">
              <ChapterLine label="Opening spread" body={project.description} accent />
              <ChapterLine label="The problem" body={project.challenge} />
              <ChapterLine label="The system" body={project.architecture} />
              <ChapterLine
                label="The decisions"
                body={`${project.decision} ${project.highlights.length ? project.highlights[0] : ''}`.trim()}
              />
              <ChapterLine label="The impact" body={project.impact.join(' ')} />
              <div className="grid gap-5 border-t border-white/[0.08] pt-5 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-8">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">The evidence</p>
                <div className="space-y-5">
                  <p className="max-w-3xl text-sm leading-7 text-slate-200">{project.proof}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-slate-800/90 bg-slate-900/40 px-3 py-1.5 text-xs text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                  {project.buttons.length ? (
                    <div className="flex flex-wrap gap-3">
                      {project.buttons.map((button) => (
                        <ActionButton key={button.label} button={button} />
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease }}
            className={mediaOnLeft ? 'lg:order-1 lg:sticky lg:top-24' : 'lg:order-2 lg:sticky lg:top-24'}
          >
            <ProjectVisual project={project} />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
