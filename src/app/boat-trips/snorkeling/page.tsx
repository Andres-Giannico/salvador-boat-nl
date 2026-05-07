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
  "name": "Snorkelboottochten Ibiza met Salvador",
  "description": "Ontdek de onderwaterwereld van Ibiza met professionele snorkeluitrusting en begeleiding. Geschikt voor alle niveaus in helder Middellandse-Zee-water.",
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
              Snorkelboottochten <span className="text-cyan-600">Ibiza</span>
            </h1>
            
            <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
              Ontdek het onderwaterparadijs van <strong>snorkelboottochten op Ibiza</strong>. 
              Helder water, professionele uitrusting en deskundige begeleiding.
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Onderwateravontuur wacht</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-600 font-bold">🤿</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Professionele snorkelspullen</h3>
                    <p className="text-gray-600">Hoogwaardige maskers, snorkels en vinnen voor alle gasten — schoon en onderhouden.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-600 font-bold">🐠</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Zeeleven ontdekken</h3>
                    <p className="text-gray-600">Levendige riffen en mediterrane fauna in hun natuurlijke omgeving.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-600 font-bold">💎</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Helder water</h3>
                    <p className="text-gray-600">Verborgen cala's en plekken met uitstekend zicht onder water.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-600 font-bold">👨‍🏫</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Deskundige begeleiding</h3>
                    <p className="text-gray-600">Veiligheid en tips voor beginners en ervaren snorkelaars.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-600 font-bold">🏝️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Meerdere snorkelplekken</h3>
                    <p className="text-gray-600">2–3 verschillende stops tijdens je 3 uur durende trip.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-600 font-bold">🍹</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Verfrissing inbegrepen</h3>
                    <p className="text-gray-600">Drankjes, tapas en fruit tussen de snorkelsessies door.</p>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-3">🤿 Voor alle niveaus</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                    <strong>Beginners welkom</strong> — volledige briefing en hulp bij zwemmen
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                    <strong>Ervaren snorkelaars</strong> — dieper water met vertrouwen
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                    <strong>Niet-zwemmers</strong> — genieten vanaf de boot of ondiep water
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                    <strong>Gezinsvriendelijk</strong> — kindermateriaal en toezicht
                  </li>
                </ul>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/boat/parejasnorkeling.webp"
                  alt="Stel snorkelt tijdens boottocht Ibiza"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/optimized/crystal-clear-waters-ibiza.webp"
                  alt="Helder water — ideaal om te snorkelen op Ibiza"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Booking Widget */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12" id="booking-widget">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Boek je snorkelavontuur
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
                  bookNow: "SNORKELTOCHT BOEKEN",
                  confirmReservationAndPay: "BEVESTIGEN & BETALEN",
                  selectTimeLabel: "Kies tijd",
                  selectExperienceLabel: "Snorkelervaring",
                  addonsLabel: "Extra's",
                  childrenAge: "6 tot 12 jaar",
                  infantAge: "0 tot 5 jaar",
                  depositObservation: "Na je boeking ontvang je een bevestiging met ontmoetingspunt en tijd. Controleer of telefoon en e-mail kloppen. Aanbetaling €20 per persoon; het restant aan boord."
                }}
              />
            </div>

            {/* Additional Options */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Meer wateravonturen</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link 
                  href="/boat-trips/paddle"
                  className="block bg-cyan-600 text-white p-6 rounded-lg hover:bg-cyan-700 transition-colors"
                >
                  <h4 className="text-xl font-bold mb-2">SUP-ervaring</h4>
                  <p>Combineer snorkelen met paddleboarden</p>
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