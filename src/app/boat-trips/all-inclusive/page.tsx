import Image from 'next/image';
import Link from 'next/link';
import TurbnbWidget from '@/components/booking/TurbnbWidget';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { absoluteUrl, publicAssetUrl } from '@/config/site';
import { pageMetadata } from '@/lib/page-meta';

export const metadata = pageMetadata({
  title: 'All-inclusive boottochten Ibiza (3 uur)',
  description: 'All-inclusive boottrips op Ibiza: premium drankjes, tapas, watersport en professionele bemanning — zonder verborgen kosten.',
  path: '/boat-trips/all-inclusive',
  keywords: 'all inclusive boot Ibiza, luxe boottocht Ibiza, boottocht alles inbegrepen',
  ogTitle: 'All-inclusive boottochten Ibiza',
  ogDescription: 'Alles inbegrepen: drankjes, eten, watersport en bemanning.',
  ogImage: '/images/optimized/salvador-ibiza-boat-aerial-view.webp',
  ogImageAlt: 'All-inclusive boottocht Ibiza met Salvador',
});

// JSON-LD structured data for all-inclusive boat trips
const allInclusiveBoatTripsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "All-inclusive boottochten Ibiza met Salvador",
  "description": "All-inclusive boottochten op Ibiza met premium drankjes, tapas, watersport en professionele bemanning. Alles inbegrepen voor een perfecte dag op zee.",
  "image": publicAssetUrl("/images/optimized/salvador-ibiza-boat-aerial-view.webp"),
  "brand": {
    "@type": "Brand",
    "name": "Salvador Ibiza"
  },
  "offers": {
    "@type": "Offer",
    "url": absoluteUrl("/boat-trips/all-inclusive"),
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

export default function AllInclusiveBoatTripsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(allInclusiveBoatTripsJsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="bg-white border-b border-gray-200 -mx-4 px-4 py-4 mb-8">
            <Breadcrumbs />
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
              All-inclusive boottochten <span className="text-yellow-600">Ibiza</span>
            </h1>
            
            <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
              Beleef de ultieme <strong>all-inclusive boottocht op Ibiza</strong>. 
              Alles is inbegrepen — premium drankjes, lekker eten, watersport en een professionele bemanning.
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Alles inbegrepen — geen verborgen kosten</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-600 font-bold">🍾</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Premium open bar</h3>
                    <p className="text-gray-600">Onbeperkt premium drankjes: Spaanse cava, sangría, bier, frisdrank en water.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-600 font-bold">🍤</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Spaanse tapas</h3>
                    <p className="text-gray-600">Authentieke tapas en vers seizoensfruit.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-600 font-bold">🏄‍♂️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Watersportuitrusting</h3>
                    <p className="text-gray-600">15 premium paddleboards, 2 kajaks en professionele snorkelsets.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-600 font-bold">⚓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Professionele bemanning</h3>
                    <p className="text-gray-600">Ervaren schipper en crew voor veiligheid, service en lokale tips.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-600 font-bold">🎵</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Geluidsinstallatie</h3>
                    <p className="text-gray-600">Kwalitatief audiosysteem met Bluetooth voor je eigen afspeellijst.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-600 font-bold">🏝️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Verborgen cala's</h3>
                    <p className="text-gray-600">Toegang tot afgelegen zwemplekken en kraakhelder water.</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-3">💎 Hoogtepunten all-inclusive</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    <strong>Geen extra kosten</strong> — alles zit in je ticket
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    <strong>Premium service</strong> — persoonlijke aandacht van de crew
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    <strong>Comfort aan boord</strong> — ruime zitplekken en faciliteiten
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    <strong>Stressvrij</strong> — jij geniet, wij regelen de rest
                  </li>
                </ul>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/optimized/salvador-ibiza-boat-aerial-view.webp"
                  alt="All-inclusive boottocht Ibiza — luchtopname Salvador"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/boat/tapastop.png"
                  alt="Spaanse tapas inbegrepen bij all-inclusive boottocht"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Booking Widget */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12" id="booking-widget">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Boek je all-inclusive ervaring
              </h2>
              <TurbnbWidget
                companyId={2}
                productId={0}
                billingTermIds={[]}
                channelId={0}
                customProperties={{
                  displayBillingTerm: true,
                  showQuantity: true,
                  quantity: "Gasten",
                  titleVariant: "Modern",
                  bookNow: "NU RESERVEREN",
                  confirmReservationAndPay: "BEVESTIGEN & BETALEN",
                  selectTimeLabel: "Kies tijd",
                  selectExperienceLabel: "Soort ervaring",
                  addonsLabel: "Extra's",
                  childrenAge: "0 tot 5 jaar",
                  infantAge: "0 tot 5 jaar",
                  depositObservation: "Na je boeking ontvang je een bevestiging met ontmoetingspunt en tijd. Controleer of telefoon en e-mail kloppen. Aanbetaling €20 per persoon; het restant aan boord."
                }}
              />
            </div>

            {/* Additional Options */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Meer premium-opties</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link 
                  href="/private-boat-trips"
                  className="block bg-yellow-600 text-white p-6 rounded-lg hover:bg-yellow-700 transition-colors"
                >
                  <h4 className="text-xl font-bold mb-2">Privé all-inclusive charter</h4>
                  <p>Exclusieve boot met persoonlijke all-inclusive service</p>
                </Link>
                <Link 
                  href="/boat-trips"
                  className="block bg-gray-800 text-white p-6 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <h4 className="text-xl font-bold mb-2">Alle boottochten</h4>
                  <p>Ontdek al onze premium-opties</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 