import type { Metadata } from 'next';
import { PledgePage } from '../components/ContentPages';
import { MarketingShell } from '../components/SiteChrome';

export const metadata: Metadata = { title: 'Our Pledge', description: 'Zero passenger tracking. Transparent reporting. Fair driver economics. Locally rooted. Non-negotiable.', alternates: { canonical: '/pledge' } };
export default function Page() { return <MarketingShell><PledgePage /></MarketingShell>; }
