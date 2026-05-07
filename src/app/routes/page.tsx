import { WebPage, FAQPage, Question, Answer, WithContext } from 'schema-dts';
import { JsonLd } from 'react-schemaorg';
import RoutesClientPage from './page.client'; // Import the new client component
import { FiMapPin, FiAnchor, FiCompass } from 'react-icons/fi'; // Keep icons needed for data
import { GiWaterSplash, GiFamilyHouse } from 'react-icons/gi'; // Keep icons needed for data
import { pageMetadata } from '@/lib/page-meta';

// Metadata for the page (can be moved to page.tsx if refactored to Server Component)
export const metadata = pageMetadata({
  title: 'Onze vaarroutes — west- & noordkust Ibiza',
  description:
    'Ontdek de westkust (Cala Conta) en noordkust (Sa Foradada) met vertrek in San Antonio. De kapitein kiest dagelijks de beste route.',
  path: '/routes',
});

// Data for route stops
const westStopsData = [
  { 
    icon: FiAnchor, 
    title: "Port des Torrent", 
    description: "Rustig strand, kindvriendelijk en ondiep water — ideaal om te acclimatiseren voor verder naar zee."
  },
  { 
    icon: GiFamilyHouse,
    title: "Cala Bassa", 
    description: "Wit zand en dennenbomen. Bekend om Cala Bassa Beach Club — ontspannen en stijlvol."
  },
  { 
    icon: FiCompass,
    title: "Torre d'en Rovira", 
    description: "17e-eeuwse wachttoren met panorama over zee en eilandjes — indrukwekkend vanaf het water."
  },
  { 
    icon: GiWaterSplash, 
    title: "Cala Conta (Cala Comte)", 
    description: "Een van Ibiza's mooiste stranden: ondiep turquoise water, fijn zand en iconische zonsondergangen."
  },
];

const northStopsData = [
  { 
    icon: FiAnchor, 
    title: "Cala Gració & Cala Gracioneta", 
    description: "Charmante baaien bij San Antonio — perfect voor een duik en snorkel."
  },
  { 
    icon: FiMapPin,
    title: "Cala Salada", 
    description: "Langs dit beroemde baaitje met helder water en authentieke boothuisjes varen."
  },
  { 
    icon: GiWaterSplash, 
    title: "Cap Blanc (Aquarium)", 
    description: "Ruige kustlijn met een natuurlijke ‘aquarium’-zee-grot."
  },
  { 
    icon: FiAnchor,
    title: "Sa Foradada", 
    description: "Ankeren bij dit iconische rotsformatie — rustig, natuurlijk en kraakhelder water."
  },
];

// Type for passing props to client (ensure IconType is handled correctly if needed)
// For simplicity, we might pass icon names as strings if IconType causes issues across boundaries
interface RouteStopProp {
  icon: string; // Pass icon name as string
  title: string;
  description: string;
}

// Helper to convert icon component to name (example - adjust based on actual icons)
const getIconName = (icon: any): string => {
  if (icon === FiAnchor) return 'FiAnchor';
  if (icon === GiFamilyHouse) return 'GiFamilyHouse';
  if (icon === FiCompass) return 'FiCompass';
  if (icon === GiWaterSplash) return 'GiWaterSplash';
  if (icon === FiMapPin) return 'FiMapPin';
  // Add other icons used
  return 'FiHelpCircle'; // Default
}

// --- Server Component Logic --- 
export default async function RoutesPage() {

  // --- Structured Data Definitions --- 
  const faqQuestion: Question = {
    '@type': 'Question',
    name: "Hoe wordt de route elke dag gekozen?",
    acceptedAnswer: { 
      '@type': 'Answer',
      text: "Afhankelijk van zee en wind kiest onze ervaren kapitein de prettigste en veiligste route (west of noord). Beide routes bieden spectaculaire kustlijn en zwemstops."
    }
  };

  const faqSchema: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [faqQuestion]
  };

  const pageSchema: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: String(metadata.title || 'Salvador Ibiza Boat Routes'),
    description: String(metadata.description || 'Explore Ibiza\'s coast by boat.'),
    url: '/routes',
  };

  // Extract text for passing as props - Ensure acceptedAnswer exists and has text
  const questionName = String(faqQuestion.name || '');
  // Check if acceptedAnswer exists and has a 'text' property before accessing
  const answerText = (faqQuestion.acceptedAnswer && 'text' in faqQuestion.acceptedAnswer) 
                    ? String(faqQuestion.acceptedAnswer.text || '') 
                    : '';

  // Prepare data for client component (pass icon names)
  const westStopsProps = westStopsData.map(stop => ({ ...stop, icon: getIconName(stop.icon) }));
  const northStopsProps = northStopsData.map(stop => ({ ...stop, icon: getIconName(stop.icon) }));

  return (
    <>
      {/* Inject JSON-LD Structured Data */} 
      <JsonLd<WebPage> item={pageSchema} /> 
      <JsonLd<FAQPage> item={faqSchema} />

      {/* Render the Client Component, passing data */}
      <RoutesClientPage 
        westStops={westStopsProps} 
        northStops={northStopsProps} 
        questionName={questionName} 
        answerText={answerText} 
      />
    </>
  );
} 