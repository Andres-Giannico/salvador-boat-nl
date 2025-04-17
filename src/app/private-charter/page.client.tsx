'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiUsers, FiMap, FiCamera, FiAnchor, FiGift, FiCoffee, FiCheckCircle, FiShield, FiClock, FiDollarSign } from 'react-icons/fi';
import { motion, useTransform, AnimatePresence, useMotionValue } from 'framer-motion';
import Script from 'next/script';

// Componentes reutilizables
import BookingModal from '@/components/booking/BookingModal';
import TripGallery from '@/components/trips/TripGallery';
import FAQ from '@/components/trips/FAQ';
import WhatsIncluded from '@/components/trips/WhatsIncluded';
// import CharterDetailsCard from '@/components/trips/CharterDetailsCard'; // Removed unused import
import PerfectForCard from '@/components/trips/PerfectForCard';
import WhyChooseUsCard from '@/components/trips/WhyChooseUsCard';

// --- Datos Específicos del Charter Privado ---

const galleryImages = [
  { src: "/images/salvador_yacht.jpg", alt: "Luxury private boat charter sailing in Ibiza" },
  { src: "/images/barco1.png", alt: "Group relaxing on Salvador Ibiza deck" },
  { src: "/images/barco2.png", alt: "View from Salvador Ibiza boat" },
  { src: "/images/barco dron .jpg", alt: "Aerial view of Salvador Ibiza boat" },
  { src: "/images/esvedraback.png", alt: "Sunset view near Es Vedra" },
  { src: "/images/barco4.png", alt: "Drinks served on Salvador Ibiza charter" },
];

const charterHighlights = [
  {
    icon: <FiUsers className="w-6 h-6 text-blue-600" />,
    title: "Exclusive Use (Up to 35)",
    description: "The spacious Salvador boat, entirely for your group's enjoyment."
  },
  {
    icon: <FiMap className="w-6 h-6 text-purple-600" />,
    title: "Curated Routes",
    description: "Experience the best spots of Ibiza with our expert-planned routes."
  },
  {
    icon: <FiAnchor className="w-6 h-6 text-red-600" />,
    title: "Expert Captain & Crew",
    description: "Professional service ensuring safety, comfort, and local insights."
  },
  {
    icon: <FiCoffee className="w-6 h-6 text-yellow-600" />,
    title: "All-Inclusive Refreshments",
    description: "Unlimited drinks (alcoholic & non-alcoholic), snacks, and fresh fruit provided."
  },
  {
    icon: <FiGift className="w-6 h-6 text-indigo-500" />,
    title: "Watersports Included",
    description: "Enjoy paddleboards, kayaks, and snorkeling gear at your leisure."
  },
  {
    icon: <FiCheckCircle className="w-6 h-6 text-pink-500" />,
    title: "Premium Sound System",
    description: "Connect your device via Bluetooth and set the perfect vibe."
  },
  {
    icon: <FiShield className="w-6 h-6 text-green-600" />,
    title: "Privacy Guaranteed",
    description: "Enjoy your day with complete exclusivity for your group."
  },
  {
    icon: <FiCamera className="w-6 h-6 text-orange-500" />,
    title: "Unique Photo Opportunities",
    description: "Capture unforgettable moments against Ibiza's stunning backdrop."
  }
];

const faqs = [
  {
    question: "What is the maximum capacity?",
    answer: "The Salvador is licensed for up to 35 guests plus crew, offering ample space for your group."
  },
  {
    question: "How do the routes work?",
    answer: "We offer carefully planned routes to Ibiza's most beautiful spots like Cala Comte, Cala Bassa, and Es Vedrà. While we can adjust the route based on weather conditions and your preferences, we focus on these prime locations to ensure the best experience."
  },
  {
    question: "What exactly is included?",
    answer: "Exclusive boat use, captain/crew, standard fuel, unlimited drinks (beer, wine, cava, sangria, soft drinks, water), snacks, fruit, paddleboards, kayaks, snorkeling gear."
  },
  {
    question: "What are the time slots?",
    answer: "Typically 4-hour slots (e.g., 12:00-16:00 or 17:00-21:00 for sunset) or full-day (8 hours). We can adjust timings to suit your group."
  },
  {
    question: "Can we bring extra food/drinks or arrange catering?",
    answer: "Yes, you are welcome to bring your own provisions. We can also arrange premium catering options upon request at an additional cost."
  },
];

// --- Componente Principal de la Página Cliente ---

export default function PrivateCharterClientPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showDirectWidget, setShowDirectWidget] = useState(false);
  
  // Carga dinámica del CSS del widget
  useEffect(() => {
    const linkId = 'turbnb-widget-css';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = 'https://widgets.turbnb.com/turbnb.booking.1.0.31.min.css';
      document.head.appendChild(link);
      console.log('Turbnb CSS link added to head');
    }
  }, []);

  // Scroll effect for manual tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Create a motion value for scroll
  const y = useMotionValue(0);
  useEffect(() => {
    y.set(scrollY);
  }, [scrollY, y]);

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  // Parallax effect values using y motion value
  const heroScale = useTransform(y, [0, 300], [1, 1.15]);
  const heroYTransform = useTransform(y, [0, 300], [0, 150]);
  const heroOpacity = useTransform(y, [0, 300], [1, 0.5]);

  // Floating animation variants with correct TypeScript types
  const floatingAnimation = {
    initial: { y: 0 },
    animate: { 
      y: [0, -10, 0],
      transition: { 
        repeat: Infinity,
        repeatType: "mirror" as const,
        duration: 3,
        ease: "easeInOut"
      }
    }
  };

  // Initialize the widget directly in the page
  useEffect(() => {
    // Skip widget initialization during SSR
    if (typeof window === 'undefined' || !showDirectWidget) return;
    
    // We'll wait for the DOM to be fully loaded and script ready
    const initializeWidget = () => {
      const widgetElement = document.getElementById('turbnb-booking-3');
      if (typeof window.TurboBooking !== 'undefined' && widgetElement) {
        try {
          // Clear previous content if any
          widgetElement.innerHTML = ''; 
          const turbo3 = new window.TurboBooking();
          turbo3.run(widgetElement, {
            companyId: 2,
            productId: 3,
            channelId: 11,
            customProperties: {
              "displayBillingTerm": true,
              "showQuantity": false,
              "titleVariant": "Modern",
              "bookNow": "RESERVE NOW ",
              "confirmReservationAndPay": "CLICK TO PAY",
              "selectTimeLabel": "Time Selection",
              "selectExperienceLabel": "Experience Type",
              "addonsLabel": "Adicionales",
              "depositObservation": "Deposit and payment instructions\n\n\n"
            }
          });
          console.log('TurboBooking widget initialized directly in page');
        } catch (error) {
          console.error('Error initializing TurboBooking widget:', error);
        }
      } else {
        console.warn('TurboBooking not available yet or container not found. Retrying...');
        // Retry in 500ms
        setTimeout(initializeWidget, 500);
      }
    };

    // Let the script load first, then initialize
    // The Script component below handles loading
    const scriptLoadTimeout = setTimeout(initializeWidget, 1000);
    
    return () => clearTimeout(scriptLoadTimeout);
    
  }, [showDirectWidget]);

  return (
    <>
      {/* Script ahora maneja la carga y podemos usar onLoad para inicializar */}
      <Script 
        src="https://widgets.turbnb.com/turbnb.booking.1.0.31.min.js"
        strategy="afterInteractive"
        onLoad={() => {
           console.log('TurboBooking script loaded via Next Script');
           // Intentar inicializar el widget si debe ser visible
           if (showDirectWidget) {
              const widgetElement = document.getElementById('turbnb-booking-3');
              if (typeof window.TurboBooking !== 'undefined' && widgetElement) {
                 try {
                   widgetElement.innerHTML = ''; 
                   const turbo3 = new window.TurboBooking();
                   turbo3.run(widgetElement, {
                     companyId: 2,
                     productId: 3,
                     channelId: 11,
                     customProperties: {
                      "displayBillingTerm": true,
                      "showQuantity": false,
                      "titleVariant": "Modern",
                      "bookNow": "RESERVE NOW ",
                      "confirmReservationAndPay": "CLICK TO PAY",
                      "selectTimeLabel": "Time Selection",
                      "selectExperienceLabel": "Experience Type",
                      "addonsLabel": "Adicionales",
                      "depositObservation": "Deposit and payment instructions\n\n\n"
                    }
                   });
                   console.log('TurboBooking widget initialized directly in page on script load');
                 } catch (error) {
                   console.error('Error initializing TurboBooking widget on script load:', error);
                 }
              } else {
                 console.warn('Widget container not ready on script load, useEffect will retry.');
              }
           }
        }}
        onError={(e) => {
            console.error('Error loading TurboBooking script:', e);
        }}
      />

      <div className="bg-gradient-to-b from-blue-50 via-white to-cyan-50 relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <motion.div 
            className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full opacity-20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 15, 0],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -10, 0],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 18,
              delay: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-to-bl from-amber-100 to-yellow-200 rounded-full opacity-10 blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              x: [0, 30, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 20,
              delay: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Hero Section */}
        <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0"
            style={{ 
              scale: heroScale,
              y: heroYTransform,
              opacity: heroOpacity
            }}
          >
            <Image
              src="/images/salvador_yacht.jpg"
              alt="Luxury private boat charter sailing in Ibiza"
              fill
              priority
              className="object-cover object-center filter brightness-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
          </motion.div>
          
          <motion.div
            className="relative z-10 container mx-auto px-4 text-center pt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span 
              className="inline-block text-cyan-300 uppercase tracking-widest font-medium text-sm md:text-base border border-cyan-300/30 bg-cyan-900/20 backdrop-blur-sm px-3 py-1 rounded-full mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Premium Experience
            </motion.span>
            
            <motion.h1 
              className="relative text-4xl md:text-5xl lg:text-7xl font-extrabold mb-5 drop-shadow-xl leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* SVG Background Pattern */}
              <motion.div 
                className="absolute -inset-4 -inset-y-2 z-[-1] overflow-hidden opacity-15"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.15 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              >
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="hero-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                      <path d="M0,10 C30,10 30,30 0,30 C-30,30 -30,10 0,10 Z" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#hero-pattern)" />
                </svg>
              </motion.div>
              
              <span className="relative z-10"> {/* Span to ensure text is above background */}
                Your Exclusive Ibiza<br className="hidden md:block" /> 
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300"
                  variants={floatingAnimation}
                  initial="initial"
                  animate="animate"
                >
                  Private Boat Charter
                </motion.span>
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto opacity-95 drop-shadow-lg font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Unforgettable moments, unparalleled freedom, and tailored luxury on the Mediterranean.
            </motion.p>
            
            {/* Badges */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 md:gap-5 mt-10 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              <motion.div 
                className="flex items-center bg-black/40 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm md:text-base border border-white/10 shadow-lg"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.5)" }}
                transition={{ duration: 0.2 }}
              >
                <FiUsers className="mr-2 text-cyan-300" />
                <span>Up to 35 Guests</span>
              </motion.div>
              <motion.div 
                className="flex items-center bg-black/40 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm md:text-base border border-white/10 shadow-lg"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.5)" }}
                transition={{ duration: 0.2 }}
              >
                <FiMap className="mr-2 text-cyan-300" />
                <span>Curated Routes</span>
              </motion.div>
              <motion.div 
                className="flex items-center bg-black/40 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm md:text-base border border-white/10 shadow-lg"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.5)" }}
                transition={{ duration: 0.2 }}
              >
                <FiGift className="mr-2 text-cyan-300" />
                <span>Ideal for Groups</span>
              </motion.div>
            </motion.div>
            
            {/* Botones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.button
                onClick={() => setShowDirectWidget(true)}
                className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-lg shadow-[0_10px_25px_-5px_rgba(59,130,246,0.5)] transition duration-300 text-lg"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 15px 30px -5px rgba(59,130,246,0.6)" 
                }}
                whileTap={{ scale: 0.98 }}
              >
                Book Your Charter Now
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Wave divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
            <svg className="w-full h-16 md:h-24 fill-white dark:fill-gray-900" viewBox="0 0 1440 74" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,37.1L48,34.4C96,31.7,192,26.2,288,31.7C384,37.1,480,53.4,576,55.2C672,57.1,768,44.4,864,37.1C960,29.9,1056,29.9,1152,31.7C1248,33.5,1344,37.1,1392,39L1440,40.8L1440,74L1392,74C1344,74,1248,74,1152,74C1056,74,960,74,864,74C768,74,672,74,576,74C480,74,384,74,288,74C192,74,96,74,48,74L0,74Z" />
            </svg>
          </div>
        </section>

        {/* Direct Booking Widget Section */}
        {showDirectWidget && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-20 bg-white py-12 border-t border-b border-gray-200 shadow-inner"
          >
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Book Your Private Charter</h2>
                  <button 
                    onClick={() => setShowDirectWidget(false)}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Close Booking Widget"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {/* This is the widget container */}
                <div id="turbnb-booking-3" className="min-h-[400px] w-full bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200"></div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Main Content Section */}
        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Columna Principal (2/3) */}
            <motion.div 
              className="lg:col-span-2 space-y-20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Sección de Descripción */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <motion.div 
                    className="absolute -top-10 -left-10 w-20 h-20 text-blue-100 opacity-20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  >
                    <svg viewBox="0 0 100 100" fill="currentColor">
                      <path d="M50,0 L60,40 L100,50 L60,60 L50,100 L40,60 L0,50 L40,40 Z" />
                    </svg>
                  </motion.div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 relative">
                  Your Private <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Oasis at Sea</span>
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p className="leading-relaxed">
                    Escape the ordinary and elevate your Ibiza holiday with unparalleled freedom and luxury. A private charter aboard the historic Salvador offers an exclusive gateway to the island&apos;s hidden gems. Imagine cruising turquoise waters, discovering secluded coves inaccessible by land, and creating lasting memories – all tailored to your desires, shared only with your chosen company.
                  </p>
                  <p className="leading-relaxed">
                    Whether celebrating a milestone, seeking quality family time, impressing clients, or simply indulging in a perfect day at sea, our private charter is the definitive way to experience the magic of Ibiza. We handle the details; you soak in the Mediterranean bliss.
                  </p>
                </div>
              </motion.section>

              {/* Nueva sección WhatsIncluded */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <WhatsIncluded items={charterHighlights} gridCols="sm:grid-cols-2 lg:grid-cols-3"/>
              </motion.section>

              {/* Galería */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                 <TripGallery images={galleryImages} title="Charter Moments Gallery" />
              </motion.section>

              {/* FAQs */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <FAQ items={faqs} title="Charter FAQs" />
              </motion.section>
            </motion.div>

            {/* Sidebar (1/3 - Sticky) */}
            <aside className="lg:col-span-1">
              <motion.div 
                className="sticky top-28 space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {/* Charter Details Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="p-6 space-y-6">
                    <h3 className="text-2xl font-bold text-gray-800">Charter Details & Booking</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100">
                            <FiClock className="w-4 h-4 text-blue-600" />
                          </div>
                          <span className="text-gray-700 font-medium">Duration:</span>
                        </div>
                        <span className="text-gray-900">4 Hours (+ Extra Available)</span>
                      </div>
                      
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-100">
                            <FiUsers className="w-4 h-4 text-purple-600" />
                          </div>
                          <span className="text-gray-700 font-medium">Capacity:</span>
                        </div>
                        <span className="text-gray-900">Up to 35 Guests</span>
                      </div>

                      <div className="pt-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100">
                            <FiDollarSign className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="text-gray-700 font-medium">Pricing (4 Hours):</span>
                        </div>
                        <ul className="space-y-2 ml-11">
                          <li className="flex justify-between text-gray-600">
                            <span>Low Season:</span>
                            <span className="font-medium">€1350 + €30/person</span>
                          </li>
                          <li className="flex justify-between text-gray-600">
                            <span>High Season:</span>
                            <span className="font-medium">€1650 + €30/person</span>
                          </li>
                          <li className="flex justify-between text-gray-600">
                            <span>Extra Hour:</span>
                            <span className="font-medium">€500</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <button
                      onClick={() => setShowDirectWidget(true)}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Book Your Charter Now
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      Excludes 21% VAT. Full day & custom quotes available.{' '}
                      <a href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                        Contact for questions
                      </a>
                    </p>
                  </div>
                </div>

                {/* Componente Why Choose Us Card */}
                <WhyChooseUsCard />
                
                {/* Componente Perfect For Card */}
                <PerfectForCard />

              </motion.div>
            </aside>
          </div>
        </div>
        
        {/* Final call to action */}
        <motion.section 
          className="relative py-20 bg-gradient-to-r from-blue-600 to-cyan-500 mt-16 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#wave-pattern)" />
              <defs>
                <pattern id="wave-pattern" patternUnits="userSpaceOnUse" width="100" height="100" patternTransform="rotate(45)">
                  <path d="M0,10 C30,10 30,30 0,30 C-30,30 -30,10 0,10 Z" fill="white" opacity="0.3" />
                </pattern>
              </defs>
            </svg>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Set Sail on Your Perfect Ibiza Experience?</h2>
              <p className="text-lg opacity-90 mb-8">
                Charter the elegant Salvador boat and create unforgettable memories with your group
              </p>
              <motion.button
                onClick={() => setShowDirectWidget(true)}
                className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-lg shadow-xl transition duration-300 text-lg hover:bg-opacity-95"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.98 }}
              >
                Reserve Your Charter Now
              </motion.button>
            </div>
          </div>
        </motion.section>
        
      </div>
      
      {/* Modal de reserva como opción alternativa */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <BookingModal
            isOpen={isBookingModalOpen}
            onClose={closeBookingModal}
            productId={3} // ID específico para Private Charter
            customProperties={{
              "displayBillingTerm": true,
              "showQuantity": false,
              "titleVariant": "Modern",
              "bookNow": "RESERVE NOW ",
              "confirmReservationAndPay": "CLICK TO PAY",
              "selectTimeLabel": "Time Selection",
              "selectExperienceLabel": "Experience Type",
              "addonsLabel": "Adicionales",
              "depositObservation": "Deposit and payment instructions\n\n\n"
            }} // Propiedades customizadas según usuario
          />
        )}
      </AnimatePresence>
    </>
  );
} 