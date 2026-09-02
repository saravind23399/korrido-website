import type { Metadata } from 'next';
import { AdvertiserApplication } from '../components/ApplicationPages';
import { MarketingShell } from '../components/SiteChrome';

export const metadata: Metadata = { title: 'Apply', description: 'Apply to launch your in-cab advertising campaign. Limited slots per zone. Live in 48 hours.', alternates: { canonical: '/apply' } };
export default function ApplyPage() { return <MarketingShell><AdvertiserApplication /></MarketingShell>; }
