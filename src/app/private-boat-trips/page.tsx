import Script from 'next/script';
import PrivateBoatTripsClientPage from './page.client';
import { FiUsers, FiGift, FiStar, FiCamera, FiCalendar, FiHelpCircle, FiBriefcase } from 'react-icons/fi';
import { pageMetadata } from '@/lib/page-meta';
import { buildProductSchema } from '@/lib/product-schema';

export const metadata = pageMetadata({
  title: 'Privé boottochten Ibiza — exclusief met Salvador',
  description: '🛥️ Privé charter op Ibiza tot 35 gasten, route op maat, premium service en all-inclusive luxe. Vanaf €1.350 — boek je droomtrip!',
  path: '/private-boat-trips',
  keywords: 'private boottocht Ibiza, boot charter Ibiza, privé boot Ibiza, exclusieve boottocht, Salvador Ibiza',
  ogTitle: 'Privé boottochten Ibiza — Salvador',
  ogDescription: '🛥️ Exclusieve privé charter: tot 35 gasten, route op maat, premium service.',
  ogImage: '/images/optimized/salvador-ibiza-cala-comte-wide-aerial-view.webp',
  ogImageAlt: 'Luchtdrone-opname van boot Salvador Ibiza tijdens privétrip in Cala Comte.',
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

export default async function PrivateBoatTripsPage() {
  const productSchema = await buildProductSchema({
    name: "Privé boottochten Ibiza bij Salvador",
    description:
      "Exclusieve privé trips op Ibiza tot 35 gasten. Inclusief kapitein, open bar, hapjes en watersport.",
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
