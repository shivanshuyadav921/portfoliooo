import { motion } from 'framer-motion';
import { ArrowDownRight, Download } from 'lucide-react';
import { HeroOrbit, HeroProofStrip } from '@/components/hero-orbit';

const focusAreas = ['Scalable software', 'Multilingual NLP', 'Explainable AI'];
const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="scroll-mt-24 flex min-h-[calc(100vh-6rem)] flex-col justify-between gap-16 py-8 lg:py-14"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.55fr)_minmax(19rem,0.45fr)] lg:items-center">
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-9 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5 text-xs font-medium text-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
              Open to internships and research
            </span>
            <span className="text-xs uppercase tracking-[0.24em] text-slate-500">VIT Vellore / 2028</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300/80"
          >
            Shivanshu Yadav
          </motion.p>

          <h1
            id="hero-heading"
            className="display-headline editorial-balance max-w-5xl text-white"
          >
            {['Engineering', 'systems.'].map((line, index) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 48 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.12 + index * 0.08, ease }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.28, ease }}
              className="mt-2 block font-light italic text-cyan-200"
            >
              Researching trust.
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42, ease }}
            className="mt-10 grid max-w-4xl gap-8 md:grid-cols-[1fr_auto] md:items-end"
          >
            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              I build production software and investigate how language systems can become more
              explainable, multilingual, and reliable.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <a
                href="#projects"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-100"
              >
                Explore selected work
                <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
              <a
                href="/resume.pdf"
                download="Shivanshu-Yadav-Resume.pdf"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-5 text-sm font-semibold text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:text-white"
              >
                Download resume
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>
          </motion.div>
          <HeroProofStrip />
        </div>

        <HeroOrbit />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="flex flex-col gap-5 border-t border-slate-800/80 pt-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Working across</p>
        <div className="flex flex-wrap gap-x-7 gap-y-3">
          {focusAreas.map((area, index) => (
            <span key={area} className="inline-flex items-center gap-2 text-sm text-slate-300">
              <span className="font-mono text-xs text-cyan-400/70">0{index + 1}</span>
              {area}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
