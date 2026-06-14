'use client';

import { useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, Check, GitBranch, Layers3, Target, Wrench } from 'lucide-react';
import { ProjectButton, ProjectItem } from '@/data/projects';

/* ─── Types ─────────────────────────────────────────────────────────── */

type ProjectShowcaseProps = {
  project: ProjectItem;
  index: number;
};

type NarrativeState = {
  label: 'Challenge' | 'Architecture' | 'Engineering Decisions' | 'Impact';
  eyebrow: string;
  body: string;
  points: string[];
  icon: typeof Target;
};

/* ─── Shared Constants ──────────────────────────────────────────────── */

const EASE = [0.22, 1, 0.36, 1] as const;
const TRANSITION_DURATION = 0.42;

/* ─── Data Helpers ──────────────────────────────────────────────────── */

function getNarrativeStates(project: ProjectItem): NarrativeState[] {
  return [
    {
      label: 'Challenge',
      eyebrow: 'What needed to become clear',
      body: project.challenge,
      points: [project.description],
      icon: Target,
    },
    {
      label: 'Architecture',
      eyebrow: 'How the system is shaped',
      body: project.architecture,
      points: project.technologies.slice(0, 5),
      icon: Layers3,
    },
    {
      label: 'Engineering Decisions',
      eyebrow: 'Where judgment shows up',
      body: project.decision,
      points: project.highlights.slice(0, 4),
      icon: Wrench,
    },
    {
      label: 'Impact',
      eyebrow: 'What the work proves',
      body: project.proof,
      points: project.impact,
      icon: Check,
    },
  ];
}

/* ─── Subcomponents ─────────────────────────────────────────────────── */

/**
 * GraphVisual — SVG-based visual for the GraphSpace project
 * (which has no screenshot). Unchanged from the original.
 */
function GraphVisual() {
  return (
    <div className="relative min-h-[24rem] overflow-hidden bg-[#050c17] p-5 sm:p-7">
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.22em] text-slate-500">Repository topology</p>
          <p className="mt-2 text-xl font-medium text-white">Collaborative graph system</p>
        </div>
        <span className="rounded-full border border-emerald-300/20 bg-emerald-300/[0.06] px-3 py-1 text-xs text-emerald-200">
          Checks passing
        </span>
      </div>
      <svg
        viewBox="0 0 640 330"
        role="img"
        aria-label="Graph of connected frontend, Python, workflow, and review nodes"
        className="mt-3 w-full"
      >
        <g stroke="rgba(103,232,249,0.22)" strokeWidth="2">
          <line x1="120" y1="160" x2="310" y2="75" />
          <line x1="120" y1="160" x2="315" y2="255" />
          <line x1="310" y1="75" x2="510" y2="160" />
          <line x1="315" y1="255" x2="510" y2="160" />
          <line x1="310" y1="75" x2="315" y2="255" strokeDasharray="7 8" />
        </g>
        {[
          { x: 120, y: 160, label: 'React', fill: '#67e8f9' },
          { x: 310, y: 75, label: 'Python', fill: '#a5b4fc' },
          { x: 315, y: 255, label: 'Workflow', fill: '#6ee7b7' },
          { x: 510, y: 160, label: 'Review', fill: '#f8fafc' },
        ].map((node) => (
          <g key={node.label}>
            <circle cx={node.x} cy={node.y} r="42" fill="rgba(2,6,23,0.95)" stroke={node.fill} strokeOpacity="0.55" />
            <circle cx={node.x} cy={node.y} r="5" fill={node.fill} />
            <text x={node.x} y={node.y + 64} fill="#94a3b8" fontSize="13" textAnchor="middle">
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/**
 * ProjectMedia — The visual evidence panel.
 * Displays either an editorial image or the GraphVisual SVG fallback.
 * Renders stats bar below.
 */
function ProjectMedia({ project }: { project: ProjectItem }) {
  return (
    <div className="relative overflow-hidden border border-white/[0.08] bg-slate-950/90">
      <div className="flex items-center justify-between gap-4 border-b border-white/[0.06] px-5 py-4">
        <span className="text-[0.64rem] uppercase tracking-[0.24em] text-slate-500">{project.visualLabel}</span>
        <GitBranch className="h-4 w-4 text-cyan-300/70" aria-hidden="true" />
      </div>
      {project.visualImage ? (
        <div className="relative min-h-[22rem] overflow-hidden bg-[#050c17] sm:min-h-[28rem]">
          <Image
            src={project.visualImage}
            alt={project.visualAlt ?? project.visualLabel}
            width={1024}
            height={576}
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="h-full min-h-[22rem] w-full object-cover opacity-90 saturate-[0.95] sm:min-h-[28rem]"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.05),rgba(2,6,23,0.78))]" />
          <div className="pointer-events-none absolute left-0 top-0 h-20 w-24 bg-gradient-to-br from-[#050c17] via-[#050c17]/85 to-transparent" />
          <p className="absolute bottom-5 left-5 right-5 max-w-xl border-l border-cyan-200/50 pl-4 text-sm leading-6 text-slate-100">
            {project.visualIntent}
          </p>
        </div>
      ) : (
        <GraphVisual />
      )}
      <div className="grid grid-cols-3 border-t border-white/[0.06] bg-slate-950/95">
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

/**
 * ActionButton — External link button for GitHub / live demo.
 */
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

/**
 * NarrativePanel — Renders a single narrative state's content.
 *
 * Motion behaviour:
 * - Enter: slides up from y:18, fades in (matches scroll direction)
 * - Exit:  slides up to y:-8, fades out (text "ascends" as you pass it)
 * - Reduced motion: renders statically with no animation
 */
function NarrativePanel({ state, reduced = false }: { state: NarrativeState; reduced?: boolean }) {
  const Icon = state.icon;

  return (
    <motion.div
      key={state.label}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      animate={reduced ? undefined : { opacity: 1, y: 0 }}
      exit={reduced ? undefined : { opacity: 0, y: -8 }}
      transition={{ duration: reduced ? 0 : TRANSITION_DURATION, ease: EASE }}
      className="min-h-[20rem]"
    >
      <div className="flex items-center gap-3 text-cyan-200">
        <Icon className="h-4 w-4" aria-hidden="true" />
        <p className="font-mono text-xs uppercase tracking-[0.24em]">{state.eyebrow}</p>
      </div>
      <h4 className="editorial-serif mt-6 text-3xl font-semibold tracking-normal text-white sm:text-4xl">
        {state.label}
      </h4>
      <p className="mt-5 max-w-xl text-base leading-8 text-slate-200 sm:text-lg sm:leading-8">{state.body}</p>
      <ul className="mt-7 space-y-3.5 text-sm leading-6 text-slate-300">
        {state.points.map((point) => (
          <li key={point} className="grid grid-cols-[0.75rem_1fr] gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/**
 * ProgressRail — Vertical progress indicator with stacked labels.
 *
 * Design decision: Labels stack vertically along a thin rail rather than
 * in a horizontal 4-column grid. This reads like a table of contents
 * in an editorial layout, giving each label room to breathe.
 *
 * The cyan fill line and active dot slide as the user scrolls.
 */
function ProgressRail({
  states,
  activeState,
  progressHeight,
  projectTitle,
}: {
  states: NarrativeState[];
  activeState: number;
  progressHeight: MotionValue<string>;
  projectTitle: string;
}) {
  return (
    <div
      className="flex gap-5"
      aria-label={`${projectTitle} narrative progress`}
      role="tablist"
    >
      {/* The vertical rail */}
      <div className="relative w-3 shrink-0 pt-0.5" aria-hidden="true">
        {/* Background track */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-slate-800" />
        {/* Cyan fill — grows with scroll */}
        <motion.div
          className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-cyan-300/80"
          style={{ height: progressHeight }}
        />
        {/* Dots at each state position */}
        {states.map((state, i) => (
          <div
            key={state.label}
            className={`narrative-dot absolute left-1/2 -translate-x-1/2 ${
              i <= activeState ? 'narrative-dot--active' : 'narrative-dot--inactive'
            }`}
            style={{ top: `${(i / (states.length - 1)) * 100}%`, transform: 'translate(-50%, -50%)' }}
          />
        ))}
      </div>

      {/* Stacked state labels */}
      <div className="flex flex-1 flex-col justify-between py-0.5">
        {states.map((state, i) => (
          <p
            key={state.label}
            role="tab"
            aria-selected={i === activeState}
            aria-controls={`narrative-panel-${projectTitle}-${state.label}`}
            className={`text-[0.65rem] uppercase tracking-[0.2em] transition-colors duration-300 ${
              i === activeState ? 'text-cyan-200' : 'text-slate-600'
            }`}
          >
            {state.label}
          </p>
        ))}
      </div>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────────────── */

/**
 * ProjectShowcase — Renders a single project as an editorial "chapter."
 *
 * Layout on large screens (lg+):
 *   Left column  (~45%): Project identity → progress rail → narrative panel → tech tags → action buttons
 *   Right column (~55%): Media panel, pinned alongside the narrative
 *
 * The entire article uses sticky positioning with a tall scroll container
 * (420vh) so that the viewport-pinned layout can transition through 4
 * narrative states as the user scrolls.
 *
 * Mobile: Everything stacks vertically with all states visible, no sticky.
 */
export function ProjectShowcase({ project, index }: ProjectShowcaseProps) {
  const targetRef = useRef<HTMLElement | null>(null);
  const [activeState, setActiveState] = useState(0);
  const reduceMotion = useReducedMotion();
  const states = getNarrativeStates(project);
  const shouldUseSticky = reduceMotion === false;
  const mediaOnLeft = index % 2 === 1;
  const narrativeOrder = mediaOnLeft ? 'lg:order-2' : 'lg:order-1';
  const mediaOrder = mediaOnLeft ? 'lg:order-1' : 'lg:order-2';
  const gridColumns = mediaOnLeft
    ? 'lg:grid-cols-[minmax(24rem,1.1fr)_minmax(0,0.9fr)]'
    : 'lg:grid-cols-[minmax(0,0.9fr)_minmax(24rem,1.1fr)]';

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const mediaScale = useTransform(scrollYProgress, [0, 1], [0.985, 1.015]);
  const mediaY = useTransform(scrollYProgress, [0, 1], [12, -12]);
  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (!shouldUseSticky) return;
    const nextState = Math.min(states.length - 1, Math.max(0, Math.floor(latest * states.length)));
    setActiveState(nextState);
  });

  return (
    <article
      ref={targetRef}
      aria-labelledby={`project-${index}-title`}
      className={`relative ${shouldUseSticky ? 'lg:min-h-[420vh]' : ''}`}
    >
      <div
        className={`mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 ${
          shouldUseSticky ? 'lg:sticky lg:top-16 lg:flex lg:min-h-[calc(100vh-4rem)] lg:items-center lg:py-10' : ''
        }`}
      >
        {/*
         * Editorial grid: text-left (story), media-right (evidence).
         * Reading order puts the narrative first — the media supports it.
         * On mobile, media drops below all the text content.
         */}
        <div className={`grid w-full gap-12 ${gridColumns} lg:items-start lg:gap-16`}>

          {/* ── Left Column: Narrative ──────────────────────────────── */}
          <div className={`order-1 ${narrativeOrder}`}>

            {/* Opening Spread — Project Identity */}
            <div className="mb-8">
              <div className="flex items-center justify-between gap-5">
                <p className="font-mono text-xs text-cyan-300/70">
                  {String(index + 1).padStart(2, '0')} / SELECTED WORK
                </p>
                <span className="text-xs uppercase tracking-[0.2em] text-slate-600">
                  {project.technologies[0]}
                </span>
              </div>

              <h3
                id={`project-${index}-title`}
                className="editorial-serif mt-6 text-5xl font-semibold tracking-normal text-white sm:text-6xl"
              >
                {project.title}
              </h3>
              <p className="mt-3 text-lg text-cyan-100/80">{project.subtitle}</p>

              {/* Editorial rule — separates identity from narrative */}
              <div className="project-divider mt-8" aria-hidden="true" />
            </div>

            {/* Desktop: Progress Rail + Animated Narrative ───────── */}
            <div className="hidden lg:grid lg:grid-cols-[3.5rem_1fr] lg:gap-4">
              <ProgressRail
                states={states}
                activeState={shouldUseSticky ? activeState : states.length - 1}
                progressHeight={progressHeight}
                projectTitle={project.title}
              />

              <div>
                {reduceMotion ? (
                  <div className="space-y-10">
                    {states.map((state) => (
                      <NarrativePanel key={state.label} state={state} reduced />
                    ))}
                  </div>
                ) : (
                  <AnimatePresence mode="wait">
                    <NarrativePanel
                      state={states[activeState]}
                    />
                  </AnimatePresence>
                )}
              </div>
            </div>

            {/* Mobile: All states rendered statically ───────────── */}
            <div className="mt-2 space-y-10 lg:hidden">
              {states.map((state) => (
                <NarrativePanel key={state.label} state={state} reduced={Boolean(reduceMotion)} />
              ))}
            </div>

            {/* Tech tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span key={technology} className="rounded-full border border-slate-800 px-3 py-1.5 text-xs text-slate-400">
                  {technology}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            {project.buttons.length ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.buttons.map((button) => (
                  <ActionButton key={button.label} button={button} />
                ))}
              </div>
            ) : null}
          </div>

          {/* ── Right Column: Media ─────────────────────────────── */}
          <motion.div
            style={shouldUseSticky ? { scale: mediaScale, y: mediaY } : undefined}
            className={`order-2 ${mediaOrder}`}
          >
            <ProjectMedia project={project} />
          </motion.div>
        </div>
      </div>
    </article>
  );
}
