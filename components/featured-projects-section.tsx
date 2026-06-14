import { ProjectShowcase } from '@/components/project-showcase';
import { featuredProjects } from '@/data/projects';
import { motion } from 'framer-motion';

export function FeaturedProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-slate-800/80 bg-[linear-gradient(180deg,rgba(15,23,42,0.35),rgba(2,6,23,0.02))] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-300/70">Selected work</p>
            <h2 className="editorial-serif mt-5 text-5xl font-semibold tracking-normal text-white sm:text-6xl">
              Case studies, not cards.
              <span className="mt-2 block text-slate-500">A publication of engineering decisions.</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-slate-300 lg:justify-self-end">
            Each chapter preserves the sticky narrative system, but shifts the tone toward a calm editorial reading
            experience: opening spread, evidence, and resolution.
          </p>
        </motion.div>
      </div>

      <div className="mt-4" role="list">
        {featuredProjects.map((project, index) => (
          <div key={project.title} role="listitem">
            {index > 0 && (
              <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-12">
                <div className="project-divider" aria-hidden="true" />
                <p className="mt-4 flex items-center justify-between gap-4 font-mono text-[0.62rem] uppercase tracking-[0.3em] text-slate-600">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>{String(featuredProjects.length).padStart(2, '0')}</span>
                </p>
              </div>
            )}
            <ProjectShowcase project={project} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
