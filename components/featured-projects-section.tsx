'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { PROJECTS } from '@/lib/constants'
import { EASE } from '@/lib/animations'
import type { Project } from '@/types'
import { cn } from '@/lib/utils'

/* ── Single case study row ───────────────────────────────────────────────── */

function WorkItem({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false)
  const ref             = useRef(null)
  const inView          = useInView(ref, { once: true, margin: '-10%' })

  const statusColor: Record<string, string> = {
    live:        'text-emerald-400/70',
    research:    'text-violet-400/70',
    'in-progress':'text-amber-400/70',
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: EASE.premium, delay: index * 0.08 }}
      className="border-b border-white/[0.06]"
    >
      {/* ── Header row — always visible ────────────────────────────── */}
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full text-left py-7 md:py-8 cursor-pointer group"
        aria-expanded={open}
      >
        <div className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[56px_1fr_auto] items-start gap-4 md:gap-6">
          {/* Number */}
          <span className="font-mono text-[11px] text-white/18 pt-1 select-none">
            {project.number}
          </span>

          {/* Title + thesis */}
          <div>
            <h3
              className={cn(
                'font-display font-semibold tracking-tight leading-tight mb-2 transition-colors duration-300',
                'text-white/60 group-hover:text-white/88',
              )}
              style={{ fontSize: 'clamp(1.2rem, 2.4vw, 1.75rem)' }}
            >
              {project.title}
            </h3>
            <p className="font-serif text-[14px] md:text-[15px] italic text-white/28 group-hover:text-white/42 transition-colors duration-300 leading-snug">
              &ldquo;{project.thesis}&rdquo;
            </p>
          </div>

          {/* Meta + expand indicator */}
          <div className="flex flex-col items-end gap-2 pt-0.5">
            <div className="flex items-center gap-3">
              <span className="hidden sm:block font-mono text-[10px] text-white/20">
                {project.year}
              </span>
              <span className={cn('font-mono text-[10px] capitalize', statusColor[project.status])}>
                {project.status === 'in-progress' ? 'in progress' : project.status}
              </span>
            </div>
            {/* Expand arrow */}
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.22 }}
              className="text-white/20 group-hover:text-white/45 transition-colors duration-200"
              aria-hidden="true"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.span>
          </div>
        </div>
      </button>

      {/* ── Expanded case study content ─────────────────────────────── */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="case-study"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1, transition: { height: { duration: 0.45, ease: EASE.expo }, opacity: { duration: 0.35, delay: 0.1 } } }}
            exit={{ height: 0, opacity: 0, transition: { height: { duration: 0.35, ease: EASE.smooth }, opacity: { duration: 0.2 } } }}
            className="overflow-hidden"
          >
            <div className="pb-10 md:pb-12 ml-0 md:ml-[80px]">
              <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
                {/* Challenge */}
                <div>
                  <div className="font-mono text-[9.5px] tracking-[0.18em] text-white/22 uppercase mb-3">
                    The Problem
                  </div>
                  <p className="text-[14px] text-white/42 leading-[1.75]">
                    {project.challenge}
                  </p>
                </div>

                {/* Architecture */}
                <div>
                  <div className="font-mono text-[9.5px] tracking-[0.18em] text-white/22 uppercase mb-3">
                    The Architecture
                  </div>
                  <p className="text-[14px] text-white/42 leading-[1.75]">
                    {project.architecture}
                  </p>
                </div>

                {/* Impact */}
                <div>
                  <div className="font-mono text-[9.5px] tracking-[0.18em] text-white/22 uppercase mb-3">
                    The Impact
                  </div>
                  <p className="text-[14px] text-white/42 leading-[1.75]">
                    {project.impact}
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] tracking-[0.06em] text-white/28 border border-white/[0.07] px-2.5 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-5">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.08em] text-white/28 hover:text-white/65 transition-colors duration-200"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                )}
                {project.demoUrl && project.demoUrl !== '#' && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.08em] text-white/28 hover:text-white/65 transition-colors duration-200"
                  >
                    Live demo
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ── Section ─────────────────────────────────────────────────────────────── */

export function FeaturedProjectsSection() {
  const headerRef = useRef(null)
  const inView    = useInView(headerRef, { once: true, margin: '-5%' })

  return (
    <section id="work" className="py-24 md:py-36">
      <div className="max-w-[1380px] mx-auto px-6 md:px-10 xl:px-20">

        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE.premium }}
          className="flex items-end justify-between mb-12 md:mb-16"
        >
          <div>
            <div className="font-mono text-[10px] tracking-[0.2em] text-white/22 uppercase mb-3">
              Selected work
            </div>
            <h2
              className="font-display font-semibold text-white/80 tracking-tight leading-none"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
            >
              What I&apos;ve built.
            </h2>
          </div>
          <span className="hidden md:block font-mono text-[10px] text-white/15 pb-1">
            Click any project to read the case study
          </span>
        </motion.div>

        {/* Top separator */}
        <div className="h-px bg-white/[0.06] mb-0" />

        {/* Project list */}
        {PROJECTS.map((project, i) => (
          <WorkItem key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
