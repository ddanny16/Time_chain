import React from 'react';
import styles from '../styles/HowItWorks.module.css';

function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <h2>How TimeChain Works</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>For Individuals</h3>
          <p>Earn Time Tokens (TT) by offering skills, spend them on services, or convert to fiat/crypto.</p>
        </div>
        <div className={styles.card}>
          <h3>For Organizations</h3>
          <p>Hire talent for tasks using TT with automated matching and smart contracts.</p>
        </div>
        <div className={styles.card}>
          <h3>For Communities</h3>
          <p>Join a global skill-sharing economy with transparent, trustless exchanges.</p>
        </div>
      </div>
      <button className={styles.cta}>Join Now</button>
    </section>
  );
}

export default HowItWorks;