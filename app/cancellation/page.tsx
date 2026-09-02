import type { Metadata } from 'next';
import { LegalPage } from '../components/ContentPages';
import { MarketingShell } from '../components/SiteChrome';

export const metadata: Metadata = { title: 'Cancellation Policy', alternates: { canonical: '/cancellation' } };
export default function Page() { return <MarketingShell><LegalPage title="Cancellation Policy"><p>You may cancel an active subscription at any time from the dashboard. Cancellation takes effect at the end of the current billing period. Your ad continues to serve until then.</p><p>For pilot-program slots: pilots are non-binding. You can step out at any time by emailing <a className="text-primary underline" href="mailto:team@korrido.com">team@korrido.com</a>.</p></LegalPage></MarketingShell>; }
