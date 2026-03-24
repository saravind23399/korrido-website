import React from 'react';
import styles from './ForDrivers.module.css';
import { AnimatedSection } from '../components/AnimatedSection';
import { Card } from '../components/Card';
import { User, IndianRupee, ServerCog } from 'lucide-react';

export const ForDrivers = () => {
  return (
    <section id="drivers" className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        <AnimatedSection className={styles.visualSide} delay={100}>
          <div className={styles.driverMockup}>
            <div className={styles.driverAvatar}>
              <User size={40} color="var(--primary-container)" />
            </div>
            <div className={styles.earningsCard}>
              <div className={styles.earningsTitle}>Weekly Extra Income</div>
              <div className={styles.earningsAmount}>+₹12,000</div>
              <div className={styles.earningsBar}>
                <div className={styles.earningsFill}></div>
              </div>
            </div>
            {/* Screen representation behind driver */}
            <div className={styles.behindSeatScreen}></div>
          </div>
        </AnimatedSection>

        <AnimatedSection className={styles.textSide} delay={200}>
          <span className={styles.badge}>For Fleet Partners & Drivers</span>
          <h2 className={styles.title}>Drive and Earn. Zero Effort.</h2>
          <p className={styles.subtitle}>
            Unlock a new passive income stream without any additional effort. We handle the hardware and advertisers. You just drive.
          </p>
          
          <div className={styles.benefitsGrid}>
            <Card variant="mint" className={styles.benefitCard}>
              <div className={styles.icon}><IndianRupee size={28} /></div>
              <h4>Passive Income</h4>
              <p>Earn a percentage of ad revenue on every trip.</p>
            </Card>
            <Card variant="lavender" className={styles.benefitCard}>
              <div className={styles.icon}><ServerCog size={28} /></div>
              <h4>Smart Integration</h4>
              <p>Easy, non-intrusive installation behind seats.</p>
            </Card>
          </div>
        </AnimatedSection>
        
      </div>
    </section>
  );
};
