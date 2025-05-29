import React from 'react';
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#tokenomics">Tokenomics</a>
        <a href="#roadmap">Roadmap</a>
        <a href="#blog">Blog</a>
      </div>
      <div className={styles.socials}>
        <a href="https://discord.com">Discord</a>
        <a href="https://x.com">X</a>
      </div>
      <p>Built on KaiaChain | Secured by Smart Contracts</p>
    </footer>
  );
}

export default Footer;