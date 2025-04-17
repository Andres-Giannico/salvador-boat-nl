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

// Componente de categoría con icono
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
    <div className={`flex flex-col items-center ${className}`}>
      <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-2">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </div>
  );
}

export default function FAQClientPage() {
  return (
    <div className="bg-gradient-to-b from-sky-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute w-full h-full bg-blue-500/10"></div>
          <div className="absolute w-96 h-96 rounded-full bg-cyan-400/20 -top-12 -left-20 blur-3xl"></div>
          <div className="absolute w-96 h-96 rounded-full bg-blue-300/20 bottom-0 right-0 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Find the answers to your questions about our boat trips, bookings, and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Category Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
            <CategoryIcon 
              icon={<GiSailboat className="w-8 h-8 text-blue-500" />} 
              title="General" 
            />
            <CategoryIcon 
              icon={<FiDollarSign className="w-7 h-7 text-green-500" />} 
              title="Pricing" 
            />
            <CategoryIcon 
              icon={<FiAnchor className="w-7 h-7 text-cyan-500" />} 
              title="On Board" 
            />
            <CategoryIcon 
              icon={<FiHelpCircle className="w-7 h-7 text-orange-500" />} 
              title="Safety" 
            />
            <CategoryIcon 
              icon={<GiWaveSurfer className="w-8 h-8 text-purple-500" />} 
              title="Activities" 
            />
          </div>

          {/* FAQs by Category */}
          <div className="space-y-16 max-w-4xl mx-auto">
            <section>
              <div className="flex items-center mb-6">
                <GiSailboat className="w-7 h-7 text-blue-500 mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">General Questions</h2>
              </div>
              <FAQ items={generalFaqs} />
            </section>

            <section>
              <div className="flex items-center mb-6">
                <FiDollarSign className="w-6 h-6 text-green-500 mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Pricing & Booking</h2>
              </div>
              <FAQ items={pricingFaqs} />
            </section>

            <section>
              <div className="flex items-center mb-6">
                <FiAnchor className="w-6 h-6 text-cyan-500 mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">On Board Experience</h2>
              </div>
              <FAQ items={onboardFaqs} />
            </section>

            <section>
              <div className="flex items-center mb-6">
                <FiHelpCircle className="w-6 h-6 text-orange-500 mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Safety & Preparation</h2>
              </div>
              <FAQ items={safetyFaqs} />
            </section>

            <section>
              <div className="flex items-center mb-6">
                <GiWaveSurfer className="w-7 h-7 text-purple-500 mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Activities & More</h2>
              </div>
              <FAQ items={activityFaqs} />
            </section>
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 md:p-12 text-white text-center md:text-left md:flex items-center justify-between">
              <div className="md:max-w-xl mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Still have questions?</h2>
                <p className="text-blue-100 text-lg">
                  We&apos;re here to help! Contact us directly for personalized assistance.
                </p>
              </div>
              <Link href="/contact">
                <span className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 