import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Book Your Boat Trip - Quick Booking",
  description: "Book your Salvador Ibiza boat trip quickly and easily. Choose between daytime adventures or magical sunset voyages from San Antonio Port.",
  keywords: "book boat trip Ibiza, Salvador Ibiza booking, boat reservation, sunset cruise booking, day trip booking",
  alternates: {
    canonical: '/book/flyer',
  },
  openGraph: {
    title: "Book Your Boat Trip - Salvador Ibiza",
    description: "Quick and easy boat trip booking in Ibiza. All-inclusive experiences with instant confirmation.",
    url: "https://salvadoribiza.com/book/flyer",
    images: [
      {
        url: '/images/barco1.png',
        width: 1200,
        height: 630,
        alt: 'Salvador Ibiza Boat Trip Booking',
      }
    ],
  },
};

'use client';

import Image from 'next/image';
import TurbnbWidget from '@/components/booking/TurbnbWidget';
import { FiClock, FiDollarSign, FiMapPin, FiCheckCircle, FiSun, FiMoon } from 'react-icons/fi';
import { GiWaterSplash, GiPartyPopper } from 'react-icons/gi';
import Link from 'next/link';

export default function BookTripsQrFlyerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-orange-100/50 py-6 md:py-16 px-2 md:px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">

        {/* Simple Banner Image */}
        <div className="relative h-24 md:h-32 w-full">
          <Image 
            src="/images/barco1.png"
            alt="Salvador Ibiza Boat Trip" 
            layout="fill"
            objectFit="cover"
            className="opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>

        <div className="p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-3">
            Book Your <span className="text-cyan-600">Boat Trip</span>
          </h1>
          <p className="text-center text-gray-600 mb-8 text-sm md:text-base">
            Choose your preferred experience: Daytime Adventure or Magical Sunset from San Antonio.
          </p>

          {/* Trip Options - Enhanced Styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

            {/* Day Trip Card - Enhanced */}
            <div className="border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50/30 rounded-lg p-4 transition-shadow duration-300 hover:shadow-md">
              <h2 className="text-lg font-semibold text-blue-700 mb-3 flex items-center">
                <span className="bg-blue-100 p-1.5 rounded-full mr-2 inline-block"><FiSun className="w-4 h-4 text-blue-600"/></span>
                Daytime Trip
              </h2>
              <div className="space-y-1.5 text-sm">
                <p className="flex items-center"><FiClock className="w-4 h-4 mr-1.5 text-blue-600 flex-shrink-0"/> 2:00 PM - 5:00 PM (3h)</p>
                <p className="flex items-center"><FiMapPin className="w-4 h-4 mr-1.5 text-blue-600 flex-shrink-0"/> San Antonio Port</p>
                <p className="flex items-center"><FiDollarSign className="w-4 h-4 mr-1.5 text-blue-600 flex-shrink-0"/> €80 Adult / €45 Child</p>
                <p className="flex items-center text-xs text-gray-600 mt-1"><FiCheckCircle className="w-3 h-3 text-green-500 mr-1"/> Drinks, Tapas, Paddle, Kayak, Snorkel</p>
              </div>
            </div>

            {/* Sunset Trip Card - Enhanced */}
            <div className="border border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50/30 rounded-lg p-4 transition-shadow duration-300 hover:shadow-md">
              <h2 className="text-lg font-semibold text-orange-700 mb-3 flex items-center">
                 <span className="bg-orange-100 p-1.5 rounded-full mr-2 inline-block"><FiMoon className="w-4 h-4 text-orange-600"/></span>
                 Sunset Voyage
              </h2>
              <div className="space-y-1.5 text-sm">
                <p className="flex items-start"><FiClock className="w-4 h-4 mr-1.5 text-orange-600 mt-0.5 flex-shrink-0"/> <span>Approx. 6:30 PM - 9:30 PM (3h)<br/><span className="text-xs text-orange-800/80">(Times vary slightly by month for sunset)</span></span></p>
                <p className="flex items-center"><FiMapPin className="w-4 h-4 mr-1.5 text-orange-600 flex-shrink-0"/> San Antonio Port</p>
                <p className="flex items-center"><FiDollarSign className="w-4 h-4 mr-1.5 text-orange-600 flex-shrink-0"/> €80 Adult / €45 Child</p>
                <p className="flex items-center text-xs text-gray-600 mt-1"><FiCheckCircle className="w-3 h-3 text-green-500 mr-1"/> Drinks (Cava!), Tapas, Paddle, Kayak, Sunset</p>
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <hr className="my-8 border-gray-200"/>

          {/* Booking Widget Section - Enhanced Styling */}
          <div className="bg-gradient-to-br from-gray-100 to-cyan-50/50 rounded-lg p-2 md:p-6 border border-gray-200 shadow-inner">
            <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-800 mb-3">Book Online Now</h2>
            
            {/* Benefits List */}
            <div className="mb-6 space-y-2 px-2">
              <div className="flex items-center text-sm text-gray-700">
                <FiCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"/>
                <span>Quick and easy reservation</span>
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <FiCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"/>
                <span>Instant confirmation</span>
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <FiCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"/>
                <span>Flexible cancellation policy</span>
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <FiCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"/>
                <span>All-inclusive experiences</span>
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <FiCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"/>
                <span>Expert guides and personalized attention</span>
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <FiCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"/>
                <span>Partial online payment (20€ per person to reserve)</span>
              </div>
            </div>

            <TurbnbWidget
              id="turbnb-booking-trips-flyer" // Unique ID for flyer
              companyId={2}
              productId={2}          // Same Product ID for both
              billingTermIds={[20, 21]} // Show both Day (20) and Sunset (21)
              channelId={177}         // Channel Flyer
              customProperties={{
                displayBillingTerm: true, // Important to show the selector
                showQuantity: true,
                quantity: "Guests", 
                titleVariant: "Modern",
                bookNow: "RESERVE NOW",
                confirmReservationAndPay: "CONFIRM & PAY",
                selectTimeLabel: "Select Date",
                depositObservation: "After completing your booking, you will receive a confirmation voucher with all the details including meeting point and time. Please ensure your contact information (phone and email) is correct as we may need to reach you regarding your booking. A deposit of €20 per person is required to secure your reservation, with the remaining balance paid onboard."
              }}
            />
          </div>

          {/* Link to main boat trips page */}
          <div className="text-center mt-8">
            <Link href="/boat-trips" className="text-xs text-cyan-700 hover:underline">
              See more details about our boat trips
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 