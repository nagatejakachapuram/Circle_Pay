import React, { useState } from 'react';
import { X, MapPin, TrendingUp, Coins, Calendar, Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import { Property } from '../types/property';

interface PropertyModalProps {
  property: Property;
  isOpen: boolean;
  onClose: () => void;
}

const PropertyModal: React.FC<PropertyModalProps> = ({ property, isOpen, onClose }) => {
  const [isKYCVerified] = useState(false); // Simulate KYC status
  const [autoRentEnabled, setAutoRentEnabled] = useState(false);
  const [purchaseAmount, setPurchaseAmount] = useState(10);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const totalCost = purchaseAmount * property.price;
  const monthlyRentIncome = purchaseAmount * property.rentAmount;
  const annualRentIncome = monthlyRentIncome * 12;

  const handlePurchase = async () => {
    if (!isKYCVerified) {
      alert('KYC verification required to purchase property tokens.');
      return;
    }

    setIsProcessing(true);
    // Simulate transaction processing
    setTimeout(() => {
      setIsProcessing(false);
      alert('Purchase successful! Tokens added to your wallet.');
      onClose();
    }, 2000);
  };

  const handlePayRent = async () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert('Rent payment successful!');
    }, 1500);
  };

  const handlePayFees = async () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert('Management fees paid successfully!');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-64 object-cover rounded-t-3xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
          <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold">
            {property.yield}% APY
          </div>
        </div>

        <div className="p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{property.name}</h2>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2" />
              {property.location}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Property Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Property Details</h3>
                <p className="text-gray-600 mb-4">{property.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <Coins className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-600">Token Price</span>
                    </div>
                    <span className="text-lg font-bold text-blue-600">${property.price} USDC</span>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-600">Annual Yield</span>
                    </div>
                    <span className="text-lg font-bold text-green-600">{property.yield}%</span>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-4 h-4 text-purple-600" />
                      <span className="text-sm text-gray-600">Rent Schedule</span>
                    </div>
                    <span className="text-lg font-bold text-purple-600">{property.rentSchedule}</span>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="w-4 h-4 text-orange-600" />
                      <span className="text-sm text-gray-600">Mgmt Fee</span>
                    </div>
                    <span className="text-lg font-bold text-orange-600">{property.managementFee}%</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Amenities</h4>
                <div className="grid grid-cols-2 gap-2">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Purchase Section */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Purchase Tokens</h3>
                
                {!isKYCVerified && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      <span className="text-yellow-800 font-medium">KYC Verification Required</span>
                    </div>
                    <p className="text-yellow-700 text-sm mt-1">
                      Complete identity verification to purchase property tokens.
                    </p>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Tokens
                    </label>
                    <input
                      type="number"
                      value={purchaseAmount}
                      onChange={(e) => setPurchaseAmount(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      min="1"
                      max={property.availableTokens}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Available: {property.availableTokens.toLocaleString()} tokens
                    </p>
                  </div>

                  <div className="bg-white/60 p-4 rounded-xl space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Total Cost:</span>
                      <span className="font-semibold">${totalCost.toLocaleString()} USDC</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Monthly Rent Income:</span>
                      <span className="font-semibold text-green-600">${monthlyRentIncome.toFixed(2)} USDC</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Annual Rent Income:</span>
                      <span className="font-semibold text-green-600">${annualRentIncome.toFixed(2)} USDC</span>
                    </div>
                  </div>

                  <button
                    onClick={handlePurchase}
                    disabled={!isKYCVerified || isProcessing}
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all ${
                      isKYCVerified && !isProcessing
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {isProcessing ? 'Processing...' : 'Purchase with USDC'}
                  </button>
                </div>
              </div>

              {/* Rent & Fees Section */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Rent & Fees</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">Automated Rent Collection</p>
                      <p className="text-sm text-gray-600">Receive rent automatically in USDC</p>
                    </div>
                    <button
                      onClick={() => setAutoRentEnabled(!autoRentEnabled)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        autoRentEnabled ? 'bg-green-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          autoRentEnabled ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={handlePayRent}
                      disabled={isProcessing}
                      className="bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl font-medium transition-colors disabled:opacity-50"
                    >
                      Pay Rent
                    </button>
                    <button
                      onClick={handlePayFees}
                      disabled={isProcessing}
                      className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-xl font-medium transition-colors disabled:opacity-50"
                    >
                      Pay Management Fee
                    </button>
                  </div>

                  <div className="text-xs text-gray-500 text-center">
                    All payments processed gaslessly via Circle CCTP v2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;