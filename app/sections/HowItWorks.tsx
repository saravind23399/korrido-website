import React from 'react';
import styles from './HowItWorks.module.css';
import { AnimatedSection } from '../components/AnimatedSection';
import { Card } from '../components/Card';
import { MonitorPlay, MousePointerClick, ShoppingBag } from 'lucide-react';

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className="container">
        <AnimatedSection className={styles.header}>
          <h2 className={styles.title}>Effortless Experience</h2>
          <p className={styles.subtitle}>From discovery to purchase—within seconds.</p>
        </AnimatedSection>

        <div className={styles.stepsContainer}>
          <AnimatedSection delay={100} className={styles.stepWrapper}>
            <Card variant="peach" className={styles.stepCard}>
              <div className={styles.iconWrapper}>
                <MonitorPlay size={40} className={styles.iconGlow} />
              </div>
              <div className={styles.stepNumber}>01</div>
              <h3>Interactive Screen</h3>
              <p>Step into the vehicle and watch the smart, distraction-free environment activate.</p>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={250} className={styles.stepWrapper}>
            <Card variant="mint" className={styles.stepCard}>
              <div className={styles.iconWrapper}>
                <MousePointerClick size={40} className={styles.iconSwipe} />
              </div>
              <div className={styles.stepNumber}>02</div>
              <h3>Engage & Discover</h3>
              <p>Tap through curated, native content without the endless scrolling of a phone.</p>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={400} className={styles.stepWrapper}>
            <Card variant="lavender" className={styles.stepCard}>
              <div className={styles.iconWrapper}>
                <ShoppingBag size={40} className={styles.iconBounce} />
              </div>
              <div className={styles.stepNumber}>03</div>
              <h3>Instant Purchase</h3>
              <p>Grab daily essentials—water, snacks, cables—directly from the smart hardware system.</p>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
