'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiHeart, FiAnchor, FiCamera, FiUsers, FiMail, FiArrowRight, FiMusic, FiMap } from 'react-icons/fi';
import { GiWineBottle } from 'react-icons/gi';
import TripGallery from '@/components/trips/TripGallery';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

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
  // { src: "/images/boat/sunset.png", alt: "Romantic sunset view, perfect for a wedding cruise" }
];

export default function WeddingsClientPage() {
  return (
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
            src="/images/boat/sunset.png" // Placeholder image - change to a romantic/wedding themed one later
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              Your Dream Wedding on the Water
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 }}
            >
              Imagine exchanging vows surrounded by the stunning, ever-changing beauty of the Mediterranean, with the golden Ibiza sunset as your witness. Salvador Ibiza offers a uniquely private, intimate, and incredibly romantic setting for your wedding celebration, far from the crowds.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.4 }}
            >
              Create memories against breathtaking backdrops – turquoise coves, dramatic cliffs, and the endless horizon. Our experienced crew ensures every detail is perfect, allowing you to relax and cherish every moment.
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
            <Link href="/private-boat-trips#turbnb-booking-3">
              <motion.span 
                whileHover={{ scale: 1.05, boxShadow: "0px 8px 25px rgba(255, 255, 255, 0.3)" }} 
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold py-4 px-10 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-0.5"
              >
                Inquire About Wedding Charters <FiArrowRight className="ml-1 w-5 h-5"/>
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 