"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FiClock, FiUsers, FiMapPin, FiSunset, FiDollarSign, FiAnchor, FiCompass, FiInfo, FiCamera } from 'react-icons/fi';
import { GiWaterSplash, GiSparklingSabre } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { GoogleReview } from '@/services/googlePlaces';

// Import our reusable components
import TripGallery from '@/components/trips/TripGallery';
import TripHighlights from '@/components/trips/TripHighlights';
import ReviewsSection from '@/components/trips/ReviewsSection';
import FAQ from '@/components/trips/FAQ';
import TurbnbWidget from '@/components/booking/TurbnbWidget';

// Trip image gallery - Extended
const images = [
  { src: "/images/boat/sunset.png", alt: "Iconic Ibiza sunset view from Salvador boat" },
  { src: "/images/boat/doschicassupsunset.webp", alt: "Two friends paddleboarding during sunset" },
  { src: "/images/boat/parejafeliz.webp", alt: "Happy couple enjoying the sunset cruise" },
  { src: "/images/boat/aereabarco2.webp", alt: "Aerial view of Salvador boat at golden hour" },
  { src: "/images/boat/chicasmuyfelices.webp", alt: "Group of friends celebrating sunset on the boat" },
  { src: "/images/boat/chicassentadasdisfrutando.webp", alt: "Relaxing and watching the sunset from the deck" },
  { src: "/images/boat/luigienproconchcas.webp", alt: "Captain Luigi with guests enjoying the sunset" },
  { src: "/images/boat/chicassentadassup.webp", alt: "Sitting on paddleboards watching the sunset" },
  { src: "/images/boat/barcointerior.webp", alt: "Cozy interior of Salvador boat during sunset" },
  { src: "/images/boat/consolabarco.webp", alt: "View from the boat's console at sunset" },
  { src: "/images/boat/copacavesunset.png", alt: "Enjoying drinks near a cave at sunset" },
  { src: "/images/boat/chicas-sunset.png", alt: "Silhouettes against the beautiful sunset sky" },
];

// Trip highlights - Removed Optional Photographer
const tripHighlights = [
  {
    icon: <FiSunset className="w-6 h-6 text-orange-600" />,
    title: "Iconic Sunset Cruise",
    description: "Witness Ibiza's legendary sunset from the prime position - in front of Café Mambo & Café del Mar."
  },
  {
    icon: <FiCompass className="w-6 h-6 text-blue-600" />,
    title: "Flexible Routes",
    description: "Captain chooses the best route (North or West) based on weather for optimal sunset views."
  },
  {
    icon: <GiSparklingSabre className="w-6 h-6 text-yellow-600" />,
    title: "Premium Service",
    description: "Unlimited drinks (cava included!), Spanish tapas, fresh fruit, and great music."
  },
  {
    icon: <GiWaterSplash className="w-6 h-6 text-cyan-600" />,
    title: "Optional Swim Stop",
    description: "Depending on time and conditions, enjoy a swim, snorkel, or paddleboard session."
  },
];

// Trip-specific FAQs
const tripFAQs = [
  {
    question: "What time does the Sunset Trip depart?",
    answer: "Departure is typically between 5:00 PM and 6:30 PM, varying by month to catch the best sunset. The exact time will be confirmed upon booking. Please arrive 30 minutes prior."
  },
  {
    question: "What's the route?",
    answer: (
      <>
        The captain selects the best route based on weather, heading either north (Cala Salada, Punta Galera) or west (Cala Bassa, Cala Conta). We always position ourselves in front of Café Mambo and Café del Mar for the sunset.
        <Link href="/routes" className="text-blue-600 hover:underline font-medium ml-1">
          Learn more about our routes.
        </Link>
      </>
    )
  },
  {
    question: "What food and drinks are included?",
    answer: "Unlimited drinks (beer, wine, cava, sangria, soft drinks, water) and Spanish-style tapas with fresh fruit are included."
  },
  {
    question: "Are there water activities?",
    answer: "Yes, if sea conditions and time permit, we offer a stop for swimming, snorkeling, paddleboarding, and kayaking before the sunset moment."
  },
  {
    question: "What should I bring?",
    answer: "Comfortable clothing, swimwear (optional), a towel, sunglasses, and a light jacket as it can get breezy after sunset. No outside food or drinks are allowed."
  }
];

// Animation variants for staggering badges
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each badge appearing
      delayChildren: 0.5 // Wait a bit after title/subtitle before starting badges
    }
  }
};

const fadeInItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

// Interface for props received from the server component - REMOVED props
interface SunsetTripClientPageProps {
  // initialReviews: GoogleReview[]; // Removed
  // error: string | null; // Removed
}

export default function SunsetTripClientPage({}: SunsetTripClientPageProps) {
  return (
    <div className="bg-gray-50">
      {/* Hero Section - Revised */}
      <section className="relative h-[85vh] min-h-[650px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/boat/sunset.png" 
            alt="Spectacular Ibiza sunset from Salvador boat"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 container mx-auto px-4 text-white text-center pt-20"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 text-shadow-[0_3px_5px_rgba(0,0,0,0.6)]"
          >
            Mixed Sunset <span className="text-orange-400">Boat Tour</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-8 drop-shadow-md"
          >
            Experience the magic of Ibiza's sunset from the sea aboard our traditional wooden boat.
          </motion.p>
          {/* Feature Badges with Stagger Animation */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-10" // Increased bottom margin
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInItem} className="flex items-center bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <FiSunset className="mr-2 text-orange-400" />
              <span>Iconic Sunset Views</span>
            </motion.div>
            <motion.div variants={fadeInItem} className="flex items-center bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <FiMapPin className="mr-2 text-orange-400" />
              <span>Café Mambo Viewpoint</span>
            </motion.div>
            <motion.div variants={fadeInItem} className="flex items-center bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <FiDollarSign className="mr-2 text-orange-400" />
              <span>Drinks & Tapas Included</span>
            </motion.div>
          </motion.div>
          <Link href="#booking-widget">
            <motion.span 
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(234, 88, 12, 0.4)" }} // Enhanced hover
              whileTap={{ scale: 0.95 }}
              // Larger button with icon
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-bold py-4 px-10 rounded-lg shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              Book Your Sunset Experience <FiAnchor className="ml-1 w-5 h-5"/>
            </motion.span>
          </Link>
        </motion.div>
      </section>

      {/* Main content container */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Trip overview grid - 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Main content column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Celebrate the Ibiza Lifestyle</h2>
              <div className="prose prose-lg text-gray-600 mb-8 max-w-none">
                <p>
                  Join us aboard Salvador Ibiza for a <strong>magical evening at sea</strong>. Our Mixed Sunset Boat Tour offers the ultimate way to experience the iconic Ibizan sunset from the water, blending chilled-out vibes with stunning scenery.
                </p>
                <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Your Unforgettable Sunset Experience</h3>
                <p>
                  Depending on the day's conditions, our expert captain will chart the perfect course along Ibiza's famed coastline. We position our boat flawlessly in front of the legendary <strong>Café Mambo and Café del Mar</strong> for the grand finale. Toast with a glass of cava as the sun dips below the horizon, painting the sky in breathtaking colours.
                </p>
                <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">More Than a Tour, It's an Experience</h3>
                <p>
                  This isn't just a boat trip; it's a <strong>celebration of the authentic Ibiza lifestyle</strong>. Perfect for couples, friends, and solo travelers, our tour is designed for those looking to connect, relax, and witness the true magic of the White Isle. Enjoy great music, a fantastic atmosphere, and our renowned <strong>all-inclusive open bar</strong>.
                </p>
              </div>
            </motion.div>

            {/* Trip Gallery */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16"
            >
              <TripGallery 
                images={images} 
                title="Sunset Moments Gallery" 
              />
            </motion.div>
          </div>

          {/* Sidebar with booking info - sticky */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-orange-600 to-red-500 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Trip Details</h3>
                <p className="opacity-90">Authentic sunset experience</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start">
                  <FiClock className="mt-1 mr-3 text-orange-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Schedule</h4>
                    <p className="text-gray-600">Approx. 3 hours (Evening)</p>
                    <p className="text-xs text-gray-500">Departs 5:00-6:30 PM (seasonal)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiMapPin className="mt-1 mr-3 text-orange-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Departure</h4>
                    <p className="text-gray-600">San Antonio Port, Ibiza</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiUsers className="mt-1 mr-3 text-orange-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Capacity</h4>
                    <p className="text-gray-600">Up to 35 passengers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <GiSparklingSabre className="mt-1 mr-3 text-orange-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Included</h4>
                    <p className="text-gray-600">Drinks, Tapas, Music, Activities*</p>
                     <p className="text-xs text-gray-500">*Water activities weather permitting</p>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4 mt-6">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <span className="block text-sm text-gray-500">Price per person</span>
                      <span className="text-3xl font-bold text-gray-900">€80</span>
                    </div>
                  </div>
                  <Link href="#booking-widget" className="block w-full">
                    <span className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg shadow transition duration-300">
                      Book This Experience
                    </span>
                  </Link>
                  <p className="text-center text-sm text-gray-500 mt-3">
                    Feel the real magic of Ibiza!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mb-20">
          <TripHighlights items={tripHighlights} title="What Makes This Evening Special" />
        </div>

        {/* FAQs Section */}
        <div className="mb-20">
          <FAQ items={tripFAQs} title="Sunset Tour FAQs" />
        </div>

        {/* Direct Booking Section */}
        <div className="my-20" id="booking-widget">
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8"
            >
              Reserve Your <span className="text-orange-600">Sunset Tour</span> Now
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 bg-white rounded-xl p-6 border border-gray-100 shadow-md"
            >
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                <div className="w-full lg:w-3/4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">Quick and easy reservation.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">Instant confirmation.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">Flexible cancellation policy.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">All-inclusive experiences.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">Expert guides and personalized attention.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">
                        <strong className="font-semibold">Partial online payment</strong>
                        <span className="text-sm text-gray-500 ml-1">(20€ per person to reserve), the rest is paid onboard on the day of the trip.</span>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-700 w-full lg:w-1/4">
                  <p className="font-medium mb-1">Secure payment through major credit cards, Apple Pay, and Google Pay.</p>
                  <p>All transactions are securely processed by Stripe.</p>
                  <div className="mt-3 flex justify-center">
                    <Image src="/images/cards.webp" alt="Payment methods accepted" width={280} height={40} className="object-contain" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100"
            >
              {/* Turbnb Booking Widget */}
              <TurbnbWidget 
                id="turbnb-booking-3"
                companyId={2}
                productId={2}
                billingTermIds={[21]}
                channelId={11}
                customProperties={{
                  displayBillingTerm: true,
                  showQuantity: true,
                  quantity: "Quantity",
                  titleVariant: "Modern",
                  bookNow: "RESERVE NOW",
                  confirmReservationAndPay: "CLICK TO PAY",
                  selectTimeLabel: "Time Selection",
                  selectExperienceLabel: "Experience Type",
                  addonsLabel: "Add-ons",
                  depositObservation: "Deposit and payment instructions\n\n\n"
                }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 rounded-lg shadow-sm"
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  <FiInfo className="h-6 w-6 text-blue-600" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <p className="text-sm md:text-base text-blue-800">
                    <span className="font-medium">Looking for a daytime adventure?</span> Check out our popular{' '}
                    <Link href="/boat-trips/day-trip" className="font-bold underline text-blue-900 hover:text-blue-600 transition-colors">
                      Mixed Daytime Tour
                    </Link> — explore beautiful beaches and enjoy water activities with unlimited drinks and tapas!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
          {/* Reviews Section */}
          <div className="my-16">
          <ReviewsSection />
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-orange-600 to-pink-500 rounded-2xl overflow-hidden shadow-xl my-12">
          <div className="relative px-6 py-16 md:p-12 text-white text-center md:text-left md:flex items-center justify-between">
            <div className="md:max-w-xl mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Magical Evening?</h2>
              <p className="text-orange-100 text-lg">
                Don&apos;t miss Ibiza&apos;s most spectacular sunset. Book your spot now!
              </p>
            </div>
            <Link href="#booking-widget">
              <span className="inline-block bg-white text-orange-600 hover:bg-orange-50 font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
                Book Your Sunset Experience
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 