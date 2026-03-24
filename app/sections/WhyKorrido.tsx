import React from 'react';
import styles from './WhyKorrido.module.css';
import { AnimatedSection } from '../components/AnimatedSection';
import { Card } from '../components/Card';

export const WhyKorrido = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <AnimatedSection className={styles.header}>
          <h2 className={styles.title}>Why Korrido?</h2>
          <p className={styles.subtitle}>The smartest way to reach audiences on the move.</p>
        </AnimatedSection>

        <div className={styles.grid}>
          <AnimatedSection delay={100}>
            <Card variant="peach" className={styles.whyCard}>
              <div className={styles.icon}>🎯</div>
              <h3>Captive Attention</h3>
              <p>Average ride time is 20+ minutes inside a distraction-limited environment.</p>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <Card variant="lavender" className={styles.whyCard}>
              <div className={styles.icon}>🚫</div>
              <h3>Zero Distractions</h3>
              <p>No endless scrolling feeds or ad blockers. Just pure, engaging content.</p>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <Card variant="mint" className={styles.whyCard}>
              <div className={styles.icon}>⚡</div>
              <h3>Real-Time Commerce</h3>
              <p>Passengers can claim offers and buy products directly from the screen during their trip.</p>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <Card variant="blue" className={styles.whyCard}>
              <div className={styles.icon}>📍</div>
              <h3>Hyperlocal Targeting</h3>
              <p>Deploy campaigns based on real-time location, time of day, and destination.</p>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
