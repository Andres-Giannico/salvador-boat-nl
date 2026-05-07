"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FiClock, FiUsers, FiMapPin, FiSunset, FiDollarSign, FiAnchor, FiCompass, FiInfo } from 'react-icons/fi';
import { GiWaterSplash, GiSparklingSabre } from 'react-icons/gi';
import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

// Import our reusable components
import TripGallery from '@/components/trips/TripGallery';
import TripHighlights from '@/components/trips/TripHighlights';
import ReviewsSection from '@/components/trips/ReviewsSection';
import FAQ from '@/components/trips/FAQ';
import TurbnbWidget from '@/components/booking/TurbnbWidget';
import { getSiteUrl } from '@/config/site';
import Script from 'next/script';

// Trip image gallery - Extended
const images = [
  { src: "/images/optimized/ibiza-sunset-boat-trip-salvador.webp", alt: "Iconische Ibiza-zonsondergang vanaf de Salvador" },
  { src: "/images/boat/doschicassupsunset.webp", alt: "Twee vriendinnen paddleboarden bij zonsondergang" },
  { src: "/images/boat/parejafeliz.webp", alt: "Gelukkig stel op de zonsondergangcruise" },
  { src: "/images/boat/aereabarco2.webp", alt: "Luchtbeeld van de Salvador in het gouden uur" },
  { src: "/images/boat/chicasmuyfelices.webp", alt: "Vrienden vieren de zonsondergang op de boot" },
  { src: "/images/boat/chicassentadasdisfrutando.webp", alt: "Ontspannen op het dek met uitzicht op de zonsondergang" },
  { src: "/images/boat/chicassentadassup.webp", alt: "Op paddleboards genieten van de zonsondergang" },
  { src: "/images/boat/barcointerior.webp", alt: "Gezellig interieur van de Salvador bij zonsondergang" },
  { src: "/images/boat/consolabarco.webp", alt: "Uitzicht vanaf de stuurconsole bij zonsondergang" },
  { src: "/images/optimized/drinks-cave-sunset-ibiza.webp", alt: "Drankjes bij een grot bij zonsondergang" },
  { src: "/images/optimized/friends-ibiza-sunset-boat.webp", alt: "Silhouetten tegen een prachtige avondlucht" },
];
const tripHighlights = [
  {
    icon: <FiSunset className="w-6 h-6 text-orange-600" />,
    title: "Iconische zonsondergangcruise",
    description: "Ibiza's legendarische zonsondergang voor Café Mambo & Café del Mar."
  },
  {
    icon: <FiCompass className="w-6 h-6 text-blue-600" />,
    title: "Flexibele routes",
    description: "De kapitein kiest de beste route (noord of west) op basis van weer voor optimaal uitzicht."
  },
  {
    icon: <GiSparklingSabre className="w-6 h-6 text-yellow-600" />,
    title: "Premium service",
    description: "Onbeperkte drankjes (inclusief cava!), Spaanse tapas, vers fruit en goede muziek."
  },
  {
    icon: <GiWaterSplash className="w-6 h-6 text-cyan-600" />,
    title: "Optionele zwemstop",
    description: "Afhankelijk van tijd en omstandigheden: zwemmen, snorkelen of paddleboarden."
  },
];

// Trip-specific FAQs
const tripFAQs = [
  {
    question: "Hoe laat vertrekt de zonsondergangtocht?",
    answer: "Vertrek is meestal tussen 17:00 en 18:30 uur, afhankelijk van de maand voor het beste licht. De exacte tijd bevestigen we bij je boeking. Kom 30 minuten van tevoren."
  },
  {
    question: "Hoe is de route?",
    answer: (
      <>
        De kapitein kiest de beste route op basis van het weer — noord (Cala Salada, Punta Galera) of west (Cala Bassa, Cala Conta). We liggen voor de zonsondergang voor Café Mambo en Café del Mar.
        <Link href="/routes" className="text-blue-600 hover:underline font-medium ml-1">
          Meer over onze routes.
        </Link>
      </>
    )
  },
  {
    question: "Wat voor eten en drinken zit erbij?",
    answer: "Onbeperkt drankjes (bier, wijn, cava, sangría, frisdrank, water) en Spaanse tapas met vers fruit."
  },
  {
    question: "Zijn er activiteiten op het water?",
    answer: "Ja, als zee en tijd het toelaten: zwemmen, snorkelen, paddleboarden en kajakken vóór het zonsondergangsmoment."
  },
  {
    question: "Wat moet ik meenemen?",
    answer: "Comfortabele kleding, optioneel zwemkleding, handdoek, zonnebril en een lichte jas — na zonsondergang kan het fris zijn. Geen eigen eten of drinken aan boord."
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
}

export default function SunsetTripClientPage({}: SunsetTripClientPageProps) {
  const siteUrl = getSiteUrl();
  return (
    <div className="bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>
      </div>

      {/* Hero Section - Revised */}
      <section className="relative h-[85vh] min-h-[650px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/optimized/ibiza-sunset-boat-trip-salvador.webp" 
            alt="Spectaculaire Ibiza-zonsondergang vanaf de Salvador"
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
            Mixed <span className="text-orange-400">zonsondergangtocht</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-8 drop-shadow-md"
          >
            De magie van Ibiza's zonsondergang vanaf zee, aan boord van onze traditionele houten boot.
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
              <span>Iconische zonsondergang</span>
            </motion.div>
            <motion.div variants={fadeInItem} className="flex items-center bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <FiMapPin className="mr-2 text-orange-400" />
              <span>Uitzicht richting Café Mambo</span>
            </motion.div>
            <motion.div variants={fadeInItem} className="flex items-center bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <FiDollarSign className="mr-2 text-orange-400" />
              <span>Drankjes & tapas inbegrepen</span>
            </motion.div>
          </motion.div>
          <Link href="#booking-widget">
            <motion.span 
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(234, 88, 12, 0.4)" }} // Enhanced hover
              whileTap={{ scale: 0.95 }}
              // Larger button with icon
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-bold py-4 px-10 rounded-lg shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              Boek je zonsondergang <FiAnchor className="ml-1 w-5 h-5"/>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Viert het Ibiza-gevoel</h2>
              <div className="prose prose-lg text-gray-600 mb-8 max-w-none">
                <p>
                  Stap aan boord van Salvador Ibiza voor een <strong>magische avond op zee</strong>. Onze gemengde zonsondergangtocht is dé manier om de iconische Ibizan sunset vanaf het water te zien — relaxed, met adembenemend uitzicht.
                </p>
                <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Een onvergetelijke zonsondergang</h3>
                <p>
                  Afhankelijk van de omstandigheden koersen we langs Ibiza's beroemde kust en liggen we precies goed voor <strong>Café Mambo en Café del Mar</strong> tijdens de climax. Proost met cava terwijl de zon ondergaat.
                </p>
                <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Meer dan alleen varen</h3>
                <p>
                  Een <strong>viering van de authentieke Ibiza-lifestyle</strong>: ideaal voor stellen, vrienden en solo-reizigers. Muziek, sfeer en onze bekende <strong>all-inclusive open bar</strong>.
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
                title="Momenten van de zonsondergang" 
              />
            </motion.div>
          </div>

          {/* Sidebar with booking info - sticky */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-orange-600 to-red-500 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Tochtinformatie</h3>
                <p className="opacity-90">Authentieke zonsondergangervaring</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start">
                  <FiClock className="mt-1 mr-3 text-orange-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Schema</h4>
                    <p className="text-gray-600">Ca. 3 uur (avond)</p>
                    <p className="text-xs text-gray-500">Vertrek 17:00–18:30 uur (seizoensgebonden)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiMapPin className="mt-1 mr-3 text-orange-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Vertrek</h4>
                    <p className="text-gray-600">Haven San Antonio, Ibiza</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiUsers className="mt-1 mr-3 text-orange-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Capaciteit</h4>
                    <p className="text-gray-600">Tot 35 passagiers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <GiSparklingSabre className="mt-1 mr-3 text-orange-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Inbegrepen</h4>
                    <p className="text-gray-600">Drankjes, tapas, muziek, activiteiten*</p>
                     <p className="text-xs text-gray-500">*Watersport bij gunstig weer</p>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4 mt-6">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <span className="block text-sm text-gray-500">Prijs per persoon</span>
                      <span className="text-3xl font-bold text-gray-900">€80</span>
                    </div>
                  </div>
                  <Link href="#booking-widget" className="block w-full">
                    <span className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg shadow transition duration-300">
                      Boek deze ervaring
                    </span>
                  </Link>
                  <p className="text-center text-sm text-gray-500 mt-3">
                    Voel de echte magie van Ibiza!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mb-20">
          <TripHighlights items={tripHighlights} title="Wat deze avond bijzonder maakt" />
        </div>

        {/* FAQs Section */}
        <div className="mb-20">
          <FAQ items={tripFAQs} title="Veelgestelde vragen — zonsondergang" />
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
              Reserveer nu je <span className="text-orange-600">zonsondergangtocht</span>
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
                      <span className="ml-3 text-gray-700">Snel en eenvoudig reserveren.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">Directe bevestiging.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">Flexibel annuleringsbeleid.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">All-inclusive ervaringen.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">Ervaren team en persoonlijke aandacht.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">
                        <strong className="font-semibold">Gedeeltelijke online betaling</strong>
                        <span className="text-sm text-gray-500 ml-1">(€20 p.p. om te reserveren); het restbedrag contant aan boord op de vaardag.</span>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-700 w-full lg:w-1/4">
                  <p className="font-medium mb-1">Veilig betalen met creditcards, Apple Pay en Google Pay.</p>
                  <p>Transacties verlopen via Stripe.</p>
                  <div className="mt-3 flex justify-center">
                    <Image src="/images/cards.webp" alt="Geaccepteerde betaalmethoden" width={280} height={40} className="object-contain" />
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
              {/* Age Information */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Leeftijden & prijzen</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    <span><strong>Volwassenen:</strong> €80 p.p.</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    <span><strong>Kinderen (6–12 jaar):</strong> €45</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                    <span><strong>Baby’s (0–5 jaar):</strong> gratis</span>
                  </div>
                </div>
              </div>

              {/* Turbnb Booking Widget */}
              <TurbnbWidget 
                companyId={2}
                productId={2}
                channelId={11}
                billingTermIds={[21]}
                customProperties={{
                  displayBillingTerm: true,
                  showQuantity: true,
                  titleVariant: "Modern",
                  bookNow: "ZONSONDERGANG BOEKEN",
                  confirmReservationAndPay: "BEVESTIGEN & BETALEN",
                  selectTimeLabel: "Kies zonsondergangtijd",
                  selectExperienceLabel: "Zonsondergangervaring",
                  addonsLabel: "Extra's",
                  childrenAge: "6 tot 12 jaar",
                  infantAge: "0 tot 5 jaar",
                  depositObservation: "Na je boeking ontvang je een bevestiging met details en ontmoetingspunt. Een aanbetaling van €20 per persoon bevestigt de reservering; het restbedrag contant aan boord.",
                  quantity: "Gasten",
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
                    <span className="font-medium">Liever overdag op zee?</span> Bekijk onze populaire{" "}
                    <Link href="/boat-trips/day-trip" className="font-bold underline text-blue-900 hover:text-blue-600 transition-colors">
                      gemengde dagtocht
                    </Link>
                    {" — "}stranden, watersport en onbeperkte drankjes & tapas!
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Klaar voor een magische avond?</h2>
              <p className="text-orange-100 text-lg">
                Mis Ibiza's mooiste zonsondergang niet — boek nu je plek!
              </p>
            </div>
            <Link href="#booking-widget">
              <span className="inline-block bg-white text-orange-600 hover:bg-orange-50 font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
                Boek je zonsondergang
              </span>
            </Link>
          </div>
        </div>
      </div>

      <Script
        id="sunset-trip-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Gemengde zonsondergangtocht — Salvador Ibiza',
            description:
              'Zonsondergang vanaf zee voor Café Mambo & Café del Mar. Onbeperkte drankjes, cava, Spaanse tapas en optionele zwemstop. Traditionele houten boot.',
            brand: { '@type': 'Brand', name: 'Salvador Ibiza Boottochten' },
            offers: {
              '@type': 'Offer',
              price: '80',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
              validFrom: '2026-05-01T00:00:00+02:00',
              validThrough: '2026-10-31T23:59:59+02:00',
              seller: { '@type': 'Organization', name: 'Salvador Ibiza Boottochten' },
            },
            category: 'Boottocht',
            inLanguage: 'nl-NL',
            url: `${siteUrl}/boat-trips/sunset-trip`,
            image: `${siteUrl}/images/optimized/ibiza-sunset-boat-trip-salvador.webp`,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${siteUrl}/boat-trips/sunset-trip`,
            },
          }),
        }}
      />
    </div>
  );
} 