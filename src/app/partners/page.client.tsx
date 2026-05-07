'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FiCheck,
  FiMonitor,
  FiClock,
  FiTrendingUp,
  FiShare2,
  FiDollarSign,
  FiStar,
  FiZap,
  FiBriefcase,
  FiGift,
} from 'react-icons/fi';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

// Features for Influencers (Turbo Bookings)
const influencerFeatures = [
  {
    icon: <FiShare2 className="w-6 h-6 text-pink-500" />,
    title: "Snel aan de slag",
    description: "Registreer in minuten en ontvang direct je unieke boekingslink."
  },
  {
    icon: <FiDollarSign className="w-6 h-6 text-green-500" />,
    title: "Aantrekkelijke commissies",
    description: "Verdien circa 25% commissie op elke ticketverkoop via jouw link."
  },
  {
    icon: <FiZap className="w-6 h-6 text-yellow-500" />,
    title: "Direct je eigen URL",
    description: "Ons Turbo-systeem maakt automatisch je persoonlijke link. Deel en verdien."
  },
  {
    icon: <FiTrendingUp className="w-6 h-6 text-purple-500" />,
    title: "Maximaliseer je bereik",
    description: "Zet je community om in echte inkomsten — voor influencers groot en klein."
  }
];

// Features for Business Partners (Turbookings)
const businessFeatures = [
  {
    icon: <FiClock className="w-6 h-6 text-blue-500" />,
    title: "Live beschikbaarheid",
    description: "Direct toegang tot onze actuele agenda. Minder heen-en-weer via telefoon."
  },
  {
    icon: <FiMonitor className="w-6 h-6 text-teal-500" />,
    title: "Widget op jouw site",
    description: "Integreer onze boekingswidget op je eigen website en houd klanten on-site."
  },
  {
    icon: <FiBriefcase className="w-6 h-6 text-indigo-500" />,
    title: "Direct in ons systeem",
    description: "Boekingen komen meteen binnen — ideaal voor conciërges en agentschappen."
  },
  {
    icon: <FiGift className="w-6 h-6 text-red-500" />,
    title: "Meer waarde, meer omzet",
    description: "Bied premium ervaringen aan met concurrerende commissies."
  }
];

const testimonials = [
  {
    quote: "Turbo Bookings maakte monetiseren super eenvoudig. Ik ben heel tevreden met het resultaat!",
    author: "Alex M."
  },
  {
    quote: "Gamechanger: stabiele commissie met weinig moeite. Een aanrader voor influencers.",
    author: "Jamie L."
  },
  {
    quote: "Geautomatiseerde URL's zijn top. Ik verdien zelfs wanneer ik slaap!",
    author: "Casey R."
  }
];

export default function PartnersClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Partner met Salvador Ibiza — groei je omzet
            </h1>
            <p className="text-xl text-gray-700 mb-10">
              Voor influencers én bedrijven hebben we een partnershipprogramma op maat.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#influencers" 
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full font-semibold hover:from-pink-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                <FiStar className="inline mr-2 mb-1" /> Ik ben influencer
              </a>
              <a 
                href="#businesses" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                 <FiBriefcase className="inline mr-2 mb-1"/> Ik ben een bedrijf
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Influencer Program Section */}
      <section id="influencers" className="py-20 bg-gradient-to-b from-white via-pink-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-red-500 bg-clip-text text-transparent">
              <FiStar className="inline mr-2 mb-1" /> Voor influencers: meer verdienen met Turbo Bookings
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Zet je bereik om in inkomsten met ons Turbo Bookings-programma — eenvoudig, geautomatiseerd en lonend.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {influencerFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-xl border border-pink-100 transform hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-pink-100 to-red-100 p-3 rounded-full w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
             <h3 className="text-2xl font-bold mb-4 text-gray-800">Zo werkt het (simpel)</h3>
             <ol className="text-left inline-block max-w-md space-y-2 text-gray-600">
                 <li className="flex items-start"><span className="font-bold mr-2 text-pink-600">1.</span> Basisgegevens & avatar invullen.</li>
                 <li className="flex items-start"><span className="font-bold mr-2 text-pink-600">2.</span> Direct je unieke boekings-URL ontvangen.</li>
                 <li className="flex items-start"><span className="font-bold mr-2 text-pink-600">3.</span> De link delen op je socials.</li>
                 <li className="flex items-start"><span className="font-bold mr-2 text-pink-600">4.</span> ~25% commissie per ticket!</li>
             </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Wat Turbo-sellers zeggen</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <p className="text-gray-600 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <p className="font-semibold text-pink-600">— {testimonial.author}</p>
                </motion.div>
              ))}
            </div>
           </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1}}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a 
              href="https://wa.me/34871181393?text=Hoi!%20Ik%20wil%20meer%20weten%20over%20het%20Turbo%20Bookings%20influencerprogramma."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full font-bold hover:from-pink-600 hover:to-red-600 transition-all duration-300 shadow-xl hover:shadow-2xl text-xl transform hover:scale-105"
            >
              Word nu Turbo-seller!
            </a>
          </motion.div>
        </div>
      </section>

      {/* Business Partner Section */}
      <section id="businesses" className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
               <FiBriefcase className="inline mr-2 mb-1"/> Voor bedrijven: versterk je aanbod
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Partner via Turbookings en bied Salvador Ibiza direct aan je klanten aan (hotels, conciërges, agentschappen, websites).
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {businessFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-xl border border-blue-100 transform hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-3 rounded-full w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

           {/* Widget Demo Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-800">De Turbookings-widget</h3>
              <p className="text-gray-600">
                Integreer ons reserveringssysteem direct op je website:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center"><FiCheck className="text-green-500 mr-2" /> Aanpasbaar aan je merk.</li>
                <li className="flex items-center"><FiCheck className="text-green-500 mr-2" /> Live beschikbaarheid & prijzen.</li>
                <li className="flex items-center"><FiCheck className="text-green-500 mr-2" /> Eenvoudig boeken voor je klanten.</li>
                <li className="flex items-center"><FiCheck className="text-green-500 mr-2" /> Hogere conversie & extra waarde.</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-blue-200 to-purple-200 rounded-2xl p-1 shadow-lg">
                <Image
                  src="/images/optimized/turbobookings-salvador-ibiza.webp"
                  alt="Turbookings-widget integratie Salvador Ibiza"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
             <h3 className="text-2xl font-bold mb-4 text-gray-800">Aan de slag</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Registreren", description: "Vul het partnerformulier in." },
                  { title: "Verifiëren & trainen", description: "Toegang krijgen en online training volgen." },
                  { title: "Verkopen!", description: "Widget integreren en onze ervaringen aanbieden." }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-left"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-3 text-sm font-bold">
                      {index + 1}
                    </div>
                    <h4 className="text-lg font-semibold mb-1 text-gray-800">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </motion.div>
                ))}
             </div>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1}}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a 
              href="https://wa.me/34871181393?text=Hoi!%20Ik%20wil%20meer%20weten%20over%20het%20Turbookings%20bedrijfspartnerprogramma."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl text-xl transform hover:scale-105"
            >
              Word vandaag partner!
            </a>
            <p className="text-sm text-gray-500 mt-4">Of mail naar partners@salvadoribiza.com</p>
          </motion.div>
        </div>
      </section>

    </div>
  );
} 