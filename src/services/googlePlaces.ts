import { GOOGLE_MAPS_API_KEY, PLACE_ID } from '@/config/google';

// Type definition for Google Review

export interface GoogleReview {
  name: string;
  relativePublishTimeDescription: string;
  rating: number;
  text: {
    text: string;
    languageCode: string;
  };
  authorAttribution: {
    displayName: string;
    photoUri: string;
  };
}

// Client-side fetching function removed as fetching will be server-side. 