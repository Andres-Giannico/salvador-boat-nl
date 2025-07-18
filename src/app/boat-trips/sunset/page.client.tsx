'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiSun, FiClock, FiUsers, FiMapPin, FiCamera, FiHeart } from 'react-icons/fi';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import TurbnbWidget from '@/components/booking/TurbnbWidget';

const highlights = [
  {
    icon: <FiSun className="w-6 h-6 text-orange-500" />,
    title: "Magical Golden Hour",
    description: "Witness Ibiza's legendary sunsets from the best viewpoint - the sea"
  },
  {
    icon: <FiClock className="w-6 h-6 text-blue-500" />,
    title: "Perfect 3-Hour Duration",
    description: "Timed perfectly to catch the golden hour and sunset spectacle"
  },
  {
    icon: <FiUsers className="w-6 h-6 text-green-500" />,
    title: "Intimate Group Experience",
    description: "Share this magical moment with fellow sunset lovers"
  },
  {
    icon: <FiMapPin className="w-6 h-6 text-red-500" />,
    title: "Premium Locations",
    description: "Visit the best sunset viewing spots around Ibiza's coast"
  },
  {
    icon: <FiCamera className="w-6 h-6 text-purple-500" />,
    title: "Instagram-Worthy Moments",
    description: "Capture stunning photos with the Mediterranean sunset backdrop"
  },
  {
    icon: <FiHeart className="w-6 h-6 text-pink-500" />,
    title: "Romantic Atmosphere",
    description: "Perfect for couples, proposals, and special celebrations"
  }
];

const galleryImages = [
  { src: "/images/optimized/friends-ibiza-sunset-boat.webp", alt: "Group enjoying sunset during boat trip in Ibiza" },
  { src: "/images/optimized/drinks-cave-sunset-ibiza.webp", alt: "Cava glass during magical sunset cruise in Ibiza" },
  { src: "/images/boat/doschicassupsunset.webp", alt: "Two girls paddleboarding during sunset boat trip" },
  { src: "/images/sunset.png", alt: "Beautiful Ibiza sunset from Salvador boat" },
  { src: "/images/optimized/es-vedra-island-ibiza-background.webp", alt: "Sunset view with Es Vedra island in background" },
  { src: "/images/optimized/sunset-sailing-cruise-ibiza.webp", alt: "Sunset sailing experience in Ibiza waters" }
];

export default function SunsetBoatTripsClientPage() {
  return (
    <div className="bg-gradient-to-b from-orange-50 via-white to-pink-50 relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-orange-200 to-pink-300 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 15, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/optimized/sunset-sailing-cruise-ibiza.webp"
            alt="Magical sunset boat trip in Ibiza with Salvador"
            fill
            priority
            className="object-cover object-center filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </motion.div>
        
        <motion.div
          className="relative z-10 container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span 
            className="inline-block text-orange-300 uppercase tracking-widest font-medium text-sm md:text-base border border-orange-300/30 bg-orange-900/20 backdrop-blur-sm px-3 py-1 rounded-full mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Magical Sunsets
          </motion.span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-xl leading-tight">
            Sunset Boat Trips <span className="text-orange-400">Ibiza</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95 mb-8 drop-shadow-md">
            Experience the magic of <span className="font-semibold text-orange-300">3-hour</span> sunset cruises. 
            Watch Ibiza's legendary sunsets from the best viewpoint - the Mediterranean Sea.
          </p>
          
          {/* Badges */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 md:gap-5 mt-10 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <motion.div 
              className="flex items-center bg-black/40 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm md:text-base border border-white/10 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <FiClock className="mr-2 text-orange-300" />
              <span>6:00 PM - 9:00 PM</span>
            </motion.div>
            <motion.div 
              className="flex items-center bg-black/40 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm md:text-base border border-white/10 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <FiUsers className="mr-2 text-orange-300" />
              <span>€80 per person</span>
            </motion.div>
          </motion.div>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <Link
              href="#booking"
              className="inline-block bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-lg shadow-[0_10px_25px_-5px_rgba(251,146,60,0.5)] transition duration-300 text-lg"
            >
              Book Your Sunset Trip
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <motion.div 
            className="text-center mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ibiza's Most Magical <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Sunset Experience</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Join Salvador Ibiza for an unforgettable <strong>sunset boat trip</strong> that showcases the island's legendary golden hour. 
              Our <strong>sunset boat tours</strong> are perfectly timed to capture the most breathtaking moments as the sun sets over the Mediterranean.
            </p>
            <p className="text-md text-gray-600">
              From our departure point in <strong>San Antonio</strong>, we'll cruise to the best sunset viewing locations around Ibiza's coast. 
              Watch the sky transform into a canvas of oranges, pinks, and purples while enjoying premium drinks, Spanish tapas, and the gentle sound of waves.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-gray-50">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 ml-4">
                    {highlight.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Gallery */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Sunset Moments Gallery
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  className="relative aspect-video overflow-hidden rounded-lg cursor-pointer group shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 text-sm">{image.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Booking Section */}
          <motion.div
            id="booking"
            className="bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Book Your Sunset Adventure
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Don't miss Ibiza's most magical moments. Reserve your sunset boat trip today!
            </p>
            
            {/* Widget Container */}
            <div className="max-w-2xl mx-auto">
                           <TurbnbWidget 
               companyId={2}
               productId={2} 
               channelId={11}
               billingTermIds={[21]}
               customProperties={{
                 "displayBillingTerm": true,
                 "showQuantity": true,
                 "titleVariant": "Modern",
                 "bookNow": "BOOK SUNSET TRIP",
                 "confirmReservationAndPay": "CONFIRM & PAY",
                 "selectTimeLabel": "Select Sunset Time",
                 "selectExperienceLabel": "Sunset Experience",
                 "addonsLabel": "Add-ons",
                 "childrenAge": "6 to 12 Years",
                 "infantAge": "0 to 5 Years"
               }}
             />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Ready for Your Sunset Boat Trip in Ibiza?
            </h4>
            <p className="text-lg text-gray-600 mb-8">
              Join us for an unforgettable evening on the Mediterranean. Every sunset is unique, every moment is magical.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/boat-trips"
                className="inline-block bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-700 transition-colors"
              >
                View All Boat Trips
              </Link>
              <Link
                href="/contact"
                className="inline-block border-2 border-gray-800 text-gray-800 font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 