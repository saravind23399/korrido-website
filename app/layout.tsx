import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-retro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Korrido - The Smart In-Cab Experience Platform",
  description: "Turn Every Ride Into a Discovery Experience. Engage, discover, and shop in real-time.",
};

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceMono.variable}`}>
      <body className={spaceMono.className}>
        <Navbar />
        <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 80px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
