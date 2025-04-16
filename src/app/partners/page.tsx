import Link from 'next/link';

export default function PartnersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Our Partners</h1>
      <p className="mb-6">
        We collaborate with leading companies and platforms to provide the best experience and booking options for our customers and partners.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Collaboration Partners */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Collaboration & Affiliates</h2>
          <p className="mb-4">
            Interested in collaborating with Salvador Ibiza? We offer partnership opportunities for hotels, travel agencies, influencers, and other businesses.
          </p>
          <Link href="/contact">
            <span className="text-blue-600 hover:underline font-medium">Contact us to learn more</span>
          </Link>
        </section>

        {/* Tech & Booking Partners */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Technology & Booking</h2>
          <p className="mb-4">
            We utilize advanced booking systems to streamline reservations and provide secure payment options.
          </p>
          <ul className="space-y-2">
            <li>
              <Link href="/partners/turbookings">
                <span className="text-blue-600 hover:underline">Integration with Turbookings</span>
              </Link>
            </li>
            {/* Add other tech partners if applicable */}
          </ul>
          <p className="mt-4">
            Are you a ticket seller or agent? Learn how you can earn commissions by selling our trips.
          </p>
          <Link href="/partners/earnings">
             <span className="text-blue-600 hover:underline font-medium">Unlock Instant Earnings</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
