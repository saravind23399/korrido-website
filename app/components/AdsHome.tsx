'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronDown, MapPin } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';

const steps = [
  ['01', 'Brief us', 'Share your zones, audience, and goals. We reply within 24 hours.'],
  ['02', 'We craft your creative', 'Our team formats your artwork for HD in-cab screens.'],
  ['03', 'Live across cabs', 'Your brand goes live on screens inside cabs across your chosen zones.'],
] as const;

const zones = ['Koramangala', 'HSR Layout', 'Indiranagar', 'Whitefield', 'Marathahalli', 'Electronic City', 'MG Road', 'Jayanagar', 'Banashankari', 'Hebbal', 'BTM Layout', 'Sarjapur Road', 'Bellandur', 'JP Nagar', 'Vidyaranyapura', 'RT Nagar'];

const stats = [
  ['20-30 min', 'average ride time'],
  ['16+ zones', 'active across Bengaluru'],
  ['100+ cabs', 'live on the ground'],
  ['48 hours', 'from brief to live'],
] as const;

const faqs = [
  ['How fast can a campaign go live?', '48 hours from brief sign-off. Creative is pushed wirelessly. No installation.'],
  ['Where will my ad show?', 'On HD screens inside cabs in your selected zones. GPS-tracked. No cameras.'],
  ['How do you measure impressions?', 'GPS movement and zone-crossing data. Zero cameras. Zero biometrics.'],
] as const;

function Scene({
  children,
  image,
  overlay = true,
  id,
  className = '',
}: {
  children: React.ReactNode;
  image?: string;
  overlay?: boolean;
  id?: string;
  className?: string;
}) {
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
        >
          <Image src={image} alt="" fill sizes="100vw" className="object-cover" priority />
        </motion.div>
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

export default function AdsHome() {
  const [openFaq, setOpenFaq] = useState(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <>
      <Scene id="hero" image="/images/cabin.jpg" className="items-end">
        <div className="flex min-h-[80dvh] flex-col justify-end pb-20">
          <p className="chapter-marker mb-6">01 / Opening</p>
          <h1 className="display-headline max-w-4xl text-foreground">
            The attention is already there.
          </h1>
          <p className="body-copy mt-6 max-w-2xl text-foreground/80">
            Reach passengers inside Bengaluru cabs for 20-30 minutes of undivided attention. No cameras. No biometrics. Just GPS-verified impressions.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/apply" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-mono text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-amber-500">
              Reserve a zone <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#medium" className="inline-flex items-center gap-1.5 font-mono text-sm font-bold uppercase tracking-wide text-foreground/80 transition-colors hover:text-primary">
              See the film <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Scene>

      <Scene id="gap" className="bg-surface" overlay={false}>
        <div className="grid min-h-[80dvh] items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-none border border-border lg:aspect-auto lg:h-[60dvh]">
            <Image src="/images/HERO.png" alt="Outdoor advertising is a guess" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-background/40" />
          </div>
          <div className="max-w-xl">
            <p className="chapter-marker mb-6">02 / The gap</p>
            <h2 className="section-headline text-foreground">Outdoor advertising is stuck.</h2>
            <div className="mt-6 space-y-4">
              <p className="body-copy">Billboards are a guess. You pay for impressions you cannot measure.</p>
              <p className="body-copy">Digital feeds are a race to the bottom. Customers scroll past in half a second.</p>
              <p className="body-copy text-foreground">The passenger in a cab is different. The screen is right there. They are not scrolling. They are looking forward.</p>
            </div>
          </div>
        </div>
      </Scene>

      <Scene id="medium" image="/images/cabin.jpg" overlay>
        <div className="flex min-h-[80dvh] flex-col items-center justify-center text-center">
          <p className="chapter-marker mb-6">03 / The medium</p>
          <h2 className="display-headline max-w-5xl text-foreground">The last undivided surface.</h2>
          <p className="body-copy mx-auto mt-6 max-w-2xl text-foreground/80">
            No swipe. No skip. No ad blocker. A screen in the passenger&apos;s direct line of sight for the whole ride.
          </p>
          <div className="mt-14 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map(([stat, label]) => (
              <div key={stat} className="border-t-2 border-primary pt-4 text-center">
                <p className="font-mono text-lg font-bold uppercase tracking-wide text-foreground">{stat}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </Scene>

      <Scene className="bg-background" overlay={false}>
        <div className="flex min-h-[80dvh] flex-col justify-center">
          <p className="chapter-marker mb-6">04 / How it works</p>
          <h2 className="section-headline text-foreground">From brief to live in 48 hours.</h2>
          <div className="mt-12 max-w-3xl">
            {steps.map(([num, title, desc]) => (
              <div key={title} className="border-t border-border py-8 first:border-t-2 first:border-primary">
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-3xl font-bold text-primary">{num}</span>
                  <div>
                    <h3 className="font-mono text-lg font-bold uppercase tracking-wide text-foreground">{title}</h3>
                    <p className="body-copy mt-2">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Scene>

      <Scene className="bg-surface" overlay={false}>
        <div className="flex min-h-[80dvh] flex-col justify-center">
          <p className="chapter-marker mb-6">05 / Zones</p>
          <h2 className="section-headline text-foreground">Live across Bengaluru.</h2>
          <p className="body-copy mt-4 max-w-2xl">16 active zones across the city. More added every month.</p>
          <div className="mt-10 overflow-hidden border-y border-border py-5">
            <div className="animate-marquee">
              {[...zones, ...zones].map((zone, i) => (
                <span key={`${zone}-${i}`} className="flex items-center gap-3 px-4 font-mono text-sm font-bold uppercase tracking-wide text-foreground">
                  <MapPin className="h-3.5 w-3.5 text-primary" /> {zone}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">More zones coming soon: Malleshwaram, Rajajinagar, Yelahanka.</p>
        </div>
      </Scene>

      <Scene className="bg-background" overlay={false}>
        <div className="flex min-h-[80dvh] flex-col justify-center">
          <p className="chapter-marker mb-6">06 / Founders</p>
          <h2 className="section-headline max-w-3xl text-foreground">Two founders, one mission.</h2>
          <p className="body-copy mt-4 max-w-2xl">A builder and an operator. Engineering depth paired with product and compliance.</p>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="border-l-2 border-primary pl-6">
              <span className="font-mono text-4xl font-bold text-foreground">AS</span>
              <h3 className="mt-3 font-mono text-lg font-bold uppercase tracking-wide text-foreground">Aravind S</h3>
              <p className="text-sm font-medium text-primary">Co-Founder & Engineering</p>
              <p className="body-copy mt-3 text-sm">AI-native engineering leader. Scaled teams at Anthriq. Shipped compliance products at RADICALi. Builds honest systems.</p>
            </div>
            <div className="border-l-2 border-primary pl-6">
              <span className="font-mono text-4xl font-bold text-foreground">VP</span>
              <h3 className="mt-3 font-mono text-lg font-bold uppercase tracking-wide text-foreground">Vishal Prathush R</h3>
              <p className="text-sm font-medium text-primary">Co-Founder & Product</p>
              <p className="body-copy mt-3 text-sm">Product and compliance depth from Stripe, PwC, and Amazon. Keeps Korrido as principled as the product.</p>
            </div>
          </div>
        </div>
      </Scene>

      <Scene className="bg-background" overlay={false}>
        <div className="grid min-h-[80dvh] items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <p className="chapter-marker mb-6">07 / Close</p>
            <h2 className="display-headline text-foreground">Reserve a zone now.</h2>
            <p className="body-copy mt-6 text-foreground/80">First movers lock in priority placement and launch pricing. Start reaching customers inside cabs today.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/apply" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-mono text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-amber-500">
                Reserve a zone <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/drive" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-7 py-3.5 font-mono text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:bg-surface-2">
                Drive with us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="w-full max-w-lg rounded-2xl border border-border bg-surface p-7">
            <h3 className="font-mono text-lg font-bold uppercase tracking-wide text-foreground">City expansion updates</h3>
            <p className="body-copy mt-2 text-sm">New cities every quarter. Early zone openings. No spam.</p>
            {subscribed ? (
              <div className="mt-6 flex items-center gap-2 rounded-2xl bg-emerald-950/40 px-4 py-3 text-emerald-300">
                <CheckCircle2 className="h-5 w-5" /> <span className="text-sm font-medium">You are on the list.</span>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }} className="mt-6 space-y-3">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className="w-full rounded-2xl border border-input bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-ring" required />
                <button type="submit" className="w-full rounded-full bg-primary px-4 py-3 font-mono text-sm font-bold uppercase tracking-wide text-primary-foreground hover:bg-amber-500">Subscribe</button>
              </form>
            )}
            <div className="mt-8 border-t border-border pt-6">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary">Questions</p>
              <div className="mt-4 space-y-3">
                {faqs.map(([q, a], i) => (
                  <div key={q}>
                    <button type="button" className="flex w-full items-center gap-3 text-left" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                      <span className={`flex-1 text-sm font-semibold ${openFaq === i ? 'text-primary' : 'text-foreground'}`}>{q}</span>
                      <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`grid transition-all duration-300 ${openFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <p className="pb-2 pt-2 text-sm leading-relaxed text-muted-foreground">{a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Scene>
    </>
  );
}
