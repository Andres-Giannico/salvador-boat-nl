import CorporateEventsClientPage from './page.client';
import { FiBriefcase, FiUsers, FiSun, FiCheckCircle, FiAward, FiCoffee, FiHelpCircle } from 'react-icons/fi';
import { GiPartyPopper, GiTeamIdea } from 'react-icons/gi';
import { pageMetadata } from '@/lib/page-meta';

// --- Metadata --- 
export const metadata = pageMetadata({
  title: 'Zakelijke events & boot charter op Ibiza',
  description:
    'Onvergetelijke bedrijfsuitjes, teambuilding, klantenentertainment of incentives aan boord van Salvador Ibiza in San Antonio.',
  path: '/corporate-events',
});

// --- Data Definitions (to be passed to client) --- 

const corporateHighlights = [
  { icon: FiBriefcase, title: "Unieke locatie op zee", description: "Weg van kantoor — indruk maken op klanten of collega's met een exclusieve setting op de Middellandse Zee."}, 
  { icon: GiTeamIdea, title: "Teamgevoel versterken", description: "Samenwerken en verbinden in een ontspannen omgeving met gedeelde activiteiten."}, 
  { icon: FiAward, title: "Ideaal voor incentives", description: "Beloon toppresteerders met een luxe en onvergetelijke dag op het water."}, 
  { icon: FiCheckCircle, title: "Professioneel & privé", description: "Ervaren bemanning zorgt voor een vlotte, discrete en professionele ervaring."}, 
];

const idealForItems = [
  { icon: FiUsers, title: "Teambuildingdagen", description: "Activiteiten en ontspanning om banden te versterken.", color: "text-blue-500" },
  { icon: FiBriefcase, title: "Klantenentertainment", description: "Meetings of dankjewel-momenten in stijl.", color: "text-purple-500" },
  { icon: FiAward, title: "Incentive-reizen", description: "Motiveren en belonen.", color: "text-yellow-500" },
  { icon: GiPartyPopper, title: "Bedrijfsfeesten", description: "Mijlpalen, successen of bedrijfsfeesten.", color: "text-pink-500" },
  { icon: FiSun, title: "Executive retreats", description: "Zakelijk combineren met ontspanning — privé.", color: "text-orange-500" },
];

const includedFeatures = [
  { name: "Exclusieve 4-uurs charter", description: "Privégebruik van de Salvador Ibiza (tot 35 gasten)" },
  { name: "Kapitein & bemanning", description: "Vlotte vaart en service" },
  { name: "Standaard open bar", description: "Frisdrank, bier, wijn, cava, sangría, water" },
  { name: "Lichte Spaanse tapas & fruit", description: "Catering inbegrepen" },
  { name: "Watersportuitrusting", description: "Paddleboards, kajaks, snorkelspullen" },
  { name: "Geluidssysteem aan boord", description: "Bluetooth voor jullie eigen muziek" },
  { name: "Aanpasbare route", description: "Op maat (weerpermitterend)" },
  {
    name: "Optioneel: fotograaf aan boord",
    description: "Herinneringen vastleggen — foto's eventueel apart te koop."
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