"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

export type FAQItem = {
  question: string;
  answer: string;
};

interface FAQProps {
  items: FAQItem[];
  title?: string;
  compact?: boolean;
  className?: string;
}

const FAQ = ({ items, title = "Frequently Asked Questions", compact = false, className = "" }: FAQProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`w-full ${className}`}>
      {title && (
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
        >
          {title}
        </motion.h2>
      )}

      <div className="space-y-4 max-w-3xl mx-auto">
        {items.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-white rounded-2xl ${
              compact ? 'shadow-sm' : 'shadow-lg'
            } overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 ${
              activeIndex === index ? 'bg-gradient-to-r from-blue-50/50 to-cyan-50/50' : ''
            }`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between w-full px-6 py-5 text-left focus:outline-none group"
            >
              <span className={`${
                compact ? 'text-base' : 'text-lg'
              } font-medium ${
                activeIndex === index 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500' 
                  : 'text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500'
              } transition-all duration-300`}>
                {item.question}
              </span>
              <motion.span 
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 ml-4"
              >
                {activeIndex === index ? (
                  <FiMinus className={`w-6 h-6 ${
                    activeIndex === index 
                      ? 'text-blue-600' 
                      : 'text-gray-400 group-hover:text-blue-600'
                  } transition-colors duration-300`} />
                ) : (
                  <FiPlus className={`w-6 h-6 ${
                    activeIndex === index 
                      ? 'text-blue-600' 
                      : 'text-gray-400 group-hover:text-blue-600'
                  } transition-colors duration-300`} />
                )}
              </motion.span>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`px-6 pb-5 ${
                      compact ? 'text-sm' : 'text-base'
                    } prose prose-blue max-w-none`}
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ; 