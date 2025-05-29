import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Community.module.css';

function Community() {
  const { t } = useTranslation();

  return (
    <section id="community" className={styles.section}>
      <h2>{t('community.title')}</h2>
      <p>{t('community.desc')}</p>
      <div className={styles.buttons}>
        <button className={styles.cta}>{t('community.joinDiscord')}</button>
        <button className={styles.cta}>{t('community.partner')}</button>
      </div>
    </section>
  );
}

export default Community;