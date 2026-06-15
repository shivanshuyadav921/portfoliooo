import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

/* ── Fonts ───────────────────────────────────────────────────────────────── */

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

/* ── Metadata ────────────────────────────────────────────────────────────── */

const siteUrl = new URL('https://shivanshuyadav.dev')

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: 'Shivanshu Yadav | Making Intelligence Understandable',
  description:
    'Editorial portfolio for Shivanshu Yadav, a Software Engineer and AI Researcher focused on explainable systems, multilingual NLP, and trustworthy retrieval.',
  keywords: [
    'Shivanshu Yadav',
    'Software Engineer',
    'AI Researcher',
    'NLP',
    'Next.js',
    'Tailwind CSS',
    'FastAPI',
    'Research Portfolio',
  ],
  authors: [{ name: 'Shivanshu Yadav' }],
  creator: 'Shivanshu Yadav',
  openGraph: {
    title: 'Shivanshu Yadav | Making Intelligence Understandable',
    description:
      'Editorial portfolio for Shivanshu Yadav, a Software Engineer and AI Researcher focused on explainable systems, multilingual NLP, and trustworthy retrieval.',
    url: siteUrl.toString(),
    type: 'website',
    siteName: 'Shivanshu Yadav Portfolio',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Shivanshu Yadav | Making Intelligence Understandable',
    description:
      'Editorial portfolio for Shivanshu Yadav, a Software Engineer and AI Researcher focused on explainable systems, multilingual NLP, and trustworthy retrieval.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
  alternates: {
    canonical: siteUrl.toString(),
  },
}

/* ── Structured Data ─────────────────────────────────────────────────────── */

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}#person`,
      name: 'Shivanshu Yadav',
      url: siteUrl.toString(),
      email: 'mailto:shivanshuy921@gmail.com',
      sameAs: [
        'https://github.com/shivanshuyadav921',
        'https://www.linkedin.com/in/shivanshu-yadav-49364b3ba',
      ],
      jobTitle: 'Software Engineer and AI Researcher',
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Vellore Institute of Technology (VIT), Vellore',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}#website`,
      url: siteUrl.toString(),
      name: 'Shivanshu Yadav Portfolio',
      author: { '@id': `${siteUrl}#person` },
    },
  ],
}

/* ── Layout ──────────────────────────────────────────────────────────────── */

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  )
}
