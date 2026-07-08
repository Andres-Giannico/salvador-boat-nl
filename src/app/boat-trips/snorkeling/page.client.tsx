"use client";

import Image from "next/image";
import Link from "next/link";
import TurbnbWidget from "@/components/booking/TurbnbWidget";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/trips/FAQ";
import BoatTripComparisonTable from "@/components/trips/BoatTripComparisonTable";
import TestimonialSlider from "@/components/trips/TestimonialSlider";
import { generalBoatTripComparison } from "@/lib/boat-trip-comparison";
import { snorkelingBoatTripFaqs } from "@/lib/topic-faqs";
import { snorkelingReviews } from "@/lib/topic-reviews";

const snorkelingFaqItems = snorkelingBoatTripFaqs.map((faq) => ({
  question: faq.question,
  answer: faq.answer,
}));

export default function SnorkelingBoatTripsClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white border-b border-gray-200 -mx-4 px-4 py-4 mb-8">
          <Breadcrumbs />
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
            Snorkeling Boat Trips <span className="text-cyan-600">Ibiza</span>
          </h1>

          <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
            Looking for the <strong>best snorkelling boat trip in Ibiza</strong>? Salvador Ibiza visits
            crystal-clear coves on our 3-hour all-inclusive trips with professional equipment for every guest.
          </p>

          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Why Salvador Ibiza Is a Top Snorkelling Boat Trip in Ibiza
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Many boat trips in Ibiza offer a quick swim stop — but the best{" "}
                <strong>snorkelling boat trips</strong> visit multiple sheltered coves with exceptional
                visibility, include quality equipment for all guests, and combine snorkelling with a full
                day on the water.
              </p>
              <p>
                On every Salvador Ibiza trip you get complete snorkelling gear (masks, snorkels, fins),
                2–3 swim stops at captain-selected coves along the west coast (Cala Comte, Cala Salada area)
                or north coast (Sa Foradada), plus 15 paddleboards, 2 kayaks, open bar and tapas — all
                included from €80 per adult.
              </p>
              <p>
                Whether you are a first-time snorkeller, a family with children, or an experienced swimmer,
                our crew recommends the best spots based on conditions and ability.
              </p>
            </div>
          </section>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Underwater Adventure Awaits</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: "🤿", title: "Professional Snorkelling Gear", desc: "High-quality masks, snorkels and fins for all guests — sanitised and maintained." },
                { icon: "🐠", title: "Marine Life Discovery", desc: "Explore Mediterranean fish, posidonia meadows and rocky coves in their natural habitat." },
                { icon: "💎", title: "Crystal Clear Waters", desc: "Access hidden coves with exceptional underwater visibility." },
                { icon: "👨‍🏫", title: "Expert Guidance", desc: "Safety briefings and snorkelling tips for beginners and experienced swimmers." },
                { icon: "🏝️", title: "Multiple Snorkel Spots", desc: "2–3 different locations during your 3-hour adventure." },
                { icon: "🍹", title: "All-Inclusive", desc: "Premium drinks, Spanish tapas and fresh fruit between swim stops." },
              ].map((item) => (
                <div key={item.title} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-600 font-bold">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Perfect for All Skill Levels</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3" />
                  <strong>Beginners welcome</strong> — full safety briefing and shallow areas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3" />
                  <strong>Experienced snorkellers</strong> — explore deeper rocky areas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3" />
                  <strong>Non-swimmers</strong> — enjoy from the boat or shallow water
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3" />
                  <strong>Family friendly</strong> — children&apos;s equipment and supervision
                </li>
              </ul>
            </div>
          </div>

          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Where to Snorkel in Ibiza by Boat
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Ibiza&apos;s best snorkelling is reached by boat. Our routes from San Antonio visit sheltered
              coves where the water is calm and visibility is highest — away from crowded beaches.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li>
                <strong>West coast (Cala Comte / Cala Salada area):</strong> turquoise water and rocky
                seabeds teeming with fish — our most popular day trip route.
              </li>
              <li>
                <strong>North coast (Sa Foradada / Es Vedrà area):</strong> dramatic cliffs and clear
                water, often chosen for sunset trips.
              </li>
              <li>
                <strong>Hidden coves:</strong> the captain picks the best spots daily based on wind and
                visibility — you reach places impossible to access from land.
              </li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <BoatTripComparisonTable
              rows={generalBoatTripComparison}
              title="Snorkelling Boat Trips: How Salvador Ibiza Compares"
            />
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/images/boat/parejasnorkeling.webp"
                alt="Couple enjoying snorkelling during Ibiza boat trip"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/images/optimized/crystal-clear-waters-ibiza.webp"
                alt="Crystal clear waters perfect for snorkelling in Ibiza"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <section className="mb-12">
            <FAQ items={snorkelingFaqItems} title="Snorkelling Boat Trip FAQs" />
          </section>

          <section className="mb-12 py-4">
            <TestimonialSlider
              testimonials={snorkelingReviews}
              title="What Snorkellers Say About Salvador Ibiza"
            />
          </section>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12" id="booking-widget">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Book Your Snorkelling Adventure
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
                bookNow: "BOOK SNORKELING TRIP",
                confirmReservationAndPay: "CONFIRM & PAY",
                selectExperienceLabel: "Snorkeling Experience",
                addonsLabel: "Add-ons",
                childrenAge: "6 to 12 Years",
                infantAge: "0 to 5 Years",
              }}
            />
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">More Aquatic Adventures</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/boat-trips/paddle"
                className="block bg-cyan-600 text-white p-6 rounded-lg hover:bg-cyan-700 transition-colors"
              >
                <h4 className="text-xl font-bold mb-2">Paddle Boarding Experience</h4>
                <p>Combine snorkelling with paddle board adventures</p>
              </Link>
              <Link
                href="/boat-trips/family"
                className="block bg-green-600 text-white p-6 rounded-lg hover:bg-green-700 transition-colors"
              >
                <h4 className="text-xl font-bold mb-2">Family Boat Trips</h4>
                <p>Snorkelling fun for the whole family</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
