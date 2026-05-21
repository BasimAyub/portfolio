import type { Metadata, Viewport } from 'next';
import { type ReactNode } from 'react';
import { Instrument_Serif, Inter } from 'next/font/google';

import { AppProviders } from '@/components/providers/AppProviders';
import { siteConfig } from '@/lib/site-config';

import './globals.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} · ${siteConfig.title}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${siteConfig.name} · ${siteConfig.title}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
  },
  icons: {
    icon: `${basePath}/favicon.png`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} · ${siteConfig.title}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang='en-GB'
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${inter.variable}`}
    >
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
