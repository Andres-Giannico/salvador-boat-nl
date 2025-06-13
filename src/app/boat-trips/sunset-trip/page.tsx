import { Metadata } from 'next';
import SunsetTripClientPage from './page.client';
import Script from 'next/script';

const sunsetTripJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Salvador Ibiza - All-Inclusive Sunset Boat Trip",
  "description": "Experience the legendary Ibiza sunset from the sea on our 3-hour all-inclusive boat cruise. Includes paddle boarding, snorkeling, open bar with cava, tapas, and a stop at Café Mambo.",
  "image": "https://salvadoribiza.com/images/sunset.png",
  "brand": {
    "@type": "Brand",
    "name": "Salvador Ibiza"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://salvadoribiza.com/boat-trips/sunset-trip",
    "priceCurrency": "EUR",
    "price": "80",
    "availability": "https://schema.org/InStock",
    "validFrom": "2024-05-01"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "188" 
  }
};

export const metadata: Metadata = {
  title: 'Ibiza Sunset Boat Trip (All-Inclusive) | Salvador',
  description: 'Book the best sunset boat trip in Ibiza. A 3-hour all-inclusive cruise with drinks, tapas, paddle boards, and the famous Café Mambo sunset view.',
  alternates: {
    canonical: 'https://salvadoribiza.com/boat-trips/sunset-trip',
  },
};

export default function SunsetTripPage() {
  return (
    <>
       <Script
        id="sunset-trip-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sunsetTripJsonLd) }}
      />
      <SunsetTripClientPage />
    </>
  )
} 