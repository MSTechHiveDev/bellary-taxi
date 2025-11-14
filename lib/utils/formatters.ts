// Formatter utilities for the application

/**
 * Formats a price string with currency symbol
 */
export const formatPrice = (price: string | number): string => {
  const numericPrice = typeof price === 'number' ? price.toFixed(2) : price;
  return `₹${numericPrice}`;
};

/**
 * Formats a date string to Indian locale format
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Formats phone number for display
 */
export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Format as Indian mobile number
  if (cleaned.length === 10) {
    return `+91 ${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  }
  
  return phone; // Return original if not 10 digits
};

/**
 * Calculates fare based on distance and rate
 */
export const calculateFare = (distance: number, ratePerKm: number): number => {
  return distance * ratePerKm;
};

/**
 * Formats time duration
 */
export const formatDuration = (hours: number, minutes?: number): string => {
  if (minutes === undefined) {
    return `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
  }
  
  const durationStr = [];
  
  if (hours > 0) {
    durationStr.push(`${hours} ${hours === 1 ? 'hour' : 'hours'}`);
  }
  
  if (minutes > 0) {
    durationStr.push(`${minutes} ${minutes === 1 ? 'min' : 'mins'}`);
  }
  
  return durationStr.join(' ');
};

/**
 * Capitalizes first letter of each word
 */
export const capitalizeWords = (text: string): string => {
  return text.replace(/\b\w/g, char => char.toUpperCase());
};

/**
 * Truncates text to specified length with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
};

/**
 * Generates a random booking reference
 */
export const generateBookingReference = (): string => {
  const prefix = 'BBT';
  const randomNum = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  return `${prefix}${randomNum}`;
};

/**
 * Formats rating display
 */
export const formatRating = (rating: number): string => {
  return `${rating.toFixed(1)} ★`;
};

/**
 * Validates email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates phone number format
 */
export const isValidPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^[+]?[\d\s-()]{10,}$/;
  return phoneRegex.test(phone);
};