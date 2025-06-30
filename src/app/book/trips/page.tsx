import type { Metadata } from 'next';
import BookTripsQrClient from './page.client';

export const metadata: Metadata = {
  title: "Book Your Boat Trip - Caseta QR",
  description: "Book your Salvador Ibiza boat trip from our caseta. Choose between daytime adventures or magical sunset voyages from San Antonio Port.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/book/trips',
  },
};

export default function BookTripsQrPage() {
  return <BookTripsQrClient />;
} 