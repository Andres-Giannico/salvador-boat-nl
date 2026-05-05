import BookTripsQrFlyerClient from './page.client';
import { enPageMetadata } from '@/lib/page-meta';

export const metadata = {
  ...enPageMetadata({
    title: 'Book Your Boat Trip - Quick Booking',
    description: 'Book your Salvador Ibiza boat trip quickly and easily. Choose between daytime adventures or magical sunset voyages from San Antonio Port.',
    path: '/book/flyer',
    keywords:
      'book boat trip Ibiza, Salvador Ibiza booking, boat reservation, sunset cruise booking, day trip booking',
    ogTitle: 'Book Your Boat Trip - Salvador Ibiza',
    ogDescription:
      'Quick and easy boat trip booking in Ibiza. All-inclusive experiences with instant confirmation.',
    ogImage: '/images/optimized/salvador-ibiza-boat-aerial-view.webp',
    ogImageAlt: 'Salvador Ibiza Boat Trip Booking',
    robots: { index: false, follow: false },
  }),
};

export default function BookTripsQrFlyerPage() {
  return <BookTripsQrFlyerClient />;
} 