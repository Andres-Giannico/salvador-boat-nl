import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import TripCard from '@/components/ui/TripCard';

export const metadata: Metadata = {
  title: 'Boat Trips - All-Inclusive Excursions',
  description: 'Join our all-inclusive boat trips around Ibiza. Midday and sunset excursions with drinks, snacks and activities included.',
};

// Define trip data
const middayTrip = {
  imageUrl: "/images/barcosalvadorsmall.jpg",
  imageAlt: "Salvador Ibiza Midday Trip",
  title: "Day Trip",
  badgeText: "14:00 - 17:00",
  badgeBgColor: "bg-blue-500",
  features: [
    "Visit Cala Gració, Cala Salada & Punta Galera",
    "Swimming & snorkeling in crystal clear waters",
    "Unlimited drinks (beer, wine, cava, sangria, soft drinks)",
    "Fresh fruit & snacks included",
    "Paddleboarding, kayaking & snorkeling gear"
  ],
  price: "€80 / person",
  priceColor: "text-blue-600",
  ctaHref: "/contact",
  ctaBgColor: "bg-blue-600",
  ctaHoverBgColor: "hover:bg-blue-700",
  detailsHref: "/boat-trips/day-trip"
};

const sunsetTrip = {
  imageUrl: "/images/barco dron .jpg",
  imageAlt: "Salvador Ibiza Sunset Trip",
  title: "Sunset Trip",
  badgeText: "18:00 - 21:00",
  badgeBgColor: "bg-orange-500",
  features: [
    "Iconic sunset views near Es Vedrà",
    "Swimming in beautiful coves",
    "Unlimited drinks (beer, wine, cava, sangria, soft drinks)",
    "Light dinner / snacks included",
    "Paddleboarding, kayaking & snorkeling gear"
  ],
  price: "€80 / person",
  priceColor: "text-orange-600",
  ctaHref: "/contact",
  ctaBgColor: "bg-orange-500",
  ctaHoverBgColor: "hover:bg-orange-600",
  detailsHref: "/boat-trips/sunset-trip"
};

export default function BoatTripsPage() {
  return (
    <div className="space-y-16 pb-16">
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
            ALL-INCLUSIVE BOAT TRIPS
          </h1>
          <p className="text-xl text-white shadow-text">
            Experience the magic of Ibiza from the sea with our carefully designed excursions.
          </p>
        </div>
      </div>

      {/* Trip Options Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4 text-gray-900">
            Choose Your Perfect Adventure
          </h2>
          <p className="text-lg text-gray-700">
            Our all-inclusive boat trips offer everything you need for a perfect day on the water.
          </p>
        </div>

        {/* Use the TripCard component */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <TripCard {...middayTrip} delay={0.1} />
          <TripCard {...sunsetTrip} delay={0.2} />
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
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center transition-all duration-300 hover:shadow-xl">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m10 14l-3-3m0 0l-3 3m3-3v7m-6-9a3 3 0 100-6 3 3 0 000 6zm-4 2a3 3 0 100-6 3 3 0 000 6z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Food & Drinks</h3>
              <p className="text-gray-600 text-sm">
                Unlimited drinks (water, soft drinks, beer, wine, sangria) & snacks. Light meals on sunset trips.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center transition-all duration-300 hover:shadow-xl">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                 <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Activities & Fun</h3>
              <p className="text-gray-600 text-sm">
                Snorkeling gear, paddleboards, swimming noodles & Bluetooth music system.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center transition-all duration-300 hover:shadow-xl">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m-6 3l6-3m0 0l6 3m-6-3v10" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Scenic Route</h3>
              <p className="text-gray-600 text-sm">
                Discover hidden coves, beautiful beaches, and iconic landmarks like Es Vedrà (sunset trip).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            Ready to Create Unforgettable Memories?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Book your Salvador Ibiza boat trip today and experience the best day of your holiday.
          </p>
          <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl py-3 px-8 rounded-full font-semibold text-lg inline-flex items-center transition-all duration-300 transform hover:scale-105">
            Book Your Trip Now
          </Link>
        </div>
      </section>
    </div>
  );
}
