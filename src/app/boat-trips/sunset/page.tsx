import SunsetBoatTripsClientPage from './page.client';
import { absoluteUrl, publicAssetUrl } from '@/config/site';
import { enPageMetadata } from '@/lib/page-meta';

export const metadata = enPageMetadata({
  title: 'Sunset Boat Trips Ibiza | Magical Evening Cruises | Salvador Ibiza',
  description: 'Experience the magic of Ibiza sunset boat trips with Salvador. Join our evening cruises for breathtaking sunsets, premium drinks, and unforgettable memories on the Mediterranean.',
  path: '/boat-trips/sunset',
  keywords: 'ibiza sunset boat trip, sunset boat, sunset boat trip, sunset boat tour, boat sunset, sunset from boat, sunset on boat, ibiza boat trip sunset, sunset boat trips san antonio ibiza',
  ogTitle: 'Sunset Boat Trips Ibiza | Magical Evening Cruises',
  ogDescription: 'Experience magical sunset boat trips in Ibiza with Salvador. Premium evening cruises with drinks, tapas, and breathtaking Mediterranean sunsets.',
  ogImage: '/images/optimized/sunset-sailing-cruise-ibiza.webp',
  ogImageAlt: 'Beautiful sunset during a boat trip in Ibiza with Salvador',
});

// JSON-LD structured data for sunset boat trips
const sunsetBoatTripsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Sunset Boat Trips Ibiza by Salvador",
  "description": "Magical sunset boat trips in Ibiza with premium drinks, tapas, and breathtaking Mediterranean views. 3-hour evening cruises departing from San Antonio.",
  "image": publicAssetUrl("/images/blog/sunset-sailing-ibiza.jpg"),
  "brand": {
    "@type": "Brand",
    "name": "Salvador Ibiza"
  },
  "offers": {
    "@type": "Offer",
    "url": absoluteUrl("/boat-trips/sunset"),
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
  "duration": "PT3H"
};

export default function SunsetBoatTripsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sunsetBoatTripsJsonLd) }}
      />
      <SunsetBoatTripsClientPage />
    </>
  );
} 