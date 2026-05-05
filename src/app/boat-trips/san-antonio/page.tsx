import SanAntonioBoatTripsClientPage from './page.client';
import { absoluteUrl, publicAssetUrl } from '@/config/site';
import { enPageMetadata } from '@/lib/page-meta';

export const metadata = enPageMetadata({
  title: 'Boat Trips San Antonio Ibiza | Departing from San Antonio Bay | Salvador Ibiza',
  description: 'Join our boat trips departing from San Antonio Ibiza. Explore the best of Ibiza\'s west coast with our premium boat tours from San Antonio Bay. Day and sunset trips available.',
  path: '/boat-trips/san-antonio',
  keywords: 'boat trips san antonio ibiza, boat trips in ibiza san antonio, ibiza boat trips from san antonio, boat trips from san antonio ibiza, san antonio boat trips ibiza, boat tour san antonio ibiza, sunset boat trip ibiza san antonio',
  ogTitle: 'Boat Trips San Antonio Ibiza | Premium Departures from San Antonio Bay',
  ogDescription: 'Discover the best boat trips departing from San Antonio Ibiza. Premium day and sunset cruises exploring Ibiza\'s stunning west coast.',
  ogImage: '/images/optimized/salvador-ibiza-boat-drone-view.webp',
  ogImageAlt: 'Salvador boat trip departing from San Antonio Ibiza',
});

// JSON-LD structured data for San Antonio boat trips
const sanAntonioBoatTripsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Boat Trips from San Antonio Ibiza by Salvador",
  "description": "Premium boat trips departing from San Antonio Ibiza. Explore the west coast with our day and sunset cruises including drinks, tapas, and water sports.",
  "image": publicAssetUrl("/images/barcodesdedron.jpg"),
  "brand": {
    "@type": "Brand",
    "name": "Salvador Ibiza"
  },
  "offers": {
    "@type": "Offer",
    "url": absoluteUrl("/boat-trips/san-antonio"),
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