import { Metadata } from 'next'
import BlogClientPage from './page.client'
// Import the type correctly assuming it might be exported, 
// or remove if the type definition is intended to be passed implicitly or duplicated.
// For now, let's assume the type definition is available/passed via BlogClientPage props.
// We will define the type locally here for clarity in data definition.

// Define the type here for clarity in the server component
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrl: string;
  category: string;
}

export const metadata: Metadata = {
  title: 'Salvador Ibiza Blog | Luxury Boat Experiences & Island Tips',
  description: 'Explore our latest stories about luxury boat experiences, hidden coves, sunset sailing, and life in Ibiza. Discover insider tips and inspiration for your next adventure.',
}

// Definir los datos aquí, en el componente servidor
const blogPosts: BlogPost[] = [
  {
    slug: 'discover-love-at-sea',
    title: "Discover Love at Sea: A Romantic Sunset Trip",
    excerpt: "Experience the magic of an Ibiza sunset with your loved one aboard Salvador. Perfect for romantic getaways and creating unforgettable memories.",
    date: "April 25, 2025",
    author: "Salvador Team",
    imageUrl: "/images/blog/discover-love-at-sea.webp",
    category: "Romantic Trips"
  },
  {
    slug: 'hidden-coves-ibiza',
    title: "Explore Ibiza's Hidden Coves by Boat",
    excerpt: "Venture beyond the popular beaches and discover secret spots only accessible by sea. Your guide to the best hidden gems and secluded bays.",
    date: "April 20, 2025",
    author: "Captain Alex",
    imageUrl: "/images/blog/hidden-cove.webp",
    category: "Exploration"
  },
  {
    slug: 'sunset-sailing-ibiza',
    title: "Why a Sunset Sailing Trip is a Must-Do in Ibiza",
    excerpt: "Unwind and witness the breathtaking beauty of an Ibiza sunset from the best viewpoint – the deck of Salvador. An essential island experience.",
    date: "April 15, 2025",
    author: "Guest Writer",
    imageUrl: "/images/blog/sunset-sailing-ibiza.jpg",
    category: "Experiences"
  },
  {
    slug: 'ibiza-midday-magic-boat-trip',
    title: "Ibiza's Midday Magic: Why a Day Trip is an Unforgettable Experience",
    excerpt: "Discover the unique charm of a daytime boat adventure in Ibiza. Sunshine, crystal clear waters, and vibrant energy await you with Salvador Ibiza.",
    date: "May 28, 2024",
    author: "Salvador Team",
    imageUrl: "/images/blog/midday-magic-placeholder.webp",
    category: "Experiences"
  },
];

// Generate JSON-LD structured data
const generateBlogSchema = (posts: BlogPost[]) => {
  const blogPostings = posts.map(post => ({
    '@type': 'BlogPosting',
    'headline': post.title,
    'url': `https://salvador-boat.vercel.app/blog/${post.slug}`, // Use absolute URL
    'image': `https://salvador-boat.vercel.app${post.imageUrl}`, // Use absolute URL
    'datePublished': new Date(post.date).toISOString(),
    'author': {
      '@type': 'Person',
      'name': post.author
    },
    'description': post.excerpt
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    'name': 'Salvador Ibiza Blog',
    'url': 'https://salvador-boat.vercel.app/blog',
    'description': metadata.description,
    'blogPost': blogPostings
  };
};

export default function BlogPage() {
  const schema = generateBlogSchema(blogPosts);

  return (
    <>
      {/* Add JSON-LD Script for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Render the client component, passing posts data */}
      <BlogClientPage posts={blogPosts} />
    </>
  );
} 