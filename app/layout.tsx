import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Korrido - The Smart In-Cab Experience Platform",
  description: "Turn Every Ride Into a Discovery Experience. Engage, discover, and shop in real-time.",
  keywords: ["In-Cab Advertising", "Mobility Commerce", "Transit Retail", "Digital Out of Home", "DOOH", "Rideshare Monetization"],
  authors: [{ name: "Korrido" }],
  openGraph: {
    title: "Korrido - The Smart In-Cab Experience Platform",
    description: "Turn Every Ride Into a Discovery Experience. Engage, discover, and shop in real-time right from your cab passanger seat.",
    url: "https://korrido.com", // update with actual domain
    siteName: "Korrido",
    images: [
      {
        url: "https://korrido.com/og-image.jpg", // properly converted from SVG
        width: 1200,
        height: 630,
        alt: "Korrido Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Korrido - The Smart In-Cab Experience",
    description: "Engage, discover, and shop in real-time during your ride.",
    images: ["https://korrido.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className={spaceGrotesk.className} suppressHydrationWarning>
        <div className="noise-overlay"></div>
        <Navbar />
        <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 80px)' }}>
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
