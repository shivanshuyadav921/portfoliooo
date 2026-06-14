import { motion } from 'framer-motion';
import { ArrowUpRight, Camera, Check, GitBranch, Play, ScanLine } from 'lucide-react';
import { ProjectButton, ProjectItem } from '@/data/projects';

type ProjectShowcaseProps = {
  project: ProjectItem;
  reverse?: boolean;
  index: number;
};

const ease = [0.22, 1, 0.36, 1] as const;

function PipelineVisual() {
  const stages = [
    ['01', 'Resume', 'Parsed context'],
    ['02', 'Retrieval', 'Grounded evidence'],
    ['03', 'LLM router', 'Provider fallback'],
    ['04', 'Evaluation', 'Actionable feedback'],
  ];

  return (
    <div className="grid min-h-[24rem] gap-5 bg-[#050c17] p-5 sm:p-7">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.22em] text-slate-500">Request lifecycle</p>
          <p className="mt-2 text-xl font-medium text-white">Personalized interview pipeline</p>
        </div>
        <GitBranch className="h-5 w-5 text-cyan-300" aria-hidden="true" />
      </div>
      <div className="grid gap-3">
        {stages.map(([step, title, detail], stageIndex) => (
          <div
            key={title}
            className="relative grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4"
          >
            {stageIndex < stages.length - 1 ? (
              <span className="absolute -bottom-4 left-[2.15rem] h-4 w-px bg-cyan-300/25" />
            ) : null}
            <span className="font-mono text-xs text-cyan-300/70">{step}</span>
            <div>
              <p className="text-sm font-medium text-slate-100">{title}</p>
              <p className="mt-1 text-xs text-slate-500">{detail}</p>
            </div>
            <Check className="h-4 w-4 text-emerald-300/80" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}

function AlgorithmVisual() {
  const bars = [42, 78, 54, 92, 65, 34, 84];

  return (
    <div className="flex min-h-[24rem] flex-col bg-[#050c17] p-5 sm:p-7">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.22em] text-slate-500">Merge sort / pass 04</p>
          <p className="mt-2 text-xl font-medium text-white">State-by-state explanation</p>
        </div>
        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3 py-1 text-xs text-cyan-100">
          O(n log n)
        </span>
      </div>
      <div className="mt-8 flex flex-1 items-end gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
        {bars.map((height, barIndex) => (
          <div key={`${height}-${barIndex}`} className="flex h-full flex-1 items-end">
            <div
              className={`w-full rounded-t transition-colors ${
                barIndex === 3 || barIndex === 4
                  ? 'bg-gradient-to-t from-cyan-500/35 to-cyan-200'
                  : 'bg-slate-700'
              }`}
              style={{ height: `${height}%` }}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-950"
        >
          <Play className="h-4 w-4 fill-current" aria-hidden="true" />
        </span>
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-slate-800">
          <div className="h-full w-[58%] rounded-full bg-cyan-300" />
        </div>
        <span className="font-mono text-xs text-slate-500">04 / 07</span>
      </div>
    </div>
  );
}

function VisionVisual() {
  return (
    <div className="grid min-h-[24rem] gap-4 bg-[#050c17] p-5 sm:grid-cols-[1fr_0.58fr] sm:p-7">
      <div className="relative flex min-h-72 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.07] bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.12),_transparent_55%)]">
        <span className="absolute left-4 top-4 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-cyan-200">
          <Camera className="h-3.5 w-3.5" aria-hidden="true" />
          Live frame
        </span>
        <div className="relative flex h-40 w-32 items-center justify-center rounded-[2.5rem_2.5rem_1.5rem_1.5rem] border border-cyan-200/45 bg-cyan-300/[0.05]">
          <ScanLine className="h-12 w-12 text-cyan-200/70" aria-hidden="true" />
          <span className="absolute -inset-5 rounded-[3rem] border border-dashed border-cyan-300/20" />
        </div>
        <span className="absolute bottom-4 right-4 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-3 py-1 text-xs text-emerald-200">
          Tracking
        </span>
      </div>
      <div className="flex flex-col justify-between gap-4">
        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
          <p className="text-[0.65rem] uppercase tracking-[0.22em] text-slate-500">Prediction</p>
          <p className="mt-3 text-6xl font-semibold tracking-[-0.06em] text-white">A</p>
          <p className="mt-2 text-sm text-cyan-200">93.2% confidence</p>
        </div>
        <div className="space-y-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
          {[93, 71, 46].map((confidence, index) => (
            <div key={confidence}>
              <div className="mb-1 flex justify-between text-xs text-slate-500">
                <span>{String.fromCharCode(65 + index)}</span>
                <span>{confidence}%</span>
              </div>
              <div className="h-1 rounded-full bg-slate-800">
                <div className="h-full rounded-full bg-cyan-300/80" style={{ width: `${confidence}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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

function ProjectVisual({ project }: { project: ProjectItem }) {
  const visuals = {
    pipeline: <PipelineVisual />,
    algorithm: <AlgorithmVisual />,
    vision: <VisionVisual />,
    graph: <GraphVisual />,
  };

  return (
    <div className="relative overflow-hidden rounded-[1.4rem] border border-white/[0.07] bg-slate-950/90">
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-4">
        <span className="h-2 w-2 rounded-full bg-rose-400/70" />
        <span className="h-2 w-2 rounded-full bg-amber-300/70" />
        <span className="h-2 w-2 rounded-full bg-emerald-300/70" />
        <span className="ml-4 text-[10px] uppercase tracking-[0.24em] text-slate-600">
          {project.visualLabel}
        </span>
      </div>
      {visuals[project.visualVariant]}
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
      className="project-story group border-t border-slate-800/90 py-14 sm:py-20 lg:py-28"
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

          <div className="mt-9 border-y border-slate-800/80">
            {[
              ['Challenge', project.challenge],
              ['Engineering decision', project.decision],
              ['Proof', project.proof],
            ].map(([label, value], storyIndex) => (
              <div
                key={label}
                className="grid gap-2 border-b border-slate-800/70 py-5 last:border-b-0 sm:grid-cols-[8rem_1fr]"
              >
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-cyan-300/65">
                  0{storyIndex + 1} / {label}
                </p>
                <p className="text-sm leading-6 text-slate-200">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
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
          <div className="project-visual relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#07111f] p-4 shadow-[0_40px_100px_-55px_rgba(34,211,238,0.45)] sm:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,_rgba(34,211,238,0.12),_transparent_35%)]" />
            <div className="absolute right-6 top-6 z-10 overflow-hidden rounded-full border border-white/10 bg-slate-950/75 px-3 py-1.5 backdrop-blur">
              <span className="block text-[0.6rem] uppercase tracking-[0.22em] text-slate-400 transition-transform duration-500 group-hover:-translate-y-5">
                Inspect system
              </span>
              <span className="absolute inset-x-0 top-1.5 translate-y-5 text-center text-[0.6rem] uppercase tracking-[0.22em] text-cyan-200 transition-transform duration-500 group-hover:translate-y-0">
                View details
              </span>
            </div>
            <ProjectVisual project={project} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
