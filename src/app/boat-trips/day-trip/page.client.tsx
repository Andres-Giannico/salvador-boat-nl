"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiClock, FiUsers, FiMapPin, FiDollarSign, FiMusic, FiCompass, FiInfo, FiCamera, FiSun, FiAnchor } from 'react-icons/fi';
import { GiWaterSplash, GiPartyPopper } from 'react-icons/gi';
import { motion } from 'framer-motion';
import Script from 'next/script';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

// Importamos nuestros componentes reutilizables
import TripGallery from '@/components/trips/TripGallery';
import TripHighlights from '@/components/trips/TripHighlights';
import ReviewsSection from '@/components/trips/ReviewsSection';
import FAQ from '@/components/trips/FAQ';
import TurbnbWidget from '@/components/booking/TurbnbWidget';
import { TURBNB_WIDGET_CSS } from '@/lib/turbnb-widget-assets';
import { getSiteUrl } from '@/config/site';
// Galería de imágenes para el viaje - Ampliada con fotos aéreas
const images = [
  { src: "/images/boat/chicaspasandolomuybien.webp", alt: "Vrienden lachen op het dek van de Salvador Ibiza" },
  { src: "/images/boat/parejaensup.webp", alt: "Stel op paddleboards bij Salvador Ibiza" },
  { src: "/images/optimized/salvador-ibiza-boat-aerial-view.webp", alt: "Luchtfoto van de boot Salvador Ibiza" },
  { src: "/images/boat/chicasensupencueva.webp", alt: "Grotten verkennen op paddleboards" },
  { src: "/images/boat/gente-en-suo.webp", alt: "Groep paddleboardt in helder water" },
  { src: "/images/boat/familiaensup.webp", alt: "Gezin geniet samen van paddleboarden" },
  { src: "/images/boat/aereabarco2.webp", alt: "Nog een luchtbeeld van de Salvador Ibiza" },
  { src: "/images/boat/parejasnorkeling.webp", alt: "Stel snorkelt in turquoise zee" },
  { src: "/images/boat/chicasenproamuyfelicdes.webp", alt: "Blije vrienden op de boeg" },
  { src: "/images/boat/doschicasfelicesenproa.webp", alt: "Twee vriendinnen genieten van de zon op zee" },
  { src: "/images/boat/chicosdisfrutandoenproa.webp", alt: "Groep aan de voorplecht met uitzicht" },
  { src: "/images/boat/chicaensupparada.webp", alt: "Vrouw staat op een paddleboard" },
  { src: "/images/boat/4chicasparadasentablaxxl.webp", alt: "Vier vriendinnen op een grote paddleboard" },
  { src: "/images/boat/dos-chica-disfrutand.webp", alt: "Vriendinnen lachen tijdens de boottocht" },
];

// Aspectos destacados del viaje
const tripHighlights = [
  {
    icon: <FiCompass className="w-6 h-6 text-blue-600" />,
    title: "Flexibele routes",
    description: "Onze kapitein kiest de beste route op basis van weer en zee — elke tocht optimaal afgestemd."
  },
  {
    icon: <GiWaterSplash className="w-6 h-6 text-cyan-600" />,
    title: "Activiteiten op het water",
    description: "Paddleboarden, kajakken, snorkelen en zwemmen in kraakhelder water."
  },
  {
    icon: <GiPartyPopper className="w-6 h-6 text-orange-500" />,
    title: "Premium service",
    description: "Spaanse tapas, vers fruit en onbeperkte drankjes waaronder sangría, bier, wijn en cava."
  },
  {
    icon: <FiMusic className="w-6 h-6 text-purple-600" />,
    title: "Maximaal comfort",
    description: "Ligbedden, schaduwplekken, bar, nette faciliteiten en een premium Fusion-geluidssysteem."
  }
];

// Preguntas frecuentes específicas para este viaje
const tripFAQs = [
  {
    question: "Hoe laat vertrekt de tocht?",
    answer: "De gemengde dagtour vertrekt om 14:00 uur vanaf de haven van San Antonio. Kom minstens 30 minuten voor vertrek. Vertrektijden kunnen per maand iets verschillen."
  },
  {
    question: "Wat zit er in de prijs?",
    answer: "Je ervaart onbeperkt drankjes (sangría, bier, wijn, cava, frisdrank, water), Spaanse tapas en vers fruit, gebruik van paddleboards en kajaks, snorkeluitrusting, ligbedden, schaduwplekken en ons premium MB Quart-geluidssysteem."
  },
  {
    question: "Wat zijn de prijzen en leeftijdsregels?",
    answer: "Volwassenen: €80, kinderen 6–12 jaar: €45, kinderen jonger dan 6: gratis. Geschikt voor alle leeftijden; we hebben reddingsvesten in alle maten."
  },
  {
    question: "Wat moet ik meenemen?",
    answer: "Zwemkleding, handdoek, zonnebrand, zonnebril en een pet. Een camera of waterdichte telefoonhoes is handig. Eigen eten en drinken aan boord is niet toegestaan."
  },
  {
    question: "Hoe is de route?",
    answer: (
      <>
        Onze standaard dagtocht volgt de westkust van Ibiza met onder meer Cala Bassa en Cala Conta — beroemd om helder water. De kapitein kan de route aanpassen aan weer en zee voor veiligheid en comfort.{" "}
        <Link href="/routes" className="text-blue-600 hover:underline font-medium ml-1">
          Meer over onze routes.
        </Link>
      </>
    )
  }
];

// Assuming a list/section displaying features exists
// Interface for props received from the server component - REMOVED props
interface DayTripClientPageProps {}

export default function DayTripClientPage({}: DayTripClientPageProps) {
  const siteUrl = getSiteUrl();
  
  // Initialize the booking widget when the component mounts
  useEffect(() => {
    // Function to initialize the widget
    const initializeWidget = () => {
      if (typeof window !== 'undefined' && typeof window.TurboBooking !== 'undefined') {
        const element = document.getElementById('turbnb-booking-3');
        if (element) {
          try {
            // Type is now globally available
            const turbo3 = new window.TurboBooking();
            // Remove type assertion
            turbo3.run(element, {
              companyId: 2,
              productId: 2,
              billingTermIds: [20],
              channelId: 11,
              customProperties: {
                displayBillingTerm: true,
                showQuantity: true,
                quantity: "Aantal gasten",
                titleVariant: "Modern",
                bookNow: "NU RESERVEREN ",
                confirmReservationAndPay: "GA DOOR NAAR BETALING",
                selectTimeLabel: "Tijdstip kiezen",
                selectExperienceLabel: "Soort ervaring",
                addonsLabel: "Extra's",
                depositObservation: "Na je boeking ontvang je een bevestiging met alle details, inclusief ontmoetingspunt en tijd. Controleer telefoon en e-mail — we kunnen je moeten bereiken. Een aanbetaling van €20 per persoon bevestigt je reservering; het restbedrag betaal je contant aan boord op de dag van de tocht."
              }
            });
          } catch (error) {
            console.error("Error initializing booking widget:", error);
          }
        }
      }
    };

    // Check if TurboBooking is already loaded
    if (typeof window !== 'undefined' && typeof window.TurboBooking !== 'undefined') {
      initializeWidget();
    } else if (typeof window !== 'undefined') {
      // If not loaded yet, set up event listener for when script loads
      window.addEventListener('turbnbLoaded', initializeWidget);
      // Cleanup
      return () => window.removeEventListener('turbnbLoaded', initializeWidget);
    }
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>
      </div>

      {/* Hero Section - Full height with parallax effect */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/optimized/salvador-ibiza-boat-aerial-view.webp"
            alt="Salvador Ibiza — gemengde dagtocht"
            fill
            priority
            className="object-cover object-center"
            style={{ objectPosition: "50% 30%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 container mx-auto px-4 text-white text-center pt-20"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-md">
            Gemengde <span className="text-blue-400">dagtocht</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 drop-shadow-sm">
            Authentieke Mediterrane sferen aan boord van onze traditionele Balearen-houten boot
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <FiClock className="mr-2 text-blue-400" />
              <span>3 uur</span>
            </div>
            <div className="flex items-center bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <FiMapPin className="mr-2 text-blue-400" />
              <span>San Antonio</span>
            </div>
            <div className="flex items-center bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <FiDollarSign className="mr-2 text-blue-400" />
              <span>All-inclusive</span>
            </div>
          </div>
          <Link href="#booking-widget">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
            >
              Boek je tocht
            </motion.span>
          </Link>
        </motion.div>
      </section>

      {/* Main content container */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Trip overview grid - 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Main content column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Jouw perfecte Middellandse Zee-avontuur</h2>
              <div className="prose prose-lg text-gray-600 mb-8 max-w-none">
                 <p>
                  Welkom aan boord van Salvador Ibiza — jouw toegang tot de <strong>meest authentieke boottocht van Ibiza</strong>. Onze traditionele houten boot is de ideale setting voor onze gemengde dagtocht, voor reizigers van alle leeftijden die het eiland vanaf zee willen ontdekken.
                </p>
                <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Ontdek Ibiza's kustlijn</h3>
                <p>
                  Elke dag is een nieuw avontuur. Onze <strong>ervaren lokale kapitein</strong> beoordeelt weer en zee en kiest de best passende route — noordwaarts naar <strong>Cala Salada en Punta Galera</strong> of westwaarts naar <strong>Cala Bassa en Cala Conta</strong>. Zo krijg je altijd de beste ervaring op jouw vaardag.
                </p>
                <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">All-inclusive plezier voor iedereen</h3>
                <p>
                  Meer dan alleen varen: een volledige <strong>3 uur durende Middellandse Zee-ervaring</strong>. Solo, stel, gezin of vriendengroep — alles is geregeld. Duik in helder water, probeer <strong>paddleboarden en snorkelen</strong>, of ontspan op het dek. Ondertussen geniet je van een <strong>all-inclusive open bar</strong>, heerlijke Spaanse tapas en de juiste muziek.
                </p>
              </div>
            </motion.div>

            {/* Trip Gallery */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16"
            >
              <TripGallery 
                images={images}
                title="Impressies van de dagtocht" 
              />
            </motion.div>
          </div>

          {/* Sidebar with booking info - sticky */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-blue-600 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Tochtinformatie</h3>
                <p className="opacity-90">All-inclusive dagavontuur</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start">
                  <FiClock className="mt-1 mr-3 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Duur</h4>
                    <p className="text-gray-600">3 uur (14:00 – 17:00)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiMapPin className="mt-1 mr-3 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Vertrek</h4>
                    <p className="text-gray-600">Haven San Antonio, Ibiza</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiUsers className="mt-1 mr-3 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Capaciteit</h4>
                    <p className="text-gray-600">Tot 35 passagiers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <GiPartyPopper className="mt-1 mr-3 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Seizoen</h4>
                    <p className="text-gray-600">Mei t/m oktober</p>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4 mt-6">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <span className="block text-sm text-gray-500">Prijs per persoon</span>
                      <span className="text-3xl font-bold text-gray-900">€80</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-sm text-gray-500">Kinderen (6–12)</span>
                      <span className="text-xl font-semibold text-gray-700">€45</span>
                    </div>
                  </div>
                  <Link href="#booking-widget" className="block w-full">
                    <span className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow transition duration-300">
                      Boek deze tocht
                    </span>
                  </Link>
                  <p className="text-center text-sm text-gray-500 mt-3">
                    Beperkt aantal plaatsen per dag
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mb-20">
          <TripHighlights items={tripHighlights} title="Wat deze tocht bijzonder maakt" />
        </div>

       
        {/* FAQs Section */}
        <div className="mb-20">
          <FAQ items={tripFAQs} title="Veelgestelde vragen — dagtocht" />
        </div>

        {/* Direct Booking Section */}
        <div className="my-20" id="booking-widget">
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8"
            >
              Reserveer nu je <span className="text-blue-600">dagtocht</span>
            </motion.h2>
            
            {/* Booking Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-8 bg-white rounded-xl shadow-sm p-6 border border-gray-100"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Boekingsgaranties</h3>
                  <ul className="space-y-3 text-gray-600">
                    {[
                      "Snel en eenvoudig reserveren",
                      "Directe bevestiging",
                      "Flexibel annuleringsbeleid",
                      "All-inclusive ervaringen",
                      "Ervaren team en persoonlijke aandacht",
                      "Gedeeltelijke online betaling (€20 p.p. om te reserveren); het restbedrag contant aan boord op de vaardag."
                    ].map((item, index) => {
                      const isPartialPayment = item.startsWith("Gedeeltelijke online betaling");
                      return (
                        <motion.li
                          key={index}
                          className="flex items-start"
                        >
                          <span className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">✓</span>
                          {isPartialPayment ? (
                            <span className="text-gray-700">
                              <strong className="font-semibold">Gedeeltelijke online betaling</strong>
                              <span className="text-sm text-gray-500 ml-1">(€20 p.p. om te reserveren); het restbedrag contant aan boord op de vaardag.</span>
                            </span>
                          ) : (
                            <span className="text-gray-700">{item}</span>
                          )}
                        </motion.li>
                      );
                    })}
                  </ul>
                </div>
                <div className="p-6 border-t border-gray-200 md:border-t-0 md:border-l">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Betaalmethoden</h3>
                  <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-700">
                    <p className="font-medium mb-1">Veilig betalen met gangbare creditcards, Apple Pay en Google Pay.</p>
                    <p>Transacties worden veilig verwerkt via Stripe.</p>
                    <div className="mt-3 flex justify-center">
                      <Image src="/images/cards.webp" alt="Geaccepteerde betaalmethoden" width={280} height={40} className="object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              id="booking-widget"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100"
            >
              {/* Age Information */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Leeftijden & prijzen</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    <span><strong>Volwassenen:</strong> €80 p.p.</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    <span><strong>Kinderen (6–12 jaar):</strong> €45</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                    <span><strong>Baby’s (0–5 jaar):</strong> gratis</span>
                  </div>
                </div>
              </div>

              {/* Turbnb Booking Widget */}
              <TurbnbWidget 
                id="turbnb-booking-2"
                companyId={2}
                productId={2}
                billingTermIds={[20]}
                channelId={11}
                customProperties={{
                  displayBillingTerm: true,
                  showQuantity: true,
                  quantity: "Gasten",
                  titleVariant: "Modern",
                  bookNow: "DAGTOCHT BOEKEN",
                  confirmReservationAndPay: "BEVESTIGEN & BETALEN",
                  selectTimeLabel: "Kies tijd",
                  selectExperienceLabel: "Dagervaring",
                  addonsLabel: "Extra's",
                  childrenAge: "6 tot 12 jaar",
                  infantAge: "0 tot 6 jaar",
                  depositObservation: "Na je boeking ontvang je een bevestiging met alle details, inclusief ontmoetingspunt en tijd. Controleer telefoon en e-mail. Een aanbetaling van €20 per persoon bevestigt je reservering; het restbedrag betaal je contant aan boord."
                }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mt-6 p-5 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 rounded-lg shadow-sm"
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  <FiInfo className="h-6 w-6 text-yellow-600" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <p className="text-sm md:text-base text-yellow-800">
                    <span className="font-medium">Op zoek naar een magische avond?</span> Mis onze populaire{" "}
                    <Link href="/boat-trips/sunset-trip" className="font-bold underline text-yellow-900 hover:text-yellow-600 transition-colors">
                      zonsondergangboottocht
                    </Link>{" "}
                    niet — Ibiza's legende vanaf zee, met onbeperkte drankjes en Spaanse tapas!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
   {/* Reviews Section */}
   <div className="mb-20">
          <ReviewsSection />
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl overflow-hidden shadow-xl my-12">
          <div className="relative px-6 py-16 md:p-12 text-white text-center md:text-left md:flex items-center justify-between">
            <div className="md:max-w-xl mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Klaar voor een onvergetelijke dag?</h2>
              <p className="text-blue-100 text-lg">
                Boek nu je plek en ervaar de magie van Ibiza vanaf zee.
              </p>
            </div>
            <Link href="#booking-widget">
              <span className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
                Boek je avontuur
              </span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Related Boat Trips Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meer <span className="text-blue-600">Ibiza-avonturen</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ontdek andere spectaculaire bootervaringen rond het eiland
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                href="/boat-trips/sunset-trip"
                className="block bg-gradient-to-br from-orange-500 to-pink-600 text-white p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <FiSun className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold">Zonsondergangboottocht</h3>
                </div>
                <p className="mb-4 opacity-90">Ibiza's iconische zonsondergang vanaf zee — magische avondcruise.</p>
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">Zelfde prijs: €80</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/private-boat-trips"
                className="block bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <FiAnchor className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold">Privécharter</h3>
                </div>
                <p className="mb-4 opacity-90">Exclusief voor jouw groep — volledig op maat.</p>
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">Vanaf €1.350</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/boat-trips/family"
                className="block bg-gradient-to-br from-green-500 to-teal-600 text-white p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <FiUsers className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold">Gezinsavonturen</h3>
                </div>
                <p className="mb-4 opacity-90">Gezinsvriendelijke tochten voor alle leeftijden — veiligheid voorop.</p>
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">Kinderkorting</span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/boat-trips"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
            >
              Alle boottochten bekijken
            </Link>
          </motion.div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <Script
        id="day-trip-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Gemengde dagtocht — Salvador Ibiza',
            description:
              'Authentieke Mediterrane dagboottocht op een traditionele Balearen-houten boot. Paddleboarden, kajakken, snorkelen en zwemmen; Spaanse tapas, vers fruit en onbeperkte drankjes; ligbedden, schaduw en premium geluid.',
            brand: { '@type': 'Brand', name: 'Salvador Ibiza Boottochten' },
            offers: {
              '@type': 'Offer',
              price: '80',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
              validFrom: '2026-05-01T00:00:00+02:00',
              validThrough: '2026-10-31T23:59:59+02:00',
              seller: { '@type': 'Organization', name: 'Salvador Ibiza Boottochten' },
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.5',
              reviewCount: '120',
            },
            review: {
              '@type': 'Review',
              reviewRating: { '@type': 'Rating', ratingValue: '4.5' },
              author: { '@type': 'Person', name: 'TripAdvisor' },
              reviewBody:
                'Fantastische dagtocht — vriendelijke kapitein, comfortabele boot en een fijne all-inclusive bar.',
            },
            category: 'Boottocht',
            audience: 'Alle leeftijden',
            keywords:
              'boottocht, ibiza, dagtocht, familie, paddleboard, kajak, snorkelen',
            inLanguage: 'nl-NL',
            url: `${siteUrl}/boat-trips/day-trip`,
            image: `${siteUrl}/images/optimized/salvador-ibiza-boat-aerial-view.webp`,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${siteUrl}/boat-trips/day-trip`,
            },
            datePublished: '2023-05-01T00:00:00+02:00',
            dateModified: '2026-05-07T10:00:00+02:00',
          }),
        }}
      />
      <link href={TURBNB_WIDGET_CSS} rel="stylesheet" />
    </div>
  );
} 