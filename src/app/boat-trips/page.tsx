import { Metadata } from 'next';
import BoatTripsClientPage from './page.client';

export const metadata: Metadata = {
  title: 'Ibiza Boat Trips - Day & Sunset Boat Tours | Salvador',
  description: 'Discover the best boat trips in Ibiza with Salvador. Choose our all-inclusive daytime boat tour or the magical sunset cruise. Enjoy paddle boarding, snorkeling, an open bar, and the iconic Ibiza sunset. Book your unforgettable boat tour today!',
  alternates: {
    canonical: 'https://salvadoribiza.com/boat-trips',
  },
};

export default function BoatTripsPage() {
  return <BoatTripsClientPage />;
}
