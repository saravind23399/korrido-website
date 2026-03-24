import React from 'react';
import styles from './About.module.css';

export const metadata = {
  title: 'About Us | Korrido',
  description: 'Learn more about Korrido and our mission to turn every ride into a discovery experience.',
};

export default function AboutUs() {
  return (
    <div className={styles.pageWrapper}>
      <div className={`container ${styles.aboutContainer}`}>
        
        {/* HERO SECTION */}
        <header className={styles.heroSection}>
          <h1 className={styles.massiveTitle}>ABOUT KORRIDO</h1>
          <div className={styles.heroContent}>
            <p className={styles.punchline}>
              WE TURN EVERY RIDE INTO A DISCOVERY EXPERIENCE.
            </p>
            <p className={styles.heroText}>
              Korrido is revolutionizing mobility. We transform transit into an interactive retail and media hub, bringing high-impact Digital Out-Of-Home (DOOH) advertising and in-cab commerce directly to passengers. We are building the smart in-cab platform of the future.
            </p>
          </div>
        </header>

        {/* MISSION & VISION */}
        <section className={styles.missionSection}>
          <div className={styles.brutalGrid}>
            <div className={styles.brutalCard}>
              <h2 className={styles.cardHeader}>MISSION</h2>
              <p className={styles.cardBody}>
                To turn every journey into a moment of discovery. We are on a relentless mission to build the world&#39;s most intelligent, non-intrusive in-cab platform—delivering premium, hyper-relevant advertising that actually benefits and delights the consumer, rather than disrupting them.
              </p>
            </div>
            <div className={styles.brutalCard}>
              <h2 className={styles.cardHeader}>VISION</h2>
              <p className={styles.cardBody}>
                To completely transform the global Digital Out-Of-Home (DOOH) landscape. We envision a futuristic, interconnected mobility ecosystem where physical transit seamlessly merges with tailored digital experiences—unlocking massive scalable value for brands, fleets, and riders alike.
              </p>
            </div>
          </div>
        </section>

        {/* CORE PILLARS */}
        <section className={styles.pillarsSection}>
          <h2 className={styles.sectionHeading}>OUR CORE PILLARS</h2>
          <div className={styles.pillarGrid}>
            <div className={styles.pillarItem}>
              <h3>01. CAPTIVATING & CONTEXTUAL</h3>
              <p>We turn dead transit time into high-impact digital real estate. Our intelligent displays deliver premium, hyper-local content and commerce that seamlessly matches the rider&#39;s journey without being intrusive.</p>
            </div>
            <div className={styles.pillarItem}>
              <h3>02. HARDWARE MEETS SOFTWARE AT SCALE</h3>
              <p>We don&#39;t just build apps; we deploy robust physical infrastructure across fragmented fleets. From real-time content serving to reliable screen networks, we build systems capable of delivering seamless experiences at scale.</p>
            </div>
            <div className={styles.pillarItem}>
              <h3>03. COMPLIANCE & TRUST BY DESIGN</h3>
              <p>We operate in the physical world, prioritizing data privacy and safety. Rigorous regulatory adherence and secure infrastructure are built directly into the core of our product.</p>
            </div>
          </div>
        </section>

        {/* FOUNDERS SECTION */}
        <section className={styles.foundersSection}>
          <h2 className={styles.sectionHeading}>THE LEADERSHIP ENGINE</h2>
          <p className={styles.foundersIntro}>
            Driven by a team balancing deep engineering with robust product, compliance, and ops strategy. A legacy of execution starting from TVS Matriculation Higher Secondary School, moving fast to build the core of Korrido.
          </p>

          <div className={styles.foundersGrid}>
            
            {/* Aravind */}
            <div className={styles.founderBlock}>
              <div className={styles.founderVisual}>
                <img src="/images/founders/aravind.jpeg" alt="Aravind Srinivasan" className={styles.founderImage} />
              </div>
              <div className={styles.founderData}>
                <h3 className={styles.founderName}>ARAVIND SRINIVASAN</h3>
                <div className={styles.founderRole}>CO-FOUNDER & TECHNICAL LEAD</div>
                <div className={styles.founderBio}>
                  <p>Engineering Leader & Program Manager scaling innovative products. Thrives in ambiguous environments, moving seamlessly from concept to execution.</p>
                  <ul className={styles.sharpList}>
                    <li><strong>DEEP EXPERTISE:</strong> Background spans early-stage startups and tackling complex domains like compliance-tech.</li>
                    <li><strong>LEADERSHIP:</strong> Managed cross-functional delivery across engineering, design, QA, and business teams.</li>
                    <li><strong>TECHNICAL STRATEGY:</strong> Highly skilled in driving scalable system architecture without losing sight of the big picture.</li>
                    <li><strong>SECURITY:</strong> Championed rigorous compliance and security certifications securely from end-to-end.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Vishal */}
            <div className={styles.founderBlock}>
              <div className={styles.founderVisual}>
                <img src="/images/founders/vishal.jpeg" alt="Vishal Prathush" className={styles.founderImage} />
              </div>
              <div className={styles.founderData}>
                <h3 className={styles.founderName}>VISHAL PRATHUSH</h3>
                <div className={styles.founderRole}>CO-FOUNDER & PRODUCT STRATEGY</div>
                <div className={styles.founderBio}>
                  <p>Product & Ops Strategist building at the intersection of product, compliance, and operations. Structured thinking meets execution.</p>
                  <ul className={styles.sharpList}>
                    <li><strong>INDUSTRY SCALE:</strong> Expertise from Stripe, PwC, Amazon.</li>
                    <li><strong>RISK & COMPLIANCE:</strong> Deep foundation in navigating complex regulatory environments and scaling operational workflows.</li>
                    <li><strong>ENTREPRENEURIAL:</strong> Co-founded ventures from zero to one and launched products to market.</li>
                    <li><strong>FIRST PRINCIPLES:</strong> Product leadership bridging go-to-market strategy and engineering.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
