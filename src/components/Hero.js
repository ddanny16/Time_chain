import React from 'react';
import styles from '../styles/Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <h1>TimeChain: Empowering Skills, Not Wallets</h1>
      <p>A decentralized platform where time is currency. Trade skills, earn Time Tokens, and join a global community.</p>
      <div className={styles.buttons}>
        <button className={styles.primary}>Get Started with TimeChain</button>
        <button className={styles.secondary}>Explore How It Works</button>
      </div>
    </section>
  );
}

export default Hero;