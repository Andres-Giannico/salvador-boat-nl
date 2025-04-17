'use client';

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const blogPosts = [
  {
    slug: 'discover-love-at-sea',
    title: 'Discover Love at Sea',
    description: 'Experience romance and luxury aboard our exclusive boat charters in Ibiza.',
    image: '/images/blog/discover-love-at-sea.jpg',
    date: 'February 14, 2024',
  },
  {
    slug: 'sunset-sailing-ibiza',
    title: 'Sunset Sailing in Ibiza',
    description: 'Explore the magic of Ibizas legendary sunsets from the best viewpoint - aboard our luxury yacht.',
    image: '/images/blog/sunset-sailing-ibiza.jpg',
    date: 'February 20, 2024',
  },
  {
    slug: 'hidden-coves-ibiza',
    title: 'Hidden Coves of Ibiza',
    description: 'Discover the most secluded and beautiful coves around Ibiza that are only accessible by boat.',
    image: '/images/blog/hidden-coves-ibiza.jpg',
    date: 'February 25, 2024',
  },
]

export default function BlogClientPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] w-full">
        <Image
          src="/images/hero-bg.jpg"
          alt="Salvador Ibiza Blog"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="mb-4 text-5xl font-bold">Our Blog</h1>
            <p className="text-xl">Stories from the Mediterranean</p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-64 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="mb-2 text-sm text-gray-500">{post.date}</p>
                  <h2 className="mb-3 text-2xl font-bold text-gray-900">{post.title}</h2>
                  <p className="text-gray-600">{post.description}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  )
} 