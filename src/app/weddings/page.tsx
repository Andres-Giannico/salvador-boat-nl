import WeddingsClientPage from './page.client';
import { getSiteUrl } from '@/config/site';
import { enPageMetadata } from '@/lib/page-meta';

export const metadata = enPageMetadata({
  title: 'Ibiza Boat Weddings | Unforgettable Ceremonies at Sea | Salvador Ibiza',
  description: '💒 Dream wedding at sea in Ibiza! Intimate ceremonies aboard our traditional boat with stunning sunsets, all-inclusive packages from €1,500. Book your perfect day!',
  path: '/weddings',
  keywords: 'Ibiza wedding, boat wedding, sea wedding ceremony, romantic wedding Ibiza, elopement Ibiza, wedding packages, intimate wedding, sunset wedding, luxury boat charter, Salvador Ibiza, wedding at sea, destination wedding',
  ogTitle: 'Ibiza Boat Weddings | Dream Ceremonies at Sea',
  ogDescription: '💒 Create your perfect wedding at sea in Ibiza! Intimate ceremonies with stunning sunsets and all-inclusive packages.',
  ogImage: '/images/boat/private-new/tapasycavapopabarco_1.webp',
  ogImageAlt: 'Elegant wedding setup with champagne and catering on Salvador Ibiza boat',
});

// Wedding Schema for better SEO
const weddingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Ibiza Boat Wedding Ceremonies",
  "description": "Romantic wedding ceremonies and celebrations aboard Salvador Ibiza traditional wooden boat. Intimate packages for elopements and luxury weddings at sea.",
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