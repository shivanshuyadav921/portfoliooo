import type { Metadata } from 'next';
import './globals.css';

const siteUrl = new URL('https://shivanshuyadav.dev');

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: 'Shivanshu Yadav | Software Engineer | AI Researcher',
  description:
    'Computer Science student at VIT Vellore specializing in software engineering, multilingual NLP research, explainable AI, and retrieval-augmented generation systems.',
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
    title: 'Shivanshu Yadav | Software Engineer | AI Researcher',
    description:
      'Computer Science student at VIT Vellore specializing in software engineering, multilingual NLP research, explainable AI, and retrieval-augmented generation systems.',
    url: siteUrl.toString(),
    type: 'website',
    siteName: 'Shivanshu Yadav Portfolio',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Shivanshu Yadav | Software Engineer | AI Researcher',
    description:
      'Computer Science student at VIT Vellore specializing in software engineering, multilingual NLP research, explainable AI, and retrieval-augmented generation systems.',
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
};

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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
