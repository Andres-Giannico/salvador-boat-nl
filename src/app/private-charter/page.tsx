import { Metadata } from 'next';
import PrivateCharterClientPage from './page.client';

export const metadata: Metadata = {
  title: 'Private Boat Charter Ibiza - Your Exclusive Salvador Experience',
  description: 'Charter the Salvador Ibiza boat exclusively for your group (up to 38 guests). Fully customizable routes, drinks, snacks, skipper & watersports included. Ideal for celebrations, families, corporate events.',
};

export default function PrivateCharterPage() {
  return <PrivateCharterClientPage />;
}
