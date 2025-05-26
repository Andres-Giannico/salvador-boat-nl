import { Metadata } from 'next';
import BookNowClientPage from './page.client';

export const metadata: Metadata = {
  title: 'Book Your Ibiza Boat Trip | Salvador Ibiza',
  description: 'Book your private charter or shared boat trip (Day or Sunset) easily online. Choose your perfect Ibiza experience with Salvador Ibiza.',
  alternates: {
    canonical: '/book-now',
  },
};

export default function BookNowPage() {
  return <BookNowClientPage />;
} 