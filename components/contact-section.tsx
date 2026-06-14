'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { contactMethods, socialLinks } from '@/data/contact';

const ease = [0.22, 1, 0.36, 1] as const;

export function ContactSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/[0.08] py-24 sm:py-32">
      <div className="mx-auto max-w-[92rem] px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: reduceMotion ? 0 : 0.45, ease }}
          className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">Contact</p>
            <h2 className="editorial-serif mt-5 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Let&apos;s build the next serious system.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-slate-300 lg:justify-self-end">
            If the work resonates, I&apos;m open to engineering roles, research conversations, and projects that need
            careful thinking rather than loud presentation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.06, ease }}
          className="mt-14 grid gap-10 rounded-[2rem] border border-white/[0.08] bg-[#060c17] p-6 sm:p-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:p-10"
        >
          <div className="space-y-8">
            <div className="border-b border-white/[0.08] pb-6">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Direct lines</p>
              <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">
                The fastest way to reach me is email. GitHub and LinkedIn are the easiest ways to see the work in
                context.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  className="group flex items-center gap-4 rounded-[1.5rem] border border-white/[0.07] bg-white/[0.02] p-4 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.04]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.06] bg-slate-950/80 text-cyan-300">
                    {method.label === 'Email' ? (
                      <Mail className="h-5 w-5" />
                    ) : method.label === 'Phone' ? (
                      <Phone className="h-5 w-5" />
                    ) : method.label === 'GitHub' ? (
                      <Github className="h-5 w-5" />
                    ) : method.label === 'LinkedIn' ? (
                      <Linkedin className="h-5 w-5" />
                    ) : (
                      <MapPin className="h-5 w-5" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{method.label}</p>
                    <p className="mt-1 break-words text-sm font-medium text-slate-100">{method.displayValue}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                download="Shivanshu-Yadav-Resume.pdf"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
              <a
                href="mailto:shivanshuy921@gmail.com"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-700 px-5 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/35 hover:text-white"
              >
                Send email
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="border-t border-white/[0.08] pt-0 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Social</p>
            <div className="mt-6 space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-center justify-between rounded-[1.5rem] border border-white/[0.07] bg-white/[0.02] p-4 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.04]"
                >
                  <div>
                    <p className="font-semibold text-white">{social.platform}</p>
                    <p className="mt-1 text-slate-400">{social.label}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-500 transition group-hover:text-cyan-200" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
