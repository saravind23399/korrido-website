'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { ArrowRight, Banknote, Check, Edit, EyeOff, MapPin, Radio, ShieldCheck, Upload, Wrench, Zap } from './Icons';

const input = 'input-elevated';

function Field({ label, required, hint, children }: { label: string; required?: boolean; hint?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center justify-between font-mono text-xs font-bold uppercase tracking-widest text-foreground">
        <span>{label}{required && <b className="text-destructive"> *</b>}</span>
        {hint && <small className="font-sans font-normal normal-case tracking-normal text-muted-foreground">{hint}</small>}
      </span>
      {children}
    </label>
  );
}

function Success({ driver }: { driver?: boolean }) {
  return (
    <div className="grid min-h-[560px] place-items-center rounded-2xl p-10 text-center" style={{ background: 'color-mix(in srgb, var(--color-primary) 8%, transparent)', border: '1px solid color-mix(in srgb, var(--color-primary) 20%, transparent)' }}>
      <div>
        <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-7 w-7" />
        </div>
        <h2 className="font-mono text-2xl font-bold uppercase tracking-wide text-foreground">Application received</h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          {driver ? 'Thanks for applying to drive with Korrido. Our team will call you within 48 hours.' : 'Thanks for sharing your campaign. Our team will contact you to discuss your advertising plan.'}
        </p>
      </div>
    </div>
  );
}

export function AdvertiserApplication() {
  const [done, setDone] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); if (event.currentTarget.reportValidity()) setDone(true); };
  const features = [
    [Upload, 'Upload image/video', 'JPG, PNG, MP4 up to 50MB.'],
    [Zap, 'Launch instantly', 'Approved ads go live within minutes.'],
    [Edit, 'Edit anytime', 'Swap creative, pause, or extend mid-campaign.'],
    [Radio, 'Real-time control', 'Live impression count, scan rate, zone reach.'],
    [MapPin, 'Live device & vehicle tracking', 'See every active screen and cab on a live map.'],
  ] as const;

  return (
    <>
      <section className="scene items-end bg-surface" data-scene>
        <div className="scene-panel">
          <div className="flex min-h-[80dvh] w-full flex-col justify-end pb-20">
            <h1 className="display-headline max-w-5xl text-foreground">Share your details.</h1>
            <p className="body-copy mt-6 max-w-2xl text-foreground/80">Limited slots per zone. Share your budget and timeline. Our team will call you to plan the campaign and lock in priority placement.</p>
          </div>
        </div>
      </section>

      <section className="scene bg-background" data-scene>
        <div className="scene-panel">
          <div className="flex min-h-[80dvh] w-full flex-col justify-center">
            <h2 className="section-headline text-foreground">Everything you need to run a campaign.</h2>
            <div className="mt-10 grid max-w-4xl gap-4">
              {features.map(([Icon, title, desc]) => (
                <div key={title} className="bezel-card">
                  <div className="bezel-card-inner flex items-start gap-4 p-5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-primary" style={{ background: 'color-mix(in srgb, var(--color-foreground) 4%, transparent)', border: '1px solid color-mix(in srgb, var(--color-foreground) 8%, transparent)' }}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-mono text-sm font-bold uppercase tracking-wide text-foreground">{title}</h3>
                      <p className="body-copy mt-1 text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="scene bg-surface" data-scene>
        <div className="scene-panel">
          <div className="flex min-h-[80dvh] w-full flex-col justify-center">
            <h2 className="section-headline text-foreground">From brief to live in four steps.</h2>
            <div className="mt-10 max-w-3xl space-y-3">
              {['You share your details, budget, and timeline.', 'We email you within the hour to verify GSTIN and business.', 'We create your account and reserve your slot with priority placement.', 'Your ad goes live in cabs. You see live impressions on the dashboard.'].map((x, i) => (
                <div key={x} className="bezel-card">
                  <div className="bezel-card-inner flex items-baseline gap-4 p-5" style={{ borderLeft: i === 0 ? '2px solid var(--color-primary)' : undefined }}>
                    <b className="font-mono text-2xl font-bold text-primary">{i + 1}</b>
                    <span className="body-copy text-sm text-muted-foreground">{x}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 flex items-center gap-2 text-xs text-muted-foreground"><ShieldCheck className="h-4 w-4 text-primary" /> GST-verified businesses preferred. Email confirmation within 1 hour.</p>
          </div>
        </div>
      </section>

      <section className="scene bg-background" data-scene>
        <div className="scene-panel">
          <div className="grid min-h-[80dvh] w-full items-center gap-14 lg:grid-cols-2">
            <div className="max-w-xl">
              <h2 className="section-headline text-foreground">Apply to advertise.</h2>
              <p className="body-copy mt-4 text-foreground/80">Takes two minutes. Our team will call you within 24 hours.</p>
            </div>
            <div className="bezel w-full max-w-lg">
              <div className="bezel-inner p-7">
                {done ? <Success /> : (
                  <form onSubmit={submit} className="space-y-4">
                    <Field label="Your name" required><input className={input} required placeholder="Priya Sharma" /></Field>
                    <Field label="Company name" required><input className={input} required placeholder="Transit Coffee Pvt Ltd" /></Field>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <Field label="Email" required><input type="email" className={input} required placeholder="priya@..." /></Field>
                      <Field label="Phone" required><input type="tel" className={input} required placeholder="+91 98XXX XXXXX" /></Field>
                    </div>
                    <Field label="GSTIN" hint="Optional but speeds up verification"><input className={input} placeholder="29ABCDE1234F1Z5" /></Field>
                    <Field label="What would you like to advertise?" required>
                      <select className={input} required defaultValue="">
                        <option value="" disabled>Pick your business type...</option>
                        {['Hotel','Restaurant','Cafe / Bakery','Salon & Spa','Gym & Fitness','Clinic / Hospital','School / Coaching','Showroom / Dealership','Food & Beverage','Retail & E-commerce','Real Estate','Technology / SaaS','Healthcare & Wellness','Education / EdTech','Finance & Insurance','Travel & Hospitality','Automotive','Entertainment & Events','Local Services','Other'].map(x => <option key={x}>{x}</option>)}
                      </select>
                    </Field>
                    <Field label="Monthly advertising budget" required>
                      <select className={input} required defaultValue="">
                        <option value="" disabled>Pick a budget...</option>
                        <option>₹9,500 - ₹12,000</option>
                        <option>₹12,000 - ₹15,500</option>
                        <option>₹15,500+</option>
                        <option>Not sure yet</option>
                      </select>
                    </Field>
                    <Field label="When would you like to start your campaign?" required>
                      <select className={input} required defaultValue="">
                        <option value="" disabled>Pick a timeline...</option>
                        <option>Immediately</option>
                        <option>Within 7 days</option>
                        <option>Just exploring options</option>
                      </select>
                    </Field>
                    <button className="btn-magnetic btn-primary w-full justify-center" type="submit">
                      <span>Submit</span>
                      <span className="btn-icon"><ArrowRight className="h-3.5 w-3.5" /></span>
                    </button>
                    <p className="text-center text-[11px] text-muted-foreground">By submitting you agree to our <Link className="text-primary underline" href="/terms">terms</Link> and <Link className="text-primary underline" href="/privacy">privacy policy</Link>.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function DriverApplication() {
  const [done, setDone] = useState(false);
  const [vehicle, setVehicle] = useState('2025');
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); if (event.currentTarget.reportValidity()) setDone(true); };
  const perks = [
    [Banknote, 'Steady monthly payouts', 'Direct bank transfer at the end of every month.'],
    [EyeOff, 'Zero passenger tracking', 'No cameras, no audio, no biometrics.'],
    [Wrench, 'No extra work', 'We handle the screen, content, and maintenance.'],
    [MapPin, 'Local-first', 'Pick the zones you usually drive.'],
  ] as const;

  return (
    <>
      <section className="scene items-end bg-surface" data-scene>
        <div className="scene-panel">
          <div className="flex min-h-[80dvh] w-full flex-col justify-end pb-20">
            <h1 className="display-headline max-w-5xl text-foreground">Earn extra every kilometre.</h1>
            <p className="body-copy mt-6 max-w-2xl text-foreground/80">Host a Korrido screen in your cab. Earn passive monthly income on top of your fares. No extra effort. Just keep driving.</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {perks.map(([Icon, title, desc]) => (
                <div key={title} className="bezel-card">
                  <div className="bezel-card-inner p-5">
                    <span className="grid h-9 w-9 place-items-center rounded-full text-primary" style={{ background: 'color-mix(in srgb, var(--color-foreground) 4%, transparent)', border: '1px solid color-mix(in srgb, var(--color-foreground) 8%, transparent)' }}>
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="mt-4 font-mono text-sm font-bold uppercase tracking-wide text-foreground">{title}</h3>
                    <p className="body-copy mt-1 text-sm text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="scene bg-background" data-scene>
        <div className="scene-panel">
          <div className="grid min-h-[80dvh] w-full items-center gap-14 lg:grid-cols-2">
            <div className="max-w-xl">
              <h2 className="section-headline text-foreground">Apply to drive.</h2>
              <p className="body-copy mt-4 text-foreground/80">Takes 2 minutes. We will call you within 48 hours.</p>
            </div>
            <div className="bezel w-full max-w-lg">
              <div className="bezel-inner p-7">
                {done ? <Success driver /> : (
                  <form onSubmit={submit} className="space-y-5">
                    <h2 className="font-mono text-2xl font-bold uppercase tracking-wide text-foreground">Apply to drive</h2>
                    <p className="body-copy text-sm text-muted-foreground">Takes 2 minutes. We will call you within 48 hours.</p>

                    <h3 className="pt-1 font-mono text-sm font-bold uppercase tracking-widest text-foreground">About you</h3>
                    <Field label="Full name" required><input className={input} required placeholder="Ramesh Kumar" /></Field>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <Field label="Phone" required><input className={input} required type="tel" placeholder="+91 98765 43210" /></Field>
                      <Field label="Email" hint="Optional, for receipts"><input className={input} type="email" placeholder="ramesh@example.com" /></Field>
                      <Field label="City" required><input className={input} required placeholder="Bengaluru" /></Field>
                      <Field label="Pincode" hint="Optional"><input className={input} inputMode="numeric" placeholder="560001" /></Field>
                    </div>

                    <h3 className="pt-2 font-mono text-sm font-bold uppercase tracking-widest text-foreground">Your vehicle</h3>
                    <Field label="Vehicle type" required>
                      <div className="grid grid-cols-2 gap-2">
                        {['2025','2026'].map((value) => (
                          <button
                            type="button"
                            key={value}
                            onClick={() => setVehicle(value)}
                            className={`rounded-2xl border px-3 py-3 text-sm font-mono font-bold uppercase tracking-wide transition-colors duration-500 ${vehicle === value ? 'border-primary text-primary' : 'border-white/10 text-foreground'}`}
                            style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}
                          >
                            Swift Dzire {value}
                          </button>
                        ))}
                      </div>
                    </Field>
                    <Field label="Registration number" hint="As on RC"><input className={input} placeholder="KA 01 AB 1234" /></Field>

                    <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-foreground">Driving license</h3>
                    <p className="body-copy text-xs text-muted-foreground">Optional now. We will need it before approval.</p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <Field label="License number"><input className={input} placeholder="KA0120220012345" /></Field>
                      <Field label="License expiry"><input className={input} type="date" /></Field>
                    </div>

                    <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-foreground">Driving schedule</h3>
                    <p className="body-copy text-xs text-muted-foreground">Helps us match you with the right zones.</p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <Field label="Hours per day" hint="Average"><input className={input} type="number" min="1" max="24" placeholder="8" /></Field>
                      <Field label="Days per week" hint="Average"><input className={input} type="number" min="1" max="7" placeholder="6" /></Field>
                    </div>

                    <Field label="Why do you want to join Korrido?" hint="Optional"><textarea className={`${input} min-h-24 resize-y`} style={{ borderRadius: '1.75rem' }} placeholder="Tell us about your routes, experience, anything we should know." /></Field>
                    <button className="btn-magnetic btn-primary w-full justify-center" type="submit">
                      <span>Submit application</span>
                      <span className="btn-icon"><ArrowRight className="h-3.5 w-3.5" /></span>
                    </button>
                    <p className="text-center text-[11px] text-muted-foreground">By submitting you agree to our <Link className="text-primary underline" href="/terms">Terms</Link> and <Link className="text-primary underline" href="/privacy">Privacy Policy</Link>.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
