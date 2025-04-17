'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiAnchor, FiSun, FiSunset, FiCoffee, FiMusic, FiCamera } from 'react-icons/fi';
import TripCard from '@/components/ui/TripCard';
import ImageGallery from '@/components/gallery/ImageGallery';

// Define trip data
const middayTrip = {
  imageUrl: "/images/barcosalvadorsmall.jpg",
  imageAlt: "Salvador Ibiza Midday Trip",
  title: "Day Trip",
  badgeText: "14:00 - 17:00",
  badgeBgColor: "bg-blue-500",
  features: [
    "Visit Cala Gració, Cala Salada & Punta Galera",
    "Swimming & snorkeling in crystal clear waters",
    "Unlimited drinks (beer, wine, cava, sangria, soft drinks)",
    "Fresh fruit & snacks included",
    "Paddleboarding, kayaking & snorkeling gear"
  ],
  price: "€80 / person",
  priceColor: "text-blue-600",
  ctaHref: "/boat-trips/day-trip#booking-widget",
  ctaBgColor: "bg-blue-600",
  ctaHoverBgColor: "hover:bg-blue-700",
  detailsHref: "/boat-trips/day-trip"
};

const sunsetTrip = {
  imageUrl: "/images/barco dron .jpg",
  imageAlt: "Salvador Ibiza Sunset Trip",
  title: "Sunset Trip",
  badgeText: "18:00 - 21:00",
  badgeBgColor: "bg-orange-500",
  features: [
    "Iconic sunset views near Es Vedrà",
    "Swimming in beautiful coves",
    "Unlimited drinks (beer, wine, cava, sangria, soft drinks)",
    "Light dinner / snacks included",
    "Paddleboarding, kayaking & snorkeling gear"
  ],
  price: "€80 / person",
  priceColor: "text-orange-600",
  ctaHref: "/boat-trips/sunset-trip#booking-widget",
  ctaBgColor: "bg-orange-500",
  ctaHoverBgColor: "hover:bg-orange-600",
  detailsHref: "/boat-trips/sunset-trip"
};

const includedFeatures = [
  {
    icon: <FiAnchor className="w-6 h-6 text-blue-600" />,
    title: "Expert Captain & Crew",
    description: "Professional service ensuring safety and local insights"
  },
  {
    icon: <FiCoffee className="w-6 h-6 text-blue-600" />,
    title: "All-Inclusive Service",
    description: "Unlimited drinks, snacks, and fresh fruit provided"
  },
  {
    icon: <FiMusic className="w-6 h-6 text-blue-600" />,
    title: "Premium Sound System",
    description: "Connect your device via Bluetooth for your perfect playlist"
  },
  {
    icon: <FiCamera className="w-6 h-6 text-blue-600" />,
    title: "Photo Opportunities",
    description: "Capture stunning moments against Ibiza's backdrop"
  }
];

const galleryImages = [
  {
    src: "/images/barco1.png",
    alt: "Salvador yacht sailing in crystal clear waters of Ibiza"
  },
  {
    src: "/images/barco2.png",
    alt: "Group enjoying their time on Salvador boat deck"
  },
  {
    src: "/images/barco3.png",
    alt: "Beautiful view of Ibiza's coastline from Salvador"
  },
  {
    src: "/images/barco4.png",
    alt: "Relaxing atmosphere on Salvador's deck"
  },
  {
    src: "/images/barco5.png",
    alt: "Salvador boat anchored in a beautiful cove"
  },
  {
    src: "/images/barco6.png",
    alt: "Magical sunset near Es Vedrà with Salvador"
  },
  {
    src: "/images/barcodesdedron.jpg",
    alt: "Drone shot of Salvador navigating Ibiza's waters"
  },
  {
    src: "/images/barco dron .jpg",
    alt: "Aerial view of Salvador boat in turquoise waters"
  }
];

export default function BoatTripsClientPage() {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-cyan-50 relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 15, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-tr from-orange-200 to-yellow-200 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -10, 0],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 18,
            delay: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/barcodesdedron.jpg"
            alt="Salvador Ibiza Boat Trips"
            fill
            priority
            className="object-cover object-center brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </motion.div>
        
        <motion.div
          className="relative z-10 container mx-auto px-4 text-center pt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.span 
            className="inline-block text-cyan-300 uppercase tracking-widest font-medium text-sm md:text-base border border-cyan-300/30 bg-cyan-900/20 backdrop-blur-sm px-3 py-1 rounded-full mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            All-Inclusive Experience
          </motion.span>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-5 drop-shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Choose Your Perfect<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
              Ibiza Adventure
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto opacity-95 drop-shadow-lg font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Experience the magic of Ibiza from the sea with our carefully designed excursions
          </motion.p>
          
          {/* Badges */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 md:gap-5 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <motion.div 
              className="flex items-center bg-black/40 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm md:text-base border border-white/10 shadow-lg"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.5)" }}
              transition={{ duration: 0.2 }}
            >
              <FiSun className="mr-2 text-cyan-300" />
              <span>Day Trip</span>
            </motion.div>
            <motion.div 
              className="flex items-center bg-black/40 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm md:text-base border border-white/10 shadow-lg"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.5)" }}
              transition={{ duration: 0.2 }}
            >
              <FiSunset className="mr-2 text-cyan-300" />
              <span>Sunset Trip</span>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
          <svg className="w-full h-16 md:h-24 fill-[#f8fafc]" viewBox="0 0 1440 74" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,37.1L48,34.4C96,31.7,192,26.2,288,31.7C384,37.1,480,53.4,576,55.2C672,57.1,768,44.4,864,37.1C960,29.9,1056,29.9,1152,31.7C1248,33.5,1344,37.1,1392,39L1440,40.8L1440,74L1392,74C1344,74,1248,74,1152,74C1056,74,960,74,864,74C768,74,672,74,576,74C480,74,384,74,288,74C192,74,96,74,48,74L0,74Z" />
          </svg>
        </div>
      </section>

      {/* Trip Options Section */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Choose Your Perfect Adventure
          </h2>
          <p className="text-lg text-gray-700">
            Our all-inclusive boat trips offer everything you need for a perfect day on the water
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <TripCard {...middayTrip} delay={0.1} />
          <TripCard {...sunsetTrip} delay={0.2} />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Capture the Magic
            </h2>
            <p className="text-lg text-gray-700">
              Take a glimpse into the unforgettable experiences that await you aboard Salvador
            </p>
          </motion.div>

          <ImageGallery images={galleryImages} className="max-w-6xl mx-auto" />
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              What&apos;s Included in Every Trip
            </h2>
            <p className="text-lg text-gray-700">
              We&apos;ve thought of everything so you can simply relax and enjoy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {includedFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section 
        className="relative py-20 bg-gradient-to-r from-blue-600 to-cyan-500 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#wave-pattern)" />
            <defs>
              <pattern id="wave-pattern" patternUnits="userSpaceOnUse" width="100" height="100" patternTransform="rotate(45)">
                <path d="M0,10 C30,10 30,30 0,30 C-30,30 -30,10 0,10 Z" fill="white" opacity="0.3" />
              </pattern>
            </defs>
          </svg>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create Unforgettable Memories?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Book your Salvador Ibiza boat trip today and experience the best day of your holiday
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/boat-trips/day-trip#booking-widget"
                className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-lg shadow-xl transition duration-300 text-lg hover:bg-opacity-95"
              >
                Book Your Trip Now
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
} 