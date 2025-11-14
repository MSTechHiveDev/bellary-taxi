// Application constants
export const APP_CONFIG = {
  name: 'Best Bellary Taxi Cabs',
  description: 'Your trusted partner for safe and reliable taxi services in Bellary',
  phone: '+91 9876543210',
  email: 'info@bestbellarytaxi.com',
  address: 'Bellary, Karnataka, India',
  workingHours: {
    weekdays: '24/7',
    saturday: '24/7',
    sunday: '24/7',
  },
  socialMedia: {
    facebook: 'https://facebook.com/bestbellarytaxi',
    twitter: 'https://twitter.com/bestbellarytaxi',
    instagram: 'https://instagram.com/bestbellarytaxi',
  },
} as const;

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  PRICING: '/pricing',
  CONTACT: '/contact',
  BOOKINGS: '/bookings',
} as const;

export const VEHICLE_TYPES = {
  SEDAN: 'sedan',
  SUV: 'suv',
  TEMPO: 'tempo',
} as const;

export const BOOKING_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const;