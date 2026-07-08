"use client";

import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import TurbnbWidget from "@/components/booking/TurbnbWidget";
import FAQ from "@/components/trips/FAQ";
import BoatTripComparisonTable from "@/components/trips/BoatTripComparisonTable";
import TestimonialSlider from "@/components/trips/TestimonialSlider";
import { familyBoatTripComparison } from "@/lib/boat-trip-comparison";
import { familyBoatTripFaqs } from "@/lib/topic-faqs";
import { familyReviews } from "@/lib/topic-reviews";
import { businessContact } from "@/config/site";

const familyFaqItems = familyBoatTripFaqs.map((faq) => ({
  question: faq.question,
  answer: faq.answer,
}));

export default function FamilyBoatTripsClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white border-b border-gray-200 -mx-4 px-4 py-4 mb-8">
          <Breadcrumbs />
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
            Family Boat Trips <span className="text-green-600">Ibiza</span>
          </h1>

          <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
            Looking for the <strong>best family boat trip in Ibiza</strong>? Salvador Ibiza offers safe,
            all-inclusive 3-hour adventures on a traditional wooden boat — perfect for kids, parents and
            grandparents.
          </p>

          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-12 shadow-lg">
            <Image
              src="/images/boat/chicaspasandolomuybien.webp"
              alt="Families enjoying a relaxed boat trip in Ibiza with Salvador"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Section 1 */}
          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Why Salvador Ibiza Is One of the Best Family Boat Trips in Ibiza
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Ibiza is famous for party boats and loud club cruises — but that is not what most families
                want. The best <strong>family boat trips in Ibiza</strong> offer calm swim stops in sheltered
                coves, life jackets for every age, kid-friendly food, and a relaxed atmosphere where children
                feel safe and parents can actually unwind.
              </p>
              <p>
                Salvador Ibiza delivers exactly that on our{" "}
                <Link href="/boat-trips/day-trip" className="text-green-600 hover:underline font-medium">
                  3-hour day trip
                </Link>
                . We sail on a beautiful traditional wooden boat from San Antonio, exploring Ibiza&apos;s west
                coast towards Cala Comte or the north coast towards Es Vedrà. Every trip is all-inclusive:
                captain and crew, open bar, Spanish tapas, fresh fruit, 15 paddleboards, 2 kayaks and full
                snorkelling equipment.
              </p>
              <p>
                Unlike party boats, we do not blast nightclub music or restrict children. Our professional
                crew welcomes families every day and selects the calmest coves for swimming based on
                conditions. With a {businessContact.aggregateRating.ratingValue}/5 rating from {businessContact.aggregateRating.reviewCount}+ Google reviews, Salvador Ibiza is trusted by families
                from across Europe.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Is Salvador Ibiza Suitable for Children?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Yes.</strong> Salvador Ibiza is designed for families and children. We provide life
              jackets in all sizes, give a safety briefing before departure, and our crew is experienced in
              helping families with young swimmers. The boat has shade under a full canopy, a marine toilet
              (WC), and a relaxed vibe that children love.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Many of our best reviews come from families who say the swim stops — jumping into crystal-clear
              water, spotting fish while snorkelling, and trying paddleboards — were the highlight of their
              Ibiza holiday.
            </p>
          </section>

          {/* Section 3 */}
          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              What Age Is Suitable?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h3 className="font-bold text-green-800 mb-2">Infants (0–5)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Travel <strong>free</strong>. Bring sun protection and stay under the canopy. Parent
                  supervision required at all times.
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h3 className="font-bold text-green-800 mb-2">Children (6–12)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Discounted ticket at <strong>€45</strong>. Love snorkelling, paddleboards and swim stops.
                  Life jackets provided.
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h3 className="font-bold text-green-800 mb-2">Teenagers (13+)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Full adult ticket at <strong>€80</strong>. Enjoy snorkelling, kayaking, paddleboards and
                  the open bar (soft drinks included for all ages).
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Things Kids Love On Board
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: "🏊", title: "Jumping into clear water", desc: "Calm, sheltered coves perfect for swimming and splashing." },
                { icon: "🐠", title: "Snorkelling with fish", desc: "Full masks, snorkels and fins included for every guest." },
                { icon: "🏄", title: "Paddleboards & kayaks", desc: "15 paddleboards and 2 kayaks — kids love exploring the coves." },
                { icon: "🍎", title: "Fresh fruit & tapas", desc: "Kid-friendly snacks and unlimited soft drinks on board." },
                { icon: "🏝️", title: "Hidden coves & caves", desc: "Routes along Ibiza's west and north coast reveal secret spots." },
                { icon: "📸", title: "Boat adventure photos", desc: "A traditional wooden boat makes unforgettable family memories." },
              ].map((item) => (
                <div key={item.title} className="flex items-start space-x-4">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 - Comparison */}
          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <BoatTripComparisonTable
              rows={familyBoatTripComparison}
              title="Family Boat Trip vs Party Boat vs Catamaran"
            />
          </section>

          {/* Why families love - cards */}
          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Families Love Our Boat Trips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: "👨‍👩‍👧‍👦", title: "Family-Friendly Environment", desc: "Safe, welcoming atmosphere where children and adults enjoy together." },
                { icon: "🏊", title: "Safe Swimming Areas", desc: "Calm coves selected daily by the captain for safe family swimming." },
                { icon: "🐠", title: "Educational Experience", desc: "Discover marine life, local culture and Ibiza's natural environment." },
                { icon: "🍎", title: "Kid-Friendly Food", desc: "Fresh fruits, tapas and non-alcoholic drinks for children." },
              ].map((item) => (
                <div key={item.title} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <h3 className="font-bold text-green-800 mb-2">Safety First</h3>
              <p className="text-green-700">
                All children receive life jackets and safety briefings. Our experienced crew is trained in
                family safety protocols.
              </p>
            </div>
          </section>

          {/* Section 6 - FAQ */}
          <section className="mb-12">
            <FAQ items={familyFaqItems} title="Family Boat Trip FAQs" />
          </section>

          {/* Section 7 - Reviews */}
          <section className="mb-12 py-8">
            <TestimonialSlider
              testimonials={familyReviews}
              title="What Families Say About Salvador Ibiza"
            />
          </section>

          {/* Booking */}
          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12" id="booking">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
              Book Your Family Boat Trip
            </h2>
            <p className="text-center text-gray-600 mb-6">
              €80 per adult · Children 6–12: €45 · Infants 0–5: Free
            </p>
            <TurbnbWidget
              companyId={2}
              productId={2}
              billingTermIds={[]}
              channelId={11}
              customProperties={{
                displayBillingTerm: true,
                showQuantity: true,
                titleVariant: "Modern",
                bookNow: "BOOK FAMILY TRIP",
                confirmReservationAndPay: "CONFIRM & PAY",
                selectExperienceLabel: "Family Experience",
                addonsLabel: "Add-ons",
                childrenAge: "6 to 12 Years",
                infantAge: "0 to 5 Years",
              }}
            />
          </section>

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
