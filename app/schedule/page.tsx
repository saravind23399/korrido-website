'use client';

import React from 'react';
import styles from './Schedule.module.css';
import { InlineWidget } from 'react-calendly';

export default function SchedulePage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.card} style={{ display: 'block', padding: '3rem 2rem' }}>
        <h1 className={styles.title} style={{ textAlign: 'center', marginBottom: '1rem' }}>Partner With Korrido</h1>
        <p style={{ color: 'var(--on-surface-variant)', textAlign: 'center', marginBottom: '3rem', fontSize: '1.2rem', fontWeight: 600 }}>
          Book a call with our team to explore how Korrido can transform your mobility experience.
        </p>

        <div style={{ width: '100%', border: '4px solid var(--outline)', background: 'var(--surface-container-highest)', overflow: 'hidden' }}>
          <InlineWidget 
            url="https://calendly.com/saravind23399/30min" 
            styles={{ height: '700px', width: '100%' }}
            pageSettings={{
              backgroundColor: '262626',
              textColor: 'ffffff',
              primaryColor: 'ffeea1',
            }}
          />
        </div>
      </div>
    </div>
  );
}
