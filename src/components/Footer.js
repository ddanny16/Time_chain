import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Footer.module.css';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="#about">{t('footer.about')}</a>
        <a href="#features">{t('footer.features')}</a>
        <a href="#tokenomics">{t('footer.tokenomics')}</a>
        <a href="#roadmap">{t('footer.roadmap')}</a>
        <a href="#blog">{t('footer.blog')}</a>
      </div>
      <div className={styles.socials}>
        <a href="https://discord.com">Discord</a>
        <a href="https://x.com">X</a>
      </div>
      <p>{t('footer.builtOn')}</p>
    </footer>
  );
}

export default Footer;