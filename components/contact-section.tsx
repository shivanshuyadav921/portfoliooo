'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Download, Github, Linkedin, Mail, Phone } from 'lucide-react'
import { SITE } from '@/lib/constants'
import { EASE } from '@/lib/animations'

const contactMethods = [
  {
    label: 'Email',
    value: SITE.email,
    href:  `mailto:${SITE.email}`,
    Icon:  Mail,
  },
  {
    label: 'Phone',
    value: SITE.phone,
    href:  `tel:+919129590751`,
    Icon:  Phone,
  },
  {
    label: 'GitHub',
    value: 'shivanshuyadav921',
    href:  SITE.github,
    Icon:  Github,
  },
  {
    label: 'LinkedIn',
    value: 'Shivanshu Yadav',
    href:  SITE.linkedin,
    Icon:  Linkedin,
  },
]

export function ContactSection() {
  const headerRef = useRef(null)
  const inView    = useInView(headerRef, { once: true, margin: '-5%' })

  return (
    <section id="contact" className="py-24 md:py-36">
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
            Contact
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="font-display font-semibold text-white/80 tracking-tight leading-none"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
            >
              Let&apos;s build something serious.
            </h2>
            <p className="text-[14px] text-white/30 max-w-md leading-relaxed">
              Open to engineering roles, research conversations, and projects that need careful thinking.
            </p>
          </div>
        </motion.div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.55, ease: EASE.premium }}
          className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 md:p-10"
        >
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Left — contact methods */}
            <div className="space-y-5">
              <p className="font-mono text-[9.5px] tracking-[0.18em] text-white/22 uppercase mb-6">
                Direct lines
              </p>
              {contactMethods.map(({ label, value, href, Icon }) => {
                const external = href.startsWith('http')
                return (
                  <a
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 p-4 -mx-4 rounded-xl hover:bg-white/[0.025] transition-colors duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg border border-white/[0.06] bg-white/[0.02] flex items-center justify-center text-white/25 group-hover:text-white/50 transition-colors duration-200">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] text-white/18 tracking-[0.08em] uppercase">
                        {label}
                      </p>
                      <p className="text-[14px] text-white/50 group-hover:text-white/75 transition-colors duration-200 mt-0.5">
                        {value}
                      </p>
                    </div>
                    {external && (
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/10 group-hover:text-white/30 ml-auto transition-colors duration-200" />
                    )}
                  </a>
                )
              })}
            </div>

            {/* Right — CTA + availability */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="font-mono text-[9.5px] tracking-[0.18em] text-white/22 uppercase mb-6">
                  Availability
                </p>
                <p className="text-[15px] text-white/38 leading-[1.75] mb-4">
                  Currently seeking <span className="text-white/60">summer 2025 internships</span> and{' '}
                  <span className="text-white/60">research collaborations</span> in NLP, explainable AI,
                  and production ML systems.
                </p>
                <p className="text-[14px] text-white/25 leading-relaxed">
                  Based in Vellore, India. Open to remote work and relocation.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/[0.07] hover:bg-white/[0.12] border border-white/[0.08] hover:border-white/[0.16] text-[14px] font-medium text-white/80 hover:text-white transition-all duration-250"
                >
                  <Mail className="w-[14px] h-[14px]" />
                  Send email
                </a>
                <a
                  href={SITE.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-[14px] font-medium text-white/30 hover:text-white/65 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-250"
                >
                  <Download className="w-[14px] h-[14px]" />
                  Resume
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
