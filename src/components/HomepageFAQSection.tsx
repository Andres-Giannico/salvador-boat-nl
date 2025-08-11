'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import FAQ from '@/components/trips/FAQ';
import type { FAQItem } from '@/components/trips/FAQ';

// Most important FAQs for homepage
const homepageFaqs: FAQItem[] = [
  {
    question: "What kind of boat trips do you offer?",
    answer: (
      <>
        We offer vibrant shared trips like our <Link href='/boat-trips/day-trip' className='text-cyan-600 hover:underline font-medium'>Mixed Daytime Tour</Link> and the magical <Link href='/boat-trips/sunset-trip' className='text-orange-600 hover:underline font-medium'>Mixed Sunset Tour</Link>. We also specialize in fully customizable <Link href='/private-boat-trips' className='text-purple-600 hover:underline font-medium'>Private Trips</Link>.
      </>
    ),
  },
  {
    question: "What's included in the price?",
    answer: (
      <>
        Our trips include captain & crew, fuel, unlimited open bar (soft drinks, beer, wine, cava, sangria, water), Spanish tapas & fresh fruit, and use of paddleboards, kayaks & snorkel gear. <Link href='/private-boat-trips' className='text-purple-600 hover:underline font-medium'>Private Trips</Link> offer upgrade options for premium services.
      </>
    ),
  },
  {
    question: "How long do the trips last?",
    answer: "Our Day Trips and Sunset Trips usually last around 3 hours each. Private Charters can be tailored to your preferences with a minimum of 3 hours.",
  },
  {
    question: "Where is the meeting point?",
    answer: (
      <>
        Our meeting point is always at the port of San Antonio. You can find the exact location and directions on our <Link href='/contact' className='text-blue-600 hover:underline font-medium'>contact page with interactive map</Link>. We'll confirm the boarding time once your booking is confirmed.
      </>
    ),
  },
  {
    question: "How can I book a trip?",
    answer: (
      <>
        <Link href='/book-now' className='text-blue-600 hover:underline font-medium'>Booking online through our website</Link> is highly recommended! Use our secure booking widgets with live availability. After completing your booking, you'll receive a confirmation voucher with all the details.
      </>
    ),
  },
  {
    question: "What should we bring?",
    answer: "We recommend bringing swimwear, a towel, sunscreen, a hat, sunglasses, and your camera to capture those unforgettable moments. If you're prone to seasickness, consider taking preventive medication beforehand.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function HomepageFAQSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-72 h-72 bg-gradient-to-br from-blue-100 to-sky-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-gradient-to-br from-cyan-100 to-blue-200 rounded-full opacity-25 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-3 md:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Everything you need to know about our boat trips in Ibiza
          </p>
        </motion.div>

        {/* FAQ Component */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <FAQ 
            items={homepageFaqs} 
            title="" 
            compact={true}
          />
        </motion.div>

        {/* Link to full FAQ page */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-8 md:mt-12 lg:mt-16"
        >
          <Link
            href="/faq"
            className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-sm md:text-base rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl min-h-[48px] touch-manipulation"
          >
            <span>View All FAQs</span>
            <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 