import React from 'react';
import styles from './Testimonials.module.css';
import { AnimatedSection } from '../components/AnimatedSection';
import { TestimonialCarousel } from '../components/TestimonialCarousel';

export const Testimonials = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <AnimatedSection className={styles.header}>
          <h2 className={styles.title}>Don&apos;t Just Take Our Word For It</h2>
          <p className={styles.subtitle}>Hear from the brands, riders, and drivers already winning with Korrido.</p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <TestimonialCarousel />
        </AnimatedSection>
      </div>
    </section>
  );
};
