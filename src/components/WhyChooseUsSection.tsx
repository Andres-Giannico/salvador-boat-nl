'use client';

import { motion } from 'framer-motion';
// Updated Icons from Lucide React
import { Ship, MapPin, Sparkles, Users } from 'lucide-react';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

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

const features = [
  {
    icon: Ship, // Updated Icon
    title: "Premium Vessel", // Updated Title
    description: "Spacious, modern boat equipped for ultimate comfort & style."
  },
  {
    icon: MapPin, // Updated Icon
    title: "Exclusive Routes", // Updated Title
    description: "Discover Ibiza's most stunning & secluded coastal gems."
  },
  {
    icon: Sparkles, // Updated Icon
    title: "All-Inclusive Luxury", // Updated Title
    description: "Premium drinks, gourmet snacks & water activities included."
  },
  {
    icon: Users, // Updated Icon
    title: "Dedicated Crew", // Updated Title
    description: "Professional, multilingual staff focused on your enjoyment."
  }
];

export default function WhyChooseUsSection() {
  return (
    <motion.section 
      className="py-28 bg-white relative z-10" // Increased padding
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="text-center mb-20"> {/* Increased margin */}
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">THE SALVADOR DIFFERENCE</span> {/* Updated Badge Text */}
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-gray-900"> {/* Slightly larger title on lg */}
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Salvador Ibiza</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto"> {/* Slightly smaller paragraph text */}
            Elevate your Ibiza experience with our unparalleled boat excursions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"> {/* Increased max-w */}
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center p-8 rounded-xl bg-white border border-gray-100/80 hover:shadow-xl hover:shadow-blue-100/30 hover:-translate-y-1 transition-all duration-300" // Updated card style and hover
            >
              {/* Updated Icon background and color */}
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-lg bg-blue-100 text-blue-600">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3> {/* Slightly different title style */}
              <p className="text-gray-600 text-sm">{feature.description}</p> {/* Smaller description text */}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 