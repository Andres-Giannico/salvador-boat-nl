import Image from 'next/image';
import Link from 'next/link';
import TurbnbWidget from '@/components/booking/TurbnbWidget';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { absoluteUrl, publicAssetUrl } from '@/config/site';
import { pageMetadata } from '@/lib/page-meta';

export const metadata = pageMetadata({
  title: 'SUP & paddle boottochten Ibiza (3 uur)',
  description: 'Paddleboarden op Ibiza: 15 premium SUP-boards inbegrepen, verborgen cala’s en helder water.',
  path: '/boat-trips/paddle',
  keywords: 'paddleboard Ibiza, SUP boottocht Ibiza, stand up paddle Ibiza',
  ogTitle: 'SUP boottochten Ibiza',
  ogDescription: '15 paddleboards, ontdek cala’s en snorkelplekken.',
  ogImage: '/images/boat/chicasentablasup.png',
  ogImageAlt: 'Paddleboarden tijdens boottrip Ibiza',
});

// JSON-LD structured data for paddle boarding boat trips
const paddleBoatTripsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "SUP-boottochten Ibiza met Salvador",
  "description": "SUP-boottochten op Ibiza met 15 premium paddleboards inbegrepen. Verken verborgen cala's en helder water.",
  "image": publicAssetUrl("/images/boat/chicasentablasup.png"),
  "brand": {
    "@type": "Brand",
    "name": "Salvador Ibiza"
  },
  "offers": {
    "@type": "Offer",
    "url": absoluteUrl("/boat-trips/paddle"),
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
              SUP-boottochten <span className="text-teal-600">Ibiza</span>
            </h1>
            
            <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
              De beste <strong>SUP-boottochten op Ibiza</strong>. 
              15 premium paddleboards inbegrepen om verborgen cala's en helder water te verkennen.
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Premium SUP-avontuur</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-teal-600 font-bold">🏄‍♀️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">15 premium paddleboards</h3>
                    <p className="text-gray-600">Stabiele boards voor elk niveau, van beginners tot gevorderden.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-teal-600 font-bold">🏝️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Verborgen cala's</h3>
                    <p className="text-gray-600">Peddel naar afgelegen strandjes en baaitjes die je alleen vanaf het water bereikt.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-teal-600 font-bold">👨‍🏫</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">SUP-uitleg</h3>
                    <p className="text-gray-600">Professionele begeleiding en basiscursus voor beginners, plus tips om je techniek te verbeteren.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-teal-600 font-bold">💎</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Helder water</h3>
                    <p className="text-gray-600">Peddel in kraakhelder Middellandse-Zee-water met goed zicht en vaak rustige omstandigheden.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-teal-600 font-bold">🛶</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Ook kajaks inbegrepen</h3>
                    <p className="text-gray-600">2 kajaks voor wie liever kajakt of beide wil proberen.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-teal-600 font-bold">📸</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Fotomooie plekken</h3>
                    <p className="text-gray-600">Peddel naar de meest sfeervolle plekken rond Ibiza voor topfoto's.</p>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-3">🏄‍♂️ Voor elk niveau</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                      <strong>Absolute beginners</strong> — basiscursus inbegrepen
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                      <strong>Gemiddeld</strong> — nieuwe gebieden verkennen
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                      <strong>Gevorderden</strong> — uitdagendere routes mogelijk
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                      <strong>Niet-peddelaars</strong> — ontspannen op de boot en zwemmen
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-100 to-cyan-100 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">🌊 Wat is inbegrepen</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>✅ 15 premium paddleboards</li>
                    <li>✅ 2 kajaks</li>
                    <li>✅ Veiligheidsmateriaal</li>
                    <li>✅ Basis SUP-uitleg</li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li>✅ Snorkelspullen</li>
                    <li>✅ Drankjes & tapas (all-inclusive trip)</li>
                    <li>✅ Begeleiding door crew</li>
                    <li>✅ Meerdere peddelplekken</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/boat/chicasentablasup.png"
                  alt="Vrouw op paddleboard tijdens boottocht Ibiza"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/boat/4chicasparadasentablaxxl.webp"
                  alt="Vier gasten op paddleboards tijdens SUP-avontuur Ibiza"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Booking Widget */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12" id="booking-widget">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Boek je SUP-avontuur
              </h2>
              <TurbnbWidget
                companyId={2}
                productId={2}
                billingTermIds={[]}
                channelId={11}
                customProperties={{
                  displayBillingTerm: true,
                  showQuantity: true,
                  quantity: "Gasten",
                  titleVariant: "Modern",
                  bookNow: "SUP-TOCHT BOEKEN",
                  confirmReservationAndPay: "BEVESTIGEN & BETALEN",
                  selectTimeLabel: "Kies tijd",
                  selectExperienceLabel: "SUP-ervaring",
                  addonsLabel: "Extra's",
                  childrenAge: "6 tot 12 jaar",
                  infantAge: "0 tot 5 jaar",
                  depositObservation: "Na je boeking ontvang je een bevestiging met ontmoetingspunt en tijd. Controleer of telefoon en e-mail kloppen. Aanbetaling €20 per persoon; het restant aan boord."
                }}
              />
            </div>

            {/* Additional Options */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Meer watersportavonturen</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link 
                  href="/boat-trips/snorkeling"
                  className="block bg-teal-600 text-white p-6 rounded-lg hover:bg-teal-700 transition-colors"
                >
                  <h4 className="text-xl font-bold mb-2">Snorkelervaring</h4>
                  <p>Combineer SUP met onderwater ontdekkingen</p>
                </Link>
                <Link 
                  href="/boat-trips"
                  className="block bg-gray-800 text-white p-6 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <h4 className="text-xl font-bold mb-2">Alle boottochten</h4>
                  <p>Bekijk al onze wateravonturen</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 