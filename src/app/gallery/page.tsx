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
  { src: "/images/boat/chicaspasandolomuybien.webp", alt: "Vrienden genieten van de zon op het dek van Salvador Ibiza" },
  { src: "/images/boat/parejafeliz.webp", alt: "Gelukkig stel ontspannen aan boord van Salvador Ibiza" },
  { src: "/images/boat/chicasmuyfelices.webp", alt: "Groep vrienden lacht en viert feest op de boot" },
  { src: "/images/boat/chicasagarrandofrutasdelabarra.webp", alt: "Vers fruit aan de bar van Salvador Ibiza" },
  { src: "/images/boat/parejaensup.webp", alt: "Stel op paddleboard naast Salvador Ibiza" },
  { src: "/images/boat/familiaensup.webp", alt: "Gezin samen op een paddleboard" },
  { src: "/images/boat/doschicasfelicesenproa.webp", alt: "Twee vriendinnen zonnebaden op de voorplecht" },
  { src: "/images/boat/4chicasparadasentablaxxl.webp", alt: "Vier vriendinnen op een grote paddleboard" },
  { src: "/images/boat/chicasenproamuyfelicdes.webp", alt: "Vrolijke vrienden genieten van het uitzicht op de voorplecht" },
  { src: "/images/boat/chicassentadasdisfrutando.webp", alt: "Groep op het dek met uitzicht over zee" },
  { src: "/images/boat/aereabarco2.webp", alt: "Luchtopname van Salvador Ibiza op zee" },
  { src: "/images/optimized/salvador-ibiza-boat-drone-view.webp", alt: "Indrukwekkende drone-opname van Salvador Ibiza" },
  { src: "/images/boat/vistaprobarcodesdealagua.webp", alt: "Zicht vanaf het water op de voorplecht van Salvador Ibiza" },
  { src: "/images/boat/vistabarcoaereochicaspopa.webp", alt: "Luchtfoto: vrienden ontspannen op de achterplecht" },
  { src: "/images/boat/barcointerior.webp", alt: "Gezellig houten interieur van Salvador Ibiza" },
  { src: "/images/boat/consolabarco.webp", alt: "Stuurpost en navigatieconsole van Salvador Ibiza" },
  { src: "/images/boat/chicosdisfrutandoenproa.webp", alt: "Vrienden genieten van de vaart op de voorplecht" },
  { src: "/images/boat/chicopillandofruta.webp", alt: "Gast pakt vers fruit aan de bar op de boot" },
  { src: "/images/boat/chicaensupparada.webp", alt: "Vrouw op stand-up paddleboard in rustig water" },
  { src: "/images/boat/dos-chica-disfrutand.webp", alt: "Twee vriendinnen kletsen tijdens de boottocht" },
  { src: "/images/boat/gente-en-suo.webp", alt: "Groep paddleboardt langs de kust van Ibiza" },
  { src: "/images/boat/doschicassupsunset.webp", alt: "Twee vriendinnen op paddleboard bij zonsondergang" },
  { src: "/images/boat/chicaparadasup.webp", alt: "Vrouw staat op paddleboard op zee" },
  { src: "/images/boat/luigienproconchcas.webp", alt: "Kapitein Luigi op de voorplecht met tevreden gasten" },
  { src: "/images/boat/chicassentadassup.webp", alt: "Vrienden zitten ontspannen op paddleboards" },
  { src: "/images/boat/chicasensupencueva.webp", alt: "Paddleboardavontuur bij een zee-grot" },
  { src: "/images/boat/doschicasensup.webp", alt: "Twee vriendinnen op paddleboards bij de boot" },
  { src: "/images/boat/parejasnorkeling.webp", alt: "Stel snorkelt en ontdekt de zeebodem" },
  { src: "/images/boat/chicaparadaensup.png", alt: "Vrouw in evenwicht op paddleboard (breed beeld)" },
  { src: "/images/optimized/ibiza-sunset-boat-trip-salvador.webp", alt: "Spectaculaire zonsondergang boven zee bij Ibiza" },
  { src: "/images/optimized/salvador-ibiza-boat-aerial-shot.webp", alt: "Panoramische luchtopname van Salvador Ibiza" },
  { src: "/images/optimized/salvador-ibiza-boat-console-captain.webp", alt: "Detail van de stuurpost van Salvador Ibiza" },
  { src: "/images/optimized/friends-ibiza-sunset-boat.webp", alt: "Silhouetten van vrienden bij zonsondergang aan boord" },
  { src: "/images/optimized/salvador-ibiza-boat-cave-exploration.webp", alt: "Voorplecht van Salvador Ibiza nabij een zee-grot" },
  { src: "/images/optimized/drinks-cave-sunset-ibiza.webp", alt: "Glas cava voor een grot tijdens zonsondergang" },
  { src: "/images/optimized/salvador-ibiza-boat-tapas-service.webp", alt: "Heerlijke Spaanse tapas aan boord geserveerd" },
  { src: "/images/optimized/toasting-drinks-ibiza-boat.webp", alt: "Vrienden proosten aan de bar van de boot" },
  { src: "/images/optimized/happy-friends-boat-stern-ibiza.webp", alt: "Blije vrienden op de achterplecht van Salvador Ibiza" },
  { src: "/images/boat/chicasentablasup.png", alt: "Groep plezier op een grote paddleboard" },
  { src: "/images/boat/private-new/tapasycavapopabarco_1.webp", alt: "Tapas en cava op de achterplecht" },
  { src: "/images/boat/private-new/tapasenbarco_1.webp", alt: "Selectie tapas op de boot" },
  { src: "/images/boat/private-new/sushiycavapopa_1.webp", alt: "Sushi en cava op de achterplecht" },
  { src: "/images/boat/private-new/interiorbarcosalvador_1.webp", alt: "Interieur van boot Salvador Ibiza" },
  { src: "/images/boat/private-new/Frutasenbarra_1.webp", alt: "Vers fruitschotel aan de bootbar" },
  { src: "/images/boat/private-new/retretebarcoomg_1.webp", alt: "Moderne toilet aan boord" },
  { src: "/images/boat/private-new/retretebarco_1.webp", alt: "Nette moderne badkamer aan boord" },
  { src: "/images/boat/private-new/tapasyfrutasenbarco_1.webp", alt: "Tapas en fruitschotel op de boot" },
  { src: "/images/boat/private-new/popabarcosalvador_1.webp", alt: "Achterplecht van Salvador Ibiza met reddingsboei" },
  { src: "/images/boat/private-new/barcosalvadorinterior_1.webp", alt: "Zitgedeelte in het interieur van de Salvador" },
  { src: "/images/boat/private-new/cavaenbarco_1.webp", alt: "Cavafles en glazen aan boord" },
  { src: "/images/boat/private-new/interiorbarcocubierta_1.webp", alt: "Overdekt dek van de boot" }
];

export default function GalleryPage() {
  // Pass the image data as a prop to the client component
  return <GalleryClientPage images={allImages} />;
}
