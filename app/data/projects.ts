export interface Project {
  slug: string;
  name: string;
  category: string;
  location: string;
  year: string;
  image: string;
  aspectRatio: "4/3" | "3/2" | "16/10" | "1/1";
  span?: "full" | "half" | "offset-left" | "offset-right";
}

export const selectedProjects: Project[] = [
  {
    slug: "casa-alta",
    name: "Casa Alta",
    category: "Residential Architecture",
    location: "Algarve, Portugal",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    aspectRatio: "16/10",
    span: "full",
  },
  {
    slug: "corten-house",
    name: "Corten House",
    category: "Private Residence",
    location: "Marseille, France",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
    aspectRatio: "4/3",
    span: "half",
  },
  {
    slug: "sombra-hotel",
    name: "Sombra Pavilion",
    category: "Hospitality & Wellness",
    location: "Comporta, Portugal",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
    aspectRatio: "3/2",
    span: "half",
  },
  {
    slug: "studio-fold",
    name: "Studio Fold",
    category: "Adaptive Reuse & Workspace",
    location: "Lisbon, Portugal",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1800&auto=format&fit=crop",
    aspectRatio: "16/10",
    span: "offset-left",
  },
  {
    slug: "m-line-apartments",
    name: "M Line Residencies",
    category: "Urban Housing",
    location: "Valencia, Spain",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
    aspectRatio: "4/3",
    span: "half",
  },
  {
    slug: "lumen-gallery",
    name: "Lumen Exhibition Space",
    category: "Cultural Pavilion",
    location: "Milan, Italy",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
    aspectRatio: "1/1",
    span: "half",
  },
];
