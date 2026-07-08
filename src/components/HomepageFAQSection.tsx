'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import FAQ from '@/components/trips/FAQ';
import { getHomepageFaqs, getHomepageFaqSectionCopy } from '@/lib/seo-i18n';
import { getClientSiteLocale } from '@/lib/site-locale';

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

export default function HomepageFAQSection() {
  const locale = getClientSiteLocale();
  const sectionCopy = getHomepageFaqSectionCopy(locale);
  const homepageFaqs = getHomepageFaqs(locale);

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-72 h-72 bg-gradient-to-br from-blue-100 to-sky-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-gradient-to-br from-cyan-100 to-blue-200 rounded-full opacity-25 blur-3xl"></div>
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
            {sectionCopy.title}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {sectionCopy.subtitle}
          </p>
        </motion.div>

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
            <span>{sectionCopy.viewAll}</span>
            <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
