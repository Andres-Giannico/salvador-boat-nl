import { Metadata } from 'next';
import ContactClientPage from './page.client';

export const metadata: Metadata = {
  title: 'Contact | Salvador Boat Ibiza',
  description: 'Get in touch with Salvador Boat Ibiza. Find our location at San Antonio Port, contact numbers, and directions to our meeting point.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return <ContactClientPage />;
}
