import Script from 'next/script';
import PrivateBoatTripsClientPage from './page.client';
import { FiUsers, FiGift, FiStar, FiCamera, FiCalendar, FiHelpCircle, FiBriefcase } from 'react-icons/fi';
import { enPageMetadata } from '@/lib/page-meta';
import { buildProductSchema } from '@/lib/product-schema';

export const metadata = enPageMetadata({
  title: 'Private Boat Trips Ibiza - Your Exclusive Salvador Experience',
  description: '🛥️ Exclusive private boat charter in Ibiza! Up to 35 guests, customized routes, premium service & all-inclusive luxury. From €1,350 - Book your dream trip!',
  path: '/private-boat-trips',
  keywords: 'private boat trips ibiza, private boat tour ibiza, event boat, ibiza private boat trips, private boat charter ibiza, exclusive boat tour',
  ogTitle: 'Private Boat Trips Ibiza - Exclusive Salvador Experience',
  ogDescription: '🛥️ Exclusive private boat charter in Ibiza! Up to 35 guests, customized routes, premium service & all-inclusive luxury.',
  ogImage: '/images/optimized/salvador-ibiza-cala-comte-wide-aerial-view.webp',
  ogImageAlt: 'Aerial drone view of the Salvador Ibiza boat during a private trip in Cala Comte.',
});

const getIconName = (icon: typeof FiUsers): string => {
  if (icon === FiUsers) return 'FiUsers';
  if (icon === FiGift) return 'FiGift';
  if (icon === FiStar) return 'FiStar';
  if (icon === FiCamera) return 'FiCamera';
  if (icon === FiCalendar) return 'FiCalendar';
  if (icon === FiBriefcase) return 'FiBriefcase';
  return 'FiHelpCircle';
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

export default async function PrivateBoatTripsPage() {
  const productSchema = await buildProductSchema({
    name: "Private Boat Trips Ibiza by Salvador",
    description:
      "Exclusive private boat trips in Ibiza for up to 35 guests. Includes captain, open bar, snacks, and water sports like paddleboarding and snorkeling.",
    path: "/private-boat-trips",
    price: "1350",
    image: "/images/optimized/salvador-ibiza-cala-comte-wide-aerial-view.webp",
  });

  return (
    <>
      <Script
        id="private-boat-trips-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <PrivateBoatTripsClientPage perfectFor={perfectForItems} />
    </>
  );
}
