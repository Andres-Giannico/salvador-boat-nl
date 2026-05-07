'use client';

import { motion } from 'framer-motion';
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
    icon: Ship,
    title: "Premium boot",
    description: "Ruim, modern schip met comfort en stijl."
  },
  {
    icon: MapPin,
    title: "Exclusieve routes",
    description: "Ontdek de mooiste en meest afgelegen plekken van Ibiza."
  },
  {
    icon: Sparkles,
    title: "All-inclusive luxe",
    description: "Premium drankjes, hapjes en watersport inbegrepen."
  },
  {
    icon: Users,
    title: "Toegewijde bemanning",
    description: "Professioneel team dat meerdere talen spreekt."
  }
];

export default function WhyChooseUsSection() {
  return (
    <motion.section 
      className="py-28 bg-white relative z-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">HET SALVADOR-VERSCHIL</span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-gray-900">
            Waarom <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Salvador Ibiza</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Til je Ibiza-ervaring naar een hoger niveau met onze bootexcursies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center p-8 rounded-xl bg-white border border-gray-100/80 hover:shadow-xl hover:shadow-blue-100/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-lg bg-blue-100 text-blue-600">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
