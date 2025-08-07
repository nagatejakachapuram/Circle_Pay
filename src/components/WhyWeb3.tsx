import React from 'react';
import { Globe, Lock, TrendingUp, Users } from 'lucide-react';

const WhyWeb3: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Real Estate + Web3?
          </h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Blockchain technology transforms traditional real estate investment with unprecedented 
            transparency, accessibility, and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Global Accessibility</h3>
                <p className="text-indigo-200">
                  Invest in premium real estate from anywhere in the world, breaking down geographical barriers.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Transparent & Immutable</h3>
                <p className="text-indigo-200">
                  All transactions, ownership records, and rental payments are permanently recorded on-chain.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Fractional Ownership</h3>
                <p className="text-indigo-200">
                  Start with any amount - no need for massive capital requirements traditional real estate demands.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Automated Management</h3>
                <p className="text-indigo-200">
                  Smart contracts handle rent collection, fee distribution, and compliance automatically.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:text-center">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Traditional vs Circle Pay</h3>
              
              <div className="space-y-6 text-left">
                <div className="flex justify-between items-center">
                  <span className="text-indigo-200">Minimum Investment</span>
                  <div className="text-right">
                    <div className="text-red-300 line-through text-sm">$100,000+</div>
                    <div className="text-green-300 font-semibold">$10+</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-indigo-200">Transaction Fees</span>
                  <div className="text-right">
                    <div className="text-red-300 line-through text-sm">3-8%</div>
                    <div className="text-green-300 font-semibold">$0</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-indigo-200">Settlement Time</span>
                  <div className="text-right">
                    <div className="text-red-300 line-through text-sm">30-90 days</div>
                    <div className="text-green-300 font-semibold">Instant</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-indigo-200">Global Access</span>
                  <div className="text-right">
                    <div className="text-red-300 text-sm">Limited</div>
                    <div className="text-green-300 font-semibold">24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeb3;