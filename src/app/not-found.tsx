import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4">
      <div className="relative w-40 h-40 mb-8">
        <Image
          src="/images/optimized/salvador-ibiza-boat-trips-logo.webp"
          alt="Salvador Ibiza Logo"
          fill
          className="object-contain"
        />
      </div>
      
      <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">Page Not Found</h1>
      
      <p className="text-xl text-gray-600 max-w-md mb-8">
        Sorry, we couldn&apos;t find the page you were looking for.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="bg-[#1E88E5] text-white hover:bg-[#1976D2] py-3 px-8 rounded-lg transition-all font-medium">
          Back to Home
        </Link>
        <Link href="/boat-trips" className="border border-[#1E88E5] text-[#1E88E5] hover:bg-[#1E88E5]/5 py-3 px-8 rounded-lg transition-all font-medium">
          View Boat Trips
        </Link>
      </div>
    </div>
  );
} 