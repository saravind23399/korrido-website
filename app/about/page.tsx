import type { Metadata } from 'next';
import { AboutPage } from '../components/ContentPages';
import { MarketingShell } from '../components/SiteChrome';

export const metadata: Metadata = { title: 'About Us', description: 'Meet the founders building Korrido. Hyper-local in-cab advertising for Indian cities.', alternates: { canonical: '/about' } };
export default function Page() { return <MarketingShell><AboutPage /></MarketingShell>; }
