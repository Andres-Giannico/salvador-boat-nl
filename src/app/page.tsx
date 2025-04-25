'use client';

import Hero from '@/components/Hero';
import IntroSection from '@/components/IntroSection';
import FeaturedTripsSection from '@/components/FeaturedTripsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import CallToActionSection from '@/components/CallToActionSection';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br from-sky-100 to-blue-200 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-sky-100 to-sky-200 rounded-full opacity-40 blur-3xl"></div>
      </div>
      
      <Hero />
      <IntroSection />
      <FeaturedTripsSection />
      <WhyChooseUsSection />
      <CallToActionSection />
    </main>
  );
}
