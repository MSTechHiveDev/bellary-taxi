// Pricing data
export const pricing = {
  vehicleTypes: [
    {
      name: 'Sedan',
      description: 'Comfortable 4-seater car ideal for city rides',
      image: '/taxis/sedan.jpg',
      capacity: '4 passengers',
      rates: {
        local: '₹12/km',
        outstation: '₹10/km',
        airport: 'Fixed ₹500',
        minFare: '₹50',
      },
    },
    {
      name: 'SUV',
      description: 'Spacious 6-seater vehicle perfect for families',
      image: '/taxis/suv.jpg',
      capacity: '6 passengers',
      rates: {
        local: '₹15/km',
        outstation: '₹13/km',
        airport: 'Fixed ₹650',
        minFare: '₹70',
      },
    },
    {
      name: 'Tempo Traveler',
      description: 'Large vehicle for group travel and events',
      image: '/taxis/tempo.jpg',
      capacity: '12-16 passengers',
      rates: {
        local: '₹20/km',
        outstation: '₹18/km',
        airport: 'Fixed ₹800',
        minFare: '₹100',
      },
    },
  ],
  specialPackages: [
    {
      name: 'Hampi Day Trip',
      description: 'Complete day trip to Hampi with sightseeing',
      duration: '8-10 hours',
      price: '₹3500',
      includes: ['Pickup & drop', 'Sightseeing spots', 'Driver charges', 'Parking fees'],
    },
    {
      name: 'Airport Round Trip',
      description: 'Airport pickup and drop-off service',
      duration: 'As per flight',
      price: '₹1000',
      includes: ['Flight tracking', 'Meet & greet', 'Luggage assistance', 'On-time guarantee'],
    },
    {
      name: 'Wedding Package',
      description: 'Special wedding transportation service',
      duration: 'Custom timing',
      price: 'Custom Quote',
      includes: ['Decorative vehicle', 'Professional driver', 'Flexible timing', 'Group coordination'],
    },
  ],
};