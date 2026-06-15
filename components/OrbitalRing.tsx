'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { ORBITAL_KEYWORDS } from '@/lib/constants'

/* ── Config ──────────────────────────────────────────────────────────────── */

const RADIUS_X = 198
const RADIUS_Y = 122
const PERIOD   = 36
const W        = 440
const H        = 300
const CX       = W / 2
const CY       = H / 2

const KEYWORD_DATA = ORBITAL_KEYWORDS.map((text, i) => {
  const angle = (360 / ORBITAL_KEYWORDS.length) * i
  const rad   = (angle * Math.PI) / 180
  return { text, x: Math.cos(rad) * RADIUS_X, y: Math.sin(rad) * RADIUS_Y }
})

/* ── Component ───────────────────────────────────────────────────────────── */

export function OrbitalRing({ className }: { className?: string }) {
  const [paused, setPaused] = useState(false)
  const reduced = useReducedMotion()

  /* Reduced-motion: static layout */
  if (reduced) {
    return (
      <div
        className={cn('relative select-none', className)}
        style={{ width: W, height: H }}
        aria-hidden="true"
      >
        <svg className="absolute inset-0" viewBox={`0 0 ${W} ${H}`} fill="none">
          <ellipse cx={CX} cy={CY} rx={RADIUS_X} ry={RADIUS_Y}
            stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="3 14" />
        </svg>
        {KEYWORD_DATA.map(({ text, x, y }) => (
          <span key={text}
            className="absolute text-[11px] font-mono text-white/20 whitespace-nowrap"
            style={{ left: CX + x, top: CY + y, transform: 'translate(-50%,-50%)' }}
          >{text}</span>
        ))}
      </div>
    )
  }

  return (
    <div
      className={cn('relative select-none', className)}
      style={{ width: W, height: H }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-hidden="true"
    >
      {/* ── SVG orbit paths (decorative) ──────────────────────────── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${W} ${H}`} fill="none">

        {/* Main orbit ellipse */}
        <ellipse cx={CX} cy={CY} rx={RADIUS_X} ry={RADIUS_Y}
          stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" strokeDasharray="3 14"
        />

        {/* Inner ambient ring */}
        <ellipse cx={CX} cy={CY} rx={RADIUS_X * 0.55} ry={RADIUS_Y * 0.55}
          stroke="rgba(14,165,233,0.025)" strokeWidth="0.8"
        />

        {/* Center pivot */}
        <circle cx={CX} cy={CY} r="1.5" fill="rgba(124,58,237,0.3)" />

        {/* Node dots at keyword positions */}
        {KEYWORD_DATA.map(({ text, x, y }) => (
          <circle key={`node-${text}`}
            cx={CX + x} cy={CY + y} r="1.5"
            fill={paused ? 'rgba(124,58,237,0.5)' : 'rgba(255,255,255,0.12)'}
            style={{
              transition: 'fill 0.5s',
              animation: `orbital-spin ${PERIOD}s linear infinite`,
              animationPlayState: paused ? 'paused' : 'running',
              transformOrigin: `${CX}px ${CY}px`,
            }}
          />
        ))}
      </svg>

      {/* ── Rotating keyword layer ─────────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          animation: `orbital-spin ${PERIOD}s linear infinite`,
          animationPlayState: paused ? 'paused' : 'running',
        }}
      >
        {KEYWORD_DATA.map(({ text, x, y }) => (
          <span
            key={text}
            className="absolute text-[11px] font-mono whitespace-nowrap leading-none transition-colors duration-700"
            style={{
              left: CX + x,
              top:  CY + y,
              color: paused ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.18)',
              animation: `orbital-counter-spin ${PERIOD}s linear infinite`,
              animationPlayState: paused ? 'paused' : 'running',
            }}
          >
            {text}
          </span>
        ))}
      </div>

      {/* ── Pause state label ─────────────────────────────────────── */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ opacity: paused ? 1 : 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="text-center space-y-1">
          <div className="text-[9px] font-mono tracking-[0.25em] text-white/20 uppercase">
            Focus areas
          </div>
          <div className="text-[9px] font-mono tracking-[0.14em] text-white/12 uppercase">
            Shivanshu Yadav
          </div>
        </div>
      </motion.div>
    </div>
  )
}
