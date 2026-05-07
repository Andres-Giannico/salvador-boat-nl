'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiSun, FiClock, FiUsers, FiMapPin, FiCamera, FiHeart } from 'react-icons/fi';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import TurbnbWidget from '@/components/booking/TurbnbWidget';

const highlights = [
  {
    icon: <FiSun className="w-6 h-6 text-orange-500" />,
    title: "Magisch gouden uur",
    description: "Ibiza's legendarische zonsondergangen — het beste uitzicht is vanaf zee"
  },
  {
    icon: <FiClock className="w-6 h-6 text-blue-500" />,
    title: "Perfecte duur: 3 uur",
    description: "Precies getimed op gouden uur en het zonsondergangsspektakel"
  },
  {
    icon: <FiUsers className="w-6 h-6 text-green-500" />,
    title: "Gezellige groepservaring",
    description: "Deel dit moment met andere liefhebbers van de zonsondergang"
  },
  {
    icon: <FiMapPin className="w-6 h-6 text-red-500" />,
    title: "Toplocaties",
    description: "De mooiste plekken om de zon te zien zakken langs de kust"
  },
  {
    icon: <FiCamera className="w-6 h-6 text-purple-500" />,
    title: "Foto-waardige momenten",
    description: "Prachtige beelden met de Middellandse Zee als decor"
  },
  {
    icon: <FiHeart className="w-6 h-6 text-pink-500" />,
    title: "Romantische sfeer",
    description: "Ideaal voor koppels, aanzoeken en bijzondere momenten"
  }
];

const galleryImages = [
  { src: "/images/optimized/friends-ibiza-sunset-boat.webp", alt: "Groep geniet van zonsondergang op boot Ibiza" },
  { src: "/images/optimized/drinks-cave-sunset-ibiza.webp", alt: "Cava tijdens magische zonsondergangcruise Ibiza" },
  { src: "/images/boat/doschicassupsunset.webp", alt: "Twee gasten op paddleboard tijdens zonsondergangtocht" },
  { src: "/images/sunset.png", alt: "Zonsondergang Ibiza vanaf boot Salvador" },
  { src: "/images/optimized/es-vedra-island-ibiza-background.webp", alt: "Zonsondergang met eiland Es Vedrà op de achtergrond" },
  { src: "/images/optimized/sunset-sailing-cruise-ibiza.webp", alt: "Zeilen bij zonsondergang in het water rond Ibiza" }
];

export default function SunsetBoatTripsClientPage() {
  return (
    <div className="bg-gradient-to-b from-orange-50 via-white to-pink-50 relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-orange-200 to-pink-300 rounded-full opacity-20 blur-3xl"
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
      </div>

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/optimized/sunset-sailing-cruise-ibiza.webp"
            alt="Magische zonsondergangboottocht Ibiza met Salvador"
            fill
            priority
            className="object-cover object-center filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </motion.div>
        
        <motion.div
          className="relative z-10 container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span 
            className="inline-block text-orange-300 uppercase tracking-widest font-medium text-sm md:text-base border border-orange-300/30 bg-orange-900/20 backdrop-blur-sm px-3 py-1 rounded-full mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Magische zonsondergangen
          </motion.span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-xl leading-tight">
            Zonsondergangboottochten <span className="text-orange-400">Ibiza</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95 mb-8 drop-shadow-md">
            Beleef <span className="font-semibold text-orange-300">3 uur</span> op zee tijdens de gouden uren. 
            Ibiza's zonsondergang — het mooiste vanaf de Middellandse Zee.
          </p>
          
          {/* Badges */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 md:gap-5 mt-10 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <motion.div 
              className="flex items-center bg-black/40 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm md:text-base border border-white/10 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <FiClock className="mr-2 text-orange-300" />
              <span>18:00 – 21:00 (circa)</span>
            </motion.div>
            <motion.div 
              className="flex items-center bg-black/40 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm md:text-base border border-white/10 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <FiUsers className="mr-2 text-orange-300" />
              <span>€80 p.p.</span>
            </motion.div>
          </motion.div>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <Link
              href="#booking"
              className="inline-block bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-lg shadow-[0_10px_25px_-5px_rgba(251,146,60,0.5)] transition duration-300 text-lg"
            >
              Boek je zonsondergangtocht
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <motion.div 
            className="text-center mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ibiza's mooiste <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">zonsondergangervaring</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Vaar mee met Salvador Ibiza voor een onvergetelijke <strong>zonsondergangboottocht</strong> tijdens het gouden uur. 
              Onze <strong>zonsondergangtochten</strong> zijn zo gepland dat je de indrukwekkendste momenten meemaakt als de zon boven de zee zakt.
            </p>
            <p className="text-md text-gray-600">
              Vanuit <strong>San Antonio</strong> varen we naar de beste plekken aan de kust. 
              Zie de lucht kleuren in oranje, roze en paars, met premium drankjes, Spaanse tapas en het zachte geluid van de golven.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-gray-50">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 ml-4">
                    {highlight.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Gallery */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Galerij zonsondergangmomenten
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  className="relative aspect-video overflow-hidden rounded-lg cursor-pointer group shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 text-sm">{image.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Booking Section */}
          <motion.div
            id="booking"
            className="bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Boek je zonsondergangavontuur
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Mis Ibiza's meest magische momenten niet. Reserveer vandaag nog je sunset trip!
            </p>
            
            {/* Widget Container */}
            <div className="max-w-2xl mx-auto">
                           <TurbnbWidget 
               companyId={2}
               productId={2} 
               channelId={11}
               billingTermIds={[21]}
               customProperties={{
                 "displayBillingTerm": true,
                 "showQuantity": true,
                 "quantity": "Gasten",
                 "titleVariant": "Modern",
                 "bookNow": "ZONSONDERGANG BOEKEN",
                 "confirmReservationAndPay": "BEVESTIGEN & BETALEN",
                 "selectTimeLabel": "Kies tijd zonsondergang",
                 "selectExperienceLabel": "Zonsondergangervaring",
                 "addonsLabel": "Extra's",
                 "childrenAge": "6 tot 12 jaar",
                 "infantAge": "0 tot 5 jaar",
                 "depositObservation": "Na je boeking ontvang je een bevestiging met ontmoetingspunt en tijd. Controleer of telefoon en e-mail kloppen. Aanbetaling €20 per persoon; het restant aan boord."
               }}
             />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Klaar voor je zonsondergangboottocht op Ibiza?
            </h4>
            <p className="text-lg text-gray-600 mb-8">
              Een onvergetelijke avond op zee. Elke zonsondergang is uniek.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/boat-trips"
                className="inline-block bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Alle boottochten
              </Link>
              <Link
                href="/contact"
                className="inline-block border-2 border-gray-800 text-gray-800 font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 