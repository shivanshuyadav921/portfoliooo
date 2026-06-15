import type { Variants, Transition } from 'framer-motion'
import type { EasingArray } from '@/types'

/* ── Easing — only what gets used ─────────────────────────────────────────── */

export const EASE = {
  /** Cinematic ease-out — all entrances */
  premium:  [0.22, 1, 0.36, 1]       as EasingArray,
  /** Softer ease-out — secondary UI */
  smooth:   [0.25, 0.46, 0.45, 0.94] as EasingArray,
  /** Expo ease-out — impactful reveals */
  expo:     [0.16, 1, 0.3, 1]        as EasingArray,
} as const

/* ── Transitions ─────────────────────────────────────────────────────────── */

export const TRANSITION = {
  entrance: { duration: 0.72, ease: EASE.premium  } satisfies Transition,
  hover:    { duration: 0.25, ease: EASE.smooth   } satisfies Transition,
  fast:     { duration: 0.18, ease: EASE.smooth   } satisfies Transition,
  slow:     { duration: 1.10, ease: EASE.expo     } satisfies Transition,
} as const

/* ── Hero entrance ───────────────────────────────────────────────────────── */

export const heroContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren:   0.15,
    },
  },
}

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: TRANSITION.entrance,
  },
}

export const heroItemReduced: Variants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.5 } },
}

/* ── Scroll-triggered reveal ─────────────────────────────────────────────── */

export const fadeInUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE.premium } },
}

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6,  ease: EASE.smooth } },
}

export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

/* ── Navigation ──────────────────────────────────────────────────────────── */

export const mobileNavVariants: Variants = {
  closed: {
    clipPath: 'circle(0% at calc(100% - 44px) 44px)',
    transition: { duration: 0.42, ease: EASE.premium },
  },
  open: {
    clipPath: 'circle(160% at calc(100% - 44px) 44px)',
    transition: { duration: 0.5, ease: EASE.expo },
  },
}

export const mobileNavItem: Variants = {
  closed: { opacity: 0, x: 20 },
  open:   { opacity: 1, x: 0, transition: { duration: 0.38, ease: EASE.premium } },
}

/* ── Work list items ─────────────────────────────────────────────────────── */

export const workItemVariants: Variants = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE.premium } },
}
