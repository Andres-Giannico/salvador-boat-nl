"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { FiHelpCircle, FiAnchor, FiDollarSign } from 'react-icons/fi';
import { GiWaveSurfer, GiSailboat } from 'react-icons/gi';
import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

import FAQ from "@/components/trips/FAQ";

const generalFaqs = [
  {
    question: "Welke boottochten bieden jullie aan?",
    answer: (
      <>
        We bieden levendige gedeelde trips zoals onze <Link href='/boat-trips/day-trip' className='text-cyan-600 hover:underline font-medium'>gemengde dagtocht</Link> en de magische <Link href='/boat-trips/sunset-trip' className='text-orange-600 hover:underline font-medium'>zonsondergangtrip</Link>. Daarnaast volledig aanpasbare <Link href='/private-boat-trips' className='text-purple-600 hover:underline font-medium'>privétochten</Link>.
      </>
    ),
  },
  {
    question: "Hoe lang duren de trips?",
    answer:
      "Dag- en zonsondergangtrips duren ongeveer 3 uur. Privécharters zijn op maat (minimaal 3 uur).",
  },
  {
    question: "Welke routes varen jullie?",
    answer: (
      <>
        Onze gedeelde tours gaan naar de westkust (richting Cala Conta) of noordkust (richting Sa Foradada), langs cala’s zoals Cala Gració en Cala Salada. De kapitein kiest dagelijks de beste route. Zie onze <Link href='/routes' className='text-blue-600 hover:underline font-medium'>routepagina</Link>. Bij <Link href='/private-boat-trips' className='text-purple-600 hover:underline font-medium'>privé</Link> is de route bespreekbaar.
      </>
    ),
  },
  {
    question: "Waar is het meetingpoint?",
    answer: (
      <>
        De haven van San Antonio. Exacte locatie op onze <Link href='/contact' className='text-blue-600 hover:underline font-medium'>contactpagina met kaart</Link>. Instaptijd bevestigen we na boeking.
      </>
    ),
  },
];

const pricingFaqs = [
  {
    question: "Wat zit er in de prijs?",
    answer: (
      <>
        Gedeelde trips: kapitein, bemanning, brandstof, unlimited open bar, Spaanse tapas & fruit, paddleboards, kajaks & snorkelen. <Link href='/private-boat-trips' className='text-purple-600 hover:underline font-medium'>Privé</Link> heeft vergelijkbare basis met upgrades. Check altijd de specifieke trip-pagina.
      </>
    ),
  },
  {
    question: "Mag eigen eten en drinken?",
    answer: (
      <>
        Eigen eten mag, vooral bij <Link href='/private-boat-trips' className='text-purple-600 hover:underline font-medium'>privé</Link>. <strong>Eigen drank is niet toegestaan</strong> — wij voorzien een ruime open bar. Verzoeken zoals taart voor charter in overleg.
      </>
    ),
  },
  {
    question: "Hoe boek ik?",
    answer: (
      <>
        <Link href='/book-now' className='text-blue-600 hover:underline font-medium'>Online boeken</Link> via de widgets met live beschikbaarheid op <Link href='/boat-trips/day-trip' className='text-cyan-600 hover:underline font-medium'>dagtrip</Link>, <Link href='/boat-trips/sunset-trip' className='text-orange-600 hover:underline font-medium'>zonsondergang</Link> en <Link href='/private-boat-trips' className='text-purple-600 hover:underline font-medium'>privé</Link>. Je ontvangt een voucher met details.
      </>
    ),
  },
  {
    question: "Wat is het annuleringsbeleid?",
    answer:
      "Het beleid verschilt per trip en termijn. Meestal restitutie bij tijdige annulering. Zie algemene voorwaarden of neem contact op.",
  },
];

const onboardFaqs = [
  {
    question: "Wat is de maximale capaciteit?",
    answer: (
      <>
        Zie onze <Link href='/boat-trips' className='text-blue-600 hover:underline font-medium'>trips</Link> of <Link href='/private-boat-trips' className='text-purple-600 hover:underline font-medium'>privé</Link>-pagina voor het maximaal aantal passagiers.
      </>
    ),
  },
  {
    question: "Is er een toilet aan boord?",
    answer:
      "Ja, er zijn scheepstoiletten (WC).",
  },
  {
    question: "Is er schaduw op de boot?",
    answer:
      "Ja, alle boten hebben een bimini voor schaduw.",
  },
  {
    question: "Is er muziek?",
    answer:
      "Ja, bluetooth-geluidssysteem om je eigen muziek af te spelen.",
  },
];

const safetyFaqs = [
  {
    question: "Heb ik vaarervaring nodig?",
    answer:
      "Nee. Onze kapitein vaart; jij ontspant.",
  },
  {
    question: "Is het veilig voor kinderen?",
    answer:
      "Ja. Verschillende maten reddingsvesten; geef leeftijden door bij boeking.",
  },
  {
    question: "Wat moet ik meenemen?",
    answer:
      "Zwemkleding, handdoek, zonnebrand, pet, zonnebril, camera. Bij zeeziekte: voorbereiden.",
  },
  {
    question: "Wat bij slecht weer?",
    answer:
      "Veiligheid eerst. Bij onveilige omstandigheden (kapitein) proberen we te verzetten; anders volledige terugbetaling.",
  },
];

const activityFaqs = [
  {
    question: "Zijn watersporten inbegrepen?",
    answer: (
      <>
        Ja: paddleboards, 2 kajaks en snorkelset tijdens zwemstops.
      </>
    ),
  },
  {
    question: "Zijn huisdieren toegestaan?",
    answer: (
      <>
        Niet op gedeelde dag-/zonsondergangtrips. Bij <Link href='/private-boat-trips' className='text-purple-600 hover:underline font-medium'>privé</Link> soms na overleg.
      </>
    ),
  },
  {
    question: "Welke talen spreekt de bemanning?",
    answer:
      "O.a. Nederlands, Engels en Spaans; vaak ook Italiaans of Frans.",
  },
  {
    question: "Wat maakt Salvador bijzonder?",
    answer: (
      <>
        Traditionele houten boot, prachtige routes, royale inclusions en een vriendelijke bemanning. Lees meer <Link href='/about' className='text-blue-600 hover:underline font-medium'>over ons</Link>.
      </>
    ),
  },
];

function CategoryIcon({
  icon,
  title,
  className = ""
}: {
  icon: ReactNode;
  title: string;
  className?: string;
}) {
  return (
    <div className={`group flex flex-col items-center text-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 ${className}`}>
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-3 shadow-sm group-hover:shadow-md transition-shadow duration-200">
        {icon}
      </div>
      <h3 className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-200">{title}</h3>
    </div>
  );
}

export default function FAQClientPage() {
  const heroAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } }
  };

  const categoriesAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const iconAnimation = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" as const } }
  };

  const sectionAnimation = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <div className="bg-gradient-to-b from-white via-sky-50 to-blue-50">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>
      </div>

      <section className="relative py-24 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
          <div className="absolute w-full h-full bg-gradient-to-b from-white via-sky-50/50 to-transparent"></div>
          <div className="absolute w-[50vw] h-[50vh] rounded-full bg-cyan-200/20 -top-1/4 -left-1/4 blur-3xl opacity-70"></div>
          <div className="absolute w-[40vw] h-[40vh] rounded-full bg-blue-200/20 -bottom-1/4 -right-1/4 blur-3xl opacity-70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={heroAnimation}
            initial="initial"
            animate="animate"
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-5">
              <span className="text-gray-900">Veelgestelde</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">vragen</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Antwoorden over boottochten, boekingen en service.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            variants={categoriesAnimation}
            initial="initial"
            animate="animate"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 mb-16 md:mb-20 max-w-5xl mx-auto"
          >
            <motion.div variants={iconAnimation}>
              <CategoryIcon
                icon={<GiSailboat className="w-8 h-8 text-blue-600" />}
                title="Algemeen"
              />
            </motion.div>
            <motion.div variants={iconAnimation}>
              <CategoryIcon
                icon={<FiDollarSign className="w-7 h-7 text-green-600" />}
                title="Prijzen"
              />
            </motion.div>
            <motion.div variants={iconAnimation}>
              <CategoryIcon
                icon={<FiAnchor className="w-7 h-7 text-cyan-600" />}
                title="Aan boord"
              />
            </motion.div>
            <motion.div variants={iconAnimation}>
              <CategoryIcon
                icon={<FiHelpCircle className="w-7 h-7 text-orange-600" />}
                title="Veiligheid"
              />
            </motion.div>
            <motion.div variants={iconAnimation}>
              <CategoryIcon
                icon={<GiWaveSurfer className="w-8 h-8 text-purple-600" />}
                title="Activiteiten"
              />
            </motion.div>
          </motion.div>

          <div className="space-y-16 max-w-4xl mx-auto">
            <motion.section variants={sectionAnimation} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}>
              <div className="flex items-center mb-6 pb-2 border-b border-gray-200">
                <GiSailboat className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Algemeen</h2>
              </div>
              <FAQ items={generalFaqs} />
            </motion.section>

            <motion.section variants={sectionAnimation} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}>
              <div className="flex items-center mb-6 pb-2 border-b border-gray-200">
                <FiDollarSign className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Prijzen & boeken</h2>
              </div>
              <FAQ items={pricingFaqs} />
            </motion.section>

            <motion.section variants={sectionAnimation} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}>
              <div className="flex items-center mb-6 pb-2 border-b border-gray-200">
                <FiAnchor className="w-5 h-5 text-cyan-600 mr-3 flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Aan boord</h2>
              </div>
              <FAQ items={onboardFaqs} />
            </motion.section>

            <motion.section variants={sectionAnimation} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}>
              <div className="flex items-center mb-6 pb-2 border-b border-gray-200">
                <FiHelpCircle className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Veiligheid & voorbereiding</h2>
              </div>
              <FAQ items={safetyFaqs} />
            </motion.section>

            <motion.section variants={sectionAnimation} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}>
              <div className="flex items-center mb-6 pb-2 border-b border-gray-200">
                <GiWaveSurfer className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Activiteiten & meer</h2>
              </div>
              <FAQ items={activityFaqs} />
            </motion.section>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-20 md:mt-28 max-w-4xl mx-auto"
          >
            <div className="relative bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl overflow-hidden shadow-lg p-8 md:p-12">
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath fill='%23ffffff' fill-opacity='0.4' d='M0 0h10v10H0V0zm10 10h10v10H10V10z'/%3E%3C/svg%3E")`
                }}
              ></div>
              <div className="relative z-10 text-center md:flex items-center justify-between">
                <div className="md:max-w-lg mb-6 md:mb-0 md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Nog vragen?</h2>
                  <p className="text-blue-100 text-base md:text-lg leading-relaxed">
                    Neem gerust contact op voor persoonlijk advies.
                  </p>
                </div>
                <Link href="/contact">
                  <span className="inline-flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
                    Contact
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
