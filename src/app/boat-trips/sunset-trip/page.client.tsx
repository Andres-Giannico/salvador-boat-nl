"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FiClock, FiUsers, FiMapPin, FiSunset, FiDollarSign, FiAnchor } from 'react-icons/fi';
import { GiWaterSplash, GiSparklingSabre, GiSunset } from 'react-icons/gi';
import { motion } from 'framer-motion';

// Importamos nuestros componentes reutilizables
import TripGallery from '@/components/trips/TripGallery';
import TripHighlights from '@/components/trips/TripHighlights';
import TestimonialSlider from '@/components/trips/TestimonialSlider';
import FAQ from '@/components/trips/FAQ';
import TurbnbWidget from '@/components/booking/TurbnbWidget';

// Galería de imágenes para el viaje
const sunsetTripImages = [
  { src: "/images/barco dron .jpg", alt: "Salvador Ibiza boat sailing during sunset" },
  { src: "/images/esvedraback.png", alt: "Magical Es Vedrà view at sunset" },
  { src: "/images/barco5.png", alt: "Enjoying sunset drinks on Salvador Ibiza boat" },
  { src: "/images/barco6.png", alt: "Group watching the sunset from Salvador Ibiza boat" },
  { src: "/images/barcodesdedron.jpg", alt: "Aerial view of Salvador Ibiza boat during golden hour" },
];

// Aspectos destacados del viaje
const tripHighlights = [
  {
    icon: <GiSunset className="w-6 h-6 text-orange-600" />,
    title: "Iconic Sunset",
    description: "Experience Ibiza's world-famous sunset from the best possible viewpoint - the Mediterranean Sea."
  },
  {
    icon: <FiAnchor className="w-6 h-6 text-blue-600" />,
    title: "Perfect Spots",
    description: "We navigate to the most magical locations, often near the mystical Es Vedrà, for unmatched sunset views."
  },
  {
    icon: <GiSparklingSabre className="w-6 h-6 text-yellow-600" />,
    title: "Evening Delights",
    description: "Enjoy unlimited drinks including cava for toasting, along with a light dinner as the sun sets."
  },
  {
    icon: <GiWaterSplash className="w-6 h-6 text-cyan-600" />,
    title: "Twilight Swim",
    description: "Take a refreshing dip in the Mediterranean as the sky turns golden and purple."
  },
];

// Testimonios de clientes
const testimonials = [
  {
    id: 1,
    name: "Michelle & David",
    location: "New York, USA",
    comment: "The sunset views were absolutely breathtaking. Seeing Es Vedrà silhouetted against the golden sky was a magical moment we'll never forget.",
    rating: 5,
    trip: "Sunset Trip"
  },
  {
    id: 2,
    name: "Anna & Jens",
    location: "Stockholm, Sweden",
    comment: "We got engaged during this sunset trip! The crew was so helpful and made it extra special. The views, drinks, and atmosphere were perfect.",
    rating: 5,
    trip: "Sunset Trip"
  },
  {
    id: 3,
    name: "Carlos & Maria",
    location: "Madrid, Spain",
    comment: "What an incredible evening! Swimming at sunset with a glass of cava in hand after was just perfect. Highly recommend this experience.",
    rating: 5,
    trip: "Sunset Trip"
  },
];

// Preguntas frecuentes específicas para este viaje
const tripFAQs = [
  {
    question: "What time does the Sunset Trip depart?",
    answer: "The Sunset Trip typically departs at 18:00 (6:00 PM), but this can vary slightly depending on the season to ensure we catch the perfect sunset. The exact time will be confirmed when you book."
  },
  {
    question: "Will we see Es Vedrà during the trip?",
    answer: "We often position ourselves with a view of the mystical Es Vedrà for sunset, but this depends on weather conditions and sea state. Our captain will always find the most spectacular location for viewing the sunset."
  },
  {
    question: "What food and drinks are included?",
    answer: "The trip includes unlimited drinks (beer, wine, cava, sangria, soft drinks, water) and a light dinner with various snacks, tapas-style bites, and fresh fruit."
  },
  {
    question: "Is this trip suitable for couples?",
    answer: "Absolutely! The Sunset Trip is especially popular with couples due to its romantic atmosphere. It's perfect for anniversaries, proposals, or simply creating beautiful memories together."
  },
];

export default function SunsetTripClientPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section - Full height with parallax effect */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/esvedraback.png"
            alt="Magical Ibiza Sunset with Es Vedrà"
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-md">
            Ibiza <span className="text-orange-400">Sunset</span> Cruise
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 drop-shadow-sm">
            Experience the magic of Ibiza&apos;s legendary sunset from the best seat - the Mediterranean Sea.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <FiSunset className="mr-2 text-orange-400" />
              <span>Sunset Views</span>
            </div>
            <div className="flex items-center bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <FiMapPin className="mr-2 text-orange-400" />
              <span>Es Vedrà</span>
            </div>
            <div className="flex items-center bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <FiDollarSign className="mr-2 text-orange-400" />
              <span>All-Inclusive</span>
            </div>
          </div>
          <Link href="#booking-widget">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
            >
              Book Your Sunset Trip
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Experience the Magic Hour</h2>
              <div className="prose prose-lg text-gray-600 mb-8 max-w-none">
                <p>
                  There&apos;s nothing quite like an Ibiza sunset, and our 3-hour evening cruise offers the perfect vantage point to witness this daily spectacle of nature.
                </p>
                <p>
                  Departing from San Antonio port in the early evening, we navigate towards the perfect spot to watch the sun sink below the horizon, often near the mystical island of Es Vedrà. The changing colors of the sky - from golden yellow to deep orange, pink and purple - create a magical backdrop for an unforgettable evening.
                </p>
                <p>
                  Before sunset, we&apos;ll stop for a refreshing swim in a beautiful bay. Then toast with a glass of cava as the sun makes its dramatic exit, accompanied by ambient music that perfectly complements the moment. All while enjoying our selection of drinks and light dinner.
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
                images={sunsetTripImages} 
                title="Sunset Moments Gallery" 
              />
            </motion.div>
          </div>

          {/* Sidebar with booking info - sticky */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-orange-600 to-red-500 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Sunset Trip Details</h3>
                <p className="opacity-90">All-inclusive sunset experience</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start">
                  <FiClock className="mt-1 mr-3 text-orange-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Schedule</h4>
                    <p className="text-gray-600">18:00 - 21:00 (3 hours)*</p>
                    <p className="text-xs text-gray-500">*Varies by season to match sunset</p>
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
                    <h4 className="font-semibold text-gray-800">Group Size</h4>
                    <p className="text-gray-600">Intimate groups for better experience</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <GiSparklingSabre className="mt-1 mr-3 text-orange-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Included</h4>
                    <p className="text-gray-600">Drinks, light dinner, equipment & more</p>
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
                    <span className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg shadow transition duration-300">
                      Book This Trip
                    </span>
                  </Link>
                  <p className="text-center text-sm text-gray-500 mt-3">
                    Our most popular trip - book early!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mb-20">
          <TripHighlights items={tripHighlights} title="What Makes This Sunset Special" />
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <TestimonialSlider testimonials={testimonials} />
        </div>

        {/* FAQs Section */}
        <div className="mb-20">
          <FAQ items={tripFAQs} title="Sunset Trip FAQs" />
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
              Reserve Your <span className="text-orange-600">Sunset Trip</span> Now
            </motion.h2>
            
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
                Book Your Sunset Trip
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 