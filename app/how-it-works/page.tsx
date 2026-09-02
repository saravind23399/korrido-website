import type { Metadata } from 'next';
import { HowItWorksPage } from '../components/ContentPages';
import { MarketingShell } from '../components/SiteChrome';

export const metadata: Metadata = {
  title: 'How it works',
  description: 'How Korrido puts your brand on HD screens inside Bengaluru cabs. GPS-verified impressions, live dashboard, no cameras, live in 48 hours.',
  alternates: { canonical: '/how-it-works' },
};

export default function Page() {
  return (
    <MarketingShell>
      <HowItWorksPage />
    </MarketingShell>
  );
}
