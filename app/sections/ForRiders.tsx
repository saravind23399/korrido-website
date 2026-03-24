import React from 'react';
import styles from './ForRiders.module.css';
import { AnimatedSection } from '../components/AnimatedSection';

export const ForRiders = () => {
  return (
    <section id="riders" className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        <AnimatedSection className={styles.textSide} delay={100}>
          <span className={styles.badge}>For Riders</span>
          <h2 className={styles.title}>Your Ride, Rewarded.</h2>
          <p className={styles.subtitle}>
            Discover new products, claim exclusive local deals, and earn real rewards just by exploring content during your trip.
          </p>
          
          <ul className={styles.features}>
            <li>
              <span className={styles.check}>✓</span>
              <strong>Discover:</strong> Find new favorites tailored to your journey.
            </li>
            <li>
              <span className={styles.check}>✓</span>
              <strong>Exclusive Deals:</strong> Unlock ride-only offers from top brands.
            </li>
            <li>
              <span className={styles.check}>✓</span>
              <strong>Earn Rewards:</strong> Get points and perks to use right away.
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
                  <div className={styles.cardImg}></div>
                  <div className={styles.cardBottom}>
                    <div className={styles.cardTitle}></div>
                    <div className={styles.cardBtn}></div>
                  </div>
                </div>
                <div className={`${styles.feedCard} ${styles.cardNext}`}>
                  <div className={styles.cardImg}></div>
                  <div className={styles.cardBottom}>
                    <div className={styles.cardTitle}></div>
                    <div className={styles.cardBtn}></div>
                  </div>
                </div>
              </div>
              {/* Animated Coins */}
              <div className={`${styles.coin} ${styles.coin1}`}>🪙</div>
              <div className={`${styles.coin} ${styles.coin2}`}>🪙</div>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};
