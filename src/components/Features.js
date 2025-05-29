import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Features.module.css';

function Features() {
  const { t } = useTranslation();

  return (
    <section id="features" className={styles.section}>
      <h2>{t('features.title')}</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>{t('features.exchange')}</h3>
          <p>{t('features.exchangeDesc')}</p>
        </div>
        <div className={styles.card}>
          <h3>{t('features.hiring')}</h3>
          <p>{t('features.hiringDesc')}</p>
        </div>
        <div className={styles.card}>
          <h3>{t('features.tokens')}</h3>
          <p>{t('features.tokensDesc')}</p>
        </div>
        <div className={styles.card}>
          <h3>{t('features.reputation')}</h3>
          <p>{t('features.reputationDesc')}</p>
        </div>
      </div>
      <button className={styles.cta}>{t('features.discover')}</button>
    </section>
  );
}

export default Features;