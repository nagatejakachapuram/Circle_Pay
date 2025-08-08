import React, { useEffect, useState } from 'react';
import { ArrowRight, Shield, TrendingUp, Wallet, Play, Sparkles, Zap } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import AnimatedCounter from './AnimatedCounter';

interface HeroProps {
  onNavigate: (page: string) => void;
  onConnect: () => void;
  isWalletConnected: boolean;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, onConnect, isWalletConnected }) => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Own Real Estate with USDC",
    "Tokenized Properties",
    "Compliant Investments",
    "Seamless Web3 Experience"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"></div>
      <ParticleBackground />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-blue-400/20 rounded-full blur-xl animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-400/20 rounded-full blur-xl animate-float animation-delay-4000"></div>
        
        {/* Morphing Shapes */}
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 morphing-shape animate-rotate-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 morphing-shape animate-rotate-slow" style={{animationDirection: 'reverse'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 z-10">
        <div className="text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 mb-8 animate-scale-in">
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="text-white font-medium">ERC-3643 Compliant Platform</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          {/* Main Heading with Typing Animation */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight">
              <span className="block animate-slide-up">Circle Pay</span>
            </h1>
            <div className="h-20 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-blue-200 to-indigo-200 animate-fade-in">
                {texts[currentText]}
              </h2>
            </div>
          </div>
          
          {/* Subtitle with Stagger Animation */}
          <div className="stagger-animation mb-12">
            <p className="text-xl md:text-2xl text-blue-100 font-light">
              Tokenized • Compliant • Seamless
            </p>
            <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mt-4">
              Invest in real estate through ERC-3643 security tokens, earn rental income in USDC, 
              and enjoy gasless transactions on our fully compliant Web3 platform.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-6 hover-lift">
              <div className="text-3xl font-bold text-white mb-2">
                <AnimatedCounter end={12} duration={2000} />M+
              </div>
              <div className="text-slate-300">Total Value Locked</div>
            </div>
            <div className="glass-card rounded-2xl p-6 hover-lift">
              <div className="text-3xl font-bold text-white mb-2">
                <AnimatedCounter end={847} duration={2500} />
              </div>
              <div className="text-slate-300">Properties Tokenized</div>
            </div>
            <div className="glass-card rounded-2xl p-6 hover-lift">
              <div className="text-3xl font-bold text-white mb-2">
                <AnimatedCounter end={15} duration={1500} />K+
              </div>
              <div className="text-slate-300">Active Investors</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            {isWalletConnected ? (
              <button
                onClick={() => onNavigate('estates')}
                className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 animate-glow flex items-center justify-center space-x-3 text-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative">Browse Estates</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative" />
              </button>
            ) : (
              <button
                onClick={onConnect}
                className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 animate-glow flex items-center justify-center space-x-3 text-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <Wallet className="w-6 h-6 relative animate-bounce-slow" />
                <span className="relative">Connect Wallet</span>
              </button>
            )}
            
            <button className="group glass-button border-2 border-white/30 hover:border-white/50 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 hover:shadow-2xl flex items-center justify-center space-x-3 text-lg">
              <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Feature Cards with Enhanced Animations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto stagger-animation">
            <div className="group glass-card p-8 rounded-3xl hover-lift neon-border">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform animate-pulse-slow">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">ERC-3643 Compliant</h3>
              <p className="text-slate-300">Security tokens with built-in regulatory compliance and permissioned transfers</p>
            </div>
            
            <div className="group glass-card p-8 rounded-3xl hover-lift neon-border">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform animate-pulse-slow">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">USDC Ecosystem</h3>
              <p className="text-slate-300">All payments, rent, and fees handled in USDC for stability and transparency</p>
            </div>
            
            <div className="group glass-card p-8 rounded-3xl hover-lift neon-border">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform animate-pulse-slow">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Gasless Transactions</h3>
              <p className="text-slate-300">Zero gas fee transactions through meta-transaction infrastructure</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;