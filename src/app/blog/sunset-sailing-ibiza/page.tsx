import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { pageMetadata } from '@/lib/page-meta'

export const metadata = pageMetadata({
  title: 'Zonsondergang zeilen op Ibiza — magische avonden',
  description:
    'Beleef Ibiza’s iconische zonsondergang vanaf het water. Boek je sunset-ervaring met Salvador.',
  path: '/blog/sunset-sailing-ibiza',
  keywords:
    'sunset sailing Ibiza, zonsondergang cruise Ibiza, avond boot Ibiza',
  ogImage: '/images/optimized/sunset-sailing-cruise-ibiza.webp',
  ogImageAlt: 'Zonsondergang cruise Ibiza',
})

export default function SunsetSailingPage() {
  return (
    <>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
        >
          ← Terug naar blog
        </Link>

        <div className="relative mb-8 h-[50vh] min-h-[400px] w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/optimized/sunset-sailing-cruise-ibiza.webp"
            alt="Zonsondergang varen Ibiza — gouden uur op zee"
            fill
            className="object-cover"
            priority
          />
        </div>

        <header className="mb-8">
          <time className="text-sm text-gray-500">20 februari 2024</time>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Zonsondergang varen op Ibiza: een magisch einde van de dag
          </h1>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            De zon zien zakken over zee is onvergetelijk — en op Ibiza wordt dat moment puur magie.
            Vanaf het dek transformeert de horizon in goud, amber, roze en paars. Reflecties op het
            water, zachte muziek en de deining van de boot maken er een van de meest iconische
            Middellandse-Zee-ervaringen van.
          </p>

          <p>
            Bij <strong>Salvador Ibiza</strong> ontwerpen we onze{' '}
            <a href="/boat-trips/sunset-trip" className="text-blue-600 hover:text-blue-800">
              zonsondergangtocht
            </a>{' '}
            precies om dat moment mee te beleven.
          </p>

          <div className="not-prose my-8 p-6 bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg border border-orange-200">
            <p className="text-center text-lg font-semibold text-gray-800 mb-4">
              Klaar om Ibiza's legendarische zonsondergang vanaf zee te zien?
            </p>
            <div className="text-center">
              <Link
                href="/boat-trips/sunset"
                className="inline-block bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-400 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
              >
                Boek je zonsondergangtocht
              </Link>
            </div>
          </div>

          <h2>Waarom zonsondergang op Ibiza zo bijzonder is</h2>
          <p>
            Ibiza's zonsondergangen zijn wereldberoemd. De ligging van het eiland, de kust en de heldere
            lucht zorgen voor kleuren en uitzichten die je zelden elders vindt.
          </p>

          <p>
            Vanaf zee is het nog intenser: geen drukte, geen afleiding — alleen jij, de horizon en de
            rust van open water.
          </p>

          <p>
            Voor koppels, vriendengroepen of wie iets viert: onze sunset-ervaring is bedoeld voor wie
            meer wil dan een foto — wie een herinnering wil.
          </p>

          <h2>Perfecte timing, perfecte plek</h2>
          <p>
            We plannen zo dat je het volledige spektakel meemaakt — van het eerste goud tot de laatste
            paarse gloed. We varen naar zorgvuldig gekozen punten met vrij uitzicht.
          </p>

          <p>In tegenstelling tot drukke strandbars of uitkijkpunten heb je:</p>
          <ul>
            <li>Rust, ver van lawaai en toeristenstromen</li>
            <li>Panoramisch zicht waar zee en lucht samenvloeien</li>
            <li>Ruimte om elk moment te laten bezinken</li>
          </ul>

          <div className="not-prose my-8 p-6 bg-gradient-to-r from-purple-50 to-orange-50 rounded-lg border border-purple-200">
            <p className="text-center text-lg font-semibold text-gray-800 mb-4">
              Wil je dé sunset-ervaring met extra luxe?
            </p>
            <div className="text-center">
              <Link
                href="/private-boat-trips"
                className="inline-block bg-gradient-to-r from-purple-500 to-orange-600 hover:from-purple-400 hover:to-orange-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 mr-4"
              >
                Privé sunset charter
              </Link>
              <Link
                href="/boat-trips/sunset-trip"
                className="inline-block bg-white border-2 border-purple-500 text-purple-600 hover:bg-purple-50 font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Gedeelde zonsondergangtocht
              </Link>
            </div>
          </div>

          <h2>Wat is inbegrepen</h2>
          <p>Elke sunset-trip bij Salvador Ibiza heeft aandacht voor detail:</p>

          <ul>
            <li>Welkomstdrankjes om de avond te openen</li>
            <li>Comfortabel zitgedeelte op het dek</li>
            <li>Professionele crew voor comfort en veiligheid</li>
            <li>Muziek die past bij het gouden uur</li>
            <li>Optioneel diner aan boord</li>
            <li>Fotomomenten in het perfecte licht</li>
          </ul>

          <p>
            Of je nu proost met cava, rustig praat terwijl de zon verdwijnt, of foto's maakt met
            vrienden — wij zorgen voor de setting.
          </p>

          <h2>Voor wie is dit?</h2>
          <ul>
            <li>Koppels met jubileum of verrassing</li>
            <li>Gezinnen die de dag uniek willen afsluiten</li>
            <li>Vrienden die sfeer zoeken vóór het avondeten</li>
            <li>Reizigers die Ibiza's essentie buiten de gebaande paden willen voelen</li>
          </ul>

          <h2>Laat de dag stijlvol vervagen</h2>
          <p>
            Als het daglicht overgaat in schemering, verandert de energie van het eiland. De zee wordt
            rustiger, de lucht gloeit en de tijd lijkt langzamer te gaan.
          </p>

          <p>Dit is een kant van Ibiza die weinigen echt meemaken — rauw, rustig en onvergetelijk.</p>

          <p>
            We laten hem je graag zien.{' '}
            <a href="/" className="text-blue-600 hover:text-blue-800">
              Boek vandaag nog je zonsondergang op zee
            </a>
            .
          </p>

          <div className="not-prose my-8 p-8 bg-gradient-to-br from-orange-600 to-pink-700 text-white rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Beleef Ibiza's meest magische moment</h3>
            <p className="text-orange-100 mb-6">
              Vaar mee voor een onvergetelijke zonsondergang op de Middellandse Zee
            </p>
            <Link
              href="/book-now"
              className="inline-block bg-white text-orange-600 hover:bg-orange-50 font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 text-lg"
            >
              Boek nu je sunset-ervaring
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
