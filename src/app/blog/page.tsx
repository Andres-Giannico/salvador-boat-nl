import BlogClientPage from './page.client'
import { absoluteUrl, publicAssetUrl } from '@/config/site'
import { pageMetadata } from '@/lib/page-meta'
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

export const metadata = pageMetadata({
  title: 'Salvador Ibiza blog | bootervaringen & tips',
  description:
    'Verhalen over luxe bootervaringen, verborgen cala’s, zonsondergangen en het leven op Ibiza. Tips en inspiratie voor je volgende trip.',
  path: '/blog',
})

// Definir los datos aquí, en el componente servidor
const blogPosts: BlogPost[] = [
  {
    slug: 'discover-love-at-sea',
    title: "Liefde op zee: romantische zonsondergang",
    excerpt: "Beleef de magie van een Ibiza-zonsondergang samen aan boord van Salvador. Perfect voor romantisch uitje.",
    date: "April 25, 2025",
    author: "Salvador Team",
    imageUrl: "/images/blog/discover-love-at-sea.webp",
    category: "Romantiek"
  },
  {
    slug: 'hidden-coves-ibiza',
    title: "Verborgen cala’s van Ibiza per boot",
    excerpt: "Ontdek afgelegen baaitjes die je alleen vanaf zee bereikt. Onze favoriete verborgen parels.",
    date: "April 20, 2025",
    author: "Captain Alex",
    imageUrl: "/images/blog/hidden-cove.webp",
    category: "Ontdekking"
  },
  {
    slug: 'sunset-sailing-ibiza',
    title: "Waarom een sunset trip op Ibiza een must is",
    excerpt: "Ontspan en geniet van de zonsondergang vanaf het dek van Salvador — dé Ibiza-ervaring.",
    date: "April 15, 2025",
    author: "Guest Writer",
    imageUrl: "/images/optimized/sunset-sailing-cruise-ibiza.webp",
    category: "Ervaringen"
  },
  {
    slug: 'ibiza-midday-magic-boat-trip',
    title: "Midday magic: waarom een dagtrip onvergetelijk is",
    excerpt: "Zon, helder water en energie — ontdek de charme van een dagtrip met Salvador Ibiza.",
    date: "May 28, 2024",
    author: "Salvador Team",
    imageUrl: "/images/blog/midday-magic-placeholder.webp",
    category: "Ervaringen"
  },
];

// Generate JSON-LD structured data
const generateBlogSchema = (posts: BlogPost[]) => {
  const blogPostings = posts.map(post => ({
    '@type': 'BlogPosting',
    'headline': post.title,
    'url': absoluteUrl(`/blog/${post.slug}`),
    'image': publicAssetUrl(post.imageUrl),
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
    'url': absoluteUrl('/blog'),
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