'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: delay,
      duration: 0.7,
      ease: "easeOut"
    }
  }
});

export default function Hero() {
  // Stars for ratings
  const stars = Array(5).fill("⭐");

  return (
    <div className="relative h-[90vh] md:h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/esvedraback.png" 
          alt="Salvador Ibiza Boat - Aerial View"
          fill
          priority
          className="object-cover object-center brightness-[0.5] z-0"
          quality={100}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkcGqsBwACSgCoMcABJgAAAABJRU5ErkJggg=="
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/70 z-10"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full pt-28 md:pt-32 px-4 max-w-screen-lg mx-auto">
        
        {/* Main Headline & Subtitle */}
        <motion.div 
          variants={fadeIn(0.3)}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          <motion.h1 
             variants={fadeIn(0.5)}
            className="text-5xl sm:text-6xl md:text-7xl font-display font-extrabold text-white mb-3 leading-tight tracking-tight drop-shadow-xl text-balance uppercase"
          >
            DISCOVER THE MAGIC OF IBIZA FROM THE SEA
          </motion.h1>
          
          <motion.p 
            variants={fadeIn(0.7)}
            className="text-lg sm:text-xl text-gray-200 mb-6 max-w-2xl mx-auto drop-shadow-lg font-light"
          >
            All-inclusive boat trips and private charters with Salvador Ibiza, the island&apos;s most trusted boat experience.
          </motion.p>
        </motion.div>

        {/* Social Proof / Highlights */}
        <motion.div 
          variants={fadeIn(0.9)}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-white mb-8 text-sm sm:text-base font-medium drop-shadow-md"
        >
          <span>10+ Years Experience</span>
          <span className="opacity-50">•</span>
          <span className="flex items-center">{stars.join('')}<span className="ml-1">500+ Reviews</span></span>
          <span className="opacity-50">•</span>
          <span>#1 Rated Trip</span>
        </motion.div>
          
        {/* Dual CTA buttons */}
        <motion.div
          variants={fadeIn(1.1)}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="shadow-lg"
          >
            <Link href="/boat-trips">
              <span className="bg-blue-600 hover:bg-blue-700 text-white rounded-full text-base sm:text-lg py-3 px-8 inline-flex items-center justify-center transition-all duration-300 font-semibold">
                EXPLORE OUR TRIPS
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="shadow-lg"
          >
            <Link href="/book-now">
              <span className="bg-white text-blue-600 hover:bg-gray-100 rounded-full text-base sm:text-lg py-3 px-8 inline-flex items-center justify-center transition-all duration-300 font-semibold">
                BOOK NOW
              </span>
            </Link>
          </motion.div>
        </motion.div>
          
        {/* Scroll indicator - Simple Arrow */}
        <motion.div 
          variants={fadeIn(1.4)}
          initial="hidden"
          animate="visible"
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        >
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="white" 
              className="w-7 h-7 opacity-60"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 