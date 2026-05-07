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
import { TURBNB_WIDGET_CSS, TURBNB_WIDGET_JS } from '@/lib/turbnb-widget-assets';

// Placeholder for wedding features
const weddingFeatures = [
  { icon: FiHeart, text: 'Intieme & romantische sfeer' },
  { icon: FiCamera, text: 'Unieke fotomomenten' },
  { icon: FiAnchor, text: 'Bijzondere setting op zee' },
  { icon: FiUsers, text: 'Persoonlijke service & planning' },
];

// Imágenes para la galería de Bodas
const galleryImages = [
  // Nuevas imágenes de la carpeta /images/boat/private-new/ (enfocadas en ambiente y detalles)
  { src: "/images/boat/private-new/tapasycavapopabarco_1.webp", alt: "Elegante tapas en cava voor een bruiloft op zee" },
  { src: "/images/boat/private-new/sushiycavapopa_1.webp", alt: "Sushi en cava — luxe bruiloft aan boord" },
  { src: "/images/boat/private-new/Frutasenbarra_1.webp", alt: "Fruitschaal aan de bar voor bruiloftsgasten" },
  { src: "/images/boat/private-new/cavaenbarco_1.webp", alt: "Gekoelde cava voor de trouwtoost op Salvador Ibiza" },
  { src: "/images/boat/private-new/interiorbarcosalvador_1.webp", alt: "Elegant interieur — intieme bruiloftsbijeenkomst" },
  { src: "/images/boat/private-new/interiorbarcocubierta_1.webp", alt: "Overdekt dek — sfeervol voor ceremonie of receptie" },
  { src: "/images/boat/private-new/popabarcosalvador_1.webp", alt: "Achterplecht Salvador als trouwdecoor" },
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
      link.href = TURBNB_WIDGET_CSS;
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
              "bookNow": "NU INFORMATIE AANVRAGEN",
              "confirmReservationAndPay": "BEVESTIG AANBETALING VAN ",
              "selectTimeLabel": "Voorkeurstijd",
              "selectExperienceLabel": "Bruiloftscharter",
              "addonsLabel": "Optionele upgrades",
              "depositObservation": "Controleer het aantal gasten voor je bruiloft. Na reservering ontvang je een voucher met locatie- en boekingsdetails."
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
        src={TURBNB_WIDGET_JS}
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
                    "bookNow": "NU RESERVEREN",
                    "confirmReservationAndPay": "BEVESTIGEN & BETALEN",
                    "selectTimeLabel": "Kies tijd",
                    "selectExperienceLabel": "Bruiloftscharter",
                    "addonsLabel": "Extra's bruiloft",
                    "depositObservation": "Bevestiging van je bruiloftsboeking"
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
            alt="Romantische zonsondergang — trouwsetting op Salvador Ibiza"
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
            Bruiloften op zee
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Vier jullie grote dag met een onvergetelijke bruiloft aan boord van Salvador Ibiza.
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
              Jouw droom<span className="text-pink-600">bruiloft op zee</span> in Ibiza
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 }}
            >
              Creëer de meest <strong>romantische bruiloft in Ibiza</strong> aan boord van onze traditionele houten boot Salvador — 
              trouwgeloften met helder Mediterraan water, dramatische kliffen en zonsondergangen die je dag onvergetelijk maken.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.4 }}
            >
              Onze <strong>intieme ceremonies op de boot</strong> bieden privacy weg van de drukte, met persoonlijke service 
              en natuur als decor. Van <strong>elopements tot intieme vieringen</strong> tot 36 gasten — momenten om voor altijd te koesteren.
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
              Ibiza trouwpakketten
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 }}
            >
              Kies een van onze pakketten of laat een volledig op maat gemaakte ervaring samenstellen voor jullie grote dag.
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
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Bruiloft op zee</h3>
                <p className="text-gray-600">Jullie droombruiloft aan boord van de Salvador</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Tot 36 gasten
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  4 uur privécharter
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Open bar (cava, sangría, wijn, bier, rosé, prosecco) & hapjes
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Ceremonie-opstelling op het dek
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Zwem- & snorkeluitrusting
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Professionele kapitein & bemanning
                </li>
              </ul>
              <div className="text-center">
                <div className="mb-4">
                  <div className="text-lg font-bold text-pink-600">Laagseizoen: €1.350</div>
                  <div className="text-lg font-bold text-pink-600">Hoogseizoen: €1.650</div>
                  <p className="text-sm text-gray-600 mt-1">+ €30/persoon (inbegrepen) + btw</p>
                </div>
                <button 
                  onClick={handleBookButtonClick}
                  className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Boek jullie bruiloft
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
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Bar inbegrepen</h3>
                <p className="text-gray-600 text-sm mb-2">Standaardservice inbegrepen + optionele upgrades</p>
              </div>
              
              {/* Bar Service Options */}
              <div className="space-y-4 mb-6">
                <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-800">Standaard bar</h4>
                    <span className="text-green-600 font-bold text-lg">✓ Inbegrepen</span>
                  </div>
                  <p className="text-sm text-gray-600">Cava, sangría, wijn, bier, rosé, prosecco & frisdrank (€30/persoon automatisch toegevoegd)</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border-2 border-pink-300 relative">
                  <div className="absolute -top-2 right-4">
                    <span className="bg-pink-600 text-white px-2 py-1 rounded text-xs font-semibold">Upgrade</span>
                  </div>
                                      <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-800">Premium bar</h4>
                      <span className="text-pink-600 font-bold text-lg">€55/fles</span>
                    </div>
                    <p className="text-sm text-gray-600">Sterke drank per fles (wodka, whisky, rum, gin) met mixers voor cocktails</p>
                </div>
              </div>

              {/* Additional Services */}
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-800 mb-3 text-center">Optionele extra's</h4>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between text-gray-700 bg-white rounded-lg p-2">
                    <span className="text-sm">Extra uur</span>
                    <span className="text-pink-600 font-bold">€500</span>
                  </li>
                  <li className="flex items-center justify-between text-gray-700 bg-white rounded-lg p-2">
                    <span className="text-sm">Deluxe tapas (per persoon)</span>
                    <span className="text-pink-600 font-bold">€40</span>
                  </li>
                </ul>
              </div>

              <div className="text-center mt-6">
                <p className="text-sm text-gray-600 mb-4">Alle prijzen excl. btw</p>
                <button 
                  onClick={handleBookButtonClick}
                  className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Boek jullie bruiloft
                </button>
              </div>
            </motion.div>
          </div>

          {/* Season Information */}
          <div className="bg-white rounded-xl p-6 mt-8 border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Seizoensinformatie</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="text-center">
                <div className="font-semibold text-pink-600">Laagseizoen (€1.350)</div>
                <p>Mei & oktober</p>
              </div>
              <div className="text-center">
                <div className="font-semibold text-pink-600">Hoogseizoen (€1.650)</div>
                <p>Juni t/m september</p>
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
                  Waarom <span className="text-pink-600">Ibiza</span> voor jullie bruiloft?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FiCamera className="w-4 h-4 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Natuurschoon</h3>
                      <p className="text-gray-600">Ibiza's kustlijn, helder water en zonsondergangen — het perfecte decor voor foto's en herinneringen.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FiMap className="w-4 h-4 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Unieke locatie</h3>
                      <p className="text-gray-600">Onze traditionele houten boot is een intieme, exclusieve setting — ver verwijderd van standaard trouwlocaties.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FiMusic className="w-4 h-4 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Klimaat & sfeer</h3>
                      <p className="text-gray-600">Mediteraans klimaat en magische eilandsfeer — ideaal voor vieringen in de open lucht.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <GiWineBottle className="w-4 h-4 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">All-inclusive comfort</h3>
                      <p className="text-gray-600">Van catering tot drankjes en service — wij regelen details zodat jullie kunnen genieten.</p>
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
                    alt="Tapas en bubbels — trouwsetting op Salvador Ibiza"
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
              Op maat van jullie droom
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 }}
            >
              Elke bruiloft is uniek. Samen personaliseren we route, planning, muziek en catering zodat alles bij jullie past.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div className="flex items-start space-x-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <FiMap className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold mb-1">Routes op maat</h4>
                <p className="text-gray-500">Van verborgen baaien tot iconische plekken — jullie kiezen het decor.</p>
              </div>
            </motion.div>
            <motion.div className="flex items-start space-x-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <GiWineBottle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold mb-1">Catering & drank</h4>
                <p className="text-gray-500">Premium bar-opties en persoonlijke menu's.</p>
              </div>
            </motion.div>
            <motion.div className="flex items-start space-x-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
              <FiMusic className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold mb-1">Muziek & sfeer</h4>
                <p className="text-gray-500">Afstemmen op jullie thema en stijl.</p>
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
              Onvergetelijke momenten op zee
            </motion.h2>
            {/* Integrar TripGallery aquí */}
            <TripGallery images={galleryImages} title="" /> 
            <p className="text-gray-600 max-w-2xl mx-auto mt-8">
              Jullie grote dag tegen de achtergrond van de Ibizaanse kust — intiem en bijzonder met Salvador Ibiza.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Jullie onvergetelijke bruiloft wacht</h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10">
              Salvador Ibiza is de ideale setting voor een intiem bruiloftscharter. Plan jullie dag — bekijk beschikbaarheid en details bij onze privécharters.
            </p>
            <motion.button
              onClick={handleBookButtonClick}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 25px rgba(255, 255, 255, 0.3)" }} 
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold py-4 px-10 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-0.5"
            >
              Bruiloftscharter boeken <FiArrowRight className="ml-1 w-5 h-5"/>
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Bruiloftscharter boeken</h2>
                <button 
                  onClick={() => setShowDirectWidget(false)}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Boekingswidget sluiten"
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
                      <span className="font-medium">Bruiloftscharter:</span> Hiermee reserveer je <strong>de hele Salvador voor jullie ceremonie</strong>. 
                      Geschikt voor intieme vieringen tot 36 gasten. Vermeld bijzondere wensen in het opmerkingenveld.
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
                    <strong>Bruiloftservice:</strong> Standaard bar (€30 p.p.) automatisch inbegrepen. Optioneel: premium sterke drank (€55/fles), deluxe tapas (€40 p.p.), extra uur (€500). Alle prijzen + btw.
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
            "bookNow": "NU RESERVEREN",
            "confirmReservationAndPay": "BEVESTIGEN & BETALEN",
            "selectTimeLabel": "Kies tijd",
            "selectExperienceLabel": "Bruiloftscharter",
            "addonsLabel": "Extra's bruiloft",
            "depositObservation": "Bevestiging van je bruiloftsboeking"
          }}
        />
      )}
    </AnimatePresence>
    </>
  );
} 