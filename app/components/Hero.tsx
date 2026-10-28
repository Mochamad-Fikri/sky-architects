import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { selectedProjects } from "@/data/projects";

// Tiga baris kecil di bawah nama studio. Ganti sesuai studio kamu.
const heroLines = [
  "Architecture & Interior Design",
  "Residential, Hospitality & Workplace",
  "Thoughtful Design, Honest Materials",
];

// Rasio gambar dibuat berbeda-beda supaya barisnya tidak monoton
// (DESIGN.md bagian 09: hindari rasio yang sama untuk semua proyek)
const ratios = [
  "aspect-[4/5]",
  "aspect-[6/7]",
  "aspect-[1/1]",
  "aspect-[4/5]",
  "aspect-[1/1]",
];

// Ambil 5 proyek pertama dari projects.ts
const slides = selectedProjects.slice(0, 5).map((p) => ({
  href: `/works/${p.slug}`,
  title: p.name,
  category: p.category,
  location: p.location,
  image: p.image,
}));

export default function Hero() {
  return (
    <section className="pt-40 md:pt-48 lg:pt-56">
      {/* Nama studio besar + 3 baris kecil, rata tengah */}
      <div className="container-site text-center">
        <h1 className="type-display text-balance text-foreground/70 animate-fade-up">
          {siteConfig.name}
        </h1>

        <div
          className="type-body mt-8 text-muted animate-fade-up"
          style={{ animationDelay: "150ms" }}
        >
          {heroLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>

      {/* Baris proyek: geser ke samping di HP, 5 kolom di desktop */}
      <ul className="mt-20 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 scrollbar-none md:grid md:grid-cols-5 md:overflow-visible lg:mt-28 lg:px-8">
        {slides.map((project, index) => (
          <li
            key={project.href}
            className="w-[72vw] shrink-0 snap-start animate-fade-up md:w-auto"
            style={{ animationDelay: `${300 + index * 100}ms` }}
          >
            <Link href={project.href} className="group block">
              <div className={`img-frame img-hover ${ratios[index % ratios.length]}`}>
                <Image
                  src={project.image}
                  alt={`${project.title}, ${project.category} in ${project.location}`}
                  fill
                  sizes="(min-width: 768px) 20vw, 72vw"
                  priority={index < 3}
                  className="object-cover"
                />
              </div>

              <div className="meta-hover mt-3">
                <p className="text-[15px]">{project.title}</p>
                <p className="type-small mt-1 text-muted">{project.category}</p>
                <p className="type-small text-muted">{project.location}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-20 px-4 lg:px-8">
        <Link
          href="/works"
          className="type-medium mt-20 inline-flex items-center gap-1 underline decoration-1 underline-offset-[3px] transition-opacity duration-200 hover:opacity-60 lg:mt-8"
        >
          View All Works <span aria-hidden="true"></span>
        </Link>
      </div>
    </section>
  );
}