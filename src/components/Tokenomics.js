import React from 'react';
import styles from '../styles/Tokenomics.module.css';

function Tokenomics() {
  return (
    <section id="tokenomics" className={styles.section}>
      <h2>TimeChain Tokenomics</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Time Token (TT)</h3>
          <p>1 TT = 1 hour of work. Capped at 1M TT. Used for service exchanges and hiring.</p>
        </div>
        <div className={styles.card}>
          <h3>Governance Token (GT)</h3>
          <p>Earned by staking TT. Used for voting and premium features.</p>
        </div>
      </div>
      <button className={styles.cta}>Learn More About Tokens</button>
    </section>
  );
}

export default Tokenomics;