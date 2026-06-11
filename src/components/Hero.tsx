'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { businessContact } from '@/config/site';

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
});

const tripadvisorBadges = [
  { src: '/images/optimized/tripadvisor-salvador-ibiza-2023.webp', alt: "Tripadvisor Traveller's Choice Best of the Best 2023" },
  { src: '/images/optimized/tripadvisor-salvador-ibiza-2024.webp', alt: "Tripadvisor Traveller's Choice 2024" },
  { src: '/images/optimized/tripadvisor-salvador-ibiza-2025.webp', alt: "Tripadvisor Traveller's Choice Awards 2025" },
];

export default function Hero() {
  const handleScrollDown = () => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });

  return (
    <div className="relative h-[100vh] md:h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/images/optimized/salvador-ibiza-cala-comte-paddleboard-flower.webp" alt="Luchtfoto van Salvador Ibiza in Cala Comte met paddleboards in kristalhelder turquoise water" fill priority className="object-cover object-center brightness-[0.65] z-0" quality={80} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkcGqsBwACSgCoMcABJgAAAABJRU5ErkJggg==" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10"></div>
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full px-4 max-w-screen-xl mx-auto">
        <motion.div variants={fadeIn(0.1)} initial="hidden" animate="visible" className="mb-6 md:mb-10">
          <p className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm tracking-widest font-light border border-white/10">SALVADOR BOOTERVARING</p>
        </motion.div>
        <motion.div variants={fadeIn(0.2)} initial="hidden" animate="visible" className="max-w-5xl mb-5 md:mb-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-4 md:mb-6 leading-[1.1] tracking-tight">SALVADOR BOOT<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">TRIP IBIZA</span></h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 font-light max-w-3xl mx-auto tracking-wide">Ontdek Ibiza vanaf zee — geniet van het helderste water van de Middellandse Zee aan boord van de iconische Salvador</p>
        </motion.div>
        <motion.div variants={fadeIn(0.3)} initial="hidden" animate="visible" className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 md:mb-8 w-full max-w-lg sm:max-w-none px-2">
          <Link href="/boat-trips/day-trip" className="min-h-[48px] inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl">Boek dagtrip — vanaf €80</Link>
          <Link href="/boat-trips/sunset-trip" className="min-h-[48px] inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-300">Zonsondergang cruise — vanaf €80</Link>
        </motion.div>
        <motion.div variants={fadeIn(0.35)} initial="hidden" animate="visible" className="flex flex-col items-center gap-3 md:gap-5 mb-4 md:mb-8">
          <p className="text-white/90 font-light text-sm md:text-base md:hidden"><span className="font-medium">4,9</span> · Google &amp; TripAdvisor</p>
          <div className="hidden md:flex flex-wrap justify-center items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2"><span className="flex" role="img" aria-label="4,9 van 5 sterren op Google">{Array(5).fill('★').map((s,i)=><span key={i} className="text-yellow-400 text-lg md:text-xl">{s}</span>)}</span><div className="text-white/90 font-light text-sm md:text-base"><span className="font-medium">4,9</span> op Google</div></div>
            <span className="text-white/20">|</span>
            <div className="flex items-center gap-2"><span className="flex" role="img" aria-label="4,9 van 5 sterren op TripAdvisor">{Array(5).fill('★').map((s,i)=><span key={i} className="text-[#00AA6C] text-lg md:text-xl">{s}</span>)}</span><div className="text-white/90 font-light text-sm md:text-base"><span className="font-medium">4,9</span> op Tripadvisor</div></div>
          </div>
          <div className="hidden md:flex flex-wrap justify-center items-center gap-3 md:gap-4">
            {tripadvisorBadges.map((badge) => (
              <motion.a key={badge.src} href={businessContact.social.tripadvisor} target="_blank" rel="noopener noreferrer" aria-label={badge.alt} whileHover={{ scale: 1.05 }} className="relative bg-white/10 backdrop-blur-sm rounded-lg p-2 md:p-3 hover:bg-white/15 transition-all duration-300 w-[100px] h-[115px] md:w-[120px] md:h-[138px]">
                <Image src={badge.src} alt={badge.alt} fill className="object-contain p-1" />
              </motion.a>
            ))}
          </div>
        </motion.div>
        <motion.div variants={fadeIn(0.4)} initial="hidden" animate="visible" className="hidden md:flex flex-row justify-center gap-x-8 mb-8 md:mb-12 text-white/90">
          <span className="font-light tracking-wider text-sm md:text-base">LUXE BOOTTOCHTEN</span><span className="text-white/40">|</span>
          <span className="font-light tracking-wider text-sm md:text-base">KRISTALHELDER WATER</span><span className="text-white/40">|</span>
          <span className="font-light tracking-wider text-sm md:text-base">ONVERGETELIJKE MOMENTEN</span>
        </motion.div>
        <motion.div variants={fadeIn(0.5)} initial="hidden" animate="visible" className="hidden md:block absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2">
          <button type="button" onClick={handleScrollDown} aria-label="Scroll naar inhoud" className="flex flex-col items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-lg px-2">
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }} className="flex flex-col items-center">
              <span className="text-white/40 text-xs md:text-sm tracking-widest font-light mb-2 md:mb-3">SCROLL</span>
              <div className="w-px h-6 md:h-8 bg-gradient-to-b from-white/40 to-transparent"></div>
            </motion.div>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
