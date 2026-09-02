import type { Metadata } from 'next';
import { IBM_Plex_Sans, Space_Mono } from 'next/font/google';
import './globals.css';

const body = IBM_Plex_Sans({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const display = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://korrido.com'),
  title: { default: 'Korrido · In-Cab Advertising', template: '%s · Korrido' },
  description: 'Premium in-cab digital advertising for Indian cities. Captive attention, GPS-verified impressions, live in 48 hours.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Korrido · In-Cab Advertising',
    description: 'Your next customer is sitting in a cab. Reach them for 20-30 minutes of undivided attention.',
    url: '/',
    siteName: 'Korrido',
    type: 'website',
    locale: 'en_IN',
  },
  robots: { index: true, follow: true },
};

const organization = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://korrido.com/#organization',
      name: 'Korrido',
      alternateName: ['korrido'],
      url: 'https://korrido.com',
      logo: { '@type': 'ImageObject', url: 'https://korrido.com/images/korrido-light.svg' },
      description: 'Digital in-cab advertising on HD screens inside city cabs with live impression tracking.',
      address: { '@type': 'PostalAddress', streetAddress: 'Plot No 317/1, 8th Cross Road, Ganapathy Nagar, Peenya', addressLocality: 'Bengaluru', addressRegion: 'Karnataka', postalCode: '560058', addressCountry: 'IN' },
      areaServed: { '@type': 'City', name: 'Bengaluru' },
    },
    { '@type': 'WebSite', '@id': 'https://korrido.com/#website', url: 'https://korrido.com', name: 'Korrido', publisher: { '@id': 'https://korrido.com/#organization' }, inLanguage: 'en-IN' },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`} data-scroll-behavior="smooth">
      <body className={`${body.className} min-h-screen bg-background text-foreground`}>
        <div className="flex min-h-screen flex-col">{children}</div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      </body>
    </html>
  );
}
