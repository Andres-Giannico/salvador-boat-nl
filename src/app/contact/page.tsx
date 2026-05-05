import ContactClientPage from './page.client';
import { enPageMetadata } from '@/lib/page-meta';

export const metadata = enPageMetadata({
  title: 'Contact | Salvador Boat Ibiza',
  description:
    'Get in touch with Salvador Boat Ibiza. Find our location at San Antonio Port, contact numbers, and directions to our meeting point.',
  path: '/contact',
});

export default function ContactPage() {
  return <ContactClientPage />;
}
