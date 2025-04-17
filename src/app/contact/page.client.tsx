'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';

export default function ContactClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
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
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-3 rounded-full">
                      <FiPhone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone Numbers</p>
                      <p className="text-lg font-medium text-gray-900">+34 871 181 393</p>
                      <p className="text-lg font-medium text-gray-900">+34 681 611 598</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-3 rounded-full">
                      <FiMail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href="mailto:info@salvadoribiza.com" className="text-lg font-medium text-blue-600 hover:text-blue-700">
                        info@salvadoribiza.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-3 rounded-full">
                      <FiMapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-lg font-medium text-gray-900">San Antonio Port, Ibiza</p>
                      <a 
                        href="https://www.google.com/maps/dir//Boat+Trip+Salvador+Ibiza,+Avinguda+del+Doctor+Fleming,+07820+Sant+Antoni+de+Portmany,+Balearic+Islands/@38.9792996,1.3059022,17z"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center mt-1"
                      >
                        Get Directions
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-3 rounded-full">
                      <FiClock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Opening Hours</p>
                      <p className="text-lg font-medium text-gray-900">Late Morning - Early Evening</p>
                      <p className="text-sm text-gray-500">Daily during season</p>
                    </div>
                  </div>
                </div>

                {/* Meeting Point Image */}
                <div className="mt-8 relative rounded-xl overflow-hidden shadow-lg">
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

              {/* Map */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl overflow-hidden shadow-xl h-[600px]"
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

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Ready to Book Your Trip?
            </h2>
            <a 
              href="/boat-trips" 
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Available Trips
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 