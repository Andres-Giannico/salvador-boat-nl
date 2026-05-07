'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CallToActionSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 relative z-10"
    >
      <div className="container mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-sky-500 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-white rounded-full opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-10 transform translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left md:max-w-xl mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Klaar voor een onvergetelijke ervaring?
              </h2>
              <p className="text-blue-100 text-lg">
                Boek vandaag je boottocht bij Salvador Ibiza en creëer herinneringen die een leven lang meegaan.
              </p>
            </div>
            
            <Link 
              href="/boat-trips"
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
            >
              Reserveer nu je plek
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
} 
