import BookTripsQrClient from './page.client';
import { pageMetadata } from '@/lib/page-meta';

export const metadata = {
  ...pageMetadata({
    title: 'Boek je trip — QR caseta',
    description:
      'Boek je Salvador Ibiza boottrip vanaf onze caseta: dag- of zonsondergangtrip, haven San Antonio.',
    path: '/book/trips',
    robots: { index: false, follow: false },
  }),
};

export default function BookTripsQrPage() {
  return <BookTripsQrClient />;
} 