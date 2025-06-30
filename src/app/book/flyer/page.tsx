import type { Metadata } from 'next';
import BookTripsQrFlyerClient from './page.client';

export const metadata: Metadata = {
  title: "Book Your Boat Trip - Quick Booking",
  description: "Book your Salvador Ibiza boat trip quickly and easily. Choose between daytime adventures or magical sunset voyages from San Antonio Port.",
  keywords: "book boat trip Ibiza, Salvador Ibiza booking, boat reservation, sunset cruise booking, day trip booking",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/book/flyer',
  },
  openGraph: {
    title: "Book Your Boat Trip - Salvador Ibiza",
    description: "Quick and easy boat trip booking in Ibiza. All-inclusive experiences with instant confirmation.",
    url: "https://salvadoribiza.com/book/flyer",
    images: [
      {
        url: '/images/barco1.png',
        width: 1200,
        height: 630,
        alt: 'Salvador Ibiza Boat Trip Booking',
      }
    ],
  },
};

export default function BookTripsQrFlyerPage() {
  return <BookTripsQrFlyerClient />;
} 