import Image from 'next/image';
import Link from 'next/link';
import TurbnbWidget from '@/components/booking/TurbnbWidget';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { absoluteUrl, publicAssetUrl } from '@/config/site';
import { pageMetadata } from '@/lib/page-meta';

export const metadata = pageMetadata({
  title: 'Snorkel boottochten Ibiza (3 uur)',
  description: 'Snorkelen op Ibiza: professionele uitrusting, helder water en zwemstops bij de mooiste plekken.',
  path: '/boat-trips/snorkeling',
  keywords: 'snorkelen Ibiza, snorkel boottocht, onderwater Ibiza',
  ogTitle: 'Snorkel boottochten Ibiza',
  ogDescription: 'Snorkelsets en begeleiding, ontdek het underwaterleven.',
  ogImage: '/images/boat/parejasnorkeling.webp',
  ogImageAlt: 'Snorkelen tijdens boottrip Ibiza',
});

// JSON-LD structured data for snorkeling boat trips
const snorkelingBoatTripsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Snorkeling Boat Trips Ibiza by Salvador",
  "description": "Discover Ibiza's underwater world with professional snorkeling equipment and expert guidance. Perfect for all skill levels in crystal-clear Mediterranean waters.",
  "image": publicAssetUrl("/images/boat/parejasnorkeling.webp"),
  "brand": {
    "@type": "Brand",
    "name": "Salvador Ibiza"
  },
  "offers": {
    "@type": "Offer",
    "url": absoluteUrl("/boat-trips/snorkeling"),
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

export default function SnorkelingBoatTripsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(snorkelingBoatTripsJsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="bg-white border-b border-gray-200 -mx-4 px-4 py-4 mb-8">
            <Breadcrumbs />
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
              Snorkeling Boat Trips <span className="text-cyan-600">Ibiza</span>
            </h1>
            
            <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
              Discover the underwater paradise of <strong>snorkeling boat trips in Ibiza</strong>. 
              Explore crystal-clear waters with professional equipment and expert guidance.
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Underwater Adventure Awaits</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-600 font-bold">🤿</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Professional Snorkeling Gear</h3>
                    <p className="text-gray-600">High-quality masks, snorkels, and fins provided for all guests. Sanitized and maintained equipment.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-600 font-bold">🐠</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Marine Life Discovery</h3>
                    <p className="text-gray-600">Explore vibrant underwater ecosystems and discover Mediterranean marine life in their natural habitat.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-600 font-bold">💎</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Crystal Clear Waters</h3>
                    <p className="text-gray-600">Access to hidden coves and pristine locations with exceptional underwater visibility.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-600 font-bold">👨‍🏫</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Expert Guidance</h3>
                    <p className="text-gray-600">Professional crew provides safety briefings and snorkeling tips for beginners and experienced swimmers.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-600 font-bold">🏝️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Multiple Snorkel Spots</h3>
                    <p className="text-gray-600">Visit 2-3 different underwater locations during your 3-hour adventure for varied marine experiences.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-600 font-bold">🍹</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Refreshments Included</h3>
                    <p className="text-gray-600">Premium drinks, Spanish tapas, and fresh fruit to recharge between snorkeling sessions.</p>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-3">🤿 Perfect for All Skill Levels</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                    <strong>Beginners welcome</strong> - full safety briefing and swimming assistance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                    <strong>Experienced snorkelers</strong> - explore deeper areas with confidence
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                    <strong>Non-swimmers</strong> - can enjoy from the boat or shallow water areas
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                    <strong>Family friendly</strong> - children's equipment and supervision available
                  </li>
                </ul>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/boat/parejasnorkeling.webp"
                  alt="Couple enjoying snorkeling during Ibiza boat trip"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/optimized/crystal-clear-waters-ibiza.webp"
                  alt="Crystal clear waters perfect for snorkeling in Ibiza"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Booking Widget */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12" id="booking-widget">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Book Your Snorkeling Adventure
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
                  bookNow: "BOOK SNORKELING TRIP",
                  confirmReservationAndPay: "CONFIRM & PAY",
                  selectTimeLabel: "Time Selection",
                  selectExperienceLabel: "Snorkeling Experience",
                  addonsLabel: "Add-ons",
                  childrenAge: "6 to 12 Years",
                  infantAge: "0 to 5 Years"
                }}
              />
            </div>

            {/* Additional Options */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">More Aquatic Adventures</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link 
                  href="/boat-trips/paddle"
                  className="block bg-cyan-600 text-white p-6 rounded-lg hover:bg-cyan-700 transition-colors"
                >
                  <h4 className="text-xl font-bold mb-2">Paddle Boarding Experience</h4>
                  <p>Combine snorkeling with paddle board adventures</p>
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