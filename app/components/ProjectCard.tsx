import Link from "next/link";
import { Project } from "@/data/projects";

const ratioClassMap: Record<Project["aspectRatio"], string> = {
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "16/10": "aspect-[16/10]",
  "1/1": "aspect-square",
};

export default function ProjectCard({ project }: { project: Project }) {
  const ratioClass = ratioClassMap[project.aspectRatio] || "aspect-[16/10]";

  return (
    <Link href={`/works/${project.slug}`} className="group block">
      <div className={`img-frame img-hover ${ratioClass} w-full`}>
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="meta-hover mt-4 flex flex-col gap-1 md:mt-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="type-h3 group-hover:underline underline-offset-4">
            {project.name}
          </h3>
          <span className="type-small text-muted">{project.year}</span>
        </div>

        <div className="flex items-center justify-between text-muted">
          <p className="type-small">{project.category}</p>
          <span className="type-small">{project.location}</span>
        </div>
      </div>
    </Link>
  );
}
