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
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
});

const tripData = {
  middayTrip: {
    imageUrl: "/images/optimized/salvador-ibiza-boat-from-above.webp",
    imageAlt: "Salvador Ibiza dagtocht op zee",
    title: "Dagervaring",
    description: "Zon, zee en avontuur.",
    isPopular: true,
    badgeText: "14:00 - 17:00",
    badgeBgColor: "bg-blue-700",
    features: [
      "15 premium paddleboards & 2 kajaks",
      "Snorkelset",
      "Zwemmen in kraakhelder water",
      "Premium open bar & verse sangria",
      "Spaanse tapas & vers fruit"
    ],
    price: "€80 per volwassene",
    priceSubtext: "Kinderen 6-12: €45 | Onder 6: gratis",
    priceColor: "text-blue-600",
    ctaHref: "/boat-trips/day-trip#booking-widget",
    ctaBgColor: "bg-blue-600",
    ctaHoverBgColor: "hover:bg-blue-700",
    detailsHref: "/boat-trips/day-trip",
    detailsText: "Meer over deze trip"
  },
  sunsetTrip: {
    imageUrl: "/images/sunset.png",
    imageAlt: "Salvador Ibiza zonsondergang op zee",
    title: "Zonsondergang",
    description: "De iconische Ibiza-zonsondergang vanaf zee.",
    badgeText: "18:30 - 21:30",
    badgeBgColor: "bg-orange-700",
    features: [
      "Zwemmen bij zonsondergang in verborgen cala’s",
      "15 paddleboards & 2 kajaks",
      "Snorkelset",
      "Premium bar & cava",
      "Tapas & uitzicht richting Café Mambo"
    ],
    price: "€80 per volwassene",
    priceSubtext: "Kinderen 6-12: €45 | Onder 6: gratis",
    priceColor: "text-orange-700",
    ctaHref: "/boat-trips/sunset-trip#booking-widget",
    ctaBgColor: "bg-orange-700",
    ctaHoverBgColor: "hover:bg-orange-800",
    detailsHref: "/boat-trips/sunset-trip",
    detailsText: "Meer over deze trip"
  },
  privateCharter: {
    imageUrl: "/images/optimized/aereabarco2.webp",
    imageAlt: "Salvador Ibiza privé charter",
    title: "Privé ervaring",
    description: "Jouw eigen avontuur op maat.",
    badgeText: "4 uur",
    badgeBgColor: "bg-teal-700",
    features: [
      "Alle watersportuitrusting",
      "Privé zwemplekken",
      "Route en activiteiten op maat",
      "Premium open bar",
      "Catering naar wens",
      "Tot 35 gasten"
    ],
    price: "Vanaf €1350",
    priceSubtext: "Extra gast: €30 p.p.",
    priceColor: "text-teal-700",
    ctaHref: "/private-boat-trips#turbnb-booking-3",
    ctaBgColor: "bg-teal-700",
    ctaHoverBgColor: "hover:bg-teal-800",
    detailsHref: "/private-boat-trips",
    detailsText: "Meer informatie"
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
            imageUnoptimized
          />
        </div>
      </motion.div>
    </section>
  );
} 