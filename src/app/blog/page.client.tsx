'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';

// Definir el tipo para un post
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrl: string;
  category: string;
}

// Definir las props que recibe el componente
interface BlogClientPageProps {
  posts: BlogPost[];
}

export default function BlogClientPage({ posts }: BlogClientPageProps) {
  return (
    <div className="bg-gradient-to-b from-white via-blue-50/10 to-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Salvador Ibiza Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
            Stories, tips, and insights from our adventures on the Mediterranean.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-10 gap-y-12 md:gap-y-16">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              className="bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 flex flex-col h-full group transition-all duration-300 ease-in-out hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative w-full aspect-video overflow-hidden rounded-t-xl">
                <Image 
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-7 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className="inline-block bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 text-sm mb-5 flex-grow leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-5 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <FiCalendar className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-gray-600">{post.date}</span>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group/link"
                    aria-label={`Lees meer over ${post.title}`}
                  >
                    Lees meer 
                    <FiArrowRight className="ml-1 w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination could be added here */}

      </div>
    </div>
  );
} 