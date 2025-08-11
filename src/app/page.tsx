'use client';

import Hero from '@/components/Hero';
import IntroSection from '@/components/IntroSection';
import FeaturedTripsSection from '@/components/FeaturedTripsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import HomepageFAQSection from '@/components/HomepageFAQSection';
import CallToActionSection from '@/components/CallToActionSection';
import Script from 'next/script';

export default function HomePage() {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Salvador Ibiza",
            "image": "https://salvadoribiza.com/logo.png",
            "url": "https://salvadoribiza.com",
            "telephone": "+34 681 611 598",
            "priceRange": "€€",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Avinguda del Doctor Fleming",
              "addressLocality": "Sant Antoni de Portmany",
              "addressRegion": "Illes Balears",
              "postalCode": "07820",
              "addressCountry": "ES"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 38.9823,
              "longitude": 1.3006
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "09:00",
                "closes": "20:00"
              }
            ],
            "sameAs": [
              "https://www.instagram.com/salvadoribiza",
              "https://www.facebook.com/salvadoribiza"
            ],
            "description": "Boat trips and private charter rentals in Ibiza. Experience unique adventures at sea with day trips, sunset cruises, and private services for groups.",
            "paymentAccepted": "Cash, Credit Card, Bizum"
          })
        }}
      />
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
      <ActivitiesSection />
      <HomepageFAQSection />
      <CallToActionSection />
    </main>
    </>
  );
}
