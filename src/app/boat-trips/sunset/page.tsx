import SunsetBoatTripsClientPage from './page.client';
import { absoluteUrl, publicAssetUrl } from '@/config/site';
import { pageMetadata } from '@/lib/page-meta';

export const metadata = pageMetadata({
  title: 'Zonsondergang boottochten Ibiza',
  description: 'Magische zonsondergang op zee met Salvador: avondcruise, premium drankjes en vergezichten over de Middellandse Zee.',
  path: '/boat-trips/sunset',
  keywords: 'zonsondergang boot Ibiza, sunset cruise Ibiza, avond boottocht Ibiza',
  ogTitle: 'Zonsondergang boottochten Ibiza',
  ogDescription: 'Avondtrips met drankjes, tapas en iconische sunsets.',
  ogImage: '/images/optimized/sunset-sailing-cruise-ibiza.webp',
  ogImageAlt: 'Zonsondergang tijdens boottrip Ibiza',
});

// JSON-LD structured data for sunset boat trips
const sunsetBoatTripsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Zonsondergang boottochten Ibiza — Salvador",
  "description": "Avondcruise vanuit San Antonio met drankjes, tapas en spectaculaire zonsondergang. Ongeveer 3 uur.",
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