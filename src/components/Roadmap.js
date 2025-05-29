import React from 'react';
import styles from '../styles/Roadmap.module.css';

function Roadmap() {
  return (
    <section id="roadmap" className={styles.section}>
      <h2>Our Journey</h2>
      <div className={styles.timeline}>
        <div className={styles.phase}>
          <h3>Q1 2024</h3>
          <p>MVP Launch: Core platform with wallet, TT exchange, and job listings.</p>
        </div>
        <div className={styles.phase}>
          <h3>Q2 2024</h3>
          <p>Pilot: Test with 1,000 users and gather feedback.</p>
        </div>
        <div className={styles.phase}>
          <h3>Q3 2024</h3>
          <p>Scale: Full KaiaChain integration and mobile-first features.</p>
        </div>
        <div className={styles.phase}>
          <h3>Q4 2024</h3>
          <p>Global: Enhanced mobile app and partnerships with DAOs.</p>
        </div>
      </div>
      <button className={styles.cta}>Stay Updated</button>
    </section>
  );
}

export default Roadmap;