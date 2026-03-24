import React from 'react';
import styles from './Hero.module.css';
import { Button } from '../components/Button';
import { AnimatedSection } from '../components/AnimatedSection';
import { CupSoda, Cable, Cookie } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className={styles.heroSection}>
      {/* Decorative route paths in background */}
      <div className={styles.routePaths}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,20 50,50 T100,50" className={styles.pathLine} />
          <path d="M0,70 Q35,90 60,60 T100,70" className={styles.pathLine2} />
        </svg>
      </div>

      <div className={`container ${styles.heroContainer}`}>
        <AnimatedSection className={styles.heroContent} delay={100}>
          <h1 className={styles.headline}>
            A New Layer of Commerce <span className="text-gradient">Built Into Mobility</span>
          </h1>
          <p className={styles.subtext}>
            Turn idle ride time into instant discovery and purchases. Water, snacks, and essentials—just a tap away.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/schedule" style={{ textDecoration: 'none' }}>
              <Button variant="pulse">Partner With Us</Button>
            </Link>
            <Link href="#how-it-works" style={{ textDecoration: 'none' }}>
              <Button variant="secondary">See How It Works</Button>
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection className={styles.heroVisual} delay={300}>
          <div className={styles.cabInterior}>
            {/* Screen Mockup */}
            <div className={styles.screen}>
              <div className={styles.screenHeader}>Korrido</div>
              <div className={styles.screenContent}>
                <div className={styles.mockProduct}></div>
                <div className={styles.mockProduct}></div>
              </div>
            </div>
            {/* Floating Elements (Micro-interactions) */}
            <div className={`${styles.floatingCard} ${styles.float1}`}>
              <CupSoda size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Cold Mineral Water
            </div>
            <div className={`${styles.floatingCard} ${styles.float2}`}>
              <Cookie size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Premium Snacks
            </div>
            <div className={`${styles.floatingCard} ${styles.float3}`}>
              <Cable size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Charging Cables
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
