'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiMapPin, FiWind, FiAnchor, FiCompass, FiHelpCircle } from 'react-icons/fi';
import { GiWaterSplash, GiFamilyHouse } from 'react-icons/gi';
import { IconType } from 'react-icons';

// Helper to map icon name string back to component
const iconMap: { [key: string]: IconType } = {
  FiAnchor,
  GiFamilyHouse,
  FiCompass,
  GiWaterSplash,
  FiMapPin,
  FiHelpCircle // Add default
  // Add other icons used in getIconName
};

// Define the structure for stop data received as props (icon is string)
interface RouteStopProp {
  icon: string; // Icon name as string
  title: string;
  description: string;
}

// Define props for the client component
interface RoutesClientPageProps {
  westStops: RouteStopProp[];
  northStops: RouteStopProp[];
  questionName: string;
  answerText: string;
}

export default function RoutesClientPage({ 
  westStops, 
  northStops, 
  questionName, 
  answerText 
}: RoutesClientPageProps) {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-cyan-50 min-h-screen">
      {/* Hero Section (Simplified for this page) */}
      <section className="relative py-24 md:py-32 text-center bg-gradient-to-r from-cyan-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/barco1.png" alt="Boat background" layout="fill" objectFit="cover" className="filter blur-sm"/>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Our Ibiza Boat Routes
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100"
          >
            Departing from San Antonio, we explore the stunning West and North coasts. Discover the highlights of each route below.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">

        {/* Disclaimer Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 p-6 bg-white border-l-4 border-blue-500 rounded-lg shadow-md flex items-start gap-4 max-w-4xl mx-auto"
        >
          <FiWind className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
          <div>
            {questionName && 
              <h3 className="font-semibold text-lg text-gray-800 mb-1">{questionName}</h3> 
            }
            {answerText &&
              <p className="text-gray-600">
                {answerText}
              </p>
            }
          </div>
        </motion.div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          
          {/* West Coast Route Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col"
          >
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 flex items-center">
                <FiCompass className="mr-3 text-orange-500"/> West Coast Route
              </h2>
              <p className="text-gray-600 mb-6">
                San Antonio to Cala Conta. Iconic beaches, vibrant scenery, and Ibiza's best swim spots with crystal-clear turquoise waters.
              </p>

              {/* Map Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-medium mb-6">
                <span>West Route Map (Coming Soon)</span>
              </div>

              <h3 className="font-semibold text-lg text-gray-700 mb-4">Key Stops & Highlights:</h3>
              <div className="space-y-4">
                {westStops.map((stop, index) => {
                  const IconComponent = iconMap[stop.icon] || FiHelpCircle; // Map string back to component
                  return (
                    <div key={index} className="flex items-start gap-4 p-3 bg-gray-50/50 rounded-md border border-gray-100/60">
                      <IconComponent className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">{stop.title}</h4>
                        <p className="text-sm text-gray-600">{stop.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* North Coast Route Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col"
          >
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 flex items-center">
                <FiAnchor className="mr-3 text-teal-500"/> Northern Route
              </h2>
              <p className="text-gray-600 mb-6">
                San Antonio towards Sa Foradada. Explore secluded coves like Cala Gració, pass by the famous Cala Salada, and anchor in the pristine waters near the iconic Sa Foradada rock formation.
              </p>

              {/* Map Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-medium mb-6">
                <span>North Route Map (Coming Soon)</span>
              </div>

              <h3 className="font-semibold text-lg text-gray-700 mb-4">Key Stops & Highlights:</h3>
              <div className="space-y-4">
                {northStops.map((stop, index) => {
                   const IconComponent = iconMap[stop.icon] || FiHelpCircle; // Map string back to component
                  return (
                    <div key={index} className="flex items-start gap-4 p-3 bg-gray-50/50 rounded-md border border-gray-100/60">
                      <IconComponent className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">{stop.title}</h4>
                        <p className="text-sm text-gray-600">{stop.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
} 