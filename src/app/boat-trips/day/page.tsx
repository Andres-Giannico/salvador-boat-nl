import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Day Boat Trips Ibiza | Daytime Cruises & Adventures | Salvador Ibiza',
  description: 'Experience the best day boat trips in Ibiza with Salvador. Join our 3-hour daytime cruises with swimming, snorkeling, paddleboarding, and premium drinks. Perfect for sunny adventures.',
  keywords: 'day boat tours near me, ibiza boat day trips, day boat tour, day boat trips, day trips in ibiza, daytime boat trip ibiza',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/boat-trips/day',
  },
  openGraph: {
    title: 'Day Boat Trips Ibiza | Daytime Adventures on the Mediterranean',
    description: 'Join our premium day boat trips in Ibiza. Perfect daytime cruises with swimming, water sports, and stunning coastal views.',
    url: 'https://salvadoribiza.com/boat-trips/day',
    images: [
      {
        url: '/images/barco1.png',
        width: 1200,
        height: 630,
        alt: 'Day boat trip in Ibiza with Salvador - sunny adventure',
      }
    ],
  },
};

export default function DayBoatTripsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm mb-8">
          <Link href="/" className="text-gray-500 hover:text-blue-600">Home</Link>
          <span className="text-gray-400">/</span>
          <Link href="/boat-trips" className="text-gray-500 hover:text-blue-600">Boat Trips</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium">Day Trips</span>
        </nav>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
            Day Boat Trips <span className="text-blue-600">Ibiza</span>
          </h1>
          
          <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
            Experience the perfect <strong>day boat trip in Ibiza</strong> with Salvador. 
            Our <strong>daytime cruises</strong> offer 3 hours of pure Mediterranean bliss.
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">What Makes Our Day Trips Special</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Perfect Timing</h3>
                  <p className="text-gray-600">2:00 PM - 5:00 PM departure, ideal for enjoying the afternoon sun and crystal-clear waters.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Water Activities</h3>
                  <p className="text-gray-600">Swimming, snorkeling, paddleboarding, and kayaking in Ibiza's most beautiful coves.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">All-Inclusive Experience</h3>
                  <p className="text-gray-600">Premium open bar, Spanish tapas, fresh fruit, and all equipment included.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Expert Crew</h3>
                  <p className="text-gray-600">Professional captain and crew ensuring your safety and maximum enjoyment.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg font-semibold text-gray-800 mb-4">Ready for Your Day Adventure?</p>
              <p className="text-3xl font-bold text-blue-600 mb-6">€80 per person</p>
              <Link 
                href="/boat-trips/day-trip"
                className="inline-block bg-blue-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Your Day Trip Now
              </Link>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Explore More Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link 
                href="/boat-trips/sunset"
                className="block bg-orange-500 text-white p-6 rounded-lg hover:bg-orange-600 transition-colors"
              >
                <h4 className="text-xl font-bold mb-2">Sunset Trips</h4>
                <p>Magical evening cruises</p>
              </Link>
              <Link 
                href="/boat-trips"
                className="block bg-gray-800 text-white p-6 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <h4 className="text-xl font-bold mb-2">All Boat Trips</h4>
                <p>View complete options</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 