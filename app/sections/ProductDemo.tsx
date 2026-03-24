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
          <p className={styles.subtitle}>A glimpse into the passenger interface.</p>
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
                      {activeIndex === 0 && isExpanding && <div className={styles.ripple}></div>}
                    </div>
                    <div className={styles.demoCardBody}>
                      <div className={styles.demoCardTitle}></div>
                      <div className={styles.demoCardText}></div>
                      <div className={styles.demoCardBtn}>Buy Now</div>
                    </div>
                  </div>
                  
                  <div className={`${styles.demoCard} ${activeIndex === 1 && isExpanding ? styles.demoCardExpanded : ''} ${activeIndex !== 1 ? styles.demoCardHidden : ''}`}>
                    <div className={styles.demoCardImg} style={{ background: 'var(--mint)' }}>
                      {activeIndex === 1 && isExpanding && <div className={styles.ripple}></div>}
                    </div>
                    <div className={styles.demoCardBody}>
                      <div className={styles.demoCardTitle}></div>
                      <div className={styles.demoCardText}></div>
                      <div className={styles.demoCardBtn}>Claim Offer</div>
                    </div>
                  </div>

                  <div className={`${styles.demoCard} ${activeIndex === 2 && isExpanding ? styles.demoCardExpanded : ''} ${activeIndex !== 2 ? styles.demoCardHidden : ''}`}>
                    <div className={styles.demoCardImg} style={{ background: 'var(--lavender)' }}>
                      {activeIndex === 2 && isExpanding && <div className={styles.ripple}></div>}
                    </div>
                    <div className={styles.demoCardBody}>
                      <div className={styles.demoCardTitle}></div>
                      <div className={styles.demoCardText}></div>
                      <div className={styles.demoCardBtn}>Learn More</div>
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
