import React from 'react';
import styles from './Contact.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | Korrido',
  description: 'Get in touch with the Korrido team. We would love to hear from you.',
};

export default function ContactUs() {
  return (
    <div className={styles.pageWrapper}>
      <div className={`container ${styles.contactContainer}`}>
        <h1 className={styles.title}>Contact Us</h1>
        
        <div className={styles.contentGrid}>
          <div className={styles.infoSection}>
            <p className={styles.lead}>
              Ready to transform the in-cab experience?
            </p>
            <p className={styles.text}>
              Whether you are a brand looking to advertise, a fleet owner looking to partner, or just someone with a great idea—get in touch with our team.
            </p>
            
            <div className={styles.emailBox}>
              <span className={styles.emailLabel}>General Inquiries</span>
              <a href="mailto:hello@korrido.com" className={styles.emailLink}>hello@korrido.com</a>
            </div>
            <div className={styles.emailBox}>
              <span className={styles.emailLabel}>Book a Meeting</span>
              <Link href="/schedule" className={styles.emailLink}>Schedule a Call →</Link>
            </div>
          </div>
          
          <div className={styles.visualPanel}>
            {/* Visual element placeholder for brutalist design */}
            <div className={styles.decorativeBlock}>
              <div className={styles.gridPattern}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
