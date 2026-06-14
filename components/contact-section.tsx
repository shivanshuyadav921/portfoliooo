import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Download } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { contactMethods, socialLinks } from '@/data/contact';

const ctaText = 'Always exploring new challenges at the intersection of engineering and research.';

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-slate-800/80 py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-10 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Let&apos;s Build Something Meaningful</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Whether it&apos;s engineering innovative products, advancing trustworthy AI research, or collaborating on ambitious ideas, I&apos;d love to connect.
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="rounded-[2rem] border border-slate-800/90 bg-slate-950/80 p-8 shadow-[0_0_0_1px_rgba(148,163,184,0.06)]"
            >
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Contact details</p>
                  <p className="mt-4 text-lg leading-8 text-slate-300">
                    Reach me directly via email or phone, explore my code on GitHub, or connect on LinkedIn.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactMethods.map((method) => (
                    <div key={method.label} className="flex items-center gap-4 rounded-3xl border border-slate-800/90 bg-slate-900/90 p-4 text-sm text-slate-200 transition hover:border-cyan-500/30">
                      <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
                        {method.label === 'Email' ? <Mail className="h-5 w-5" /> : method.label === 'Phone' ? <Phone className="h-5 w-5" /> : <MapPin className="h-5 w-5" />}
                      </div>
                      <div className="min-w-0 space-y-1">
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{method.label}</p>
                        <a href={method.href} className="break-words text-sm font-medium text-slate-100 hover:text-cyan-300">
                          {method.displayValue}
                        </a>
                      </div>
                    </div>
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

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="rounded-[2rem] border border-slate-800/90 bg-slate-950/80 p-8 shadow-glow"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Social</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-[1.75rem] border border-slate-800/90 bg-slate-900/90 p-5 text-sm text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-500/30 hover:bg-slate-950"
                  >
                    <p className="font-semibold text-white">{social.platform}</p>
                    <p className="mt-2 text-slate-400">{social.label}</p>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="rounded-[2rem] border border-slate-800/90 bg-slate-950/80 p-8 shadow-[0_0_0_1px_rgba(148,163,184,0.06)]"
            >
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/70">Closing thought</p>
              <p className="mt-5 text-lg leading-8 text-slate-300">{ctaText}</p>
            </motion.div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
