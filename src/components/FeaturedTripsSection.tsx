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
    imageUrl: "/images/barco1.png",
    imageAlt: "Salvador Ibiza Day Trip - Crystal Clear Waters",
    title: "Day Trip",
    badgeText: "13:00 - 16:30",
    badgeBgColor: "bg-blue-500",
    features: [
      "Explore Cala Gració & Cala Salada",
      "Premium open bar & fresh sangria",
      "15 paddle boards & 2 kayaks",
      "Complete snorkeling equipment",
      "Fresh fruit & snacks included",
      "Optional Onboard Photographer (purchase photos afterwards)"
    ],
    price: "€80 adults",
    priceSubtext: "€45 children (4-12 years)",
    priceColor: "text-blue-600",
    ctaHref: "/boat-trips/day-trip#booking-widget",
    ctaBgColor: "bg-blue-600",
    ctaHoverBgColor: "hover:bg-blue-700",
    detailsHref: "/boat-trips/day-trip",
    detailsText: "Learn More"
  },
  sunsetTrip: {
    imageUrl: "/images/sunset.png",
    imageAlt: "Salvador Ibiza Sunset Trip",
    title: "Sunset Trip",
    badgeText: "18:30 - 21:30",
    badgeBgColor: "bg-orange-500",
    features: [
      "Sunset trip to best coves",
      "15 paddle boards & 2 kayaks",
      "Premium open bar included",
      "Light dinner & snacks served",
      "Complete snorkeling equipment",
      "Optional Onboard Photographer (purchase photos afterwards)"
    ],
    price: "€80 adults",
    priceSubtext: "€45 children (4-12 years)",
    priceColor: "text-orange-600",
    ctaHref: "/boat-trips/sunset-trip#booking-widget",
    ctaBgColor: "bg-orange-500",
    ctaHoverBgColor: "hover:bg-orange-600",
    detailsHref: "/boat-trips/sunset-trip",
    detailsText: "Learn More"
  },
  privateCharter: {
    imageUrl: "/images/barcoprivate.png",
    imageAlt: "Salvador Ibiza Private Charter",
    title: "Private Charter",
    badgeText: "4 HOURS",
    badgeBgColor: "bg-teal-500",
    features: [
      "Exclusive boat for your group",
      "15 paddle boards & 2 kayaks",
      "Premium drinks included",
      "Snorkeling equipment for all",
      "Capacity up to 35 people"
    ],
    price: "From €1350",
    priceSubtext: "+€30 per extra person",
    priceColor: "text-teal-600",
    ctaHref: "/private-charter#turbnb-booking-3",
    ctaBgColor: "bg-teal-500",
    ctaHoverBgColor: "hover:bg-teal-600",
    detailsHref: "/private-charter",
    detailsText: "Inquire Now"
  }
};

export default function FeaturedTripsSection() {
  return (
    <section className="py-4 bg-gradient-to-b from-white to-blue-50 relative z-10">
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          <TripCard {...tripData.middayTrip} delay={0.1} />
          <TripCard {...tripData.sunsetTrip} delay={0.2} />
          <TripCard {...tripData.privateCharter} delay={0.3} />
        </div>
      </motion.div>
    </section>
  );
} 