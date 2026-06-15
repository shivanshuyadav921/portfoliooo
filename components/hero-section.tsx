'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { OrbitalRing } from '@/components/OrbitalRing'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { heroContainer, heroItem, heroItemReduced } from '@/lib/animations'
import { SITE } from '@/lib/constants'

export function HeroSection() {
  const reduced = useReducedMotion()
  const item    = reduced ? heroItemReduced : heroItem

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* ── Background ──────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.028]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),' +
              'linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
        {/* Top-left ambient violet glow */}
        <div
          className="absolute -top-40 -left-40 w-[640px] h-[640px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 65%)',
            animation: 'breathe 6s ease-in-out infinite',
          }}
        />
        {/* Bottom-right ambient */}
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(14,165,233,0.04) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* ── Content grid ────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-[1380px] mx-auto px-6 md:px-10 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_500px] gap-12 xl:gap-0 items-center min-h-screen py-28">

          {/* ── Left: text ─────────────────────────────────────────── */}
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="max-w-[620px]"
          >
            {/* Status badge */}
            <motion.div variants={item} className="mb-10">
              <span className="inline-flex items-center gap-2.5 px-3 py-[5px] rounded-full border border-white/[0.07] bg-white/[0.025]">
                <span className="relative flex h-[7px] w-[7px]" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-emerald-500" />
                </span>
                <span className="font-mono text-[10.5px] tracking-[0.14em] text-white/38 uppercase">
                  Open to internships &amp; research
                </span>
                <span className="w-px h-3 bg-white/[0.08]" />
                <span className="font-mono text-[10.5px] tracking-[0.08em] text-white/22">
                  {SITE.location} · {SITE.gradYear}
                </span>
              </span>
            </motion.div>

            {/* Name label */}
            <motion.p
              variants={item}
              className="font-mono text-[11px] tracking-[0.18em] text-white/22 uppercase mb-5"
            >
              {SITE.name}
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="font-display font-semibold leading-[1.01] tracking-[-0.03em] mb-8 text-balance"
              style={{ fontSize: 'clamp(2.6rem, 6.2vw, 5.8rem)' }}
            >
              <span className="text-white">Engineering systems.</span>
              <br />
              <span className="text-white/42">Researching trust.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={item}
              className="text-[16.5px] leading-[1.78] text-white/38 max-w-[480px] mb-12"
            >
              I build production software and investigate how language systems can become more{' '}
              <span className="text-white/62">explainable</span>,{' '}
              <span className="text-white/62">multilingual</span>, and{' '}
              <span className="text-white/62">reliable</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-14">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/[0.07] hover:bg-white/[0.12] border border-white/[0.08] hover:border-white/[0.16] text-[14px] font-medium text-white/80 hover:text-white transition-all duration-250"
              >
                View selected work
                <ArrowRight className="w-[14px] h-[14px] transition-transform duration-200 group-hover:translate-x-0.5 opacity-60" />
              </a>
              <a
                href={SITE.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-[14px] font-medium text-white/30 hover:text-white/65 border border-transparent hover:border-white/[0.07] transition-all duration-250"
              >
                <Download className="w-[14px] h-[14px]" />
                Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="flex items-center gap-6">
              {[
                { href: SITE.github,   Icon: Github,   label: 'GitHub'   },
                { href: SITE.linkedin, Icon: Linkedin,  label: 'LinkedIn' },
                { href: `mailto:${SITE.email}`, Icon: Mail, label: 'Email' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/22 hover:text-white/60 transition-colors duration-200"
                >
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: orbital ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.4 }}
            className="hidden lg:flex items-center justify-center"
          >
            <OrbitalRing />
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-mono text-[9px] tracking-[0.25em] text-white/18 uppercase">
          scroll
        </span>
        <div className="w-px h-10 overflow-hidden relative">
          <motion.div
            className="absolute inset-x-0 h-1/2"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.2), transparent)',
            }}
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 2.5 }}
          />
        </div>
      </motion.div>
    </section>
  )
}
