'use client';

import Link from 'next/link';
// Removed unused Image import
import Hero from '@/components/Hero';
import TripCard from '@/components/ui/TripCard';
import { motion } from 'framer-motion';

// --- Trip Data (Consider moving to a central file/API later) ---
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
  ctaHref: "/contact", 
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
  ctaHref: "/contact",
  ctaBgColor: "bg-orange-500",
  ctaHoverBgColor: "hover:bg-orange-600",
  detailsHref: "/boat-trips/sunset-trip"
};

const privateCharter = {
  imageUrl: "/images/salvador_yacht.jpg",
  imageAlt: "Salvador Ibiza Private Charter",
  title: "Private Charter",
  badgeText: "CUSTOM",
  badgeBgColor: "bg-teal-500",
  features: [
    "Exclusive boat use for your group",
    "Customizable route & schedule (4h / 8h)",
    "Skipper & watersports included",
    "Perfect for celebrations, families, corporate events"
  ],
  price: "From €1350",
  priceColor: "text-teal-600",
  ctaHref: "/contact",
  ctaBgColor: "bg-teal-500",
  ctaHoverBgColor: "hover:bg-teal-600",
  detailsHref: "/private-charter",
  detailsText: "Inquire Now"
};
// --- End Trip Data ---

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15 // Slightly faster stagger
    }
  }
};

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Hero />

      {/* Intro Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
            Welcome to Salvador Ibiza
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Join us for unforgettable adventures on the crystal-clear waters of Ibiza. 
            Our all-inclusive boat trips offer the perfect way to explore this magical island.
          </p>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </motion.section>

      {/* Featured Trips Section - Using TripCard */}
      <section className="py-20 bg-gray-50">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
              OUR MOST POPULAR EXPERIENCES
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Choose from our highly-rated shared excursions or book the boat just for your group.
            </p>
          </motion.div>

          {/* Use TripCard component for trips */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
             <TripCard {...middayTrip} delay={0.1} />
             <TripCard {...sunsetTrip} delay={0.25} />
             <TripCard {...privateCharter} delay={0.4} />
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <motion.section 
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
              Why Choose Salvador Ibiza
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Experience the difference with our premium boat excursions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <motion.div variants={fadeInUp} className="text-center p-6">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">All-Inclusive</h3>
              <p className="text-gray-700 text-sm">
                Drinks, snacks, paddleboards, snorkeling gear - all included.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div variants={fadeInUp} className="text-center p-6">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Perfect Timing</h3>
              <p className="text-gray-700 text-sm">
                Midday sun or magical sunset trips designed for the best experience.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={fadeInUp} className="text-center p-6">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Crew</h3>
              <p className="text-gray-700 text-sm">
                Professional, friendly, and multilingual staff to ensure your enjoyment.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div variants={fadeInUp} className="text-center p-6">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                 <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m-6 3l6-3m0 0l6 3m-6-3V10" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Secret Spots</h3>
              <p className="text-gray-700 text-sm">
                Visit hidden coves and exclusive locations away from the crowds.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-8">Ready for an Unforgettable Experience?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-white/90">
            Book your Salvador Ibiza boat trip today and create memories that will last a lifetime.
          </p>
          <Link href="/contact"
             className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl py-3 px-8 rounded-full font-semibold text-lg inline-flex items-center transition-all duration-300 transform hover:scale-105"
          >
            Reserve Your Spot Now
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
