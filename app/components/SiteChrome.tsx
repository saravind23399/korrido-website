'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  ['Home', '/'],
  ['Story', '/story'],
  ['Pledge', '/pledge'],
  ['About', '/about'],
  ['Estimate', '/estimate'],
  ['Apply', '/apply'],
  ['Drive', '/drive'],
] as const;

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const scroll = window.scrollY;
        const doc = document.documentElement;
        const total = doc.scrollHeight - window.innerHeight;
        setProgress(total > 0 ? (scroll / total) * 100 : 0);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="progress-bar" aria-hidden="true">
      <span style={{ width: `${progress}%` }} />
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
      className="floating-cta"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none' }}
      aria-label="Reserve a zone"
    >
      Reserve a zone →
    </Link>
  );
}

function Logo() {
  return (
    <Link href="/" aria-label="Korrido home" className="fixed left-4 top-4 z-50 lg:left-6 lg:top-6">
      <Image src="/images/korrido-light.svg" alt="Korrido" width={116} height={34} className="h-8 w-auto" priority unoptimized />
    </Link>
  );
}

function CinematicNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
      <nav className="bottom-nav hidden lg:flex" aria-label="Site navigation">
        {navItems.map(([label, href]) => (
          <Link key={href} href={href} className={pathname === href ? 'active' : ''} aria-current={pathname === href ? 'page' : undefined}>
            {label}
          </Link>
        ))}
      </nav>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-[60] grid h-11 w-11 place-items-center rounded-full bg-surface/90 backdrop-blur border border-border text-foreground flex lg:hidden"
        aria-label="Open menu"
        aria-expanded={open}
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className={`fixed inset-0 z-[70] ${open ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!open}>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-background/95 backdrop-blur transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
        />
        <div className={`absolute inset-0 flex flex-col items-center justify-center gap-6 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}>
          <Link href="/" onClick={() => setOpen(false)} className="fixed left-6 top-6">
            <Image src="/images/korrido-light.svg" alt="Korrido" width={116} height={34} className="h-8 w-auto" unoptimized />
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="fixed right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-foreground"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="flex flex-col items-center gap-5">
            {navItems.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`font-mono text-3xl font-bold uppercase tracking-wide transition-colors ${pathname === href ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                aria-current={pathname === href ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function LiveElapsed() {
  const [elapsed, setElapsed] = useState('');

  useEffect(() => {
    const launched = new Date('2026-08-20T05:00:00Z').getTime();
    const update = () => {
      const seconds = Math.max(0, Math.floor((Date.now() - launched) / 1000));
      const days = Math.floor(seconds / 86400);
      const hours = Math.floor((seconds % 86400) / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;
      setElapsed(`T+ ${days}d ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`);
    };
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return <span suppressHydrationWarning aria-label="time since launch" className="font-mono text-amber-400">{elapsed}</span>;
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background py-16 text-muted-foreground">
      <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Image src="/images/korrido-dark.svg" alt="Korrido" width={140} height={40} className="mb-4 h-8 w-auto" unoptimized />
            <p className="text-sm leading-relaxed text-foreground/80">Premium in-cab digital advertising for Indian cities. Captive attention, GPS-verified, live in 48 hours.</p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterColumn title="Product" links={[
              ['Apply', '/apply'],
              ['Drive', '/drive'],
              ['Story', '/story'],
              ['Pledge', '/pledge'],
              ['About', '/about'],
            ]} />
            <FooterColumn title="Legal" links={[
              ['Terms', '/terms'],
              ['Privacy', '/privacy'],
              ['Refund', '/refund'],
              ['Cancellation', '/cancellation'],
            ]} />
            <FooterColumn title="Contact" links={[
              ['team@korrido.com', 'mailto:team@korrido.com'],
              [' Bengaluru, Karnataka', '/'],
            ]} />
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <span className="text-muted-foreground">© 2026 Korrido. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="font-mono text-foreground">LIVE</span>
            <LiveElapsed />
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: readonly (readonly [string, string])[] }) {
  return (
    <div>
      <p className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-foreground">{title}</p>
      <ul className="space-y-2.5 text-sm">{links.map(([label, href]) => <li key={label}><Link href={href} className="text-muted-foreground hover:text-foreground">{label}</Link></li>)}</ul>
    </div>
  );
}

export function MarketingShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <Logo />
      <FloatingCTA />
      <main className="snap-y snap-mandatory">{children}</main>
      <SiteFooter />
      <CinematicNav />
    </>
  );
}
