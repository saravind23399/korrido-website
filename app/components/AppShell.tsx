'use client';

import { useState, useEffect } from 'react';
import Nav from './Nav';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <Nav scrolled={scrolled} />
      {children}
    </>
  );
}
