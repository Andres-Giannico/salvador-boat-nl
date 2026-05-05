import DayTripClientPage from './page.client';
import Script from 'next/script';
import { absoluteUrl, publicAssetUrl } from '@/config/site';
import { enPageMetadata } from '@/lib/page-meta';
// Remove imports related to review fetching
// import { GoogleReview } from '@/services/googlePlaces';
// import { getReviews } from '@/services/getReviews'; // Assuming a function like this existed

const dayTripJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "All inclusive boat trip and tours in Ibiza - Salvador Ibiza",
  "image": [
    publicAssetUrl("/images/boat/aereabarco1.jpg")
  ],
  "description": "All-inclusive day boat trip in Ibiza with captain. Enjoy 3 hours of navigation with catering, drinks, paddle surf and snorkel included.",
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

export const metadata = enPageMetadata({
  title: 'All-Inclusive Day Boat Trip Ibiza | Salvador',
  description: '⛵ Ultimate Ibiza day adventure! 3-hour all-inclusive boat trip with 15 paddle boards, snorkeling, unlimited drinks & Spanish tapas. From €80 - Book now!',
  path: '/boat-trips/day-trip',
  ogTitle: 'All-Inclusive Day Boat Trip Ibiza | Salvador',
  ogDescription: '⛵ Ultimate Ibiza day adventure! 3-hour all-inclusive boat trip with paddle boards, snorkeling, unlimited drinks & Spanish tapas.',
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