'use client';

import Wordmark from './Wordmark';

const footerLinks = ['Privacy', 'Terms', 'Support', 'Brand Kit'];

export default function Footer() {
  return (
    <footer style={{ background: '#ffffff', padding: '48px 5vw' }}>
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 24,
        }}
      >
        <Wordmark color="#1a1c1c" size={24} accent="#7a5761" />

        <div style={{ display: 'flex', gap: 32 }}>
          {footerLinks.map((item) => (
            <a
              key={item}
              href="#"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '0.8125rem',
                color: 'rgba(26,28,28,0.4)',
                textDecoration: 'none',
                transition: 'color 250ms cubic-bezier(0.23,1,0.32,1)',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = 'rgba(26,28,28,0.8)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = 'rgba(26,28,28,0.4)';
              }}
            >
              {item}
            </a>
          ))}
        </div>

        <div
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: '0.75rem',
            color: 'rgba(26,28,28,0.3)',
          }}
        >
          © 2026 Korrido Technologies Pvt. Ltd. · India
        </div>
      </div>
    </footer>
  );
}
