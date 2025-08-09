import React from 'react';
import { Wallet, LogOut, Home, Building2 } from 'lucide-react';

interface HeaderProps {
  walletAddress: string;
  isWalletConnected: boolean;
  onConnect: () => void;
  onDisconnect: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  walletAddress, 
  isWalletConnected, 
  onConnect, 
  onDisconnect, 
  currentPage, 
  onNavigate 
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Circle Pay
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('landing')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all ${
                currentPage === 'landing' 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </button>
            <button
              onClick={() => onNavigate('estates')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all ${
                currentPage === 'estates' 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <Building2 className="w-5 h-5" />
              <span>Estates</span>
            </button>
          </nav>

          {/* Wallet Section */}
          <div className="flex items-center space-x-4">
            {isWalletConnected ? (
              <>
                <div className="hidden sm:flex items-center space-x-3 bg-gray-50 px-4 py-2 rounded-xl">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-mono text-gray-700">{walletAddress}</span>
                </div>
                <button
                  onClick={onDisconnect}
                  className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-xl transition-all"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Disconnect</span>
                </button>
              </>
            ) : (
              <button
                onClick={onConnect}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Wallet className="w-5 h-5" />
                <span>Connect Wallet</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;