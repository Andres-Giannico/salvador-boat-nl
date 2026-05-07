'use client';

import Image from 'next/image';
import TurbnbWidget from '@/components/booking/TurbnbWidget';
import { FiClock, FiDollarSign, FiMapPin, FiCheckCircle, FiSun, FiMoon } from 'react-icons/fi';
import Link from 'next/link';

const DEPOSIT_NL =
  'Na je boeking ontvang je een bevestiging met ontmoetingspunt en tijd. Controleer of telefoon en e-mail kloppen. Aanbetaling €20 per persoon; het restant aan boord.';

export default function BookTripsQrClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-orange-100/50 py-6 md:py-16 px-2 md:px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="relative h-24 md:h-32 w-full">
          <Image
            src="/images/optimized/salvador-ibiza-boat-aerial-view.webp"
            alt="Salvador Ibiza boottocht"
            layout="fill"
            objectFit="cover"
            className="opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>

        <div className="p-4 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-3">
            Boek je <span className="text-cyan-600">boottocht</span>
          </h1>
          <p className="text-center text-gray-600 mb-8 text-sm md:text-base">
            Kies je voorkeur: dagtocht of magische zonsondergang vanuit San Antonio.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50/30 rounded-lg p-4 transition-shadow duration-300 hover:shadow-md">
              <h2 className="text-lg font-semibold text-blue-700 mb-3 flex items-center">
                <span className="bg-blue-100 p-1.5 rounded-full mr-2 inline-block">
                  <FiSun className="w-4 h-4 text-blue-600" />
                </span>
                Dagtocht
              </h2>
              <div className="space-y-1.5 text-sm">
                <p className="flex items-center">
                  <FiClock className="w-4 h-4 mr-1.5 text-blue-600 flex-shrink-0" /> 14:00 - 17:00 (3 u)
                </p>
                <p className="flex items-center">
                  <FiMapPin className="w-4 h-4 mr-1.5 text-blue-600 flex-shrink-0" /> Haven San Antonio
                </p>
                <p className="flex items-center">
                  <FiDollarSign className="w-4 h-4 mr-1.5 text-blue-600 flex-shrink-0" /> €80 volw. / €45 kind
                </p>
                <p className="flex items-center text-xs text-gray-600 mt-1">
                  <FiCheckCircle className="w-3 h-3 text-green-500 mr-1" />
                  Drankjes, tapas, sup, kajak, snorkel
                </p>
              </div>
            </div>

            <div className="border border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50/30 rounded-lg p-4 transition-shadow duration-300 hover:shadow-md">
              <h2 className="text-lg font-semibold text-orange-700 mb-3 flex items-center">
                <span className="bg-orange-100 p-1.5 rounded-full mr-2 inline-block">
                  <FiMoon className="w-4 h-4 text-orange-600" />
                </span>
                Zonsondergangtocht
              </h2>
              <div className="space-y-1.5 text-sm">
                <p className="flex items-start">
                  <FiClock className="w-4 h-4 mr-1.5 text-orange-600 mt-0.5 flex-shrink-0" />{' '}
                  <span>
                    Ca. 18:30 - 21:30 (3 u)
                    <br />
                    <span className="text-xs text-orange-800/80">(Tijden variëren licht per maand)</span>
                  </span>
                </p>
                <p className="flex items-center">
                  <FiMapPin className="w-4 h-4 mr-1.5 text-orange-600 flex-shrink-0" /> Haven San Antonio
                </p>
                <p className="flex items-center">
                  <FiDollarSign className="w-4 h-4 mr-1.5 text-orange-600 flex-shrink-0" /> €80 volw. / €45 kind
                </p>
                <p className="flex items-center text-xs text-gray-600 mt-1">
                  <FiCheckCircle className="w-3 h-3 text-green-500 mr-1" />
                  Drankjes (cava!), tapas, sup, kajak, zonsondergang
                </p>
              </div>
            </div>
          </div>

          <hr className="my-6 md:my-8 border-gray-200" />

          <div className="bg-gradient-to-br from-gray-100 to-cyan-50/50 rounded-lg p-2 md:p-6 border border-gray-200 shadow-inner">
            <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-800 mb-3">
              Nu online boeken
            </h2>

            <div className="mb-6 space-y-2 px-2">
              {[
                'Snel en eenvoudig reserveren',
                'Directe bevestiging',
                'Flexibele annuleringsvoorwaarden',
                'All-inclusive ervaringen',
                'Ervaren bemanning en persoonlijke aandacht',
                'Gedeeltelijke online betaling (€20 p.p. om te reserveren)',
              ].map((line) => (
                <div key={line} className="flex items-center text-sm text-gray-700">
                  <FiCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>{line}</span>
                </div>
              ))}
            </div>

            <TurbnbWidget
              id="turbnb-booking-trips-qr"
              companyId={2}
              productId={2}
              billingTermIds={[20, 21]}
              channelId={176}
              customProperties={{
                displayBillingTerm: true,
                showQuantity: true,
                quantity: 'Gasten',
                titleVariant: 'Modern',
                bookNow: 'NU RESERVEREN',
                confirmReservationAndPay: 'BEVESTIGEN & BETALEN',
                selectTimeLabel: 'Kies datum',
                childrenAge: '6 tot 12 jaar',
                infantAge: '0 tot 5 jaar',
                depositObservation: DEPOSIT_NL,
              }}
            />
          </div>

          <div className="text-center mt-8">
            <Link href="/boat-trips" className="text-xs text-cyan-700 hover:underline">
              Meer details over onze boottochten
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
