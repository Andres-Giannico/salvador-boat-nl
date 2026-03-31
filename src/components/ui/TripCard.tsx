'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMapPin, FiDollarSign, FiInfo } from 'react-icons/fi';
import { Check } from 'lucide-react';

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
  isPopular?: boolean;
  description?: string;
  delay?: number;
  /** Evita /_next/image: sirve el archivo estático directo (útil si el optimizador falla en algún cliente). */
  imageUnoptimized?: boolean;
}

const TripCard: React.FC<TripCardProps> = ({
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
  detailsText = 'Learn More',
  isPopular = false,
  description,
  delay = 0,
  imageUnoptimized = false
}) => {

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: delay,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <motion.div 
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className={`relative flex flex-col bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out group`}
    >
      {isPopular && (
        <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-xs font-semibold px-2.5 py-0.5 rounded z-10 shadow-sm">
          Most Popular
        </div>
      )}
      <Link href={detailsHref} className="block relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          unoptimized={imageUnoptimized}
          className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className={`absolute top-3 left-3 ${badgeBgColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow z-10`}>
          {badgeText}
        </div>
      </Link>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
        {description && (
          <p className="text-sm text-gray-500 mb-3 italic">{description}</p>
        )}
        <ul className="space-y-2 text-sm text-gray-600 mb-4 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <div className={`${priceColor} text-lg font-bold`}>
              {price}
              {priceSubtext && <p className="text-xs font-normal text-gray-500 leading-tight">{priceSubtext}</p>}
            </div>
            <Link href={detailsHref} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              {detailsText} <FiInfo className="inline w-3 h-3 ml-1"/>
            </Link>
          </div>
          
          <Link 
            href={ctaHref} 
            className={`block w-full text-center ${ctaBgColor} ${ctaHoverBgColor} text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-300 shadow-sm hover:shadow-md`}
          >
            Book Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default TripCard; 