import SunsetBoatTripsClientPage from './page.client';
import { absoluteUrl, publicAssetUrl } from '@/config/site';
import { pageMetadata } from '@/lib/page-meta';
import { buildFaqPageSchema } from '@/lib/faq-schema';
import { sunsetBoatTripFaqs } from '@/lib/topic-faqs';

export const metadata = pageMetadata({
  title: 'Beste zonsondergangboottochten Ibiza | Magische avondcruises',
  description: 'Beleef magische zonsondergangboottochten op Ibiza met Salvador. Avondcruises met adembenemende sunsets, premium drankjes en onvergetelijke herinneringen op de Middellandse Zee.',
  path: '/boat-trips/sunset',
  keywords: 'ibiza zonsondergang boottocht, sunset boot Ibiza, avond boottocht Ibiza, zonsondergang vanaf boot, boottocht zonsondergang san antonio ibiza',
  ogTitle: 'Zonsondergang boottochten Ibiza | Magische avondcruises',
  ogDescription: 'Magische zonsondergangboottochten op Ibiza met Salvador. Premium avondcruises met drankjes, tapas en adembenemende mediterrane sunsets.',
  ogImage: '/images/optimized/sunset-sailing-cruise-ibiza.webp',
  ogImageAlt: 'Prachtige zonsondergang tijdens boottocht op Ibiza met Salvador',
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

const sunsetFaqSchema = buildFaqPageSchema(sunsetBoatTripFaqs);

export default function SunsetBoatTripsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sunsetBoatTripsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sunsetFaqSchema) }}
      />
      <SunsetBoatTripsClientPage />
    </>
  );
} 