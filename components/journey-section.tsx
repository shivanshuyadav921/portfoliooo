'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TIMELINE } from '@/lib/constants'
import { EASE } from '@/lib/animations'
import { cn } from '@/lib/utils'

const typeColor: Record<string, string> = {
  education: 'text-sky-400/60',
  research:  'text-violet-400/60',
  work:      'text-emerald-400/60',
}

const typeDot: Record<string, string> = {
  education: 'bg-sky-400/60',
  research:  'bg-violet-400/60',
  work:      'bg-emerald-400/60',
}

function TimelineEntry({ item, index }: { item: typeof TIMELINE[number]; index: number }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: EASE.premium, delay: index * 0.1 }}
      className="relative pl-8 md:pl-12 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-[11px] md:left-[19px] top-[10px] bottom-0 w-px bg-white/[0.06]" />

      {/* Dot */}
      <div className={cn(
        'absolute left-[7px] md:left-[15px] top-[6px] w-[9px] h-[9px] rounded-full border-2 border-[#050508]',
        typeDot[item.type]
      )} />

      {/* Content */}
      <div>
        {/* Type + Duration */}
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className={cn('font-mono text-[10px] tracking-[0.14em] uppercase', typeColor[item.type])}>
            {item.type}
          </span>
          <span className="font-mono text-[10px] text-white/18">
            {item.duration}
          </span>
          {item.location && (
            <span className="font-mono text-[10px] text-white/12">
              {item.location}
            </span>
          )}
        </div>

        {/* Organisation */}
        <h3
          className="font-display font-semibold text-white/70 tracking-tight leading-tight mb-1"
          style={{ fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)' }}
        >
          {item.organisation}
        </h3>

        {/* Role */}
        <p className="font-mono text-[12px] text-white/30 mb-4">
          {item.role}
        </p>

        {/* Description */}
        <p className="text-[14px] text-white/38 leading-[1.75] mb-4 max-w-2xl">
          {item.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-1.5">
          {item.highlights.map(h => (
            <li key={h} className="flex items-start gap-2 text-[13px] text-white/30 leading-relaxed">
              <span className="mt-[7px] w-1 h-1 rounded-full bg-white/15 shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

export function JourneySection() {
  const headerRef = useRef(null)
  const inView    = useInView(headerRef, { once: true, margin: '-5%' })

  return (
    <section id="journey" className="py-24 md:py-36">
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
            Journey
          </div>
          <h2
            className="font-display font-semibold text-white/80 tracking-tight leading-none"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
          >
            Where I&apos;ve been.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl">
          {TIMELINE.map((item, i) => (
            <TimelineEntry key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
