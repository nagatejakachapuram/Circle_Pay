import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import PropertyModal from '../components/PropertyModal';
import { Property } from '../types/property';

const EstatesPage: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const properties: Property[] = [
    {
      id: '1',
      name: 'Manhattan Luxury Tower',
      location: 'New York, NY',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
      yield: 8.5,
      price: 1250,
      totalSupply: 10000,
      availableTokens: 2500,
      rentAmount: 15.50,
      rentSchedule: 'Monthly',
      managementFee: 2.5,
      description: 'Prime Manhattan real estate with high-end amenities and excellent rental demand.',
      amenities: ['24/7 Concierge', 'Rooftop Terrace', 'Fitness Center', 'Pool'],
      marketCap: 12500000
    },
    {
      id: '2',
      name: 'Miami Beach Resort',
      location: 'Miami, FL',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      yield: 9.2,
      price: 850,
      totalSupply: 15000,
      availableTokens: 7800,
      rentAmount: 12.75,
      rentSchedule: 'Monthly',
      managementFee: 3.0,
      description: 'Oceanfront resort property with vacation rental income potential.',
      amenities: ['Ocean View', 'Private Beach', 'Spa', 'Restaurant'],
      marketCap: 12750000
    },
    {
      id: '3',
      name: 'Austin Tech Hub',
      location: 'Austin, TX',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      yield: 7.8,
      price: 620,
      totalSupply: 8000,
      availableTokens: 1200,
      rentAmount: 8.90,
      rentSchedule: 'Monthly',
      managementFee: 2.0,
      description: 'Modern office building in the heart of Austin\'s tech district.',
      amenities: ['High-Speed Internet', 'Conference Rooms', 'Parking', 'Security'],
      marketCap: 4960000
    },
    {
      id: '4',
      name: 'Seattle Waterfront',
      location: 'Seattle, WA',
      image: 'https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=800',
      yield: 6.9,
      price: 980,
      totalSupply: 12000,
      availableTokens: 4500,
      rentAmount: 11.20,
      rentSchedule: 'Monthly',
      managementFee: 2.8,
      description: 'Waterfront commercial property with stunning views and premium tenants.',
      amenities: ['Water View', 'Modern Design', 'Transit Access', 'Restaurants'],
      marketCap: 11760000
    },
    {
      id: '5',
      name: 'Chicago Loop Office',
      location: 'Chicago, IL',
      image: 'https://images.pexels.com/photos/2471235/pexels-photo-2471235.jpeg?auto=compress&cs=tinysrgb&w=800',
      yield: 8.1,
      price: 750,
      totalSupply: 9500,
      availableTokens: 3200,
      rentAmount: 10.15,
      rentSchedule: 'Monthly',
      managementFee: 2.3,
      description: 'Historic office building in Chicago\'s financial district with stable tenancy.',
      amenities: ['Historic Charm', 'Renovated', 'Transit Hub', 'Retail Ground Floor'],
      marketCap: 7125000
    },
    {
      id: '6',
      name: 'LA Entertainment Complex',
      location: 'Los Angeles, CA',
      image: 'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=800',
      yield: 9.8,
      price: 1450,
      totalSupply: 18000,
      availableTokens: 8900,
      rentAmount: 18.25,
      rentSchedule: 'Monthly',
      managementFee: 3.2,
      description: 'Mixed-use entertainment complex in prime LA location with diverse revenue streams.',
      amenities: ['Entertainment Venues', 'Restaurants', 'Retail Spaces', 'Parking Structure'],
      marketCap: 26100000
    }
  ];

  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Available Properties
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover tokenized real estate opportunities. Each property is backed by 
            real assets and offers USDC-denominated rental income.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onClick={() => handlePropertyClick(property)}
            />
          ))}
        </div>
      </div>

      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default EstatesPage;