'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from './Icons';

const transition = { duration: 0.9, ease: [0.32, 0.72, 0, 1] as const };

function Scene({ children, image, overlay = true, id, className = '' }: { children: React.ReactNode; image?: string; overlay?: boolean; id?: string; className?: string }) {
  const reduce = useReducedMotion();

  return (
    <section id={id} className={`scene ${className}`} data-scene>
      {image && (
        <motion.div
          initial={reduce ? false : { scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.32, 0.72, 0, 1] }}
          className="scene-backdrop"
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      )}
      {overlay && <div className="scene-overlay" />}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 64, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-20% 0px' }}
        transition={transition}
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
        <div className="flex min-h-[80dvh] w-full flex-col justify-end pb-20">
          <h1 className="display-headline max-w-5xl text-foreground">We make in-cab advertising, honestly.</h1>
          <p className="body-copy mt-6 max-w-2xl text-foreground/80">These are commitments to advertisers, drivers, and the passengers inside the cabs that carry our screens.</p>
        </div>
      </Scene>

      {pledges.map(([title, desc]) => (
        <Scene key={title} className="bg-background" overlay={false}>
          <div className="flex min-h-[70dvh] w-full flex-col justify-center">
            <h2 className="section-headline max-w-4xl text-foreground">{title}</h2>
            <p className="body-copy mt-6 max-w-2xl text-muted-foreground">{desc}</p>
          </div>
        </Scene>
      ))}

      <Scene className="bg-surface" overlay={false}>
        <div className="flex min-h-[80dvh] w-full flex-col items-center justify-center text-center">
          <h2 className="display-headline text-foreground">See it in action.</h2>
          <p className="body-copy mt-4 max-w-2xl text-muted-foreground">Pre-book your slot. Lock in priority placement and launch pricing.</p>
          <Link href="/apply" className="btn-magnetic btn-primary mt-10">
            <span>Apply Now</span>
            <span className="btn-icon"><ArrowRight className="h-3.5 w-3.5" /></span>
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
        <div className="flex min-h-[80dvh] w-full flex-col justify-end pb-20">
          <h1 className="display-headline max-w-5xl text-foreground">About Korrido</h1>
          <p className="body-copy mt-6 max-w-2xl text-foreground/80">Korrido turns everyday cab rides into premium advertising space. HD screens inside city cabs. GPS-tracked impressions. No cameras.</p>
        </div>
      </Scene>

      <Scene className="bg-background" overlay={false}>
        <div className="flex min-h-[80dvh] w-full flex-col justify-center">
          <h2 className="section-headline max-w-4xl text-foreground">Bridge the gap between outdoor and digital.</h2>
          <p className="body-copy mt-6 max-w-2xl text-muted-foreground">Every journey becomes an opportunity for brands to reach engaged passengers in a premium, distraction-free environment. We make it measurable, data-driven, and location-aware.</p>
          <div className="mt-10 grid gap-6 text-sm leading-relaxed text-muted-foreground md:grid-cols-2">
            <p>Beyond advertising, Korrido enhances the passenger experience with useful travel content and local recommendations, while creating an additional revenue stream for drivers.</p>
            <p>We are building the future of mobility media. Every ride creates value for passengers, advertisers, and the drivers who carry our screens.</p>
          </div>
        </div>
      </Scene>

      <Scene className="bg-surface" overlay={false}>
        <div className="flex min-h-[80dvh] w-full flex-col justify-center">
          <h2 className="section-headline text-foreground">Two founders, one mission.</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="bezel">
              <div className="bezel-inner p-8">
                <div className="flex items-start gap-5">
                  <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full font-mono text-3xl font-bold text-foreground" style={{ background: 'color-mix(in srgb, var(--color-foreground) 5%, transparent)', border: '1px solid color-mix(in srgb, var(--color-foreground) 10%, transparent)' }}>AS</span>
                  <div>
                    <h3 className="font-mono text-lg font-bold uppercase tracking-wide text-foreground">Aravind S</h3>
                    <p className="text-sm font-medium text-primary">Co-Founder, Product & Engineering</p>
                    <p className="body-copy mt-3 text-sm text-muted-foreground">AI-native engineering leader. Scaled software teams at Anthriq. Shipped AI compliance products at RADICALi. Owns product strategy and the full engineering stack at Korrido.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bezel">
              <div className="bezel-inner p-8">
                <div className="flex items-start gap-5">
                  <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full font-mono text-3xl font-bold text-foreground" style={{ background: 'color-mix(in srgb, var(--color-foreground) 5%, transparent)', border: '1px solid color-mix(in srgb, var(--color-foreground) 10%, transparent)' }}>VP</span>
                  <div>
                    <h3 className="font-mono text-lg font-bold uppercase tracking-wide text-foreground">Vishal Prathush R</h3>
                    <p className="text-sm font-medium text-primary">Co-Founder, Product & Operations</p>
                    <p className="body-copy mt-3 text-sm text-muted-foreground">Product manager with fintech and compliance depth from Stripe, PwC, and Amazon. Owns advertiser experience, driver operations, and the systems that keep the platform honest.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Scene>

      <Scene className="bg-background" overlay={false}>
        <div className="flex min-h-[80dvh] w-full flex-col justify-center">
          <h2 className="section-headline text-foreground">What keeps us on track.</h2>
          <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            {values.map(([a, b]) => (
              <div key={a} className="bezel-card">
                <div className="bezel-card-inner flex items-baseline gap-4 p-5">
                  <span className="font-mono text-2xl font-bold text-foreground">{a}</span>
                  <span className="font-mono text-sm font-bold uppercase tracking-wide text-primary">{b}</span>
                </div>
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
        <div className="flex min-h-[80dvh] w-full flex-col justify-end pb-20">
          <h1 className="display-headline max-w-5xl text-foreground">The richest ad real estate is hurtling through the city right now.</h1>
          <p className="body-copy mt-6 max-w-2xl text-foreground/80">And nobody is using it well. Korrido was built to turn every cab ride into measurable, targeted, premium advertising space.</p>
        </div>
      </Scene>

      <Scene className="bg-surface" overlay={false}>
        <div className="grid min-h-[80dvh] w-full items-center gap-14 lg:grid-cols-2">
          <div className="bezel order-2 lg:order-1">
            <div className="bezel-inner relative aspect-[4/3] w-full overflow-hidden lg:aspect-auto lg:h-[50dvh]">
              <Image src="/images/HERO.png" alt="Outdoor advertising is a guess" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              <div className="absolute inset-0" style={{ background: 'color-mix(in srgb, var(--color-background) 45%, transparent)' }} />
            </div>
          </div>
          <div className="order-1 max-w-xl lg:order-2">
            <h2 className="section-headline text-foreground">Outdoor is stuck. Digital is scattered.</h2>
            <div className="mt-8 space-y-5">
              <p className="body-copy text-muted-foreground">Outdoor advertising gives you reach but no targeting or measurement.</p>
              <p className="body-copy text-muted-foreground">Digital advertising gives you targeting but people scroll past in a blur.</p>
              <p className="body-copy text-foreground/90">Brands need both: the right person, in the right place, for long enough to matter.</p>
            </div>
          </div>
        </div>
      </Scene>

      <Scene image="/images/cabin.jpg" overlay>
        <div className="flex min-h-[80dvh] w-full flex-col items-center justify-center text-center">
          <h2 className="display-headline max-w-5xl text-foreground">The audience is already sitting in a cab.</h2>
          <p className="body-copy mx-auto mt-6 max-w-2xl text-foreground/80">Thousands of commuters sit in city cabs for 20-30 uninterrupted minutes. The screen in their line of sight is the most valuable attention surface in the vehicle, and it was wasted.</p>
        </div>
      </Scene>

      <Scene className="bg-background" overlay={false}>
        <div className="flex min-h-[80dvh] w-full flex-col justify-center">
          <h2 className="section-headline text-foreground">Two problems. One solution.</h2>
          <div className="mt-10 max-w-4xl space-y-4">
            {['Aravind S saw the technical opportunity: a platform that could push ads wirelessly to in-cab screens, track impressions by GPS, and build a real-time dashboard.', 'Vishal Prathush R saw the operational opportunity: fair economics for drivers, transparent reporting for advertisers, and locally rooted execution.', 'Together they built Korrido: the self-serve ease of digital advertising applied to the most underutilized premium surface in the city.'].map((p) => (
              <div key={p} className="bezel-card mb-2">
                <div className="bezel-card-inner p-5">
                  <p className="body-copy text-muted-foreground">{p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Scene>

      <Scene className="bg-surface" overlay={false}>
        <div className="flex min-h-[80dvh] w-full flex-col justify-center">
          <h2 className="section-headline text-foreground">A line we refuse to cross.</h2>
          <p className="body-copy mt-6 max-w-2xl text-muted-foreground">The whole system runs without a single camera, audio sensor, or biometric. That is not a feature. It is a pledge.</p>
          <div className="bezel-card mt-10 max-w-3xl border-l-2 border-primary !pl-0">
            <div className="bezel-card-inner p-6" style={{ borderLeft: '2px solid var(--color-primary)' }}>
              <p className="font-mono text-lg font-bold uppercase tracking-wide text-foreground">Honest measurement. Fair driver economics. Locally rooted.</p>
              <p className="body-copy mt-2 text-sm text-muted-foreground">These are the terms on which we operate. Non-negotiable.</p>
            </div>
          </div>
        </div>
      </Scene>

      <Scene className="bg-background" overlay={false}>
        <div className="flex min-h-[80dvh] w-full flex-col justify-center">
          <h2 className="section-headline text-foreground">What we have built so far.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map(([stat, desc]) => (
              <div key={stat} className="bezel-card">
                <div className="bezel-card-inner p-5">
                  <p className="font-mono text-xl font-bold uppercase tracking-wide text-foreground">{stat}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/apply" className="btn-magnetic btn-primary mt-12 w-fit">
            <span>Book your slot</span>
            <span className="btn-icon"><ArrowRight className="h-3.5 w-3.5" /></span>
          </Link>
        </div>
      </Scene>
    </>
  );
}

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="relative min-h-screen bg-background px-4 py-32 sm:px-8" data-scene>
      <div className="bezel mx-auto max-w-3xl">
        <div className="bezel-inner p-8 sm:p-12">
          <h1 className="display-headline text-foreground">{title}</h1>
          <div className="mt-10 space-y-8 text-muted-foreground">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
