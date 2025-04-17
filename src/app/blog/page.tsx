import { Metadata } from 'next'
import BlogClientPage from './page.client'

export const metadata: Metadata = {
  title: 'Salvador Ibiza Blog | Luxury Boat Experiences',
  description: 'Explore our latest stories about luxury boat experiences in Ibiza. Discover insider tips, romantic getaways, and the best spots around the island.',
}

export default function BlogPage() {
  return <BlogClientPage />
} 