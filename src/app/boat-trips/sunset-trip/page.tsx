import { Metadata } from 'next';
import SunsetTripClientPage from './page.client';

export const metadata: Metadata = {
  title: 'Ibiza Sunset Boat Trip (All-Inclusive) | Salvador Ibiza',
  description: 'Experience the iconic Ibiza sunset from the sea. All-inclusive 3-hour boat trip with drinks, tapas, music, optional swim stop & views of Cafe Mambo.',
  alternates: {
    canonical: '/boat-trips/sunset-trip',
  },
};

export default async function SunsetTripPage() {
  return <SunsetTripClientPage />;
} 