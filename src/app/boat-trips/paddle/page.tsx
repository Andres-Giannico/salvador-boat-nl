import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TurbnbWidget from '@/components/booking/TurbnbWidget';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Paddle Boarding Boat Trips Ibiza (3 hours) | SUP Adventures | Salvador Ibiza',
  description: 'Amazing paddle boarding boat trips in Ibiza with 15 premium SUP boards included. Explore hidden coves and crystal-clear waters on your paddle board adventure.',
  keywords: 'paddle boarding Ibiza, SUP boat trips, paddle board rental Ibiza, stand up paddle boarding, SUP adventure Ibiza, paddle board tours',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/boat-trips/paddle',
  },
  openGraph: {
    title: 'Paddle Boarding Boat Trips Ibiza | SUP Adventures',
    description: 'Amazing paddle boarding boat trips in Ibiza with 15 premium SUP boards included. Explore hidden coves and crystal-clear waters.',
    url: 'https://salvadoribiza.com/boat-trips/paddle',
    images: [
      {
        url: '/images/boat/chicasentablasup.png',
        width: 1200,
        height: 630,
        alt: 'Woman paddle boarding during Ibiza boat trip',
      }
    ],
  },
};

// JSON-LD structured data for paddle boarding boat trips
const paddleBoatTripsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Paddle Boarding Boat Trips Ibiza by Salvador",
  "description": "Amazing paddle boarding boat trips in Ibiza with 15 premium SUP boards included. Explore hidden coves and crystal-clear waters on your adventure.",
  "image": "https://salvadoribiza.com/images/boat/chicasentablasup.png",
  "brand": {
    "@type": "Brand",
    "name": "Salvador Ibiza"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://salvadoribiza.com/boat-trips/paddle",
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

export default function PaddleBoatTripsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(paddleBoatTripsJsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="bg-white border-b border-gray-200 -mx-4 px-4 py-4 mb-8">
            <Breadcrumbs />
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
              Paddle Boarding Boat Trips <span className="text-teal-600">Ibiza</span>
            </h1>
            
            <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
              Experience the best <strong>paddle boarding boat trips in Ibiza</strong>. 
              15 premium SUP boards included to explore hidden coves and crystal-clear waters.
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Premium SUP Adventure Experience</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-teal-600 font-bold">🏄‍♀️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">15 Premium SUP Boards</h3>
                    <p className="text-gray-600">High-quality, stable paddle boards suitable for all skill levels, from beginners to advanced paddlers.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-teal-600 font-bold">🏝️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Hidden Cove Access</h3>
                    <p className="text-gray-600">Paddle to secluded beaches and hidden coves only accessible by water for a unique exploration.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-teal-600 font-bold">👨‍🏫</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">SUP Instruction</h3>
                    <p className="text-gray-600">Professional guidance and basic SUP lessons for beginners, plus tips for improving your technique.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-teal-600 font-bold">💎</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Crystal Clear Waters</h3>
                    <p className="text-gray-600">Paddle in pristine Mediterranean waters with excellent visibility and calm conditions.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-teal-600 font-bold">🛶</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Kayaks Also Included</h3>
                    <p className="text-gray-600">2 kayaks available for those who prefer kayaking or want to try both paddle sports.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-teal-600 font-bold">📸</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Instagram-Worthy Spots</h3>
                    <p className="text-gray-600">Paddle to the most photogenic locations around Ibiza for amazing photos and memories.</p>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-3">🏄‍♂️ Perfect for All Skill Levels</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                      <strong>Complete beginners</strong> - basic instruction included
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                      <strong>Intermediate paddlers</strong> - explore new areas
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                      <strong>Advanced SUPers</strong> - challenging routes available
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                      <strong>Non-paddlers</strong> - can relax on boat and swim
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-100 to-cyan-100 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">🌊 What's Included in Your SUP Adventure</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>✅ 15 premium paddle boards</li>
                    <li>✅ 2 kayaks for variety</li>
                    <li>✅ All safety equipment</li>
                    <li>✅ Basic SUP instruction</li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li>✅ Snorkeling equipment</li>
                    <li>✅ All-inclusive drinks & tapas</li>
                    <li>✅ Professional crew guidance</li>
                    <li>✅ Multiple paddle locations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/boat/chicasentablasup.png"
                  alt="Woman paddle boarding during Ibiza boat trip"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/boat/4chicasparadasentablaxxl.webp"
                  alt="Four women on paddle boards during Ibiza SUP adventure"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Booking Widget */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12" id="booking-widget">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Book Your SUP Adventure
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
                  bookNow: "BOOK SUP TRIP",
                  confirmReservationAndPay: "CONFIRM & PAY",
                  selectTimeLabel: "Time Selection",
                  selectExperienceLabel: "SUP Experience",
                  addonsLabel: "Add-ons",
                  childrenAge: "6 to 12 Years",
                  infantAge: "0 to 5 Years"
                }}
              />
            </div>

            {/* Additional Options */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">More Water Sports Adventures</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link 
                  href="/boat-trips/snorkeling"
                  className="block bg-teal-600 text-white p-6 rounded-lg hover:bg-teal-700 transition-colors"
                >
                  <h4 className="text-xl font-bold mb-2">Snorkeling Experience</h4>
                  <p>Combine SUP with underwater exploration</p>
                </Link>
                <Link 
                  href="/boat-trips"
                  className="block bg-gray-800 text-white p-6 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <h4 className="text-xl font-bold mb-2">All Boat Trips</h4>
                  <p>Explore all our water adventures</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 