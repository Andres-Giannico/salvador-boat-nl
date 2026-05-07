'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sunset, Users, Waves, Anchor, Compass, Star, Sun, Heart } from 'lucide-react';

const activities = [
  {
    title: 'Zonsondergangtrip',
    description: 'De mooiste zonsondergangen van Ibiza vanaf zee',
    href: '/boat-trips/sunset',
    icon: Sunset,
    color: 'from-orange-500 to-pink-500'
  },
  {
    title: 'San Antonio',
    description: 'Vaar door de baai van San Antonio met alle comfort',
    href: '/boat-trips/san-antonio',
    icon: Compass,
    color: 'from-blue-500 to-teal-500'
  },
  {
    title: 'Snorkelen',
    description: 'Onderwaterleven in het heldere water van Ibiza',
    href: '/boat-trips/snorkeling',
    icon: Waves,
    color: 'from-teal-500 to-cyan-500'
  },
  {
    title: 'Groepen',
    description: 'Ideaal voor grote groepen en feesten',
    href: '/boat-trips/groups',
    icon: Users,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Paddle surf',
    description: 'SUP-avontuur in de mooiste cala’s',
    href: '/boat-trips/paddle',
    icon: Anchor,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'All-inclusive',
    description: 'Alles inbegrepen, zorgeloos genieten',
    href: '/boat-trips/all-inclusive',
    icon: Star,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Dagtrip',
    description: 'Ontdek de beste plekken op zee',
    href: '/boat-trips/day',
    icon: Sun,
    color: 'from-amber-500 to-yellow-500'
  },
  {
    title: 'Gezin',
    description: 'Veilige, leuke activiteiten voor het hele gezin',
    href: '/boat-trips/family',
    icon: Heart,
    color: 'from-red-500 to-pink-500'
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ActivitiesSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-gradient-to-br from-sky-100 to-blue-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-br from-teal-100 to-cyan-200 rounded-full opacity-25 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-3 md:mb-4">
            Onze activiteiten
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Ontdek alle unieke ervaringen van Salvador Boat op het heldere water van Ibiza
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
        >
          {activities.map((activity) => {
            const IconComponent = activity.icon;
            return (
              <motion.div
                key={activity.href}
                variants={fadeInUp}
                className="group"
              >
                <Link href={activity.href}>
                  <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                    <div className={`w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br ${activity.color} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                        {activity.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-6 flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                      <span className="text-xs md:text-sm">Meer weten</span>
                      <svg className="w-3 h-3 md:w-4 md:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-8 md:mt-12 lg:mt-16"
        >
          <Link
            href="/boat-trips"
            className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold text-sm md:text-base rounded-full hover:from-blue-700 hover:to-teal-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl min-h-[48px] touch-manipulation"
          >
            <span>Alle trips bekijken</span>
            <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
