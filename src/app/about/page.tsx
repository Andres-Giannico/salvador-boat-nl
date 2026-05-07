import AboutClientPage from './page.client';
import { pageMetadata } from '@/lib/page-meta';

export const metadata = pageMetadata({
  title: 'Over ons — premium bootervaring op Ibiza',
  description:
    'Het verhaal van Salvador Ibiza: luxe boottochten, comfort en onvergetelijke momenten op de Middellandse Zee.',
  path: '/about',
});

export default function AboutPage() {
  return <AboutClientPage />;
}
