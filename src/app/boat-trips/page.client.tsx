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
  imageUrl: "/images/barco1.png",
  imageAlt: "Salvador Ibiza Day Boat Trip - Premium Sea Adventure",
  title: "Daytime Experience",
  description: "Sun, sea, and adventure await.",
  isPopular: true,
  badgeText: "2:00 PM - 5:00 PM",
  badgeBgColor: "bg-blue-500",
  features: [
    "15 Premium Paddle Boards & 2 Kayaks",
    "Snorkeling Equipment",
    "Swimming in Crystal Clear Waters",
    "Premium Open Bar & Fresh Sangria",
    "Spanish Tapas & Fresh Fruit",
    "Premium Sound System"
  ],
  price: "€80 per adult",
  priceSubtext: "Children 6-12: €45 | Under 6: Complimentary",
  priceColor: "text-blue-600",
  ctaHref: "/boat-trips/day-trip#booking-widget",
  ctaBgColor: "bg-blue-600",
  ctaHoverBgColor: "hover:bg-blue-700",
  detailsHref: "/boat-trips/day-trip",
  detailsText: "Explore Details"
};

const sunsetTrip = {
  imageUrl: "/images/sunset.png",
  imageAlt: "Salvador Ibiza Sunset Boat Trip - Sunset & Sea Adventure",
  title: "Sunset Voyage",
  description: "Experience Ibiza's iconic sunset from the sea.",
  badgeText: "6:30 PM - 9:30 PM",
  badgeBgColor: "bg-orange-500",
  features: [
    "Sunset Swimming at Hidden Coves",
    "15 Paddle Boards & 2 Kayaks",
    "Snorkeling Equipment",
    "Premium Bar & Unlimited Cava",
    "Spanish Tapas Selection",
    "Sunset at Café Mambo"
  ],
  price: "€80 per adult",
  priceSubtext: "Children 6-12: €45 | Under 6: Complimentary",
  priceColor: "text-orange-600",
  ctaHref: "/boat-trips/sunset-trip#booking-widget",
  ctaBgColor: "bg-orange-500",
  ctaHoverBgColor: "hover:bg-orange-600",
  detailsHref: "/boat-trips/sunset-trip",
  detailsText: "Explore Details"
};

// Define included features data with Lucide icons
const includedFeatures = [
  {
    icon: Anchor,
    title: "Expert Captain & Crew",
    description: "Professional service ensuring safety and local insights"
  },
  {
    icon: Coffee, // Represents drinks/snacks
    title: "All-Inclusive Service",
    description: "Unlimited premium drinks, gourmet snacks, and fresh fruit"
  },
  {
    icon: Music,
    title: "Premium Sound System",
    description: "High-quality audio with Bluetooth connectivity"
  },
  {
    icon: Camera, // Represents photo opportunities
    title: "Unforgettable Views",
    description: "Capture stunning moments against Ibiza's iconic backdrop"
  }
];

const galleryImages = [
  { src: "/images/boat/chicaspasandolomuybien.webp", alt: "Friends enjoying drinks and laughing on a Salvador Ibiza boat trip" },
  { src: "/images/boat/chicosdisfrutandoenproa.webp", alt: "Group of friends having fun at the bow of the Salvador boat in Ibiza" },
  { src: "/images/boat/chicasensupencueva.webp", alt: "Girls exploring Ibiza caves on paddleboards during a boat tour" },
  { src: "/images/boat/doschicasfelicesenproa.webp", alt: "Two friends enjoying the sun on a boat trip in Ibiza" },
  { src: "/images/boat/parejasnorkeling.webp", alt: "Couple snorkeling in crystal clear Ibiza waters on a boat tour" },
  { src: "/images/boat/chicasbrindandoenbarra.png", alt: "Friends toasting at the boat's bar during an Ibiza excursion" },
  { src: "/images/barco1.png", alt: "The Salvador charter yacht in beautiful turquoise waters of Ibiza" },
  { src: "/images/boat/4chicasparadasentablaxxl.webp", alt: "Group of friends on a large paddleboard during a Salvador Ibiza boat excursion" }
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
            src="/images/barcodesdedron.jpg"
            alt="Aerial drone view of the Salvador charter boat in Ibiza, ready for a boat trip"
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
            Your Perfect Ibiza <span className="text-cyan-400">Boat Trip</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95 mb-8 drop-shadow-md">
            Choose between our all-inclusive <span className="font-semibold text-cyan-300">3-hour</span> Daytime Experience or the magical Sunset Voyage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              onClick={() => scrollToTrip('day-trip-card')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-black/50 transition"
            >
              <FiSun className="text-orange-300" />
              <span>Daytime Experience</span>
            </motion.button>
            <motion.button
              onClick={() => scrollToTrip('sunset-trip-card')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-black/50 transition"
            >
              <FiMoon className="text-indigo-300" />
              <span>Sunset Voyage</span>
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
              Our Signature Boat Trips: Day or Sunset
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Embark on the ultimate <strong>Ibiza boat trip</strong> with Salvador. We offer two distinct, unforgettable <strong>boat tours</strong> for you to choose your perfect sea adventure. Whether you prefer basking in the daytime sun or witnessing a magical sunset, every trip is a premium, all-inclusive experience.
            </p>
            <p className="text-md text-gray-600">
              Our <strong>boat trips</strong> are expertly crafted to showcase the stunning Ibiza coastline. Discover hidden coves, swim in turquoise waters, and enjoy thrilling activities like paddle boarding, kayaking, and snorkeling. All this while you unwind with great music, a premium open bar, and freshly prepared Spanish tapas.
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
              Moments Aboard Salvador
            </h2>
            <p className="text-lg text-gray-700">
              Explore snapshots from our unforgettable Daytime & Sunset trips.
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
              Included in Every Trip
            </h2>
            <p className="text-lg text-gray-600">
              Relax and enjoy, we've taken care of the details.
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
              Explore Our Specialized <span className="text-blue-600">Boat Trips</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the perfect boat trip for your needs. From romantic sunsets to family adventures, we have something special for everyone.
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
                  <h3 className="text-xl font-bold">Sunset Trips</h3>
                </div>
                <p className="mb-4 opacity-90">Experience Ibiza's legendary sunsets from the sea. Magical golden hour cruises.</p>
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">620 searches/month</span>
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
                  <h3 className="text-xl font-bold">San Antonio Departures</h3>
                </div>
                <p className="mb-4 opacity-90">Convenient departures from San Antonio Bay. Explore the stunning west coast.</p>
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">240 searches/month</span>
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
                  <h3 className="text-xl font-bold">Day Trips</h3>
                </div>
                <p className="mb-4 opacity-90">Perfect daytime adventures with swimming, snorkeling, and water sports.</p>
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">50 searches/month</span>
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
                  <h3 className="text-xl font-bold">Family Trips</h3>
                </div>
                <p className="mb-4 opacity-90">Safe, fun, and educational boat trips perfect for families with children.</p>
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">40 searches/month</span>
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
                  <h3 className="text-xl font-bold">All-Inclusive</h3>
                </div>
                <p className="mb-4 opacity-90">Everything included: drinks, food, equipment, and entertainment.</p>
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">10 searches/month</span>
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
                  <h3 className="text-xl font-bold">Private Charters</h3>
                </div>
                <p className="mb-4 opacity-90">Exclusive boat just for your group. Ultimate privacy and luxury.</p>
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">100 searches/month</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <CallToActionSection />
    </div>
  );
} 