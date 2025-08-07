import React from 'react';
import { ArrowRight, Shield, TrendingUp, Wallet, Play } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
  onConnect: () => void;
  isWalletConnected: boolean;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, onConnect, isWalletConnected }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            Own Real Estate with{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              USDC
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-6 font-light">
            Tokenized, Compliant, Seamless.
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-4xl mx-auto leading-relaxed">
            Invest in real estate through ERC-3643 security tokens, earn rental income in USDC, 
            and enjoy gasless transactions on our fully compliant Web3 platform.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            {isWalletConnected ? (
              <button
                onClick={() => onNavigate('estates')}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3"
              >
                <span className="text-lg">Browse Estates</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <button
                onClick={onConnect}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3"
              >
                <Wallet className="w-6 h-6" />
                <span className="text-lg">Connect Wallet</span>
              </button>
            )}
            
            <button className="group bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-xl flex items-center justify-center space-x-3">
              <Play className="w-6 h-6" />
              <span className="text-lg">Watch Demo</span>
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-white/50 hover:bg-white/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">ERC-3643 Compliant</h3>
              <p className="text-gray-600">Security tokens with built-in regulatory compliance and permissioned transfers</p>
            </div>
            
            <div className="group bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-white/50 hover:bg-white/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">USDC Ecosystem</h3>
              <p className="text-gray-600">All payments, rent, and fees handled in USDC for stability and transparency</p>
            </div>
            
            <div className="group bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-white/50 hover:bg-white/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gasless Transactions</h3>
              <p className="text-gray-600">Zero gas fee transactions through meta-transaction infrastructure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;