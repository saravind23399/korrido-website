import React from 'react';
import styles from './ForBrands.module.css';
import { AnimatedSection } from '../components/AnimatedSection';
import { Button } from '../components/Button';

export const ForBrands = () => {
  return (
    <section id="brands" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <AnimatedSection className={styles.visualSide} delay={100}>
          <div className={styles.dashboardMockup}>
            <div className={styles.dashHeader}>
              <div className={styles.dots}>
                <span></span><span></span><span></span>
              </div>
              <div className={styles.searchBar}></div>
            </div>
            <div className={styles.dashContent}>
              <div className={styles.dashSidebar}>
                <div className={styles.sideItem}></div>
                <div className={styles.sideItem}></div>
                <div className={styles.sideItem}></div>
              </div>
              <div className={styles.dashMain}>
                <div className={styles.statsRow}>
                  <div className={styles.statCard}>
                    <div className={styles.statValue}></div>
                    <div className={styles.statLabel}></div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statValue}></div>
                    <div className={styles.statLabel}></div>
                  </div>
                </div>
                <div className={styles.chartPanel}>
                  <div className={styles.barGroup}>
                    <div className={`${styles.bar} ${styles.bar1}`}></div>
                    <div className={`${styles.bar} ${styles.bar2}`}></div>
                    <div className={`${styles.bar} ${styles.bar3}`}></div>
                    <div className={`${styles.bar} ${styles.bar4}`}></div>
                    <div className={`${styles.bar} ${styles.bar5}`}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className={styles.textSide} delay={200}>
          <span className={styles.badge}>For Brands</span>
          <h2 className={styles.title}>Your Message, Captivated Audience.</h2>
          <p className={styles.subtitle}>
            Reach passengers in a premium, distraction-free environment. Turn idle commute time into measurable engagement and real-time conversions.
          </p>
          
          <ul className={styles.features}>
            <li>
              <span className={styles.check}>✓</span>
              <strong>Targeted Reach:</strong> Connect with high-intent riders in premium cabs.
            </li>
            <li>
              <span className={styles.check}>✓</span>
              <strong>High Attention:</strong> Zero screen competition during the ride.
            </li>
            <li>
              <span className={styles.check}>✓</span>
              <strong>Measurable Impact:</strong> Track engagement and conversions in real-time.
            </li>
          </ul>
          
          <div className={styles.cta}>
            <Button variant="primary">Book Ad Slots</Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
