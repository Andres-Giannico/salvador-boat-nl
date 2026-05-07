import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { pageMetadata } from '@/lib/page-meta';

export const metadata = pageMetadata({
  title: 'Dag boottochten Ibiza (3 uur) | Gezinsvriendelijk',
  description:
    'Ideale dagtrips op Ibiza voor families en vrienden: 3 uur zwemmen, snorkelen en paddleboarden.',
  path: '/boat-trips/day',
  keywords:
    'dag boottocht Ibiza, familie boot, dagcruise Ibiza, boottocht overdag',
});

export default function DayBoatTripsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white border-b border-gray-200 -mx-4 px-4 py-4 mb-8">
          <Breadcrumbs />
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
            Dagboottochten <span className="text-blue-600">Ibiza</span>
          </h1>

          <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
            Beleef de perfecte <strong>dagboottocht op Ibiza</strong> met Salvador.
            Onze <strong>middagcruises</strong> bieden 3 uur puur Middellandse-Zee-genot.
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Waarom onze dagtochten bijzonder zijn</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Perfecte timing</h3>
                  <p className="text-gray-600">
                    Vertrek 14:00–17:00, ideaal om van de middagzon en helder water te genieten.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Watersport</h3>
                  <p className="text-gray-600">
                    Zwemmen, snorkelen, paddleboarden en kajakken bij Ibiza's mooiste cala's.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">All-inclusive gevoel</h3>
                  <p className="text-gray-600">
                    Premium open bar, Spaanse tapas, vers fruit en alle materialen inbegrepen.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Professionele bemanning</h3>
                  <p className="text-gray-600">
                    Ervaren schipper en crew voor je veiligheid en maximaal plezier.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg font-semibold text-gray-800 mb-4">Klaar voor je dagavontuur?</p>
              <p className="text-3xl font-bold text-blue-600 mb-6">€80 p.p.</p>
              <Link
                href="/boat-trips/day-trip"
                className="inline-block bg-blue-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Boek nu je dagtocht
              </Link>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ontdek meer opties</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/boat-trips/sunset"
                className="block bg-orange-500 text-white p-6 rounded-lg hover:bg-orange-600 transition-colors"
              >
                <h4 className="text-xl font-bold mb-2">Zonsondergangtochten</h4>
                <p>Magische avondcruises</p>
              </Link>
              <Link
                href="/boat-trips"
                className="block bg-gray-800 text-white p-6 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <h4 className="text-xl font-bold mb-2">Alle boottochten</h4>
                <p>Bekijk het volledige aanbod</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
