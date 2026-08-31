'use client';

import { useState } from 'react';

const testimonials = [
  {
    quote: 'We went live in 3 days. The dispatch engine just worked. Our drivers adapted faster than we expected.',
    name: 'Vikram Shetty',
    role: 'Founder, CityLink Cabs',
    city: 'Pune',
  },
  {
    quote: 'The a-la-carte model meant we only paid for what we needed. When we were ready for the in-cab screens, we just turned it on.',
    name: 'Priya Raghunathan',
    role: 'Operations Head, QuickRide',
    city: 'Bengaluru',
  },
  {
    quote: 'We had been stitching together four different platforms. Korrido cut our tech overhead by 60% in the first month.',
    name: 'Arjun Das',
    role: 'CTO, Mumbai Metro Cabs',
    city: 'Mumbai',
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

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? '#ffffff' : '#f9f9f9',
        borderRadius: '0.75rem',
        padding: '36px 32px',
        boxShadow: '0 20px 40px rgba(26,28,28,0.06)',
        transition: 'background 300ms cubic-bezier(0.23,1,0.32,1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'default',
      }}
    >
      <div>
        <div
          style={{
            width: hov ? 40 : 28,
            height: 3,
            background: '#ffd1dc',
            borderRadius: 2,
            marginBottom: 20,
            transition: 'width 300ms cubic-bezier(0.23,1,0.32,1)',
          }}
        />
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: '1.0625rem',
            letterSpacing: '-0.01em',
            color: '#1a1c1c',
            lineHeight: 1.55,
            marginBottom: 28,
          }}
        >
          "{t.quote}"
        </p>
      </div>
      <div>
        <div
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 600,
            fontSize: '0.875rem',
            color: '#1a1c1c',
          }}
        >
          {t.name}
        </div>
        <div
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: '0.75rem',
            color: 'rgba(26,28,28,0.42)',
            marginTop: 3,
          }}
        >
          {t.role} · {t.city}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section style={{ background: '#ffffff', padding: '120px 5vw' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Label>Operators love it</Label>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(2rem,4vw,3rem)',
            letterSpacing: '-0.03em',
            color: '#1a1c1c',
            lineHeight: 1.08,
            marginBottom: 64,
          }}
        >
          Real fleets.<br />Real results.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
