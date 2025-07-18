import { Metadata } from 'next';
import WeddingsClientPage from './page.client';

export const metadata: Metadata = {
  title: 'Ibiza Boat Weddings | Unforgettable Ceremonies at Sea | Salvador Ibiza',
  description: '💒 Dream wedding at sea in Ibiza! Intimate ceremonies aboard our traditional boat with stunning sunsets, all-inclusive packages from €1,500. Book your perfect day!',
  keywords: 'Ibiza wedding, boat wedding, sea wedding ceremony, romantic wedding Ibiza, elopement Ibiza, wedding packages, intimate wedding, sunset wedding, luxury boat charter, Salvador Ibiza, wedding at sea, destination wedding',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/weddings',
  },
  openGraph: {
    title: 'Ibiza Boat Weddings | Dream Ceremonies at Sea',
    description: '💒 Create your perfect wedding at sea in Ibiza! Intimate ceremonies with stunning sunsets and all-inclusive packages.',
    url: 'https://salvadoribiza.com/weddings',
    images: [
      {
        url: '/images/boat/private-new/tapasycavapopabarco_1.webp',
        width: 1200,
        height: 630,
        alt: 'Elegant wedding setup with champagne and catering on Salvador Ibiza boat',
      }
    ],
  },
};

// Wedding Schema for better SEO
const weddingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Ibiza Boat Wedding Ceremonies",
  "description": "Romantic wedding ceremonies and celebrations aboard Salvador Ibiza traditional wooden boat. Intimate packages for elopements and luxury weddings at sea.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Salvador Ibiza",
    "url": "https://salvadoribiza.com"
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