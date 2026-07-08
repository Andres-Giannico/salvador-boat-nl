'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight } from 'react-icons/fi';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function ContactClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Get in touch with us to plan your perfect boat trip in Ibiza
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Map Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info - Enhanced */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100"
              >
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Contact Information</h2>
                
                {/* Increased spacing */}
                <div className="space-y-8">
                  {/* Phone */}
                  <motion.div 
                    className="flex items-start space-x-5" // Start alignment for potentially long text
                    // Optional hover effect:
                    // whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    {/* Larger icon background */}
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-full shadow-sm flex-shrink-0 mt-1">
                      <FiPhone className="w-7 h-7 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Phone</p>
                      <p className="text-lg font-semibold text-gray-900">+34 871 181 393</p>
                      <p className="text-lg font-semibold text-gray-900">+34 681 611 598</p>
                    </div>
                  </motion.div>

                  {/* Email */}
                  <motion.div className="flex items-start space-x-5">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-full shadow-sm flex-shrink-0 mt-1">
                      <FiMail className="w-7 h-7 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
                      <a href="mailto:info@salvadoribiza.com" className="text-lg font-semibold text-blue-600 hover:text-blue-700 hover:underline break-all">
                        info@salvadoribiza.com
                      </a>
                    </div>
                  </motion.div>

                  {/* Location */}
                  <motion.div className="flex items-start space-x-5">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-full shadow-sm flex-shrink-0 mt-1">
                      <FiMapPin className="w-7 h-7 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Location</p>
                      <p className="text-lg font-semibold text-gray-900">San Antonio Port, Ibiza</p>
                      <a 
                        href="https://www.google.com/maps/dir//Boat+Trip+Salvador+Ibiza,+Avinguda+del+Doctor+Fleming,+07820+Sant+Antoni+de+Portmany,+Balearic+Islands/@38.9792996,1.3059022,17z"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 text-sm font-semibold inline-flex items-center mt-2 group"
                      >
                        Get Directions
                        <FiArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </motion.div>

                  {/* Hours */}
                  <motion.div className="flex items-start space-x-5">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-full shadow-sm flex-shrink-0 mt-1">
                      <FiClock className="w-7 h-7 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Opening Hours</p>
                      <p className="text-lg font-semibold text-gray-900">Late Morning - Early Evening</p>
                      <p className="text-sm font-medium text-gray-500">Daily during season</p>
                    </div>
                  </motion.div>
                </div>

                {/* Meeting Point Image */}
                <div className="mt-10 relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/caseta.png"
                    alt="Salvador Ibiza Meeting Point"
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm">Our waterfront cabin at San Antonio Port</p>
                  </div>
                </div>
              </motion.div>

              {/* Map - Added slightly more prominent shadow */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="rounded-2xl overflow-hidden shadow-2xl h-[600px] border border-gray-200"
              >
                <iframe
                  src="https://maps.google.com/maps?q=salvador%20boat%20ibiza&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Enhanced Button */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Ready to Book Your Trip?
            </h2>
            {/* Enhanced Button Style */}
            <Link href="/boat-trips">
              <motion.span 
                whileHover={{ scale: 1.05, boxShadow: "0px 8px 25px rgba(52, 152, 219, 0.4)" }} // Adjusted shadow color to match gradient
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-4 px-10 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-0.5"
              >
                View Available Trips <FiArrowRight className="ml-1 w-5 h-5"/>
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 