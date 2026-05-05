import BoatTripsClientPage from './page.client';
import { enPageMetadata } from '@/lib/page-meta';

export const metadata = enPageMetadata({
  title: 'Ibiza Boat Trips - Day & Sunset Boat Tours | Salvador',
  description: 'Discover the best boat trips in Ibiza with Salvador. Choose our all-inclusive daytime boat tour or the magical sunset cruise. Enjoy paddle boarding, snorkeling, an open bar, and the iconic Ibiza sunset. Book your unforgettable boat tour today!',
  path: '/boat-trips',
});

export default function BoatTripsPage() {
  return <BoatTripsClientPage />;
}
