import HomePageContent from '@/components/HomePageContent';
import { pageMetadata } from '@/lib/page-meta';

export const metadata = pageMetadata({
  title: 'Salvador Ibiza - Boottochten & privé charter',
  description:
    'De beste boottochten en privé-charters op Ibiza met Salvador. All-inclusive excursies, magische zonsondergangen en herinneringen voor het leven.',
  path: '/',
  keywords:
    'Salvador Ibiza, boottochten Ibiza, privé charter, excursies Ibiza, sunset cruise, Es Vedrà, boot huren Ibiza',
});

export default function HomePage() {
  return <HomePageContent />;
}
