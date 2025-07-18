import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Sunset Sailing in Ibiza: A Magical End to a Perfect Day | Salvador Ibiza',
  description: 'Experience the magic of Ibiza\'s legendary sunsets from the best viewpoint - aboard our luxury yacht. Book your sunset sailing adventure today.',
  keywords: 'sunset sailing Ibiza, sunset cruise Ibiza, sunset boat trip, golden hour cruise, Ibiza sunset experience, luxury yacht sunset',
  robots: {
    index: true,
    follow: true,
  },
}

export default function SunsetSailingPage() {
  return (
    <>
      {/* Breadcrumbs */}
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
          ← Back to Blog
        </Link>
        
        <div className="relative mb-8 h-[50vh] min-h-[400px] w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/optimized/sunset-sailing-cruise-ibiza.webp"
            alt="Sunset Sailing in Ibiza - Magical golden hour cruise"
            fill
            className="object-cover"
            priority
          />
        </div>

        <header className="mb-8">
          <time className="text-sm text-gray-500">February 20, 2024</time>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">Sunset Sailing in Ibiza: A Magical End to a Perfect Day</h1>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            There's something truly unforgettable about watching the sun set over the sea — and in Ibiza, that moment becomes pure magic.
            From the deck of a luxury yacht, the horizon transforms into a canvas of gold, amber, pink, and violet. The reflections on the water, 
            the soft music in the background, and the gentle movement of the boat combine to create one of the most iconic experiences the 
            Mediterranean has to offer.
          </p>

          <p>
            At <strong>Salvador Ibiza</strong>, we design our <a href="/boat-trips/sunset-trip" className="text-blue-600 hover:text-blue-800">Sunset Trip</a> to make that moment unforgettable.
          </p>

          {/* First CTA */}
          <div className="not-prose my-8 p-6 bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg border border-orange-200">
            <p className="text-center text-lg font-semibold text-gray-800 mb-4">
              Ready to witness Ibiza's legendary sunsets from the sea?
            </p>
            <div className="text-center">
              <Link
                href="/boat-trips/sunset"
                className="inline-block bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-400 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
              >
                Book Your Sunset Trip
              </Link>
            </div>
          </div>

          <h2>Why Sunset Sailing in Ibiza Is So Special</h2>
          <p>
            Ibiza's sunsets are known worldwide, and with good reason. The island's unique position, coastal landscape, 
            and atmospheric clarity make for dramatic colors and views you won't find anywhere else.
          </p>

          <p>
            But experiencing it from the sea takes everything to another level.
            There are no crowds, no distractions — only you, the horizon, and the serenity of open water.
          </p>

          <p>
            From couples looking for a romantic evening to groups of friends celebrating something special, our sunset 
            sailing experiences are tailored for those who want more than just a photo — they want a memory.
          </p>

          <h2>The Perfect Timing, The Perfect Spot</h2>
          <p>
            Our trips are precisely scheduled to catch the full spectacle — from the first golden glow to the final purple fade. 
            We'll take you to carefully selected locations with the best angles for unobstructed views and full immersion in 
            the sunset experience.
          </p>

          <p>Unlike busy beach bars or crowded viewpoints, you'll enjoy:</p>
          <ul>
            <li>A peaceful setting far from the noise and tourists</li>
            <li>A panoramic perspective where sea and sky blend without interruption</li>
            <li>The chance to savor each minute without feeling rushed</li>
          </ul>

          {/* Second CTA */}
          <div className="not-prose my-8 p-6 bg-gradient-to-r from-purple-50 to-orange-50 rounded-lg border border-purple-200">
            <p className="text-center text-lg font-semibold text-gray-800 mb-4">
              Want the ultimate sunset experience with luxury touches?
            </p>
            <div className="text-center">
              <Link
                href="/private-boat-trips"
                className="inline-block bg-gradient-to-r from-purple-500 to-orange-600 hover:from-purple-400 hover:to-orange-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 mr-4"
              >
                Private Sunset Charter
              </Link>
              <Link
                href="/boat-trips/sunset-trip"
                className="inline-block bg-white border-2 border-purple-500 text-purple-600 hover:bg-purple-50 font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Group Sunset Trip
              </Link>
            </div>
          </div>

          <h2>What's Included in Your Sunset Trip</h2>
          <p>Every sunset charter with Salvador Ibiza includes thoughtful touches that elevate the journey:</p>

          <ul>
            <li>Welcome drinks to start the evening in style</li>
            <li>Comfortable deck seating to relax and enjoy the view</li>
            <li>A professional crew focused on your comfort and safety</li>
            <li>Curated music to match the mood of the golden hour</li>
            <li>Optional gourmet dinner service on board</li>
            <li>Opportunities for unforgettable photos at just the right light</li>
          </ul>

          <p>
            Whether you want to toast the day with champagne, enjoy quiet conversation as the sun disappears, 
            or take breathtaking photos with friends, everything is ready for you.
          </p>

          <h2>Who Is This Experience For?</h2>
          <ul>
            <li>Couples celebrating anniversaries or planning a surprise moment</li>
            <li>Families wanting to end the day with something truly unique</li>
            <li>Friends looking for an atmospheric pre-dinner plan</li>
            <li>Travelers who want to experience Ibiza's essence away from the usual paths</li>
          </ul>

          <h2>Let the Day Fade in Style</h2>
          <p>
            As daylight gives way to twilight, you'll feel the energy of the island shift. The sea calms, the sky glows, 
            and time seems to slow down.
          </p>

          <p>This is the side of Ibiza that few truly experience — raw, peaceful, and unforgettable.</p>

          <p>
            Let us show it to you.
            <a href="/" className="text-blue-600 hover:text-blue-800"> Book your sunset sailing adventure today</a>
          </p>

          {/* Final CTA */}
          <div className="not-prose my-8 p-8 bg-gradient-to-br from-orange-600 to-pink-700 text-white rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Experience Ibiza's Most Magical Moment</h3>
            <p className="text-orange-100 mb-6">Join us for an unforgettable sunset sailing adventure</p>
            <Link
              href="/book-now"
              className="inline-block bg-white text-orange-600 hover:bg-orange-50 font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 text-lg"
            >
              Book Your Sunset Experience Now
            </Link>
          </div>
        </div>
      </article>
    </>
  )
} 