"use client";

import React, { useState, useEffect } from 'react';
import styles from './TestimonialCarousel.module.css';
import { Card } from './Card';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  type: 'brand' | 'rider' | 'driver';
}

const testimonials: Testimonial[] = [
  {
    quote: "Korrido transformed our local ad strategy. We saw a 3x increase in engagement compared to traditional out-of-home ads.",
    name: "Nidhi Agarwal",
    role: "Marketing Director",
    type: "brand"
  },
  {
    quote: "Waiting in a cab used to be boring. Now I look forward to discovering new cafes and redeeming discounts on my way home.",
    name: "Bharadwaj Giridar",
    role: "Daily Commuter",
    type: "rider"
  },
  {
    quote: "The easiest passive income I've ever made. The screens were installed in 10 minutes and passengers love them.",
    name: "Sanjay Kumar",
    role: "Fleet Owner",
    type: "driver"
  }
];

export const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.slidesWrapper}>
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className={`${styles.slide} ${idx === currentIndex ? styles.activeSlide : ''}`}
            style={{
              transform: `translateX(${100 * (idx - currentIndex)}%)`,
              opacity: idx === currentIndex ? 1 : 0
            }}
          >
            <Card variant={testimonial.type === 'brand' ? 'peach' : testimonial.type === 'rider' ? 'mint' : 'lavender'} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>&quot;</div>
              <p className={styles.quoteBody}>{testimonial.quote}</p>
              <div className={styles.author}>
                <div className={styles.authorAvatar}></div>
                <div className={styles.authorInfo}>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                  <span className={styles.badgeType}>{testimonial.type}</span>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      <div className={styles.dots}>
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ''}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
