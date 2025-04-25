'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiInfo } from 'react-icons/fi';

interface TripCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  badgeText: string;
  badgeBgColor: string;
  features: string[];
  price: string;
  priceSubtext?: string;
  priceColor: string;
  ctaHref: string;
  ctaBgColor: string;
  ctaHoverBgColor: string;
  detailsHref: string;
  detailsText?: string;
  delay?: number;
}

export default function TripCard({
  imageUrl,
  imageAlt,
  title,
  badgeText,
  badgeBgColor,
  features,
  price,
  priceSubtext,
  priceColor,
  ctaHref,
  ctaBgColor,
  ctaHoverBgColor,
  detailsHref,
  detailsText = "View Details",
  delay = 0
}: TripCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.5,
          delay: delay,
          ease: [0.16, 1, 0.3, 1]
        }
      }}
      viewport={{ once: true, amount: 0.1 }}
      className="bg-white rounded-2xl shadow-lg shadow-blue-100/20 overflow-hidden border border-gray-100"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden group">
        <Link href={detailsHref} className="block w-full h-full">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        <div className={`absolute top-4 right-4 ${badgeBgColor} text-white text-sm font-semibold px-3 py-1 rounded-full z-10`}>
          {badgeText}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-gray-600">
              <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Price Section */}
        <div className="mb-6 text-center">
          <div className={`text-2xl font-bold ${priceColor}`}>{price}</div>
          {priceSubtext && (
            <div className="text-sm text-gray-600 mt-1">{priceSubtext}</div>
          )}
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <Link
            href={ctaHref}
            className={`block w-full ${ctaBgColor} ${ctaHoverBgColor} text-white text-center py-3 px-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg`}
          >
            Book Now
          </Link>
          
          <Link
            href={detailsHref}
            className="block w-full text-center py-2 px-4 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
          >
            <span className="flex items-center justify-center">
              <FiInfo className="w-4 h-4 mr-2" />
              {detailsText}
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 