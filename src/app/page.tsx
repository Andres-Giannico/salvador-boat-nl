'use client';

import Link from 'next/link';
import { useState } from 'react';
import Hero from '@/components/Hero';
import TripCard from '@/components/ui/TripCard';
import BookingModal from '@/components/booking/BookingModal';
import { motion } from 'framer-motion';
import { FiAnchor, FiSun, FiClock, FiAward, FiMap, FiArrowRight } from 'react-icons/fi';

// --- Trip Data (Enhanced with subtle improvements) ---
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
  ctaHref: "/boat-trips/day-trip",
  ctaBgColor: "bg-blue-600",
  ctaHoverBgColor: "hover:bg-blue-700",
  detailsHref: "/boat-trips/day-trip",
  ctaText: "View Details"
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
  ctaHref: "/boat-trips/sunset-trip",
  ctaBgColor: "bg-orange-500",
  ctaHoverBgColor: "hover:bg-orange-600",
  detailsHref: "/boat-trips/sunset-trip",
  ctaText: "View Details"
};

const privateCharter = {
  imageUrl: "/images/aerial.jpeg",
  imageAlt: "Salvador Ibiza Private Charter",
  title: "Private Charter",
  badgeText: "CUSTOM",
  badgeBgColor: "bg-emerald-500",
  features: [
    "Exclusive boat use for your group",
    "Customizable route & schedule (4h / 8h)",
    "Skipper & watersports included",
    "Perfect for celebrations, families, corporate events"
  ],
  price: "From €1350",
  priceColor: "text-emerald-600",
  ctaHref: "/private-charter",
  ctaBgColor: "bg-emerald-500",
  ctaHoverBgColor: "hover:bg-emerald-600",
  detailsHref: "/private-charter",
  detailsText: "Inquire Now",
  isPrivate: true
};
// --- End Trip Data ---

// Animation variants (enhanced for more dramatic effects)
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
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

export default function HomePage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Function to open the modal
  const openBookingModal = () => setIsBookingModalOpen(true);

  return (
    <div className="overflow-hidden">
      <Hero />

      {/* Intro Section - Enhanced with gradient and animations */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="py-28 bg-gradient-to-b from-white via-blue-50/30 to-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-cyan-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/4"></div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-display font-bold mb-8 relative"
          >
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Welcome to Salvador Ibiza
            </span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Join us for unforgettable adventures on the crystal-clear waters of Ibiza. 
            Our all-inclusive boat trips offer the perfect way to explore this magical island.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center"
          >
            <div className="w-32 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-lg"></div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Trips Section - Using TripCard with enhanced styling */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-100/50 rounded-full blur-3xl"></div>
        
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-blue-600 font-medium mb-4 block uppercase tracking-wider"
            >
              OUR EXPERIENCES
            </motion.span>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900"
            >
              Choose your perfect experience
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Join us for a shared trip or book the boat just for your group.
            </motion.p>
          </motion.div>

          {/* Trip Cards Grid with enhanced animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
             {/* Midday Trip Card */}
             <TripCard {...middayTrip} delay={0.1} />

             {/* Sunset Trip Card */}
             <TripCard {...sunsetTrip} delay={0.25} />

             {/* Private Charter Card - With booking modal functionality */}
             <motion.div variants={fadeInUp} transition={{ delay: 0.4 }}>
               <TripCard 
                 {...privateCharter} 
               /> 
                {/* Custom Buttons for Private Charter */}
               <div className="bg-white rounded-b-2xl shadow-lg px-6 pb-6 pt-4 -mt-2">
                 <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
                    <span className="text-emerald-600 text-2xl font-bold">{privateCharter.price}</span>
                    <div className="flex gap-3">
                      <Link
                        href={privateCharter.detailsHref} 
                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-gray-700 text-sm hover:bg-gray-100 transition-all"
                      >
                        <FiClock className="w-4 h-4" />
                        Inquire Now
                      </Link>
                      <button
                        onClick={openBookingModal}
                        className="flex items-center gap-2 px-6 py-2 bg-emerald-500 rounded-full text-white font-medium hover:bg-emerald-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                      >
                        Book Now
                        <FiArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                 </div>
               </div>
             </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us Section - Completely Redesigned */}
      <motion.section 
        className="py-28 bg-white relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-bl-full opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-50 to-cyan-50 rounded-tr-full opacity-70"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-blue-600 font-medium mb-2 block uppercase tracking-wider"
            >
              THE SALVADOR DIFFERENCE
            </motion.span>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900"
            >
              Why Choose Salvador Ibiza
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Experience the difference with our premium boat excursions
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <FiAnchor className="w-8 h-8" />, 
                color: "from-blue-400 to-blue-600",
                title: "All-Inclusive Experience", 
                text: "Drinks, snacks, paddleboards, snorkeling gear - everything's included for your enjoyment." 
              },
              { 
                icon: <FiSun className="w-8 h-8" />, 
                color: "from-amber-400 to-orange-600",
                title: "Perfect Timing Options", 
                text: "Choose between midday sun adventures or magical sunset trips for the ideal experience." 
              },
              { 
                icon: <FiAward className="w-8 h-8" />, 
                color: "from-emerald-400 to-green-600",
                title: "Expert Local Crew", 
                text: "Professional, friendly, and multilingual staff dedicated to your safety and enjoyment." 
              },
              { 
                icon: <FiMap className="w-8 h-8" />, 
                color: "from-purple-400 to-indigo-600",
                title: "Secret Island Spots", 
                text: "Discover hidden coves and exclusive locations that only locals know about." 
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                variants={fadeInRight}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className={`w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action - Enhanced with dynamic animations */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="py-24 bg-gradient-to-r from-blue-600 to-cyan-500 text-white relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[url('/images/wave-pattern.svg')] bg-repeat opacity-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/10 to-transparent"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-white/10 blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-white/10 blur-xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div 
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-display font-bold mb-8"
            >
              Ready for an Unforgettable Experience?
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl max-w-3xl mx-auto mb-12 text-white/90"
            >
              Book your Salvador Ibiza boat trip today and create memories that will last a lifetime.
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              whileHover={pulseAnimation}
            >
              <Link 
                href="/boat-trips"
                className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl py-4 px-10 rounded-full font-semibold text-lg inline-flex items-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                View Our Trips
                <FiArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Booking Modal Instance */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        productId={3} // ID for Private Charter
      />
    </div>
  );
}
