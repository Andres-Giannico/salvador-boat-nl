import BookTripsQrClient from './page.client';
import { enPageMetadata } from '@/lib/page-meta';

export const metadata = {
  ...enPageMetadata({
    title: 'Book Your Boat Trip - Caseta QR',
    description:
      'Book your Salvador Ibiza boat trip from our caseta. Choose between daytime adventures or magical sunset voyages from San Antonio Port.',
    path: '/book/trips',
    robots: { index: false, follow: false },
  }),
};

export default function BookTripsQrPage() {
  return <BookTripsQrClient />;
} 