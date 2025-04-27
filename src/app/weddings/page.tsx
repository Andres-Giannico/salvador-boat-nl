import { Metadata } from 'next';
import WeddingsClientPage from './page.client';

export const metadata: Metadata = {
  title: 'Ibiza Boat Weddings | Unforgettable Ceremonies at Sea | Salvador Ibiza',
  description: 'Celebrate your dream wedding aboard the Salvador Ibiza. Experience a unique and romantic ceremony with stunning sea views, personalized service, and lasting memories.',
  keywords: ['Ibiza wedding', 'boat wedding', 'sea wedding', 'romantic wedding Ibiza', 'luxury boat charter', 'Salvador Ibiza'],
};

export default function WeddingsPage() {
  // Here you could fetch specific data for weddings if needed in the future
  // For now, just render the client page
  return <WeddingsClientPage />;
} 