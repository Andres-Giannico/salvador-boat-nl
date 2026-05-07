'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiMapPin, FiUsers, FiClock, FiStar, FiAnchor, FiSun, FiCompass, FiEye, FiDroplet, FiActivity, FiShield, FiGift } from 'react-icons/fi';
import TurbnbWidget from '@/components/booking/TurbnbWidget';
import TripGallery from '@/components/trips/TripGallery';
import WhatsIncluded from '@/components/trips/WhatsIncluded';
import TripHighlights from '@/components/trips/TripHighlights';
import ReviewsSection from '@/components/trips/ReviewsSection';
import FAQ from '@/components/trips/FAQ';
import CallToActionSection from '@/components/CallToActionSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import type { GalleryImage } from '@/components/trips/TripGallery';
import type { HighlightItem } from '@/components/trips/TripHighlights';
import type { FAQItem } from '@/components/trips/FAQ';

const sanAntonioImages: GalleryImage[] = [
  { src: '/images/optimized/ibiza-sunset-boat-trip-salvador.webp', alt: 'Zonsondergangboottocht San Antonio' },
  { src: '/images/boat/chicasensupencueva.webp', alt: 'Paddleboarden in een verborgen baai' }, 
  { src: '/images/boat/doschicassupsunset.webp', alt: 'SUP bij zonsondergang' },
  { src: '/images/optimized/drinks-cave-sunset-ibiza.webp', alt: 'Drankjes op de boot bij zonsondergang' },
  { src: '/images/optimized/friends-ibiza-sunset-boat.webp', alt: 'Vrienden genieten van de zonsondergang' },
  { src: '/images/optimized/salvador-ibiza-boat-cave-exploration.webp', alt: 'Boot bij een grottenopening' }
];

const highlights: HighlightItem[] = [
  {
    icon: <FiCompass className="text-blue-500" />,
    title: 'Verkenning van de baai van San Antonio',
    description: 'De mooiste plekken rond de baai'
  },
  {
    icon: <FiEye className="text-orange-500" />,
    title: 'Zonsondergang richting Café del Mar',
    description: 'Het beroemde sunset strip vanaf het water'
  },
  {
    icon: <FiDroplet className="text-cyan-500" />,
    title: 'Kristalhelder water',
    description: 'Ideaal om te zwemmen en te snorkelen'
  },
  {
    icon: <FiActivity className="text-green-500" />,
    title: 'Stand-up paddleboard inbegrepen',
    description: 'Gratis SUP voor alle gasten'
  },
  {
    icon: <FiShield className="text-purple-500" />,
    title: 'Snorkeluitrusting',
    description: 'Professionele uitrusting aan boord'
  },
  {
    icon: <FiGift className="text-pink-500" />,
    title: 'Drankjes & lichte snacks',
    description: 'Verfrissing tijdens de hele tocht'
  }
];

const included = [
  { name: 'Professionele schipper', description: 'Ervaren lokale kapitein' },
  { name: 'Brandstof & havengelden', description: 'Alle kosten inbegrepen' },
  { name: 'Stand-up paddleboards', description: 'Gratis SUP-materiaal' },
  { name: 'Snorkeluitrusting', description: 'Maskers en vinnen' },
  { name: 'Drankjes & lichte snacks', description: 'Verfrissing aan boord' },
  { name: 'Bluetooth-geluidssysteem', description: 'Eigen muziek afspelen' },
  { name: 'Veiligheidsuitrusting', description: 'Zwemvesten en redding' },
  { name: 'Verzekering', description: 'Volledig verzekerde tochten' }
];

const faqs: FAQItem[] = [
  {
    question: "Wat maakt boottochten in San Antonio bijzonder?",
    answer: "Een mix van kustlijn, sfeer en iconische zonsondergang. Je ontdekt verborgen baaien en het beroemde Ibiza-zonlicht vanaf zee."
  },
  {
    question: "Varen we langs het gebied van Café del Mar?",
    answer: "Ja. Onze route San Antonio biedt uitzicht op de sunset strip vanaf het water — een uniek perspectief."
  },
  {
    question: "Is de tocht geschikt voor gezinnen?",
    answer: "Zeker. Rustig water, veiligheidsuitrusting en activiteiten voor alle leeftijden."
  },
  {
    question: "Welk moment is het beste?",
    answer: "We bieden dag- en zonsondergangtochten. Bij zonsondergang vertrekken we ca. 2,5 uur voor zonsondergang voor perfecte timing."
  }
];

export default function SanAntonioBoatTripsClient() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/optimized/ibiza-sunset-boat-trip-salvador.webp"
          alt="Boottochten San Antonio Ibiza"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Boottochten San Antonio
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto">
            Ontdek de baai van San Antonio en de iconische Ibiza-zonsondergang vanaf zee
          </p>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <FiClock className="text-blue-300 text-sm sm:text-base" />
              <span>3 uur</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <FiUsers className="text-blue-300 text-sm sm:text-base" />
              <span>Tot 35 personen</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <FiMapPin className="text-blue-300 text-sm sm:text-base" />
              <span>Baai San Antonio</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <FiStar className="text-blue-300 text-sm sm:text-base" />
              <span>Beoordeling 4,9/5</span>
            </div>
          </div>
        </div>
      </section>

            {/* Quick Info Bar */}
      <section className="bg-blue-50 py-4 sm:py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <FiAnchor className="text-blue-600 text-lg sm:text-xl flex-shrink-0" />
              <div>
                <div className="font-semibold text-sm sm:text-base">Vanaf €80</div>
                <div className="text-xs sm:text-sm text-gray-600">per persoon</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <FiSun className="text-orange-500 text-lg sm:text-xl flex-shrink-0" />
              <div>
                <div className="font-semibold text-sm sm:text-base">Zonsondergang</div>
                <div className="text-xs sm:text-sm text-gray-600">Omgeving Café del Mar</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <FiUsers className="text-green-600 text-lg sm:text-xl flex-shrink-0" />
              <div>
                <div className="font-semibold text-sm sm:text-base">Grote groepen</div>
                <div className="text-xs sm:text-sm text-gray-600">Tot 35 personen</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Widget */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Boek je avontuur San Antonio</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
              Kies datum en tijd voor een onvergetelijke boottocht rond de baai van San Antonio
            </p>
          </div>
          <TurbnbWidget 
            companyId={2}
            productId={2}
            billingTermIds={[]}
            channelId={11}
            className="max-w-4xl mx-auto"
            customProperties={{
              displayBillingTerm: true,
              showQuantity: true,
              quantity: "Gasten",
              titleVariant: "Modern",
              bookNow: "SAN ANTONIO BOEKEN",
              confirmReservationAndPay: "BEVESTIGEN & BETALEN",
              selectTimeLabel: "Kies tijd",
              selectExperienceLabel: "Ervaring San Antonio",
              addonsLabel: "Extra's",
              childrenAge: "6 tot 12 jaar",
              infantAge: "0 tot 5 jaar",
              depositObservation: "Na je boeking ontvang je een bevestiging met ontmoetingspunt en tijd. Controleer je contactgegevens. Aanbetaling €20 p.p.; rest contant aan boord."
            }}
          />
        </div>
      </section>

      {/* Trip Highlights */}
      <TripHighlights 
        title="Hoogtepunten San Antonio"
        items={highlights}
      />

      {/* Gallery */}
      <TripGallery 
        images={sanAntonioImages}
        title="Ervaring San Antonio"
      />

      {/* What's Included */}
      <WhatsIncluded 
        items={included}
        title="Alles inbegrepen"
      />

      {/* Description Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
              Jouw boottocht San Antonio
            </h2>
            
            <div className="prose prose-base sm:prose-lg max-w-none">
              <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Ontdek de <strong>baai van San Antonio</strong> met onze exclusieve boottochten — beroemd om zonsondergangen, helder water en de sfeer van Café del Mar.
              </p>
              
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Waarom San Antonio?</h3>
              <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Natuur en levendige strandcultuur. We varen naar de mooiste plekken, verborgen baaien en de beste zonsondergangspunten.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Voor iedereen</h3>
              <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Romantisch, gezinsvriendelijk of met vrienden — het rustige water nodigt uit tot zwemmen, paddleboarden en snorkelen.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Magie van de zonsondergang</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Niets gaat boven Ibiza's zonsondergang vanaf het water bij San Antonio — perfect getimed, met de kustlijn van Café del Mar als decor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection />

      {/* FAQ */}
      <FAQ 
        items={faqs}
        title="Veelgestelde vragen — San Antonio"
      />

      {/* CTA */}
      <CallToActionSection />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
} 