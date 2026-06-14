import { ProjectShowcase } from '@/components/project-showcase';
import { featuredProjects } from '@/data/projects';
import { motion } from 'framer-motion';

export function FeaturedProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-slate-800/80 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <p className="font-mono text-xs text-cyan-300/70">01 / SELECTED WORK</p>
            <h2 className="editorial-serif mt-5 text-5xl font-semibold tracking-normal text-white sm:text-6xl">
              Built to solve,
              <span className="block text-slate-500">not just to ship.</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-slate-300 lg:justify-self-end">
            Scroll through each project as a short case study: the problem, the system shape, the tradeoffs, and the proof.
          </p>
        </motion.div>
      </div>

      {/* Project chapters with editorial dividers between them */}
      <div className="mt-4" role="list">
        {featuredProjects.map((project, index) => (
          <div key={project.title} role="listitem">
            {/* Editorial divider between projects */}
            {index > 0 && (
              <div className="mx-auto max-w-7xl px-6 py-4 sm:px-8 lg:px-12">
                <div className="project-divider" aria-hidden="true" />
                <p className="mt-4 text-center font-mono text-[0.6rem] uppercase tracking-[0.3em] text-slate-600">
                  {String(index + 1).padStart(2, '0')} / {String(featuredProjects.length).padStart(2, '0')}
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
