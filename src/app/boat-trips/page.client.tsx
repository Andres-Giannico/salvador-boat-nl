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
import FAQ from '@/components/trips/FAQ';
import BoatTripComparisonTable from '@/components/trips/BoatTripComparisonTable';
import { generalBoatTripComparison } from '@/lib/boat-trip-comparison';
import { getBoatTripsHubCopy } from '@/lib/seo-i18n';
import { getGeneralBoatTripFaqs } from '@/lib/faq-i18n';
import { getClientSiteLocale } from '@/lib/site-locale';

const INCLUDED_ICONS = [Anchor, Coffee, Music, Camera] as const;

const galleryImages = [
  { src: "/images/boat/chicaspasandolomuybien.webp", alt: "Friends enjoying drinks and laughing on a Salvador Ibiza boat trip" },
  { src: "/images/boat/chicosdisfrutandoenproa.webp", alt: "Group of friends having fun at the bow of the Salvador boat in Ibiza" },
  { src: "/images/boat/chicasensupencueva.webp", alt: "Girls exploring Ibiza caves on paddleboards during a boat tour" },
  { src: "/images/boat/doschicasfelicesenproa.webp", alt: "Two friends enjoying the sun on a boat trip in Ibiza" },
  { src: "/images/boat/parejasnorkeling.webp", alt: "Couple snorkeling in crystal clear Ibiza waters on a boat tour" },
  { src: "/images/optimized/toasting-drinks-ibiza-boat.webp", alt: "Friends toasting at the boat's bar during an Ibiza excursion" },
  { src: "/images/optimized/salvador-ibiza-cala-comte-red-deck-aerial.webp", alt: "Aerial drone view of the Salvador charter boat in the turquoise waters of Cala Comte, Ibiza" },
  { src: "/images/boat/4chicasparadasentablaxxl.webp", alt: "Group of friends on a large paddleboard during a Salvador Ibiza boat excursion" }
];

export default function BoatTripsClientPage() {
  const locale = getClientSiteLocale();
  const copy = getBoatTripsHubCopy(locale);
  const generalFaqItems = getGeneralBoatTripFaqs(locale);

  const middayTrip = {
    imageUrl: "/images/optimized/salvador-ibiza-cala-comte-guests-paddleboarding.webp",
    imageAlt: copy.middayTrip.imageAlt,
    title: copy.middayTrip.title,
    description: copy.middayTrip.description,
    isPopular: true,
    badgeText: copy.middayTrip.badgeText,
    badgeBgColor: "bg-blue-500",
    features: copy.middayTrip.features,
    price: copy.middayTrip.price,
    priceSubtext: copy.middayTrip.priceSubtext,
    priceColor: "text-blue-600",
    ctaHref: "/boat-trips/day-trip#booking-widget",
    ctaBgColor: "bg-blue-600",
    ctaHoverBgColor: "hover:bg-blue-700",
    detailsHref: "/boat-trips/day-trip",
    detailsText: copy.middayTrip.detailsText,
  };

  const sunsetTrip = {
    imageUrl: "/images/optimized/ibiza-sunset-boat-trip-salvador.webp",
    imageAlt: copy.sunsetTrip.imageAlt,
    title: copy.sunsetTrip.title,
    description: copy.sunsetTrip.description,
    badgeText: copy.sunsetTrip.badgeText,
    badgeBgColor: "bg-orange-500",
    features: copy.sunsetTrip.features,
    price: copy.sunsetTrip.price,
    priceSubtext: copy.sunsetTrip.priceSubtext,
    priceColor: "text-orange-600",
    ctaHref: "/boat-trips/sunset-trip#booking-widget",
    ctaBgColor: "bg-orange-500",
    ctaHoverBgColor: "hover:bg-orange-600",
    detailsHref: "/boat-trips/sunset-trip",
    detailsText: copy.sunsetTrip.detailsText,
  };

  const includedFeatures = copy.includedFeatures.map((feature, index) => ({
    icon: INCLUDED_ICONS[index],
    title: feature.title,
    description: feature.description,
  }));

  const specializedIcons = [FiSun, FiMapPin, FiSun, FiUsers, FiGift, FiAnchor];

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
            alt={copy.heroImageAlt}
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
            {copy.heroH1Main} <span className="text-cyan-400">{copy.heroH1Accent}</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95 mb-8 drop-shadow-md">
            {copy.heroSubtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              onClick={() => scrollToTrip('day-trip-card')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-black/50 transition"
            >
              <FiSun className="text-orange-300" />
              <span>{copy.dayBtn}</span>
            </motion.button>
            <motion.button
              onClick={() => scrollToTrip('sunset-trip-card')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-black/50 transition"
            >
              <FiMoon className="text-indigo-300" />
              <span>{copy.sunsetBtn}</span>
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
              {copy.signatureH2}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {copy.signatureP1}
            </p>
            <p className="text-md text-gray-600">
              {copy.signatureP2}
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

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {copy.bestTripH2}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {copy.bestTripP}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gray-50 rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100 mb-12"
          >
            <BoatTripComparisonTable
              rows={generalBoatTripComparison}
              title={copy.comparisonTitle}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FAQ items={generalFaqItems} title={copy.faqTitle} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center"
          >
            <Link href="/boat-trips/family" className="p-4 rounded-xl bg-green-50 border border-green-100 hover:bg-green-100 transition-colors">
              <span className="font-semibold text-green-800">{copy.linkFamily}</span>
            </Link>
            <Link href="/boat-trips/sunset-trip" className="p-4 rounded-xl bg-orange-50 border border-orange-100 hover:bg-orange-100 transition-colors">
              <span className="font-semibold text-orange-800">{copy.linkSunset}</span>
            </Link>
            <Link href="/boat-trips/snorkeling" className="p-4 rounded-xl bg-cyan-50 border border-cyan-100 hover:bg-cyan-100 transition-colors">
              <span className="font-semibold text-cyan-800">{copy.linkSnorkel}</span>
            </Link>
          </motion.div>
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
              {copy.galleryH2}
            </h2>
            <p className="text-lg text-gray-700">
              {copy.galleryP}
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
              {copy.includedH2}
            </h2>
            <p className="text-lg text-gray-600">
              {copy.includedP}
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
              {copy.specializedH2} <span className="text-blue-600">{copy.specializedH2Accent}</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {copy.specializedP}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {copy.specializedCards.map((card, index) => {
              const gradients = [
                "from-orange-500 to-pink-600",
                "from-blue-500 to-cyan-600",
                "from-green-500 to-teal-600",
                "from-purple-500 to-indigo-600",
                "from-yellow-500 to-orange-600",
                "from-gray-700 to-gray-900",
              ];
              const Icon = specializedIcons[index];

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                >
                  <Link
                    href={card.href}
                    className={`block bg-gradient-to-br ${gradients[index]} text-white p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                  >
                    <div className="flex items-center mb-4">
                      <Icon className="w-6 h-6 mr-3" />
                      <h3 className="text-xl font-bold">{card.title}</h3>
                    </div>
                    <p className="mb-4 opacity-90">{card.description}</p>
                    <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">{card.badge}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CallToActionSection />
    </div>
  );
} 