'use client';

import Image from 'next/image';
import TurbnbWidget from '@/components/booking/TurbnbWidget';
import { FiClock, FiDollarSign, FiMapPin, FiCheckCircle, FiSun, FiMoon } from 'react-icons/fi';
import { GiWaterSplash, GiPartyPopper } from 'react-icons/gi';
import Link from 'next/link';

export default function BookTripsQrPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-orange-50/30 py-10 md:py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">

        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-3">
          Book Your <span className="text-cyan-600">Boat Trip</span>
        </h1>
        <p className="text-center text-gray-600 mb-8 text-sm md:text-base">
          Choose your preferred experience: Daytime Adventure or Magical Sunset from San Antonio.
        </p>

        {/* Trip Options - Display side-by-side on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          {/* Day Trip Card */}
          <div className="border border-blue-200 bg-blue-50/30 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-blue-700 mb-2 flex items-center"><FiSun className="mr-2"/> Daytime Trip</h2>
            <div className="space-y-1.5 text-sm">
              <p className="flex items-center"><FiClock className="w-4 h-4 mr-1.5 text-blue-600"/> 2:00 PM - 5:00 PM (3h)</p>
              <p className="flex items-center"><FiMapPin className="w-4 h-4 mr-1.5 text-blue-600"/> San Antonio Port</p>
              <p className="flex items-center"><FiDollarSign className="w-4 h-4 mr-1.5 text-blue-600"/> €80 Adult / €45 Child</p>
              <p className="flex items-center text-xs text-gray-600 mt-1"><FiCheckCircle className="w-3 h-3 text-green-500 mr-1"/> Drinks, Tapas, Paddle, Kayak, Snorkel</p>
            </div>
          </div>

          {/* Sunset Trip Card */}
          <div className="border border-orange-200 bg-orange-50/30 rounded-lg p-4">
             <h2 className="text-lg font-semibold text-orange-700 mb-2 flex items-center"><FiMoon className="mr-2"/> Sunset Voyage</h2>
             <div className="space-y-1.5 text-sm">
              <p className="flex items-center"><FiClock className="w-4 h-4 mr-1.5 text-orange-600"/> 6:30 PM - 9:30 PM (3h)</p>
              <p className="flex items-center"><FiMapPin className="w-4 h-4 mr-1.5 text-orange-600"/> San Antonio Port</p>
              <p className="flex items-center"><FiDollarSign className="w-4 h-4 mr-1.5 text-orange-600"/> €80 Adult / €45 Child</p>
              <p className="flex items-center text-xs text-gray-600 mt-1"><FiCheckCircle className="w-3 h-3 text-green-500 mr-1"/> Drinks (Cava!), Tapas, Paddle, Kayak, Sunset</p>
            </div>
          </div>
        </div>

        {/* Booking Widget Section - Configured for Both Trips */}
        <div className="bg-gradient-to-br from-gray-50 to-cyan-50/40 rounded-lg p-4 md:p-6 border border-gray-200 shadow-inner">
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">Book Online Now</h2>
          <TurbnbWidget
            id="turbnb-booking-trips-qr" // Unique ID
            companyId={2}
            productId={2}          // Same Product ID for both
            billingTermIds={[20, 21]} // Show both Day (20) and Sunset (21)
            channelId={11}         // Web channel
            customProperties={{
              displayBillingTerm: true, // Important to show the selector
              // selectBillingTermLabel: "Choose your Time Slot:", // Removed due to linter error
              showQuantity: true,
              quantity: "Guests", // Changed label to English
              titleVariant: "Modern",
              bookNow: "BOOK NOW",
              confirmReservationAndPay: "CONFIRM & PAY",
              selectTimeLabel: "Select Date", // Changed label to English
              // Ensure other labels are generic or check if they adapt
            }}
          />
        </div>

        {/* Link to main boat trips page */}
        <div className="text-center mt-6">
          <Link href="/boat-trips" className="text-xs text-cyan-700 hover:underline">
            See more details about our boat trips
          </Link>
        </div>
      </div>
    </div>
  );
} 