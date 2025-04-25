'use client';

import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { FiCheckCircle } from 'react-icons/fi'; // Default icon

// Simple interface for included items
interface IncludedItem {
  name: string;
  description: string;
  icon?: IconType; // Icon is now optional
}

interface WhatsIncludedProps {
  items: IncludedItem[];
  title?: string;
  className?: string;
  gridCols?: string; // Prop para definir columnas
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  iconColor?: string;
}

const WhatsIncluded = ({ 
  items, 
  title = "What's Included", 
  className = "",
  gridCols = "sm:grid-cols-2 lg:grid-cols-2", // Default to 2 columns for clarity
  bgColor = "bg-gradient-to-br from-blue-50 via-white to-cyan-50",
  textColor = "text-gray-800",
  borderColor = "border-gray-100",
  iconColor = "text-blue-600"
}: WhatsIncludedProps) => {

  return (
    <div className={`w-full ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className={`${bgColor} p-8 md:p-12 rounded-2xl shadow-lg border ${borderColor}`}
      >
        <h2 className={`text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10 ${textColor}`}>{title}</h2>
        <div className={`grid gap-6 ${gridCols}`}>
          {items.map((item, index) => {
            const IconComponent = item.icon || FiCheckCircle; // Use provided icon or default
            return (
              <motion.div 
                key={index} 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white/50 border ${borderColor} shadow-sm`}>
                  <IconComponent className={`w-5 h-5 ${iconColor}`} />
                </div>
                <div>
                  <h4 className={`font-semibold ${textColor}`}>{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default WhatsIncluded; 