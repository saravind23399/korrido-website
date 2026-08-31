'use client';

import { useState } from 'react';

const steps = [
  {
    n: '01',
    title: 'Choose your modules',
    desc: "Start with core (Dispatch + Apps) or go full-stack. Add In-Cab modules when you're ready. No lock-in.",
  },
  {
    n: '02',
    title: 'Onboard your fleet',
    desc: 'Our team configures your branded apps, dispatch settings, and driver onboarding in under 48 hours.',
  },
  {
    n: '03',
    title: 'Go live and grow',
    desc: 'One dashboard. One invoice. Scale vehicles month by month with a flat per-vehicle rate. No surprises.',
  },
];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 500,
        fontSize: '0.6875rem',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: '#ffd1dc',
        marginBottom: 20,
      }}
    >
      {children}
    </div>
  );
}

function StepCard({ step }: { step: typeof steps[0] }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? '#ffffff' : '#f9f9f9',
        borderRadius: '0.75rem',
        padding: '40px 32px',
        transition: 'background 300ms cubic-bezier(0.23,1,0.32,1)',
        boxShadow: '0 20px 40px rgba(26,28,28,0.06)',
        cursor: 'default',
      }}
    >
      <div
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: '3rem',
          letterSpacing: '-0.04em',
          color: 'rgba(26,28,28,0.1)',
          lineHeight: 1,
          marginBottom: 32,
          transition: 'color 300ms cubic-bezier(0.23,1,0.32,1)',
        }}
        // Slightly brighten step number on hover
        style={{ ...{ color: hov ? 'rgba(26,28,28,0.2)' : 'rgba(26,28,28,0.1)' } }}
      >
        {step.n}
      </div>
      <div
        style={{
          width: hov ? 48 : 32,
          height: 2,
          background: '#ffd1dc',
          borderRadius: 2,
          marginBottom: 20,
          transition: 'width 300ms cubic-bezier(0.23,1,0.32,1)',
        }}
      />
      <div
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: '1.125rem',
          letterSpacing: '-0.02em',
          color: '#1a1c1c',
          marginBottom: 14,
        }}
      >
        {step.title}
      </div>
      <div
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: '0.875rem',
          color: 'rgba(26,28,28,0.55)',
          lineHeight: 1.7,
        }}
      >
        {step.desc}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section style={{ background: '#ffffff', padding: '120px 5vw' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Label>How it works</Label>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(2rem,4vw,3rem)',
            letterSpacing: '-0.03em',
            color: '#1a1c1c',
            lineHeight: 1.08,
            marginBottom: 72,
          }}
        >
          From sign-up to<br />live in one day.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2 }}>
          {steps.map((s, i) => (
            <StepCard key={i} step={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
