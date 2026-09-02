'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { ArrowRight } from './Icons';

const navItems = [
  ['Home', '/'],
  ['How it works', '/how-it-works'],
  ['Pricing', '/estimate'],
  ['About', '/about'],
  ['Drive', '/drive'],
] as const;

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="progress-bar" aria-hidden="true">
      <motion.span style={{ scaleX: scrollYProgress }} />
    </div>
  );
}

function FloatingCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const onFormPage = pathname === '/apply' || pathname === '/drive' || pathname === '/estimate';

  useEffect(() => {
    if (onFormPage) return;
    const hero = document.getElementById('hero');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.05, rootMargin: '-40px 0px 0px 0px' }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [onFormPage, pathname]);

  if (onFormPage) return null;
  return (
    <Link
      href="/apply"
      className="floating-cta btn-magnetic btn-primary"
      style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)', filter: visible ? 'blur(0)' : 'blur(4px)' }}
      aria-label="Reserve a zone"
    >
      <span className="tracking-[.12em]">Reserve a zone</span>
      <span className="btn-icon">
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}

function Hamburger({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="grid h-10 w-10 place-items-center rounded-full lg:hidden"
      style={{ background: 'color-mix(in srgb, var(--color-foreground) 5%, transparent)', border: '1px solid color-mix(in srgb, var(--color-foreground) 10%, transparent)' }}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
    >
      <span className="relative flex h-3 w-4 flex-col justify-center">
        <span className="absolute h-[1px] w-4 bg-foreground transition-all duration-500" style={{ top: open ? '50%' : '0%', transform: open ? 'translateY(-50%) rotate(45deg)' : 'translateY(0) rotate(0deg)', transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }} />
        <span className="absolute h-[1px] w-4 bg-foreground transition-opacity duration-300" style={{ opacity: open ? 0 : 1, transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }} />
        <span className="absolute h-[1px] w-4 bg-foreground transition-all duration-500" style={{ top: open ? '50%' : '100%', transform: open ? 'translateY(-50%) rotate(-45deg)' : 'translateY(-100%) rotate(0deg)', transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }} />
      </span>
    </button>
  );
}

function TopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24));

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', close);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', close);
    };
  }, [open]);

  return (
    <>
      {/* Desktop megabar */}
      <header
        className="fixed inset-x-0 top-0 z-[60] hidden lg:block"
        style={{
          transition: 'background 0.45s cubic-bezier(0.32, 0.72, 0, 1), border-color 0.45s cubic-bezier(0.32, 0.72, 0, 1), backdrop-filter 0.45s cubic-bezier(0.32, 0.72, 0, 1)',
          background: scrolled ? 'color-mix(in srgb, var(--color-background) 75%, transparent)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid color-mix(in srgb, var(--color-foreground) 6%, transparent)' : '1px solid transparent',
        }}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-4">
          <Link href="/" aria-label="Korrido home" className="flex items-center">
            <Image src="/images/korrido-light.svg" alt="Korrido" width={116} height={34} className="h-8 w-auto" priority unoptimized />
          </Link>

          <nav className="flex items-center gap-1 rounded-full p-1" aria-label="Site navigation" style={{ background: 'color-mix(in srgb, var(--color-foreground) 4%, transparent)', border: '1px solid color-mix(in srgb, var(--color-foreground) 8%, transparent)' }}>
            {navItems.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className={`relative rounded-full px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.09em] transition-colors duration-500 ${pathname === href ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)', background: pathname === href ? 'color-mix(in srgb, var(--color-primary) 10%, transparent)' : 'transparent' }}
                aria-current={pathname === href ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link href="/apply" className="btn-magnetic btn-primary" style={{ padding: '0.6rem 1.1rem' }}>
            <span>Reserve</span>
            <span className="btn-icon"><ArrowRight className="h-3 w-3" /></span>
          </Link>
        </div>
      </header>

      {/* Mobile top bar */}
      <header
        className="fixed inset-x-0 top-0 z-[60] lg:hidden"
        style={{
          transition: 'background 0.45s cubic-bezier(0.32, 0.72, 0, 1), border-color 0.45s cubic-bezier(0.32, 0.72, 0, 1), backdrop-filter 0.45s cubic-bezier(0.32, 0.72, 0, 1)',
          background: scrolled ? 'color-mix(in srgb, var(--color-background) 80%, transparent)' : 'color-mix(in srgb, var(--color-background) 40%, transparent)',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(8px)',
          borderBottom: scrolled ? '1px solid color-mix(in srgb, var(--color-foreground) 6%, transparent)' : '1px solid transparent',
        }}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" aria-label="Korrido home" className="flex items-center" onClick={() => setOpen(false)}>
            <Image src="/images/korrido-light.svg" alt="Korrido" width={100} height={30} className="h-7 w-auto" priority unoptimized />
          </Link>
          <Hamburger open={open} onClick={() => setOpen(!open)} />
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div className={`fixed inset-0 z-[70] lg:hidden ${open ? 'pointer-events-auto nav-open' : 'pointer-events-none'}`} aria-hidden={!open} style={{ transition: 'opacity 0.45s cubic-bezier(0.32, 0.72, 0, 1)' }}>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 transition-opacity duration-500 ${open ? 'opacity-100' : 'opacity-0'}`}
          style={{ background: 'rgba(20, 17, 14, 0.92)', backdropFilter: 'blur(28px)', transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
        />
        <div className={`absolute inset-0 flex flex-col items-center justify-center gap-6 transition-opacity duration-500 ${open ? 'opacity-100' : 'opacity-0'}`} style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}>
          <div className="flex flex-col items-center gap-5">
            {navItems.map(([label, href], i) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`nav-link-stagger font-mono text-3xl font-bold uppercase tracking-wide transition-colors ${pathname === href ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                aria-current={pathname === href ? 'page' : undefined}
                style={{ '--i': i } as React.CSSProperties}
              >
                {label}
              </Link>
            ))}
          </div>
          <Link href="/apply" onClick={() => setOpen(false)} className="nav-link-stagger btn-magnetic btn-primary mt-4" style={{ '--i': navItems.length } as React.CSSProperties}>
            <span>Reserve a zone</span>
            <span className="btn-icon"><ArrowRight className="h-3.5 w-3.5" /></span>
          </Link>
        </div>
      </div>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-background py-24 text-muted-foreground">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[700px] -translate-x-1/2 rounded-full blur-3xl" style={{ background: 'color-mix(in srgb, var(--color-primary) 8%, transparent)' }} aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Image src="/images/korrido-dark.svg" alt="Korrido" width={140} height={40} className="mb-4 h-8 w-auto" unoptimized />
            <p className="text-sm leading-relaxed text-foreground/70">In-cab advertising for Bengaluru. HD screens inside city cabs. GPS-verified impressions. No cameras. Live in 48 hours.</p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterColumn title="Product" links={[
              ['How it works', '/how-it-works'],
              ['Pricing', '/estimate'],
              ['Apply', '/apply'],
              ['Drive', '/drive'],
            ]} />
            <FooterColumn title="Company" links={[
              ['About', '/about'],
              ['Terms', '/terms'],
              ['Privacy', '/privacy'],
              ['Refund', '/refund'],
              ['Cancellation', '/cancellation'],
            ]} />
            <FooterColumn title="Contact" links={[
              ['team@korrido.com', 'mailto:team@korrido.com'],
              ['Bengaluru, Karnataka', '/'],
            ]} />
          </div>
        </div>
        <div className="mt-20 flex flex-col gap-4 border-t border-white/5 pt-10 text-sm sm:flex-row sm:items-center sm:justify-between">
          <span className="text-muted-foreground">© 2026 Korrido. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: readonly (readonly [string, string])[] }) {
  return (
    <div className="border-l border-white/5 pl-5">
      <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">{title}</p>
      <ul className="space-y-3 text-sm">{links.map(([label, href]) => <li key={label}><Link href={href} className="text-muted-foreground transition-colors duration-500 hover:text-foreground" style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}>{label}</Link></li>)}</ul>
    </div>
  );
}

export function MarketingShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mesh-bg" aria-hidden="true" />
      <ScrollProgress />
      <TopNav />
      <FloatingCTA />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
