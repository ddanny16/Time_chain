import React from 'react';
import styles from '../styles/Community.module.css';

function Community() {
  return (
    <section id="community" className={styles.section}>
      <h2>Join Our Global Community</h2>
      <p>Connect with DAOs, DeFi protocols, and NGOs. Join our Discord or follow us on social media.</p>
      <div className={styles.buttons}>
        <button className={styles.cta}>Join Discord</button>
        <button className={styles.cta}>Partner with Us</button>
      </div>
    </section>
  );
}

export default Community;