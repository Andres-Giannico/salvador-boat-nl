import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Ibiza's Midday Magic: The Unforgettable Day Trip | Salvador Ibiza",
  description: "Discover why a midday boat trip in Ibiza offers a unique and magical experience. Sunshine, crystal clear waters, and vibrant energy await you.",
  keywords: "Ibiza day boat trip, midday boat tour Ibiza, best daytime excursions Ibiza, Salvador Ibiza blog, Ibiza boat activities",
  openGraph: {
    title: "Ibiza's Midday Magic: The Unforgettable Day Trip",
    description: "Explore the unique charm of a daytime boat adventure in Ibiza with Salvador.",
    images: [
      {
        url: '/images/blog/midday-magic-placeholder.webp', // Placeholder - reemplazar luego
        width: 1200,
        height: 630,
        alt: "Enjoying a sunny midday boat trip in Ibiza",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibiza's Midday Magic: The Unforgettable Day Trip | Salvador Ibiza",
    description: "Discover why a midday boat trip in Ibiza offers a unique and magical experience. Sunshine, crystal clear waters, and vibrant energy await you.",
    images: ['/images/blog/midday-magic-placeholder.webp'], // Asegúrate que esta imagen también sea atractiva para Twitter
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
        Back to Blog
      </Link>
      
      <div className="relative mb-10 h-[55vh] min-h-[450px] w-full overflow-hidden rounded-2xl shadow-lg">
        {/* Reemplazar con la imagen real del post */}
        <Image
          src="/images/blog/midday-magic-placeholder.webp" 
          alt="Sunny midday boat trip in Ibiza with Salvador"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
         <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"></div>
      </div>

      <header className="mb-10 text-center">
        <time dateTime="2024-05-28" className="text-sm text-gray-500 mb-2 block">May 28, 2024</time> {/* Fecha actual como ejemplo */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Ibiza's Midday Magic: <br className="hidden md:block" />Why a Day Trip is an Unforgettable Experience
        </h1>
      </header>

      <div className="prose prose-lg lg:prose-xl max-w-none text-gray-700 leading-relaxed">
        <p className="lead text-xl text-gray-600 mb-8">
          While Ibiza's sunsets are legendary, the island's vibrant midday sun offers a different kind of enchantment, especially when experienced from the deck of a boat. A daytime excursion with Salvador Ibiza isn't just a trip; it's an immersion into the sparkling soul of the Mediterranean.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mt-12 mb-4">The Allure of the Midday Sun</h2>
        <p>
          Imagine the sun high in the sky, its rays dancing on the turquoise waters, illuminating hidden coves and casting a golden glow on the dramatic cliffs. This is the Ibiza that awaits you on a midday boat trip. It's a time for energy, exploration, and pure, unadulterated fun.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">Advantages of a Daytime Sea Adventure:</h3>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li><strong>Picture-Perfect Scenery:</strong> The midday light is a photographer's dream, making the crystal-clear waters and rugged coastline even more spectacular. Capture those Instagram-worthy shots with ease!</li>
          <li><strong>Prime Time for Water Activities:</strong> Warm waters invite you for a refreshing swim. It's the perfect time to dive in, explore with our snorkeling gear, glide on a paddleboard, or navigate the coves in a kayak.</li>
          <li><strong>Vibrant Coastal Views:</strong> See Ibiza's stunning coastline in all its glory. The full daylight reveals the rich colours of the landscape, from lush pine forests to the iconic white-washed fincas.</li>
          <li><strong>Energetic Atmosphere:</strong> There's a unique, joyful energy to being out on the water under the bright Ibiza sun. It's perfect for groups of friends looking to celebrate or families wanting to create lasting memories.</li>
          <li><strong>Explore at Your Own Pace:</strong> Without the rush of chasing the sunset, a midday trip allows for a more relaxed exploration of different coves and swim spots.</li>
        </ul>

        <figure className="my-10">
          {/* Placeholder for an inline image, if desired */}
          {/* <Image src="/images/blog/inline-midday-fun.jpg" alt="Friends enjoying paddleboarding" width={800} height={500} className="rounded-lg shadow-md mx-auto" /> */}
          <figcaption className="text-center text-sm text-gray-500 mt-2">The perfect conditions for swimming and paddleboarding.</figcaption>
        </figure>
        
        <h2 className="text-3xl font-semibold text-gray-800 mt-12 mb-4">Your Salvador Ibiza Daytime Experience</h2>
        <p>
          Our "Daytime Experience" is curated to maximize this midday magic. We provide everything you need:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>A premium open bar with refreshing drinks and our famous homemade sangria.</li>
          <li>Delicious Spanish tapas and fresh fruit to keep your energy levels up.</li>
          <li>Top-quality water sports equipment: 15 paddleboards, 2 kayaks, and snorkeling gear for everyone.</li>
          <li>A premium sound system to set the perfect vibe.</li>
          <li>A carefully planned route that showcases some of Ibiza's most beautiful spots, away from the biggest crowds.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-800 mt-12 mb-4">Who is the Midday Trip For?</h2>
        <p>
          This trip is a fantastic choice for:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Families:</strong> Create unforgettable holiday memories with activities suitable for children.</li>
          <li><strong>Groups of Friends:</strong> Enjoy the sun, music, drinks, and good times together.</li>
          <li><strong>Water Sports Enthusiasts:</strong> Make the most of our extensive equipment in ideal conditions.</li>
          <li><strong>Anyone Seeking Sunshine & Relaxation:</strong> Simply want to soak up the Mediterranean sun and enjoy the stunning views? This is for you.</li>
        </ul>
        
        <hr className="my-12 border-gray-300"/>

        <div className="mt-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 p-8 text-white shadow-xl text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience Midday Magic?</h3>
          <p className="text-lg mb-6">
            Don't just dream about the perfect Ibiza day – live it! Join Salvador Ibiza for a daytime boat trip and discover a different side of the White Isle's charm.
          </p>
          <Link
            href="/book-now" // Or directly to Day Trip booking if widget supports it
            className="mt-4 inline-block rounded-lg bg-white px-8 py-3.5 text-lg font-semibold text-blue-600 hover:bg-blue-50 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Book Your Daytime Adventure
          </Link>
        </div>
      </div>
    </article>
  )
} 