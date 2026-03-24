import React from 'react';
import styles from './Hero.module.css';
import { Button } from '../components/Button';
import { AnimatedSection } from '../components/AnimatedSection';

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
            Turn Every Ride Into a <span className="text-gradient">Discovery Experience</span>
          </h1>
          <p className={styles.subtext}>
            Engage. Discover. Shop. All while you ride.
          </p>
          <div className={styles.ctaGroup}>
            <Button variant="pulse">Partner With Us</Button>
            <Button variant="secondary">See How It Works</Button>
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
            <div className={`${styles.floatingCard} ${styles.float1}`}>🎟️ -50% Off Local Event</div>
            <div className={`${styles.floatingCard} ${styles.float2}`}>☕ Free Coffee Offer</div>
            <div className={`${styles.floatingCard} ${styles.float3}`}>🛍️ Just Dropped</div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
