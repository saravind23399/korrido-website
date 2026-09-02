'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, EyeOff, MapPin, Radio, Zap } from './Icons';

const transition = { duration: 0.9, ease: [0.32, 0.72, 0, 1] as const };
const stagger = { duration: 0.7, ease: [0.32, 0.72, 0, 1] as const };

function Scene({ children, image, overlay = true, id, className = '', parallax = false }: { children: React.ReactNode; image?: string; overlay?: boolean; id?: string; className?: string; parallax?: boolean }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], parallax && !reduce ? ['-8%', '8%'] : ['0%', '0%']);

  return (
    <section ref={ref} id={id} className={`scene ${className}`} data-scene>
      {image && (
        <motion.div
          initial={reduce ? false : { scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.32, 0.72, 0, 1] }}
          className="scene-backdrop"
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', y }}
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

export function HowItWorksPage() {
  const reduce = useReducedMotion();
  const steps = [
    ['01', 'Share your brief', 'Tell us your zones, audience, and budget. We reply within 24 hours with a campaign plan.'],
    ['02', 'We format your creative', 'Send us your artwork. Our team formats it for HD in-cab screens. No design work on your end.'],
    ['03', 'Your ad goes live', 'We push your campaign wirelessly to screens inside cabs across your chosen zones. No installation. No crew.'],
    ['04', 'Track on your dashboard', 'Log in to see live impressions, zone reach, and uptime. Every number is real. No vanity metrics.'],
  ] as const;

  const dashboardFeatures = [
    [Radio, 'Live impression count', 'See plays as they happen, not a week later.'],
    [MapPin, 'Zone reach map', 'Which zones delivered, how many plays, what time of day.'],
    [EyeOff, 'No cameras, no biometrics', 'Impressions tracked by GPS movement. That is all we collect.'],
    [Zap, 'Swap creative mid-campaign', 'Change your ad, pause, or extend without a phone call.'],
  ] as const;

  return (
    <>
      <Scene image="/images/medium-screen.jpg" className="items-end" parallax>
        <div className="flex min-h-[80dvh] w-full flex-col justify-end pb-20">
          <h1 className="display-headline max-w-5xl text-foreground">How Korrido works.</h1>
          <p className="body-copy mt-6 max-w-2xl text-foreground/80">Your brand on HD screens inside cabs across Bengaluru. GPS-verified impressions. Live in 48 hours. No cameras, no biometrics, no installation crews.</p>
        </div>
      </Scene>

      <Scene className="bg-background" overlay={false}>
        <div className="grid min-h-[80dvh] w-full items-center gap-14 lg:grid-cols-2">
          <div className="bezel order-2 lg:order-1">
            <div className="bezel-inner relative aspect-[4/3] w-full overflow-hidden lg:aspect-auto lg:h-[55dvh]">
              <Image src="/images/medium-screen.jpg" alt="In-cab HD screen showing an advertisement" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              <div className="absolute inset-0" style={{ background: 'color-mix(in srgb, var(--color-background) 35%, transparent)' }} />
            </div>
          </div>
          <div className="order-1 max-w-xl lg:order-2">
            <h2 className="section-headline text-foreground">A screen in the passenger&apos;s line of sight.</h2>
            <div className="mt-8 space-y-5">
              <p className="body-copy text-muted-foreground">The passenger sits in the back of a cab for 20 to 30 minutes. The screen is mounted on the headrest, directly in their field of view. They are not scrolling. They are not skipping. They are looking forward.</p>
              <p className="body-copy text-muted-foreground">No swipe. No skip button. No ad blocker. The screen runs your creative on loop for the full ride.</p>
              <p className="body-copy text-foreground/90">That is 20 to 30 minutes of undivided attention per passenger. No other advertising surface gives you that.</p>
            </div>
          </div>
        </div>
      </Scene>

      <Scene className="bg-surface" overlay={false}>
        <div className="flex min-h-[80dvh] w-full flex-col justify-center">
          <h2 className="section-headline text-foreground">From brief to live in 48 hours.</h2>
          <div className="mt-12 max-w-4xl">
            {steps.map(([num, title, desc], i) => (
              <motion.div
                key={title}
                initial={reduce ? false : { opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ ...stagger, delay: i * 0.12 }}
                className="bezel-card mb-3"
              >
                <div className="bezel-card-inner flex items-baseline gap-6 p-6">
                  <span className="font-mono text-4xl font-bold text-primary">{num}</span>
                  <div>
                    <h3 className="font-mono text-base font-bold uppercase tracking-wide text-foreground">{title}</h3>
                    <p className="body-copy mt-2 text-muted-foreground">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Scene>

      <Scene image="/images/bengaluru-night.jpg" overlay parallax>
        <div className="flex min-h-[80dvh] w-full flex-col items-center justify-center text-center">
          <h2 className="display-headline max-w-5xl text-foreground">See every impression as it happens.</h2>
          <p className="body-copy mx-auto mt-6 max-w-2xl text-foreground/80">Log in to your dashboard and watch your campaign run in real time. Plays, zone reach, uptime. Every number comes from GPS data. No estimates. No extrapolation.</p>
        </div>
      </Scene>

      <Scene className="bg-background" overlay={false}>
        <div className="flex min-h-[80dvh] w-full flex-col justify-center">
          <h2 className="section-headline text-foreground">What you get on the dashboard.</h2>
          <div className="mt-10 grid max-w-4xl gap-4">
            {dashboardFeatures.map(([Icon, title, desc], i) => (
              <motion.div
                key={title}
                initial={reduce ? false : { opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: i * 0.08 }}
                className="bezel-card"
              >
                <div className="bezel-card-inner flex items-start gap-4 p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-primary" style={{ background: 'color-mix(in srgb, var(--color-foreground) 4%, transparent)', border: '1px solid color-mix(in srgb, var(--color-foreground) 8%, transparent)' }}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-mono text-sm font-bold uppercase tracking-wide text-foreground">{title}</h3>
                    <p className="body-copy mt-1 text-sm text-muted-foreground">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Scene>

      <Scene image="/images/pledge-gps.jpg" overlay parallax>
        <div className="flex min-h-[80dvh] w-full flex-col items-center justify-center text-center">
          <h2 className="display-headline max-w-5xl text-foreground">How we measure.</h2>
          <p className="body-copy mx-auto mt-6 max-w-2xl text-foreground/80">Every impression is counted by GPS movement and zone crossing. When a cab enters your target zone with your ad playing, that is one impression. No cameras. No facial recognition. No biometric data. Ever.</p>
          <Link href="/estimate" className="btn-magnetic btn-primary mt-10">
            <span>Estimate your campaign</span>
            <span className="btn-icon"><ArrowRight className="h-3.5 w-3.5" /></span>
          </Link>
        </div>
      </Scene>
    </>
  );
}

export function AboutPage() {
  const reduce = useReducedMotion();
  const pledges = [
    ['Zero passenger tracking', 'We measure impressions through GPS movement and zone data. No cameras, no facial recognition, no biometric data. Ever.'],
    ['Transparent reporting', 'Every advertiser sees the same data we see: impressions, uptime, zone reach. No vanity metrics. No inflation.'],
    ['Fair driver economics', 'Drivers earn a clear share of every campaign on their vehicle. Paid weekly with a transparent statement.'],
    ['Locally rooted', 'We hire locally, partner with Indian cab fleets, and prioritize local advertisers. The cab in front of you is run by a real person from your city.'],
  ] as const;

  const values = [
    ['We act', 'Emotional'],
    ['We serve', 'People'],
    ['Being', 'Ethical & Humble'],
    ['Think', 'Logical'],
    ['Solve', 'Problems'],
    ['Working', 'Smartly'],
  ] as const;

  const milestones = [
    ['48 hours', 'From brief to live. No printing. No installation crews.'],
    ['16+ zones', 'Active across Bengaluru, from Koramangala to Whitefield.'],
    ['100+ cabs', 'Live on the ground in Karnataka. Still counting.'],
    ['Zero cameras', 'Impressions tracked by GPS. No biometrics. Ever.'],
  ] as const;

  return (
    <>
      <Scene image="/images/hero-cabin.jpg" className="items-end" parallax>
        <div className="flex min-h-[80dvh] w-full flex-col justify-end pb-20">
          <h1 className="display-headline max-w-5xl text-foreground">About Korrido.</h1>
          <p className="body-copy mt-6 max-w-2xl text-foreground/80">We turn cab rides into measurable advertising space. HD screens inside city cabs. GPS-verified impressions. No cameras. Live in 48 hours.</p>
        </div>
      </Scene>

      <Scene className="bg-background" overlay={false}>
        <div className="grid min-h-[80dvh] w-full items-center gap-14 lg:grid-cols-2">
          <div className="bezel order-2 lg:order-1">
            <div className="bezel-inner relative aspect-[4/3] w-full overflow-hidden lg:aspect-auto lg:h-[55dvh]">
              <Image src="/images/gap-contrast.jpg" alt="Bengaluru traffic with billboards vs a single cab" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              <div className="absolute inset-0" style={{ background: 'color-mix(in srgb, var(--color-background) 35%, transparent)' }} />
            </div>
          </div>
          <div className="order-1 max-w-xl lg:order-2">
            <h2 className="section-headline text-foreground">Outdoor is a guess. Digital is a scroll.</h2>
            <div className="mt-8 space-y-5">
              <p className="body-copy text-muted-foreground">Billboards give you reach but no measurement. You pay for impressions you cannot count.</p>
              <p className="body-copy text-muted-foreground">Digital feeds give you targeting but people scroll past in half a second. You pay for attention you do not get.</p>
              <p className="body-copy text-foreground/90">The passenger in a cab is different. They sit still for 20 to 30 minutes. The screen is right there. They are not scrolling. They are looking forward.</p>
            </div>
          </div>
        </div>
      </Scene>

      <Scene image="/images/bengaluru-night.jpg" overlay parallax>
        <div className="flex min-h-[80dvh] w-full flex-col items-center justify-center text-center">
          <h2 className="display-headline max-w-5xl text-foreground">The audience is already sitting in a cab.</h2>
          <p className="body-copy mx-auto mt-6 max-w-2xl text-foreground/80">Thousands of commuters sit in Bengaluru cabs every day for 20 to 30 uninterrupted minutes. The screen in their line of sight is the most valuable attention surface in the vehicle. It was wasted. We built Korrido to use it.</p>
        </div>
      </Scene>

      <Scene image="/images/pledge-gps.jpg" overlay parallax>
        <div className="flex min-h-[80dvh] w-full flex-col justify-end pb-20">
          <h2 className="display-headline max-w-5xl text-foreground">A line we refuse to cross.</h2>
          <p className="body-copy mt-6 max-w-2xl text-foreground/80">The whole system runs without a single camera, audio sensor, or biometric. That is not a feature. It is a pledge.</p>
        </div>
      </Scene>

      <Scene className="bg-background" overlay={false}>
        <div className="flex min-h-[80dvh] w-full flex-col justify-center">
          <h2 className="section-headline text-foreground">Our pledge.</h2>
          <div className="mt-10 max-w-4xl space-y-4">
            {pledges.map(([title, desc], i) => (
              <motion.div
                key={title}
                initial={reduce ? false : { opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ ...stagger, delay: i * 0.1 }}
                className="bezel-card"
              >
                <div className="bezel-card-inner p-6">
                  <h3 className="font-mono text-base font-bold uppercase tracking-wide text-foreground">{title}</h3>
                  <p className="body-copy mt-2 text-muted-foreground">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Scene>

      <Scene className="bg-surface" overlay={false}>
        <div className="flex min-h-[80dvh] w-full flex-col justify-center">
          <h2 className="section-headline text-foreground">Two founders, one mission.</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {[
              ['AS', 'Aravind S', 'Co-Founder, Product & Engineering', 'AI-native engineering leader. Scaled software teams at Anthriq. Shipped AI compliance products at RADICALi. Owns product strategy and the full engineering stack at Korrido.'],
              ['VP', 'Vishal Prathush R', 'Co-Founder, Product & Operations', 'Product manager with fintech and compliance depth from Stripe, PwC, and Amazon. Owns advertiser experience, driver operations, and the systems that keep the platform honest.'],
            ].map(([initials, name, role, bio], i) => (
              <motion.div
                key={name}
                initial={reduce ? false : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ ...stagger, delay: i * 0.15 }}
                className="bezel"
              >
                <div className="bezel-inner p-8">
                  <div className="flex items-start gap-5">
                    <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full font-mono text-3xl font-bold text-foreground" style={{ background: 'color-mix(in srgb, var(--color-foreground) 5%, transparent)', border: '1px solid color-mix(in srgb, var(--color-foreground) 10%, transparent)' }}>{initials}</span>
                    <div>
                      <h3 className="font-mono text-lg font-bold uppercase tracking-wide text-foreground">{name}</h3>
                      <p className="text-sm font-medium text-primary">{role}</p>
                      <p className="body-copy mt-3 text-sm text-muted-foreground">{bio}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Scene>

      <Scene className="bg-background" overlay={false}>
        <div className="flex min-h-[80dvh] w-full flex-col justify-center">
          <h2 className="section-headline text-foreground">What keeps us on track.</h2>
          <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            {values.map(([a, b], i) => (
              <motion.div
                key={a}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ ...stagger, delay: i * 0.06 }}
                className="bezel-card"
              >
                <div className="bezel-card-inner flex items-baseline gap-4 p-5">
                  <span className="font-mono text-2xl font-bold text-foreground">{a}</span>
                  <span className="font-mono text-sm font-bold uppercase tracking-wide text-primary">{b}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Scene>

      <Scene className="bg-surface" overlay={false}>
        <div className="flex min-h-[80dvh] w-full flex-col justify-center">
          <h2 className="section-headline text-foreground">What we have built so far.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map(([stat, desc], i) => (
              <motion.div
                key={stat}
                initial={reduce ? false : { opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ ...stagger, delay: i * 0.08 }}
                className="bezel-card"
              >
                <div className="bezel-card-inner p-5">
                  <p className="font-mono text-xl font-bold uppercase tracking-wide text-foreground">{stat}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <Link href="/apply" className="btn-magnetic btn-primary mt-12 w-fit">
            <span>Reserve a zone</span>
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
