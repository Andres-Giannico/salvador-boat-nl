'use client';

import { Testimonial } from './TestimonialSlider';

// Reviews estáticos para usar cuando la API de Google falla
export const staticReviews: Testimonial[] = [
  {
    id: "review-1",
    name: "María García",
    location: "2 weeks ago",
    comment: "Increíble experiencia con Salvador Boat. El capitán fue muy amable y profesional. Las vistas de Es Vedrà son impresionantes y el agua es cristalina. ¡Totalmente recomendable!",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjWEbxwq8Ir2qvFTQTJNGw_xRoLYgYhxzrwH-oInK-a1jQ=s120-c-rp-mo-br100",
    trip: "Day Trip"
  },
  {
    id: "review-2",
    name: "John Smith",
    location: "1 month ago",
    comment: "One of the highlights of our Ibiza vacation! The boat was comfortable, drinks were flowing, and the crew was fantastic. Swimming in those crystal clear waters was unforgettable.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjWmydZCnuR5sKDXt1amRASGECtWtLLnSDxJ_ZwYInxwx2I=s120-c-rp-mo-br100",
    trip: "Sunset Trip"
  },
  {
    id: "review-3",
    name: "Julia Weber",
    location: "2 months ago",
    comment: "Die Salvador Boat Experience war fantastisch! Wir haben den Sonnenuntergang genossen und die Crew hat sich hervorragend um uns gekümmert. Kann ich nur weiterempfehlen!",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUi9LBQVXCyfpjhJ5kDYlXcl0fNfE0E50ZXMpXXq9A3aV4=s120-c-rp-mo-br100",
    trip: "Day Trip"
  },
  {
    id: "review-4",
    name: "Carlos Rodríguez",
    location: "3 weeks ago",
    comment: "Mi familia y yo disfrutamos muchísimo del paseo en barco. Las paradas para nadar fueron increíbles y el ambiente fue muy relajado. El barco es precioso y el servicio excelente.",
    rating: 5,
    trip: "Day Trip"
  },
  {
    id: "review-5",
    name: "Sophie Martin",
    location: "1 month ago",
    comment: "Amazing experience with Salvador! We had a magical sunset trip with plenty of drinks and great music. The views of Es Vedrà were breathtaking. Highly recommend!",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjWmSSsxqfgYu_TF03j5AiZL1OzCMnKPR4FUXitZkbMTkY=s120-c-rp-mo-br100",
    trip: "Sunset Trip"
  },
  {
    id: "review-6",
    name: "Alessandro Ricci",
    location: "3 months ago",
    comment: "Bellissima esperienza! Abbiamo fatto il giro di Ibiza con Salvador Boat e siamo rimasti incantati. L'equipaggio è stato fantastico e il servizio impeccabile. Da rifare!",
    rating: 5,
    trip: "Day Trip"
  },
  {
    id: "review-7",
    name: "Sarah Johnson",
    location: "2 weeks ago",
    comment: "Such a fun day out with Salvador boat! The vibes were amazing, great music, drinks, and the crew was so friendly. The swimming spots were perfect - crystal clear water!",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUkbiHa8ImkDdpJ1_fC46MzIgv8nPBOJ78zZaRBRA85Kyw=s120-c-rp-mo-br100",
    trip: "Day Trip"
  },
  {
    id: "review-8",
    name: "Thomas Wagner",
    location: "1 month ago",
    comment: "Wir hatten einen wunderbaren Tag auf dem Salvador Boot. Die Crew war sehr freundlich und professionell. Die Aussicht auf Es Vedrà war atemberaubend!",
    rating: 5,
    trip: "Sunset Trip"
  }
];

// Función para obtener los reviews estáticos
export function getStaticReviews(): Testimonial[] {
  return staticReviews;
} 