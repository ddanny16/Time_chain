import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { I18nextProvider } from 'react-i18next';
import Swal from 'sweetalert2';
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
    console.log('useEffect triggered');
    const connectWallet = async () => {
      console.log('Attempting wallet connection');
      if (window.ethereum) {
        console.log('Ethereum provider detected');
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
          console.error('Initial wallet connection failed:', error);
          Swal.fire({
            title: 'Connection Failed',
            text: 'Failed to connect wallet. Please try again.',
            icon: 'error',
            confirmButtonColor: '#F97316',
          });
        }
      } else {
        console.log('No Ethereum provider found');
        Swal.fire({
          title: 'Wallet Not Found',
          text: 'Please install a KaiaChain-compatible wallet (e.g., Kaia Wallet or MetaMask).',
          icon: 'warning',
          confirmButtonColor: '#F97316',
        });
      }
    };
    connectWallet();
  }, []);

  console.log('Rendering App component', { account, chainId });

  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <Header account={account} chainId={chainId} setAccount={setAccount} setChainId={setChainId} />
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