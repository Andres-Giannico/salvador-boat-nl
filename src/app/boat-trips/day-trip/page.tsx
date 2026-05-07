import DayTripClientPage from './page.client';
import Script from 'next/script';
import { absoluteUrl, publicAssetUrl } from '@/config/site';
import { pageMetadata } from '@/lib/page-meta';
// Remove imports related to review fetching
// import { GoogleReview } from '@/services/googlePlaces';
// import { getReviews } from '@/services/getReviews'; // Assuming a function like this existed

const dayTripJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "All-inclusive dagtrip Ibiza — Salvador Ibiza",
  "description": "All-inclusive dagboottocht van 3 uur met kapitein, catering, drankjes, paddleboards en snorkel.",
  "image": [
    publicAssetUrl("/images/boat/aereabarco1.jpg")
  ],
  "brand": {
    "@type": "Organization",
    "name": "Salvador Ibiza"
  },
  "offers": {
    "@type": "Offer",
    "url": absoluteUrl("/boat-trips/day-trip"),
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

// Remove data fetching logic
// async function getData() {
//   try {
//     const reviewsData = await getReviews(); // Or fetch('/api/reviews')
//     return { initialReviews: reviewsData.reviews || [], error: null };
//   } catch (error) {
//     console.error("Error fetching reviews for Day Trip build:", error);
//     return { initialReviews: [], error: "Failed to load reviews data." };
//   }
// }

export const metadata = pageMetadata({
  title: 'All-inclusive dagtrip Ibiza | Salvador',
  description: '⛵ 3 uur all-inclusive dagtrip: paddleboards, snorkelen, unlimited drankjes & Spaanse tapas. Vanaf €80.',
  path: '/boat-trips/day-trip',
  ogTitle: 'All-inclusive dagtrip Ibiza',
  ogDescription: '⛵ Dagtrip met 15 paddleboards, snorkelen, open bar en tapas.',
  ogImage: '/images/optimized/salvador-ibiza-boat-aerial-view.webp',
});

export default function DayTripPage() {
  // const { initialReviews, error } = await getData(); // Remove data fetching call

  return (
    <>
      <Script
        id="day-trip-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dayTripJsonLd) }}
      />
      <DayTripClientPage /* initialReviews={initialReviews} error={error} */ />
    </>
  );
} 