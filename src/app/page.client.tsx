'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiAnchor, FiSun, FiStar, FiHeart, FiArrowRight, FiCheck, FiClock } from 'react-icons/fi';
import BookingModal from '@/components/booking/BookingModal';

const experiences = [
  {
    icon: <FiSun className="w-6 h-6" />,
    title: "Day Trip",
    description: "Explore Ibiza's stunning coastline",
    features: [
      "Visit to Cala Bassa & Cala Conta",
      "Drinks included",
      "Swimming & snorkeling"
    ],
    link: "/boat-trips",
    image: "/images/optimized/salvador-ibiza-private-charter-boat.webp",
    price: "From €129"
  },
  {
    icon: <FiStar className="w-6 h-6" />,
    title: "Sunset Trip",
    description: "Experience magical Mediterranean sunsets",
    features: [
      "Sunset at Es Vedrà",
      "Drinks included",
      "Swimming & snorkeling"
    ],
    link: "/boat-trips",
    image: "/images/boat-2.jpeg",
    price: "From €149"
  },
  {
    icon: <FiHeart className="w-6 h-6" />,
    title: "Private Charter",
    description: "Your exclusive boat experience",
    features: [
      "Exclusive boat use for your group",
      "Customizable route & schedule (4h / 8h)",
      "Skipper & watersports included",
      "Perfect for celebrations, families, corporate events"
    ],
    link: "/private-boat-trips",
    image: "/images/aerial.jpeg",
    badge: "CUSTOM",
    price: "From €1350",
    isPrivate: true
  }
];

export default function HomeClientPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden -mt-[80px] pt-[80px]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/aerial.jpeg"
            alt="Salvador Ibiza Experience"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block text-cyan-300 text-lg md:text-xl mb-4 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to Salvador Ibiza
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Your Perfect Day
              <span className="block mt-2 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                in Ibiza
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Premium boat experiences in the heart of the Mediterranean
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/boat-trips"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Trips
                <FiArrowRight className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/about"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                About Us
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <FiAnchor className="w-8 h-8 text-white" />
        </motion.div>
      </section>

      {/* Experiences Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-medium mb-2 block">OUR EXPERIENCES</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Choose your perfect experience</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join us for a shared trip or book the boat just for your group.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform group-hover:-translate-y-2 transition-all duration-300">
                  <div className="relative h-64">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
                    {exp.badge && (
                      <div className="absolute top-4 right-4 bg-emerald-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {exp.badge}
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-3 rounded-full w-fit mb-3">
                        {exp.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-gray-200 mb-4">{exp.description}</p>
                      <ul className="space-y-2 mb-4">
                        {exp.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-200 text-sm">
                            <FiCheck className="mr-2 text-emerald-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between">
                        <span className="text-emerald-400 text-2xl font-bold">{exp.price}</span>
                        <div className="flex gap-3">
                          {exp.isPrivate ? (
                            <>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  window.location.href = '/private-boat-trips#inquire';
                                }}
                                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm hover:bg-white/20 transition-all"
                              >
                                <FiClock className="w-4 h-4" />
                                Inquire Now
                              </button>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  setIsBookingModalOpen(true);
                                }}
                                className="flex items-center gap-2 px-6 py-2 bg-emerald-400 rounded-full text-white font-medium hover:bg-emerald-500 transition-all"
                              >
                                Book Now
                                <FiArrowRight className="w-4 h-4" />
                              </button>
                            </>
                          ) : (
                            <Link
                              href={exp.link}
                              className="flex items-center gap-2 px-6 py-2 bg-emerald-400 rounded-full text-white font-medium hover:bg-emerald-500 transition-all"
                            >
                              View Details
                              <FiArrowRight className="w-4 h-4" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-blue-600 font-medium">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Salvador Experience</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Step aboard our meticulously maintained vessel for an unforgettable journey through Ibiza&apos;s crystal-clear waters. Whether you&apos;re seeking adventure, relaxation, or the perfect sunset view, we&apos;ve crafted the ideal experience for you.
              </p>
              <ul className="space-y-4">
                {[
                  "Premium comfort and safety",
                  "Expert local crew",
                  "Stunning locations",
                  "Water sports equipment",
                  "Drinks and snacks included"
                ].map((feature, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="bg-blue-500/10 p-2 rounded-full">
                      <FiAnchor className="text-blue-500 w-5 h-5" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <Link
                href="/about"
                className="group inline-flex items-center mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300"
              >
                Learn More
                <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-1">
                <Image
                  src="/images/boat-2.jpeg"
                  alt="Salvador Experience"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl object-cover"
                />
              </div>
              {/* Floating decoration */}
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-xl" />
            </motion.div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        productId={3}
      />
    </div>
  );
} 