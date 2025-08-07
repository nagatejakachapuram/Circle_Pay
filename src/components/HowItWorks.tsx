import React from 'react';
import { ArrowRight, UserCheck, Coins, Home, TrendingUp } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: UserCheck,
      title: 'Complete KYC',
      description: 'Verify your identity to comply with securities regulations',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      icon: Coins,
      title: 'Fund with USDC',
      description: 'Deposit USDC to your wallet for property investments',
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: Home,
      title: 'Buy Property Tokens',
      description: 'Purchase ERC-3643 tokens representing real estate shares',
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: TrendingUp,
      title: 'Earn Rental Income',
      description: 'Receive automated USDC payments from property rent',
      color: 'from-orange-600 to-red-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our ERC-3643 compliant platform makes real estate investment simple and secure
          </p>
        </div>

        <div className="relative">
          {/* Flow line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-green-600 via-purple-600 to-orange-600"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto relative z-10`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-500 mb-2">STEP {index + 1}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 z-20">
                    <ArrowRight className="w-8 h-8 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">ERC-3643 Security Token Standard</h3>
          <p className="text-gray-600 text-center max-w-4xl mx-auto">
            Built on the ERC-3643 T-REX protocol, our platform ensures full regulatory compliance with 
            permissioned transfers, identity verification, and automated compliance rules. All token 
            holders are KYC-verified and eligible for ownership under securities regulations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;