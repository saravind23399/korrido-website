import React from 'react';
import styles from './HowItWorks.module.css';
import { AnimatedSection } from '../components/AnimatedSection';
import { Card } from '../components/Card';

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className="container">
        <AnimatedSection className={styles.header}>
          <h2 className={styles.title}>Effortless Experience</h2>
          <p className={styles.subtitle}>Three simple steps to discovery and rewards.</p>
        </AnimatedSection>

        <div className={styles.stepsContainer}>
          <AnimatedSection delay={100} className={styles.stepWrapper}>
            <Card variant="peach" className={styles.stepCard}>
              <div className={styles.iconWrapper}>
                <div className={`${styles.icon} ${styles.iconGlow}`}>🚗</div>
              </div>
              <div className={styles.stepNumber}>01</div>
              <h3>Ride Begins</h3>
              <p>Step into the cab and watch the smart screen activate automatically.</p>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={250} className={styles.stepWrapper}>
            <Card variant="mint" className={styles.stepCard}>
              <div className={styles.iconWrapper}>
                <div className={`${styles.icon} ${styles.iconSwipe}`}>👆</div>
              </div>
              <div className={styles.stepNumber}>02</div>
              <h3>Discover</h3>
              <p>Swipe, tap, and interact with curated content tailored for your journey.</p>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={400} className={styles.stepWrapper}>
            <Card variant="lavender" className={styles.stepCard}>
              <div className={styles.iconWrapper}>
                <div className={`${styles.icon} ${styles.iconBounce}`}>🎁</div>
              </div>
              <div className={styles.stepNumber}>03</div>
              <h3>Shop & Earn</h3>
              <p>Claim real-time offers and earn rewards instantly.</p>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
