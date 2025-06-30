import { Metadata } from 'next';
import PrivateCharterClientPage from './page.client';
import { FiUsers, FiGift, FiStar, FiCamera, FiCalendar, FiHelpCircle, FiBriefcase } from 'react-icons/fi';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Private Boat Charter Ibiza - Your Exclusive Salvador Experience',
  description: 'Charter the Salvador Ibiza boat exclusively for your group (up to 35 guests). Experience our curated routes around Ibiza\'s best spots, with drinks, snacks, skipper & watersports included. Perfect for celebrations, families, corporate events.',
  alternates: {
    canonical: '/private-charter',
  },
};

// --- Data Definitions (to be passed to client) --- 

const privateCharterJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Private Charter in Ibiza - Salvador Ibiza",
  "image": [
    "https://salvadoribiza.com/images/charter-privado.jpg"
  ],
  "description": "Private boat rental in Ibiza with captain. Enjoy 4 hours of navigation with catering, drinks, paddle surf and snorkel included.",
  "brand": {
    "@type": "Organization",
    "name": "Salvador Ibiza"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://salvadoribiza.com/charter-privado-ibiza/",
    "priceCurrency": "EUR",
    "price": "1350.00",
    "itemCondition": "https://schema.org/NewCondition",
    "availability": "https://schema.org/InStock",
    "validFrom": "2025-06-25"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.9",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Verified Customer"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "73"
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
export default function PrivateCharterPage() {
  return (
    <>
      <Script
        id="private-charter-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privateCharterJsonLd) }}
      />
      <PrivateCharterClientPage perfectFor={perfectForItems} />
    </>
  );
}
