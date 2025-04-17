'use client';

import Link from 'next/link';
import TurbnbWidget from '@/components/booking/TurbnbWidget';
import { FiInfo, FiUsers, FiSun, FiMoon } from 'react-icons/fi';
import { GiSailboat } from 'react-icons/gi';
import { motion } from 'framer-motion';

export default function BookNowClientPage() {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-blue-100 min-h-screen pt-28 pb-24 md:pt-36 md:pb-32">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-16 md:mb-24"
        >
          Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Ibiza Adventure</span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {/* Shared Trips Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden flex flex-col"
          >
            <div className="border-t-4 border-cyan-500"></div>
            <div className="p-6 md:p-8 flex-grow flex flex-col">
              <div className="flex items-center gap-4 mb-5">
                <GiSailboat className="w-9 h-9 text-cyan-600 flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Shared Boat Trips</h2>
              </div>
              <div className="prose prose-sm sm:prose-base text-gray-600 mb-4 flex-grow">
                <p>
                  Join our popular shared trips! Choose between the <strong><FiSun className='inline mb-1 text-orange-500'/> Day Trip</strong> (approx. 14:00-17:00) or the magical <strong><FiMoon className='inline mb-1 text-indigo-500'/> Sunset Trip</strong> (approx. 18:00-21:00). Both include drinks, snacks, swim stops, and good vibes.
                </p>
                <p className="text-xs italic text-gray-500">
                  *Please note: Trip times, especially for the Sunset Trip, may vary slightly depending on the month to ensure the best experience.*
                </p>
              </div>
              <Link 
                href="/boat-trips" 
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors mb-6 mt-auto self-start"
              >
                <FiInfo className="w-4 h-4" />
                <span>More Info about Shared Trips</span>
              </Link>

              {/* Shared Trips Widget Wrapper */}
              <div className="mt-4 border-t pt-6">
                 <TurbnbWidget
                  id="turbnb-booking-shared"
                  companyId={2}
                  productId={2}
                  billingTermIds={[20, 21]}
                  channelId={11}
                  className="min-h-[400px]"
                />
              </div>
            </div>
          </motion.div>

           {/* Private Charter Section */}
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden flex flex-col"
          >
             <div className="border-t-4 border-purple-500"></div>
            <div className="p-6 md:p-8 flex-grow flex flex-col">
              <div className="flex items-center gap-4 mb-5">
                <FiUsers className="w-9 h-9 text-purple-600 flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Private Charter</h2>
              </div>
               <div className="prose prose-sm sm:prose-base text-gray-600 mb-4 flex-grow">
                <p>
                  Book the entire Salvador boat for your group (up to 35 guests). Enjoy total privacy, a curated route, and all-inclusive service for an unforgettable exclusive experience.
                </p>
              </div>
              <Link 
                href="/private-charter" 
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors mb-6 mt-auto self-start"
              >
                <FiInfo className="w-4 h-4" />
                <span>More Details about Private Charters</span>
              </Link>
              
              {/* Private Charter Widget Wrapper */}
              <div className="mt-4 border-t pt-6">
                <TurbnbWidget
                  id="turbnb-booking-private"
                  companyId={2}
                  productId={3}
                  billingTermIds={[]}
                  channelId={11}
                  className="min-h-[400px]"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
} 