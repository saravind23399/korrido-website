import type { Metadata } from 'next';
import { DriverApplication } from '../components/ApplicationPages';
import { MarketingShell } from '../components/SiteChrome';

export const metadata: Metadata = { title: 'Drive with Korrido · Earn Extra Every Kilometre', description: 'Host a Korrido screen in your cab. Earn passive monthly income. No extra work. Zero passenger tracking.', alternates: { canonical: '/drive' } };
export default function DrivePage() { return <MarketingShell><DriverApplication /></MarketingShell>; }
