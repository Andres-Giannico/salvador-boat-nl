'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiAnchor, FiHeart, FiSunrise, FiUsers } from 'react-icons/fi';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

const values = [
  {
    icon: <FiHeart className="w-6 h-6" />,
    title: "Passie voor kwaliteit",
    description: "We leveren top service in elk detail van je ervaring."
  },
  {
    icon: <FiAnchor className="w-6 h-6" />,
    title: "Maritieme expertise",
    description: "Jarenlange ervaring op het water rond Ibiza — veilig en onvergetelijk."
  },
  {
    icon: <FiSunrise className="w-6 h-6" />,
    title: "Unieke ervaringen",
    description: "Magische momenten die je niet snel vergeet."
  },
  {
    icon: <FiUsers className="w-6 h-6" />,
    title: "Gastgericht",
    description: "Jouw tevredenheid en comfort staan voorop."
  }
];

export default function AboutClientPage() {
  // Animation variants for title stagger
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.08,
      },
    },
  }
  
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const titleText = "Het verhaal van Salvador Ibiza";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Full Screen Image Background */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/optimized/salvador-ibiza-boat-aerial-shot.webp"
            alt="Luchtfoto Salvador Ibiza — over ons"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-shadow-lg"
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            {/* Staggered title animation */}
            {titleText.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              )
            })}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            Onvergetelijke vaarervaringen in het hart van de Middellandse Zee
          </motion.p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold mb-4">Onze reis</h2>
              <p className="text-gray-600 leading-relaxed">
                Salvador Ibiza ontstond uit liefde voor de Middellandse Zee en het magische Ibiza. Wat begon als droom om het heldere water te delen, groeide uit tot een premium charterervaring met luxe, comfort en momenten die blijven hangen.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Onze focus op kwaliteit en details maakt ons een geliefde keuze voor wie op zoek is naar iets bijzonders op zee.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-1">
                <Image
                  src="/images/optimized/salvador-ibiza-boat-interior.webp"
                  alt="Salvador Ibiza aan boord"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-3 rounded-full w-fit mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* The Boat Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative lg:order-2"
            >
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-1">
                <Image
                  src="/images/optimized/salvador-ibiza-boat-aerial-view.webp"
                  alt="Boot Salvador Ibiza"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 lg:order-1"
            >
              <h2 className="text-3xl font-bold mb-4">De Salvador-ervaring</h2>
              <p className="text-gray-600 leading-relaxed">
                Stap aan boord van ons zorgvuldig onderhouden schip: moderne voorzieningen met klassieke uitstraling. Ruime dekken, comfortabele zitplekken en eersteklas veiligheid — elke tocht wordt comfortabel én memorabel.
              </p>
              <ul className="space-y-3">
                {[
                  "Ruim zonnedek om te ontspannen",
                  "Premium geluidssysteem",
                  "Comfortabele zitplekken",
                  "Watersportmateriaal",
                  "Moderne veiligheidsvoorzieningen"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <FiAnchor className="text-blue-500 w-5 h-5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Team Section */}
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold mb-4">Ontmoet de bemanning</h2>
              <p className="text-gray-600 leading-relaxed">
                Onze ervaren, enthousiaste crew is het hart van Salvador Ibiza. Ze kennen de lokale wateren en zorgen voor veilige, comfortabele en onvergetelijke tochten.
              </p>
              <div className="mt-8">
                <Image
                  src="/images/crew-boat.jpeg"
                  alt="Bemanning Salvador Ibiza"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-xl object-cover  mx-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 