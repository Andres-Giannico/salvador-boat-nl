import { Metadata } from 'next';
import Script from 'next/script';
import PrivateBoatTripsClientPage from './page.client';
import { FiUsers, FiGift, FiStar, FiCamera, FiCalendar, FiHelpCircle, FiBriefcase } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Private Boat Trips Ibiza - Your Exclusive Salvador Experience',
  description: 'Book the best private boat trips in Ibiza with Salvador. Charter our exclusive boat for your group (up to 35 guests). Perfect for celebrations, corporate events, and special occasions. An all-inclusive experience with drinks, snacks, and water sports.',
  keywords: 'private boat trips ibiza, private boat tour ibiza, event boat, ibiza private boat trips, private boat charter ibiza, exclusive boat tour',
  alternates: {
    canonical: '/private-boat-trips',
  },
  openGraph: {
    title: 'Private Boat Trips Ibiza - Exclusive Salvador Experience',
    description: 'Charter the Salvador Ibiza boat exclusively for your group. Perfect for celebrations, corporate events, and special occasions.',
    url: 'https://salvadoribiza.com/private-boat-trips',
    images: [
      {
        url: '/images/boat/aereabarco2.webp',
        width: 1200,
        height: 630,
        alt: 'An aerial view of the Salvador Ibiza boat during a private trip.',
      }
    ],
  },
};

// --- Data Definitions (to be passed to client) --- 

// JSON-LD structured data for private boat trips
const privateBoatTripsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Private Boat Trips Ibiza by Salvador",
  "description": "Exclusive private boat trips in Ibiza for up to 35 guests. Includes captain, open bar, snacks, and water sports like paddleboarding and snorkeling.",
  "image": "https://salvadoribiza.com/images/boat/aereabarco2.webp",
  "brand": {
    "@type": "Brand",
    "name": "Salvador Ibiza"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://salvadoribiza.com/private-boat-trips",
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
  { icon: getIconName(FiUsers), title: "Groups & Families", description: "Spacious deck for everyone.", color: "text-blue-500" },
  { icon: getIconName(FiGift), title: "Celebrations", description: "Birthdays, anniversaries, special days.", color: "text-pink-500" },
  { icon: getIconName(FiStar), title: "Special Occasions", description: "Proposals, unique events.", color: "text-yellow-500" },
  { icon: getIconName(FiCamera), title: "Photo Shoots", description: "Stunning backdrops guaranteed.", color: "text-purple-500" },
  { icon: getIconName(FiCalendar), title: "Pre/Post Wedding Parties", description: "Relax before or after the big day.", color: "text-orange-500", href: "/weddings" },
  { 
    icon: getIconName(FiBriefcase), 
    title: "Corporate Events", 
    description: "Team building, client entertainment.", 
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