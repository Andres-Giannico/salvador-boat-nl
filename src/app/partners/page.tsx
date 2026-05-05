import PartnersClientPage from './page.client';
import { enPageMetadata } from '@/lib/page-meta';

export const metadata = enPageMetadata({
  title: 'Partners & Turbookings | Salvador Boat Ibiza',
  description:
    "Join Salvador Boat Ibiza's partner network. Integrate our booking system with Turbookings and offer premium maritime experiences to your clients. Perfect for hotels, concierges, and travel websites.",
  path: '/partners',
});

export default function PartnersPage() {
  return <PartnersClientPage />;
}
