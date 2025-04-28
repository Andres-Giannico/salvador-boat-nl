'use client';

import Link from 'next/link';
import TurbnbWidget from '@/components/booking/TurbnbWidget';
import { FiInfo, FiUsers, FiSun, FiMoon } from 'react-icons/fi';
import { GiSailboat } from 'react-icons/gi';
import { motion } from 'framer-motion';

export default function BookNowClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-orange-100/50 py-28 pb-24 md:py-36 md:pb-32">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 md:mb-16"
        >
          Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Ibiza Adventure</span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {/* Shared Trips Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 overflow-hidden flex flex-col"
          >
            <div className="border-t-4 border-cyan-500"></div>
            <div className="p-6 md:p-8 flex flex-col">
              <div className="flex items-center gap-4 mb-5">
                <span className="bg-cyan-100 p-2 rounded-full inline-block"><GiSailboat className="w-7 h-7 text-cyan-600" /></span>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Shared Boat Trips</h2>
              </div>
              <div className="prose prose-sm sm:prose-base text-gray-600 mb-4">
                <p>
                  Join our popular shared trips! Choose between the <strong><FiSun className='inline mb-1 text-orange-500'/> Day Trip</strong> (approx. 14:00-17:00) or the magical <strong><FiMoon className='inline mb-1 text-indigo-500'/> Sunset Trip</strong> (approx. 18:00-21:00). Both include drinks, snacks, swim stops, and good vibes.
                </p>
                <p className="text-xs italic text-gray-500">
                  *Please note: Trip times, especially for the Sunset Trip, may vary slightly depending on the month to ensure the best experience.*
                </p>
              </div>
              <Link 
                href="/boat-trips" 
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors mb-6 mt-4 self-start"
              >
                <FiInfo className="w-4 h-4" />
                <span>More Info about Shared Trips</span>
              </Link>

              <div className="mt-auto bg-gradient-to-br from-gray-100 to-cyan-50/50 rounded-lg p-4 border border-gray-200 shadow-inner">
                <h3 className="text-lg font-semibold text-center text-gray-700 mb-3">Book Shared Trip</h3>
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
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 overflow-hidden flex flex-col"
          >
             <div className="border-t-4 border-purple-500"></div>
            <div className="p-6 md:p-8 flex flex-col">
              <div className="flex items-center gap-4 mb-5">
                <span className="bg-purple-100 p-2 rounded-full inline-block"><FiUsers className="w-7 h-7 text-purple-600" /></span>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Private Charter</h2>
              </div>
               <div className="prose prose-sm sm:prose-base text-gray-600 mb-4">
                <p>
                  Book the entire Salvador boat for your group (up to 35 guests). Enjoy total privacy, a curated route, and all-inclusive service for an unforgettable exclusive experience.
                </p>
              </div>
              <Link 
                href="/private-charter" 
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors mb-6 mt-4 self-start"
              >
                <FiInfo className="w-4 h-4" />
                <span>More Details about Private Charters</span>
              </Link>
              
              <div className="mt-auto bg-gradient-to-br from-gray-100 to-purple-50/30 rounded-lg p-4 border border-gray-200 shadow-inner">
                <h3 className="text-lg font-semibold text-center text-gray-700 mb-3">Book Private Charter</h3>
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