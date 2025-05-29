import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Community from './components/Community';
import Footer from './components/Footer';
import JobListings from './components/JobListings';
import './App.css';

function App() {
  const [account, setAccount] = useState(null);
  const [chainId, setChainId] = useState(null);

  useEffect(() => {
    const connectWallet = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const accounts = await web3Instance.eth.getAccounts();
          const networkId = await web3Instance.eth.getChainId();
          setAccount(accounts[0]);
          setChainId(networkId);
          console.log('Connected to KaiaChain network ID:', networkId);
        } catch (error) {
          console.error('Wallet connection failed:', error);
          alert('Failed to connect wallet. Please try again.');
        }
      } else {
        alert('Please install a KaiaChain-compatible wallet (e.g., Kaia Wallet or MetaMask).');
      }
    };
    connectWallet();
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <Header account={account} chainId={chainId} />
        <Hero />
        <HowItWorks />
        <Features />
        <Tokenomics />
        <Roadmap />
        <Community />
        <JobListings />
        <Footer />
      </div>
    </I18nextProvider>
  );
}

export default App;