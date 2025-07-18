import { Metadata } from 'next';
import SanAntonioBoatTripsClientPage from './page.client';

export const metadata: Metadata = {
  title: 'Boat Trips San Antonio Ibiza | Departing from San Antonio Bay | Salvador Ibiza',
  description: 'Join our boat trips departing from San Antonio Ibiza. Explore the best of Ibiza\'s west coast with our premium boat tours from San Antonio Bay. Day and sunset trips available.',
  keywords: 'boat trips san antonio ibiza, boat trips in ibiza san antonio, ibiza boat trips from san antonio, boat trips from san antonio ibiza, san antonio boat trips ibiza, boat tour san antonio ibiza, sunset boat trip ibiza san antonio',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/boat-trips/san-antonio',
  },
  openGraph: {
    title: 'Boat Trips San Antonio Ibiza | Premium Departures from San Antonio Bay',
    description: 'Discover the best boat trips departing from San Antonio Ibiza. Premium day and sunset cruises exploring Ibiza\'s stunning west coast.',
    url: 'https://salvadoribiza.com/boat-trips/san-antonio',
    images: [
      {
        url: '/images/optimized/salvador-ibiza-boat-drone-view.webp',
        width: 1200,
        height: 630,
        alt: 'Salvador boat trip departing from San Antonio Ibiza',
      }
    ],
  },
};

// JSON-LD structured data for San Antonio boat trips
const sanAntonioBoatTripsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Boat Trips from San Antonio Ibiza by Salvador",
  "description": "Premium boat trips departing from San Antonio Ibiza. Explore the west coast with our day and sunset cruises including drinks, tapas, and water sports.",
  "image": "https://salvadoribiza.com/images/barcodesdedron.jpg",
  "brand": {
    "@type": "Brand",
    "name": "Salvador Ibiza"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://salvadoribiza.com/boat-trips/san-antonio",
    "priceCurrency": "EUR",
    "price": "80",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "80",
      "priceCurrency": "EUR",
      "valueAddedTaxIncluded": "true"
    },
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "278"
  },
  "duration": "PT3H",
  "location": {
    "@type": "Place",
    "name": "San Antonio Bay, Ibiza",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Antonio",
      "addressRegion": "Ibiza",
      "addressCountry": "Spain"
    }
  }
};

export default function SanAntonioBoatTripsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sanAntonioBoatTripsJsonLd) }}
      />
      <SanAntonioBoatTripsClientPage />
    </>
  );
} 