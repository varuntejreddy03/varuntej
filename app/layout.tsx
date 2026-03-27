// Root layout loads fonts, metadata, global styles, and Vercel Analytics for the portfolio.
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { JetBrains_Mono, Manrope, Sora } from 'next/font/google';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display-google',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans-google',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://varuntej.online'),
  title: 'Varun Tej Reddy N - Full Stack Dev & AI Engineer | Hyderabad',
  description:
    'Full Stack Developer and AI Engineer. 18+ production sites, RAG pipelines, React/Next.js/FastAPI. Based in Hyderabad. Open to roles 2027.',
  alternates: {
    canonical: 'https://varuntej.online',
  },
  openGraph: {
    title: 'Varun Tej - Full Stack Dev & AI Engineer',
    description: 'Building scalable web apps and AI systems. 18+ live deployments.',
    url: 'https://varuntej.online',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varun Tej - Full Stack Dev & AI Engineer',
    description: 'Building scalable web apps and AI systems. 18+ live deployments.',
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
      className={`${sora.variable} ${manrope.variable} ${jetbrainsMono.variable} dark`}
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
      <body className="bg-[#0d0f14] font-sans text-slate-100 antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
