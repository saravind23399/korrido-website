import React from 'react';
import styles from './Navbar.module.css';
import { Button } from './Button';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          <a href="/">Korrido</a>
        </div>
        <div className={styles.navLinks}>
          <a href="/#how-it-works" className={styles.link}>How It Works</a>
          <a href="/#brands" className={styles.link}>For Brands</a>
          <a href="/#riders" className={styles.link}>For Riders</a>
          <a href="/#drivers" className={styles.link}>For Drivers</a>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </div>
        <div className={styles.navAction}>
          <Link href="/schedule" style={{ textDecoration: 'none' }}>
            <Button variant="primary">Partner With Us</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
