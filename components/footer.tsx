import { Github, Linkedin, Mail } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90 py-10 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:px-12 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-100">&copy; {year} Shivanshu Yadav. All rights reserved.</p>
          <p className="mt-2 text-sm text-slate-400">Building reliable software and trustworthy AI systems.</p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
          <div className="flex flex-wrap gap-4">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-slate-400 transition hover:text-cyan-300">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="https://github.com/shivanshuyadav921" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 transition hover:text-cyan-300" />
            </a>
            <a href="https://www.linkedin.com/in/shivanshu-yadav-49364b3ba" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 transition hover:text-cyan-300" />
            </a>
            <a href="mailto:shivanshuy921@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5 transition hover:text-cyan-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
