'use client';

import { motion } from 'framer-motion';
import TripHighlights, { HighlightItem } from './TripHighlights'; // Importamos el tipo

interface WhatsIncludedProps {
  items: HighlightItem[];
  title?: string;
  className?: string;
  gridCols?: string; // Prop para definir columnas (ej. 'lg:grid-cols-3')
}

const WhatsIncluded = ({ 
  items, 
  title = "What's Included", 
  className = "",
  gridCols = "sm:grid-cols-2 lg:grid-cols-3" // Default a 3 columnas en LG
}: WhatsIncludedProps) => {

  return (
    <div className={`w-full ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100"
      >
        <TripHighlights 
          items={items} 
          title={title} 
          className={`!text-center md:!text-left ${gridCols}`}
        />
      </motion.div>
    </div>
  );
};

export default WhatsIncluded; 