'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { NAV_LINKS, SITE } from '@/lib/constants'
import { mobileNavVariants, mobileNavItem } from '@/lib/animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function Navigation() {
  const [scrolled, setScrolled]   = useState(false)
  const [isOpen,   setIsOpen]     = useState(false)
  const [active,   setActive]     = useState('')
  const reduced = useReducedMotion()

  /* ── Scroll-triggered glass ──────────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Active section via IntersectionObserver ─────────────────────────── */
  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.querySelector(l.href))
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(`#${e.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => s && obs.observe(s))
    return () => obs.disconnect()
  }, [])

  /* ── Lock body scroll when mobile menu is open ───────────────────────── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' })
    }, 100)
  }

  return (
    <>
      {/* ── Main nav bar ──────────────────────────────────────────────── */}
      <motion.header
        initial={false}
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'flex items-center justify-between',
          'px-6 md:px-10 xl:px-16',
          'h-[60px]',
          'transition-all duration-500',
          scrolled && 'bg-[rgba(5,5,8,0.85)] backdrop-blur-[20px] border-b border-white/[0.06]',
        )}
      >
        {/* Logo */}
        <a
          href="#home"
          className="font-display font-bold text-[17px] tracking-tight text-white/90 hover:text-white transition-colors duration-200"
          aria-label="Home"
          onClick={e => { e.preventDefault(); handleNavClick('#home') }}
        >
          SY<span className="text-[var(--c-violet)]">.</span>
        </a>

        {/* Desktop links */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'relative font-mono text-[12px] tracking-[0.08em] lowercase',
                'transition-colors duration-200 pb-[2px]',
                active === link.href
                  ? 'text-white/90'
                  : 'text-white/32 hover:text-white/70',
              )}
              onClick={e => {
                e.preventDefault()
                handleNavClick(link.href)
              }}
            >
              {link.label}
              {/* Active underline */}
              {active === link.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-px bg-white/30"
                  transition={{ duration: 0.25 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className={cn(
            'hidden md:inline-flex items-center gap-1.5',
            'font-mono text-[12px] tracking-[0.08em] lowercase',
            'text-white/35 hover:text-white/80 transition-colors duration-200',
          )}
          onClick={e => { e.preventDefault(); handleNavClick('#contact') }}
        >
          get in touch
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-60">
            <path d="M2 8L8 2M8 2H3.5M8 2V6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        {/* Mobile hamburger */}
        <button
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2 z-[60]"
          onClick={() => setIsOpen(v => !v)}
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.28 }}
            className="block w-5 h-px bg-white/70 origin-center"
          />
          <motion.span
            animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-px bg-white/70 origin-center"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.28 }}
            className="block w-5 h-px bg-white/70 origin-center"
          />
        </button>
      </motion.header>

      {/* ── Mobile overlay ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-nav"
            variants={reduced ? undefined : mobileNavVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className={cn(
              'fixed inset-0 z-40 md:hidden',
              'bg-[#050508]',
              'flex flex-col justify-center px-8',
            )}
          >
            <motion.nav
              variants={{ closed: {}, open: { transition: { staggerChildren: 0.07, delayChildren: 0.18 } } }}
              initial="closed"
              animate="open"
              className="flex flex-col gap-6"
            >
              {NAV_LINKS.map(link => (
                <motion.a
                  key={link.href}
                  variants={reduced ? undefined : mobileNavItem}
                  href={link.href}
                  className="font-display text-[2.8rem] font-semibold tracking-tight text-white/30 hover:text-white/90 transition-colors duration-200 leading-none"
                  onClick={e => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                variants={reduced ? undefined : mobileNavItem}
                className="mt-8 pt-8 border-t border-white/[0.06]"
              >
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-mono text-[12px] tracking-[0.1em] text-white/25 hover:text-white/55 transition-colors duration-200"
                >
                  {SITE.email}
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
