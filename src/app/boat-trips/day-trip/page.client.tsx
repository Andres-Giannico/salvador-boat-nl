"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiClock, FiUsers, FiMapPin, FiDollarSign, FiMusic, FiCompass } from 'react-icons/fi';
import { GiWaterSplash, GiPartyPopper } from 'react-icons/gi';
import { motion } from 'framer-motion';
import Script from 'next/script';

// Importamos nuestros componentes reutilizables
import TripGallery from '@/components/trips/TripGallery';
import TripHighlights from '@/components/trips/TripHighlights';
import TestimonialSlider from '@/components/trips/TestimonialSlider';
import FAQ from '@/components/trips/FAQ';
import TurbnbWidget from '@/components/booking/TurbnbWidget';

// Galería de imágenes para el viaje
const dayTripImages = [
  { src: "/images/barco1.png", alt: "Relaxing on Salvador Ibiza boat deck" },
  { src: "/images/barco2.png", alt: "Crystal clear waters view from Salvador Ibiza" },
  { src: "/images/barcosalvadorsmall.jpg", alt: "Swimming off Salvador Ibiza boat" },
  { src: "/images/barcosalvadorsmall2.jpg", alt: "Salvador Ibiza boat anchored in a beautiful cove" },
  { src: "/images/barcodesdedron.jpg", alt: "Aerial view of Salvador Ibiza boat" },
  { src: "/images/barco dron .jpg", alt: "Salvador Ibiza boat from above" },
];

// Aspectos destacados del viaje
const tripHighlights = [
  {
    icon: <FiCompass className="w-6 h-6 text-blue-600" />,
    title: "Scenic Route",
    description: "Explore the stunning west coast of Ibiza, including Cala Gració, Cala Salada and more pristine spots."
  },
  {
    icon: <GiWaterSplash className="w-6 h-6 text-cyan-600" />,
    title: "Swim & Snorkel",
    description: "Take refreshing dips in turquoise waters, with all snorkeling gear provided free of charge."
  },
  {
    icon: <GiPartyPopper className="w-6 h-6 text-orange-500" />,
    title: "All-Inclusive",
    description: "Unlimited drinks, snacks and fresh fruit served throughout the trip."
  },
  {
    icon: <FiMusic className="w-6 h-6 text-purple-600" />,
    title: "Good Vibes",
    description: "Great music, good company, and a relaxed atmosphere perfect for making memories."
  },
];

// Testimonios de clientes
const testimonials = [
  {
    id: 1,
    name: "Emma & Tom",
    location: "London, UK",
    comment: "Highlight of our Ibiza trip! The crew was fantastic, the boat was perfect, and swimming in the crystal clear waters was unforgettable.",
    rating: 5,
    trip: "Day Trip"
  },
  {
    id: 2,
    name: "Sophia Martinez",
    location: "Barcelona, Spain",
    comment: "Such a great day out! Loved the unlimited drinks and the spots we visited were breathtaking. Worth every penny!",
    rating: 5,
    trip: "Day Trip"
  },
  {
    id: 3,
    name: "Lukas Schmidt",
    location: "Berlin, Germany",
    comment: "We had an amazing time on the day trip. The staff was super friendly and the snorkeling was great. Would definitely recommend!",
    rating: 4,
    trip: "Day Trip"
  },
];

// Preguntas frecuentes específicas para este viaje
const tripFAQs = [
  {
    question: "What time does the Day Trip depart?",
    answer: "Our Day Trip departs from San Antonio Port at 14:00 (2:00 PM) and returns at approximately 17:00 (5:00 PM). Please arrive 15 minutes before departure time."
  },
  {
    question: "What's included in the price?",
    answer: "The day trip is all-inclusive! Your ticket includes: unlimited drinks (beer, wine, cava, sangria, soft drinks, water), snacks and fresh fruit, use of snorkeling equipment, paddleboards and kayaks, music, and insurance."
  },
  {
    question: "Can children join the Day Trip?",
    answer: "Yes, children are welcome! We offer a reduced price of €45 for children aged 4-12. Children under 4 may join for free, but please let us know when booking. Life jackets in all sizes are available."
  },
  {
    question: "What should I bring?",
    answer: "We recommend bringing swimwear, a towel, sunscreen, sunglasses, a hat, and a camera to capture the beautiful moments. Everything else is provided on board!"
  },
];

export default function DayTripClientPage() {
  
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
            Ibiza Day <span className="text-blue-400">Boat Trip</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 drop-shadow-sm">
            3 hours of sun, sea and unforgettable moments along Ibiza&apos;s stunning coastline.
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Your Perfect Day at Sea</h2>
              <div className="prose prose-lg text-gray-600 mb-8 max-w-none">
                <p>
                  Escape the crowds and experience Ibiza from a different perspective. Our 3-hour all-inclusive day trip takes you along the stunning west coast of the island, with stops at crystal-clear bays perfect for swimming and snorkeling.
                </p>
                <p>
                  Departing from San Antonio port, we&apos;ll cruise to beautiful spots like Cala Gració and Cala Salada, where you can jump into the turquoise Mediterranean waters. Try paddleboarding, snorkeling, or simply relax on deck with a drink in hand.
                </p>
                <p>
                  With unlimited drinks, snacks, and fresh fruit included, all you need to do is bring yourself, your swimwear, and a sense of adventure!
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
                images={dayTripImages} 
                title="Trip Highlights Gallery" 
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
                    <h4 className="font-semibold text-gray-800">Schedule</h4>
                    <p className="text-gray-600">14:00 - 17:00 (3 hours)</p>
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
                    <h4 className="font-semibold text-gray-800">Group Size</h4>
                    <p className="text-gray-600">Small groups for better experience</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <GiPartyPopper className="mt-1 mr-3 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Included</h4>
                    <p className="text-gray-600">Drinks, snacks, equipment & more</p>
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

        {/* Testimonials Section */}
        <div className="mb-20">
          <TestimonialSlider testimonials={testimonials} />
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