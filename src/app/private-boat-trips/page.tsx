import Script from 'next/script';
import PrivateBoatTripsClientPage from './page.client';
import { FiUsers, FiGift, FiStar, FiCamera, FiCalendar, FiHelpCircle, FiBriefcase } from 'react-icons/fi';
import { absoluteUrl, publicAssetUrl } from '@/config/site';
import { pageMetadata } from '@/lib/page-meta';

export const metadata = pageMetadata({
  title: 'Privé boottochten Ibiza — exclusief met Salvador',
  description: '🛥️ Privé charter op Ibiza tot 35 gasten, route op maat, premium service en all-inclusive luxe. Vanaf €1.350 — boek je droomtrip!',
  path: '/private-boat-trips',
  keywords: 'private boottocht Ibiza, boot charter Ibiza, privé boot Ibiza, exclusieve boottocht, Salvador Ibiza',
  ogTitle: 'Privé boottochten Ibiza — Salvador',
  ogDescription: '🛥️ Exclusieve privé charter: tot 35 gasten, route op maat, premium service.',
  ogImage: '/images/boat/aereabarco2.webp',
  ogImageAlt: 'Luchtfoto van boot Salvador Ibiza tijdens privétrip',
});

// --- Data Definitions (to be passed to client) --- 

// JSON-LD structured data for private boat trips
const privateBoatTripsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Privé boottochten Ibiza bij Salvador",
  "description": "Exclusieve privé trips op Ibiza tot 35 gasten. Inclusief kapitein, open bar, hapjes en watersport.",
  "image": publicAssetUrl("/images/boat/aereabarco2.webp"),
  "brand": {
    "@type": "Brand",
    "name": "Salvador Ibiza"
  },
  "offers": {
    "@type": "Offer",
    "url": absoluteUrl("/private-boat-trips"),
    "priceCurrency": "EUR",
    "price": "1350",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "1350",
      "priceCurrency": "EUR",
      "valueAddedTaxIncluded": "false"
    },
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "278"
  }
};

// Helper to get icon name as string
const getIconName = (icon: any): string => {
  if (icon === FiUsers) return 'FiUsers';
  if (icon === FiGift) return 'FiGift';
  if (icon === FiStar) return 'FiStar';
  if (icon === FiCamera) return 'FiCamera';
  if (icon === FiCalendar) return 'FiCalendar';
  if (icon === FiBriefcase) return 'FiBriefcase';
  return 'FiHelpCircle'; // Default icon name
};

const perfectForItems = [
  { icon: getIconName(FiUsers), title: "Groepen & gezinnen", description: "Ruim dek voor iedereen.", color: "text-blue-500" },
  { icon: getIconName(FiGift), title: "Feesten", description: "Verjaardagen, jubilea, bijzondere dagen.", color: "text-pink-500" },
  { icon: getIconName(FiStar), title: "Speciale gelegenheden", description: "Huwelijksaanzoek, unieke events.", color: "text-yellow-500" },
  { icon: getIconName(FiCamera), title: "Fotoshoots", description: "Garantie op spectaculair decor.", color: "text-purple-500" },
  { icon: getIconName(FiCalendar), title: "Pre-/post-bruiloft", description: "Ontspan voor of na de grote dag.", color: "text-orange-500", href: "/weddings" },
  { 
    icon: getIconName(FiBriefcase), 
    title: "Zakelijke events", 
    description: "Teambuilding, klantenentertainment.", 
    color: "text-teal-500", 
    href: "/corporate-events" 
  },
];

// --- Server Component --- 
export default function PrivateBoatTripsPage() {
  return (
    <>
      <Script
        id="private-boat-trips-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privateBoatTripsJsonLd) }}
      />
      <PrivateBoatTripsClientPage perfectFor={perfectForItems} />
    </>
  );
} 