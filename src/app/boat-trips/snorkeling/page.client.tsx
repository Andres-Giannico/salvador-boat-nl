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
            Snorkelboottochten <span className="text-cyan-600">Ibiza</span>
          </h1>

          <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
            Op zoek naar de <strong>beste snorkelboottocht op Ibiza</strong>? Salvador Ibiza bezoekt
            kristalheldere cala's op onze 3 uur all-inclusive trips met professionele uitrusting voor elke gast.
          </p>

          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Waarom Salvador Ibiza een top snorkelboottocht op Ibiza is
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Veel boottochten op Ibiza bieden een snelle zwemstop — maar de beste{" "}
                <strong>snorkelboottochten</strong> bezoeken meerdere beschutte cala's met uitzonderlijk zicht,
                omvatten kwaliteitsuitrusting voor alle gasten, en combineren snorkelen met een volledige dag op zee.
              </p>
              <p>
                Op elke Salvador Ibiza trip krijg je complete snorkelspullen (maskers, snorkels, vinnen),
                2–3 zwemstops op door de kapitein gekozen cala's langs de westkust (Cala Comte, Cala Salada)
                of noordkust (Sa Foradada), plus 15 paddleboards, 2 kajaks, open bar en tapas — alles
                inbegrepen vanaf €80 per volwassene.
              </p>
              <p>
                Of je nu voor het eerst snorkelt, een gezin met kinderen bent, of een ervaren zwemmer — onze
                bemanning beveelt de beste plekken aan op basis van omstandigheden en vaardigheid.
              </p>
            </div>
          </section>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Onderwateravontuur wacht</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: "🤿", title: "Professionele snorkelspullen", desc: "Hoogwaardige maskers, snorkels en vinnen voor alle gasten — schoon en onderhouden." },
                { icon: "🐠", title: "Zeeleven ontdekken", desc: "Verken mediterrane vissen, posidonia-weiden en rotsige cala's in hun natuurlijke habitat." },
                { icon: "💎", title: "Kristalhelder water", desc: "Toegang tot verborgen cala's met uitzonderlijk onderwaterzicht." },
                { icon: "👨‍🏫", title: "Deskundige begeleiding", desc: "Veiligheidsbriefings en snorkeltips voor beginners en ervaren zwemmers." },
                { icon: "🏝️", title: "Meerdere snorkelplekken", desc: "2–3 verschillende locaties tijdens je 3 uur durende avontuur." },
                { icon: "🍹", title: "All-inclusive", desc: "Premium drankjes, Spaanse tapas en vers fruit tussen zwemstops." },
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
              <h3 className="text-lg font-bold text-gray-800 mb-3">Geschikt voor alle niveaus</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3" />
                  <strong>Beginners welkom</strong> — volledige veiligheidsbriefing en ondiepe plekken
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3" />
                  <strong>Ervaren snorkelaars</strong> — verken diepere rotsgebieden
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3" />
                  <strong>Niet-zwemmers</strong> — geniet vanaf de boot of in ondiep water
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3" />
                  <strong>Gezinsvriendelijk</strong> — kindermateriaal en toezicht
                </li>
              </ul>
            </div>
          </div>

          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Waar snorkelen op Ibiza per boot
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Ibiza&apos;s beste snorkelen bereik je per boot. Onze routes vanuit San Antonio bezoeken beschutte
              cala's waar het water kalm is en het zicht het hoogst — weg van drukke stranden.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li>
                <strong>Westkust (Cala Comte / Cala Salada):</strong> turquoise water en rotsachtige zeebodem vol
                vissen — onze populairste dagtochtroute.
              </li>
              <li>
                <strong>Noordkust (Sa Foradada / Es Vedrà):</strong> dramatische kliffen en helder water, vaak
                gekozen voor zonsondergangtrips.
              </li>
              <li>
                <strong>Verborgen cala's:</strong> de kapitein kiest dagelijks de beste plekken op basis van wind en
                zicht — je bereikt plekken die vanaf land onmogelijk te bereiken zijn.
              </li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <BoatTripComparisonTable
              rows={generalBoatTripComparison}
              title="Snorkelboottochten: hoe Salvador Ibiza zich verhoudt"
            />
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/images/boat/parejasnorkeling.webp"
                alt="Stel geniet van snorkelen tijdens boottocht Ibiza"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/images/optimized/crystal-clear-waters-ibiza.webp"
                alt="Kristalhelder water — perfect om te snorkelen op Ibiza"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <section className="mb-12">
            <FAQ items={snorkelingFaqItems} title="Veelgestelde vragen snorkelboottochten" />
          </section>

          <section className="mb-12 py-4">
            <TestimonialSlider
              testimonials={snorkelingReviews}
              title="Wat snorkelaars zeggen over Salvador Ibiza"
            />
          </section>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12" id="booking-widget">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Boek je snorkelavontuur
            </h2>
            <TurbnbWidget
              companyId={2}
              productId={2}
              billingTermIds={[]}
              channelId={11}
              customProperties={{
                displayBillingTerm: true,
                showQuantity: true,
                quantity: "Gasten",
                titleVariant: "Modern",
                bookNow: "SNORKELTOCHT BOEKEN",
                confirmReservationAndPay: "BEVESTIGEN & BETALEN",
                selectTimeLabel: "Kies tijd",
                selectExperienceLabel: "Snorkelervaring",
                addonsLabel: "Extra's",
                childrenAge: "6 tot 12 jaar",
                infantAge: "0 tot 5 jaar",
              }}
            />
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Meer wateravonturen</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/boat-trips/paddle"
                className="block bg-cyan-600 text-white p-6 rounded-lg hover:bg-cyan-700 transition-colors"
              >
                <h4 className="text-xl font-bold mb-2">SUP-ervaring</h4>
                <p>Combineer snorkelen met paddleboarden</p>
              </Link>
              <Link
                href="/boat-trips/family"
                className="block bg-green-600 text-white p-6 rounded-lg hover:bg-green-700 transition-colors"
              >
                <h4 className="text-xl font-bold mb-2">Gezinsboottochten</h4>
                <p>Snorkelplezier voor het hele gezin</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
