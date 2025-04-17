import { Metadata } from 'next';
import SunsetTripClientPage from './page.client';

export const metadata: Metadata = {
  title: 'Sunset Trip - Salvador Ibiza Magical Boat Experience',
  description: 'Experience the legendary Ibiza sunset from the sea. 3-hour all-inclusive evening cruise with drinks, light dinner, swimming and breathtaking views.',
};

export default function SunsetTripPage() {
  return (
    <SunsetTripClientPage />
  );
} 