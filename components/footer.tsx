'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import { SITE, NAV_LINKS } from '@/lib/constants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.04] py-12">
      <div className="max-w-[1380px] mx-auto px-6 md:px-10 xl:px-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left */}
          <div>
            <a href="#home" className="font-display font-bold text-[17px] tracking-tight text-white/60 hover:text-white/80 transition-colors duration-200">
              SY<span className="text-[var(--c-violet)]">.</span>
            </a>
            <p className="mt-2 font-mono text-[11px] text-white/15 tracking-[0.06em]">
              &copy; {year} {SITE.name}. Building reliable software and trustworthy AI systems.
            </p>
          </div>

          {/* Center — nav links */}
          <nav className="flex flex-wrap items-center gap-6">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] text-white/18 hover:text-white/50 transition-colors duration-200 tracking-[0.06em]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right — social icons */}
          <div className="flex items-center gap-5">
            {[
              { href: SITE.github,             Icon: Github,   label: 'GitHub'   },
              { href: SITE.linkedin,           Icon: Linkedin, label: 'LinkedIn' },
              { href: `mailto:${SITE.email}`,  Icon: Mail,     label: 'Email'    },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/15 hover:text-white/45 transition-colors duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
