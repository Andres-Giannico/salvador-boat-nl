'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { FiMail, FiPhone, FiMapPin, FiCheckCircle, FiPlusCircle, FiBriefcase, FiUsers, FiSun, FiAward, FiCoffee, FiHelpCircle } from 'react-icons/fi';
import { GiPartyPopper, GiTeamIdea, GiSailboat } from 'react-icons/gi';

// Import reusable components
import TripGallery from '@/components/trips/TripGallery'; 
import PerfectForCard from '@/components/trips/PerfectForCard';
import FAQ from '@/components/trips/FAQ';

// Icon Map: String name to Icon Component
const iconMap: { [key: string]: IconType } = {
  FiBriefcase,
  GiTeamIdea,
  FiAward,
  FiCheckCircle,
  FiUsers,
  GiPartyPopper,
  FiSun,
  FiHelpCircle,
  FiCoffee,
};

// Interfaces for props (expecting icon name as string)
interface HighlightItemProp {
  icon: string;
  title: string;
  description: string;
}

interface IdealForItemProp {
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface IncludedFeature {
  name: string;
  description: string;
}

interface CorporateClientPageProps {
  highlights: HighlightItemProp[];
  idealFor: IdealForItemProp[];
  included: IncludedFeature[];
}

// Placeholder gallery images
const galleryImages = [
  { src: "/images/optimized/salvador-ibiza-boat-deck.webp", alt: "Zakelijke groep aan boord van Salvador Ibiza" },
  { src: "/images/optimized/salvador-ibiza-boat-drone-photo.webp", alt: "Luchtfoto van de Salvador — ideaal voor zakelijke events" },
  { src: "/images/optimized/salvador-ibiza-boat-aerial-view.webp", alt: "Ruim dek voor zakelijke bijeenkomsten" },
  { src: "/images/optimized/salvador-ibiza-luxury-boat.webp", alt: "Teambuilding in helder water" },
  { src: "/images/optimized/salvador-ibiza-boat-interior.webp", alt: "Ontspannen netwerken aan boord" },
  { src: "/images/optimized/es-vedra-island-ibiza-background.webp", alt: "Spectaculair decor voor zakelijke foto's" },
  { src: "/images/boat/private-new/tapasycavapopabarco_1.webp", alt: "Tapas en cava op de achterplecht" },
  { src: "/images/boat/private-new/tapasenbarco_1.webp", alt: "Selectie tapas op de boot" },
  { src: "/images/boat/private-new/sushiycavapopa_1.webp", alt: "Sushi en cava op de achterplecht" },
  { src: "/images/boat/private-new/interiorbarcosalvador_1.webp", alt: "Interieur van de Salvador" },
  { src: "/images/boat/private-new/Frutasenbarra_1.webp", alt: "Vers fruit aan de bar" },
  { src: "/images/boat/private-new/retretebarcoomg_1.webp", alt: "Moderne sanitaire ruimte aan boord" },
  { src: "/images/boat/private-new/tapasyfrutasenbarco_1.webp", alt: "Tapas en fruit op de boot" },
  { src: "/images/boat/private-new/retretebarco_1.webp", alt: "Nette badkamer aan boord" },
  { src: "/images/boat/private-new/popabarcosalvador_1.webp", alt: "Achterplecht van de Salvador met reddingsboei" },
  { src: "/images/boat/private-new/barcosalvadorinterior_1.webp", alt: "Zitgedeelte aan boord" },
  { src: "/images/boat/private-new/cavaenbarco_1.webp", alt: "Cava en glazen aan boord" },
  { src: "/images/boat/private-new/interiorbarcocubierta_1.webp", alt: "Overdekt dekgedeelte" }
];

// --- NEW: FAQ Data ---
const corporateFaqs = [
  {
    question: "Wat zit er in het zakelijke pakket?",
    answer: "Exclusief gebruik van de boot, kapitein en bemanning, standaard brandstof, standaard open bar (frisdrank, bier, wijn, cava, sangría, water), lichte hapjes en vers fruit, plus uitrusting voor paddleboarden, kajakken en snorkelen."
  },
  {
    question: "Kunnen activiteiten op maat?",
    answer: "Ja. We stemmen het programma af op jullie doelen — van teambuilding tot vrije tijd. Neem contact op voor de mogelijkheden."
  },
  {
    question: "Hoeveel personen?",
    answer: "De Salvador biedt plaats aan tot 35 gasten plus bemanning — ruim en comfortabel."
  },
  {
    question: "Vroeg boeken?",
    answer: "Sterk aanbevolen, vooral hoogseizoen (juni–september), om jullie gewenste datum vast te leggen."
  },
  {
    question: "Wat bij slecht weer?",
    answer: "Veiligheid voorop. Bij onveilige omstandigheden plannen we een andere datum of — indien niet mogelijk — volledige terugbetaling."
  },
];

// --- Client Component --- 
export default function CorporateEventsClientPage({ 
  highlights, 
  idealFor, 
  included 
}: CorporateClientPageProps) {

  // Animation Variants
  const stagger = { animate: { transition: { staggerChildren: 0.1 } } };
  const fadeIn = { 
    initial: { opacity: 0, y: 30 }, 
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] as const } } 
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 via-blue-50 to-white">

      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/optimized/salvador-ibiza-boat-aerial-view.webp" // Choose a professional/impressive hero image
            alt="Zakelijke charter op de Salvador Ibiza"
            fill
            priority
            className="object-cover object-center filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="relative z-10 container mx-auto px-4 pt-16"
        >
          <motion.h1 
            variants={fadeIn}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold mb-5 leading-tight tracking-tight drop-shadow-lg"
          >
            Geef je <span className="text-cyan-300">zakelijke event</span> een lift
          </motion.h1>
          <motion.p 
            variants={fadeIn} 
            className="text-lg md:text-2xl max-w-3xl mx-auto mb-10 text-blue-100 drop-shadow-md"
          >
            Onvergetelijke teamdagen, klantenmeetings of incentives aan boord van de Salvador Ibiza.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Link href="/private-boat-trips#direct-booking-section">
              <span className="inline-block bg-white text-teal-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Privécharter boeken
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-16 md:py-24">

        {/* Motivation & Connection Section (NEW) */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20 md:mb-28 max-w-4xl mx-auto"
        >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Motivatie & teambuilding op zee
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-600 mb-6">
              Organiseer een onvergetelijk bedrijfsuitje buiten kantoor — voor teambuilding, incentives of klantenrelaties. Onze boottochten zijn de perfecte setting om verbinding te versterken.
            </motion.p>
            <motion.p variants={fadeIn} className="text-lg text-gray-600">
              Breek de routine en geef je team een dag van ontspanning en energie. Wij regelen de details — van tijd tot maatwerk — voor een soepele ervaring.
            </motion.p>
        </motion.section>

        {/* Why Choose Us / Highlights Section (Slightly Updated Text) */}
        <motion.section 
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-20 md:mb-28 max-w-4xl mx-auto"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Een inspirerende omgeving voor je team</motion.h2>
          <motion.p variants={fadeIn} className="text-lg text-gray-600 mb-12">Professioneel en tegelijk ontspannen — met alle comfort om van de dag te genieten.</motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            {highlights.map((item, index) => {
              const IconComponent = iconMap[item.icon] || FiHelpCircle;
              return (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="text-left p-6 bg-white rounded-xl shadow-md border border-gray-100 flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Ideal For Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20 md:mb-28"
        >
           <PerfectForCard items={idealFor} title="Perfect voor jullie zakelijke behoeften" />
        </motion.section>
        
        {/* Included Features Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-gradient-to-br from-teal-50 via-white to-emerald-50 p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100 mb-20 md:mb-28"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-800 mb-10">Standaard zakelijk charterpakket</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-4xl mx-auto">
            {included.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center space-x-4"
              >
                <FiCheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
           <motion.div 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              transition={{ delay: 0.5, duration: 0.5 }} 
              className="text-center mt-10 pt-6 border-t border-teal-200/60"
            > 
              <p className="text-teal-700 mb-3">
                Meer nodig? Denk aan premium catering, sterke drank of verlengde vaartijd.
              </p>
              <Link href="/contact" className="font-medium text-teal-800 hover:text-teal-600 underline transition-colors">
                Neem contact op voor maatwerk
              </Link>
           </motion.div>
        </motion.section>

        {/* Gallery Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="mb-20 md:mb-28"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Jullie exclusieve locatie op zee</h2>
          <TripGallery images={galleryImages} title="" /> {/* Title removed as heading exists */}
        </motion.section>

        {/* --- NEW: FAQ Section --- */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="mb-20 md:mb-28"
        >
           <FAQ items={corporateFaqs} title="Veelgestelde vragen — zakelijk" />
        </motion.section>

        {/* Final CTA / Booking Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center bg-white p-10 md:p-16 rounded-2xl shadow-xl border border-gray-100"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Klaar om te imponeren?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Boek de Salvador Ibiza voor je volgende event — een ervaring die team en klanten niet vergeten.
          </p>
          <Link href="/private-boat-trips#direct-booking-section"> 
            <span className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-4 px-10 rounded-lg shadow-xl text-lg transition duration-300 transform hover:scale-105">
               Beschikbaarheid & boeken
            </span>
          </Link>
          <p className="mt-6 text-sm text-gray-500">Of <Link href="/contact" className="underline hover:text-blue-600">neem contact op</Link> bij vragen.</p>
        </motion.section>

      </div>
    </div>
  );
} 