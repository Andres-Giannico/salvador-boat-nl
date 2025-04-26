'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

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
    // Added subtle background gradient and increased padding
    <div className="bg-gradient-to-b from-white via-blue-50/10 to-white min-h-screen py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          // Styled title with gradient
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
        >
          Salvador Ibiza Gallery
        </motion.h1>

        <motion.div 
          // Reduced columns for larger images: sm:2, md:3, lg:4. Increased gap slightly.
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.05 } }
          }}
        >
          {/* Map over the passed 'images' prop */}
          {images.map((image, index) => (
            <motion.div
              key={index}
              // Kept aspect-video, enhanced card hover effect (scale and shadow)
              className="aspect-video overflow-hidden rounded-xl shadow-md hover:shadow-lg cursor-pointer group relative transition-shadow duration-300"
              onClick={() => openModal(index)}
              title={image.alt}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              // Apply scale and zIndex lift on hover to the whole card
              whileHover={{ scale: 1.03, zIndex: 10, transition: { duration: 0.2 } }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Image still uses fill and has its own hover scale */}
              <Image
                src={image.src}
                alt={image.alt}
                fill 
                className="object-cover transition-transform duration-300 group-hover:scale-110 w-full h-full"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index < 15} // Prioritize more images initially
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal - Use 'images' prop for src/alt */}
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }} // Slightly faster fade
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-[999] flex items-center justify-center p-4"
            onClick={closeModal}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute top-4 right-4 text-white/80 hover:text-white z-[1001]"
              onClick={(e) => { e.stopPropagation(); closeModal(); }} // Prevent background click when clicking button
            >
              <FiX size={30} />
            </motion.button>

            {/* Previous Button */}
            <motion.button
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.1 }}
               className="absolute left-4 md:left-8 text-white/70 hover:text-white text-4xl z-[1001]" 
               onClick={showPrevImage}
            >
              &#x276E; 
            </motion.button>
            
            {/* Image Container - Smoother scale transition */}
            <motion.div 
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 20, stiffness: 150 }} // Spring animation
              className="relative max-w-full max-h-[90vh] w-auto h-auto flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedImageIndex].src} // Use images prop
                alt={images[selectedImageIndex].alt} // Use images prop
                width={1200} // Provide reasonable max width
                height={800} // Provide reasonable max height
                style={{ width: 'auto', height: 'auto', maxHeight: '90vh', maxWidth: '90vw' }} // Ensure image scales down
                className="object-contain rounded-lg shadow-xl"
                priority // Load modal image with high priority
              />
            </motion.div>

            {/* Next Button */}
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
    </div>
  );
} 