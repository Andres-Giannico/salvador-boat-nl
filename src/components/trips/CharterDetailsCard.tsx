'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiClock, FiUsers, FiDollarSign } from 'react-icons/fi';

interface CharterDetailsCardProps {
  onBookNowClick: () => void;
}

const CharterDetailsCard = ({ onBookNowClick }: CharterDetailsCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-xl p-6 border border-gray-100 relative overflow-hidden"
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
      transition={{ duration: 0.3 }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-br-3xl"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-tl-3xl"></div>
      
      <h3 className="text-2xl font-bold text-center text-gray-900 mb-5 relative">
        <span className="absolute -top-1 -left-1 w-10 h-10 text-cyan-200 opacity-20">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9.5L12 4L21 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 13V19.4C19 19.7314 18.7314 20 18.4 20H5.6C5.26863 20 5 19.7314 5 19.4V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        Charter Details & Booking
      </h3>
      <div className="space-y-3 text-sm border-t border-b border-gray-200 py-4 mb-5">
        <p className="flex items-center justify-between"><FiClock className="mr-2 w-4 h-4 text-blue-600"/> <strong>Duration:</strong> <span>4 Hours (+ Extra Available)</span></p>
        <p className="flex items-center justify-between"><FiUsers className="mr-2 w-4 h-4 text-blue-600"/> <strong>Capacity:</strong> <span>Up to 35 Guests</span></p>
        <div className="pt-3 mt-3">
          <p className="flex items-center font-semibold text-gray-800 mb-1"><FiDollarSign className="mr-2 w-4 h-4 text-blue-600"/> 
            <span>Pricing (4 Hours):</span>
          </p>
          <ul className="text-xs pl-6 space-y-1 text-gray-600 list-disc list-inside">
            <li>Low Season: €1350 + €30/Bar Service</li>
            <li>High Season: €1650 + €30/Bar Service</li>
            <li>Extra Hour: €500</li>
          </ul>
        </div>
      </div>
      <motion.button 
        onClick={onBookNowClick}
        className="w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3.5 px-4 rounded-lg shadow-lg transition duration-300 text-lg"
        whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(59,130,246,0.5)" }}
        whileTap={{ scale: 0.98 }}
      >
        Book Your Charter Now
      </motion.button>
      <p className="text-xs text-center text-gray-500 mt-3">
        Excludes 21% VAT. Full day & custom quotes available.
        <Link href="/contact?subject=Charter+Question" className="text-blue-600 hover:underline ml-1">Contact for questions</Link>
      </p>
    </motion.div>
  );
};

export default CharterDetailsCard; 