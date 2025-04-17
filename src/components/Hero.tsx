'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with next/image */}
      <Image
        src="/images/barcodesdedron.jpg" 
        alt="Salvador Ibiza Boat - Aerial View"
        fill
        priority
        className="object-cover object-center brightness-[0.6] z-0"
        quality={90}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkcGqsBwACSgCoMcABJgAAAABJRU5ErkJggg=="
      />

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full px-4 max-w-screen-xl mx-auto">
        {/* Logo at the top - REMOVED */}
        {/* 
        <motion.div 
          initial={{ y: -50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-8"
        >
          <Image
            src="/images/logo-salvador.png"
            alt="Salvador Ibiza Logo"
            width={180}
            height={60}
            className="object-contain"
          />
        </motion.div>
        */}

        {/* Centered Text and Button - Animated */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-6xl sm:text-7xl md:text-8xl font-display font-extrabold text-white mb-6 leading-tight tracking-tight shadow-text text-balance"
          >
            Discover the Magic of Ibiza from the Sea
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xl sm:text-2xl text-white mb-10 max-w-2xl mx-auto shadow-text font-light"
          >
            All-inclusive boat trips and private charters with Salvador Ibiza
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/boat-trips">
              <span className="bg-[#1E88E5] hover:bg-[#1976D2] text-white rounded-full text-lg sm:text-xl py-4 px-10 shadow-xl inline-flex items-center justify-center transition-all duration-300 font-medium">
                Explore Our Trips
              </span>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center"
          >
            <span className="text-white text-sm mb-2 opacity-80">Scroll Down</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="white" 
              className="w-6 h-6 opacity-80"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 