import BookTripsQrFlyerClient from './page.client';
import { pageMetadata } from '@/lib/page-meta';

export const metadata = {
  ...pageMetadata({
    title: 'Snel je boottrip boeken',
    description: 'Boek snel je Salvador Ibiza trip: dag of zonsondergang, vertrek haven San Antonio.',
    path: '/book/flyer',
    keywords:
      'boottocht boeken Ibiza, Salvador boeking, reserveren boot Ibiza',
    ogTitle: 'Boottrip boeken — Salvador Ibiza',
    ogDescription:
      'Snel en eenvoudig boeken met directe bevestiging.',
    ogImage: '/images/optimized/salvador-ibiza-boat-aerial-view.webp',
    ogImageAlt: 'Boottrip boeken Salvador Ibiza',
    robots: { index: false, follow: false },
  }),
};

export default function BookTripsQrFlyerPage() {
  return <BookTripsQrFlyerClient />;
} 