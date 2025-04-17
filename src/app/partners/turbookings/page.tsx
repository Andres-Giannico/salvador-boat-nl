export default function TurbookingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Turbookings Integration</h1>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Seamless Booking Experience</h2>
        <p className="text-gray-700 leading-relaxed">
          We partner with Turbookings to offer a reliable and easy-to-use booking platform for our boat trips. Turbookings provides a secure system for checking availability, making reservations, and processing payments.
        </p>
        <h2 className="text-2xl font-semibold">Benefits for Customers</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Real-time availability and instant booking confirmation.</li>
          <li>Secure online payment processing.</li>
          <li>Easy management of your bookings.</li>
          <li>Clear overview of trip details and inclusions.</li>
        </ul>
        <h2 className="text-2xl font-semibold">Benefits for Agents & Resellers</h2>
        <p className="text-gray-700 leading-relaxed">
          Turbookings provides our partners with a powerful platform to manage sales, track commissions, and access promotional materials.
          Learn more about earning potential on our <a href="/partners/earnings" className="text-blue-600 hover:underline">Earnings page</a>.
        </p>
      </section>
    </div>
  );
}
