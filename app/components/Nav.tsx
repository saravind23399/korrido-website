'use client';

import { useState } from 'react';
import Link from 'next/link';
import Wordmark from './Wordmark';

interface NavProps {
  scrolled: boolean;
}

function NavBtn({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-block',
        background: hov ? '#2e3030' : '#1a1c1c',
        color: '#f9f9f9',
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 600,
        fontSize: '0.8125rem',
        padding: '9px 20px',
        borderRadius: '12px',
        textDecoration: 'none',
        transition: 'all 300ms cubic-bezier(0.23,1,0.32,1)',
      }}
    >
      {children}
    </Link>
  );
}

export default function Nav({ scrolled }: NavProps) {
  const navLinks = ['Platform', 'Pricing', 'Docs'];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(255,255,255,0.8)' : 'rgba(249,249,249,0.0)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 400ms cubic-bezier(0.23,1,0.32,1)',
        padding: '0 5vw',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: scrolled ? '0 20px 40px rgba(26,28,28,0.06)' : 'none',
      }}
    >
      <Wordmark color="#1a1c1c" size={28} accent="#ffd1dc" useLogo={false} />

      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {navLinks.map((item) => (
          <NavLink
            key={item}
            href={`#${item.toLowerCase()}`}
          >
            {item}
          </NavLink>
        ))}
        <NavBtn href="#pricing">
          Get Started
        </NavBtn>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 500,
        fontSize: '0.875rem',
        color: hov ? '#1a1c1c' : 'rgba(26,28,28,0.55)',
        textDecoration: 'none',
        transition: 'color 300ms cubic-bezier(0.23,1,0.32,1)',
      }}
    >
      {children}
    </a>
  );
}
