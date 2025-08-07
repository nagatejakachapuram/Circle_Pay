export interface Property {
  id: string;
  name: string;
  location: string;
  image: string;
  yield: number;
  price: number;
  totalSupply: number;
  availableTokens: number;
  rentAmount: number;
  rentSchedule: string;
  managementFee: number;
  description: string;
  amenities: string[];
  marketCap: number;
}