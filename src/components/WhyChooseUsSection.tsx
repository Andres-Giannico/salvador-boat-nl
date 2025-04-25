'use client';

import { motion } from 'framer-motion';
import { FiAnchor, FiSunrise, FiHeart, FiSmile } from 'react-icons/fi';

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
    icon: FiAnchor,
    title: "Premium Boat",
    description: "Modern, spacious boat with all amenities for your comfort"
  },
  {
    icon: FiSunrise,
    title: "Perfect Locations",
    description: "Visit the most beautiful spots around Ibiza"
  },
  {
    icon: FiHeart,
    title: "All-Inclusive",
    description: "Drinks, snacks, and water activities included"
  },
  {
    icon: FiSmile,
    title: "Expert Crew",
    description: "Professional, friendly staff to ensure your safety and fun"
  }
];

export default function WhyChooseUsSection() {
  return (
    <motion.section 
      className="py-24 bg-white relative z-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">WHY US</span>
          <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Salvador Ibiza</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Experience the difference with our premium boat excursions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center p-6 rounded-2xl bg-white shadow-lg shadow-blue-100/20 hover:shadow-xl hover:shadow-blue-100/40 transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 