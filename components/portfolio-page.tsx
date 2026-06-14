'use client';

import { ContactSection } from '@/components/contact-section';
import { FeaturedProjectsSection } from '@/components/featured-projects-section';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { JourneySection } from '@/components/journey-section';
import { ResearchSection } from '@/components/research-section';
import { SectionReveal } from '@/components/section-reveal';
import { Download } from 'lucide-react';

const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export function PortfolioPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <a
        href="#main-content"
        className="sr-only z-50 rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-slate-950/80 backdrop-blur-xl">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-5 px-4 sm:px-8 lg:px-12"
        >
          <a href="#home" className="group flex shrink-0 items-center gap-3 font-semibold tracking-normal text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] text-xs text-cyan-200 transition group-hover:border-cyan-300/50">
              SY
            </span>
            <span className="hidden sm:inline">Shivanshu Yadav</span>
          </a>
          <div className="flex min-w-0 flex-1 items-center justify-end gap-1 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 shrink-0 items-center rounded-full px-3 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="/resume.pdf"
            download="Shivanshu-Yadav-Resume.pdf"
            className="hidden min-h-10 shrink-0 items-center gap-2 rounded-full border border-slate-700 px-4 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:text-white md:inline-flex"
          >
            Resume
            <Download className="h-3.5 w-3.5" />
          </a>
        </nav>
      </header>

      <main id="main-content">
        <div className="relative">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_28%_10%,_rgba(56,189,248,0.14),_transparent_44%)]" />
          <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col px-4 py-10 sm:px-8 lg:px-12">
            <HeroSection />
          </div>
        </div>
        <SectionReveal>
          <FeaturedProjectsSection />
        </SectionReveal>
        <SectionReveal>
          <ResearchSection />
        </SectionReveal>
        <SectionReveal>
          <JourneySection />
        </SectionReveal>
        <SectionReveal>
          <ContactSection />
        </SectionReveal>
      </main>
      <Footer />
    </div>
  );
}
