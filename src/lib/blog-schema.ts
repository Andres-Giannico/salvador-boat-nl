import { absoluteUrl } from "@/config/site";

export function buildBlogPostingSchema(opts: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  const { title, description, path, datePublished, dateModified, image } = opts;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: absoluteUrl(path),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(path),
    },
    image: image ? absoluteUrl(image) : absoluteUrl("/images/optimized/salvador-ibiza-boat-drone-view.webp"),
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Organization",
      name: "Salvador Ibiza",
      url: absoluteUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: "Salvador Ibiza",
      url: absoluteUrl("/"),
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/optimized/salvador-ibiza-footer-logo-alt.webp"),
      },
    },
  };
}
