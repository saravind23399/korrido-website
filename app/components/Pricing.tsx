'use client';

import { useState } from 'react';

const included = [
  'Dispatch Engine',
  'Fleet Management',
  'Passenger App (branded)',
  'Driver App',
  'Live support',
  'Analytics dashboard',
  'Unlimited rides',
];

const addons = [
  'In-Cab Entertainment — ₹149/vehicle/mo',
  'In-Cab Digital Screens — ₹199/vehicle/mo',
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

function PricingCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [btnHov, setBtnHov] = useState(false);

  const submit = () => { if (email) setSubmitted(true); };

  if (submitted) {
    return (
      <div style={{ background: '#ffd1dc', borderRadius: '12px', padding: '20px 24px' }}>
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: '1rem',
            color: '#7a5761',
            marginBottom: 4,
          }}
        >
          You're on the list 🎉
        </div>
        <div
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: '0.875rem',
            color: 'rgba(122,87,97,0.7)',
          }}
        >
          We'll be in touch within 24 hours to get your fleet started.
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@fleet.com"
        type="email"
        onKeyDown={(e) => { if (e.key === 'Enter') submit(); }}
        style={{
          flex: 1,
          background: '#f3f3f3',
          border: 'none',
          outline: 'none',
          borderRadius: '10px',
          padding: '14px 16px',
          fontFamily: "'Manrope', sans-serif",
          fontSize: '0.875rem',
          color: '#1a1c1c',
          transition: 'background 250ms, box-shadow 250ms',
        }}
        onFocus={(e) => {
          e.target.style.background = '#ffffff';
          e.target.style.boxShadow = '0 0 0 1px rgba(120,85,94,0.4)';
        }}
        onBlur={(e) => {
          e.target.style.background = '#f3f3f3';
          e.target.style.boxShadow = 'none';
        }}
      />
      <button
        onClick={submit}
        onMouseEnter={() => setBtnHov(true)}
        onMouseLeave={() => setBtnHov(false)}
        style={{
          background: btnHov ? '#2e3030' : '#1a1c1c',
          color: '#f9f9f9',
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 700,
          fontSize: '0.875rem',
          padding: '14px 24px',
          borderRadius: '10px',
          border: 'none',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          transition: 'background 250ms',
        }}
      >
        Start Free →
      </button>
    </div>
  );
}

export default function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
  const price = billing === 'monthly' ? 799 : 699;

  return (
    <section id="pricing" style={{ background: '#f9f9f9', padding: '120px 5vw' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Label>Pricing</Label>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'start',
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(2rem,4vw,3rem)',
                letterSpacing: '-0.03em',
                color: '#1a1c1c',
                lineHeight: 1.08,
                marginBottom: 20,
              }}
            >
              One number.<br />No surprises.
            </h2>
            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '1.0625rem',
                color: 'rgba(26,28,28,0.55)',
                lineHeight: 1.7,
                marginBottom: 40,
              }}
            >
              Flat per-vehicle pricing. No setup fees, no per-ride commissions, no annual contracts you can't exit. Scale up or down any month.
            </p>

            {/* Billing toggle */}
            <div
              style={{
                display: 'inline-flex',
                background: '#ebebeb',
                borderRadius: '10px',
                padding: 3,
                marginBottom: 40,
              }}
            >
              {(['monthly', 'annual'] as const).map((b) => (
                <button
                  key={b}
                  onClick={() => setBilling(b)}
                  style={{
                    background: billing === b ? '#ffffff' : 'transparent',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 20px',
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.8125rem',
                    color: billing === b ? '#1a1c1c' : 'rgba(26,28,28,0.45)',
                    cursor: 'pointer',
                    transition: 'all 250ms cubic-bezier(0.23,1,0.32,1)',
                    boxShadow: billing === b ? '0 2px 8px rgba(26,28,28,0.08)' : 'none',
                  }}
                >
                  {b === 'monthly' ? 'Monthly' : 'Annual (save 12%)'}
                </button>
              ))}
            </div>

            <div style={{ marginBottom: 32 }}>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '4rem',
                  letterSpacing: '-0.04em',
                  color: '#1a1c1c',
                  transition: 'all 300ms cubic-bezier(0.23,1,0.32,1)',
                }}
              >
                ₹{price}
              </span>
              <span
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '1rem',
                  color: 'rgba(26,28,28,0.45)',
                  marginLeft: 8,
                }}
              >
                / vehicle / month
              </span>
            </div>

            <PricingCTA />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {/* Included */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '0.75rem',
                padding: '28px 28px',
                boxShadow: '0 20px 40px rgba(26,28,28,0.06)',
              }}
            >
              <div
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.6875rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(26,28,28,0.38)',
                  marginBottom: 20,
                }}
              >
                Included in base
              </div>
              {included.map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '8px 0',
                    borderBottom: '1px solid rgba(26,28,28,0.05)',
                  }}
                >
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      background: 'rgba(26,28,28,0.07)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2 5L4.5 7.5L8 3"
                        stroke="#1a1c1c"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: '0.875rem',
                      color: '#1a1c1c',
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Add-ons */}
            <div
              style={{
                background: '#fff5f7',
                borderRadius: '0.75rem',
                padding: '24px 28px',
                boxShadow: '0 8px 24px rgba(255,209,220,0.25)',
              }}
            >
              <div
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.6875rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#7a5761',
                  marginBottom: 16,
                }}
              >
                Optional add-ons
              </div>
              {addons.map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '8px 0',
                    borderBottom: '1px solid rgba(255,209,220,0.3)',
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: '#ffd1dc',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: '0.875rem',
                      color: '#7a5761',
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
