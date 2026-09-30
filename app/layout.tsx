// Root layout — Space Grotesk headings, Inter body, Instrument Serif accents.
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Space_Grotesk, Inter, Instrument_Serif } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-serif-display',
  display: 'swap',
  weight: '400',
  style: ['normal', 'italic'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://varuntej.online'),
  title: 'Varun Tej Reddy N - Full Stack Dev & AI Engineer | Hyderabad',
  description:
    'Full Stack Developer and AI Engineer in Hyderabad. 58 production websites shipped for businesses in India, the UK, the US and Australia, plus RAG pipelines and full stack apps.',
  alternates: {
    canonical: 'https://varuntej.online',
  },
  openGraph: {
    title: 'Varun Tej - Full Stack Dev & AI Engineer',
    description: '58 websites shipped for real businesses, plus AI systems and full stack apps.',
    url: 'https://varuntej.online',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varun Tej - Full Stack Dev & AI Engineer',
    description: '58 websites shipped for real businesses, plus AI systems and full stack apps.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="canonical" href="https://varuntej.online" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-paper font-sans text-ink-soft antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
