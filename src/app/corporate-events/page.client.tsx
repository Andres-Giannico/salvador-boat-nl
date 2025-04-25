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

// Placeholder gallery images (replace later)
const galleryImages = [
  { src: "/images/barco4.png", alt: "Corporate group enjoying drinks on Salvador Ibiza" },
  { src: "/images/barco dron .jpg", alt: "Aerial view of Salvador Ibiza, perfect for corporate events" },
  { src: "/images/barco1.png", alt: "Spacious deck area for corporate gatherings" },
  { src: "/images/barco2.png", alt: "Team building activities in crystal clear waters" },
  { src: "/images/barco5.png", alt: "Relaxed corporate networking atmosphere" },
  { src: "/images/esvedraback.png", alt: "Stunning backdrop for corporate photos" },
];

// --- NEW: FAQ Data ---
const corporateFaqs = [
  {
    question: "What is included in the corporate event?",
    answer: "We include exclusive use of the boat, captain and crew, standard fuel, a standard open bar (soft drinks, beer, wine, cava, sangria, water), light snacks and fresh fruit, plus equipment for water activities like paddle surfing, kayaks, and snorkeling."
  },
  {
    question: "Can the activities be customized?",
    answer: "Yes! We can tailor activities to your event's goals, from specific team-building dynamics to simply offering free time for the group to relax and enjoy. Contact us to discuss your ideas."
  },
  {
    question: "How many people can attend the event?",
    answer: "The Salvador boat has capacity for up to 35 guests plus crew, offering a comfortable and spacious setting for corporate events."
  },
  {
    question: "Is it necessary to book in advance?",
    answer: "Yes, we highly recommend booking in advance, especially during high season (June-September), to ensure availability on your desired date for your event."
  },
  {
    question: "What happens if the weather prevents the trip?",
    answer: "Safety is our priority. In case of adverse weather conditions preventing a safe departure, we will work with you to reschedule the event for another available date or, if that's not possible, offer a full refund."
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
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } } 
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 via-blue-50 to-white">

      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/barco1.png" // Choose a professional/impressive hero image
            alt="Corporate Event Charter on Salvador Ibiza Boat"
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
            Elevate Your <span className="text-cyan-300">Corporate Event</span>
          </motion.h1>
          <motion.p 
            variants={fadeIn} 
            className="text-lg md:text-2xl max-w-3xl mx-auto mb-10 text-blue-100 drop-shadow-md"
          >
            Host unforgettable team-building days, client meetings, or incentive trips aboard the stunning Salvador Ibiza.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Link href="/private-charter#direct-booking-section">
              <span className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-4 px-10 rounded-lg shadow-xl text-lg transition duration-300 transform hover:scale-105">
                Plan Your Event
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
              Motivation & Team Cohesion at Sea
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-600 mb-6">
              Organize an unforgettable corporate event outside the office. Whether for team building, employee incentives, or client appreciation, our boat trips are the perfect option to strengthen team bonds in a unique and inspiring setting.
            </motion.p>
            <motion.p variants={fadeIn} className="text-lg text-gray-600">
              Escape the routine and offer your team a day of connection and enjoyment in an incomparable environment. We take care of every detail, from punctuality to customization, to ensure a smooth and successful experience.
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
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">An Inspiring Environment for Your Team</motion.h2>
          <motion.p variants={fadeIn} className="text-lg text-gray-600 mb-12">We offer a professional yet relaxed setting with all the amenities to make your team feel comfortable and enjoy the experience.</motion.p>
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
           <PerfectForCard items={idealFor} title="Perfect For Your Corporate Needs" />
        </motion.section>
        
        {/* Included Features Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-gradient-to-br from-teal-50 via-white to-emerald-50 p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100 mb-20 md:mb-28"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-800 mb-10">Standard Corporate Charter Package</h2>
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
                Need more? Enhance your event with premium catering, spirits, or extended hours.
              </p>
              <Link href="/contact" className="font-medium text-teal-800 hover:text-teal-600 underline transition-colors">
                Contact us to discuss customization
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Your Exclusive Venue at Sea</h2>
          <TripGallery images={galleryImages} title="" /> {/* Title removed as heading exists */}
        </motion.section>

        {/* --- NEW: FAQ Section --- */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="mb-20 md:mb-28"
        >
           <FAQ items={corporateFaqs} title="Frequently Asked Questions" />
        </motion.section>

        {/* Final CTA / Booking Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center bg-white p-10 md:p-16 rounded-2xl shadow-xl border border-gray-100"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ready to Impress?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Book Salvador Ibiza for your next corporate event and provide an experience your team or clients won't forget.
          </p>
          <Link href="/private-charter#direct-booking-section"> 
            <span className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-4 px-10 rounded-lg shadow-xl text-lg transition duration-300 transform hover:scale-105">
               Check Availability & Book
            </span>
          </Link>
          <p className="mt-6 text-sm text-gray-500">Or <Link href="/contact" className="underline hover:text-blue-600">contact us</Link> with any questions.</p>
        </motion.section>

      </div>
    </div>
  );
} 