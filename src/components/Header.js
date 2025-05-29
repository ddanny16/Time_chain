import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Header.module.css';

function Header({ account, chainId }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>TimeChain</div>
      <nav className={styles.nav}>
        <a href="#home">{t('header.home')}</a>
        <a href="#how-it-works">{t('header.howItWorks')}</a>
        <a href="#features">{t('header.features')}</a>
        <a href="#tokenomics">{t('header.tokenomics')}</a>
        <a href="#roadmap">{t('header.roadmap')}</a>
        <a href="#community">{t('header.community')}</a>
        <a href="#blog">{t('header.blog')}</a>
        <button className={styles.cta}>{t('header.getStarted')}</button>
      </nav>
      <div className={styles.userActions}>
        <select onChange={(e) => changeLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
        <div className={styles.wallet}>
          {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect Wallet'}
          {chainId && <span> (Network ID: {chainId})</span>}
        </div>
      </div>
    </header>
  );
}

export default Header;