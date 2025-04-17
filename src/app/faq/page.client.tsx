"use client";

import Link from "next/link";
import { FiHelpCircle, FiAnchor, FiDollarSign } from 'react-icons/fi';
import { GiWaveSurfer, GiSailboat } from 'react-icons/gi';
import { motion } from 'framer-motion';

// Importamos nuestro componente reutilizable
import FAQ from "@/components/trips/FAQ";

// Categorías de preguntas frecuentes
const generalFaqs = [
  {
    question: "What kind of boat trips do you offer?",
    answer:
      "We offer a variety of experiences, including thrilling <Link href='/boat-trips/day-trip' className='text-cyan-600 hover:underline font-medium'>Day Trips</Link>, magical <Link href='/boat-trips/sunset-trip' className='text-orange-600 hover:underline font-medium'>Sunset Trips</Link>, and fully customizable <Link href='/private-charter' className='text-purple-600 hover:underline font-medium'>Private Charters</Link> to explore Ibiza's stunning coastline.",
  },
  {
    question: "How long do the trips last?",
    answer:
      "Our Day Trips usually last around 3 hours, and Sunset Trips are also about 3 hours. The duration of Private Charters can be tailored to your preferences (minimum 3 hours).",
  },
  {
    question: "What routes do you usually take?",
    answer:
      "We have popular suggested routes showcasing the best coves and beaches like Cala Gració, Cala Salada, Punta Galera, and views of Es Vedrà for sunset. On <Link href='/private-charter' className='text-purple-600 hover:underline font-medium'>Private Charters</Link>, the route is completely flexible and designed with you.",
  },
  {
    question: "Where is the meeting point?",
    answer:
      "The usual meeting point is the port of San Antonio, but it might vary slightly. We'll confirm the exact location and boarding time once your booking is confirmed.",
  },
];

const pricingFaqs = [
  {
    question: "What's included in the price?",
    answer:
      "Generally, the price for shared trips (Day/Sunset) includes the captain, fuel, unlimited drinks (water, soft drinks, beer, wine, cava, sangria), light meals/snacks, fruit, and snorkel gear. For <Link href='/private-charter' className='text-purple-600 hover:underline font-medium'>Private Charters</Link>, inclusions can be customized. Check the specific trip page for full details!",
  },
  {
    question: "Can we bring our own food and drinks?",
    answer:
      "Yes! You're welcome to bring additional food and drinks if you wish, especially on private charters. However, we already provide a great selection on board.",
  },
  {
    question: "How can I book a trip?",
    answer:
      "You can easily book through our website by selecting your desired <Link href='/boat-trips' className='text-cyan-600 hover:underline font-medium'>Trip</Link> or contacting us directly for a <Link href='/private-charter' className='text-purple-600 hover:underline font-medium'>Private Charter</Link>. You can also reach us via our <Link href='/contact' className='text-blue-600 hover:underline font-medium'>Contact Page</Link>.",
  },
  {
    question: "What's the cancellation policy?",
    answer:
      "Our cancellation policy varies depending on the trip type and notice period. Generally, we offer full or partial refunds if you cancel sufficiently in advance. Check our terms and conditions or contact us for specific details.",
  },
];

const onboardFaqs = [
  {
    question: "What's the maximum capacity of the boat?",
    answer:
      "Our boats have different capacities. Please check the specific boat description on the <Link href='/boat-trips' className='text-cyan-600 hover:underline font-medium'>Trips</Link> or <Link href='/private-charter' className='text-purple-600 hover:underline font-medium'>Private Charter</Link> pages for the maximum number of passengers allowed.",
  },
  {
    question: "Is there a toilet on board?",
    answer:
      "Yes, our boats are equipped with a marine toilet (WC) for your comfort.",
  },
  {
    question: "Is there shade on the boat?",
    answer:
      "Yes, all our boats have a canopy (bimini top) that provides ample shade to protect you from the sun.",
  },
  {
    question: "Is there music on board?",
    answer:
      "Yes, our boats have sound systems with Bluetooth connectivity, so you can play your own music and set the perfect vibe.",
  },
];

const safetyFaqs = [
  {
    question: "Do we need any prior boating experience?",
    answer:
      "Not at all! Our trips include an expert captain, so all you need to do is relax and enjoy the ride.",
  },
  {
    question: "Is it safe for children?",
    answer:
      "Absolutely! Our boats are safe for families and children. We have life jackets in different sizes. Just let us know the children's ages when booking.",
  },
  {
    question: "What should we bring?",
    answer:
      "We recommend bringing swimwear, a towel, sunscreen, a hat, sunglasses, and your camera to capture those unforgettable moments. If you're prone to seasickness, consider taking preventive medication beforehand.",
  },
  {
    question: "What happens if there's bad weather?",
    answer:
      "Safety is our top priority. If weather conditions are unsafe for sailing (decision made by the captain), we'll try to reschedule your trip for another day. If that's not possible, we'll offer a full refund.",
  },
];

const activityFaqs = [
  {
    question: "Can we do watersports?",
    answer:
      "We offer free snorkeling gear. Other watersports equipment like paddleboards and kayaks are included in our Day and Sunset trips. For <Link href='/private-charter' className='text-purple-600 hover:underline font-medium'>Private Charters</Link>, additional equipment like Seabobs might be available upon request at an extra cost.",
  },
  {
    question: "Are pets allowed on board?",
    answer:
      "Generally, pets are not allowed on shared trips for the comfort of all passengers. On <Link href='/private-charter' className='text-purple-600 hover:underline font-medium'>Private Charters</Link>, we might consider it on a case-by-case basis. Please ask us beforehand.",
  },
  {
    question: "Do you speak languages other than English?",
    answer:
      "Yes, our crew speaks fluent Spanish, and often other languages like Italian or French. Don't hesitate to ask!",
  },
  {
    question: "What makes Salvador Ibiza so special?",
    answer:
      "We are passionate about the sea and Ibiza! We offer high-quality boats, exceptional personalized service, and deep local knowledge to ensure you have an unforgettable experience. Read more <Link href='/about' className='text-blue-600 hover:underline font-medium'>About Us</Link>!",
  },
];

// Refined Category Icon component
function CategoryIcon({ 
  icon, 
  title, 
  className = "" 
}: { 
  icon: React.ReactNode; 
  title: string; 
  className?: string; 
}) {
  return (
    // Added group for hover effects, refined styling
    <div className={`group flex flex-col items-center text-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 ${className}`}>
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-3 shadow-sm group-hover:shadow-md transition-shadow duration-200">
        {icon} 
      </div>
      <h3 className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-200">{title}</h3>
    </div>
  );
}

export default function FAQClientPage() {
  // Animation for Hero section
  const heroAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };
  
  // Animation for Category Icons wrapper
  const categoriesAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  // Animation for individual Category Icons
  const iconAnimation = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
  };

  // Animation for FAQ sections
  const sectionAnimation = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-gradient-to-b from-white via-sky-50 to-blue-50">
      {/* Hero Section - Refined styling */}
      <section className="relative py-24 md:py-32 text-center overflow-hidden">
        {/* Soft background gradient elements */}
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
              <span className="text-gray-900">Frequently Asked</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Find answers to your questions about our boat trips, bookings, and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Category Navigation - Added animation */}
          <motion.div 
            variants={categoriesAnimation}
            initial="initial"
            animate="animate"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 mb-16 md:mb-20 max-w-5xl mx-auto"
          >
            <motion.div variants={iconAnimation}>
              <CategoryIcon 
                icon={<GiSailboat className="w-8 h-8 text-blue-600" />} 
                title="General" 
              />
            </motion.div>
            <motion.div variants={iconAnimation}>
              <CategoryIcon 
                icon={<FiDollarSign className="w-7 h-7 text-green-600" />} 
                title="Pricing" 
              />
             </motion.div>
             <motion.div variants={iconAnimation}>
              <CategoryIcon 
                icon={<FiAnchor className="w-7 h-7 text-cyan-600" />} 
                title="On Board" 
              />
            </motion.div>
            <motion.div variants={iconAnimation}>
              <CategoryIcon 
                icon={<FiHelpCircle className="w-7 h-7 text-orange-600" />} 
                title="Safety" 
              />
            </motion.div>
             <motion.div variants={iconAnimation}>
              <CategoryIcon 
                icon={<GiWaveSurfer className="w-8 h-8 text-purple-600" />} 
                title="Activities" 
              />
            </motion.div>
          </motion.div>

          {/* FAQs by Category - Refined section headers */}
          <div className="space-y-16 max-w-4xl mx-auto">
            <motion.section variants={sectionAnimation} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}>
              <div className="flex items-center mb-6 pb-2 border-b border-gray-200">
                <GiSailboat className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">General Questions</h2>
              </div>
              <FAQ items={generalFaqs} />
            </motion.section>

            <motion.section variants={sectionAnimation} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}>
              <div className="flex items-center mb-6 pb-2 border-b border-gray-200">
                <FiDollarSign className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Pricing & Booking</h2>
              </div>
              <FAQ items={pricingFaqs} />
            </motion.section>

             <motion.section variants={sectionAnimation} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}>
              <div className="flex items-center mb-6 pb-2 border-b border-gray-200">
                <FiAnchor className="w-5 h-5 text-cyan-600 mr-3 flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">On Board Experience</h2>
              </div>
              <FAQ items={onboardFaqs} />
            </motion.section>

            <motion.section variants={sectionAnimation} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}>
              <div className="flex items-center mb-6 pb-2 border-b border-gray-200">
                <FiHelpCircle className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Safety & Preparation</h2>
              </div>
              <FAQ items={safetyFaqs} />
            </motion.section>

             <motion.section variants={sectionAnimation} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}>
              <div className="flex items-center mb-6 pb-2 border-b border-gray-200">
                <GiWaveSurfer className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Activities & More</h2>
              </div>
              <FAQ items={activityFaqs} />
            </motion.section>
          </div>
          
          {/* CTA Section - Refined design */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-20 md:mt-28 max-w-4xl mx-auto"
          >
            <div className="relative bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl overflow-hidden shadow-lg p-8 md:p-12">
               {/* Subtle background pattern */}
               <div 
                 className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath fill='%23ffffff' fill-opacity='0.4' d='M0 0h10v10H0V0zm10 10h10v10H10V10z'/%3E%3C/svg%3E")`
                 }}
               ></div>
              <div className="relative z-10 text-center md:flex items-center justify-between">
                <div className="md:max-w-lg mb-6 md:mb-0 md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Still have questions?</h2>
                  <p className="text-blue-100 text-base md:text-lg leading-relaxed">
                    We&apos;re here to help! Contact us directly for personalized assistance.
                  </p>
                </div>
                <Link href="/contact">
                  <span className="inline-flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
                    Contact Us
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