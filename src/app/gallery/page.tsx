import { Metadata } from 'next';
import GalleryClientPage from './page.client';

export const metadata: Metadata = {
  title: 'Gallery | Salvador Boat Ibiza',
  description: 'Explore our stunning photo gallery showcasing the best moments aboard Salvador in Ibiza. From crystal-clear waters to breathtaking sunsets, discover the luxury and beauty of our boat trips.',
};

export default function GalleryPage() {
  return <GalleryClientPage />;
}
