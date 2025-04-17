'use client';

import Link from 'next/link';
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

const privateCharter = {
  imageUrl: "/images/barcoprivate.png",
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
  ctaHref: "/private-charter#turbnb-booking-3",
  ctaBgColor: "bg-teal-500",
  ctaHoverBgColor: "hover:bg-teal-600",
  detailsHref: "/private-charter",
  detailsText: "Inquire Now"
};
// --- End Trip Data ---

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    }
  }
};

const pulseAnimation = {
  scale: [1, 1.05, 1] as [number, number, number],
  transition: { 
    duration: 2, 
    repeat: Infinity,
    repeatType: "reverse" as const
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br from-sky-100 to-blue-200 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-sky-100 to-sky-200 rounded-full opacity-40 blur-3xl"></div>
      </div>
      
      <Hero />

      {/* Intro Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="py-20 bg-white relative z-10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">DISCOVER PARADISE</span>
          <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Salvador Ibiza</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Join us for unforgettable adventures on the crystal-clear waters of Ibiza. 
            Our all-inclusive boat trips offer the perfect way to explore this magical island.
          </p>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
          </div>
        </div>
      </motion.section>

      {/* Featured Trips Section - Using TripCard */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative z-10">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">OUR SERVICES</span>
            <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
              OUR MOST <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">POPULAR EXPERIENCES</span>
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
        className="py-24 bg-white relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">WHY US</span>
            <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Salvador Ibiza</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Experience the difference with our premium boat excursions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <motion.div 
              variants={fadeInRight}
              whileHover={pulseAnimation}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="bg-blue-50 p-3 rounded-lg inline-block mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">All-Inclusive</h3>
              <p className="text-gray-600">
                Drinks, snacks, paddleboards, snorkeling gear - all included.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              variants={fadeInRight}
              custom={1}
              whileHover={pulseAnimation}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="bg-blue-50 p-3 rounded-lg inline-block mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Perfect Timing</h3>
              <p className="text-gray-600">
                Midday sun or magical sunset trips designed for the best experience.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              variants={fadeInRight}
              custom={2}
              whileHover={pulseAnimation}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="bg-blue-50 p-3 rounded-lg inline-block mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Expert Crew</h3>
              <p className="text-gray-600">
                Professional, friendly, and multilingual staff to ensure your enjoyment.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div 
              variants={fadeInRight}
              custom={3}
              whileHover={pulseAnimation}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="bg-blue-50 p-3 rounded-lg inline-block mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m-6 3l6-3m0 0l6 3m-6-3V10" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Secret Spots</h3>
              <p className="text-gray-600">
                Visit hidden coves and exclusive locations away from the crowds.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 relative z-10"
      >
        <div className="container mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-sky-500 rounded-3xl p-8 md:p-12 shadow-xl">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute -top-24 -right-24 w-80 h-80 bg-white rounded-full opacity-10"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-10 transform translate-x-1/2 translate-y-1/2"></div>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left md:max-w-xl mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready for an Unforgettable Experience?
                </h2>
                <p className="text-blue-100 text-lg">
                  Book your Salvador Ibiza boat trip today and create memories that will last a lifetime.
                </p>
              </div>
              
              <Link 
                href="/boat-trips"
                className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
              >
                Reserve Your Spot Now
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
