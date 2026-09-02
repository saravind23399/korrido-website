'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

function Scene({ children, image, overlay = true, id, className = '' }: { children: React.ReactNode; image?: string; overlay?: boolean; id?: string; className?: string }) {
  const reduce = useReducedMotion();

  return (
    <section id={id} className={`scene ${className}`} data-scene>
      {image && (
        <motion.div
          initial={reduce ? false : { scale: 1.08, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="scene-backdrop"
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      )}
      {overlay && <div className="scene-overlay" />}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20% 0px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="scene-panel"
      >
        {children}
      </motion.div>
    </section>
  );
}

export function PledgePage() {
  const pledges = [
    ['Zero passenger tracking', 'We measure impressions through GPS movement and zone data. No cameras, no facial recognition, no biometric data. Ever.'],
    ['Transparent reporting', 'Every advertiser sees the same data we see: impressions, uptime, zone reach. No vanity metrics. No inflation.'],
    ['Fair driver economics', 'Drivers earn a clear share of every campaign on their vehicle. Paid weekly with a transparent statement.'],
    ['Locally rooted', 'We hire locally, partner with Indian cab fleets, and prioritize local advertisers. The cab in front of you is run by a real person from your city.'],
  ] as const;

  return (
    <>
      <Scene image="/images/cabin.jpg" className="items-end">
        <div className="flex min-h-[80dvh] flex-col justify-end pb-20">
          <p className="chapter-marker mb-6">01 / The word</p>
          <h1 className="display-headline max-w-5xl text-foreground">We make in-cab advertising, honestly.</h1>
          <p className="body-copy mt-6 max-w-2xl text-foreground/80">These are commitments to advertisers, drivers, and the passengers inside the cabs that carry our screens.</p>
        </div>
      </Scene>

      {pledges.map(([title, desc], i) => (
        <Scene key={title} className="bg-background" overlay={false}>
          <div className="flex min-h-[70dvh] flex-col justify-center">
            <p className="chapter-marker mb-6">{String(i + 2).padStart(2, '0')} / {title}</p>
            <h2 className="section-headline max-w-4xl text-foreground">{title}</h2>
            <p className="body-copy mt-6 max-w-2xl">{desc}</p>
          </div>
        </Scene>
      ))}

      <Scene className="bg-surface" overlay={false}>
        <div className="flex min-h-[80dvh] flex-col items-center justify-center text-center">
          <p className="chapter-marker mb-6">06 / Hold</p>
          <h2 className="display-headline text-foreground">See it in action.</h2>
          <p className="body-copy mt-4 max-w-2xl">Pre-book your slot. Lock in priority placement and launch pricing.</p>
          <Link href="/apply" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-mono text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-amber-500">
            Apply Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Scene>
    </>
  );
}

export function AboutPage() {
  const values = [
    ['We act', 'Emotional'],
    ['We serve', 'People'],
    ['Being', 'Ethical & Humble'],
    ['Think', 'Logical'],
    ['Solve', 'Problems'],
    ['Working', 'Smartly'],
  ] as const;

  return (
    <>
      <Scene image="/images/cabin.jpg" className="items-end">
        <div className="flex min-h-[80dvh] flex-col justify-end pb-20">
          <p className="chapter-marker mb-6">01 / About</p>
          <h1 className="display-headline max-w-5xl text-foreground">About Korrido</h1>
          <p className="body-copy mt-6 max-w-2xl text-foreground/80">Korrido turns everyday cab rides into premium advertising space. HD screens inside city cabs. GPS-tracked impressions. No cameras.</p>
        </div>
      </Scene>

      <Scene className="bg-background" overlay={false}>
        <div className="flex min-h-[80dvh] flex-col justify-center">
          <p className="chapter-marker mb-6">02 / Mission</p>
          <h2 className="section-headline max-w-4xl text-foreground">Bridge the gap between outdoor and digital.</h2>
          <p className="body-copy mt-6 max-w-2xl">Every journey becomes an opportunity for brands to reach engaged passengers in a premium, distraction-free environment. We make it measurable, data-driven, and location-aware.</p>
          <div className="mt-10 grid gap-6 text-sm leading-relaxed text-muted-foreground md:grid-cols-2">
            <p>Beyond advertising, Korrido enhances the passenger experience with useful travel content and local recommendations, while creating an additional revenue stream for drivers.</p>
            <p>We are building the future of mobility media. Every ride creates value for passengers, advertisers, and the drivers who carry our screens.</p>
          </div>
        </div>
      </Scene>

      <Scene className="bg-surface" overlay={false}>
        <div className="flex min-h-[80dvh] flex-col justify-center">
          <p className="chapter-marker mb-6">03 / Founders</p>
          <h2 className="section-headline text-foreground">Two founders, one mission.</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="border-l-2 border-primary pl-6">
              <span className="font-mono text-4xl font-bold text-foreground">AS</span>
              <h3 className="mt-3 font-mono text-lg font-bold uppercase tracking-wide text-foreground">Aravind S</h3>
              <p className="text-sm font-medium text-primary">Co-Founder, Product & Engineering</p>
              <p className="body-copy mt-3 text-sm">AI-native engineering leader. Scaled software teams at Anthriq. Shipped AI compliance products at RADICALi. Owns product strategy and the full engineering stack at Korrido.</p>
            </div>
            <div className="border-l-2 border-primary pl-6">
              <span className="font-mono text-4xl font-bold text-foreground">VP</span>
              <h3 className="mt-3 font-mono text-lg font-bold uppercase tracking-wide text-foreground">Vishal Prathush R</h3>
              <p className="text-sm font-medium text-primary">Co-Founder, Product & Operations</p>
              <p className="body-copy mt-3 text-sm">Product manager with fintech and compliance depth from Stripe, PwC, and Amazon. Owns advertiser experience, driver operations, and the systems that keep the platform honest.</p>
            </div>
          </div>
        </div>
      </Scene>

      <Scene className="bg-background" overlay={false}>
        <div className="flex min-h-[80dvh] flex-col justify-center">
          <p className="chapter-marker mb-6">04 / Values</p>
          <h2 className="section-headline text-foreground">What keeps us on track.</h2>
          <div className="mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
            {values.map(([a, b]) => (
              <div key={a} className="flex items-baseline gap-4 border-t border-border pt-4">
                <span className="font-mono text-2xl font-bold text-foreground">{a}</span>
                <span className="font-mono text-sm font-bold uppercase tracking-wide text-primary">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </Scene>
    </>
  );
}

export function StoryPage() {
  const milestones = [
    ['48 hours', 'From brief to live. No printing. No installation crews.'],
    ['16+ zones', 'Active across Bengaluru, from Koramangala to Whitefield.'],
    ['100+ cabs', 'Live on the ground in Karnataka. Still counting.'],
    ['Zero cameras', 'Impressions tracked by GPS. No biometrics. Ever.'],
  ] as const;

  return (
    <>
      <Scene image="/images/cabin.jpg" className="items-end">
        <div className="flex min-h-[80dvh] flex-col justify-end pb-20">
          <p className="chapter-marker mb-6">01 / Thesis</p>
          <h1 className="display-headline max-w-5xl text-foreground">The richest ad real estate is hurtling through the city right now.</h1>
          <p className="body-copy mt-6 max-w-2xl text-foreground/80">And nobody is using it well. Korrido was built to turn every cab ride into measurable, targeted, premium advertising space.</p>
        </div>
      </Scene>

      <Scene className="bg-surface" overlay={false}>
        <div className="grid min-h-[80dvh] items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <p className="chapter-marker mb-6">02 / The problem</p>
            <h2 className="section-headline text-foreground">Outdoor is stuck. Digital is scattered.</h2>
            <div className="mt-6 space-y-4">
              <p className="body-copy">Outdoor advertising gives you reach but no targeting or measurement.</p>
              <p className="body-copy">Digital advertising gives you targeting but people scroll past in a blur.</p>
              <p className="body-copy text-foreground">Brands need both: the right person, in the right place, for long enough to matter.</p>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-border lg:aspect-auto lg:h-[50dvh]">
            <div style={{ backgroundImage: 'url(/images/HERO.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} className="absolute inset-0" />
            <div className="absolute inset-0 bg-background/50" />
          </div>
        </div>
      </Scene>

      <Scene image="/images/cabin.jpg" overlay>
        <div className="flex min-h-[80dvh] flex-col items-center justify-center text-center">
          <p className="chapter-marker mb-6">03 / The realization</p>
          <h2 className="display-headline max-w-5xl text-foreground">The audience is already sitting in a cab.</h2>
          <p className="body-copy mx-auto mt-6 max-w-2xl text-foreground/80">Thousands of commuters sit in city cabs for 20-30 uninterrupted minutes. The screen in their line of sight is the most valuable attention surface in the vehicle, and it was wasted.</p>
        </div>
      </Scene>

      <Scene className="bg-background" overlay={false}>
        <div className="flex min-h-[80dvh] flex-col justify-center">
          <p className="chapter-marker mb-6">04 / The build</p>
          <h2 className="section-headline text-foreground">Two problems. One solution.</h2>
          <div className="mt-10 max-w-3xl space-y-6">
            <p className="body-copy">Aravind S saw the technical opportunity: a platform that could push ads wirelessly to in-cab screens, track impressions by GPS, and build a real-time dashboard.</p>
            <p className="body-copy">Vishal Prathush R saw the operational opportunity: fair economics for drivers, transparent reporting for advertisers, and locally rooted execution.</p>
            <p className="body-copy">Together they built Korrido: the self-serve ease of digital advertising applied to the most underutilized premium surface in the city.</p>
          </div>
        </div>
      </Scene>

      <Scene className="bg-surface" overlay={false}>
        <div className="flex min-h-[80dvh] flex-col justify-center">
          <p className="chapter-marker mb-6">05 / The commitment</p>
          <h2 className="section-headline text-foreground">A line we refuse to cross.</h2>
          <p className="body-copy mt-6 max-w-2xl">The whole system runs without a single camera, audio sensor, or biometric. That is not a feature. It is a pledge.</p>
          <div className="mt-10 border-l-2 border-primary pl-6">
            <p className="font-mono text-lg font-bold uppercase tracking-wide text-foreground">Honest measurement. Fair driver economics. Locally rooted.</p>
            <p className="body-copy mt-2 text-sm">These are the terms on which we operate. Non-negotiable.</p>
          </div>
        </div>
      </Scene>

      <Scene className="bg-background" overlay={false}>
        <div className="flex min-h-[80dvh] flex-col justify-center">
          <p className="chapter-marker mb-6">06 / Milestones</p>
          <h2 className="section-headline text-foreground">What we have built so far.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map(([stat, desc]) => (
              <div key={stat} className="border-t-2 border-primary pt-4">
                <p className="font-mono text-xl font-bold uppercase tracking-wide text-foreground">{stat}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <Link href="/apply" className="mt-12 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-mono text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-amber-500">
            Book your slot <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Scene>
    </>
  );
}

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="relative min-h-screen bg-background px-4 py-24 sm:px-8" data-scene>
      <div className="mx-auto max-w-3xl">
        <p className="chapter-marker mb-4">Legal</p>
        <h1 className="display-headline text-foreground">{title}</h1>
        <div className="mt-10 space-y-8 text-muted-foreground">
          {children}
        </div>
      </div>
    </section>
  );
}
