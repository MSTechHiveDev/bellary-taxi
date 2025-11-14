// Pricing related type definitions

export interface PricingInfo {
  vehicleTypes: VehicleType[];
  specialPackages: ServicePackage[];
}

export interface VehicleType {
  name: string;
  description: string;
  image: string;
  capacity: string;
  rates: {
    local: string;
    outstation: string;
    airport: string;
    minFare: string;
  };
}

export interface ServicePackage {
  name: string;
  description: string;
  duration: string;
  price: string;
  includes: string[];
}

export interface FareCalculation {
  distance: number;
  vehicleType: string;
  serviceType: 'local' | 'outstation' | 'airport';
  baseFare: number;
  perKmRate: number;
  totalFare: number;
}

export interface PricingBreakdown {
  baseFare: number;
  distanceCharge: number;
  waitingCharge: number;
  tollCharges: number;
  totalAmount: number;
}

export type VehicleCategory = 'sedan' | 'suv' | 'tempo';
export type ServiceType = 'local' | 'outstation' | 'airport' | 'special';