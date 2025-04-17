"use client";

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Define un tipo para las imágenes
export type GalleryImage = {
  src: string;
  alt: string;
  aspectRatio?: "landscape" | "portrait" | "square";
};

interface TripGalleryProps {
  images: GalleryImage[];
  title?: string;
  masonry?: boolean;
}

const TripGallery = ({ images, title = "Trip Highlights", masonry = false }: TripGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Función para abrir el lightbox
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    // Prevenir scroll en el body
    document.body.style.overflow = 'hidden';
  };

  // Función para cerrar el lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Navegar a la siguiente imagen
  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  // Navegar a la imagen anterior
  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  // Manejador de teclas para lightbox
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <div className="w-full">
      {title && (
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">{title}</h2>
      )}

      {masonry ? (
        // Masonry layout usando CSS columns (mejor para imágenes de diferentes alturas)
        <div className="columns-2 sm:columns-3 gap-4 space-y-4">
          {images.map((image, index) => (
            <div 
              key={index}
              onClick={() => openLightbox(index)}
              className="relative break-inside-avoid mb-4 overflow-hidden rounded-lg cursor-pointer group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={image.aspectRatio === "portrait" ? 1200 : 600}
                className="w-full h-auto hover:scale-105 transition-all duration-500 rounded-lg"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium tracking-wider uppercase">View</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Grid layout (más controlado para secciones de viaje)
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-video overflow-hidden rounded-lg cursor-pointer group shadow-md"
              onClick={() => openLightbox(index)}
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
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-5xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                width={1200}
                height={800}
                className="max-h-[90vh] w-auto object-contain"
              />
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                onClick={closeLightbox}
              >
                <FiX className="w-6 h-6" />
              </button>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
              >
                <FiChevronLeft className="w-6 h-6" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
              >
                <FiChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <p className="text-sm backdrop-blur-md bg-black/30 p-2 mx-auto inline-block rounded-full px-4">
                  {currentImageIndex + 1} / {images.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TripGallery; 