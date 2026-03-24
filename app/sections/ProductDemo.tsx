"use client";

import React, { useState, useEffect } from 'react';
import styles from './ProductDemo.module.css';
import { AnimatedSection } from '../components/AnimatedSection';

export const ProductDemo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanding, setIsExpanding] = useState(false);

  // Auto-scroll logic for demo
  useEffect(() => {
    const interval = setInterval(() => {
      setIsExpanding(true);
      
      setTimeout(() => {
        setIsExpanding(false);
        setActiveIndex((prev) => (prev + 1) % 3);
      }, 3000); // 3 seconds expanded state
      
    }, 5000); // 5 seconds total cycle
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <AnimatedSection className={styles.header}>
          <h2 className={styles.title}>Experience It Yourself</h2>
          <p className={styles.subtitle}>Instant gratification, built into your journey.</p>
        </AnimatedSection>
        
        <AnimatedSection delay={200} className={styles.demoWrapper}>
          <div className={styles.tabletMockup}>
            <div className={styles.tabletScreen}>
              <div className={styles.demoApp}>
                {/* Header */}
                <div className={styles.demoHeader}>
                  <div className={styles.demoProfile}></div>
                  <div className={styles.demoTabs}>
                    <div className={`${styles.demoTab} ${styles.activeTab}`}>Discover</div>
                    <div className={styles.demoTab}>Rewards</div>
                  </div>
                </div>

                {/* Content Area */}
                <div className={styles.demoContent}>
                  <div className={`${styles.demoCard} ${activeIndex === 0 && isExpanding ? styles.demoCardExpanded : ''} ${activeIndex !== 0 ? styles.demoCardHidden : ''}`}>
                    <div className={styles.demoCardImg}>
                      <img src="/images/water-bottle.png" alt="Chilled Bisleri Water" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      {activeIndex === 0 && isExpanding && <div className={styles.ripple}></div>}
                    </div>
                    <div className={styles.demoCardBody}>
                      <div className={styles.demoCardTitle}>Bisleri Mineral Water</div>
                      <div className={styles.demoCardText}>Chilled small bottle to stay hydrated on the go.</div>
                      <div className={styles.demoCardBtn}>Buy for ₹40</div>
                    </div>
                  </div>
                  
                  <div className={`${styles.demoCard} ${activeIndex === 1 && isExpanding ? styles.demoCardExpanded : ''} ${activeIndex !== 1 ? styles.demoCardHidden : ''}`}>
                    <div className={styles.demoCardImg}>
                      <img src="/images/boat-cable.png" alt="boAt Type-C Cable" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      {activeIndex === 1 && isExpanding && <div className={styles.ripple}></div>}
                    </div>
                    <div className={styles.demoCardBody}>
                      <div className={styles.demoCardTitle}>boAt Type-C Tough Cable</div>
                      <div className={styles.demoCardText}>Rugged 1.5m braided fast charging cable.</div>
                      <div className={styles.demoCardBtn}>Buy for ₹299</div>
                    </div>
                  </div>

                  <div className={`${styles.demoCard} ${activeIndex === 2 && isExpanding ? styles.demoCardExpanded : ''} ${activeIndex !== 2 ? styles.demoCardHidden : ''}`}>
                    <div className={styles.demoCardImg}>
                      <img src="/images/lays-chips.png" alt="Lay's Magic Masala" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      {activeIndex === 2 && isExpanding && <div className={styles.ripple}></div>}
                    </div>
                    <div className={styles.demoCardBody}>
                      <div className={styles.demoCardTitle}>Lay's India's Magic Masala</div>
                      <div className={styles.demoCardText}>Classic spicy potato chips for the ride. 50g.</div>
                      <div className={styles.demoCardBtn}>Buy for ₹20</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
