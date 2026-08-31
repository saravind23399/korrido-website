'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function FinalCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [btnHov, setBtnHov] = useState(false);

  return (
    <section style={{ background: '#ffd1dc', padding: '140px 5vw' }}>
      <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
        {/* Logo with pulse animation */}
        <div
          className="cursor-pulse"
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 32,
          }}
        >
          <Image
            src="/korrido-logo.png"
            alt="Korrido"
            width={56}
            height={56}
            style={{ borderRadius: '10px', display: 'block', filter: 'invert(1)' }}
          />
        </div>

        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(2.5rem,5vw,4rem)',
            letterSpacing: '-0.04em',
            color: '#1a1c1c',
            lineHeight: 1.06,
            marginBottom: 20,
          }}
        >
          kor<span style={{ color: '#7a5761' }}>rid</span>o
        </h2>
        <p
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 400,
            fontSize: '1.125rem',
            color: 'rgba(122,87,97,0.85)',
            lineHeight: 1.7,
            marginBottom: 48,
          }}
        >
          Launch your fleet in one day. No setup fees. No annual contracts. Just India's most complete ride hailing stack — yours from ₹799/vehicle/month.
        </p>

        {!submitted ? (
          <div
            style={{
              display: 'flex',
              gap: 8,
              maxWidth: 440,
              margin: '0 auto',
            }}
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Work email"
              type="email"
              onKeyDown={(e) => { if (e.key === 'Enter' && email) setSubmitted(true); }}
              style={{
                flex: 1,
                background: '#ffffff',
                border: 'none',
                outline: 'none',
                borderRadius: '10px',
                padding: '15px 18px',
                fontFamily: "'Manrope', sans-serif",
                fontSize: '0.9375rem',
                color: '#1a1c1c',
                transition: 'background 250ms, box-shadow 250ms',
              }}
              onFocus={(e) => {
                e.target.style.boxShadow = '0 0 0 1px rgba(120,85,94,0.4)';
              }}
              onBlur={(e) => {
                e.target.style.boxShadow = 'none';
              }}
            />
            <button
              onClick={() => { if (email) setSubmitted(true); }}
              onMouseEnter={() => setBtnHov(true)}
              onMouseLeave={() => setBtnHov(false)}
              style={{
                background: btnHov ? '#2e3030' : '#1a1c1c',
                color: '#f9f9f9',
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 700,
                fontSize: '0.9375rem',
                padding: '15px 28px',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'background 250ms',
                boxShadow: btnHov ? '0 12px 24px rgba(26,28,28,0.2)' : 'none',
              }}
            >
              Get Started →
            </button>
          </div>
        ) : (
          <div
            style={{
              background: 'rgba(255,255,255,0.4)',
              borderRadius: '12px',
              padding: '24px 32px',
              maxWidth: 440,
              margin: '0 auto',
            }}
          >
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: '1rem',
                color: '#1a1c1c',
                marginBottom: 6,
              }}
            >
              You're in. 🎉
            </div>
            <div
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '0.875rem',
                color: 'rgba(122,87,97,0.85)',
              }}
            >
              Our team will reach out within 24 hours to get your fleet started.
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
