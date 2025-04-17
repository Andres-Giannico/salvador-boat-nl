'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiInfo } from 'react-icons/fi'; // Using react-icons

interface TripCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  badgeText?: string;
  badgeBgColor?: string; // e.g., 'bg-blue-500'
  features: string[];
  price: string;
  priceColor?: string; // e.g., 'text-blue-500'
  ctaText?: string;
  ctaHref: string;
  ctaBgColor?: string; // e.g., 'bg-blue-500'
  ctaHoverBgColor?: string; // e.g., 'hover:bg-blue-600'
  detailsHref?: string; // New prop for details link
  detailsText?: string; // New prop for details button text
  className?: string;
  delay?: number; // For staggered animation
}

const TripCard: React.FC<TripCardProps> = ({
  imageUrl,
  imageAlt,
  title,
  badgeText,
  badgeBgColor = 'bg-gray-500',
  features,
  price,
  priceColor = 'text-gray-800',
  ctaText = 'Book Now',
  ctaHref,
  ctaBgColor = 'bg-gray-700',
  ctaHoverBgColor = 'hover:bg-gray-800',
  detailsHref, // Destructure new prop
  detailsText = 'More Details', // Default text for details button
  className = '',
  delay = 0,
}) => {
  return (
    <motion.div 
      className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.6, ease: 'easeOut' }}
      whileHover={{ y: -5, boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.1)' }} // Subtle lift and shadow increase
    >
      {/* Image Section */}
      <div className="relative h-60 overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" // Zoom effect on hover (needs group class on parent link if wrapped)
        />
        {badgeText && (
          <div className={`absolute top-4 left-4 ${badgeBgColor} text-white px-3 py-1 rounded-full text-xs font-bold shadow-md`}>
            {badgeText}
          </div>
        )}
        {/* Optional Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div> */}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-display font-bold mb-4 text-gray-900">{title}</h3>
        
        {/* Features List */}
        <ul className="space-y-2 mb-5 text-gray-600 text-sm flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <FiCheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Price, Details & CTA */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex flex-wrap justify-between items-center gap-3">
          <p className={`text-2xl font-bold ${priceColor} whitespace-nowrap`}>{price}</p>
          <div className="flex items-center gap-2">
            {/* Details Button (Optional) */}
            {detailsHref && (
              <Link href={detailsHref}>
                <span 
                  className={`py-2 px-4 rounded-full text-xs font-semibold shadow-sm border border-gray-300 text-gray-600 bg-white hover:bg-gray-50 transition-all duration-300 inline-flex items-center`}
                >
                  <FiInfo className="w-3 h-3 mr-1.5" /> 
                  {detailsText}
                </span>
              </Link>
            )}
            {/* Main CTA Button */}
            <Link href={ctaHref}>
              <span 
                className={`py-2 px-5 rounded-full text-sm font-semibold shadow-md text-white ${ctaBgColor} ${ctaHoverBgColor} transition-all duration-300 transform hover:scale-105 inline-flex items-center`}
              >
                {ctaText}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TripCard; 