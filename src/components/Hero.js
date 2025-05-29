import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Hero.module.css';

function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.subtitle')}</p>
      <div className={styles.buttons}>
        <button className={styles.primary}>{t('hero.getStarted')}</button>
        <button className={styles.secondary}>{t('hero.explore')}</button>
      </div>
    </section>
  );
}

export default Hero;