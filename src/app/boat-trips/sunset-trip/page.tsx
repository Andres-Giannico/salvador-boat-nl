import SunsetTripClientPage from './page.client';
import Script from 'next/script';
import { absoluteUrl, publicAssetUrl } from '@/config/site';
import { pageMetadata } from '@/lib/page-meta';

const sunsetTripJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Zonsondergang boottrip Ibiza — Salvador Ibiza",
  "description": "All-inclusive zonsondergang-trip van 3 uur met kapitein, catering, drankjes, paddleboards en snorkelen.",
  "image": [
    publicAssetUrl("/images/boat/sunset.png")
  ],
  "brand": {
    "@type": "Organization",
    "name": "Salvador Ibiza"
  },
  "offers": {
    "@type": "Offer",
    "url": absoluteUrl("/boat-trips/sunset-trip"),
    "priceCurrency": "EUR",
    "price": "80.00",
    "itemCondition": "https://schema.org/NewCondition",
    "availability": "https://schema.org/InStock",
    "validFrom": "2025-06-25"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.9",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Verified Customer"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1198"
  }
};

export const metadata = pageMetadata({
  title: 'Zonsondergang boottrip (all-inclusive) | Salvador',
  description: '🌅 Ibiza’s legende zonsondergang vanaf zee — 3 uur all-inclusive met drankjes, tapas en paddleboards. Vanaf €80.',
  path: '/boat-trips/sunset-trip',
  ogTitle: 'Zonsondergang boottrip Ibiza',
  ogDescription: '🌅 All-inclusive avondtrip met open bar en tapas.',
  ogImage: '/images/optimized/sunset-sailing-cruise-ibiza.webp',
});

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