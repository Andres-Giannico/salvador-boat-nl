import CorporateEventsClientPage from './page.client';
import { FiBriefcase, FiUsers, FiSun, FiCheckCircle, FiAward, FiCoffee, FiHelpCircle } from 'react-icons/fi';
import { GiPartyPopper, GiTeamIdea } from 'react-icons/gi';
import { enPageMetadata } from '@/lib/page-meta';

// --- Metadata --- 
export const metadata = enPageMetadata({
  title: 'Corporate Events & Boat Charters in Ibiza',
  description:
    'Host unforgettable corporate events, team building activities, client entertainment, or incentive trips aboard Salvador Ibiza, a stunning traditional boat in San Antonio.',
  path: '/corporate-events',
});

// --- Data Definitions (to be passed to client) --- 

const corporateHighlights = [
  { icon: FiBriefcase, title: "Unique & Memorable Venue", description: "Escape the office and impress clients or colleagues with an exclusive setting on the Mediterranean."}, 
  { icon: GiTeamIdea, title: "Boost Team Morale", description: "Foster collaboration and connection in a relaxed, inspiring environment with shared activities."}, 
  { icon: FiAward, title: "Ideal for Incentives", description: "Reward your top performers with a luxurious and unforgettable day out on the water."}, 
  { icon: FiCheckCircle, title: "Professional & Private", description: "Our experienced crew ensures a smooth, discreet, and professional experience for your group."}, 
];

const idealForItems = [
  { icon: FiUsers, title: "Team Building Days", description: "Activities and relaxation to strengthen bonds.", color: "text-blue-500" },
  { icon: FiBriefcase, title: "Client Entertainment", description: "Host meetings or thank clients in style.", color: "text-purple-500" },
  { icon: FiAward, title: "Incentive Trips", description: "Motivate and reward achievements.", color: "text-yellow-500" },
  { icon: GiPartyPopper, title: "Company Celebrations", description: "Milestones, successes, or corporate parties.", color: "text-pink-500" },
  { icon: FiSun, title: "Executive Retreats", description: "Combine business with pleasure in a private setting.", color: "text-orange-500" },
];

const includedFeatures = [
  { name: "Exclusive 4-Hour Charter", description: "Private use of Salvador Ibiza (up to 35 guests)" },
  { name: "Captain & Professional Crew", description: "Ensuring smooth sailing and service" },
  { name: "Standard Open Bar", description: "Soft drinks, beer, wine, cava, sangria, water" },
  { name: "Light Spanish Tapas & Fruit", description: "Complimentary catering included" },
  { name: "Water Activities Equipment", description: "Paddleboards, kayaks, snorkeling gear" },
  { name: "Onboard Sound System", description: "Bluetooth enabled for your choice of music" },
  { name: "Customizable Route Options", description: "Tailor the journey (weather permitting)" },
  {
    name: "Optional Onboard Photographer",
    description: "Capture memories! Photos available for optional purchase afterwards."
  }
];

// Helper to get icon name as string
const getIconName = (icon: any): string => {
  // Add all icons used in the data arrays above
  if (icon === FiBriefcase) return 'FiBriefcase';
  if (icon === GiTeamIdea) return 'GiTeamIdea';
  if (icon === FiAward) return 'FiAward';
  if (icon === FiCheckCircle) return 'FiCheckCircle';
  if (icon === FiUsers) return 'FiUsers';
  if (icon === GiPartyPopper) return 'GiPartyPopper';
  if (icon === FiSun) return 'FiSun';
  return 'FiHelpCircle'; // Default icon name
};

// --- Server Component --- 
export default async function CorporateEventsPage() {
  // Prepare props for client component with icon names as strings
  const highlightsProps = corporateHighlights.map(item => ({ ...item, icon: getIconName(item.icon) }));
  const idealForProps = idealForItems.map(item => ({ ...item, icon: getIconName(item.icon) }));

  return (
    <>
      {/* Optional: Add JSON-LD Schema for Service */}
      <CorporateEventsClientPage 
        highlights={highlightsProps}
        idealFor={idealForProps}
        included={includedFeatures}
      />
    </>
  );
} 