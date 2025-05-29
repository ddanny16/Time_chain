import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/HowItWorks.module.css';

function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section id="how-it-works" className={styles.section}>
      <h2>{t('howItWorks.title')}</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>{t('howItWorks.individuals')}</h3>
          <p>{t('howItWorks.individualsDesc')}</p>
        </div>
        <div className={styles.card}>
          <h3>{t('howItWorks.organizations')}</h3>
          <p>{t('howItWorks.organizationsDesc')}</p>
        </div>
        <div className={styles.card}>
          <h3>{t('howItWorks.communities')}</h3>
          <p>{t('howItWorks.communitiesDesc')}</p>
        </div>
      </div>
      <button className={styles.cta}>Join Now</button>
    </section>
  );
}

export default HowItWorks;