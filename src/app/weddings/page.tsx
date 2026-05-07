import WeddingsClientPage from './page.client';
import { getSiteUrl } from '@/config/site';
import { pageMetadata } from '@/lib/page-meta';

export const metadata = pageMetadata({
  title: 'Bruiloften op zee op Ibiza',
  description: '💒 Droombruiloft op zee: ceremonie aan boord van de traditionele Salvador, zonsondergang en pakketten vanaf €1.500.',
  path: '/weddings',
  keywords: 'Ibiza bruiloft, boot bruiloft, ceremonie op zee, bruiloft San Antonio, Salvador Ibiza, sunset wedding',
  ogTitle: 'Bruiloften op zee | Salvador Ibiza',
  ogDescription: '💒 Romantische ceremonie op zee met zonsondergang en all-inclusive opties.',
  ogImage: '/images/boat/private-new/tapasycavapopabarco_1.webp',
  ogImageAlt: 'Bruiloftssetup met catering op boot Salvador Ibiza',
});

// Wedding Schema for better SEO
const weddingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Bootbruiloften Ibiza",
  "description": "Romantische ceremonies en feesten aan boord van de houten boot Salvador Ibiza.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Salvador Ibiza",
    "url": getSiteUrl()
  },
  "areaServed": {
    "@type": "Place",
    "name": "Ibiza, Balearic Islands, Spain"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Romantic Elopement Package",
      "description": "Intimate wedding ceremony for up to 6 guests with champagne toast and romantic cruise",
      "price": "1500",
      "priceCurrency": "EUR"
    },
    {
      "@type": "Offer", 
      "name": "Intimate Celebration Package",
      "description": "Wedding celebration for up to 20 guests with premium catering, open bar and wedding coordinator",
      "price": "2500",
      "priceCurrency": "EUR"
    },
    {
      "@type": "Offer",
      "name": "Luxury Wedding Package", 
      "description": "Ultimate wedding experience for up to 35 guests with professional photographer and custom decorations",
      "price": "4000",
      "priceCurrency": "EUR"
    }
  ],
  "serviceType": "Wedding Ceremony",
  "category": "Wedding Services",
  "audience": {
    "@type": "Audience",
    "name": "Couples planning destination weddings"
  }
};

export default function WeddingsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(weddingSchema) }}
      />
      <WeddingsClientPage />
    </>
  );
} 