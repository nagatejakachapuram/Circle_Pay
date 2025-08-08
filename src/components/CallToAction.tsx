import React from 'react';
import { ArrowRight, Shield, Building2, Wallet } from 'lucide-react';

interface CallToActionProps {
  onNavigate: (page: string) => void;
  onConnect: () => void;
  isWalletConnected: boolean;
}

const CallToAction: React.FC<CallToActionProps> = ({ onNavigate, onConnect, isWalletConnected }) => {
  return (
    <section className="py-24 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Glass overlay */}
      <div className="absolute inset-0 glass-effect"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Ready to Start Investing?
        </h2>
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join the future of real estate investment. Connect your wallet to explore tokenized properties 
          or complete KYC verification to start investing today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {isWalletConnected ? (
            <>
              <button
                onClick={() => onNavigate('estates')}
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3 text-lg"
              >
                <Building2 className="w-6 h-6" />
                <span>Browse Estates</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group glass-button border-2 border-white/30 text-white hover:border-white/50 font-bold px-10 py-5 rounded-2xl transition-all duration-300 hover:shadow-2xl flex items-center justify-center space-x-3 text-lg">
                <Shield className="w-6 h-6" />
                <span>Start KYC Process</span>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={onConnect}
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3 text-lg"
              >
                <Wallet className="w-6 h-6" />
                <span>Connect Wallet</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group glass-button border-2 border-white/30 text-white hover:border-white/50 font-bold px-10 py-5 rounded-2xl transition-all duration-300 hover:shadow-2xl flex items-center justify-center space-x-3 text-lg">
                <Shield className="w-6 h-6" />
                <span>Learn More</span>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;