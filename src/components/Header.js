import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Web3 from 'web3';
import Swal from 'sweetalert2';
import styles from '../styles/Header.module.css';

function Header({ account, chainId, setAccount, setChainId }) {
  const { t, i18n } = useTranslation();
  const [isConnecting, setIsConnecting] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      setIsConnecting(true);
      const web3Instance = new Web3(window.ethereum);
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await web3Instance.eth.getAccounts();
        const networkId = await web3Instance.eth.getChainId();
        setAccount(accounts[0]);
        setChainId(networkId);
        console.log('Connected to KaiaChain network ID:', networkId);
        Swal.fire({
          title: 'Connected!',
          text: `Wallet connected: ${accounts[0].slice(0, 6)}...${accounts[0].slice(-4)}`,
          icon: 'success',
          confirmButtonColor: '#F97316',
        });
      } catch (error) {
        console.error('Wallet connection failed:', error);
        Swal.fire({
          title: 'Connection Failed',
          text: 'Failed to connect wallet. Please try again.',
          icon: 'error',
          confirmButtonColor: '#F97316',
        });
      } finally {
        setIsConnecting(false);
      }
    } else {
      Swal.fire({
        title: 'Wallet Not Found',
        text: 'Please install a KaiaChain-compatible wallet (e.g., Kaia Wallet or MetaMask).',
        icon: 'warning',
        confirmButtonColor: '#F97316',
      });
    }
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
        <a href="#jobs">{t('Jobs')}</a>
        <a href="#blog">{t('header.blog')}</a>
        {/* <button className={styles.cta}>{t('header.getStarted')}</button> */}
      </nav>
      <div className={styles.userActions}>
        <select
          className={styles.languageSelect}
          onChange={(e) => changeLanguage(e.target.value)}
          value={i18n.language}
        >
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
        <button
          className={`${styles.walletButton} ${account ? styles.connected : ''}`}
          onClick={connectWallet}
          disabled={isConnecting}
        >
          {isConnecting
            ? 'Connecting...'
            : account
            ? `${account.slice(0, 6)}...${account.slice(-4)}`
            : 'Connect Wallet'}
          {account && chainId && <span className={styles.networkId}>(ID: {chainId})</span>}
        </button>
      </div>
    </header>
  );
}

export default Header;