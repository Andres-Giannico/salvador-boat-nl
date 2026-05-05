import AboutClientPage from './page.client';
import { enPageMetadata } from '@/lib/page-meta';

export const metadata = enPageMetadata({
  title: 'About Us | Salvador Ibiza - Premium Boat Experiences',
  description:
    'Discover the story behind Salvador Ibiza, your premium boat charter service in Ibiza. Experience luxury, comfort, and unforgettable moments on the Mediterranean Sea.',
  path: '/about',
});

export default function AboutPage() {
  return <AboutClientPage />;
}
