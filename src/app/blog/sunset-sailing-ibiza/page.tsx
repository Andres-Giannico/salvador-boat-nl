import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sunset Sailing in Ibiza | Salvador Ibiza Blog',
  description: 'Experience the magic of Ibiza&apos;s legendary sunsets from the best viewpoint - aboard our luxury yacht.',
}

export default function SunsetSailingPage() {
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
          src="/images/blog/sunset-sailing-ibiza.jpg"
          alt="Sunset Sailing in Ibiza"
          fill
          className="object-cover"
          priority
        />
      </div>

      <header className="mb-8">
        <time className="text-sm text-gray-500">February 20, 2024</time>
        <h1 className="mt-2 text-4xl font-bold text-gray-900">Sunset Sailing in Ibiza</h1>
      </header>

      <div className="prose prose-lg max-w-none">
        <p>
          There&apos;s no better way to experience Ibiza&apos;s legendary sunsets than from the deck of a
          luxury yacht. As the sun dips below the horizon, painting the sky in brilliant hues of orange,
          pink, and purple, you&apos;ll understand why this Mediterranean paradise is famous for its
          evening spectacles.
        </p>

        <h2>The Perfect Timing</h2>
        <p>
          Our sunset sailing experiences are carefully timed to ensure you witness the full progression
          of colors as day transitions into night. We&apos;ll cruise to the perfect vantage points
          where the interplay of light, sea, and sky creates unforgettable moments.
        </p>

        <h2>What to Expect</h2>
        <ul>
          <li>Premium viewing locations away from the crowds</li>
          <li>Complimentary welcome drinks</li>
          <li>Comfortable seating areas</li>
          <li>Professional crew</li>
          <li>Photo opportunities</li>
          <li>Optional gourmet dinner service</li>
        </ul>

        <h2>A Magical Experience</h2>
        <p>
          As the day winds down, you&apos;ll find yourself immersed in the tranquil atmosphere of the
          Mediterranean. Whether you&apos;re celebrating a special occasion or simply want to experience
          one of nature&apos;s most beautiful shows, our sunset sailing trips provide the perfect setting.
        </p>

        <div className="mt-8 rounded-xl bg-blue-50 p-6">
          <h3 className="mb-4 text-xl font-semibold text-blue-900">Ready to Experience the Magic?</h3>
          <p className="text-blue-800">
            Book your sunset sailing experience with us and create memories that will last a lifetime.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Book Now
          </Link>
        </div>
      </div>
    </article>
  )
} 