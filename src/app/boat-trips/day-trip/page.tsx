import { Metadata } from 'next';
import DayTripClientPage from './page.client';
import { GoogleReview } from '@/services/googlePlaces';
import Script from 'next/script';
import { AggregateRating, Review } from 'schema-dts'; // Import schema types
import { JsonLd } from 'react-schemaorg'; // Helper component

export const metadata: Metadata = {
  title: 'Day Trip - Salvador Ibiza All-Inclusive Boat Experience',
  description: 'Experience the ultimate day on Ibiza\'s waters. 3-hour all-inclusive boat trip with swimming, snorkeling, drinks, snacks and unforgettable views.',
};

// Function to fetch reviews server-side
async function fetchReviews(): Promise<{ reviews: GoogleReview[]; error: string | null }> {
  try {
    // Fetch from the API route within the server
    // Use absolute URL for server-side fetch or configure base URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'; // Ensure this env var is set
    const res = await fetch(`${baseUrl}/api/reviews`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!res.ok) {
      return { reviews: [], error: `API Error: ${res.status}` };
    }
    const data = await res.json();
    return { reviews: data.reviews || [], error: data.error || null };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to fetch reviews';
    console.error("Fetch Reviews Error (SSR):", message);
    return { reviews: [], error: message };
  }
}

export default async function DayTripPage() {
  const { reviews, error } = await fetchReviews();

  // --- Structured Data --- 
  let aggregateRatingSchema: AggregateRating | null = null;
  let reviewSchema: Review[] = [];

  if (reviews.length > 0) {
    const totalRating = reviews.reduce((sum, review) => sum + (review.rating || 0), 0);
    const averageRating = (totalRating / reviews.length).toFixed(1);

    aggregateRatingSchema = {
      '@type': 'AggregateRating',
      ratingValue: averageRating,
      reviewCount: reviews.length,
      bestRating: '5',
      worstRating: '1',
    };

    reviewSchema = reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.authorAttribution?.displayName || 'Anonymous',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating.toString(),
        bestRating: '5',
        worstRating: '1',
      },
      reviewBody: review.text?.text || '',
      datePublished: review.relativePublishTimeDescription, // Google provides relative time, actual date might need more work
    }));
  }

  return (
    <>
      {/* Inject JSON-LD Structured Data */}
      {aggregateRatingSchema && (
        <JsonLd
          item={{
            '@context': 'https://schema.org',
            '@type': 'Product', // Or 'Service' or 'LocalBusiness' depending on context
            name: 'Salvador Ibiza Day Trip',
            description: metadata.description || '',
            aggregateRating: aggregateRatingSchema,
            review: reviewSchema, // Embed individual reviews
          }}
        />
      )}
      
      {/* Render the client page, passing reviews and error state */}
      <DayTripClientPage initialReviews={reviews} error={error} />
    </>
  );
} 