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
            Gezinsboottochten <span className="text-green-600">Ibiza</span>
          </h1>

          <p className="text-xl text-gray-600 text-center mb-12 leading-relaxed">
            Op zoek naar de <strong>beste gezinsboottocht op Ibiza</strong>? Salvador Ibiza biedt veilige,
            all-inclusive 3 uur avonturen op een traditionele houten boot — perfect voor kinderen, ouders en
            grootouders.
          </p>

          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-12 shadow-lg">
            <Image
              src="/images/boat/chicaspasandolomuybien.webp"
              alt="Gezinnen genieten van een ontspannen boottocht op Ibiza met Salvador"
              fill
              className="object-cover"
              priority
            />
          </div>

          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Waarom Salvador Ibiza een van de beste gezinsboottochten op Ibiza is
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Ibiza staat bekend om partyboten en luide clubcruises — maar dat is niet wat de meeste gezinnen
                willen. De beste <strong>gezinsboottochten op Ibiza</strong> bieden rustige zwemstops in beschutte
                cala's, reddingsvesten voor elke leeftijd, kindvriendelijk eten en een ontspannen sfeer waarin kinderen
                zich veilig voelen en ouders echt kunnen ontspannen.
              </p>
              <p>
                Salvador Ibiza levert precies dat op onze{" "}
                <Link href="/boat-trips/day-trip" className="text-green-600 hover:underline font-medium">
                  3 uur durende dagtocht
                </Link>
                . We varen op een prachtige traditionele houten boot vanuit San Antonio, langs Ibiza&apos;s westkust
                richting Cala Comte of de noordkust richting Es Vedrà. Elke trip is all-inclusive: kapitein en bemanning,
                open bar, Spaanse tapas, vers fruit, 15 paddleboards, 2 kajaks en volledige snorkeluitrusting.
              </p>
              <p>
                In tegenstelling tot partyboten draaien we geen nightclubmuziek af en beperken we kinderen niet. Onze
                professionele bemanning verwelkomt dagelijks gezinnen en kiest de rustigste cala's om te zwemmen op basis
                van de omstandigheden. Met een score van 4,9/5 uit 278+ reviews vertrouwen gezinnen uit heel Europa op
                Salvador Ibiza.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Is Salvador Ibiza geschikt voor kinderen?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Ja.</strong> Salvador Ibiza is ontworpen voor gezinnen en kinderen. We leveren reddingsvesten in alle
              maten, geven een veiligheidsbriefing vóór vertrek, en onze bemanning heeft ervaring met jonge zwemmers. De
              boot heeft schaduw onder een volledig zonnedek, een marinetoilet (WC), en een ontspannen sfeer die kinderen
              geweldig vinden.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Veel van onze beste reviews komen van gezinnen die zeggen dat de zwemstops — springen in kristalhelder
              water, vissen spotten tijdens het snorkelen en paddleboards proberen — het hoogtepunt van hun Ibiza-vakantie
              waren.
            </p>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Vanaf welke leeftijd?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h3 className="font-bold text-green-800 mb-2">Baby&apos;s (0–5)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Reizen <strong>gratis</strong>. Neem zonbescherming mee en blijf onder het zonnedek. Ouderlijk toezicht
                  verplicht.
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h3 className="font-bold text-green-800 mb-2">Kinderen (6–12)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Gereduceerd tarief <strong>€45</strong>. Houden van snorkelen, paddleboards en zwemstops. Reddingsvesten
                  inbegrepen.
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h3 className="font-bold text-green-800 mb-2">Tieners (13+)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Volwassenticket <strong>€80</strong>. Genieten van snorkelen, kajakken, paddleboards en de open bar
                  (frisdrank voor alle leeftijden).
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Wat kinderen het leukst vinden aan boord
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: "🏊", title: "Springen in helder water", desc: "Rustige, beschutte cala's perfect om te zwemmen en spetteren." },
                { icon: "🐠", title: "Snorkelen met vissen", desc: "Volledige maskers, snorkels en vinnen voor elke gast." },
                { icon: "🏄", title: "Paddleboards & kajaks", desc: "15 paddleboards en 2 kajaks — kinderen verkennen graag de cala's." },
                { icon: "🍎", title: "Vers fruit & tapas", desc: "Kindvriendelijke snacks en onbeperkte frisdrank aan boord." },
                { icon: "🏝️", title: "Verborgen cala's & grotten", desc: "Routes langs Ibiza's west- en noordkust onthullen geheime plekken." },
                { icon: "📸", title: "Avontuurfoto's op de boot", desc: "Een traditionele houten boot maakt onvergetelijke gezinsherinneringen." },
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

          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <BoatTripComparisonTable
              rows={familyBoatTripComparison}
              title="Gezinsboottocht vs partyboot vs catamaran"
            />
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Waarom gezinnen van onze boottochten houden</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: "👨‍👩‍👧‍👦", title: "Gezinsvriendelijke sfeer", desc: "Veilige, gastvrije omgeving waar kinderen en volwassenen samen genieten." },
                { icon: "🏊", title: "Veilige zwemplekken", desc: "Rustige cala's dagelijks gekozen door de kapitein voor veilig gezinszwemmen." },
                { icon: "🐠", title: "Leerzame ervaring", desc: "Ontdek zeeleven, lokale cultuur en Ibiza's natuurlijke omgeving." },
                { icon: "🍎", title: "Eten voor kinderen", desc: "Vers fruit, tapas en alcoholvrije drankjes voor kinderen." },
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
              <h3 className="font-bold text-green-800 mb-2">Veiligheid eerst</h3>
              <p className="text-green-700">
                Alle kinderen krijgen reddingsvesten en veiligheidsbriefings. Onze ervaren bemanning is getraind in
                gezinsveiligheidsprotocollen.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <FAQ items={familyFaqItems} title="Veelgestelde vragen gezinsboottochten" />
          </section>

          <section className="mb-12 py-8">
            <TestimonialSlider
              testimonials={familyReviews}
              title="Wat gezinnen zeggen over Salvador Ibiza"
            />
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8 mb-12" id="booking">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
              Boek je gezinsboottocht
            </h2>
            <p className="text-center text-gray-600 mb-6">
              €80 per volwassene · Kinderen 6–12: €45 · Baby&apos;s 0–5: gratis
            </p>
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
                bookNow: "GEZINSTOCHT BOEKEN",
                confirmReservationAndPay: "BEVESTIGEN & BETALEN",
                selectTimeLabel: "Kies tijd",
                selectExperienceLabel: "Gezinservaring",
                addonsLabel: "Extra's",
                childrenAge: "6 tot 12 jaar",
                infantAge: "0 tot 5 jaar",
              }}
            />
          </section>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Meer opties voor gezinnen</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/private-boat-trips"
                className="block bg-blue-600 text-white p-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <h4 className="text-xl font-bold mb-2">Privé gezinscharter</h4>
                <p>Exclusief de boot voor jullie gezin</p>
              </Link>
              <Link
                href="/boat-trips"
                className="block bg-gray-800 text-white p-6 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <h4 className="text-xl font-bold mb-2">Alle boottochten</h4>
                <p>Bekijk al onze mogelijkheden</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
