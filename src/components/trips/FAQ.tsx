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
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">{title}</h2>
      )}

      <div className="space-y-4 max-w-3xl mx-auto">
        {items.map((item, index) => (
          <div 
            key={index}
            className={`bg-white rounded-lg ${compact ? 'shadow-sm' : 'shadow-md'} overflow-hidden`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between w-full px-6 py-4 text-left focus:outline-none"
            >
              <span className={`text-${compact ? 'md' : 'lg'} font-medium text-gray-800`}>
                {item.question}
              </span>
              <span className="flex-shrink-0 ml-4">
                {activeIndex === index ? (
                  <FiMinus className="w-5 h-5 text-blue-600" />
                ) : (
                  <FiPlus className="w-5 h-5 text-gray-600" />
                )}
              </span>
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
                  <div 
                    className={`px-6 pb-4 text-gray-600 ${compact ? 'text-sm' : 'text-base'} prose prose-sm max-w-none`}
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ; 