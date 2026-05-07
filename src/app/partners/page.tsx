import PartnersClientPage from './page.client';
import { pageMetadata } from '@/lib/page-meta';

export const metadata = pageMetadata({
  title: 'Partners & Turbookings | Salvador Ibiza',
  description:
    'Word partner van Salvador Ibiza: koppel Turbookings en bied premium bootervaringen aan je gasten. Geschikt voor hotels, conciërges en agentschappen.',
  path: '/partners',
});

export default function PartnersPage() {
  return <PartnersClientPage />;
}
