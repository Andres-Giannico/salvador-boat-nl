'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiMapPin, FiUsers, FiGift, FiAnchor } from 'react-icons/fi';
import { Anchor, Coffee, Music, Camera } from 'lucide-react';
import TripCard from '@/components/ui/TripCard';
import ImageGallery from '@/components/gallery/ImageGallery';
import CallToActionSection from '@/components/CallToActionSection';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

// Updated trip data to match FeaturedTripsSection
const middayTrip = {
  imageUrl: "/images/optimized/salvador-ibiza-boat-aerial-view.webp",
  imageAlt: "Salvador Ibiza dagboottocht — premium zee-avontuur",
  title: "Dagelijkse ervaring",
  description: "Zon, zee en avontuur wachten op je.",
  isPopular: true,
  badgeText: "14:00 – 17:00",
  badgeBgColor: "bg-blue-500",
  features: [
    "15 premium paddleboards & 2 kajaks",
    "Snorkeluitrusting",
    "Zwemmen in kraakhelder water",
    "Premium open bar & verse sangría",
    "Spaanse tapas & vers fruit",
    "Premium geluidssysteem"
  ],
  price: "€80 per volwassene",
  priceSubtext: "Kinderen 6–12: €45 | Jonger dan 6: gratis",
  priceColor: "text-blue-600",
  ctaHref: "/boat-trips/day-trip#booking-widget",
  ctaBgColor: "bg-blue-600",
  ctaHoverBgColor: "hover:bg-blue-700",
  detailsHref: "/boat-trips/day-trip",
  detailsText: "Meer info"
};

const sunsetTrip = {
  imageUrl: "/images/sunset.png",
  imageAlt: "Salvador Ibiza zonsondergangboottocht",
  title: "Zonsondergangtocht",
  description: "Ervaar Ibiza's iconische zonsondergang vanaf zee.",
  badgeText: "18:30 – 21:30",
  badgeBgColor: "bg-orange-500",
  features: [
    "Zonsondergangzwemmen bij verborgen baaien",
    "15 paddleboards & 2 kajaks",
    "Snorkeluitrusting",
    "Premium bar & onbeperkt cava",
    "Selectie Spaanse tapas",
    "Zonsondergang bij Café Mambo"
  ],
  price: "€80 per volwassene",
  priceSubtext: "Kinderen 6–12: €45 | Jonger dan 6: gratis",
  priceColor: "text-orange-600",
  ctaHref: "/boat-trips/sunset-trip#booking-widget",
  ctaBgColor: "bg-orange-500",
  ctaHoverBgColor: "hover:bg-orange-600",
  detailsHref: "/boat-trips/sunset-trip",
  detailsText: "Meer info"
};

// Define included features data with Lucide icons
const includedFeatures = [
  {
    icon: Anchor,
    title: "Ervaren kapitein & bemanning",
    description: "Professionele service met veiligheid en lokale tips"
  },
  {
    icon: Coffee, // Represents drinks/snacks
    title: "All-inclusive service",
    description: "Onbeperkte premium drankjes, hapjes en vers fruit"
  },
  {
    icon: Music,
    title: "Premium geluidssysteem",
    description: "Hoge kwaliteit audio met Bluetooth"
  },
  {
    icon: Camera, // Represents photo opportunities
    title: "Onvergetelijke uitzichten",
    description: "Leg spectaculaire momenten vast bij Ibiza's iconische kust"
  }
];

const galleryImages = [
  { src: "/images/boat/chicaspasandolomuybien.webp", alt: "Vrienden genieten van drankjes tijdens een boottocht met Salvador Ibiza" },
  { src: "/images/boat/chicosdisfrutandoenproa.webp", alt: "Groep vrienden aan de voorplecht van de Salvador in Ibiza" },
  { src: "/images/boat/chicasensupencueva.webp", alt: "Paddleboarden bij grotten tijdens een boottocht in Ibiza" },
  { src: "/images/boat/doschicasfelicesenproa.webp", alt: "Twee vriendinnen genieten van de zon op zee bij Ibiza" },
  { src: "/images/boat/parejasnorkeling.webp", alt: "Stel snorkelt in kristalhelder water tijdens een boottocht" },
  { src: "/images/optimized/toasting-drinks-ibiza-boat.webp", alt: "Vrienden proosten aan de bar tijdens een excursie in Ibiza" },
  { src: "/images/optimized/salvador-ibiza-boat-aerial-view.webp", alt: "De Salvador in turquoise wateren voor de kust van Ibiza" },
  { src: "/images/boat/4chicasparadasentablaxxl.webp", alt: "Groep op een grote paddleboard tijdens een Salvador-boottocht" }
];

export default function BoatTripsClientPage() {
  const scrollToTrip = (tripId: string) => {
    const element = document.getElementById(tripId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-cyan-50/30 relative">
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
          className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-tr from-orange-200 to-yellow-200 rounded-full opacity-20 blur-3xl"
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
      </div>

      <section className="relative h-[65vh] min-h-[450px] md:h-[75vh] md:min-h-[550px] flex items-center justify-center text-white overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/optimized/salvador-ibiza-boat-drone-view.webp"
            alt="Dronebeeld van de Salvador charterboot in Ibiza, klaar voor een boottocht"
            fill
            priority
            className="object-cover object-center brightness-75"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </motion.div>
        
        <motion.div
          className="relative z-10 container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-xl leading-tight">
            Jouw perfecte Ibiza <span className="text-cyan-400">boottocht</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95 mb-8 drop-shadow-md">
            Kies uit onze all-inclusive <span className="font-semibold text-cyan-300">3 uur durende</span> dagervaring of de magische zonsondergangtocht.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              onClick={() => scrollToTrip('day-trip-card')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-black/50 transition"
            >
              <FiSun className="text-orange-300" />
              <span>Dagelijkse ervaring</span>
            </motion.button>
            <motion.button
              onClick={() => scrollToTrip('sunset-trip-card')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-black/50 transition"
            >
              <FiMoon className="text-indigo-300" />
              <span>Zonsondergangtocht</span>
            </motion.button>
          </div>
        </motion.div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
          <svg className="w-full h-16 md:h-24 fill-[#f8fafc]" viewBox="0 0 1440 74" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,37.1L48,34.4C96,31.7,192,26.2,288,31.7C384,37.1,480,53.4,576,55.2C672,57.1,768,44.4,864,37.1C960,29.9,1056,29.9,1152,31.7C1248,33.5,1344,37.1,1392,39L1440,40.8L1440,74L1392,74C1344,74,1248,74,1152,74C1056,74,960,74,864,74C768,74,672,74,576,74C480,74,384,74,288,74C192,74,96,74,48,74L0,74Z" />
          </svg>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Onze boottochten: overdag of bij zonsondergang
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ga mee op de ultieme <strong>boottocht in Ibiza</strong> met Salvador. We bieden twee onvergetelijke <strong>bootrondvaarten</strong> zodat je jouw perfecte zee-avondreis kiest. Of je nu geniet van de middagzon of van een magische zonsondergang — elke tocht is premium en all-inclusive.
            </p>
            <p className="text-md text-gray-600">
              Onze <strong>boottochten</strong> laten de mooiste kanten van de Ibizaanse kust zien. Ontdek verborgen baaien, zwem in turquoise water en geniet van paddleboarden, kajakken en snorkelen — onder begeleiding van goede muziek, een premium open bar en vers bereide Spaanse tapas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
            <motion.div
              id="day-trip-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <TripCard {...middayTrip} delay={0.1} />
            </motion.div>

            <motion.div
              id="sunset-trip-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <TripCard {...sunsetTrip} delay={0.3} />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-blue-50/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Momenten aan boord van de Salvador
            </h2>
            <p className="text-lg text-gray-700">
              Sfeerbeelden van onze onvergetelijke dag- en zonsondergangtochten.
            </p>
          </motion.div>
          <ImageGallery images={galleryImages} className="max-w-6xl mx-auto" />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Inbegrepen bij elke tocht
            </h2>
            <p className="text-lg text-gray-600">
              Ontspan en geniet — wij hebben aan alles gedacht.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {includedFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white p-6 rounded-xl border border-gray-100/80 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-5 text-blue-600">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore More Options - Parent to Child Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Ontdek onze <span className="text-blue-600">boottochten</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Van romantische zonsondergangen tot gezinsavonturen — voor ieder wat wils.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                href="/boat-trips/sunset"
                className="block bg-gradient-to-br from-orange-500 to-pink-600 text-white p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <FiSun className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold">Zonsondergangtochten</h3>
                </div>
                <p className="mb-4 opacity-90">Ibiza's legendarische zonsondergang vanaf zee — gouden uur op het water.</p>
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">620 zoekopdr./mnd</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/boat-trips/san-antonio"
                className="block bg-gradient-to-br from-blue-500 to-cyan-600 text-white p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <FiMapPin className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold">Vertrek San Antonio</h3>
                </div>
                <p className="mb-4 opacity-90">Handige vertrekken vanuit de baai van San Antonio — verken de westkust.</p>
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">240 zoekopdr./mnd</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/boat-trips/day"
                className="block bg-gradient-to-br from-green-500 to-teal-600 text-white p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <FiSun className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold">Dagtochten</h3>
                </div>
                <p className="mb-4 opacity-90">Ideaal voor overdag: zwemmen, snorkelen en watersport.</p>
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">50 zoekopdr./mnd</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/boat-trips/family"
                className="block bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <FiUsers className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold">Gezinstochten</h3>
                </div>
                <p className="mb-4 opacity-90">Veilig, leuk en geschikt voor gezinnen met kinderen.</p>
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">40 zoekopdr./mnd</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                href="/boat-trips/all-inclusive"
                className="block bg-gradient-to-br from-yellow-500 to-orange-600 text-white p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <FiGift className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold">All-inclusive</h3>
                </div>
                <p className="mb-4 opacity-90">Alles inbegrepen: drankjes, eten, uitrusting en entertainment.</p>
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">10 zoekopdr./mnd</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                href="/private-boat-trips"
                className="block bg-gradient-to-br from-gray-700 to-gray-900 text-white p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <FiAnchor className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold">Privécharters</h3>
                </div>
                <p className="mb-4 opacity-90">Exclusief voor jouw groep — maximaal privacy en comfort.</p>
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">100 zoekopdr./mnd</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <CallToActionSection />
    </div>
  );
} 