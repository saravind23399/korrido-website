'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroBtnProps {
  primary?: boolean;
  href: string;
  children: React.ReactNode;
}

function HeroBtn({ primary, href, children }: HeroBtnProps) {
  const [hov, setHov] = useState(false);
  const [pressed, setPressed] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => { setHov(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{
        display: 'inline-block',
        textDecoration: 'none',
        background: primary ? '#1a1c1c' : 'rgba(26,28,28,0.04)',
        color: primary ? '#f9f9f9' : '#1a1c1c',
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 700,
        fontSize: '0.9375rem',
        padding: '15px 32px',
        borderRadius: '12px',
        transition: 'all 300ms cubic-bezier(0.23,1,0.32,1)',
        boxShadow: primary && hov
          ? '0 12px 32px rgba(26,28,28,0.15)'
          : hov && !primary
          ? '0 8px 24px rgba(26,28,28,0.08)'
          : 'none',
      }}
    >
      {children}
    </a>
  );
}

export default function Hero() {
  const [phase, setPhase] = useState(0);
  const [px, setPx] = useState({ x: 0, y: 0 });


  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 600),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => setPhase(3), 1400),
      setTimeout(() => setPhase(4), 1700),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPx({
        x: (e.clientX / window.innerWidth - 0.5) * 24,
        y: (e.clientY / window.innerHeight - 0.5) * 14,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { n: '10,000+', l: 'Drivers onboarded' },
    { n: '32',      l: 'Cities covered'    },
    { n: '₹0',      l: 'Setup cost'        },
    { n: '1 day',   l: 'To go live'        },
  ];

  return (
    <section
      style={{
        minHeight: '100vh',
        background: '#f9f9f9',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 5vw 80px',
      }}
    >
      {/* Parallax background logo */}
      <div
        style={{
          position: 'absolute',
          right: '-2vw',
          top: '50%',
          transform: `translate(${px.x}px, calc(-50% + ${px.y}px))`,
          transition: 'transform 600ms cubic-bezier(0.23,1,0.32,1)',
          opacity: 0.022,
          userSelect: 'none',
          pointerEvents: 'none',
          width: '55vw',
          height: '55vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src="/korrido-logo.png"
          alt=""
          fill
          sizes="55vw"
          style={{ objectFit: 'contain', filter: 'invert(1)' }}
          aria-hidden="true"
        />
      </div>

      {/* Vertical grid lines */}
      {[0.3, 0.6].map((f) => (
        <div
          key={f}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: `${f * 100}%`,
            width: 1,
            background: 'rgba(26,28,28,0.03)',
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Animated route line at bottom */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, overflow: 'hidden' }}>
        <svg width="100%" height="2">
          <line
            className="route-anim"
            x1="0" y1="1" x2="100%" y2="1"
            stroke="rgba(122,87,97,0.4)" strokeWidth="1.5"
          />
        </svg>
      </div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 760 }}>

        {/* Logo with draw animation */}
        <div
          className="logo-reveal"
          style={{ marginBottom: 36 }}
        >
          <Image
            src="/korrido-logo.png"
            alt="Korrido"
            width={72}
            height={72}
            loading="eager"
            style={{
              borderRadius: '12px',
              display: 'block',
              filter: 'invert(1)',
            }}
            priority
          />
        </div>

        {/* Tag */}
        {phase >= 1 && (
          <div className="fade-up" style={{ marginBottom: 20 }}>
            <span
              style={{
                background: '#ffd1dc',
                color: '#7a5761',
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 600,
                fontSize: '0.6875rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '5px 14px',
                borderRadius: '2rem',
              }}
            >
              India's First · Full-Stack Ride Hailing
            </span>
          </div>
        )}

        {/* Headline */}
        {phase >= 1 && (
          <h1
            className="fade-up-1"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(3.5rem,7vw,6.5rem)',
              letterSpacing: '-0.02em',
              color: '#1a1c1c',
              lineHeight: 1.04,
              marginBottom: 24,
            }}
          >
            One subscription.<br />
            <span style={{ color: 'rgba(26,28,28,0.3)' }}>Every layer.</span>
          </h1>
        )}

        {/* Sub */}
        {phase >= 2 && (
          <p
            className="fade-up-2"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(1rem,2vw,1.25rem)',
              letterSpacing: '0.01em',
              color: 'rgba(26,28,28,0.6)',
              lineHeight: 1.7,
              marginBottom: 40,
              maxWidth: 520,
            }}
          >
            Fleet management. Smart dispatch. Passenger & driver apps. In-cab entertainment. All in one flat subscription — start from day one.
          </p>
        )}

        {/* CTAs */}
        {phase >= 3 && (
          <div
            className="fade-up-3"
            style={{
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
              alignItems: 'center',
              marginBottom: 64,
            }}
          >
            <HeroBtn primary href="#pricing">Start Free Today →</HeroBtn>
            <HeroBtn href="#platform">See the Platform</HeroBtn>
          </div>
        )}

        {/* Stats bar */}
        {phase >= 4 && (
          <div
            className="fade-up-4"
            style={{
              display: 'flex',
              gap: 0,
              borderTop: '1px solid rgba(26,28,28,0.06)',
              paddingTop: 32,
            }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  paddingRight: 24,
                  borderRight: i < 3 ? '1px solid rgba(26,28,28,0.06)' : 'none',
                  marginRight: i < 3 ? 24 : 0,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.75rem',
                    letterSpacing: '-0.025em',
                    color: '#1a1c1c',
                    marginBottom: 4,
                  }}
                >
                  {s.n}
                </div>
                <div
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '0.75rem',
                    color: 'rgba(26,28,28,0.5)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
