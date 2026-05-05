import Image from 'next/image';
import Link from 'next/link';
import TurbnbWidget from '@/components/booking/TurbnbWidget';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { enPageMetadata } from '@/lib/page-meta';

export const metadata = enPageMetadata({
  title: 'Family Boat Trips Ibiza (3 hours) | Safe Adventures for All Ages',
  description:
    'Perfect family boat trips in Ibiza with safety-first approach. 3-hour cruises designed for kids and parents. Swimming, snorkeling, and fun activities.',
  path: '/boat-trips/family',
  keywords:
    'family boat trips Ibiza, kids boat tour, family cruise Ibiza, safe boat trips children, family adventure Ibiza',
});

export default function FamilyBoatTripsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-200 -mx-4 px-4 py-4 mb-8">
          <Breadcrumbs />
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
            Family Boat Trips <span className="text-green-600">Ibiza</span>
          </h1>
          
          <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
            Create unforgettable memories with our <strong>family boat trips in Ibiza</strong>. 
            Safe, fun, and educational adventures perfect for all ages.
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Families Love Our Boat Trips</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold">👨‍👩‍👧‍👦</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Family-Friendly Environment</h3>
                  <p className="text-gray-600">Safe, welcoming atmosphere where children and adults can enjoy together.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold">🏊</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Safe Swimming Areas</h3>
                  <p className="text-gray-600">Carefully selected calm coves perfect for children to swim and play safely.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold">🐠</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Educational Experience</h3>
                  <p className="text-gray-600">Learn about marine life, local culture, and Ibiza's natural environment.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold">🍎</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Kid-Friendly Food</h3>
                  <p className="text-gray-600">Fresh fruits, healthy snacks, and non-alcoholic drinks for children.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="font-bold text-green-800 mb-2">🛡️ Safety First</h3>
              <p className="text-green-700">
                All children receive life jackets and safety briefings. Our experienced crew is trained in family safety protocols.
              </p>
            </div>

            <div className="text-center">
              <p className="text-lg font-semibold text-gray-800 mb-4">Perfect Family Adventure Awaits!</p>
              <p className="text-3xl font-bold text-green-600 mb-2">€80 per adult</p>
              <p className="text-lg text-gray-600 mb-6">Children under 12: 50% discount</p>
              <Link 
                href="/boat-trips/day-trip"
                className="inline-block bg-green-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-green-700 transition-colors"
              >
                Book Family Trip Now
              </Link>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">More Family Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link 
                href="/private-boat-trips"
                className="block bg-blue-600 text-white p-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <h4 className="text-xl font-bold mb-2">Private Family Charter</h4>
                <p>Exclusive boat just for your family</p>
              </Link>
              <Link 
                href="/boat-trips"
                className="block bg-gray-800 text-white p-6 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <h4 className="text-xl font-bold mb-2">All Boat Trips</h4>
                <p>Explore all our options</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 