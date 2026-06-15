/* ── Navigation ──────────────────────────────────────────────────────────── */

export type NavLink = {
  href: string
  label: string
}

/* ── Easing (Framer Motion expects a 4-tuple) ────────────────────────────── */

export type EasingArray = [number, number, number, number]

/* ── Projects ────────────────────────────────────────────────────────────── */

export type Project = {
  id: string
  number: string
  title: string
  shortTitle: string
  type: string
  status: 'live' | 'research' | 'in-progress'
  year: string
  thesis: string
  description: string
  challenge: string
  architecture: string
  impact: string
  technologies: string[]
  githubUrl?: string
  demoUrl?: string
  accentClass?: string
}

/* ── Research ─────────────────────────────────────────────────────────────── */

export type ResearchItem = {
  id: string
  title: string
  status: 'published' | 'in-progress' | 'planned'
  year?: string
  abstract: string
  keywords: string[]
  doi?: string
}

/* ── Timeline / Journey ──────────────────────────────────────────────────── */

export type TimelineItem = {
  id: string
  type: 'education' | 'research' | 'work'
  organisation: string
  role: string
  duration: string
  location?: string
  description: string
  highlights: string[]
}
