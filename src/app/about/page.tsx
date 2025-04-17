import { Metadata } from 'next';
import AboutClientPage from './page.client';

export const metadata: Metadata = {
  title: 'About Us | Salvador Ibiza - Premium Boat Experiences',
  description: 'Discover the story behind Salvador Ibiza, your premium boat charter service in Ibiza. Experience luxury, comfort, and unforgettable moments on the Mediterranean Sea.',
};

export default function AboutPage() {
  return <AboutClientPage />;
}
