import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { pageMetadata } from '@/lib/page-meta';

export const metadata = pageMetadata({
  title: 'Gezinsboottochten Ibiza (3 uur)',
  description:
    'Veilige family trips op Ibiza: 3 uur zwemmen, snorkelen en leuke activiteiten voor jong en oud.',
  path: '/boat-trips/family',
  keywords:
    'familie boot Ibiza, kinderen boottocht, gezinsvriendelijke boot Ibiza',
});

export default function FamilyBoatTripsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white border-b border-gray-200 -mx-4 px-4 py-4 mb-8">
          <Breadcrumbs />
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
            Gezinsboottochten <span className="text-green-600">Ibiza</span>
          </h1>

          <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
            Maak onvergetelijke herinneringen met onze <strong>gezinsboottochten op Ibiza</strong>.
            Veilige, leuke en leerzame uitstapjes voor alle leeftijden.
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Waarom gezinnen van ons houden</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold">👨‍👩‍👧‍👦</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Gezinsvriendelijke sfeer</h3>
                  <p className="text-gray-600">
                    Veilige, gastvrije omgeving waar kinderen en volwassenen samen genieten.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold">🏊</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Veilige zwemplekken</h3>
                  <p className="text-gray-600">
                    Rustige baaien, zorgvuldig gekozen, ideaal voor kinderen om te zwemmen en spelen.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold">🐠</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Leerzame ervaring</h3>
                  <p className="text-gray-600">
                    Ontdek zeeleven, lokale cultuur en de natuur van Ibiza.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold">🍎</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Eten voor kids</h3>
                  <p className="text-gray-600">
                    Vers fruit, gezonde snacks en alcoholvrije drankjes voor kinderen.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="font-bold text-green-800 mb-2">🛡️ Veiligheid eerst</h3>
              <p className="text-green-700">
                Alle kinderen krijgen reddingsvesten en een veiligheidsbriefing. Onze ervaren bemanning is
                getraind in veiligheid met gezinnen.
              </p>
            </div>

            <div className="text-center">
              <p className="text-lg font-semibold text-gray-800 mb-4">Het perfecte familie-avontuur wacht!</p>
              <p className="text-3xl font-bold text-green-600 mb-2">€80 per volwassene</p>
              <p className="text-lg text-gray-600 mb-6">Kinderen tot 12 jaar: 50% korting</p>
              <Link
                href="/boat-trips/day-trip"
                className="inline-block bg-green-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-green-700 transition-colors"
              >
                Boek nu je gezinstrip
              </Link>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Meer opties voor gezinnen</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/private-boat-trips"
                className="block bg-blue-600 text-white p-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <h4 className="text-xl font-bold mb-2">Privé gezinscharter</h4>
                <p>Exclusief de boot voor jullie gezin</p>
              </Link>
              <Link
                href="/boat-trips"
                className="block bg-gray-800 text-white p-6 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <h4 className="text-xl font-bold mb-2">Alle boottochten</h4>
                <p>Bekijk al onze mogelijkheden</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
