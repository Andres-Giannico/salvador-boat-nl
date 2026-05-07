import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { pageMetadata } from '@/lib/page-meta'

const metaBase = pageMetadata({
  title: "Midday magic: waarom een dagtrip op Ibiza telt",
  description:
    "Zon, helder water en energie — ontdek de charme van een dagtrip met Salvador.",
  path: '/blog/ibiza-midday-magic-boat-trip',
  keywords:
    'dagtrip Ibiza boot, middag boottocht Ibiza, Salvador blog',
  ogTitle: "Midday magic op Ibiza",
  ogDescription: 'Dagbootavontuur met Salvador Ibiza.',
  ogImage: '/images/blog/midday-magic-placeholder.webp',
  ogImageAlt: 'Zonnige dagtrip op Ibiza',
})

export const metadata: Metadata = {
  ...metaBase,
  twitter: {
    card: 'summary_large_image',
    title: "Midday magic: dagtrip Ibiza",
    description:
      'Zon, water en sfeer — waarom een dagtrip onvergetelijk is.',
    images: ['/images/blog/midday-magic-placeholder.webp'],
  },
}

export default function MiddayMagicBoatTripPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Terug naar blog
      </Link>

      <div className="relative mb-10 h-[55vh] min-h-[450px] w-full overflow-hidden rounded-2xl shadow-lg">
        <Image
          src="/images/blog/midday-magic-placeholder.webp"
          alt="Zonnige middagboottocht op Ibiza met Salvador"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"></div>
      </div>

      <header className="mb-10 text-center">
        <time dateTime="2024-05-28" className="text-sm text-gray-500 mb-2 block">
          28 mei 2024
        </time>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Midday magic op Ibiza: <br className="hidden md:block" />
          waarom een dagtrip onvergetelijk is
        </h1>
      </header>

      <div className="prose prose-lg lg:prose-xl max-w-none text-gray-700 leading-relaxed">
        <p className="lead text-xl text-gray-600 mb-8">
          Ibiza's zonsondergangen zijn legendarisch, maar de middagzon geeft een andere betovering —
          zeker vanaf het dek van een boot. Een dagexcursie met Salvador Ibiza is meer dan een trip:
          het is een duik in het fonkelende hart van de Middellandse Zee.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mt-12 mb-4">De aantrekkingskracht van de middagzon</h2>
        <p>
          Stel je voor: de zon hoog aan de hemel, lichtpunten op turquoise water, verborgen cala's en
          een gouden gloed op de kliffen. Dat is het Ibiza van een middagtrip — energie, ontdekking en
          puur plezier.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">Voordelen van een dagtocht op zee:</h3>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>
            <strong>Beeldperfect:</strong> middaglicht laat water en kust extra scherp uitkomen — ideaal
            voor foto's.
          </li>
          <li>
            <strong>Watersport op z'n best:</strong> warm water om te zwemmen, snorkelen, suppen of met
            de kajak cala's in te varen.
          </li>
          <li>
            <strong>Kust in vol daglicht:</strong> zie kleuren van dennenbossen tot witgekalkte finca's.
          </li>
          <li>
            <strong>Levendige sfeer:</strong> vriendengroepen en gezinnen voelen zich thuis in het zonlicht
            op het water.
          </li>
          <li>
            <strong>Tempo kiezen:</strong> zonder de klok van de zonsondergang kun je rustiger tussen
            zwemplekken wisselen.
          </li>
        </ul>

        <figure className="my-10">
          <figcaption className="text-center text-sm text-gray-500 mt-2">
            Perfecte omstandigheden om te zwemmen en te peddelen.
          </figcaption>
        </figure>

        <h2 className="text-3xl font-semibold text-gray-800 mt-12 mb-4">Jullie dagervaring met Salvador Ibiza</h2>
        <p>Onze dagtrip is gemaakt om die middagmagie te maximaliseren:</p>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>Premium open bar met verfrissende drankjes en onze huisgemaakte sangría.</li>
          <li>Spaanse tapas en vers fruit om je energie op peil te houden.</li>
          <li>Watersportmateriaal: 15 paddleboards, 2 kajaks en snorkelsets.</li>
          <li>Geluidsinstallatie voor de juiste sfeer.</li>
          <li>
            Een doordachte route langs enkele van Ibiza's mooiste plekken, weg van de grootste drukte.
          </li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-800 mt-12 mb-4">Voor wie is de middagtrip?</h2>
        <p>Perfect voor:</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Gezinnen:</strong> vakantieherinneringen met activiteiten voor kinderen.
          </li>
          <li>
            <strong>Vriendengroepen:</strong> zon, muziek, drankjes en quality time.
          </li>
          <li>
            <strong>Watersportliefhebbers:</strong> benut onze uitrusting in ideale omstandigheden.
          </li>
          <li>
            <strong>Iedereen die van zon en uitzicht houdt:</strong> gewoon genieten mag ook.
          </li>
        </ul>

        <hr className="my-12 border-gray-300" />

        <div className="mt-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 p-8 text-white shadow-xl text-center">
          <h3 className="text-3xl font-bold mb-4">Klaar voor midday magic?</h3>
          <p className="text-lg mb-6">
            Droom niet alleen van de perfecte Ibiza-dag — beleef hem. Vaar mee met Salvador Ibiza en
            ontdek een andere kant van het Witte Eiland.
          </p>
          <Link
            href="/book-now"
            className="mt-4 inline-block rounded-lg bg-white px-8 py-3.5 text-lg font-semibold text-blue-600 hover:bg-blue-50 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Reserveer je dagtocht
          </Link>
        </div>
      </div>
    </article>
  )
}
