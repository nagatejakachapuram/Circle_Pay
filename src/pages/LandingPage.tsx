import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import WhyWeb3 from '../components/WhyWeb3';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

interface LandingPageProps {
  onNavigate: (page: string) => void;
  onConnect: () => void;
  isWalletConnected: boolean;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate, onConnect, isWalletConnected }) => {
  return (
    <div className="min-h-screen">
      <Hero onNavigate={onNavigate} onConnect={onConnect} isWalletConnected={isWalletConnected} />
      <AboutSection />
      <HowItWorks />
      <Features />
      <WhyWeb3 />
      <CallToAction onNavigate={onNavigate} onConnect={onConnect} isWalletConnected={isWalletConnected} />
      <Footer />
    </div>
  );
};

export default LandingPage;