import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Download } from 'lucide-react';

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
            className="editorial-balance max-w-6xl text-[clamp(3.25rem,9vw,8.6rem)] font-semibold leading-[0.84] tracking-[-0.075em] text-white"
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
        </div>

        <motion.aside
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="relative mx-auto flex aspect-square w-full max-w-[22rem] items-center justify-center lg:justify-self-end"
        >
          <div className="absolute inset-[5%] rounded-full border border-slate-700/60" />
          <div className="orbit-spin absolute inset-[5%] rounded-full">
            <span className="signal-pulse absolute left-1/2 top-[-0.35rem] h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_24px_rgba(103,232,249,0.9)]" />
          </div>
          <div className="orbit-spin-reverse absolute inset-[18%] rounded-full border border-dashed border-cyan-300/25">
            <span className="absolute bottom-[8%] right-[4%] h-2 w-2 rounded-full bg-indigo-300 shadow-[0_0_18px_rgba(165,180,252,0.8)]" />
          </div>
          <div className="absolute inset-[31%] rounded-full border border-white/10 bg-slate-950/85 shadow-[0_0_70px_rgba(34,211,238,0.14)] backdrop-blur">
            <div className="flex h-full flex-col items-center justify-center text-center">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-slate-500">Current axis</span>
              <strong className="mt-2 text-lg font-medium text-white">Systems</strong>
              <span className="text-xs text-cyan-200">x</span>
              <strong className="text-lg font-medium text-white">Trust</strong>
            </div>
          </div>
          <span className="absolute left-0 top-[18%] text-[0.62rem] uppercase tracking-[0.22em] text-slate-500">Explain</span>
          <span className="absolute bottom-[15%] right-0 text-[0.62rem] uppercase tracking-[0.22em] text-slate-500">Deploy</span>
          <a
            href="https://doi.org/10.5281/zenodo.20437981"
            target="_blank"
            rel="noreferrer"
            className="group absolute bottom-0 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200"
          >
            Published research
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.aside>
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
