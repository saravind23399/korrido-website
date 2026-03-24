import React from 'react';
import styles from './WhyKorrido.module.css';
import { AnimatedSection } from '../components/AnimatedSection';
import { Card } from '../components/Card';
import { Target, ShieldX, Zap, MapPin } from 'lucide-react';

export const WhyKorrido = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <AnimatedSection className={styles.header}>
          <h2 className={styles.title}>Why Korrido?</h2>
          <p className={styles.subtitle}>A new category intersecting mobility, media, and commerce.</p>
        </AnimatedSection>

        <div className={styles.grid}>
          <AnimatedSection delay={100}>
            <Card variant="peach" className={styles.whyCard}>
              <div className={styles.icon}><Target size={32} /></div>
              <h3>High-Intent Engagement</h3>
              <p>Deliver high-intent engagement in a captive environment, driving measurable outcomes.</p>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <Card variant="lavender" className={styles.whyCard}>
              <div className={styles.icon}><ShieldX size={32} /></div>
              <h3>Zero Friction</h3>
              <p>No apps. No waiting. Quick commerce reimagined for the real world.</p>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <Card variant="mint" className={styles.whyCard}>
              <div className={styles.icon}><Zap size={32} /></div>
              <h3>Instant Gratification</h3>
              <p>Passengers can instantly purchase everyday essentials—water, snacks, and cables.</p>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <Card variant="blue" className={styles.whyCard}>
              <div className={styles.icon}><MapPin size={32} /></div>
              <h3>A New Category</h3>
              <p>Mobility meets media and commerce in a seamless loop built directly into the ride.</p>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
