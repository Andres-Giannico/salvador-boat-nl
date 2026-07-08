import { WebPage, FAQPage, Question, Answer, WithContext } from 'schema-dts';
import { JsonLd } from 'react-schemaorg';
import RoutesClientPage from './page.client'; // Import the new client component
import { FiMapPin, FiAnchor, FiCompass } from 'react-icons/fi'; // Keep icons needed for data
import { GiWaterSplash, GiFamilyHouse } from 'react-icons/gi'; // Keep icons needed for data
import { enPageMetadata } from '@/lib/page-meta';

// Metadata for the page (can be moved to page.tsx if refactored to Server Component)
export const metadata = enPageMetadata({
  title: 'Our Boat Routes - Explore Ibiza\'s West & North Coasts',
  description:
    'Discover Salvador Ibiza\'s stunning West Coast (Cala Conta) and North Coast (Sa Foradada) boat routes departing from San Antonio. Captain chooses best route daily.',
  path: '/routes',
});

// Data for route stops
const westStopsData = [
  { 
    icon: FiAnchor, 
    title: "Port des Torrent", 
    description: "A calm, family-friendly beach with shallow waters – a great warm-up before heading to more remote locations."
  },
  { 
    icon: GiFamilyHouse, // Representing the Beach Club vibe
    title: "Cala Bassa", 
    description: "Known for soft white sand and pine surroundings. Home to the famous Cala Bassa Beach Club (CBbC), offering an upscale but relaxed vibe."
  },
  { 
    icon: FiCompass, // Representing the historical viewpoint
    title: "Torre d'en Rovira", 
    description: "A 17th-century watchtower offering panoramic views over the sea and islets. A stunning sight from the water."
  },
  { 
    icon: GiWaterSplash, 
    title: "Cala Conta (Cala Comte)", 
    description: "Arguably one of Ibiza's most beautiful beaches. Boasts shallow turquoise waters, fine sand, and legendary sunset views."
  },
];

const northStopsData = [
  { 
    icon: FiAnchor, 
    title: "Cala Gració & Cala Gracioneta", 
    description: "Charming coves near San Antonio, perfect for a quick swim and snorkel."
  },
  { 
    icon: FiMapPin, // Representing a notable point passed
    title: "Cala Salada", 
    description: "Cruise past this famous picturesque cove known for its clear waters and rustic boathouses."
  },
  { 
    icon: GiWaterSplash, 
    title: "Cap Blanc (Aquarium)", 
    description: "View the rugged coastline home to a natural aquarium sea cave."
  },
  { 
    icon: FiAnchor, // Representing the anchor/destination spot
    title: "Sa Foradada Area", 
    description: "Anchor near this iconic rock formation, enjoying crystal-clear waters in a peaceful, natural setting."
  },
];

// Make descriptions shorter for brevity in this example
westStopsData.forEach(s => { s.description = s.description.substring(0, 70) + '...'; });
northStopsData.forEach(s => { s.description = s.description.substring(0, 70) + '...'; });

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
    name: "How is the route decided each day?",
    acceptedAnswer: { 
      '@type': 'Answer',
      text: "Depending on sea and wind conditions on the day, our experienced captain will choose the most enjoyable and safest route (West or North) for your tour. Both routes offer incredible scenery and swim stops!"
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