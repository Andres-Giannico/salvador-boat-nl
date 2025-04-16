import Image from 'next/image'; // Using Next/Image for potential optimization

export default function BlogPostPage() {
  return (
    <article className="prose lg:prose-xl mx-auto">
      {/* Clase 'prose' de Tailwind para estilos de blog básicos */}
      <h1 className="text-4xl font-bold mb-4 text-center">Discover Love at Sea: Romantic Sunsets and Unforgettable Moments</h1>

      <figure className="mb-8">
        {/* Placeholder Image - Replace with a relevant, high-quality image */}
        <Image
          src="/images/blog/romantic-sunset-placeholder.jpg" // Example path
          alt="Romantic sunset view from Salvador Ibiza boat trip"
          width={800} // Adjust width as needed
          height={450} // Adjust height for aspect ratio
          className="rounded-lg shadow-md mx-auto"
        />
        <figcaption className="text-center text-sm text-gray-500 mt-2">A breathtaking sunset captured during one of our trips.</figcaption>
      </figure>

      <p className="lead text-lg text-gray-600 mb-6">
        Ibiza isn&apos;t just about legendary nightlife; it&apos;s also an island brimming with romance, especially when experienced from the gentle embrace of the Mediterranean Sea. Imagine sharing a magical sunset with your loved one, cocktail in hand, surrounded by crystal-clear waters and stunning coastal views. That&apos;s the reality aboard a Salvador Ibiza boat trip.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Why Choose a Sunset Boat Trip for Romance?</h2>
      <p>
        There&apos;s something inherently romantic about being on the water as the day transitions to night. The changing colours of the sky, the reflection on the calm sea, and the feeling of being away from the hustle and bustle create an intimate atmosphere perfect for couples. Our sunset trip (17:00–21:00) is specifically designed to capture this magic.
      </p>
      <ul className="list-disc list-inside my-4 space-y-1">
        <li><strong>Spectacular Views:</strong> Witness the world-famous Ibiza sunset from the best vantage point – the sea!</li>
        <li><strong>Relaxed Atmosphere:</strong> Enjoy chill-out music, refreshing drinks, and delicious snacks in a comfortable setting.</li>
        <li><strong>Shared Experience:</strong> Create lasting memories together, swimming in secluded coves before the sun dips below the horizon.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Making it Extra Special</h2>
      <p>
        Looking to elevate the romance? Consider booking a <a href="/private-charter" className="text-blue-600 hover:underline">Private Charter</a>. You&apos;ll have the entire &apos;Salvador&apos; boat to yourselves, allowing for a completely personalized and intimate experience. Perfect for proposals, anniversaries, or simply celebrating your love in style.
      </p>

      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 my-6">
        &quot;The sunset trip with Salvador Ibiza was the most romantic experience of our holiday. Absolutely unforgettable!&quot; - Happy Couple (Placeholder Testimonial)
      </blockquote>

      <p>
        Ready to find love (or fall in love all over again) at sea? Book your <a href="/boat-trips" className="text-blue-600 hover:underline">all-inclusive boat trip</a> or inquire about a <a href="/private-charter" className="text-blue-600 hover:underline">private charter</a> today and let Salvador Ibiza create your perfect romantic escape.
      </p>
    </article>
  );
}

// Add specific metadata for this blog post if needed
// export const metadata = { ... };
