import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Hidden Coves of Ibiza: Discover the Island\'s Best-Kept Secrets by Boat | Salvador Ibiza',
  description: 'Explore Ibiza\'s secret hidden coves and secluded beaches only accessible by boat. Discover untouched natural beauty with Salvador Ibiza boat trips.',
  keywords: 'hidden coves Ibiza, secret beaches Ibiza, secluded coves, boat accessible beaches, Ibiza hidden gems, private swimming spots',
  robots: {
    index: true,
    follow: true,
  },
}

export default function HiddenCovesPage() {
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
            src="/images/blog/hidden-cove.webp"
            alt="Hidden Coves of Ibiza - Secret beaches accessible by boat"
            fill
            className="object-cover"
            priority
          />
        </div>

        <header className="mb-8">
          <time className="text-sm text-gray-500">February 25, 2024</time>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">Hidden Coves of Ibiza: Discover the Island's Best-Kept Secrets by Boat</h1>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            When most people think of Ibiza, they picture iconic beach clubs, lively sunsets, and turquoise bays. 
            But beyond the well-known shores lies a different Ibiza — one that's wild, intimate, and completely untouched.
            Aboard a private charter with <strong>Salvador Ibiza</strong>, you'll unlock a secret coastline of hidden 
            coves and secluded beaches only accessible by boat.
          </p>

          {/* First CTA */}
          <div className="not-prose my-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
            <p className="text-center text-lg font-semibold text-gray-800 mb-4">
              Ready to discover Ibiza's hidden treasures?
            </p>
            <div className="text-center">
              <Link
                href="/boat-trips/day"
                className="inline-block bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
              >
                Explore Hidden Coves
              </Link>
            </div>
          </div>

          <h2>What Makes Ibiza's Hidden Coves So Special?</h2>
          <p>
            These places are not on tourist maps.
            They're known only to locals and experienced sailors — peaceful enclaves where pine forests touch the sea, 
            cliffs offer natural shelter, and the only soundtrack is the gentle movement of the waves.
          </p>

          <p>
            Imagine anchoring in a calm, crystal-clear bay where the water is so transparent you can see the seabed 
            from the deck. No noise, no crowds — just you, your group, and the raw beauty of the island.
          </p>

          <h2>Our Favorite Hidden Gems</h2>
          <p>Every outing with us is different, but here are just a few of the natural wonders that await:</p>

          <ul>
            <li>Sandy inlets nestled between cliffs, ideal for swimming in total privacy</li>
            <li>Remote snorkeling spots with vibrant marine life and shallow underwater caves</li>
            <li>Impressive rock formations, perfect for exploration or simply taking it all in</li>
            <li>Natural sea caves accessible by paddleboard or kayak</li>
            <li>Quiet anchorages, perfect for sunbathing or disconnecting from the outside world</li>
          </ul>

          <p>
            Our experienced crew knows the coastline intimately and will choose the best places based on sea conditions, 
            wind direction, and your personal preferences.
          </p>

          {/* Second CTA */}
          <div className="not-prose my-8 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-200">
            <p className="text-center text-lg font-semibold text-gray-800 mb-4">
              Want to experience these secret spots yourself?
            </p>
            <div className="text-center">
              <Link
                href="/private-boat-trips"
                className="inline-block bg-gradient-to-r from-blue-500 to-teal-600 hover:from-blue-400 hover:to-teal-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 mr-4"
              >
                Private Charter
              </Link>
              <Link
                href="/boat-trips"
                className="inline-block bg-white border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Group Trips
              </Link>
            </div>
          </div>

          <h2>The Salvador Ibiza Experience</h2>
          <p>
            Our <a href="/boat-trips/day-trip" className="text-blue-600 hover:text-blue-800">Day Trip</a> and 
            Private Experience routes are designed to include some of Ibiza's best-kept secrets whenever possible.
          </p>

          <p>All our charters include:</p>
          <ul>
            <li>Premium open bar with refreshing drinks and our signature sangria</li>
            <li>Spanish tapas and fresh seasonal fruit</li>
            <li>Full water sports equipment: snorkeling gear, paddleboards and kayaks</li>
            <li>A discreet, professional crew focused on your comfort and enjoyment</li>
          </ul>

          <p>
            Whether you want to dive into a crystal-clear lagoon, snorkel in a hidden cove or simply relax in peace, 
            we'll help you create a tailor-made escape.
          </p>

          <h2>A Journey Off the Beaten Path</h2>
          <p>Most visitors to Ibiza never get to experience this side of the island. It's calm, authentic, and truly unforgettable.</p>

          <p>If you're ready to explore the Ibiza that only a few get to see, we're ready to take you there.</p>

          <p>
            <a href="/" className="text-blue-600 hover:text-blue-800">Book your hidden cove adventure today</a>
          </p>

          {/* Final CTA */}
          <div className="not-prose my-8 p-8 bg-gradient-to-br from-teal-600 to-blue-700 text-white rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Discover Ibiza's Secret Side</h3>
            <p className="text-teal-100 mb-6">Join the few who have experienced these hidden paradises</p>
            <Link
              href="/book-now"
              className="inline-block bg-white text-teal-600 hover:bg-teal-50 font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 text-lg"
            >
              Book Your Hidden Cove Adventure
            </Link>
          </div>
        </div>
      </article>
    </>
  )
} 