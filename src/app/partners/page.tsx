import { Metadata } from 'next';
import PartnersClientPage from './page.client';

export const metadata: Metadata = {
  title: 'Partners & Turbookings | Salvador Boat Ibiza',
  description: 'Join Salvador Boat Ibiza\'s partner network. Integrate our booking system with Turbookings and offer premium maritime experiences to your clients. Perfect for hotels, concierges, and travel websites.',
};

export default function PartnersPage() {
  return <PartnersClientPage />;
}
