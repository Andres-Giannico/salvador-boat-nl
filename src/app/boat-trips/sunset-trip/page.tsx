import SunsetTripClientPage from './page.client';
import Script from 'next/script';
import { absoluteUrl, publicAssetUrl } from '@/config/site';
import { enPageMetadata } from '@/lib/page-meta';

const sunsetTripJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Sunset Boat Trip in Ibiza - Salvador Ibiza",
  "image": [
    publicAssetUrl("/images/boat/sunset.png")
  ],
  "description": "All-inclusive sunset boat trip in Ibiza with captain. Enjoy 3 hours of navigation with catering, drinks, paddle surf and snorkel included.",
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

export const metadata = enPageMetadata({
  title: 'Ibiza Sunset Boat Trip (All-Inclusive) | Salvador',
  description: '🌅 Experience Ibiza\'s legendary sunset from the sea! 3-hour all-inclusive cruise with unlimited drinks, Spanish tapas & paddle boards. Book now from €80!',
  path: '/boat-trips/sunset-trip',
  ogTitle: 'Ibiza Sunset Boat Trip (All-Inclusive) | Salvador',
  ogDescription: '🌅 Experience Ibiza\'s legendary sunset from the sea! 3-hour all-inclusive cruise with unlimited drinks, Spanish tapas & paddle boards.',
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