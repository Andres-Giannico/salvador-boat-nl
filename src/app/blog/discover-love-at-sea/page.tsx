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
            src="/images/blog/discover-love-at-sea.webp"
            alt="Romantic Boat Charter in Ibiza - Discover Love at Sea"
            fill
            className="object-cover"
            priority
          />
        </div>

        <header className="mb-8">
          <time className="text-sm text-gray-500">February 14, 2024</time>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">Romantic Boat Charters in Ibiza: Discover Love at Sea</h1>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>
            There's something timelessly romantic about being at sea. The gentle sway of the waves, 
            the salty breeze on your skin, and the infinite Mediterranean horizon set the scene for 
            unforgettable moments with the one you love. At <strong>Salvador Ibiza</strong>, we craft 
            private boat experiences that go beyond luxury — we create memories of connection, joy, and intimacy.
          </p>

          {/* First CTA */}
          <div className="not-prose my-8 p-6 bg-gradient-to-r from-pink-50 to-blue-50 rounded-lg border border-pink-200">
            <p className="text-center text-lg font-semibold text-gray-800 mb-4">
              Ready to create your perfect romantic moment?
            </p>
            <div className="text-center">
              <Link
                href="/book-now"
                className="inline-block bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-400 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
              >
                Book Your Romantic Charter
              </Link>
            </div>
          </div>

          <h2>Why Choose a Romantic Boat Charter?</h2>
          <p>
            Whether you're celebrating a milestone or simply want to share a special moment in paradise, 
            a <strong>romantic boat charter in Ibiza</strong> is the ultimate experience. Free from crowds 
            and distractions, it's just you, the sea, and the person who matters most.
          </p>

          <ul>
            <li><strong>Planning a surprise proposal?</strong> Imagine popping the question as the sun sets behind Es Vedrà.</li>
            <li><strong>Celebrating an anniversary?</strong> Toast your journey together with champagne under the golden light.</li>
            <li><strong>Looking to reconnect?</strong> Let the rhythm of the waves and the privacy of the open water do the magic.</li>
          </ul>

          <p>Each charter is tailored to your story — no two romantic trips are alike.</p>

          <p>Discover our most popular experiences:</p>
          <ul>
            <li><a href="/boat-trips/sunset-trip" className="text-blue-600 hover:text-blue-800">Sunset Trip</a>: An unforgettable golden-hour cruise with champagne, tapas, and music.</li>
            <li><a href="/boat-trips/day-trip" className="text-blue-600 hover:text-blue-800">Day Trip</a>: Explore Ibiza's hidden coves and swim together in crystal-clear waters.</li>
          </ul>

          <hr className="my-8" />

          <h2>What Makes Our Romantic Experiences Unique</h2>
          <p>At Salvador Ibiza, romance is in the details. Here's what you can expect when you book a romantic experience with us:</p>

          <ul>
            <li><strong>Private sunset cruises</strong> with curated playlists, open bar, and breathtaking views.</li>
            <li><strong>Gourmet dining at sea</strong>, with fresh Spanish tapas and seasonal fruit platters.</li>
            <li><strong>Champagne on arrival</strong> and customizable touches — from flowers to handwritten notes.</li>
            <li><strong>Secluded swimming spots</strong>, perfect for a dip far from the crowds.</li>
            <li>A <strong>professional and discreet crew</strong> focused on your comfort and privacy.</li>
          </ul>

          <p>Our boats are spacious, elegant, and fully equipped — ideal for couples who want to enjoy both <strong>luxury and authenticity</strong>.</p>

          {/* Second CTA */}
          <div className="not-prose my-8 p-6 bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg border border-orange-200">
            <p className="text-center text-lg font-semibold text-gray-800 mb-4">
              Want to surprise your loved one with an unforgettable experience?
            </p>
            <div className="text-center">
              <Link
                href="/private-boat-trips"
                className="inline-block bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-400 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 mr-4"
              >
                Private Charter
              </Link>
              <Link
                href="/boat-trips/sunset"
                className="inline-block bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Sunset Trip
              </Link>
            </div>
          </div>

          <hr className="my-8" />

          <h2>A Love Story You'll Remember Forever</h2>
          <p>The sea has always been a place where stories begin. Let yours unfold aboard our boat.</p>

          <p>
            From proposals and honeymoons to simple escapes from routine, a romantic boat trip with 
            Salvador Ibiza becomes part of your shared story. And unlike flowers or dinners, 
            <strong>this is a memory you'll never forget</strong>.
          </p>

          <p>
            <a href="/" className="text-blue-600 hover:text-blue-800">Start your journey here</a> — and let love sail.
          </p>

          {/* Final CTA */}
          <div className="not-prose my-8 p-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Create Your Love Story at Sea?</h3>
            <p className="text-blue-100 mb-6">Join hundreds of couples who have chosen Salvador Ibiza for their most special moments</p>
            <Link
              href="/book-now"
              className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 text-lg"
            >
              Book Your Romantic Experience Now
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
