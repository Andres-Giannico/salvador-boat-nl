'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { getIntroCopy } from '@/lib/seo-i18n';
import { getClientSiteLocale } from '@/lib/site-locale';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    }
  }
};

export default function IntroSection() {
  const copy = getIntroCopy(getClientSiteLocale());

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      className="py-12 md:py-16 bg-white relative z-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">{copy.badge}</span>
        <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
          {copy.h2Before}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{copy.h2Brand}</span>
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
          {copy.paragraph}
        </p>
        <p className="text-base text-gray-500 max-w-2xl mx-auto mb-10">
          {copy.planningLead}{' '}
          <Link href="/things-to-do-ibiza" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
            {copy.planningLink}
          </Link>
          {copy.planningTail}
        </p>
        <Link
          href="/book-now"
          className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {copy.bookCta}
        </Link>
      </div>
    </motion.section>
  );
}
