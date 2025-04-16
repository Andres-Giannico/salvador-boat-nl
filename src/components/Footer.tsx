import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <p>Salvador Ibiza Boat Trips</p>
          <p>San Antonio, Ibiza, Spain</p>
          <p>Phone: +34 123 456 789 (Placeholder)</p>
          <p>Email: info@salvadoribiza.com (Placeholder)</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul>
            <li><Link href="/about"><span className="hover:text-blue-600">About Us</span></Link></li>
            <li><Link href="/faq"><span className="hover:text-blue-600">FAQ</span></Link></li>
            <li><Link href="/contact"><span className="hover:text-blue-600">Contact</span></Link></li>
            <li><Link href="/partners"><span className="hover:text-blue-600">Partners</span></Link></li>
            {/* Add other relevant links */}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Placeholder Icons - Replace with actual icons (e.g., react-icons) */}
            <a href="#" aria-label="Facebook" className="hover:text-blue-600">FB</a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-600">IG</a>
            <a href="#" aria-label="TripAdvisor" className="hover:text-green-600">TA</a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Salvador Ibiza. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 