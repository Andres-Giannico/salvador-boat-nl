import { Metadata } from 'next';
import DayTripClientPage from './page.client';
import Script from 'next/script';
// Remove imports related to review fetching
// import { GoogleReview } from '@/services/googlePlaces';
// import { getReviews } from '@/services/getReviews'; // Assuming a function like this existed

const dayTripJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Salvador Ibiza - All-Inclusive Day Boat Trip",
  "description": "Join our 3-hour all-inclusive daytime boat tour from San Antonio, Ibiza. Enjoy paddle boarding, kayaking, snorkeling, an open bar, Spanish tapas, and incredible music. The perfect day trip on the water.",
  "image": "https://salvadoribiza.com/images/barco1.png",
  "sku": "SALVADOR-DAY-TRIP",
  "brand": {
    "@type": "Brand",
    "name": "Salvador Ibiza"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://salvadoribiza.com/boat-trips/day-trip",
    "priceCurrency": "EUR",
    "price": 80,
    "availability": "https://schema.org/InStock",
    "validFrom": "2024-05-01",
    "priceValidUntil": "2025-10-31",
    "itemCondition": "https://schema.org/NewCondition"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 5,
    "reviewCount": 188
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