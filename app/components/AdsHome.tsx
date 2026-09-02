'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';
import { ArrowRight, Check, ChevronDown, MapPin } from './Icons';

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

const transition = { duration: 0.9, ease: [0.32, 0.72, 0, 1] as const };

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
          initial={reduce ? false : { scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.32, 0.72, 0, 1] }}
          className="scene-backdrop"
        >
          <Image src={image} alt="" fill sizes="100vw" className="object-cover" priority />
        </motion.div>
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

export default function AdsHome() {
  const [openFaq, setOpenFaq] = useState(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <>
      <Scene id="hero" image="/images/cabin.jpg" className="items-end">
        <div className="flex min-h-[80dvh] w-full flex-col justify-end pb-20">
          <h1 className="display-headline max-w-4xl text-foreground">
            The attention is already there.
          </h1>
          <p className="body-copy mt-6 max-w-2xl text-foreground/80">
            Reach passengers inside Bengaluru cabs for 20-30 minutes of undivided attention. No cameras. No biometrics. Just GPS-verified impressions.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/apply" className="btn-magnetic btn-primary">
              <span>Reserve a zone</span>
              <span className="btn-icon"><ArrowRight className="h-3.5 w-3.5" /></span>
            </Link>
            <Link href="#medium" className="btn-magnetic btn-ghost">
              <span>See the film</span>
              <span className="btn-icon"><ArrowRight className="h-3.5 w-3.5" /></span>
            </Link>
          </div>
          <div className="scroll-cue mt-20">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Scroll</span>
            <div className="line" />
            <div className="dot" />
          </div>
        </div>
      </Scene>

      <Scene id="gap" className="bg-surface" overlay={false}>
        <div className="grid min-h-[80dvh] w-full items-center gap-14 lg:grid-cols-2">
          <div className="bezel order-2 lg:order-1">
            <div className="bezel-inner relative aspect-[4/3] w-full overflow-hidden lg:aspect-auto lg:h-[60dvh]">
              <Image src="/images/HERO.png" alt="Outdoor advertising is a guess" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              <div className="absolute inset-0" style={{ background: 'color-mix(in srgb, var(--color-background) 35%, transparent)' }} />
            </div>
          </div>
          <div className="order-1 max-w-xl lg:order-2">
            <h2 className="section-headline text-foreground">Outdoor advertising is stuck.</h2>
            <div className="mt-8 space-y-5">
              <p className="body-copy text-muted-foreground">Billboards are a guess. You pay for impressions you cannot measure.</p>
              <p className="body-copy text-muted-foreground">Digital feeds are a race to the bottom. Customers scroll past in half a second.</p>
              <p className="body-copy text-foreground/90">The passenger in a cab is different. The screen is right there. They are not scrolling. They are looking forward.</p>
            </div>
          </div>
        </div>
      </Scene>

      <Scene id="medium" image="/images/cabin.jpg" overlay>
        <div className="flex min-h-[80dvh] w-full flex-col items-center justify-center text-center">
          <h2 className="display-headline max-w-5xl text-foreground">The last undivided surface.</h2>
          <p className="body-copy mx-auto mt-6 max-w-2xl text-foreground/80">
            No swipe. No skip. No ad blocker. A screen in the passenger&apos;s direct line of sight for the whole ride.
          </p>
          <div className="mt-16 grid w-full max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map(([stat, label]) => (
              <div key={stat} className="bezel-card">
                <div className="bezel-card-inner p-5 text-center">
                  <p className="font-mono text-lg font-bold uppercase tracking-wide text-foreground">{stat}</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Scene>

      <Scene className="bg-background" overlay={false}>
        <div className="flex min-h-[80dvh] w-full flex-col justify-center">
          <h2 className="section-headline text-foreground">From brief to live in 48 hours.</h2>
          <div className="mt-12 max-w-4xl">
            {steps.map(([num, title, desc]) => (
              <div key={title} className="bezel-card mb-3">
                <div className="bezel-card-inner flex items-baseline gap-6 p-6">
                  <span className="font-mono text-4xl font-bold text-primary">{num}</span>
                  <div>
                    <h3 className="font-mono text-base font-bold uppercase tracking-wide text-foreground">{title}</h3>
                    <p className="body-copy mt-2 text-muted-foreground">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Scene>

      <Scene className="bg-surface" overlay={false}>
        <div className="flex min-h-[80dvh] w-full flex-col justify-center">
          <h2 className="section-headline text-foreground">Live across Bengaluru.</h2>
          <p className="body-copy mt-4 max-w-2xl text-muted-foreground">16 active zones across the city. More added every month.</p>
          <div className="mt-12 overflow-hidden border-y border-white/5 py-6">
            <div className="animate-marquee">
              {[...zones, ...zones].map((zone, i) => (
                <span key={`${zone}-${i}`} className="bezel-pill mx-3 font-mono text-xs font-bold uppercase tracking-wide text-foreground">
                  <MapPin className="h-3 w-3 text-primary" /> {zone}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">More zones coming soon: Malleshwaram, Rajajinagar, Yelahanka.</p>
        </div>
      </Scene>

      <Scene className="bg-background" overlay={false}>
        <div className="flex min-h-[80dvh] w-full flex-col justify-center">
          <h2 className="section-headline max-w-3xl text-foreground">Two founders, one mission.</h2>
          <p className="body-copy mt-4 max-w-2xl text-muted-foreground">A builder and an operator. Engineering depth paired with product and compliance.</p>
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <div className="bezel">
              <div className="bezel-inner p-8">
                <div className="flex items-start gap-5">
                  <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full font-mono text-3xl font-bold text-foreground" style={{ background: 'color-mix(in srgb, var(--color-foreground) 5%, transparent)', border: '1px solid color-mix(in srgb, var(--color-foreground) 10%, transparent)' }}>AS</span>
                  <div>
                    <h3 className="font-mono text-lg font-bold uppercase tracking-wide text-foreground">Aravind S</h3>
                    <p className="text-sm font-medium text-primary">Co-Founder & Engineering</p>
                    <p className="body-copy mt-3 text-sm text-muted-foreground">AI-native engineering leader. Scaled teams at Anthriq. Shipped compliance products at RADICALi. Builds honest systems.</p>
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
                    <p className="text-sm font-medium text-primary">Co-Founder & Product</p>
                    <p className="body-copy mt-3 text-sm text-muted-foreground">Product and compliance depth from Stripe, PwC, and Amazon. Keeps Korrido as principled as the product.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Scene>

      <Scene className="bg-background" overlay={false}>
        <div className="grid min-h-[80dvh] w-full items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <h2 className="display-headline text-foreground">Reserve a zone now.</h2>
            <p className="body-copy mt-6 text-foreground/80">First movers lock in priority placement and launch pricing. Start reaching customers inside cabs today.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/apply" className="btn-magnetic btn-primary">
                <span>Reserve a zone</span>
                <span className="btn-icon"><ArrowRight className="h-3.5 w-3.5" /></span>
              </Link>
              <Link href="/drive" className="btn-magnetic btn-ghost">
                <span>Drive with us</span>
                <span className="btn-icon"><ArrowRight className="h-3.5 w-3.5" /></span>
              </Link>
            </div>
          </div>
          <div className="bezel w-full max-w-lg">
            <div className="bezel-inner p-8">
              <h3 className="font-mono text-lg font-bold uppercase tracking-wide text-foreground">City expansion updates</h3>
              <p className="body-copy mt-2 text-sm text-muted-foreground">New cities every quarter. Early zone openings. No spam.</p>
              {subscribed ? (
                <div className="mt-6 flex items-center gap-2 rounded-2xl px-4 py-3" style={{ background: 'rgba(22, 163, 74, 0.12)' }}>
                  <Check className="h-5 w-5 text-emerald-400" /> <span className="text-sm font-medium text-emerald-300">You are on the list.</span>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }} className="mt-6 space-y-3">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className="input-elevated" required />
                  <button type="submit" className="btn-magnetic btn-primary w-full justify-center">Subscribe</button>
                </form>
              )}
              <div className="mt-8 border-t border-white/5 pt-6">
                <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-primary">Questions</p>
                <div className="space-y-4">
                  {faqs.map(([q, a], i) => (
                    <div key={q}>
                      <button type="button" className="flex w-full items-center gap-3 text-left" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                        <span className={`flex-1 text-sm font-semibold ${openFaq === i ? 'text-primary' : 'text-foreground'}`}>{q}</span>
                        <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-500 ${openFaq === i ? 'rotate-180' : ''}`} style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }} />
                      </button>
                      <div className={`grid transition-all duration-500 ${openFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`} style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}>
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
        </div>
      </Scene>
    </>
  );
}
