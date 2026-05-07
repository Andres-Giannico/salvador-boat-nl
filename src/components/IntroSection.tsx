'use client';

import { motion } from 'framer-motion';

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

export default function IntroSection() {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      className="py-12 md:py-16 bg-white relative z-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">ONTDEK HET PARADIJS</span>
        <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
          Welkom bij <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Salvador Ibiza</span>
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
          Vaar met ons mee op het kraakheldere water rond Ibiza. Onze all-inclusive boottochten zijn de perfecte manier om dit magische eiland te ontdekken.
        </p>
        <div className="flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
        </div>
      </div>
    </motion.section>
  );
} 
