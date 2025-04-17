'use client';

import { motion } from 'framer-motion';
import ImageGallery from '@/components/gallery/ImageGallery';

const galleryImages = [
  {
    src: "/images/barco1.png",
    alt: "Salvador yacht sailing in crystal clear waters of Ibiza",
    category: "Boat"
  },
  {
    src: "/images/barco2.png",
    alt: "Group enjoying their time on Salvador boat deck",
    category: "Experience"
  },
  {
    src: "/images/barco3.png",
    alt: "Beautiful view of Ibiza's coastline from Salvador",
    category: "Views"
  },
  {
    src: "/images/barco4.png",
    alt: "Relaxing atmosphere on Salvador's deck",
    category: "Experience"
  },
  {
    src: "/images/barco5.png",
    alt: "Salvador boat anchored in a beautiful cove",
    category: "Boat"
  },
  {
    src: "/images/barco6.png",
    alt: "Magical sunset near Es Vedrà with Salvador",
    category: "Views"
  },
  {
    src: "/images/barcodesdedron.jpg",
    alt: "Drone shot of Salvador navigating Ibiza's waters",
    category: "Aerial"
  },
  {
    src: "/images/barco dron .jpg",
    alt: "Aerial view of Salvador boat in turquoise waters",
    category: "Aerial"
  },
  {
    src: "/images/esvedraback.png",
    alt: "Stunning view of Es Vedrà from Salvador",
    category: "Views"
  },
  {
    src: "/images/barcosalvadorsmall.jpg",
    alt: "Salvador boat in pristine waters",
    category: "Boat"
  }
];

export default function GalleryClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Hero Section with adjusted padding */}
      <section className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Salvador Photo Gallery
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Explore our collection of stunning moments captured during unforgettable journeys around Ibiza
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <ImageGallery 
            images={galleryImages} 
            className="max-w-7xl mx-auto"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Ready to Create Your Own Memories?
            </h2>
            <a 
              href="/boat-trips" 
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Your Trip Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 