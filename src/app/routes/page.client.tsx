'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FiMapPin,
  FiWind,
  FiAnchor,
  FiCompass,
  FiHelpCircle,
  FiSun, // Added for West Route image alt
  FiMoon // Added for North Route image alt (or another relevant icon)
} from 'react-icons/fi';
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

  // Animation variants for title stagger
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.04, // Slightly faster stagger
      },
    },
  }
  
  const letter = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
  }

  const titleText = "Our Ibiza Boat Routes";

  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-cyan-50 min-h-screen">
      {/* Hero Section - Enhanced */}
      <section className="relative py-28 md:py-36 text-center text-white overflow-hidden">
        {/* Background Image - Changed and overlay improved */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/boat/aereabarco2.webp" // Changed background image
            alt="Aerial view of Ibiza coastline"
            fill
            priority 
            objectFit="cover" 
            className="opacity-80" // Slightly less opacity for better image visibility
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-800/60 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 text-shadow-md"
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            {/* Staggered title animation */}
            {titleText.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              )
            })}
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }} // Adjusted delay
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

        {/* Routes Grid - Enhanced Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          
          {/* West Coast Route Card - Enhanced */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(0,0,0,0.1)" }} // Enhanced hover
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col"
          >
            {/* Replaced Map Placeholder with Image */}
            <div className="relative w-full aspect-video">
              <Image 
                src="/images/boat/parejaensup.webp" // Representative image for West Route
                alt="Couple paddleboarding near Cala Conta, West Ibiza Route"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 md:p-8 flex-grow flex flex-col">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 flex items-center">
                <FiSun className="mr-3 text-orange-500"/> West Coast Route
              </h2>
              <p className="text-gray-600 mb-6">
                San Antonio to Cala Conta. Iconic beaches, vibrant scenery, and Ibiza's best swim spots with crystal-clear turquoise waters.
              </p>
              <h3 className="font-semibold text-lg text-gray-700 mb-4 mt-auto pt-4 border-t border-gray-100">Key Stops & Highlights:</h3>
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

          {/* North Coast Route Card - Enhanced */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }} // Added slight delay
            whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(0,0,0,0.1)" }} // Enhanced hover
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col"
          >
            {/* Replaced Map Placeholder with Image */}
            <div className="relative w-full aspect-video">
              <Image 
                src="/images/boat/aereabarco1.webp" // Representative image for North Route
                alt="Aerial view of Salvador Ibiza near cliffs, North Ibiza Route"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 md:p-8 flex-grow flex flex-col">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 flex items-center">
                <FiAnchor className="mr-3 text-teal-500"/> Northern Route
              </h2>
              <p className="text-gray-600 mb-6">
                San Antonio towards Sa Foradada. Explore secluded coves like Cala Gració, pass by the famous Cala Salada, and anchor in the pristine waters near the iconic Sa Foradada rock formation.
              </p>
              <h3 className="font-semibold text-lg text-gray-700 mb-4 mt-auto pt-4 border-t border-gray-100">Key Stops & Highlights:</h3>
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