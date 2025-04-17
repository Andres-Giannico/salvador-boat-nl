import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Boat Trips - All-Inclusive Excursions',
  description: 'Join our all-inclusive boat trips around Ibiza. Midday and sunset excursions with drinks, snacks and activities included.',
};

export default function BoatTripsPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center text-center">
        <Image
          src="/images/barcodesdedron.jpg"
          alt="Salvador Ibiza Boat Trips"
          fill
          className="object-cover object-center brightness-[0.6] z-0"
          priority
        />
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 shadow-text">
            All-Inclusive Boat Trips
          </h1>
          <p className="text-xl text-white shadow-text">
            Experience the magic of Ibiza from the sea with our carefully designed excursions
          </p>
        </div>
      </div>

      {/* Trip Options Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4 text-gray-900">
            Choose Your Perfect Adventure
          </h2>
          <p className="text-lg text-gray-700">
            Our all-inclusive boat trips offer everything you need for a perfect day on the water
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Midday Trip */}
          <div className="bg-white rounded-xl shadow-soft overflow-hidden">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/images/barcosalvadorsmall.jpg"
                alt="Salvador Ibiza Midday Trip"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-[#1E88E5] text-white px-4 py-1 rounded-full text-sm font-medium">
                12:00 - 16:00
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Midday Trip</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-3 text-[#1E88E5] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Swimming & snorkeling at the best spots</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-3 text-[#1E88E5] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited drinks & snacks</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-3 text-[#1E88E5] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Paddleboarding & water activities</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-3 text-[#1E88E5] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Music & good vibes under the sun</span>
                </li>
              </ul>
              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold text-[#1E88E5]">€95 / person</p>
                <Link href="/contact" className="bg-[#1E88E5] hover:bg-[#1976D2] text-white py-2 px-6 rounded-lg font-medium inline-flex items-center">
                  Book Now
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Sunset Trip */}
          <div className="bg-white rounded-xl shadow-soft overflow-hidden">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/images/barco dron .jpg"
                alt="Salvador Ibiza Sunset Trip"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-[#FFA000] text-white px-4 py-1 rounded-full text-sm font-medium">
                17:00 - 21:00
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Sunset Trip</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-3 text-[#FFA000] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Breathtaking sunset views of Es Vedrà</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-3 text-[#FFA000] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited drinks & light dinner</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-3 text-[#FFA000] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Swimming in crystal clear waters</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-3 text-[#FFA000] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sunset music & magical atmosphere</span>
                </li>
              </ul>
              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold text-[#FFA000]">€110 / person</p>
                <Link href="/contact" className="bg-[#FFA000] hover:bg-[#FF8F00] text-white py-2 px-6 rounded-lg font-medium inline-flex items-center">
                  Book Now
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4 text-gray-900">
              What&apos;s Included in Every Trip
            </h2>
            <p className="text-lg text-gray-700">
              We&apos;ve thought of everything so you can simply relax and enjoy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-soft text-center">
              <div className="bg-[#1E88E5]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#1E88E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Food & Drinks</h3>
              <p className="text-gray-700">
                Unlimited drinks including water, soft drinks, beer, wine, and sangria. Snacks and light meals depending on the trip.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-soft text-center">
              <div className="bg-[#1E88E5]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#1E88E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Activities</h3>
              <p className="text-gray-700">
                Snorkeling equipment, paddleboards, and swimming noodles. Music system with bluetooth connectivity for your playlists.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-soft text-center">
              <div className="bg-[#1E88E5]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#1E88E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Route</h3>
              <p className="text-gray-700">
                Carefully planned routes to the most beautiful spots around Ibiza, including hidden coves and breathtaking viewpoints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#1E88E5] py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            Ready to Create Unforgettable Memories?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Book your Salvador Ibiza boat trip today and experience the magic of Ibiza from the sea
          </p>
          <Link href="/contact" className="bg-white text-[#1E88E5] hover:bg-white/90 py-3 px-8 rounded-lg font-medium text-lg inline-flex items-center">
            Book Your Trip Now
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
