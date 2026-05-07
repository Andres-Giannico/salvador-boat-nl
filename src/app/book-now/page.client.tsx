'use client';

import Link from 'next/link';
import TurbnbWidget from '@/components/booking/TurbnbWidget';
import { FiInfo, FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

const DEPOSIT_NL =
  'Na je boeking ontvang je een bevestiging met ontmoetingspunt en tijd. Controleer of telefoon en e-mail kloppen. Aanbetaling €20 per persoon; het restant aan boord.';

const WIDGET_NL = {
  displayBillingTerm: true,
  showQuantity: true,
  quantity: 'Gasten',
  titleVariant: 'Modern',
  bookNow: 'NU RESERVEREN',
  confirmReservationAndPay: 'BEVESTIGEN & BETALEN',
  selectTimeLabel: 'Kies tijd',
  selectExperienceLabel: 'Soort ervaring',
  addonsLabel: "Extra's",
  childrenAge: '6 tot 12 jaar',
  infantAge: '0 tot 5 jaar',
  depositObservation: DEPOSIT_NL,
} as const;

export default function BookNowClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-orange-100/50 py-28 pb-24 md:py-36 md:pb-32">
      <div className="bg-gray-50 border-b border-gray-200 fixed top-20 md:top-24 left-0 w-full z-10">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 md:mb-16"
        >
          Boek je{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Ibiza-avontuur
          </span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 overflow-hidden flex flex-col"
          >
            <div className="border-t-4 border-cyan-500"></div>
            <div className="p-6 md:p-8 flex flex-col">
              <div className="flex items-center gap-4 mb-5">
                <span className="bg-cyan-100 p-2 rounded-full inline-block">
                  <FiSun className="w-7 h-7 text-cyan-600" />
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Dagtocht</h2>
              </div>
              <div className="prose prose-sm sm:prose-base text-gray-600 mb-4">
                <p>
                  Doe mee aan onze populaire dagtocht! Geniet van het water rond Ibiza van{' '}
                  <strong>14:00–17:00</strong>. Inclusief drankjes, hapjes, zwemstops en goede sfeer.
                </p>
              </div>
              <Link
                href="/boat-trips/day-trip"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors mb-6 mt-4 self-start"
              >
                <FiInfo className="w-4 h-4" />
                <span>Meer over de dagtocht</span>
              </Link>

              <div className="mt-auto bg-gradient-to-br from-gray-100 to-cyan-50/50 rounded-lg p-4 border border-gray-200 shadow-inner">
                <h3 className="text-lg font-semibold text-center text-gray-700 mb-3">
                  Dagtocht boeken
                </h3>
                <TurbnbWidget
                  id="turbnb-booking-day"
                  companyId={2}
                  productId={2}
                  billingTermIds={[20]}
                  channelId={11}
                  className="min-h-[400px]"
                  customProperties={{ ...WIDGET_NL }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 overflow-hidden flex flex-col"
          >
            <div className="border-t-4 border-orange-500"></div>
            <div className="p-6 md:p-8 flex flex-col">
              <div className="flex items-center gap-4 mb-5">
                <span className="bg-orange-100 p-2 rounded-full inline-block">
                  <FiMoon className="w-7 h-7 text-orange-600" />
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Zonsondergangtocht</h2>
              </div>
              <div className="prose prose-sm sm:prose-base text-gray-600 mb-4">
                <p>
                  Beleef de magische zonsondergang! Vaar mee van <strong>18:30–21:30</strong> (tijden
                  variëren per seizoen) voor een onvergetelijke avond op de Middellandse Zee.
                </p>
              </div>
              <Link
                href="/boat-trips/sunset-trip"
                className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-800 transition-colors mb-6 mt-4 self-start"
              >
                <FiInfo className="w-4 h-4" />
                <span>Meer over de zonsondergangtocht</span>
              </Link>

              <div className="mt-auto bg-gradient-to-br from-gray-100 to-orange-50/50 rounded-lg p-4 border border-gray-200 shadow-inner">
                <h3 className="text-lg font-semibold text-center text-gray-700 mb-3">
                  Zonsondergang boeken
                </h3>
                <TurbnbWidget
                  id="turbnb-booking-sunset"
                  companyId={2}
                  productId={2}
                  billingTermIds={[21]}
                  channelId={11}
                  className="min-h-[400px]"
                  customProperties={{ ...WIDGET_NL }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
