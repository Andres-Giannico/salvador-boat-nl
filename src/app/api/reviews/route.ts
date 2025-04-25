import { GOOGLE_MAPS_API_KEY, PLACE_ID } from '@/config/google';
import { NextResponse } from 'next/server';
import { GoogleReview } from '@/services/googlePlaces'; // Import the type

// Define the structure expected from Google API
interface GooglePlaceReview {
  author_name: string;
  rating: number;
  relative_time_description: string;
  text: string;
  profile_photo_url: string;
}

// Define the structure returned by the API
interface ApiResponse {
  reviews?: GoogleReview[];
  error?: string;
}

// Revalidate every hour (adjust as needed)
export const revalidate = 3600; 

export async function GET(): Promise<NextResponse<ApiResponse>> {
  if (!GOOGLE_MAPS_API_KEY || !PLACE_ID) {
    console.error("Server Configuration Error: Missing Google API Key or Place ID");
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews(author_name,rating,relative_time_description,text,profile_photo_url)&key=${GOOGLE_MAPS_API_KEY}&language=en`;
    
    // Use Next.js fetch with caching/revalidation (default behavior)
    const response = await fetch(url, { next: { revalidate: 3600 } }); // Revalidate every hour
    
    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`Google API Error (${response.status}): ${errorBody}`);
      throw new Error(`Google API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.status !== 'OK' || !data.result?.reviews) {
      console.warn(`No reviews found or API status not OK for Place ID ${PLACE_ID}. Status: ${data.status}`);
      return NextResponse.json({ reviews: [] });
    }

    // Transform data to our GoogleReview format
    const transformedReviews: GoogleReview[] = data.result.reviews.map((review: GooglePlaceReview) => ({
      name: review.author_name, // Used for mapping key, should be unique enough
      rating: review.rating,
      relativePublishTimeDescription: review.relative_time_description,
      text: {
        text: review.text,
        languageCode: 'en' // Assuming English reviews based on URL
      },
      authorAttribution: {
        displayName: review.author_name,
        photoUri: review.profile_photo_url
      }
    }));

    return NextResponse.json({ reviews: transformedReviews });

  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error fetching Google reviews:', message);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
} 