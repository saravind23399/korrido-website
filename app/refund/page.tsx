import type { Metadata } from 'next';
import { LegalPage } from '../components/ContentPages';
import { MarketingShell } from '../components/SiteChrome';

export const metadata: Metadata = { title: 'Refund Policy', alternates: { canonical: '/refund' } };
export default function Page() { return <MarketingShell><LegalPage title="Refund Policy"><p>Korrido subscriptions are billed in advance and are non-refundable once the campaign goes live. Pre-launch cancellations are eligible for a full refund minus payment-gateway fees, processed within 7 business days.</p><p>For pilot-program slots: pilots are provided at no cost and therefore not eligible for refunds. Verified pilots that are subsequently revoked for cause will not entitle the applicant to monetary compensation.</p><p>For refund requests, email <a className="text-primary underline" href="mailto:team@korrido.com">team@korrido.com</a> with your invoice reference.</p></LegalPage></MarketingShell>; }
