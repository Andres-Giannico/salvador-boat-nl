import Link from 'next/link';

export default function EarningsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Unlock Instant Earnings with Salvador Ibiza</h1>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Partner with Us and Earn Commissions</h2>
        <p className="text-gray-700 leading-relaxed">
          Join our network of partners and start earning competitive commissions by selling Salvador Ibiza boat trips. We offer attractive rates for travel agencies, hotels, points of sale, concierges, and online affiliates.
        </p>
        <h2 className="text-2xl font-semibold">How It Works</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>
            <strong>Sign Up:</strong> Register as an official Salvador Ibiza partner through our system (powered by <Link href="/partners/turbookings"><span className="text-blue-600 hover:underline">Turbookings</span></Link>).
            {/* Add specific sign-up link/instructions if available */}
          </li>
          <li>
            <strong>Get Access:</strong> Receive access to our partner portal with real-time availability, booking tools, and promotional materials.
          </li>
          <li>
            <strong>Sell Trips:</strong> Offer our popular all-inclusive boat trips and private charters to your clients.
          </li>
          <li>
            <strong>Earn Commission:</strong> Receive instant or regular commission payments for every successful booking made through your unique partner link or account.
          </li>
        </ol>
        <h2 className="text-2xl font-semibold">Why Partner with Salvador Ibiza?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>High demand product: Unique and popular boat trips in Ibiza.</li>
          <li>Competitive commission rates.</li>
          <li>Easy-to-use booking platform (<Link href="/partners/turbookings"><span className="text-blue-600 hover:underline">Turbookings</span></Link>).</li>
          <li>Reliable payouts.</li>
          <li>Support from our dedicated partner team.</li>
        </ul>
        <p className="mt-6">
          Ready to start earning?
          <Link href="/contact">
            <span className="ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Contact Us for Partnership Details</span>
          </Link>
        </p>
      </section>
    </div>
  );
}
