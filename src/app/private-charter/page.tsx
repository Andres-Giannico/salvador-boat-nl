import { Metadata } from 'next';
import PrivateCharterClientPage from './page.client';

export const metadata: Metadata = {
  title: 'Private Boat Charter Ibiza - Your Exclusive Salvador Experience',
  description: 'Charter the Salvador Ibiza boat exclusively for your group (up to 35 guests). Experience our curated routes around Ibiza\'s best spots, with drinks, snacks, skipper & watersports included. Perfect for celebrations, families, corporate events.',
};

export default function PrivateCharterPage() {
  return <PrivateCharterClientPage />;
}
