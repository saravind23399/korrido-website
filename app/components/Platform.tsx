'use client';

import { useState } from 'react';

const modules = [
  {
    name: 'Dispatch Engine',
    desc: 'Real-time intelligent routing. Live traffic, demand heatmaps, and auto-assignment. Zero manual intervention.',
    tag: 'Core',
    icon: '⬡',
  },
  {
    name: 'Fleet Management',
    desc: 'Full vehicle tracking, maintenance schedules, compliance docs, and utilisation analytics in one dashboard.',
    tag: 'Core',
    icon: '◫',
  },
  {
    name: 'Passenger App',
    desc: 'Branded iOS & Android app. Live ETA, in-app payments, trip history, ratings. Ready to go live in 48 hours.',
    tag: 'Core',
    icon: '◯',
  },
  {
    name: 'Driver App',
    desc: 'Offline-capable. Earnings dashboard, navigation, documents, and live support — built for Indian network conditions.',
    tag: 'Core',
    icon: '△',
  },
  {
    name: 'In-Cab Entertainment',
    desc: 'Curated regional content, brand integrations, and local language support. A new revenue stream inside every ride.',
    tag: 'Add-on',
    icon: '◈',
  },
  {
    name: 'In-Cab Digital',
    desc: 'Screens, QR payments, UPI, and brand activations. Turn every vehicle into a premium, monetised touchpoint.',
    tag: 'Add-on',
    icon: '◇',
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

function ModuleCard({ mod }: { mod: typeof modules[0] }) {
  const [hov, setHov] = useState(false);
  const isAddon = mod.tag === 'Add-on';
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? (isAddon ? '#fff5f7' : '#f9f9f9') : '#ffffff',
        borderRadius: '0.75rem',
        padding: '32px 28px',
        boxShadow: '0 20px 40px rgba(26,28,28,0.06)',
        transition: 'background 300ms cubic-bezier(0.23,1,0.32,1)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
      }}
    >
      {isAddon && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: '#ffd1dc',
          }}
        />
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 20,
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: '8px',
            background: isAddon ? '#ffd1dc' : '#1a1c1c',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
            color: isAddon ? '#7a5761' : '#f9f9f9',
            transition: 'transform 300ms cubic-bezier(0.23,1,0.32,1)',
            transform: hov ? 'scale(1.1)' : 'scale(1)',
          }}
        >
          {mod.icon}
        </div>
        <span
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 600,
            fontSize: '0.625rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: isAddon ? '#7a5761' : 'rgba(26,28,28,0.4)',
            background: isAddon ? '#ffd1dc' : 'rgba(26,28,28,0.06)',
            padding: '3px 10px',
            borderRadius: '2rem',
          }}
        >
          {mod.tag}
        </span>
      </div>
      <div
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: '1rem',
          letterSpacing: '-0.01em',
          color: '#1a1c1c',
          marginBottom: 10,
        }}
      >
        {mod.name}
      </div>
      <div
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: '0.8125rem',
          color: 'rgba(26,28,28,0.52)',
          lineHeight: 1.65,
        }}
      >
        {mod.desc}
      </div>
    </div>
  );
}

export default function Platform() {
  return (
    <section id="platform" style={{ background: '#f9f9f9', padding: '120px 5vw' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Label>The Platform</Label>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 0,
            alignItems: 'end',
            marginBottom: 72,
          }}
        >
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(2rem,4vw,3rem)',
              letterSpacing: '-0.03em',
              color: '#1a1c1c',
              lineHeight: 1.08,
            }}
          >
            The complete stack.<br />A single bill.
          </h2>
          <p
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 400,
              fontSize: '1.0625rem',
              color: 'rgba(26,28,28,0.55)',
              lineHeight: 1.7,
              maxWidth: 420,
              justifySelf: 'end',
            }}
          >
            Stop juggling five vendor contracts. Korrido gives you every layer of the ride hailing stack — modular, a-la-carte, and under one subscription.
          </p>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: 12,
          }}
        >
          {modules.map((mod, i) => (
            <ModuleCard key={i} mod={mod} />
          ))}
        </div>
      </div>
    </section>
  );
}
