import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TurbnbWidget from '@/components/booking/TurbnbWidget';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Group Boat Trips Ibiza (3 hours) | Perfect for Large Groups | Salvador Ibiza',
  description: 'Ideal group boat trips in Ibiza for friends, celebrations, and corporate events. Accommodates large groups with special rates and customized experiences.',
  keywords: 'group boat trips Ibiza, large group boat tour, friends boat trip Ibiza, corporate boat events, group discounts Ibiza, party boat Ibiza',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/boat-trips/groups',
  },
  openGraph: {
    title: 'Group Boat Trips Ibiza | Perfect for Large Groups',
    description: 'Perfect group boat trips in Ibiza for friends, celebrations, and corporate events. Special rates and customized experiences for large groups.',
    url: 'https://salvadoribiza.com/boat-trips/groups',
    images: [
      {
        url: '/images/boat/chicasmuyfelices.webp',
        width: 1200,
        height: 630,
        alt: 'Happy group of friends enjoying boat trip in Ibiza',
      }
    ],
  },
};

// JSON-LD structured data for group boat trips
const groupBoatTripsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Group Boat Trips Ibiza by Salvador",
  "description": "Perfect boat trips for large groups in Ibiza. Special rates and customized experiences for friends, celebrations, and corporate events.",
  "image": "https://salvadoribiza.com/images/boat/chicasmuyfelices.webp",
  "brand": {
    "@type": "Brand",
    "name": "Salvador Ibiza"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://salvadoribiza.com/boat-trips/groups",
    "priceCurrency": "EUR",
    "price": "80",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "80",
      "priceCurrency": "EUR",
      "valueAddedTaxIncluded": "true"
    },
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "278"
  },
  "duration": "PT3H"
};

export default function GroupBoatTripsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(groupBoatTripsJsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="bg-white border-b border-gray-200 -mx-4 px-4 py-4 mb-8">
            <Breadcrumbs />
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
              Group Boat Trips <span className="text-purple-600">Ibiza</span>
            </h1>
            
            <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
              Perfect <strong>group boat trips in Ibiza</strong> for friends, celebrations, and corporate events. 
              Create unforgettable memories together on the Mediterranean.
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Perfect for Every Group Occasion</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold">👥</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Large Group Capacity</h3>
                    <p className="text-gray-600">Accommodate up to 35 people comfortably with spacious deck areas and seating arrangements.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold">🎉</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Celebration Friendly</h3>
                    <p className="text-gray-600">Perfect for birthdays, bachelor/bachelorette parties, anniversaries, and special occasions.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold">🏢</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Corporate Events</h3>
                    <p className="text-gray-600">Team building activities, company retreats, and business entertainment in a unique setting.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold">🎵</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Group Entertainment</h3>
                    <p className="text-gray-600">Premium sound system for your playlist, group activities, and shared experiences.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold">🍾</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Group Catering</h3>
                    <p className="text-gray-600">All-inclusive drinks and tapas scaled for your group size, with special dietary accommodations.</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-3">🎊 Ideal Group Occasions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <strong>Birthday celebrations</strong>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <strong>Bachelor/Bachelorette parties</strong>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <strong>Friend group reunions</strong>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <strong>Corporate team building</strong>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <strong>Anniversary celebrations</strong>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <strong>Holiday group trips</strong>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <strong>Student group excursions</strong>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <strong>Sports team celebrations</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/boat/chicasmuyfelices.webp"
                  alt="Happy group of friends enjoying boat trip in Ibiza"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/boat/chicaspasandolomuybien.webp"
                  alt="Group of friends having fun on Salvador boat trip"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Booking Widget */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12" id="booking-widget">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Book Your Group Adventure
              </h2>

              <TurbnbWidget
                companyId={2}
                productId={2}
                billingTermIds={[]}
                channelId={11}
                customProperties={{
                  displayBillingTerm: true,
                  showQuantity: true,
                  titleVariant: "Modern",
                  bookNow: "BOOK GROUP TRIP",
                  confirmReservationAndPay: "CONFIRM & PAY",
                  selectTimeLabel: "Time Selection",
                  selectExperienceLabel: "Group Experience",
                  addonsLabel: "Add-ons",
                  childrenAge: "6 to 12 Years",
                  infantAge: "0 to 5 Years"
                }}
              />
            </div>

            {/* Additional Options */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">More Group Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link 
                  href="/private-boat-trips"
                  className="block bg-purple-600 text-white p-6 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <h4 className="text-xl font-bold mb-2">Private Group Charter</h4>
                  <p>Exclusive boat just for your group with custom itinerary</p>
                </Link>
                <Link 
                  href="/boat-trips"
                  className="block bg-gray-800 text-white p-6 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <h4 className="text-xl font-bold mb-2">All Boat Trips</h4>
                  <p>Explore all our group-friendly options</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 