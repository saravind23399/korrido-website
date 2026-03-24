import React from 'react';
import styles from './Footer.module.css';

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
            <a href="#brands">For Brands</a>
            <a href="#riders">For Riders</a>
            <a href="#drivers">For Drivers</a>
          </div>
          <div className={styles.linkGroup}>
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Korrido. All rights reserved.</p>
      </div>
    </footer>
  );
};
