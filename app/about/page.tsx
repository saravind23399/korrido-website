import type { Metadata } from 'next';
import { AboutPage } from '../components/ContentPages';
import { MarketingShell } from '../components/SiteChrome';

export const metadata: Metadata = { title: 'About', description: 'Korrido turns cab rides into measurable advertising space. HD screens inside Bengaluru cabs, GPS-verified impressions, no cameras. Meet the founders and read our pledge.', alternates: { canonical: '/about' } };
export default function Page() { return <MarketingShell><AboutPage /></MarketingShell>; }
