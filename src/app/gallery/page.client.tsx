'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiX, FiPlay } from 'react-icons/fi';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

// Define the type for image data passed as prop
interface GalleryImage {
  src: string;
  alt: string;
}

// Define the props interface for the client component
interface GalleryClientPageProps {
  images: GalleryImage[];
}

// Remove the local definition of allImages
// const allImages = [ ... ];

export default function GalleryClientPage({ images }: GalleryClientPageProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Parallax effect values
  const videoScale = useTransform(scrollYProgress, [0.7, 1], [0.9, 1]);
  const videoOpacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);

  // Modal functions remain the same, but will use the 'images' prop length
  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = '';
  };

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length); // Use images.length
    }
  };

  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length); // Use images.length
    }
  };

  // ... (useEffect for keyboard nav if needed, using images.length)

  return (
    <div className="bg-gradient-to-b from-white via-blue-50/10 to-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
        >
          Salvador Ibiza — galerij
        </motion.h1>

        {/* Gallery Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Ontdek de sfeer van <strong>boottochten met Salvador Ibiza</strong> in onze fotogalerij — van luchtopnames tot spontane momenten aan boord, altijd rond onze <strong>all-inclusive ervaringen</strong> bij het eiland Ibiza.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-blue-600 mb-3">🌅 Zonsondergang</h3>
              <p className="text-gray-600 text-sm">
                Ibiza's zonsondergang vanaf onze traditionele houten boot — gouden uur, romantiek en herinneringen op zee.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-cyan-600 mb-3">🏄‍♀️ Watersport</h3>
              <p className="text-gray-600 text-sm">
                Paddleboarden, kajakken en snorkelen in helder Mediterrane water — met onze premium SUP's en uitrusting.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-orange-600 mb-3">🍾 All-inclusive</h3>
              <p className="text-gray-600 text-sm">
                Spaanse tapas, premium drankjes en sfeer aan boord — zo ervaren gasten onze dag- en zonsondergangtochten.
              </p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 mt-8 font-medium">
            Zelf mee op stap? <a href="/boat-trips" className="text-blue-600 hover:underline">Boek nu je Salvador Ibiza-avontuur</a> en maak deel uit van onze volgende foto's!
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative w-full aspect-video overflow-hidden rounded-xl shadow-md hover:shadow-lg cursor-pointer group transition-shadow duration-300"
              onClick={() => openModal(index)}
              title={image.alt}
              variants={{
                hidden: { opacity: 0, scale: 0.98 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.03, zIndex: 10, transition: { duration: 0.2 } }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={index < 16}
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-[999] flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute top-4 right-4 text-white/80 hover:text-white z-[1001]"
              onClick={(e) => { e.stopPropagation(); closeModal(); }}
            >
              <FiX size={30} />
            </motion.button>

            <motion.button
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.1 }}
               className="absolute left-4 md:left-8 text-white/70 hover:text-white text-4xl z-[1001]" 
               onClick={showPrevImage}
            >
              &#x276E; 
            </motion.button>
            
            <motion.div 
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 20, stiffness: 150 }}
              className="relative max-w-full max-h-[90vh] w-auto h-auto flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedImageIndex].src}
                alt={images[selectedImageIndex].alt}
                width={1200}
                height={800}
                style={{ width: 'auto', height: 'auto', maxHeight: '90vh', maxWidth: '90vw' }}
                className="object-contain rounded-lg shadow-xl"
                priority
              />
            </motion.div>

            <motion.button
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.1 }}
               className="absolute right-4 md:right-8 text-white/70 hover:text-white text-4xl z-[1001]" 
               onClick={showNextImage}
            >
              &#x276F;
            </motion.button>
          </motion.div>
        )}
      </div>

      <motion.section 
        className="relative py-20 md:py-32 bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Ervaar Salvador Ibiza
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Een korte virtuele rondleiding — ontdek de magie van onze boottochten
            </p>
          </motion.div>

          <motion.div
            style={{ scale: videoScale, opacity: videoOpacity }}
            className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src="https://www.youtube.com/embed/0SN3YMMwUEk?autoplay=0&rel=0&showinfo=0&modestbranding=1"
                title="Salvador Ibiza bootervaring"
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a 
              href="/boat-trips" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Boek je ervaring
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
} 