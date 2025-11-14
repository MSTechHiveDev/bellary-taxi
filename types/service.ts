// Service related type definitions

export interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  image?: string;
  price?: string;
  duration?: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  image?: string;
  price?: string;
  duration?: string;
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

export type ServiceCategory = 
  | 'local' 
  | 'outstation' 
  | 'airport' 
  | 'wedding' 
  | 'events';

export type VehicleCategory = 
  | 'sedan' 
  | 'suv' 
  | 'tempo';