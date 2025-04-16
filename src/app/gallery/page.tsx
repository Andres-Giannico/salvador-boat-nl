export default function GalleryPage() {
  // Placeholder for image URLs - replace with actual image paths or use a CMS
  const images = [
    '/images/gallery/placeholder-1.jpg', // Example path
    '/images/gallery/placeholder-2.jpg',
    '/images/gallery/placeholder-3.jpg',
    '/images/gallery/placeholder-4.jpg',
    '/images/gallery/placeholder-5.jpg',
    '/images/gallery/placeholder-6.jpg',
    // Add more images
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Gallery</h1>
      <p className="text-center mb-8">See the amazing moments captured on our Salvador Ibiza boat trips.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src} // Consider using Next/Image for optimization
              alt={`Salvador Ibiza Gallery Image ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
      {/* Consider adding a lightbox component for viewing images */}
    </div>
  );
}
