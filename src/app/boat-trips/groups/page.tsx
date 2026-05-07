import Image from 'next/image';
import Link from 'next/link';
import TurbnbWidget from '@/components/booking/TurbnbWidget';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { absoluteUrl, publicAssetUrl } from '@/config/site';
import { pageMetadata } from '@/lib/page-meta';

export const metadata = pageMetadata({
  title: 'Groepsboottochten Ibiza (3 uur)',
  description: 'Boottochten voor grote groepen: vrienden, feesten en zakelijke uitjes. Maatwerk en scherpe tarieven.',
  path: '/boat-trips/groups',
  keywords: 'groep boot Ibiza, grote groep boot, zakelijk varen Ibiza, bootfeest Ibiza',
  ogTitle: 'Groepsboottochten Ibiza',
  ogDescription: 'Ideaal voor groepen en events op Ibiza.',
  ogImage: '/images/boat/chicasmuyfelices.webp',
  ogImageAlt: 'Vrolijke groep op boot Ibiza',
});

// JSON-LD structured data for group boat trips
const groupBoatTripsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Groepsboottochten Ibiza met Salvador",
  "description": "Boottochten voor grote groepen op Ibiza. Speciale tarieven en maatwerk voor vrienden, feesten en zakelijke events.",
  "image": publicAssetUrl("/images/boat/chicasmuyfelices.webp"),
  "brand": {
    "@type": "Brand",
    "name": "Salvador Ibiza"
  },
  "offers": {
    "@type": "Offer",
    "url": absoluteUrl("/boat-trips/groups"),
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
              Groepsboottochten <span className="text-purple-600">Ibiza</span>
            </h1>
            
            <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
              Ideale <strong>groepsboottochten op Ibiza</strong> voor vrienden, feesten en zakelijke uitjes. 
              Onvergetelijke momenten samen op zee.
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Voor elke groepsgelegenheid</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold">👥</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Ruime capaciteit</h3>
                    <p className="text-gray-600">Tot 35 personen comfortabel, met ruim dek en zitplekken.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold">🎉</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Perfect om te vieren</h3>
                    <p className="text-gray-600">Verjaardagen, vrijgezellenfeesten, jubilea en andere bijzondere momenten.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold">🏢</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Zakelijke events</h3>
                    <p className="text-gray-600">Teambuilding, bedrijfsuitjes en zakelijke ontspanning in een unieke setting.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold">🎵</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Entertainment voor groepen</h3>
                    <p className="text-gray-600">Geluidsinstallatie voor je playlist, groepsactiviteiten en gedeelde ervaringen.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold">🍾</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Catering voor groepen</h3>
                    <p className="text-gray-600">All-inclusive drankjes en tapas, afgestemd op je groepsgrootte; dieetwensen in overleg.</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-3">🎊 Ideale groepsmomenten</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <strong>Verjaardagen</strong>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <strong>Vrijgezellenfeesten</strong>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <strong>Reünie met vrienden</strong>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <strong>Zakelijke teambuilding</strong>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <strong>Jubilea</strong>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <strong>Groepsvakanties</strong>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <strong>Studentenuitstappen</strong>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <strong>Teamfeesten</strong>
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
                  alt="Vrolijke groep vrienden op boottocht Ibiza"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/boat/chicaspasandolomuybien.webp"
                  alt="Groep vrienden plezier op boot Salvador Ibiza"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Booking Widget */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12" id="booking-widget">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Boek je groepsavontuur
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
                  bookNow: "GROEPSTOCHT BOEKEN",
                  confirmReservationAndPay: "BEVESTIGEN & BETALEN",
                  selectTimeLabel: "Kies tijd",
                  selectExperienceLabel: "Groepservaring",
                  addonsLabel: "Extra's",
                  childrenAge: "6 tot 12 jaar",
                  infantAge: "0 tot 5 jaar",
                  depositObservation: "Na je boeking ontvang je een bevestiging met ontmoetingspunt en tijd. Controleer of telefoon en e-mail kloppen. Aanbetaling €20 per persoon; het restant aan boord."
                }}
              />
            </div>

            {/* Additional Options */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Meer groepsopties</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link 
                  href="/private-boat-trips"
                  className="block bg-purple-600 text-white p-6 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <h4 className="text-xl font-bold mb-2">Privégroepscharter</h4>
                  <p>Exclusief de boot voor jouw groep met route op maat</p>
                </Link>
                <Link 
                  href="/boat-trips"
                  className="block bg-gray-800 text-white p-6 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <h4 className="text-xl font-bold mb-2">Alle boottochten</h4>
                  <p>Bekijk alle groepsvriendelijke opties</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 