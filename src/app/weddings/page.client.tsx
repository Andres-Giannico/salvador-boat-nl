'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { FiHeart, FiAnchor, FiCamera, FiUsers, FiMail, FiArrowRight, FiMusic, FiMap } from 'react-icons/fi';
import { GiWineBottle } from 'react-icons/gi';
import TripGallery from '@/components/trips/TripGallery';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import BookingModal from '@/components/booking/BookingModal';

// Placeholder for wedding features
const weddingFeatures = [
  { icon: FiHeart, text: 'Intimate & Romantic Atmosphere' },
  { icon: FiCamera, text: 'Spectacular Photo Opportunities' },
  { icon: FiAnchor, text: 'Unique Ceremony Backdrop' },
  { icon: FiUsers, text: 'Personalized Service & Planning' },
];

// Imágenes para la galería de Bodas
const galleryImages = [
  // Nuevas imágenes de la carpeta /images/boat/private-new/ (enfocadas en ambiente y detalles)
  { src: "/images/boat/private-new/tapasycavapopabarco_1.webp", alt: "Elegant tapas and cava setting for a wedding celebration" },
  { src: "/images/boat/private-new/sushiycavapopa_1.webp", alt: "Premium sushi and cava, perfect for a luxury wedding at sea" },
  { src: "/images/boat/private-new/Frutasenbarra_1.webp", alt: "Beautiful fruit platter at the bar, ideal for wedding guests" },
  { src: "/images/boat/private-new/cavaenbarco_1.webp", alt: "Chilled cava ready for a wedding toast on Salvador Ibiza" },
  { src: "/images/boat/private-new/interiorbarcosalvador_1.webp", alt: "Elegant interior of Salvador boat, suitable for intimate wedding gatherings" },
  { src: "/images/boat/private-new/interiorbarcocubierta_1.webp", alt: "Covered deck area, offering a charming space for wedding ceremonies or receptions" },
  { src: "/images/boat/private-new/popabarcosalvador_1.webp", alt: "Stern of Salvador Ibiza, a picturesque backdrop for wedding photos" },
  // Puedes añadir más imágenes relevantes para bodas de otras carpetas si es necesario
  // Ejemplo de imagen de ambiente general (si aplica)
  // { src: "/images/optimized/ibiza-sunset-boat-trip-salvador.webp", alt: "Romantic sunset view, perfect for a wedding cruise" }
];

export default function WeddingsClientPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [showDirectWidget, setShowDirectWidget] = useState(false);
  
  // Load widget CSS dynamically
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

  // Handler function for booking buttons
  const handleBookButtonClick = () => {
    setShowDirectWidget(true);
    // Scroll to widget section
    requestAnimationFrame(() => {
      const widgetSection = document.getElementById('wedding-booking-section');
      if (widgetSection) {
        widgetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        setTimeout(() => {
          const widgetSectionRetry = document.getElementById('wedding-booking-section');
          if (widgetSectionRetry) {
            widgetSectionRetry.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 150);
      }
    });
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  // Initialize widget when shown
  useEffect(() => {
    if (typeof window === 'undefined' || !showDirectWidget) return;
    
    const initializeWidget = () => {
      const widgetElement = document.getElementById('turbnb-booking-wedding'); 
      if (typeof window.TurboBooking !== 'undefined' && widgetElement) {
        try {
          widgetElement.innerHTML = ''; 
          const turboWedding = new window.TurboBooking();
          turboWedding.run(widgetElement, {
            companyId: 2,
            productId: 3, // Same as private charter
            channelId: 11,
            customProperties: {
              "displayBillingTerm": true, 
              "showQuantity": false, 
              "titleVariant": "Modern",
              "bookNow": "INQUIRE NOW",
              "confirmReservationAndPay": "PAY CONFIRMATION DEPOSIT OF ",
              "selectTimeLabel": "Select Preferred Time",
              "selectExperienceLabel": "Select Wedding Charter",
              "addonsLabel": "Optional Wedding Upgrades",
              "depositObservation": "Make sure you selected the amount of guests for your wedding. After the reservation you will get the voucher with all the info as location and booking details"
            }
          });
          console.log('Wedding Widget Initialized');
        } catch (error) {
          console.error("Error initializing wedding widget:", error);
        }
      }
    };

    const scriptLoadTimeout = setTimeout(initializeWidget, 500);
    return () => clearTimeout(scriptLoadTimeout);
    
  }, [showDirectWidget]);

  return (
    <>
      {/* TurboBooking Script */}
      <Script 
        src="https://widgets.turbnb.com/turbnb.booking.1.0.31.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log('TurboBooking script loaded for weddings');
          if (showDirectWidget) {
            const widgetElement = document.getElementById('turbnb-booking-wedding');
            if (typeof window.TurboBooking !== 'undefined' && widgetElement) {
              try {
                widgetElement.innerHTML = ''; 
                const turboWedding = new window.TurboBooking();
                turboWedding.run(widgetElement, {
                  companyId: 2,
                  productId: 3,
                  channelId: 11,
                  customProperties: {
                    "displayBillingTerm": true,
                    "showQuantity": false,
                    "titleVariant": "Modern",
                    "bookNow": "RESERVE NOW",
                    "confirmReservationAndPay": "CONFIRM & PAY",
                    "selectTimeLabel": "Select Time",
                    "selectExperienceLabel": "Select Wedding Charter",
                    "addonsLabel": "Wedding Add-ons",
                    "depositObservation": "Wedding booking confirmation"
                  }
                });
                console.log('Wedding widget initialized on script load');
              } catch (error) {
                console.error('Error initializing wedding widget on script load:', error);
              }
            }
          }
        }}
        onError={(e) => {
          console.error('Error loading TurboBooking script:', e);
        }}
             />
       
      <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-blue-50">
        {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/optimized/ibiza-sunset-boat-trip-salvador.webp" // Placeholder image - change to a romantic/wedding themed one later
            alt="Romantic sunset wedding setting on Salvador Ibiza"
            fill
            priority
            className="object-cover object-center filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-lg"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            Weddings at Sea
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Celebrate your special day with an unforgettable wedding experience aboard Salvador Ibiza.
          </motion.p>
        </div>
      </section>

      {/* Why Choose Us Section - Enhanced Text */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              Your Dream <span className="text-pink-600">Wedding at Sea</span> in Ibiza
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 }}
            >
              Create the most <strong>romantic wedding experience in Ibiza</strong> aboard our traditional wooden boat Salvador. 
              Exchange vows surrounded by crystal-clear Mediterranean waters, dramatic cliffs, and breathtaking sunsets 
              that will make your special day truly unforgettable.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.4 }}
            >
              Our <strong>intimate boat wedding ceremonies</strong> offer complete privacy away from crowds, with personalized service 
              and stunning natural backdrops. From <strong>elopements to intimate celebrations</strong> for up to 36 guests, 
              we create magical moments that you and your loved ones will treasure forever.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {weddingFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <div className="inline-block p-3 bg-gradient-to-br from-pink-100 to-blue-100 rounded-full mb-4">
                  <feature.icon className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{feature.text}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Packages Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              Ibiza Wedding Packages
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 }}
            >
              Choose from our carefully crafted wedding packages or let us create a completely customized experience for your special day.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 border-2 border-pink-200 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Salvador Boat</span>
              </div>
              <div className="text-center mb-6 mt-4">
                <FiHeart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Wedding at Sea</h3>
                <p className="text-gray-600">Your dream wedding aboard Salvador</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Up to 36 guests
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  4-hour private charter
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Standard open bar & snacks
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Ceremony setup on deck
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Swimming & snorkeling gear
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Professional captain & crew
                </li>
              </ul>
              <div className="text-center">
                <div className="mb-4">
                  <div className="text-lg font-bold text-pink-600">Low Season: €1,350</div>
                  <div className="text-lg font-bold text-pink-600">High Season: €1,650</div>
                  <p className="text-sm text-gray-600 mt-1">+ €30/person (included) + IVA</p>
                </div>
                <button 
                  onClick={handleBookButtonClick}
                  className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Book Your Wedding
                </button>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-pink-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-center mb-6">
                <FiAnchor className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Bar Service Included</h3>
                <p className="text-gray-600 text-sm mb-2">Standard service included + optional upgrades</p>
              </div>
              
              {/* Bar Service Options */}
              <div className="space-y-4 mb-6">
                <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-800">Standard Bar Service</h4>
                    <span className="text-green-600 font-bold text-lg">✓ Included</span>
                  </div>
                  <p className="text-sm text-gray-600">Cava, sangría, vino, cerveza, rosado, proseco & soft drinks (€30/person automatically added)</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border-2 border-pink-300 relative">
                  <div className="absolute -top-2 right-4">
                    <span className="bg-pink-600 text-white px-2 py-1 rounded text-xs font-semibold">Upgrade</span>
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-800">Premium Bar Service</h4>
                    <span className="text-pink-600 font-bold text-lg">+€25/person</span>
                  </div>
                  <p className="text-sm text-gray-600">Add spirits bottle (vodka, whisky, rum, gin) with mixers for cocktails (Total: €55/person)</p>
                </div>
              </div>

              {/* Additional Services */}
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-800 mb-3 text-center">Optional Extras</h4>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between text-gray-700 bg-white rounded-lg p-2">
                    <span className="text-sm">Extra Hour</span>
                    <span className="text-pink-600 font-bold">€500</span>
                  </li>
                  <li className="flex items-center justify-between text-gray-700 bg-white rounded-lg p-2">
                    <span className="text-sm">Deluxe Tapas (per person)</span>
                    <span className="text-pink-600 font-bold">€40</span>
                  </li>
                </ul>
              </div>

              <div className="text-center mt-6">
                <p className="text-sm text-gray-600 mb-4">All prices exclude IVA (VAT)</p>
                <button 
                  onClick={handleBookButtonClick}
                  className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Book Your Wedding
                </button>
              </div>
            </motion.div>
          </div>

          {/* Season Information */}
          <div className="bg-white rounded-xl p-6 mt-8 border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Season Information</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="text-center">
                <div className="font-semibold text-pink-600">Low Season (€1,350)</div>
                <p>May & October</p>
              </div>
              <div className="text-center">
                <div className="font-semibold text-pink-600">High Season (€1,650)</div>
                <p>June, July, August & September</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Ibiza for Your Wedding */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Why Choose <span className="text-pink-600">Ibiza</span> for Your Wedding?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FiCamera className="w-4 h-4 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Stunning Natural Beauty</h3>
                      <p className="text-gray-600">Ibiza's dramatic coastline, crystal-clear waters, and legendary sunsets provide the most romantic backdrop for your wedding photos and memories.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FiMap className="w-4 h-4 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Unique Venue Experience</h3>
                      <p className="text-gray-600">Our traditional wooden boat offers an intimate, exclusive venue that's completely different from conventional wedding locations.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FiMusic className="w-4 h-4 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Perfect Weather & Atmosphere</h3>
                      <p className="text-gray-600">Ibiza's Mediterranean climate and magical island atmosphere create the perfect conditions for outdoor wedding celebrations.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <GiWineBottle className="w-4 h-4 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">All-Inclusive Luxury</h3>
                      <p className="text-gray-600">From gourmet catering to premium drinks and professional service, we handle every detail so you can focus on celebrating your love.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/boat/private-new/tapasycavapopabarco_1.webp"
                    alt="Elegant wedding setup with tapas and champagne on Salvador Ibiza boat"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Added Tailored Celebrations Section */}
      <section className="py-20 lg:py-28 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              Tailored to Your Dream
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 }}
            >
              Every wedding is unique. We work closely with you to personalize your celebration, ensuring it perfectly reflects your style and vision. From the route and schedule to music and catering, let us help you craft your perfect day.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div className="flex items-start space-x-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <FiMap className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold mb-1">Custom Routes</h4>
                <p className="text-gray-500">Choose your ideal backdrop, from hidden coves to iconic landmarks.</p>
              </div>
            </motion.div>
            <motion.div className="flex items-start space-x-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <GiWineBottle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold mb-1">Catering & Drinks</h4>
                <p className="text-gray-500">Select from premium bar options and personalized catering menus.</p>
              </div>
            </motion.div>
            <motion.div className="flex items-start space-x-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
              <FiMusic className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold mb-1">Music & Decor</h4>
                <p className="text-gray-500">Customize the ambiance to match your wedding theme.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Gallery Placeholder Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
           <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              Cherished Wedding Moments at Sea
            </motion.h2>
            {/* Integrar TripGallery aquí */}
            <TripGallery images={galleryImages} title="" /> 
            <p className="text-gray-600 max-w-2xl mx-auto mt-8">
              Imagine your special day set against the stunning backdrop of Ibiza's coastline. These moments showcase the unique and intimate atmosphere Salvador Ibiza offers for your wedding celebration.
            </p>
        </div>
      </section>

      {/* Contact CTA Section - Updated Link and Text */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Unforgettable Wedding Awaits</h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10">
              Salvador Ibiza offers the perfect setting for an intimate wedding charter. Let's start planning your special day. Check availability and details for our private charters.
            </p>
            <motion.button
              onClick={handleBookButtonClick}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 25px rgba(255, 255, 255, 0.3)" }} 
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold py-4 px-10 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-0.5"
            >
              Book Your Wedding Charter <FiArrowRight className="ml-1 w-5 h-5"/>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Direct Booking Widget Section */}
      {showDirectWidget && (
        <motion.section
          id="wedding-booking-section"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-20 bg-white py-12 border-t border-b border-gray-200 shadow-inner"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Book Your Wedding Charter</h2>
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
              
              {/* Wedding-specific note */}
              <div className="bg-pink-50 border-l-4 border-pink-500 p-4 mb-6 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-pink-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-pink-800">
                      <span className="font-medium">Wedding Charter:</span> This is for booking the <strong>entire Salvador boat for your wedding ceremony</strong>. 
                      Perfect for intimate celebrations with up to 36 guests. Include any special requests or wedding details in the comments section.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Widget container */}
              <div id="turbnb-booking-wedding" className="min-h-[400px] w-full bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200"></div>

              {/* Wedding upgrade note */}
              <motion.div
                className="mt-8 p-4 bg-pink-50 border-l-4 border-pink-400 rounded-r-lg max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-sm text-pink-800">
                  <strong>Wedding Services:</strong> Standard bar service (€30pp) automatically included. Optional upgrades: Premium spirits (+€25pp), Deluxe tapas (€40pp), extra hours (€500). All prices + VAT.
                </p>
              </motion.div>

            </div>
          </div>
        </motion.section>
      )}
    </div>
    
    {/* Booking Modal as alternative */}
    <AnimatePresence>
      {isBookingModalOpen && (
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={closeBookingModal}
          productId={3} // Same as private charter
          customProperties={{
            "displayBillingTerm": true,
            "showQuantity": false,
            "titleVariant": "Modern",
            "bookNow": "RESERVE NOW",
            "confirmReservationAndPay": "CONFIRM & PAY",
            "selectTimeLabel": "Select Time",
            "selectExperienceLabel": "Select Wedding Charter",
            "addonsLabel": "Wedding Add-ons",
            "depositObservation": "Wedding booking confirmation"
          }}
        />
      )}
    </AnimatePresence>
    </>
  );
} 