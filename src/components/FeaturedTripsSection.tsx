'use client';

import { motion } from 'framer-motion';
import TripCard from './ui/TripCard';

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: delay,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1]
    }
  }
});

// Trip Data Types
interface TripData {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  isPopular: boolean;
  badgeText: string;
  badgeBgColor: string;
  features: string[];
  price: string;
  priceSubtext?: string;
  priceColor: string;
  ctaHref: string;
  ctaBgColor: string;
  ctaHoverBgColor: string;
  detailsHref: string;
  detailsText?: string;
  bookingHref: string;
}

const tripData = {
  middayTrip: {
    imageUrl: "/images/boat/aereabarco1.jpg",
    imageAlt: "Salvador Ibiza Day Trip - Premium Sea Adventure",
    title: "Daytime Experience",
    description: "Sun, sea, and adventure await.",
    isPopular: true,
    badgeText: "2:00 PM - 5:00 PM",
    badgeBgColor: "bg-blue-700",
    features: [
      "15 Premium Paddle Boards & 2 Kayaks",
      "Snorkeling Equipment",
      "Swimming in Crystal Clear Waters",
      "Premium Open Bar & Fresh Sangria",
      "Spanish Tapas & Fresh Fruit",
      "Premium Sound System"
    ],
    price: "€80 per adult",
    priceSubtext: "Children 6-12: €45 | Under 6: Complimentary",
    priceColor: "text-blue-600",
    ctaHref: "/boat-trips/day-trip#booking-widget",
    ctaBgColor: "bg-blue-600",
    ctaHoverBgColor: "hover:bg-blue-700",
    detailsHref: "/boat-trips/day-trip",
    detailsText: "Explore Details"
  },
  sunsetTrip: {
    imageUrl: "/images/sunset.png",
    imageAlt: "Salvador Ibiza Sunset Trip - Sunset & Sea Adventure",
    title: "Sunset Voyage",
    description: "Experience Ibiza's iconic sunset from the sea.",
    badgeText: "6:30 PM - 9:30 PM",
    badgeBgColor: "bg-orange-700",
    features: [
      "Sunset Swimming at Hidden Coves",
      "15 Paddle Boards & 2 Kayaks",
      "Snorkeling Equipment",
      "Premium Bar & Unlimited Cava",
      "Spanish Tapas Selection",
      "Sunset at Café Mambo"
    ],
    price: "€80 per adult",
    priceSubtext: "Children 6-12: €45 | Under 6: Complimentary",
    priceColor: "text-orange-700",
    ctaHref: "/boat-trips/sunset-trip#booking-widget",
    ctaBgColor: "bg-orange-700",
    ctaHoverBgColor: "hover:bg-orange-800",
    detailsHref: "/boat-trips/sunset-trip",
    detailsText: "Explore Details"
  },
  privateCharter: {
    imageUrl: "/images/boat/aereabarco2.webp",
    imageAlt: "Salvador Ibiza Private Charter - Exclusive Sea Experience",
    title: "Private Experience",
    description: "Your personalized maritime adventure.",
    badgeText: "4 Hours",
    badgeBgColor: "bg-teal-700",
    features: [
      "Full Water Sports Equipment",
      "Private Swimming Spots",
      "Customized Route & Activities",
      "Premium Open Bar",
      "Personalized Catering Options",
      "Up to 35 Guests"
    ],
    price: "Starting at €1350",
    priceSubtext: "Additional guests: €30 per person",
    priceColor: "text-teal-700",
    ctaHref: "/private-charter#turbnb-booking-3",
    ctaBgColor: "bg-teal-700",
    ctaHoverBgColor: "hover:bg-teal-800",
    detailsHref: "/private-charter",
    detailsText: "Request Information"
  }
};

export default function FeaturedTripsSection() {
  return (
    <section className="py-8 bg-gradient-to-b from-white via-blue-50/10 to-transparent relative z-10">
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          <TripCard 
            {...tripData.middayTrip} 
            delay={0.1} 
            isPopular={tripData.middayTrip.isPopular} 
            description={tripData.middayTrip.description}
          />
          <TripCard 
            {...tripData.sunsetTrip} 
            delay={0.2} 
            description={tripData.sunsetTrip.description}
          />
          <TripCard 
            {...tripData.privateCharter} 
            delay={0.3} 
            description={tripData.privateCharter.description}
          />
        </div>
      </motion.div>
    </section>
  );
} 