'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiMapPin, FiUsers, FiClock, FiStar, FiAnchor, FiSun, FiCompass, FiEye, FiDroplet, FiActivity, FiShield, FiGift } from 'react-icons/fi';
import TurbnbWidget from '@/components/booking/TurbnbWidget';
import TripGallery from '@/components/trips/TripGallery';
import WhatsIncluded from '@/components/trips/WhatsIncluded';
import TripHighlights from '@/components/trips/TripHighlights';
import ReviewsSection from '@/components/trips/ReviewsSection';
import FAQ from '@/components/trips/FAQ';
import CallToActionSection from '@/components/CallToActionSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import type { GalleryImage } from '@/components/trips/TripGallery';
import type { HighlightItem } from '@/components/trips/TripHighlights';
import type { FAQItem } from '@/components/trips/FAQ';

const sanAntonioImages: GalleryImage[] = [
  { src: '/images/optimized/ibiza-sunset-boat-trip-salvador.webp', alt: 'San Antonio sunset boat trip' },
  { src: '/images/boat/chicasensupencueva.webp', alt: 'Paddleboarding in hidden cove' }, 
  { src: '/images/boat/doschicassupsunset.webp', alt: 'SUP boarding at sunset' },
  { src: '/images/optimized/drinks-cave-sunset-ibiza.webp', alt: 'Sunset drinks on boat' },
  { src: '/images/optimized/friends-ibiza-sunset-boat.webp', alt: 'Friends enjoying sunset' },
  { src: '/images/optimized/salvador-ibiza-boat-cave-exploration.webp', alt: 'Boat near cave entrance' }
];

const highlights: HighlightItem[] = [
  {
    icon: <FiCompass className="text-blue-500" />,
    title: 'San Antonio Bay exploration',
    description: 'Discover the most beautiful spots around the bay'
  },
  {
    icon: <FiEye className="text-orange-500" />,
    title: 'Café del Mar sunset views',
    description: 'Best views of the famous sunset strip from the water'
  },
  {
    icon: <FiDroplet className="text-cyan-500" />,
    title: 'Crystal clear waters',
    description: 'Perfect for swimming and snorkeling'
  },
  {
    icon: <FiActivity className="text-green-500" />,
    title: 'Stand-up paddleboard included',
    description: 'Free SUP boards for all guests'
  },
  {
    icon: <FiShield className="text-purple-500" />,
    title: 'Snorkeling equipment',
    description: 'Professional gear provided'
  },
  {
    icon: <FiGift className="text-pink-500" />,
    title: 'Complimentary drinks & snacks',
    description: 'Refreshments included throughout the trip'
  }
];

const included = [
  { name: 'Professional skipper', description: 'Experienced local captain' },
  { name: 'Fuel & harbor fees', description: 'All costs included' },
  { name: 'Stand-up paddleboards', description: 'Free SUP equipment' },
  { name: 'Snorkeling equipment', description: 'Masks and fins provided' },
  { name: 'Drinks & light snacks', description: 'Refreshments on board' },
  { name: 'Bluetooth sound system', description: 'Play your music' },
  { name: 'Safety equipment', description: 'Life jackets and safety gear' },
  { name: 'Insurance coverage', description: 'Fully insured trips' }
];

const faqs: FAQItem[] = [
  {
    question: "What makes San Antonio boat trips special?",
    answer: "San Antonio offers the perfect combination of beautiful coastline, vibrant atmosphere, and stunning sunset views. You'll explore hidden coves while enjoying the famous Ibiza sunset from the water."
  },
  {
    question: "Do we visit Café del Mar area?",
    answer: "Yes! Our San Antonio route includes views of the famous Café del Mar sunset strip from the water, offering a unique perspective of this iconic Ibiza location."
  },
  {
    question: "Is this trip suitable for families?",
    answer: "Absolutely! Our San Antonio trips are family-friendly with calm waters, safety equipment, and activities suitable for all ages."
  },
  {
    question: "What's the best time for San Antonio trips?",
    answer: "We offer both day trips and sunset trips. Sunset trips are particularly magical in San Antonio, departing 2.5 hours before sunset for the perfect timing."
  }
];

export default function SanAntonioBoatTripsClient() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/optimized/ibiza-sunset-boat-trip-salvador.webp"
          alt="San Antonio Boat Trips Ibiza"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            San Antonio Boat Trips
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto">
            Explore San Antonio Bay & enjoy the famous Ibiza sunset from the water
          </p>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <FiClock className="text-blue-300 text-sm sm:text-base" />
              <span>3 Hours</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <FiUsers className="text-blue-300 text-sm sm:text-base" />
              <span>Up to 35 People</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <FiMapPin className="text-blue-300 text-sm sm:text-base" />
              <span>San Antonio Bay</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <FiStar className="text-blue-300 text-sm sm:text-base" />
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </section>

            {/* Quick Info Bar */}
      <section className="bg-blue-50 py-4 sm:py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <FiAnchor className="text-blue-600 text-lg sm:text-xl flex-shrink-0" />
              <div>
                <div className="font-semibold text-sm sm:text-base">From €80</div>
                <div className="text-xs sm:text-sm text-gray-600">per person</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <FiSun className="text-orange-500 text-lg sm:text-xl flex-shrink-0" />
              <div>
                <div className="font-semibold text-sm sm:text-base">Sunset Views</div>
                <div className="text-xs sm:text-sm text-gray-600">Café del Mar area</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <FiUsers className="text-green-600 text-lg sm:text-xl flex-shrink-0" />
              <div>
                <div className="font-semibold text-sm sm:text-base">Large Groups</div>
                <div className="text-xs sm:text-sm text-gray-600">Up to 35 people</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Widget */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Book Your San Antonio Adventure</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
              Choose your preferred date and time for an unforgettable boat trip around San Antonio Bay
            </p>
          </div>
          <TurbnbWidget 
            companyId={2}
            productId={2}
            billingTermIds={[]}
            channelId={11}
            className="max-w-4xl mx-auto"
            customProperties={{
              displayBillingTerm: true,
              showQuantity: true,
              quantity: "Guests",
              titleVariant: "Modern",
              bookNow: "BOOK SAN ANTONIO TRIP",
              confirmReservationAndPay: "CONFIRM & PAY",
              selectTimeLabel: "Select Time",
              selectExperienceLabel: "San Antonio Experience",
              addonsLabel: "Add-ons",
              childrenAge: "6 to 12 Years",
              infantAge: "0 to 5 Years",
              depositObservation: "After completing your booking, you will receive a confirmation voucher with all the details including meeting point and time. Please ensure your contact information (phone and email) is correct as we may need to reach you regarding your booking. A deposit of €20 per person is required to secure your reservation, with the remaining balance paid onboard."
            }}
          />
        </div>
      </section>

      {/* Trip Highlights */}
      <TripHighlights 
        title="San Antonio Highlights"
        items={highlights}
      />

      {/* Gallery */}
      <TripGallery 
        images={sanAntonioImages}
        title="San Antonio Experience"
      />

      {/* What's Included */}
      <WhatsIncluded 
        items={included}
        title="Everything Included"
      />

      {/* Description Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
              San Antonio Boat Trips Experience
            </h2>
            
            <div className="prose prose-base sm:prose-lg max-w-none">
              <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Experience the magic of <strong>San Antonio Bay</strong> with our exclusive boat trips. 
                This vibrant area of Ibiza is famous for its stunning sunsets, crystal-clear waters, 
                and the iconic Café del Mar atmosphere.
              </p>
              
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Why Choose San Antonio?</h3>
              <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                San Antonio offers a unique blend of natural beauty and vibrant culture. Our boat trips 
                take you to the best spots around the bay, including hidden coves and the famous sunset 
                viewing areas that make this destination so special.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Perfect for Everyone</h3>
              <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Whether you're looking for a romantic sunset experience, family fun, or adventure with 
                friends, our San Antonio boat trips cater to all. The calm waters of the bay make it 
                perfect for swimming, paddleboarding, and snorkeling.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Sunset Magic</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                There's nothing quite like watching the Ibiza sunset from the water near San Antonio. 
                Our sunset trips are timed perfectly to give you the best views of this daily spectacle, 
                with the famous Café del Mar coastline as your backdrop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection />

      {/* FAQ */}
      <FAQ 
        items={faqs}
        title="San Antonio Boat Trips FAQ"
      />

      {/* CTA */}
      <CallToActionSection />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
} 