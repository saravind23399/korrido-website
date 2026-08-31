import type { Metadata } from 'next';
import { Space_Grotesk, Manrope } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
});

const manrope = Manrope({
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Korrido — India's First Full-Stack Ride Hailing Platform",
  description:
    "One subscription. Every layer. Fleet management, smart dispatch, passenger & driver apps, and in-cab entertainment — all in one flat subscription. Start from ₹799/vehicle/month.",
  keywords: [
    'Ride Hailing Platform',
    'Fleet Management',
    'Dispatch Engine',
    'Passenger App',
    'Driver App',
    'In-Cab Entertainment',
    'In-Cab Digital',
    'India Ride Hailing',
  ],
  authors: [{ name: 'Korrido' }],
  openGraph: {
    title: "Korrido — India's First Full-Stack Ride Hailing Platform",
    description:
      'One subscription covers fleet management, smart dispatch, passenger & driver apps, and in-cab entertainment. Go live in one day.',
    url: 'https://korrido.com',
    siteName: 'Korrido',
    images: [
      {
        url: 'https://korrido.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Korrido — Full-Stack Ride Hailing Platform',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Korrido — India's First Full-Stack Ride Hailing Platform",
    description:
      'One subscription. Every layer. Go live in one day from ₹799/vehicle/month.',
    images: ['https://korrido.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <body>
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
