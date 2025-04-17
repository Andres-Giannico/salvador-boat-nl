"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export type HighlightItem = {
  icon: ReactNode;
  title: string;
  description: string;
};

interface TripHighlightsProps {
  items: HighlightItem[];
  title?: string;
  className?: string;
}

const TripHighlights = ({ items, title = "Trip Highlights", className = "" }: TripHighlightsProps) => {
  // Animación para la aparición secuencial de las tarjetas
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className={`w-full ${className}`}>
      {title && (
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">{title}</h2>
      )}

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {items.map((item, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-50"
          >
            <div className="flex flex-col items-start">
              <div className="p-3 rounded-xl bg-blue-50 mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TripHighlights; 