import BookNowClientPage from './page.client';
import { enPageMetadata } from '@/lib/page-meta';

export const metadata = enPageMetadata({
  title: 'Book Your Ibiza Boat Trip',
  description:
    'Book your private charter or shared boat trip (Day or Sunset) easily online. Choose your perfect Ibiza experience with Salvador Ibiza.',
  path: '/book-now',
});

export default function BookNowPage() {
  return <BookNowClientPage />;
} 