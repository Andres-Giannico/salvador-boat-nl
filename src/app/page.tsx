'use client';

import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import { motion } from 'framer-motion';

// Animación para elementos que aparecen al hacer scroll
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Animación para contenedores con elementos hijos
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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
            <div className="w-24 h-1 bg-[#1E88E5] rounded-full"></div>
          </div>
        </div>
      </motion.section>

      {/* Featured Trips Section */}
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
              Our Popular Excursions
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose from our carefully designed trips to experience the best of Ibiza from the sea
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Midday Trip Card */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-soft overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/barcosalvadorsmall.jpg"
                  alt="Midday Trip - Salvador Ibiza"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-[#1E88E5] text-white px-4 py-1 rounded-full text-sm font-medium">
                  12:00 - 16:00
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">Midday All-Inclusive Trip</h3>
                <p className="text-gray-700 mb-5">
                  Sunbathe, swim, snorkel, and enjoy drinks & snacks under the midday Ibiza sun.
                </p>
                <Link href="/boat-trips" className="text-[#1E88E5] font-medium hover:text-[#1976D2] inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Sunset Trip Card */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-soft overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/barcodesdedron.jpg"
                  alt="Sunset Trip - Salvador Ibiza"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-[#FFA000] text-white px-4 py-1 rounded-full text-sm font-medium">
                  17:00 - 21:00
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">Sunset All-Inclusive Trip</h3>
                <p className="text-gray-700 mb-5">
                  Experience the breathtaking Ibiza sunset from the sea with music, drinks, and good vibes.
                </p>
                <Link href="/boat-trips" className="text-[#1E88E5] font-medium hover:text-[#1976D2] inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Private Charter Card */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-soft overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/barco dron .jpg"
                  alt="Private Charter - Salvador Ibiza"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-[#26A69A] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Custom Hours
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">Private Charter</h3>
                <p className="text-gray-700 mb-5">
                  Charter the Salvador boat exclusively for your group, tailored to your preferences.
                </p>
                <Link href="/private-charter" className="text-[#1E88E5] font-medium hover:text-[#1976D2] inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
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
              <div className="bg-[#1E88E5]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#1E88E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">All-Inclusive</h3>
              <p className="text-gray-700">All drinks, snacks, and equipment included in our trips.</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div variants={fadeInUp} className="text-center p-6">
              <div className="bg-[#1E88E5]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#1E88E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Small Groups</h3>
              <p className="text-gray-700">Limited capacity ensures personal attention and comfort.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={fadeInUp} className="text-center p-6">
              <div className="bg-[#1E88E5]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#1E88E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Crew</h3>
              <p className="text-gray-700">Professional and friendly staff to ensure your safety and enjoyment.</p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div variants={fadeInUp} className="text-center p-6">
              <div className="bg-[#1E88E5]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#1E88E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Secret Spots</h3>
              <p className="text-gray-700">Visit hidden coves and exclusive locations only accessible by boat.</p>
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
        className="py-20 bg-gradient-to-r from-[#1E88E5] to-[#26A69A] text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-8">Ready for an Unforgettable Experience?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-white/90">
            Book your Salvador Ibiza boat trip today and create memories that will last a lifetime.
          </p>
          <Link href="/contact">
            <span className="bg-white text-[#1E88E5] hover:bg-white/90 rounded-full py-4 px-10 text-lg font-medium shadow-xl inline-flex items-center justify-center">
              Book Now
            </span>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
