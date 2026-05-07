import { Metadata } from 'next';
import GalleryClientPage from './page.client';
import { pageAlternates } from '@/config/site';

export const metadata: Metadata = {
  title: 'Salvador Ibiza fotogalerij | Boottochten & beleving',
  description: 'Ontdek Ibiza door onze fotogalerij: dagtrips, zonsondergangen en privécharters aan boord van de Salvador.',
  alternates: pageAlternates('/gallery'),
};

// Define the type for image data
interface GalleryImage {
  src: string;
  alt: string;
}

// Define the image data here in the server component
const allImages: GalleryImage[] = [
  { src: "/images/boat/chicaspasandolomuybien.webp", alt: "Friends enjoying the sun on the deck of Salvador Ibiza" },
  { src: "/images/boat/parejafeliz.webp", alt: "Happy couple relaxing aboard Salvador Ibiza" },
  { src: "/images/boat/chicasmuyfelices.webp", alt: "Group of friends laughing and celebrating on the boat" },
  { src: "/images/boat/chicasagarrandofrutasdelabarra.webp", alt: "Enjoying fresh fruit at the Salvador Ibiza bar" },
  { src: "/images/boat/parejaensup.webp", alt: "Couple paddleboarding next to Salvador Ibiza" },
  { src: "/images/boat/familiaensup.webp", alt: "Family having fun together on a paddleboard" },
  { src: "/images/boat/doschicasfelicesenproa.webp", alt: "Two friends sunbathing on the boat's bow" },
  { src: "/images/boat/4chicasparadasentablaxxl.webp", alt: "Four friends posing on a giant paddleboard" },
  { src: "/images/boat/chicasenproamuyfelicdes.webp", alt: "Very happy friends enjoying the views from the bow" },
  { src: "/images/boat/chicassentadasdisfrutando.webp", alt: "Group sitting on the deck, enjoying the seascape" },
  { src: "/images/boat/aereabarco2.webp", alt: "Aerial drone shot of Salvador Ibiza at sea" },
  { src: "/images/optimized/salvador-ibiza-boat-drone-view.webp", alt: "Impressive aerial drone view of Salvador Ibiza" },
  { src: "/images/boat/vistaprobarcodesdealagua.webp", alt: "Water-level perspective of the Salvador Ibiza bow" },
  { src: "/images/boat/vistabarcoaereochicaspopa.webp", alt: "Aerial view of the boat with friends relaxing on the stern" },
  { src: "/images/boat/barcointerior.webp", alt: "Cozy wooden interior of Salvador Ibiza" },
  { src: "/images/boat/consolabarco.webp", alt: "Helm station and navigation console of Salvador Ibiza" },
  { src: "/images/boat/chicosdisfrutandoenproa.webp", alt: "Friends enjoying the ride on the boat's bow" },
  { src: "/images/boat/chicopillandofruta.webp", alt: "Guest helping themselves to fresh fruit from the onboard bar" },
  { src: "/images/boat/chicaensupparada.webp", alt: "Woman stand-up paddleboarding in calm waters" },
  { src: "/images/boat/dos-chica-disfrutand.webp", alt: "Two friends chatting and enjoying the boat trip" },
  { src: "/images/boat/gente-en-suo.webp", alt: "Group paddleboarding near the Ibiza coast" },
  { src: "/images/boat/doschicassupsunset.webp", alt: "Two friends paddleboarding during sunset" },
  { src: "/images/boat/chicaparadasup.webp", alt: "Woman standing on a paddleboard at sea" },
  { src: "/images/boat/luigienproconchcas.webp", alt: "Captain Luigi on the bow with guests enjoying the moment" },
  { src: "/images/boat/chicassentadassup.webp", alt: "Friends sitting and relaxing on paddleboards" },
  { src: "/images/boat/chicasensupencueva.webp", alt: "Paddleboarding adventure exploring a sea cave" },
  { src: "/images/boat/doschicasensup.webp", alt: "Two friends on paddleboards near the boat" },
  { src: "/images/boat/parejasnorkeling.webp", alt: "Couple snorkeling and discovering the seabed" },
  { src: "/images/boat/chicaparadaensup.png", alt: "Woman balancing on a paddleboard (wide view)" },
  { src: "/images/optimized/ibiza-sunset-boat-trip-salvador.webp", alt: "Spectacular sunset over the Ibiza sea" },
  { src: "/images/optimized/salvador-ibiza-boat-aerial-shot.webp", alt: "Panoramic aerial view of Salvador Ibiza" },
  { src: "/images/optimized/salvador-ibiza-boat-console-captain.webp", alt: "Detail of the Salvador Ibiza helm station" },
  { src: "/images/optimized/friends-ibiza-sunset-boat.webp", alt: "Silhouettes of friends enjoying the sunset aboard" },
  { src: "/images/optimized/salvador-ibiza-boat-cave-exploration.webp", alt: "The bow of Salvador Ibiza approaching a sea cave" },
  { src: "/images/optimized/drinks-cave-sunset-ibiza.webp", alt: "Glass of cava in front of a cave during sunset" },
  { src: "/images/optimized/salvador-ibiza-boat-tapas-service.webp", alt: "Delicious selection of Spanish tapas served onboard" },
  { src: "/images/optimized/toasting-drinks-ibiza-boat.webp", alt: "Friends toasting with drinks at the boat's bar" },
  { src: "/images/optimized/happy-friends-boat-stern-ibiza.webp", alt: "Happy and smiling friends on the stern of Salvador Ibiza" },
  { src: "/images/boat/chicasentablasup.png", alt: "Group having fun on a large paddleboard" },
  { src: "/images/boat/private-new/tapasycavapopabarco_1.webp", alt: "Tapas and cava served on the boat stern" }, 
  { src: "/images/boat/private-new/tapasenbarco_1.webp", alt: "Selection of tapas on the boat" },
  { src: "/images/boat/private-new/sushiycavapopa_1.webp", alt: "Sushi and cava on the boat stern" },
  { src: "/images/boat/private-new/interiorbarcosalvador_1.webp", alt: "Interior view of the Salvador boat" },
  { src: "/images/boat/private-new/Frutasenbarra_1.webp", alt: "Fresh fruits platter at the boat bar" },
  { src: "/images/boat/private-new/retretebarcoomg_1.webp", alt: "Modern toilet facilities on the boat" },
  { src: "/images/boat/private-new/retretebarco_1.webp", alt: "Clean and modern boat bathroom" },
  { src: "/images/boat/private-new/tapasyfrutasenbarco_1.webp", alt: "Tapas and fruits platter on the boat" },
  { src: "/images/boat/private-new/popabarcosalvador_1.webp", alt: "Stern view of the Salvador boat with lifebuoy" }, 
  { src: "/images/boat/private-new/barcosalvadorinterior_1.webp", alt: "Another interior view of the Salvador boat seating" },
  { src: "/images/boat/private-new/cavaenbarco_1.webp", alt: "Cava bottle and glasses on the boat" },
  { src: "/images/boat/private-new/interiorbarcocubierta_1.webp", alt: "View of the covered deck area of the boat" }
];

export default function GalleryPage() {
  // Pass the image data as a prop to the client component
  return <GalleryClientPage images={allImages} />;
}
