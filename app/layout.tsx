// Root layout — Bricolage Grotesque headings, Figtree body, Instrument Serif accents.
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Bricolage_Grotesque, Figtree, Instrument_Serif } from 'next/font/google';
import './globals.css';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-serif-display',
  display: 'swap',
  weight: '400',
  style: ['normal', 'italic'],
});

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://varuntej.online'),
  title: 'Varun Tej — Websites & Custom Software for Businesses | Hyderabad',
  description:
    'Business websites and custom software by Varun Tej, a full stack developer in Hyderabad. 58 websites launched for businesses in India, the UK, the US and Australia, plus ordering platforms and POS software.',
  alternates: {
    canonical: 'https://varuntej.online',
  },
  openGraph: {
    title: 'Varun Tej — Websites & Custom Software',
    description: '58 business websites launched, plus ordering platforms, POS software and AI systems.',
    url: 'https://varuntej.online',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varun Tej — Websites & Custom Software',
    description: '58 business websites launched, plus ordering platforms, POS software and AI systems.',
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
      className={`${bricolage.variable} ${figtree.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="canonical" href="https://varuntej.online" />
      </head>
      <body className="bg-paper font-sans text-ink-soft antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
