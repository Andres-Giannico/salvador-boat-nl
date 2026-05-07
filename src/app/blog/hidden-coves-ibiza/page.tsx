import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { pageMetadata } from '@/lib/page-meta'

export const metadata = pageMetadata({
  title: "Verborgen cala's van Ibiza per boot",
  description:
    "Ontdek afgelegen cala's en stranden die je alleen per boot bereikt — met Salvador Ibiza.",
  path: '/blog/hidden-coves-ibiza',
  keywords:
    'verborgen cala Ibiza, geheime stranden Ibiza, boot strand Ibiza',
})

export default function HiddenCovesPage() {
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
            src="/images/blog/hidden-cove.webp"
            alt="Verborgen cala's Ibiza — geheime stranden per boot"
            fill
            className="object-cover"
            priority
          />
        </div>

        <header className="mb-8">
          <time className="text-sm text-gray-500">25 februari 2024</time>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Verborgen cala's van Ibiza: ontdek de best bewaarde geheimen per boot
          </h1>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Veel mensen denken bij Ibiza aan beach clubs en turquoise baaien. Maar voor de bekende kust
            ligt een ander Ibiza — wilder, intiemer en ongerept. Met een charter van{' '}
            <strong>Salvador Ibiza</strong> ontgrendel je een geheime kustlijn van cala's en afgelegen
            stranden die je alleen per boot bereikt.
          </p>

          <div className="not-prose my-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
            <p className="text-center text-lg font-semibold text-gray-800 mb-4">
              Klaar om Ibiza's verborgen schatten te ontdekken?
            </p>
            <div className="text-center">
              <Link
                href="/boat-trips/day"
                className="inline-block bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
              >
                Ontdek verborgen cala's
              </Link>
            </div>
          </div>

          <h2>Waarom deze cala's zo bijzonder zijn</h2>
          <p>
            Je vindt ze niet op elke toeristenkaart. Lokale kenners en ervaren schippers kennen rustige
            inhammen waar dennen het water raken, kliffen schuil bieden en alleen het geluid van
            golven telt.
          </p>

          <p>
            Ankeren in een rustige, heldere baai waar je de bodem vanaf het dek ziet: geen lawaai,
            geen drukte — alleen jij, je gezelschap en het rauwe groen-blauw van het eiland.
          </p>

          <h2>Onze favoriete parels</h2>
          <p>Elke trip is anders; dit zijn voorbeelden van wat je tegen kunt komen:</p>

          <ul>
            <li>Zandige inhammen tussen rotsen, ideaal om privé te zwemmen</li>
            <li>Afgelegen snorkelplekken met levendig zeeleven en ondiepe grotten</li>
            <li>Indrukwekkende rotsformaties om te verkennen of te bewonderen</li>
            <li>Zee-grotten bereikbaar met sup of kajak</li>
            <li>Rustige ankerplaatsen om te zonnen of los te komen</li>
          </ul>

          <p>
            Onze crew kent de kust en kiest de beste plekken op basis van zee, wind en jullie wensen.
          </p>

          <div className="not-prose my-8 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-200">
            <p className="text-center text-lg font-semibold text-gray-800 mb-4">
              Wil je deze plekken zelf ervaren?
            </p>
            <div className="text-center">
              <Link
                href="/private-boat-trips"
                className="inline-block bg-gradient-to-r from-blue-500 to-teal-600 hover:from-blue-400 hover:to-teal-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 mr-4"
              >
                Privé charter
              </Link>
              <Link
                href="/boat-trips"
                className="inline-block bg-white border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Groepstochten
              </Link>
            </div>
          </div>

          <h2>De Salvador Ibiza-ervaring</h2>
          <p>
            Onze{' '}
            <a href="/boat-trips/day-trip" className="text-blue-600 hover:text-blue-800">
              dagtocht
            </a>{' '}
            en privéroutes zijn zo gelegd dat we — waar mogelijk — enkele van Ibiza's best bewaarde plekken
            meenemen.
          </p>

          <p>Inbegrepen op onze trips:</p>
          <ul>
            <li>Premium open bar met verfrissende drankjes en onze sangría</li>
            <li>Spaanse tapas en vers seizoensfruit</li>
            <li>Watersport: snorkelspullen, paddleboards en kajaks</li>
            <li>Discrete, professionele crew voor comfort en plezier</li>
          </ul>

          <p>
            Duiken in een heldere lagune, snorkelen in een verborgen cala of alleen ontspannen — we bouwen
            een escape op maat.
          </p>

          <h2>Off the beaten path</h2>
          <p>
            De meeste bezoekers zien deze kant van Ibiza niet. Het is rustig, authentiek en onvergetelijk.
          </p>

          <p>Als je het Ibiza wilt zien dat maar weinigen kennen, nemen wij je graag mee.</p>

          <p>
            <a href="/" className="text-blue-600 hover:text-blue-800">
              Boek vandaag nog je verborgen-cala-avontuur
            </a>
          </p>

          <div className="not-prose my-8 p-8 bg-gradient-to-br from-teal-600 to-blue-700 text-white rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Ontdek Ibiza's geheime kant</h3>
            <p className="text-teal-100 mb-6">
              Sluit je aan bij wie deze verborgen paradijsjes al heeft gezien
            </p>
            <Link
              href="/book-now"
              className="inline-block bg-white text-teal-600 hover:bg-teal-50 font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 text-lg"
            >
              Boek je verborgen-cala-avontuur
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
