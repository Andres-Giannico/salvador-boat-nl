import { Metadata } from 'next';
import PrivateCharterClientPage from './page.client';
import { FiUsers, FiGift, FiStar, FiCamera, FiCalendar, FiHelpCircle, FiBriefcase } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Private Boat Charter Ibiza - Your Exclusive Salvador Experience',
  description: 'Charter the Salvador Ibiza boat exclusively for your group (up to 35 guests). Experience our curated routes around Ibiza\'s best spots, with drinks, snacks, skipper & watersports included. Perfect for celebrations, families, corporate events.',
};

// --- Data Definitions (to be passed to client) --- 

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
  return <PrivateCharterClientPage perfectFor={perfectForItems} />;
}
