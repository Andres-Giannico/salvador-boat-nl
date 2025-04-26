'use client';

import { motion } from 'framer-motion';
import TestimonialSlider, { Testimonial } from './TestimonialSlider';
import { GoogleReview } from '@/services/googlePlaces';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { getStaticReviews } from './StaticReviews';

// Google Place ID - required for links
const PLACE_ID = 'ChIJCek3no5JmRIRQc4VSbT3qiY'; 

interface ReviewsSectionProps {
  reviews: GoogleReview[];
  isLoading?: boolean; // Optional loading state from parent
  error?: string | null; // Optional error state from parent
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function ReviewsSection({ 
  reviews = [], 
  isLoading = false, 
  error = null 
}: ReviewsSectionProps) {

  // Corrected mapping from GoogleReview to Testimonial format
  const mappedReviews: Testimonial[] = reviews
    .map((review): Testimonial | null => {
      // Use a combination of author name and timestamp/text hash for a more unique ID
      const potentialId = `${review.authorAttribution?.displayName || 'anon'}-${review.relativePublishTimeDescription || Date.now()}`;
      try {
        return {
          id: potentialId, // Generate a somewhat unique ID
          name: review.authorAttribution?.displayName || 'Anonymous', // Corresponds to Testimonial's name
          location: review.relativePublishTimeDescription || '', // Use relative time as 'location/title'
          comment: review.text?.text || '', // Corresponds to Testimonial's comment
          rating: review.rating || 5, // Corresponds to Testimonial's rating
          image: review.authorAttribution?.photoUri, // Corresponds to Testimonial's image
        };
      } catch (err) {
        console.error('Error mapping review:', err, review);
        return null; // Skip reviews that cause errors during mapping
      }
    })
    .filter((review): review is Testimonial => review !== null);

  // Determinar si estamos en producción (Vercel)
  const isProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' || 
                       (typeof window !== 'undefined' && 
                       (window.location.hostname.includes('vercel.app') || 
                        window.location.hostname.includes('salvadoribiza.com')));

  const renderContent = () => {
    if (isLoading) {
      return <p className="text-center text-gray-500">Loading reviews...</p>;
    }
    
    // Si estamos en producción o hay un error, usamos los reviews estáticos
    if (isProduction || error || mappedReviews.length === 0) {
      console.log("Using static reviews");
      const staticTestimonials = getStaticReviews();
      return <TestimonialSlider testimonials={staticTestimonials} />;
    }
    
    // Si llegamos aquí, tenemos reviews de la API y no estamos en producción
    return <TestimonialSlider testimonials={mappedReviews} />;
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FcGoogle size={32} /> 
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Our Guests Say
            </h2>
          </div>
          <p className="text-lg text-gray-600">
            See what our guests are saying about their Salvador Ibiza experience.
          </p>
        </motion.div>

        {renderContent()}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link 
            href={`https://search.google.com/local/reviews?placeid=${PLACE_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-sm"
          >
            See all reviews on Google <FiExternalLink className="ml-2" />
          </Link>
          <Link 
            href={`https://search.google.com/local/writereview?placeid=${PLACE_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Leave a review on Google
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 