import Link from 'next/link';
import Image from 'next/image'; // Opcional, para imagen de héroe

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-turquoise-400 text-white rounded-lg shadow-lg mb-12">
        {/* Opcional: Añadir imagen de fondo o un gráfico grande */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience the Magic of Ibiza by Sea</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Unforgettable all-inclusive boat trips and exclusive private charters with Salvador Ibiza.
        </p>
        <Link href="/boat-trips">
          <span className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow hover:bg-gray-100 transition duration-300">
            Explore Our Trips
          </span>
        </Link>
      </section>

      {/* Featured Trips Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Popular Excursions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Midday Trip Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Placeholder image */}
            <div className="bg-blue-200 h-48 flex items-center justify-center text-gray-500">
              Image: Midday Sun & Sea (Placeholder)
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Midday All-Inclusive Trip</h3>
              <p className="text-gray-600 mb-4">12:00 PM - 4:00 PM</p>
              <p className="mb-4">
                Sunbathe, swim, snorkel, and enjoy drinks & snacks under the midday Ibiza sun.
              </p>
              <Link href="/boat-trips">
                <span className="text-blue-600 hover:underline font-medium">Learn More</span>
              </Link>
            </div>
          </div>

          {/* Sunset Trip Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Placeholder image */}
            <div className="bg-orange-200 h-48 flex items-center justify-center text-gray-500">
              Image: Golden Sunset View (Placeholder)
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Sunset All-Inclusive Trip</h3>
              <p className="text-gray-600 mb-4">5:00 PM - 9:00 PM</p>
              <p className="mb-4">
                Experience the breathtaking Ibiza sunset from the sea with music, drinks, and good vibes.
              </p>
              <Link href="/boat-trips">
                <span className="text-blue-600 hover:underline font-medium">Learn More</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Private Charter Section */}
      <section className="text-center py-12 bg-gray-100 rounded-lg shadow-inner">
        <h2 className="text-3xl font-bold mb-4">Book Your Private Event</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Make your special occasion unforgettable. Charter the Salvador boat exclusively for your group.
        </p>
        <Link href="/private-charter">
          <span className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow hover:bg-blue-700 transition duration-300">
            Private Charter Info
          </span>
        </Link>
      </section>
    </div>
  );
}
