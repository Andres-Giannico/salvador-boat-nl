import { pageMetadata } from '@/lib/page-meta';

export const metadata = pageMetadata({
  title: 'Turbookings-integratie',
  description:
    'Hoe Salvador Ibiza samenwerkt met Turbookings: veilige online boeking, beschikbaarheid en partner tools.',
  path: '/partners/turbookings',
  robots: { index: true, follow: true },
});

export default function TurbookingsPage() {
  return (
    <div className="container mx-auto py-16 px-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Turbookings</h1>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Soepel boeken</h2>
        <p className="text-gray-700 leading-relaxed">
          Via Turbookings bieden we een betrouwbaar reserveringssysteem: live beschikbaarheid, beveiligde betalingen en duidelijke tripinformatie.
        </p>
        <h2 className="text-2xl font-semibold">Voordelen voor gasten</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Realtime beschikbaarheid en directe bevestiging.</li>
          <li>Veilige online betaling.</li>
          <li>Overzicht van je boeking en inbegrepen services.</li>
        </ul>
      </section>
    </div>
  );
}
