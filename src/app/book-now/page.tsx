import BookNowClientPage from './page.client';
import { pageMetadata } from '@/lib/page-meta';

export const metadata = pageMetadata({
  title: 'Boek je boottocht op Ibiza',
  description:
    'Boek eenvoudig online een gedeelde dag- of zonsondergangtrip of een privé charter bij Salvador Ibiza.',
  path: '/book-now',
});

export default function BookNowPage() {
  return <BookNowClientPage />;
} 