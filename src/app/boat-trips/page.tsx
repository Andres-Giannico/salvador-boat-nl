import BoatTripsClientPage from './page.client';
import { pageMetadata } from '@/lib/page-meta';

export const metadata = pageMetadata({
  title: 'Boottochten Ibiza — dag- & zonsondergangtrips',
  description:
    'De beste boottochten op Ibiza met Salvador: all-inclusive dagtrip of magische zonsondergang. Paddleboards, snorkelen, open bar en iconische sunsets. Boek nu!',
  path: '/boat-trips',
});

export default function BoatTripsPage() {
  return <BoatTripsClientPage />;
}
