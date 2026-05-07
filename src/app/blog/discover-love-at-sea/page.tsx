import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { pageMetadata } from '@/lib/page-meta';

export const metadata = pageMetadata({
  title: 'Romantisch varen op Ibiza: liefde op zee',
  description:
    'Romantische privé-momenten op het water — aanzoek, jubileum of intieme escape. Boek je cruise met Salvador.',
  path: '/blog/discover-love-at-sea',
  keywords:
    'romantische boot Ibiza, sunset privé, stelletjes boottrip Ibiza',
});

export default function DiscoverLoveAtSeaPage() {
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
            src="/images/blog/discover-love-at-sea.webp"
            alt="Romantische bootcharter Ibiza — liefde op zee"
            fill
            className="object-cover"
            priority
          />
        </div>

        <header className="mb-8">
          <time className="text-sm text-gray-500">14 februari 2024</time>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Romantische bootcharters op Ibiza: ontdek liefde op zee
          </h1>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            Op zee zijn is tijdloos romantisch: de golven, de zilte wind en de oneindige horizon van de
            Middellandse Zee. Bij <strong>Salvador Ibiza</strong> bouwen we privé-ervaringen die verder gaan
            dan luxe — we creëren momenten van verbinding, vreugde en intimiteit.
          </p>

          <div className="not-prose my-8 p-6 bg-gradient-to-r from-pink-50 to-blue-50 rounded-lg border border-pink-200">
            <p className="text-center text-lg font-semibold text-gray-800 mb-4">
              Klaar om jullie perfecte romantische moment te creëren?
            </p>
            <div className="text-center">
              <Link
                href="/book-now"
                className="inline-block bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-400 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
              >
                Boek je romantische charter
              </Link>
            </div>
          </div>

          <h2>Waarom een romantische bootcharter?</h2>
          <p>
            Of je nu een mijlpaal viert of gewoon een bijzonder moment deelt: een{' '}
            <strong>romantische bootcharter op Ibiza</strong> is ultiem. Geen drukte, geen afleiding —
            alleen jij, de zee en degene die voor jou telt.
          </p>

          <ul>
            <li>
              <strong>Surprise-aanzoek?</strong> Stel de vraag terwijl de zon achter Es Vedrà zakt.
            </li>
            <li>
              <strong>Jubileum?</strong> Proost met champagne in het gouden licht.
            </li>
            <li>
              <strong>Even herconnecten?</strong> Laat het ritme van de golven en de privacy van open water
              het werk doen.
            </li>
          </ul>

          <p>Elke charter wordt op jullie verhaal afgestemd — geen twee romantische trips zijn hetzelfde.</p>

          <p>Onze populairste ervaringen:</p>
          <ul>
            <li>
              <a href="/boat-trips/sunset-trip" className="text-blue-600 hover:text-blue-800">
                Zonsondergangtocht
              </a>
              : gouden uur met cava, tapas en muziek.
            </li>
            <li>
              <a href="/boat-trips/day-trip" className="text-blue-600 hover:text-blue-800">
                Dagtocht
              </a>
              : verborgen cala's en zwemmen in helder water.
            </li>
          </ul>

          <hr className="my-8" />

          <h2>Wat maakt onze romantische trips uniek</h2>
          <p>Bij Salvador Ibiza zit romantiek in de details:</p>

          <ul>
            <li>
              <strong>Privé sunset-cruises</strong> met afspeellijsten, open bar en panoramisch uitzicht.
            </li>
            <li>
              <strong>Spaanse tapas en fruit</strong>, vers en royaal.
            </li>
            <li>
              <strong>Cava bij aankomst</strong> en persoonlijke touches — bloemen, briefjes, in overleg.
            </li>
            <li>
              <strong>Afgeschermde zwemplekken</strong>, ver van de massa.
            </li>
            <li>
              Een <strong>professionele, discrete crew</strong> die aan comfort en privacy denkt.
            </li>
          </ul>

          <p>
            Onze boten zijn ruim en comfortabel — ideaal voor koppels die{' '}
            <strong>luxe én authenticiteit</strong> zoeken.
          </p>

          <div className="not-prose my-8 p-6 bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg border border-orange-200">
            <p className="text-center text-lg font-semibold text-gray-800 mb-4">
              Wil je je partner verrassen met iets onvergetelijks?
            </p>
            <div className="text-center">
              <Link
                href="/private-boat-trips"
                className="inline-block bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-400 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 mr-4"
              >
                Privé charter
              </Link>
              <Link
                href="/boat-trips/sunset"
                className="inline-block bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Zonsondergangtocht
              </Link>
            </div>
          </div>

          <hr className="my-8" />

          <h2>Een liefdesverhaal om nooit te vergeten</h2>
          <p>Verhalen beginnen vaak op zee. Laat het jullie verhaal zijn — aan boord bij ons.</p>

          <p>
            Van aanzoeken en huwelijksreizen tot een simpel ontsnappen aan de routine: een romantische
            boottrip met Salvador Ibiza wordt deel van jullie gedeelde herinnering. Anders dan bloemen of
            een diner alleen —{' '}
            <strong>dit is iets dat je niet vergeet</strong>.
          </p>

          <p>
            <a href="/" className="text-blue-600 hover:text-blue-800">
              Begin hier je reis
            </a>{' '}
            — en laat de liefde varen.
          </p>

          <div className="not-prose my-8 p-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Klaar om jullie liefdesverhaal op zee te schrijven?</h3>
            <p className="text-blue-100 mb-6">
              Sluit je aan bij honderden koppels die Salvador Ibiza kozen voor hun belangrijkste momenten
            </p>
            <Link
              href="/book-now"
              className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 text-lg"
            >
              Boek nu je romantische ervaring
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
