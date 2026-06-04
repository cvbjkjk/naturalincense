export interface JournalArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

export const articles: JournalArticle[] = [
  {
    id: "1",
    title: "The Chemistry of Incense Smoke",
    excerpt:
      "Exploring the volatile organic compounds that create the complex aromatic profiles of natural incense materials and their effects on human cognition.",
    category: "Materials",
    date: "March 2026",
    readTime: "8 min read",
    image: "/images/journal-1.jpg",
    slug: "chemistry-of-incense-smoke",
  },
  {
    id: "2",
    title: "Kōdō: The Way of Fragrance",
    excerpt:
      "An in-depth look at Japan's classical art of incense appreciation — its history, philosophical foundations, and enduring relevance in the modern age.",
    category: "History",
    date: "February 2026",
    readTime: "12 min read",
    image: "/images/journal-2.jpg",
    slug: "kodo-way-of-fragrance",
  },
  {
    id: "3",
    title: "Agarwood: From Infection to Treasure",
    excerpt:
      "How a tree's defense mechanism creates the world's most precious incense material, and why sustainable cultivation is essential for its future.",
    category: "Craftsmanship",
    date: "January 2026",
    readTime: "10 min read",
    image: "/images/journal-3.jpg",
    slug: "agarwood-infection-to-treasure",
  },
  {
    id: "4",
    title: "Incense and the Meditative Mind",
    excerpt:
      "What neuroscience reveals about how aromatic compounds influence brain wave patterns, attention, and the meditative state.",
    category: "Aromatic Science",
    date: "December 2025",
    readTime: "7 min read",
    image: "/images/journal-4.jpg",
    slug: "incense-and-meditative-mind",
  },
];
