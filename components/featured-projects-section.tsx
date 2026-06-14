'use client';

import { ProjectShowcase } from '@/components/project-showcase';
import { featuredProjects } from '@/data/projects';
import { motion } from 'framer-motion';

export function FeaturedProjectsSection() {
  return (
    <section id="selected-work" className="scroll-mt-24 border-t border-white/[0.08] py-24 sm:py-32">
      <div className="mx-auto max-w-[92rem] px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">Selected Work</p>
            <h2 className="editorial-serif mt-5 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Chapters, not cards.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-slate-300 lg:justify-self-end">
            Each project is framed like a case-study spread: the problem is stated plainly, the system is opened up,
            the decisions are explained, and the evidence closes the loop.
          </p>
        </motion.div>
      </div>

      <div className="mt-14">
        {featuredProjects.map((project, index) => (
          <ProjectShowcase key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
