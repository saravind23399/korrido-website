import type { Metadata } from 'next';
import { StoryPage } from '../components/ContentPages';
import { MarketingShell } from '../components/SiteChrome';

export const metadata: Metadata = { title: 'Our Story', description: 'Why Korrido exists. The gap between outdoor and digital advertising, and the platform that bridges it.', alternates: { canonical: '/story' } };
export default function Page() { return <MarketingShell><StoryPage /></MarketingShell>; }
