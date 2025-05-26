import { Metadata } from 'next';
import BoatTripsClientPage from './page.client';

export const metadata: Metadata = {
  title: 'Boat Trips Ibiza - Day & Sunset Excursions | Salvador',
  description: 'Experience unforgettable all-inclusive boat trips around Ibiza. Choose between our midday adventure or magical sunset excursion, with drinks, snacks, and activities included.',
  alternates: {
    canonical: '/boat-trips',
  },
};

export default function BoatTripsPage() {
  return <BoatTripsClientPage />;
}
