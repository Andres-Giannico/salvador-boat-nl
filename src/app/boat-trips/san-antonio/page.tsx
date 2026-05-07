import SanAntonioBoatTripsClientPage from './page.client';
import { absoluteUrl, publicAssetUrl } from '@/config/site';
import { pageMetadata } from '@/lib/page-meta';

export const metadata = pageMetadata({
  title: 'Boottochten San Antonio Ibiza',
  description: 'Vertrek vanuit de baai van San Antonio: premium dag- en zonsondergangtrips langs de westkust van Ibiza.',
  path: '/boat-trips/san-antonio',
  keywords: 'boottocht san antonio ibiza, sunset san antonio, haven san antonio boot',
  ogTitle: 'Boottochten vanuit San Antonio',
  ogDescription: 'Dag- en avondtrips vanuit San Antonio met Salvador.',
  ogImage: '/images/optimized/salvador-ibiza-boat-drone-view.webp',
  ogImageAlt: 'Boot Salvador vertrekkend in San Antonio',
});

// JSON-LD structured data for San Antonio boat trips
const sanAntonioBoatTripsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Boottochten vanuit San Antonio — Salvador",
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