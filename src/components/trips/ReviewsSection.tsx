'use client';

import { motion } from 'framer-motion';
import TestimonialSlider, { Testimonial } from './TestimonialSlider';
import { GoogleReview } from '@/services/googlePlaces';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

// Google Place ID - required for links
const PLACE_ID = 'ChIJCek3no5JmRIRQc4VSbT3qiY'; 

interface ReviewsSectionProps {
  reviews: GoogleReview[];
  isLoading?: boolean; // Optional loading state from parent
  error?: string | null; // Optional error state from parent
}

export default function ReviewsSection({ 
  reviews = [], 
  isLoading = false, 
  error = null 
}: ReviewsSectionProps) {

  const mappedReviews: Testimonial[] = reviews
    .map((review): Testimonial | null => {
      try {
        return {
          id: review.name, // Assuming name is unique enough for key
          name: review.authorAttribution?.displayName || 'Anonymous',
          location: review.relativePublishTimeDescription || '',
          comment: review.text?.text || '',
          rating: review.rating || 5,
          image: review.authorAttribution?.photoUri,
        };
      } catch (err) {
        console.error('Error mapping review:', err, review);
        return null;
      }
    })
    .filter((review): review is Testimonial => review !== null);

  if (isLoading) {
    return (
      <section className="relative py-16 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container mx-auto text-center">
          <p>Loading reviews...</p>
          <div className="mt-4 flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative py-16 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container mx-auto text-center">
          <p className="text-red-500">{`Error loading reviews: ${error}`}</p>
        </div>
      </section>
    );
  }

  if (mappedReviews.length === 0) {
    return (
      <section className="relative py-16 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container mx-auto text-center">
          <p>No reviews available at this time.</p>
          {/* Optionally add links even if no reviews are displayed */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href={`https://search.google.com/local/reviews?placeid=${PLACE_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              See all reviews on Google <FiExternalLink className="ml-2" />
            </Link>
            <Link 
              href={`https://search.google.com/local/writereview?placeid=${PLACE_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Leave a review
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8 md:mb-12"
        >
          What Our Guests Say
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-4xl" // Constrain slider width
        >
          <TestimonialSlider testimonials={mappedReviews} />
        </motion.div>

        {/* Links to Google */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link 
            href={`https://search.google.com/local/reviews?placeid=${PLACE_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            See all reviews on Google <FiExternalLink className="ml-2" />
          </Link>
          <Link 
            href={`https://search.google.com/local/writereview?placeid=${PLACE_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Leave a review
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 