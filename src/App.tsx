import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import EstatesPage from './pages/EstatesPage';

declare global {
  interface Window {
    ethereum?: any;
  }
}

function App() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [currentPage, setCurrentPage] = useState('landing');

  useEffect(() => {
    // Check if wallet was previously connected
    const savedWallet = localStorage.getItem('connectedWallet');
    if (savedWallet && window.ethereum) {
      setIsWalletConnected(true);
      setWalletAddress(savedWallet);
    }
  }, []);

  const handleWalletConnect = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Request account access
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        
        if (accounts.length > 0) {
          const address = accounts[0];
          const shortAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;
          
          setIsWalletConnected(true);
          setWalletAddress(shortAddress);
          localStorage.setItem('connectedWallet', shortAddress);
        }
      } catch (error) {
        console.error('Error connecting wallet:', error);
        alert('Failed to connect wallet. Please try again.');
      }
    } else {
      alert('Please install MetaMask or another Web3 wallet to continue.');
    }
  };

  const handleWalletDisconnect = () => {
    setIsWalletConnected(false);
    setWalletAddress('');
    localStorage.removeItem('connectedWallet');
    setCurrentPage('landing');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        walletAddress={walletAddress}
        isWalletConnected={isWalletConnected}
        onConnect={handleWalletConnect}
        onDisconnect={handleWalletDisconnect}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
      
      {currentPage === 'landing' && (
        <LandingPage 
          onNavigate={setCurrentPage}
          onConnect={handleWalletConnect}
          isWalletConnected={isWalletConnected}
        />
      )}
      {currentPage === 'estates' && <EstatesPage />}
    </div>
  );
}

export default App;