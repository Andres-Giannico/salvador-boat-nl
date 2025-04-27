import { Metadata } from 'next';
import DayTripClientPage from './page.client';
// Remove imports related to review fetching
// import { GoogleReview } from '@/services/googlePlaces';
// import { getReviews } from '@/services/getReviews'; // Assuming a function like this existed

export const metadata: Metadata = {
  title: 'Ibiza Day Boat Trip (All-Inclusive) | Salvador Ibiza',
  description: 'Enjoy the best all-inclusive day boat trip in Ibiza. Explore stunning coves, enjoy drinks, tapas, paddle surf & more. Book your 3-hour adventure from San Antonio!',
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

export default async function DayTripPage() {
  // const { initialReviews, error } = await getData(); // Remove data fetching call

  // Render client page without review props
  return <DayTripClientPage /* initialReviews={initialReviews} error={error} */ />;
} 