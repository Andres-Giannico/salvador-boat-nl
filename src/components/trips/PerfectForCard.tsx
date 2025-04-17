'use client';

import { motion } from 'framer-motion';
import { FiGift, FiUsers, FiBriefcase, FiStar, FiCamera } from 'react-icons/fi';

const perfectForItems = [
  { icon: FiGift, text: "Celebrations & Parties" },
  { icon: FiUsers, text: "Family & Group Gatherings" },
  { icon: FiBriefcase, text: "Corporate Events & Incentives" },
  { icon: FiStar, text: "Luxury Day Escapes" },
  { icon: FiCamera, text: "Photo & Film Shoots" }
];

const PerfectForCard = () => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 relative overflow-hidden"
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
      transition={{ duration: 0.3 }}
    >
      {/* Decorative pattern */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M0,50 L50,0 L100,50 L50,100 Z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Perfect For</h3>
      <div className="space-y-3">
        {perfectForItems.map((item, index) => (
          <motion.div 
            key={index} 
            className="flex items-center p-2 rounded-lg hover:bg-blue-50 transition-colors duration-300"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <item.icon className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
            <span className="text-gray-700">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PerfectForCard; 