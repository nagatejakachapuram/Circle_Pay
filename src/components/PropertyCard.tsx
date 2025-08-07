import React from 'react';
import { MapPin, TrendingUp, Coins, Users } from 'lucide-react';
import { Property } from '../types/property';

interface PropertyCardProps {
  property: Property;
  onClick: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onClick }) => {
  const availabilityPercentage = ((property.totalSupply - property.availableTokens) / property.totalSupply) * 100;

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100"
    >
      <div className="relative">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {property.yield}% APY
        </div>
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
          ${property.price} USDC
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{property.name}</h3>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            {property.location}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-sm text-gray-600">Annual Yield</span>
            </div>
            <span className="font-semibold text-green-600">{property.yield}%</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Coins className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-gray-600">Token Price</span>
            </div>
            <span className="font-semibold text-blue-600">${property.price} USDC</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-purple-600" />
              <span className="text-sm text-gray-600">Available</span>
            </div>
            <span className="font-semibold text-purple-600">
              {property.availableTokens.toLocaleString()} tokens
            </span>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
            <span>Ownership</span>
            <span>{availabilityPercentage.toFixed(1)}% owned</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${availabilityPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Monthly Rent</span>
            <span className="font-semibold text-gray-900">${property.rentAmount} USDC</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;