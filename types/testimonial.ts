// Testimonial related type definitions

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  isVisible?: boolean;
}

export interface RatingInfo {
  averageRating: number;
  totalReviews: number;
  ratingDistribution: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}

export interface TestimonialStats {
  totalTestimonials: number;
  averageRating: number;
  recentTestimonials: Testimonial[];
  topServices: {
    serviceName: string;
    count: number;
  }[];
}

export type RatingStars = 1 | 2 | 3 | 4 | 5;