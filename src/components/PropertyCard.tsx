import React from 'react';
import { MapPin, TrendingUp, Coins, Users, Star } from 'lucide-react';
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
      className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 cursor-pointer overflow-hidden border border-gray-100 hover:border-blue-200 relative"
    >
      {/* Hover Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Floating Badges */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm animate-pulse-slow">
            {property.yield}% APY
          </div>
          <div className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
            ${property.price} USDC
          </div>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span>4.8</span>
        </div>

        {/* Hover Action Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-xl shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            View Details
          </button>
        </div>
      </div>

      <div className="p-6 relative">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {property.name}
          </h3>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            {property.location}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-sm text-gray-600">Annual Yield</span>
            </div>
            <span className="font-semibold text-green-600 text-lg">{property.yield}%</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Coins className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-sm text-gray-600">Token Price</span>
            </div>
            <span className="font-semibold text-blue-600 text-lg">${property.price} USDC</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-purple-600" />
              </div>
              <span className="text-sm text-gray-600">Available</span>
            </div>
            <span className="font-semibold text-purple-600">
              {property.availableTokens.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
            <span>Ownership Progress</span>
            <span>{availabilityPercentage.toFixed(1)}% owned</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000 relative overflow-hidden"
              style={{ width: `${availabilityPercentage}%` }}
            >
              <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Monthly Rent Section */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
              <span className="text-sm text-gray-600">Monthly Rent</span>
            </div>
            <span className="font-bold text-gray-900 text-lg">${property.rentAmount} USDC</span>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
             style={{
               background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
               boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)'
             }}>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;