import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://goget.app'),
  title: {
    default: 'GoGet — Your Crypto. Your Naira. Your Dollars.',
    template: '%s | GoGet',
  },
  description:
    'GoGet is the fastest way to convert crypto to naira or spend it globally with your dollar card. Built for Nigerians.',
  keywords: [
    'crypto to naira',
    'USDT to naira',
    'Nigeria crypto',
    'virtual dollar card Nigeria',
    'crypto offramp Nigeria',
    'BTC to naira',
    'Nigerian fintech',
    'crypto Nigeria',
    'USDT USDC naira',
  ],
  authors: [{ name: 'GoGet' }],
  creator: 'GoGet',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: '/',
    siteName: 'GoGet',
    title: 'GoGet — Your Crypto. Your Naira. Your Dollars.',
    description:
      'Convert crypto to naira in minutes. Spend globally with your GoGet dollar card. Built for Nigerians.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GoGet — Crypto to Naira. Instantly.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoGet — Your Crypto. Your Naira. Your Dollars.',
    description:
      'Convert crypto to naira in minutes. Spend globally with your GoGet dollar card.',
    images: ['/og-image.png'],
    creator: '@gogetapp',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-background text-text-primary font-dm antialiased">
        {children}
      </body>
    </html>
  );
}
