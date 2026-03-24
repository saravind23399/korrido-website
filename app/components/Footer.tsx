import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brand}>
          <h3>Korrido</h3>
          <p>Turn Every Ride Into a Discovery Experience.</p>
        </div>
        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <h4>Platform</h4>
            <a href="/#brands">For Brands</a>
            <a href="/#riders">For Riders</a>
            <a href="/#drivers">For Drivers</a>
          </div>
          <div className={styles.linkGroup}>
            <h4>Company</h4>
            <Link href="/about">About Us</Link>
            <Link href="#">Careers</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Korrido. All rights reserved.</p>
      </div>
    </footer>
  );
};
