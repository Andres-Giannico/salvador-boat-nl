import Image from 'next/image';
import Link from 'next/link';
import TurbnbWidget from '@/components/booking/TurbnbWidget';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { enPageMetadata } from '@/lib/page-meta';
import { buildProductSchema } from '@/lib/product-schema';

export const metadata = enPageMetadata({
  title: 'Group Boat Trips Ibiza (3 hours) | Friends & Celebrations',
  description: 'Perfect group boat trips in Ibiza for friends, birthdays, hen/stag parties and reunions. Up to 35 guests, all-inclusive drinks, tapas and water sports from San Antonio.',
  path: '/boat-trips/groups',
  keywords: 'group boat trips Ibiza, friends boat trip Ibiza, birthday boat party Ibiza, hen party boat Ibiza, stag party boat Ibiza, large group boat tour Ibiza',
  ogTitle: 'Group Boat Trips Ibiza | Friends & Celebrations',
  ogDescription: 'Book a group boat trip in Ibiza for friends and celebrations. All-inclusive 3-hour cruises with drinks, tapas and water sports for up to 35 guests.',
  ogImage: '/images/boat/chicasmuyfelices.webp',
  ogImageAlt: 'Happy group of friends enjoying boat trip in Ibiza',
});

export default async function GroupBoatTripsPage() {
  const groupBoatTripsJsonLd = await buildProductSchema({
    name: "Group Boat Trips Ibiza by Salvador",
    description:
      "Perfect boat trips for friends and celebrations in Ibiza. Special rates and all-inclusive experiences for birthdays, hen/stag parties and group reunions.",
    path: "/boat-trips/groups",
    price: "80",
    image: "/images/boat/chicasmuyfelices.webp",
    duration: "PT3H",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(groupBoatTripsJsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white border-b border-gray-200 -mx-4 px-4 py-4 mb-8">
            <Breadcrumbs />
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
              Group Boat Trips <span className="text-purple-600">Ibiza</span>
            </h1>
            
            <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
              Perfect <strong>group boat trips in Ibiza</strong> for friends, birthdays, hen and stag parties, and reunions.
              Create unforgettable memories together on the Mediterranean.
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Perfect for Friends & Celebrations</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold">👥</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Large Group Capacity</h3>
                    <p className="text-gray-600">Accommodate up to 35 people comfortably with spacious deck areas and seating arrangements.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold">🎉</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Celebration Friendly</h3>
                    <p className="text-gray-600">Perfect for birthdays, bachelor/bachelorette parties, anniversaries, and special occasions.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold">🥂</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Friends & Reunions</h3>
                    <p className="text-gray-600">Ideal for holiday groups, reunions, and friends travelling together who want a shared day at sea.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold">🎵</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Group Entertainment</h3>
                    <p className="text-gray-600">Premium sound system for your playlist, group activities, and shared experiences.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold">🍾</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Group Catering</h3>
                    <p className="text-gray-600">All-inclusive drinks and tapas scaled for your group size, with special dietary accommodations.</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Ideal Group Occasions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <strong>Birthday celebrations</strong>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <strong>Bachelor/Bachelorette parties</strong>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <strong>Friend group reunions</strong>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <strong>Holiday group trips</strong>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <strong>Anniversary celebrations</strong>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <strong>Student group excursions</strong>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <strong>Sports team celebrations</strong>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <strong>Hen & stag parties</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/boat/chicasmuyfelices.webp"
                  alt="Happy group of friends enjoying boat trip in Ibiza"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/boat/chicaspasandolomuybien.webp"
                  alt="Group of friends having fun on Salvador boat trip"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12" id="booking-widget">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Book Your Group Adventure
              </h2>

              <TurbnbWidget
                companyId={2}
                productId={2}
                billingTermIds={[]}
                channelId={11}
                customProperties={{
                  displayBillingTerm: true,
                  showQuantity: true,
                  titleVariant: "Modern",
                  bookNow: "BOOK GROUP TRIP",
                  confirmReservationAndPay: "CONFIRM & PAY",
                  selectExperienceLabel: "Group Experience",
                  addonsLabel: "Add-ons",
                  childrenAge: "6 to 12 Years",
                  infantAge: "0 to 5 Years"
                }}
              />
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">More Group Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link 
                  href="/private-boat-trips"
                  className="block bg-purple-600 text-white p-6 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <h4 className="text-xl font-bold mb-2">Private Group Charter</h4>
                  <p>Exclusive boat just for your group with custom itinerary</p>
                </Link>
                <Link 
                  href="/corporate-events"
                  className="block bg-teal-600 text-white p-6 rounded-lg hover:bg-teal-700 transition-colors"
                >
                  <h4 className="text-xl font-bold mb-2">Corporate Events</h4>
                  <p>Team building and business entertainment at sea</p>
                </Link>
                <Link 
                  href="/boat-trips"
                  className="block bg-gray-800 text-white p-6 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <h4 className="text-xl font-bold mb-2">All Boat Trips</h4>
                  <p>Explore all our group-friendly options</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
