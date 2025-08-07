import React from 'react';
import { Shield, DollarSign, Zap, RefreshCw, Users, BarChart3 } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Security Tokenization',
      description: 'ERC-3643 compliant tokens with built-in regulatory compliance and permissioned transfers.',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      icon: DollarSign,
      title: 'USDC-Only Payments',
      description: 'All fees, rent, and purchases handled in USDC for price stability and transparency.',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: RefreshCw,
      title: 'Automated Rent Collection',
      description: 'Receive rental payments automatically in USDC without manual intervention.',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Zap,
      title: 'Gasless Transactions',
      description: 'Zero gas fees for all platform interactions through meta-transaction technology.',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: Users,
      title: 'KYC Compliance',
      description: 'Mandatory identity verification for all property buyers ensures regulatory compliance.',
      gradient: 'from-teal-500 to-cyan-600'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Track your portfolio performance, rental income, and market trends in real-time.',
      gradient: 'from-violet-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Platform Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of real estate investment with our comprehensive Web3 platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 bg-gray-50 hover:bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;