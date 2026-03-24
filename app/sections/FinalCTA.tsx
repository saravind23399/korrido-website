import React from 'react';
import styles from './FinalCTA.module.css';
import { AnimatedSection } from '../components/AnimatedSection';
import { Button } from '../components/Button';
import Link from 'next/link';

export const FinalCTA = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <AnimatedSection className={styles.content}>
          <h2 className={styles.title}>Own the Ride. Own the Moment.</h2>
          <p className={styles.subtitle}>
            Join the smart mobility revolution. Whether you want to reach premium audiences or turn your fleet into a revenue stream, Korrido is your partner.
          </p>
          <div className={styles.buttonGroup}>
            <Link href="/schedule" style={{ textDecoration: 'none' }}>
              <Button variant="pulse">Start Advertising</Button>
            </Link>
            <Link href="/schedule" style={{ textDecoration: 'none' }}>
              <Button variant="primary">Partner With Korrido</Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
