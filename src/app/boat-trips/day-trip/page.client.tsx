"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiClock, FiUsers, FiMapPin, FiDollarSign, FiMusic, FiCompass, FiInfo, FiCamera } from 'react-icons/fi';
import { GiWaterSplash, GiPartyPopper } from 'react-icons/gi';
import { motion } from 'framer-motion';
import Script from 'next/script';

// Importamos nuestros componentes reutilizables
import TripGallery from '@/components/trips/TripGallery';
import TripHighlights from '@/components/trips/TripHighlights';
import ReviewsSection from '@/components/trips/ReviewsSection';
import FAQ from '@/components/trips/FAQ';
import TurbnbWidget from '@/components/booking/TurbnbWidget';
import { GoogleReview } from '@/services/googlePlaces'; // Import type

// Galería de imágenes para el viaje - Ampliada con fotos aéreas
const images = [
  { src: "/images/boat/chicaspasandolomuybien.webp", alt: "Friends having fun on Salvador Ibiza boat deck" },
  { src: "/images/boat/parejaensup.webp", alt: "Couple paddleboarding near Salvador Ibiza" },
  { src: "/images/boat/aereabarco1.webp", alt: "Aerial view of Salvador Ibiza boat" },
  { src: "/images/boat/chicasensupencueva.webp", alt: "Exploring caves on paddleboards" },
  { src: "/images/boat/gente-en-suo.webp", alt: "Group paddleboarding in clear water" },
  { src: "/images/boat/familiaensup.webp", alt: "Family enjoying paddleboarding together" },
  { src: "/images/boat/aereabarco2.webp", alt: "Another aerial view of Salvador Ibiza boat" },
  { src: "/images/boat/parejasnorkeling.webp", alt: "Couple snorkeling in the turquoise sea" },
  { src: "/images/boat/chicasenproamuyfelicdes.webp", alt: "Happy friends on the bow of the boat" },
  { src: "/images/boat/doschicasfelicesenproa.webp", alt: "Two friends enjoying the sun on the boat" },
  { src: "/images/boat/chicosdisfrutandoenproa.webp", alt: "Group enjoying the views from the front of the boat" },
  { src: "/images/boat/chicaensupparada.webp", alt: "Woman standing on a paddleboard" },
  { src: "/images/boat/4chicasparadasentablaxxl.webp", alt: "Four friends posing on a large paddleboard" },
  { src: "/images/boat/dos-chica-disfrutand.webp", alt: "Friends laughing and enjoying the boat trip" },
];

// Aspectos destacados del viaje
const tripHighlights = [
  {
    icon: <FiCompass className="w-6 h-6 text-blue-600" />,
    title: "Flexible Routes",
    description: "Our captain chooses the best route based on weather conditions, ensuring an optimal experience every time."
  },
  {
    icon: <GiWaterSplash className="w-6 h-6 text-cyan-600" />,
    title: "Water Activities",
    description: "Enjoy paddle surfing, kayaking, snorkeling, and swimming in crystal-clear waters."
  },
  {
    icon: <GiPartyPopper className="w-6 h-6 text-orange-500" />,
    title: "Premium Service",
    description: "Spanish tapas, fresh fruit, and unlimited drinks including sangria, beer, wine, and cava."
  },
  {
    icon: <FiMusic className="w-6 h-6 text-purple-600" />,
    title: "Ultimate Comfort",
    description: "Lounge beds, shaded areas, wet bar, clean facilities, and premium MB Quart sound system."
  },
  {
    icon: <FiCamera className="w-6 h-6 text-teal-600" />,
    title: "Optional Photographer",
    description: "Capture your memories! Photos available for optional purchase afterwards."
  }
];

// Preguntas frecuentes específicas para este viaje
const tripFAQs = [
  {
    question: "What time does the tour depart?",
    answer: "The Mixed Daytime Tour departs at 14:00 (2:00 PM) from San Antonio Port. Please arrive at least 30 minutes before departure time. Note that departure times may vary depending on the month."
  },
  {
    question: "What's included in the price?",
    answer: "Your experience includes unlimited drinks (sangria, beer, wine, cava, soft drinks, water), Spanish tapas and fresh fruit, use of paddle boards, kayaks, snorkeling gear, access to lounge beds, shaded areas, and premium MB Quart sound system."
  },
  {
    question: "What are the prices and age policies?",
    answer: "Adults: €80, Children (6-12 years): €45, Children under 6: Free. The tour is perfect for all ages, and we provide life vests in all sizes for your safety."
  },
  {
    question: "What should I bring?",
    answer: "Please bring swimwear, a towel, sunscreen, sunglasses, and a hat. We recommend bringing a camera or waterproof phone case to capture the moments. Note that outside food and drinks are not allowed onboard."
  },
  {
    question: "How is the route decided?",
    answer: "Our experienced captain chooses the best route based on weather and sea conditions. We may head north (Cala Gració, Cala Salada, Punta Galera) or west (Cala Bassa, Torre d'en Rovira, Cala Conta) to ensure the best possible experience."
  }
];

// Assuming a list/section displaying features exists
const featuresList = [
  // ... existing features ...
  "Complete snorkeling equipment",
  "Fresh fruit & snacks included",
  // Add photographer info
  "Optional Onboard Photographer (purchase photos afterwards)"
];

// Interface for props received from the server component
interface DayTripClientPageProps {
  initialReviews: GoogleReview[];
  error: string | null;
}

export default function DayTripClientPage({ initialReviews, error }: DayTripClientPageProps) {
  
  // Initialize the booking widget when the component mounts
  useEffect(() => {
    // Function to initialize the widget
    const initializeWidget = () => {
      if (typeof window !== 'undefined' && typeof window.TurboBooking !== 'undefined') {
        const element = document.getElementById('turbnb-booking-3');
        if (element) {
          try {
            // Type is now globally available
            const turbo3 = new window.TurboBooking();
            // Remove type assertion
            turbo3.run(element, {
              companyId: 2,
              productId: 2,
              billingTermIds: [20],
              channelId: 11,
              customProperties: {
                displayBillingTerm: true,
                showQuantity: true,
                quantity: "Quantity",
                titleVariant: "Modern",
                bookNow: "RESERVE NOW ",
                confirmReservationAndPay: "CLICK TO PAY",
                selectTimeLabel: "Time Selection",
                selectExperienceLabel: "Experience Type",
                addonsLabel: "Adicionales",
                depositObservation: "Deposit and payment instructions\n\n\n"
              }
            });
          } catch (error) {
            console.error("Error initializing booking widget:", error);
          }
        }
      }
    };

    // Check if TurboBooking is already loaded
    if (typeof window !== 'undefined' && typeof window.TurboBooking !== 'undefined') {
      initializeWidget();
    } else if (typeof window !== 'undefined') {
      // If not loaded yet, set up event listener for when script loads
      window.addEventListener('turbnbLoaded', initializeWidget);
      // Cleanup
      return () => window.removeEventListener('turbnbLoaded', initializeWidget);
    }
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section - Full height with parallax effect */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/barco1.png"
            alt="Salvador Ibiza Day Trip Experience"
            fill
            priority
            className="object-cover object-center"
            style={{ objectPosition: "50% 30%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 container mx-auto px-4 text-white text-center pt-20"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-md">
            Mixed Daytime <span className="text-blue-400">Boat Tour</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 drop-shadow-sm">
            Experience the authentic Mediterranean vibes aboard our traditional Balearic wooden boat
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <FiClock className="mr-2 text-blue-400" />
              <span>3 Hours</span>
            </div>
            <div className="flex items-center bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <FiMapPin className="mr-2 text-blue-400" />
              <span>San Antonio</span>
            </div>
            <div className="flex items-center bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <FiDollarSign className="mr-2 text-blue-400" />
              <span>All-Inclusive</span>
            </div>
          </div>
          <Link href="#booking-widget">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
            >
              Book Your Trip
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Your Perfect Mediterranean Adventure</h2>
              <div className="prose prose-lg text-gray-600 mb-8 max-w-none">
                <p>
                  Welcome aboard Salvador Ibiza, a traditional Balearic wooden boat offering the most authentic and vibrant boat tours along the coast of Ibiza. Our Mixed Daytime Tour is designed for travelers of all ages who want to experience the best of Ibiza from the water.
                </p>
                <p>
                  Depending on the weather and sea conditions, our experienced captain will choose the perfect route - either heading north toward Cala Gració, Cala Salada, and Punta Galera, or west toward Cala Bassa, Torre d'en Rovira, and Cala Conta. Each journey is unique, ensuring the best possible experience based on the day's conditions.
                </p>
                <p>
                  Whether you're a solo traveler, couple, group of friends, or family, our warm and professional crew creates the perfect environment for you to relax and enjoy the Mediterranean experience to the fullest. With a perfect blend of fun, relaxation, and exploration, this 3-hour trip showcases the island's crystal-clear waters, stunning landscapes, and chill Mediterranean vibes.
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
                title="Day Trip Highlights Gallery" 
              />
            </motion.div>
          </div>

          {/* Sidebar with booking info - sticky */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-blue-600 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Trip Details</h3>
                <p className="opacity-90">All-inclusive daytime adventure</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start">
                  <FiClock className="mt-1 mr-3 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Duration</h4>
                    <p className="text-gray-600">3 hours (14:00 - 17:00)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiMapPin className="mt-1 mr-3 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Departure</h4>
                    <p className="text-gray-600">San Antonio Port, Ibiza</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiUsers className="mt-1 mr-3 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Capacity</h4>
                    <p className="text-gray-600">Up to 35 passengers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <GiPartyPopper className="mt-1 mr-3 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Season</h4>
                    <p className="text-gray-600">May to October</p>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4 mt-6">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <span className="block text-sm text-gray-500">Price per person</span>
                      <span className="text-3xl font-bold text-gray-900">€80</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-sm text-gray-500">Children (4-12)</span>
                      <span className="text-xl font-semibold text-gray-700">€45</span>
                    </div>
                  </div>
                  <Link href="#booking-widget" className="block w-full">
                    <span className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow transition duration-300">
                      Book This Trip
                    </span>
                  </Link>
                  <p className="text-center text-sm text-gray-500 mt-3">
                    Limited spaces available daily
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mb-20">
          <TripHighlights items={tripHighlights} title="What Makes This Trip Special" />
        </div>

        {/* Reviews Section - Pass props down */}
        <div className="mb-20">
          <ReviewsSection reviews={initialReviews} error={error} />
        </div>

        {/* FAQs Section */}
        <div className="mb-20">
          <FAQ items={tripFAQs} title="Day Trip FAQs" />
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
              Reserve Your <span className="text-blue-600">Day Trip</span> Now
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg"
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  <FiInfo className="h-5 w-5 text-yellow-600" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-800">
                    Looking for an evening experience? Check out our popular{' '}
                    <Link href="/boat-trips/sunset-trip" className="font-medium underline text-yellow-900 hover:text-yellow-700">
                      Sunset Trip
                    </Link> departing later in the day.
                  </p>
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
              />
            </motion.div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl overflow-hidden shadow-xl my-12">
          <div className="relative px-6 py-16 md:p-12 text-white text-center md:text-left md:flex items-center justify-between">
            <div className="md:max-w-xl mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for an Unforgettable Day?</h2>
              <p className="text-blue-100 text-lg">
                Book your spot now and experience the magic of Ibiza from the sea.
              </p>
            </div>
            <Link href="#booking-widget">
              <span className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
                Book Your Adventure
              </span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Load Turbnb Scripts */}
      <Script
        src="https://widgets.turbnb.com/turbnb.booking.1.0.31.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Dispatch custom event when script is loaded
          if (typeof window !== 'undefined') {
            window.dispatchEvent(new Event('turbnbLoaded'));
          }
        }}
      />
      <link href="https://widgets.turbnb.com/turbnb.booking.1.0.31.min.css" rel="stylesheet" />
    </div>
  );
} 