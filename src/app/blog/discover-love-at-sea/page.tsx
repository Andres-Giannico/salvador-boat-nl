import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Discover Love at Sea | Salvador Ibiza Blog',
  description: 'Experience romance and luxury aboard our exclusive boat charters in Ibiza. Perfect for couples seeking a unique and memorable experience.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function DiscoverLoveAtSeaPage() {
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
          src="/images/blog/discover-love-at-sea.webp"
          alt="Discover Love at Sea"
          fill
          className="object-cover"
          priority
        />
      </div>

      <header className="mb-8">
        <time className="text-sm text-gray-500">February 14, 2024</time>
        <h1 className="mt-2 text-4xl font-bold text-gray-900">Discover Love at Sea</h1>
      </header>

      <div className="prose prose-lg max-w-none">
        <p>
          There&apos;s something inherently romantic about being at sea. The gentle sway of the waves,
          the endless horizon, and the breathtaking views create the perfect setting for love to flourish.
          At Salvador Ibiza, we specialize in creating unforgettable romantic experiences on the
          Mediterranean waters.
        </p>

        <h2>Why Choose a Romantic Boat Charter?</h2>
        <p>
          A private boat charter offers an intimate escape from the everyday world. Whether you&apos;re
          planning a surprise proposal, celebrating an anniversary, or simply wanting to spend quality
          time together, our luxury yacht provides the perfect backdrop for your special moments.
        </p>

        <h2>Our Romantic Experiences Include:</h2>
        <ul>
          <li>Private sunset cruises with champagne</li>
          <li>Gourmet dining experiences at sea</li>
          <li>Secluded swimming spots</li>
          <li>Professional crew dedicated to your comfort</li>
          <li>Customizable romantic touches</li>
        </ul>

        <h2>Making Memories That Last</h2>
        <p>
          Every couple&apos;s story is unique, and we take pride in helping you create chapters that
          you&apos;ll cherish forever. From the moment you step aboard, you&apos;ll be treated to an
          experience that combines luxury, privacy, and the natural beauty of Ibiza&apos;s waters.
        </p>

        <div className="mt-8 rounded-xl bg-blue-50 p-6">
          <h3 className="mb-4 text-xl font-semibold text-blue-900">Ready to Plan Your Romantic Getaway?</h3>
          <p className="text-blue-800">
            Contact us to customize your perfect romantic experience at sea. Our team is here to ensure
            every detail meets your expectations.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </article>
  );
}
