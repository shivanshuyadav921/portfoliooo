'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Mail, MapPin, Phone, Download } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { contactMethods, socialLinks } from '@/data/contact';

const ctaText = 'Always exploring new challenges at the intersection of engineering and research.';

const principles = [
  {
    label: 'Engineering',
    className: 'left-[6%] top-[16%]',
    nudge: { x: 118, y: 72 },
  },
  {
    label: 'Research',
    className: 'right-[7%] top-[18%]',
    nudge: { x: -112, y: 84 },
  },
  {
    label: 'Human Understanding',
    className: 'left-[14%] bottom-[14%]',
    nudge: { x: 92, y: -88 },
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function ContactSection() {
  const reduceMotion = useReducedMotion();

  const fieldVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        delay: reduceMotion ? 0 : delay,
        ease,
      },
    }),
  };

  return (
    <section id="contact" className="scroll-mt-24 border-t border-slate-800/80 py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.28 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.08,
                delayChildren: reduceMotion ? 0 : 0.04,
              },
            },
          }}
          className="mb-10 max-w-3xl"
        >
          <motion.p variants={fieldVariants} className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">
            Let&apos;s Build Something Meaningful
          </motion.p>
          <motion.h2 variants={fieldVariants} custom={0.06} className="editorial-serif mt-4 text-4xl font-semibold tracking-normal text-white sm:text-5xl">
            Whether it&apos;s engineering innovative products, advancing trustworthy AI research, or collaborating on ambitious ideas, I&apos;d love to connect.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.1,
                delayChildren: reduceMotion ? 0 : 0.1,
              },
            },
          }}
          className="relative overflow-hidden rounded-[2.5rem] border border-slate-800/90 bg-slate-950/80 shadow-[0_0_0_1px_rgba(148,163,184,0.06)]"
        >
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.08),transparent_44%),radial-gradient(circle_at_15%_85%,rgba(56,189,248,0.05),transparent_36%)]" />
          <div aria-hidden="true" className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent" />

          <motion.div
            variants={fieldVariants}
            className="relative grid gap-10 border-b border-slate-800/80 px-6 py-8 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-10"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.22em] text-cyan-100">
                Final convergence
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-400">
                Three ideas arrive independently, then gradually organize around a single practice:
                engineering systems that remain legible, research that stays accountable, and software
                that respects human judgment.
              </p>

              <div className="flex flex-wrap gap-2">
                {['Engineering', 'Research', 'Human Understanding'].map((label, index) => (
                  <motion.span
                    key={label}
                    variants={{
                      hidden: { opacity: 0, y: reduceMotion ? 0 : 10 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: reduceMotion ? 0 : 0.55,
                          delay: reduceMotion ? 0 : 0.12 + index * 0.08,
                          ease,
                        },
                      },
                    }}
                    className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-300"
                  >
                    {label}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: reduceMotion ? 1 : 0.985 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: reduceMotion ? 0 : 0.8, ease },
                },
              }}
              className="relative mx-auto aspect-square w-full max-w-[26rem]"
              aria-label="Converging signature interaction"
            >
              <div aria-hidden="true" className="absolute inset-[10%] rounded-full border border-slate-700/50" />
              <div aria-hidden="true" className="absolute inset-[24%] rounded-full border border-dashed border-cyan-300/12" />
              <svg
                viewBox="0 0 800 800"
                className="pointer-events-none absolute inset-[6%] h-[88%] w-[88%]"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="contact-link" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(103, 232, 249, 0.08)" />
                    <stop offset="50%" stopColor="rgba(103, 232, 249, 0.65)" />
                    <stop offset="100%" stopColor="rgba(103, 232, 249, 0.08)" />
                  </linearGradient>
                </defs>

                {[
                  'M165 155 C245 210, 298 248, 392 344',
                  'M630 165 C548 214, 495 254, 404 344',
                  'M170 620 C255 548, 318 490, 394 350',
                ].map((path, index) => (
                  <motion.path
                    key={path}
                    d={path}
                    fill="none"
                    stroke="url(#contact-link)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={index === 0 ? 3.5 : 2.25}
                    initial={{ opacity: 0, pathLength: 0 }}
                    whileInView={{ opacity: [0, 0.1, 0.35, 0.65, 0.85, 0.92], pathLength: 1 }}
                    viewport={{ once: true, amount: 0.24 }}
                    transition={{
                      duration: reduceMotion ? 0 : 6.5,
                      delay: reduceMotion ? 0 : 0.9 + index * 0.55,
                      ease,
                    }}
                  />
                ))}
              </svg>

              {principles.map((principle, index) => (
                <motion.div
                  key={principle.label}
                  aria-hidden="true"
                  className={`absolute ${principle.className}`}
                  initial={{ opacity: 0, x: reduceMotion ? 0 : principle.nudge.x, y: reduceMotion ? 0 : principle.nudge.y, scale: 0.92 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: reduceMotion ? 0 : 7.2,
                    delay: reduceMotion ? 0 : 0.25 + index * 0.6,
                    ease,
                  }}
                >
                  <span className="inline-flex rounded-full border border-cyan-300/15 bg-slate-950/82 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.22em] text-slate-300 shadow-[0_0_0_1px_rgba(15,23,42,0.6)]">
                    {principle.label}
                  </span>
                </motion.div>
              ))}

              <motion.div
                className="absolute inset-[29%] rounded-[2rem] border border-white/10 bg-slate-950/92 shadow-[0_0_60px_rgba(34,211,238,0.1)]"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{
                  duration: reduceMotion ? 0 : 6.5,
                  delay: reduceMotion ? 0 : 2.1,
                  ease,
                }}
              >
                <div className="flex h-full flex-col items-center justify-center text-center px-6">
                  <motion.p
                    className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-slate-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.24 }}
                    transition={{ duration: reduceMotion ? 0 : 2.4, delay: reduceMotion ? 0 : 3.0, ease }}
                  >
                    Resolved signature
                  </motion.p>
                  <motion.h3
                    className="editorial-serif mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl"
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.24 }}
                    transition={{ duration: reduceMotion ? 0 : 3.2, delay: reduceMotion ? 0 : 3.4, ease }}
                  >
                    Shivanshu Yadav
                    <span className="mt-2 block text-cyan-200">Software Engineer &amp; AI Researcher</span>
                  </motion.h3>
                  <motion.p
                    className="mt-4 max-w-sm text-sm leading-7 text-slate-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.24 }}
                    transition={{ duration: reduceMotion ? 0 : 2.4, delay: reduceMotion ? 0 : 4.2, ease }}
                  >
                    The relationship was always there. The section simply lets it become visible.
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="grid gap-10 px-6 py-8 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
            <motion.div
              variants={fieldVariants}
              className="space-y-8 rounded-[2rem] border border-slate-800/90 bg-slate-950/60 p-7 shadow-[0_0_0_1px_rgba(148,163,184,0.04)]"
            >
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Contact details</p>
                  <p className="mt-4 text-lg leading-8 text-slate-300">
                    Reach me directly via email or phone, explore my code on GitHub, or connect on LinkedIn.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={method.label}
                      variants={{
                        hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: reduceMotion ? 0 : 0.5,
                            delay: reduceMotion ? 0 : 0.12 + index * 0.08,
                            ease,
                          },
                        },
                      }}
                      className="flex items-center gap-4 rounded-3xl border border-slate-800/90 bg-slate-900/90 p-4 text-sm text-slate-200 transition hover:border-cyan-500/30"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
                        {method.label === 'Email' ? <Mail className="h-5 w-5" /> : method.label === 'Phone' ? <Phone className="h-5 w-5" /> : <MapPin className="h-5 w-5" />}
                      </div>
                      <div className="min-w-0 space-y-1">
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{method.label}</p>
                        <a href={method.href} className="break-words text-sm font-medium text-slate-100 hover:text-cyan-300">
                          {method.displayValue}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="rounded-[1.75rem] border border-slate-800/90 bg-slate-900/90 p-6 text-slate-300">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/70">Resume</p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">Download a polished version of my resume for an overview of skills, research, and project impact.</p>
                    </div>
                    <a
                      href="/resume.pdf"
                      download="Shivanshu-Yadav-Resume.pdf"
                      className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/15"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <ContactForm />
          </div>

          <motion.div
            variants={fieldVariants}
            className="border-t border-slate-800/80 px-6 py-7 sm:px-8 lg:px-10"
          >
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Closing thought</p>
            <p className="mt-5 text-lg leading-8 text-slate-300">{ctaText}</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.08,
                delayChildren: reduceMotion ? 0 : 0.08,
              },
            },
          }}
          className="mt-10 rounded-[2rem] border border-slate-800/90 bg-slate-950/80 p-8 shadow-glow"
        >
          <motion.p variants={fieldVariants} className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">
            Social
          </motion.p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                variants={{
                  hidden: { opacity: 0, y: reduceMotion ? 0 : 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: reduceMotion ? 0 : 0.5,
                      delay: reduceMotion ? 0 : 0.1 + index * 0.08,
                      ease,
                    },
                  },
                }}
                className="group rounded-[1.75rem] border border-slate-800/90 bg-slate-900/90 p-5 text-sm text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-500/30 hover:bg-slate-950"
              >
                <p className="font-semibold text-white">{social.platform}</p>
                <p className="mt-2 text-slate-400">{social.label}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
