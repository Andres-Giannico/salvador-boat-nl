import { Metadata } from 'next';
import DayTripClientPage from './page.client';

export const metadata: Metadata = {
  title: 'Day Trip - Salvador Ibiza All-Inclusive Boat Experience',
  description: 'Experience the ultimate day on Ibiza\'s waters. 3-hour all-inclusive boat trip with swimming, snorkeling, drinks, snacks and unforgettable views.',
};

export default function DayTripPage() {
  return (
    <DayTripClientPage />
  );
} 