import ContactClientPage from './page.client';
import { pageMetadata } from '@/lib/page-meta';

export const metadata = pageMetadata({
  title: 'Contact',
  description:
    'Neem contact op met Salvador Ibiza: haven van San Antonio, telefoon, route en meetingpoint voor je boottocht.',
  path: '/contact',
});

export default function ContactPage() {
  return <ContactClientPage />;
}
