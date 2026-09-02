import type { Metadata } from 'next';
import CampaignEstimator from '../components/CampaignEstimator';
import { MarketingShell } from '../components/SiteChrome';

export const metadata: Metadata = { title: 'Campaign Estimator · instant reach-based pricing', description: 'Build an instant reach-based estimate for your Bengaluru in-cab advertising campaign. No sales call needed.', alternates: { canonical: '/estimate' } };
export default function EstimatePage() { return <MarketingShell><CampaignEstimator /></MarketingShell>; }
