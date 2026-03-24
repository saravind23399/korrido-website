import React from 'react';
import styles from './ForRiders.module.css';
import { AnimatedSection } from '../components/AnimatedSection';
import { Coins } from 'lucide-react';

export const ForRiders = () => {
  return (
    <section id="riders" className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        <AnimatedSection className={styles.textSide} delay={100}>
          <span className={styles.badge}>For Riders</span>
          <h2 className={styles.title}>Discovery & Convenience.</h2>
          <p className={styles.subtitle}>
            Add value to every trip through instant discovery, absolute convenience, and exclusive access. Instant gratification, built into your journey.
          </p>
          
          <ul className={styles.features}>
            <li>
              <span className={styles.check}>✓</span>
              <div>
                <strong>Discover:</strong> Find new favorites tailored to your journey.
              </div>
            </li>
            <li>
              <span className={styles.check}>✓</span>
              <div>
                <strong>Exclusive Deals:</strong> Unlock ride-only offers from top brands.
              </div>
            </li>
            <li>
              <span className={styles.check}>✓</span>
              <div>
                <strong>Earn Rewards:</strong> Get points and perks to use right away.
              </div>
            </li>
          </ul>
        </AnimatedSection>

        <AnimatedSection className={styles.visualSide} delay={200}>
          <div className={styles.phoneMockup}>
            <div className={styles.phoneNotch}></div>
            <div className={styles.phoneScreen}>
              <div className={styles.appHeader}>
                <div className={styles.avatar}></div>
                <div className={styles.headerLines}>
                  <div className={styles.line1}></div>
                  <div className={styles.line2}></div>
                </div>
              </div>
              <div className={styles.appContent}>
                <div className={styles.feedCard}>
                  <div className={styles.cardImg} style={{ background: 'var(--primary-container)' }}></div>
                  <div className={styles.cardBottom}>
                    <div className={styles.cardTitle}>Daily Deals</div>
                    <div className={styles.cardBtn}>Claim</div>
                  </div>
                </div>
                <div className={`${styles.feedCard} ${styles.cardNext}`}>
                  <div className={styles.cardImg} style={{ background: 'var(--secondary)' }}></div>
                  <div className={styles.cardBottom}>
                    <div className={styles.cardTitle}>Ride Rewards</div>
                    <div className={styles.cardBtn}>View</div>
                  </div>
                </div>
              </div>
              {/* Animated Coins */}
              <div className={`${styles.coin} ${styles.coin1}`}><Coins size={24} /></div>
              <div className={`${styles.coin} ${styles.coin2}`}><Coins size={24} /></div>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};
