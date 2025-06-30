import { Metadata } from 'next';
import DayTripClientPage from './page.client';
import Script from 'next/script';
// Remove imports related to review fetching
// import { GoogleReview } from '@/services/googlePlaces';
// import { getReviews } from '@/services/getReviews'; // Assuming a function like this existed

const dayTripJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "All inclusive boat trip and tours in Ibiza - Salvador Ibiza",
  "image": [
    "https://salvadoribiza.com/images/boat/aereabarco1.jpg"
  ],
  "description": "All-inclusive day boat trip in Ibiza with captain. Enjoy 3 hours of navigation with catering, drinks, paddle surf and snorkel included.",
  "brand": {
    "@type": "Organization",
    "name": "Salvador Ibiza"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://salvadoribiza.com/boat-trips/day-trip",
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

export const metadata: Metadata = {
  title: 'All-Inclusive Day Boat Trip Ibiza | Salvador',
  description: 'Book the best all-inclusive day boat trip in Ibiza. A 3-hour tour with paddle boards, snorkeling, open bar, tapas, and more. The ultimate Ibiza day boat tour.',
  alternates: {
    canonical: 'https://salvadoribiza.com/boat-trips/day-trip',
  },
};

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