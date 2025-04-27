'use client';

import { motion } from 'framer-motion';
import Script from 'next/script';

export default function ReviewsSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="container mx-auto px-4">
        <Script 
          src="https://static.elfsight.com/platform/platform.js" 
          strategy="lazyOnload"
        />
        <div 
          className="elfsight-app-68ea438f-5a97-4759-b772-c1f3e0906ec3 mt-[-2rem] md:mt-[-3rem]"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
} 