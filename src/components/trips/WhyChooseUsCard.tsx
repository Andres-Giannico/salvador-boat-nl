'use client';

import { motion } from 'framer-motion';
import { FiZap, FiAnchor, FiHeart, FiSmile } from 'react-icons/fi';

const whyChooseItems = [
  { icon: FiAnchor, title: "Historische charme", text: "Vaar op een prachtig gerestaureerd stuk Balearen-geschiedenis." },
  { icon: FiHeart, title: "Persoonlijke service", text: "Onze bemanning zorgt dat jouw dag perfect verloopt." },
  { icon: FiZap, title: "Volledige flexibiliteit", text: "Jouw route, tijd en muziek — volledig op maat." },
  { icon: FiSmile, title: "Zorgeloos genieten", text: "All-inclusive drankjes & materiaal: jij ontspant, wij regelen." },
];

const WhyChooseUsCard = () => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl shadow-lg p-6 border border-blue-600 relative overflow-hidden"
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.3)" }}
      transition={{ duration: 0.3 }}
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pattern-squares" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" x="0" y="0" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern-squares)" />
        </svg>
      </div>
      
      <h3 className="text-xl font-semibold mb-4 text-center relative">Waarom Salvador?</h3>
      <div className="space-y-4 relative">
        {whyChooseItems.map((item, index) => (
          <motion.div 
            key={index} 
            className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="mt-1">
              <item.icon className="w-5 h-5 text-cyan-200 flex-shrink-0" />
            </div>
            <div>
               <h4 className="font-medium text-cyan-100">{item.title}</h4>
               <p className="text-sm opacity-90">{item.text}</p>
             </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WhyChooseUsCard;
