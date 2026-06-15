'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, BookOpenText, FlaskConical } from 'lucide-react'
import { RESEARCH } from '@/lib/constants'
import { EASE } from '@/lib/animations'
import { cn } from '@/lib/utils'

const statusColor: Record<string, string> = {
  published:     'text-emerald-400/70',
  'in-progress': 'text-amber-400/70',
  planned:       'text-white/25',
}

const statusLabel: Record<string, string> = {
  published:     'Published',
  'in-progress': 'In progress',
  planned:       'Planned',
}

function ResearchCard({ item, index }: { item: typeof RESEARCH[number]; index: number }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: EASE.premium, delay: index * 0.08 }}
      className="border-b border-white/[0.06] py-8 md:py-10"
    >
      <div className="grid md:grid-cols-[56px_1fr] gap-4 md:gap-6">
        {/* Number */}
        <span className="font-mono text-[11px] text-white/18 pt-1 select-none hidden md:block">
          {String(index + 1).padStart(2, '0')}
        </span>

        <div>
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h3
                className="font-display font-semibold text-white/75 tracking-tight leading-tight mb-2"
                style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}
              >
                {item.title}
              </h3>
              <div className="flex items-center gap-3">
                {item.year && (
                  <span className="font-mono text-[10px] text-white/20">{item.year}</span>
                )}
                <span className={cn('font-mono text-[10px]', statusColor[item.status])}>
                  {statusLabel[item.status]}
                </span>
              </div>
            </div>
            {item.doi && (
              <a
                href={item.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.08em] text-white/30 hover:text-white/65 transition-colors duration-200 shrink-0"
              >
                DOI
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
          </div>

          {/* Abstract */}
          <p className="text-[14px] text-white/38 leading-[1.75] mb-5 max-w-3xl">
            {item.abstract}
          </p>

          {/* Keywords */}
          <div className="flex flex-wrap items-center gap-2">
            {item.keywords.map(kw => (
              <span
                key={kw}
                className="font-mono text-[10px] tracking-[0.06em] text-white/22 border border-white/[0.06] px-2 py-0.5 rounded"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export function ResearchSection() {
  const headerRef = useRef(null)
  const inView    = useInView(headerRef, { once: true, margin: '-5%' })

  return (
    <section id="research" className="py-24 md:py-36">
      <div className="max-w-[1380px] mx-auto px-6 md:px-10 xl:px-20">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE.premium }}
          className="mb-12 md:mb-16"
        >
          <div className="font-mono text-[10px] tracking-[0.2em] text-white/22 uppercase mb-3">
            Research
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="font-display font-semibold text-white/80 tracking-tight leading-none"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
            >
              Thinking made visible.
            </h2>
            <p className="font-mono text-[10px] text-white/15 pb-1 max-w-md">
              Curiosity, rigor, and transparency as engineering choices
            </p>
          </div>
        </motion.div>

        {/* Research posture */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.55, ease: EASE.premium }}
          className="mb-12 p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.015]"
        >
          <div className="flex items-center gap-3 mb-4">
            <FlaskConical className="w-4 h-4 text-violet-400/60" />
            <span className="font-mono text-[9.5px] tracking-[0.18em] text-white/22 uppercase">
              Research posture
            </span>
          </div>
          <p className="text-[15px] text-white/42 leading-[1.75] max-w-3xl">
            The work keeps returning to the same instinct: make model behavior inspectable,
            make evaluation honest, and make the evidence easy enough to challenge that it can
            actually earn trust.
          </p>
        </motion.div>

        {/* Separator */}
        <div className="h-px bg-white/[0.06]" />

        {/* Research list */}
        {RESEARCH.map((item, i) => (
          <ResearchCard key={item.id} item={item} index={i} />
        ))}

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex items-center gap-3"
        >
          <BookOpenText className="w-3.5 h-3.5 text-white/15" />
          <span className="font-mono text-[10px] text-white/15 tracking-[0.08em]">
            Publication records are public and linked to DOI
          </span>
        </motion.div>
      </div>
    </section>
  )
}
