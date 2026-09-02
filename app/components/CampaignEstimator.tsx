'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { useMemo, useState } from 'react';
import { ArrowRight } from './Icons';

const goals = [
  ['Brand Awareness', 2, 'Two exposures per passenger builds recognition without fatigue.'],
  ['Brand Recall', 5, 'Repeated exposure builds strong recall for an established message.'],
  ['Product Launch', 3, 'Three exposures balance launch reach with useful repetition.'],
  ['Festival Offer/Discount Sale', 4, 'A higher frequency keeps a time-sensitive offer top of mind.'],
  ['Events', 3, 'Three views reinforce event details during the decision window.'],
  ['Store Opening', 3, 'Repeated local exposure builds awareness before opening day.'],
  ['Birthday', 1, 'A single broad exposure is ideal for a personal announcement.'],
  ['Political Campaign', 5, 'High-frequency exposure supports message recognition.'],
  ['Public Awareness', 4, 'Four exposures reinforce an important public message.'],
  ['Other', 2, 'A balanced two-exposure plan is a strong starting point.'],
] as const;
const zones = ['BTM Layout','Bangalore (Other)','Bannerghatta Road','Basavanagudi','Bellandur','Bellary Road & Airport Corridor','Bommanahalli','Devanahalli & Airport Area','Electronic City','HSR Layout','Hebbal','Indiranagar','JP Nagar','Jayanagar','KR Puram','Kammanahalli & HBR Layout','Kengeri & Mysore Road','Koramangala','MG Road & CBD','Malleswaram','Marathahalli','Nagarbhavi & RVCE Area','Old Airport Road & Domlur','RT Nagar & Kalyan Nagar','Rajajinagar','Sadashivanagar','Sarjapur Road','Thanisandra & Kogilu','Vidyaranyapura','Vijayanagar','Whitefield','Yelahanka','Yeshwanthpur & Tumkur Road'];
const money = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });

function StepTitle({ step, total }: { step: number; total: number }) {
  return (
    <div className="mb-8">
      <div className="h-1 w-full overflow-hidden rounded-full bg-surface-2">
        <motion.div className="h-full bg-primary" style={{ transformOrigin: 'left', transform: `scaleX(${step / total})` }} />
      </div>
    </div>
  );
}

export default function CampaignEstimator() {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState<(typeof goals)[number] | null>(null);
  const [adType, setAdType] = useState<'Image' | 'Video' | null>(null);
  const [coverage, setCoverage] = useState<'Entire Bangalore' | 'Priority Zones' | null>(null);
  const [selectedZones, setSelectedZones] = useState<string[]>([]);
  const [reach, setReach] = useState(30000);
  const reduce = useReducedMotion();
  const frequency = goal?.[1] ?? 2;

  const estimate = useMemo(() => {
    const plays = reach * frequency;
    const campaignValue = Math.round(plays * (adType === 'Video' ? .5625 : .45));
    const discountRate = reach >= 100000 ? .15 : reach >= 30000 ? .1 : 0;
    const benefit = Math.round(campaignValue * discountRate);
    const subtotal = campaignValue - benefit;
    const gst = Math.round(subtotal * .18);
    return { plays, campaignValue, discountRate, benefit, gst, final: subtotal + gst };
  }, [adType, frequency, reach]);

  const allowed = step === 1 ? !!goal : step === 2 ? !!adType : step === 3 ? coverage === 'Entire Bangalore' || selectedZones.length > 0 : true;
  const reset = () => { setStep(1); setGoal(null); setAdType(null); setCoverage(null); setSelectedZones([]); setReach(30000); };
  const toggleZone = (zone: string) => setSelectedZones((current) => current.includes(zone) ? current.filter((x) => x !== zone) : current.length < 4 ? [...current, zone] : current);

  return (
    <section className="relative min-h-screen bg-background px-4 py-32 sm:px-8" data-scene>
      <div className="mx-auto max-w-3xl">
        <motion.div
          layout
          initial={reduce ? false : { opacity: 0, y: 64, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          className="bezel"
        >
          <div className="bezel-inner p-6 md:p-8">
            <StepTitle step={step} total={5} />

            {step === 1 && (
              <div>
                <h1 className="section-headline text-foreground">What is your campaign goal?</h1>
                <p className="body-copy mt-3 text-muted-foreground">Pick the objective that matches what you are trying to do. We will calculate the right frequency for you.</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {goals.map((item) => (
                    <button
                      key={item[0]}
                      type="button"
                      onClick={() => setGoal(item)}
                      className={`bezel-card text-left transition-all duration-500 ${goal?.[0] === item[0] ? 'border-primary/40' : ''}`}
                      style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}
                    >
                      <div className={`bezel-card-inner p-4 ${goal?.[0] === item[0] ? 'bg-primary/8' : ''}`}>
                        <span className="font-mono text-sm font-bold uppercase tracking-wide text-foreground">{item[0]}</span>
                        <small className="mt-1 block font-sans text-xs font-normal normal-case tracking-normal text-muted-foreground">{item[1]}× views / passenger</small>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h1 className="section-headline text-foreground">Image or video ad?</h1>
                <p className="body-copy mt-3 text-muted-foreground">Video gets more attention. Image is more efficient.</p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {(['Image','Video'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setAdType(type)}
                      className={`bezel-card transition-all duration-500 ${adType === type ? 'border-primary/40' : ''}`}
                      style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}
                    >
                      <div className={`bezel-card-inner py-8 text-center ${adType === type ? 'bg-primary/8' : ''}`}>
                        <span className="font-mono text-2xl font-bold uppercase tracking-wide text-foreground">{type}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h1 className="section-headline text-foreground">Where should it run?</h1>
                <p className="body-copy mt-3 text-muted-foreground">Cover the whole city, or focus on your priority zones.</p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {(['Entire Bangalore','Priority Zones'] as const).map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => { setCoverage(c); if (c === 'Entire Bangalore') setSelectedZones([]); }}
                      className={`bezel-card text-left transition-all duration-500 ${coverage === c ? 'border-primary/40' : ''}`}
                      style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}
                    >
                      <div className={`bezel-card-inner p-5 ${coverage === c ? 'bg-primary/8' : ''}`}>
                        <span className="font-mono text-sm font-bold uppercase tracking-wide text-foreground">{c}</span>
                      </div>
                    </button>
                  ))}
                </div>
                {coverage === 'Priority Zones' && (
                  <div className="bezel-card mt-6">
                    <div className="bezel-card-inner p-4">
                      <p className="mb-3 text-sm text-muted-foreground">Pick up to 4 zones ({selectedZones.length} selected).</p>
                      <div className="flex max-h-56 flex-wrap gap-2 overflow-y-auto pr-1">
                        {zones.map((zone) => (
                          <button
                            key={zone}
                            type="button"
                            onClick={() => toggleZone(zone)}
                            className={`rounded-full border px-3 py-2 text-xs font-mono font-bold uppercase tracking-wide transition-all duration-500 active:scale-95 ${selectedZones.includes(zone) ? 'border-primary bg-primary/8 text-primary' : 'border-white/10 text-muted-foreground'}`}
                            style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}
                          >
                            {zone}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {step === 4 && (
              <div>
                <h1 className="section-headline text-foreground">How many passengers do you want to reach?</h1>
                <p className="body-copy mt-3 text-muted-foreground">Slide to set your target reach.</p>
                <input
                  className="mt-8 w-full accent-primary"
                  type="range"
                  min="15000"
                  max="200000"
                  step="5000"
                  value={reach}
                  onChange={(e) => setReach(Number(e.target.value))}
                />
                <div className="mt-6 text-center font-mono text-5xl font-bold text-primary">
                  {reach.toLocaleString('en-IN')}<span className="ml-2 text-sm font-normal text-muted-foreground">passengers</span>
                </div>
                <p className="mt-2 text-center text-xs text-muted-foreground">Starting from 15,000 passenger reach.</p>
                <button type="button" className="mt-6 w-full rounded-2xl p-3 font-mono text-xs font-bold uppercase tracking-wide text-primary transition-transform duration-500 active:scale-[0.98]" style={{ background: 'color-mix(in srgb, var(--color-foreground) 5%, transparent)', border: '1px solid color-mix(in srgb, var(--color-foreground) 10%, transparent)', transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}>
                  Need more than 2,00,000? Talk to enterprise →
                </button>
              </div>
            )}

            {step === 5 && goal && (
              <div>
                <h1 className="section-headline text-foreground">Your campaign estimate</h1>
                <div className="mt-8 grid gap-6 md:grid-cols-[1.1fr_.9fr]">
                  <div className="space-y-3 text-sm">
                    {[
                      ['Reach', `${reach.toLocaleString('en-IN')} passengers`],
                      ['Views per passenger', String(frequency)],
                      ['Estimated plays', estimate.plays.toLocaleString('en-IN')],
                      ['Target frequency', `${frequency}×`],
                      ['Guaranteed minimum plays', estimate.plays.toLocaleString('en-IN')],
                      ['Estimated completion', `${Math.max(10, Math.round(estimate.plays / 1950))}-${Math.max(15, Math.round(estimate.plays / 1450))} days`],
                    ].map(([label, value]) => <Result key={label} label={label} value={value} />)}
                  </div>
                  <div className="bezel-card">
                    <div className="bezel-card-inner p-5 text-sm">
                      <Result label="Campaign value" value={money.format(estimate.campaignValue)} />
                      <Result label="Volume Benefit" value={`−${money.format(estimate.benefit)} (${estimate.discountRate * 100}%)`} />
                      <Result label="GST (18%)" value={money.format(estimate.gst)} />
                      <div className="mt-4 border-t border-white/5 pt-4">
                        <Result label="Final payable" value={money.format(estimate.final)} strong />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bezel-card mt-5 border-primary/20" style={{ borderColor: 'color-mix(in srgb, var(--color-primary) 20%, transparent)' }}>
                  <div className="bezel-card-inner p-5" style={{ background: 'color-mix(in srgb, var(--color-primary) 6%, transparent)' }}>
                    <h3 className="font-mono text-sm font-bold uppercase tracking-wide text-foreground">Why Korrido recommends this</h3>
                    <p className="body-copy mt-1 text-xs text-muted-foreground">{goal[2]}</p>
                  </div>
                </div>
                <Link href="/apply" className="btn-magnetic btn-primary mt-5 block w-full text-center">
                  <span>Reserve</span>
                  <span className="btn-icon"><ArrowRight className="h-3.5 w-3.5" /></span>
                </Link>
              </div>
            )}

            <div className="mt-8 flex justify-between">
              <button type="button" disabled={step === 1} onClick={() => setStep(step - 1)} className="font-mono text-sm text-muted-foreground uppercase tracking-wide transition-all duration-500 active:scale-95 disabled:active:scale-100 disabled:opacity-40" style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}>← Back</button>
              {step < 4 && <button type="button" disabled={!allowed} onClick={() => setStep(step + 1)} className="btn-magnetic btn-primary disabled:!bg-surface-2 disabled:!text-muted-foreground disabled:opacity-70" style={{ padding: '0.6rem 1.25rem' }}>Next →</button>}
              {step === 4 && <button type="button" onClick={() => setStep(5)} className="btn-magnetic btn-primary" style={{ padding: '0.6rem 1.25rem' }}>Get my estimate</button>}
              {step === 5 && <button type="button" onClick={reset} className="font-mono text-sm font-bold uppercase tracking-wide text-primary transition-all duration-500 active:scale-95" style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}>Start over</button>}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Result({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className={`${strong ? 'font-mono text-lg font-bold text-primary' : 'font-semibold text-foreground'} text-right`}>{value}</dd>
    </div>
  );
}
