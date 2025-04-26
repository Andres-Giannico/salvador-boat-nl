import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hidden Coves of Ibiza | Salvador Ibiza Blog',
  description: 'Discover the most secluded and beautiful coves around Ibiza that are only accessible by boat.',
}

export default function HiddenCovesPage() {
  return (
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
          alt="Hidden Coves of Ibiza"
          fill
          className="object-cover"
          priority
        />
      </div>

      <header className="mb-8">
        <time className="text-sm text-gray-500">February 25, 2024</time>
        <h1 className="mt-2 text-4xl font-bold text-gray-900">Hidden Coves of Ibiza</h1>
      </header>

      <div className="prose prose-lg max-w-none">
        <p>
          Beyond Ibiza&apos;s famous beaches lies a world of hidden coves and secret beaches that can
          only be reached by boat. These pristine locations offer an escape from the crowds and a
          chance to experience the island&apos;s natural beauty in its purest form.
        </p>

        <h2>Discovering Paradise</h2>
        <p>
          Our experienced crew knows every hidden gem along Ibiza&apos;s coastline. We&apos;ll take you to
          secluded coves where crystal-clear waters meet untouched beaches, creating perfect spots for
          swimming, snorkeling, or simply relaxing in solitude.
        </p>

        <h2>Our Favorite Hidden Spots</h2>
        <ul>
          <li>Pristine sandy beaches</li>
          <li>Crystal-clear swimming spots</li>
          <li>Dramatic cliff formations</li>
          <li>Underwater caves</li>
          <li>Secluded snorkeling locations</li>
        </ul>

        <h2>The Perfect Escape</h2>
        <p>
          Each cove has its own unique character and charm. Some offer perfect conditions for
          snorkeling, while others provide ideal spots for swimming or sunbathing. Our crew will help
          you discover the perfect spot based on your preferences and the day&apos;s conditions.
        </p>

        <div className="mt-8 rounded-xl bg-blue-50 p-6">
          <h3 className="mb-4 text-xl font-semibold text-blue-900">Ready to Explore?</h3>
          <p className="text-blue-800">
            Join us on an adventure to discover Ibiza&apos;s hidden coves and create unforgettable memories.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Book Your Adventure
          </Link>
        </div>
      </div>
    </article>
  )
} 