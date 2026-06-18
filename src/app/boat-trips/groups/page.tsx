import Image from 'next/image';
import Link from 'next/link';
import TurbnbWidget from '@/components/booking/TurbnbWidget';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { pageMetadata } from '@/lib/page-meta';
import { buildProductSchema } from '@/lib/product-schema';

export const metadata = pageMetadata({
  title: 'Groepsboottochten Ibiza (3 uur) | Vrienden & feesten',
  description: 'Ideale groepsboottochten op Ibiza voor vrienden, verjaardagen, vrijgezellenfeesten en reüniés. Tot 35 gasten, all-inclusive drankjes, tapas en watersport vanuit San Antonio.',
  path: '/boat-trips/groups',
  keywords: 'groep boot Ibiza, vrienden boottocht Ibiza, verjaardag bootfeest Ibiza, vrijgezellenfeest boot Ibiza, grote groep boottocht Ibiza',
  ogTitle: 'Groepsboottochten Ibiza | Vrienden & feesten',
  ogDescription: 'Boek een groepsboottocht op Ibiza voor vrienden en feesten. All-inclusive 3 uur cruises met drankjes, tapas en watersport voor tot 35 gasten.',
  ogImage: '/images/boat/chicasmuyfelices.webp',
  ogImageAlt: 'Vrolijke groep op boot Ibiza',
});

export default async function GroupBoatTripsPage() {
  const groupBoatTripsJsonLd = await buildProductSchema({
    name: "Groepsboottochten Ibiza met Salvador",
    description:
      "Ideale boottochten voor vrienden en feesten op Ibiza. Speciale tarieven en all-inclusive ervaringen voor verjaardagen, vrijgezellenfeesten en groepsreüniés.",
    path: "/boat-trips/groups",
    price: "80",
    image: "/images/boat/chicasmuyfelices.webp",
    duration: "PT3H",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(groupBoatTripsJsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white border-b border-gray-200 -mx-4 px-4 py-4 mb-8">
            <Breadcrumbs />
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
              Groepsboottochten <span className="text-purple-600">Ibiza</span>
            </h1>
            
            <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
              Ideale <strong>groepsboottochten op Ibiza</strong> voor vrienden, verjaardagen, vrijgezellenfeesten en reüniés.
              Creëer onvergetelijke herinneringen samen op de Middellandse Zee.
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Perfect voor vrienden & feesten</h2>
              
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
                    <span className="text-purple-600 font-bold">🥂</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Vrienden & reüniés</h3>
                    <p className="text-gray-600">Ideaal voor vakantiegroepen, reüniés en vrienden die samen een dag op zee willen beleven.</p>
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
                      <strong>Groepsvakanties</strong>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <strong>Jubilea</strong>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <strong>Studentenuitstappen</strong>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <strong>Sportteamfeesten</strong>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <strong>Hen- & vrijgezellenfeesten</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

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
                  selectExperienceLabel: "Groepservaring",
                  addonsLabel: "Extra's",
                  childrenAge: "6 tot 12 jaar",
                  infantAge: "0 tot 5 jaar",
                  depositObservation: "Na je boeking ontvang je een bevestiging met ontmoetingspunt en tijd. Controleer of telefoon en e-mail kloppen. Aanbetaling €20 per persoon; het restant aan boord."
                }}
              />
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Meer groepsopties</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link 
                  href="/private-boat-trips"
                  className="block bg-purple-600 text-white p-6 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <h4 className="text-xl font-bold mb-2">Privégroepscharter</h4>
                  <p>Exclusief de boot voor jouw groep met route op maat</p>
                </Link>
                <Link 
                  href="/corporate-events"
                  className="block bg-teal-600 text-white p-6 rounded-lg hover:bg-teal-700 transition-colors"
                >
                  <h4 className="text-xl font-bold mb-2">Zakelijke events</h4>
                  <p>Teambuilding en zakelijke entertainment op zee</p>
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
