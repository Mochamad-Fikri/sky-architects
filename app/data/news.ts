export interface NewsArticle {
  slug: string;
  date: string;
  category: string;
  title: string;
  publication?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "civic-frame-award",
    date: "14 May 2025",
    category: "Award",
    title: "Civic Frame receives European Architecture Prize",
    publication: "Architecture Today",
  },
  {
    slug: "eastfield-apartments-publication",
    date: "07 March 2025",
    category: "Publication",
    title: "Inside Eastfield Apartments: Rethinking urban living",
    publication: "Dezeen",
  },
  {
    slug: "sombra-hotel-top-50",
    date: "24 February 2025",
    category: "Recognition",
    title: "Sombra Pavilion named among Monocle Travel top destinations",
    publication: "Monocle",
  },
  {
    slug: "adaptive-reuse-interview",
    date: "21 January 2025",
    category: "Interview",
    title: "Adaptive reuse: Breathing quiet life into industrial spaces",
    publication: "ArchDaily",
  },
];
