'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Animation variants
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

export default function Hero() {
  return (
    <div className="relative h-[100vh] md:h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/optimized/es-vedra-island-ibiza-background.webp" 
          alt="Salvador Ibiza Luxury Experience"
          fill
          priority
          className="object-cover object-center brightness-[0.65] z-0"
          quality={80}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkcGqsBwACSgCoMcABJgAAAABJRU5ErkJggg=="
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full px-4 max-w-screen-xl mx-auto">
        {/* Badge - now as paragraph */}
        <motion.div
          variants={fadeIn(0.2)}
          initial="hidden"
          animate="visible"
          className="mb-12 md:mb-16"
        >
          <p className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm tracking-widest font-light border border-white/10">
            SALVADOR BOAT EXPERIENCE
          </p>
        </motion.div>
        
        {/* Main Headline - now H1 with SEO keywords */}
        <motion.div 
          variants={fadeIn(0.4)}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mb-6 md:mb-8"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 md:mb-8 leading-[1.1] tracking-tight">
            SALVADOR BOAT
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">
              TRIP IBIZA
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 font-light max-w-3xl mx-auto tracking-wide">
            Discover Ibiza by sea - Experience the Mediterranean&apos;s finest waters aboard the iconic Salvador boat
          </p>
        </motion.div>

        {/* Reviews Section */}
        <motion.div
          variants={fadeIn(0.5)}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-4 md:gap-6 mb-8 md:mb-12"
        >
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {/* Google Reviews */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array(5).fill('★').map((star, i) => (
                  <span key={i} className="text-yellow-400 text-lg md:text-xl">
                    {star}
                  </span>
                ))}
              </div>
              <div className="text-white/90 font-light text-sm md:text-base">
                <span className="font-medium">4.9</span> on Google
              </div>
            </div>

            <span className="hidden md:block text-white/20">|</span>

            {/* TripAdvisor Reviews */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array(5).fill('★').map((star, i) => (
                  <span key={i} className="text-[#00AA6C] text-lg md:text-xl">
                    {star}
                  </span>
                ))}
              </div>
              <div className="text-white/90 font-light text-sm md:text-base">
                <span className="font-medium">4.9</span> on Tripadvisor
              </div>
            </div>
          </div>

          {/* Traveler's Choice Badge 2024 */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-2 md:p-3 hover:bg-white/15 transition-all duration-300"
          >
            <Image
              src="/images/optimized/tripadvisor-salvador-ibiza-2024.webp"
              alt="Tripadvisor Traveller's Choice 2024"
              width={100}
              height={100}
              className="object-contain md:w-[120px] md:h-[120px]"
            />
          </motion.div>
        </motion.div>

        {/* Features */}
        <motion.div
          variants={fadeIn(0.6)}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row justify-center gap-2 md:gap-x-8 mb-8 md:mb-12 text-white/90"
        >
          <span className="font-light tracking-wider text-sm md:text-base">LUXURY BOAT TRIPS</span>
          <span className="hidden md:block text-white/40">|</span>
          <span className="font-light tracking-wider text-sm md:text-base">CRYSTAL CLEAR WATERS</span>
          <span className="hidden md:block text-white/40">|</span>
          <span className="font-light tracking-wider text-sm md:text-base">UNFORGETTABLE MOMENTS</span>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          variants={fadeIn(1.2)}
          initial="hidden"
          animate="visible"
          className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <span className="text-white/40 text-xs md:text-sm tracking-widest font-light mb-2 md:mb-3">SCROLL</span>
            <div className="w-px h-6 md:h-8 bg-gradient-to-b from-white/40 to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 