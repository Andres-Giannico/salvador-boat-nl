import { Metadata } from 'next';
import SunsetTripClientPage from './page.client';
import { GoogleReview } from '@/services/googlePlaces';
import { AggregateRating, Review } from 'schema-dts';
import { JsonLd } from 'react-schemaorg';

export const metadata: Metadata = {
  title: 'Sunset Trip - Salvador Ibiza All-Inclusive Boat Experience',
  description: 'Witness Ibiza\'s legendary sunset from the sea. 3-hour all-inclusive boat trip with drinks, tapas, swimming, and magical Es Vedrà views.',
};

// Reuse the same fetch function logic (could be moved to a shared util)
async function fetchReviews(): Promise<{ reviews: GoogleReview[]; error: string | null }> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
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

export default async function SunsetTripPage() {
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
      datePublished: review.relativePublishTimeDescription,
    }));
  }

  return (
    <>
      {aggregateRatingSchema && (
        <JsonLd
          item={{
            '@context': 'https://schema.org',
            '@type': 'Product', // Or 'Service'
            name: 'Salvador Ibiza Sunset Trip',
            description: metadata.description || '',
            aggregateRating: aggregateRatingSchema,
            review: reviewSchema,
          }}
        />
      )}
      <SunsetTripClientPage initialReviews={reviews} error={error} />
    </>
  );
} 