import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { selectedProjects } from "@/data/projects";

export default function ProjectGrid() {
  const p0 = selectedProjects[0];
  const p1 = selectedProjects[1];
  const p2 = selectedProjects[2];
  const p3 = selectedProjects[3];
  const p4 = selectedProjects[4];
  const p5 = selectedProjects[5];

  return (
    <section className="container-site section-lg">
      <div className="mb-12 flex items-baseline justify-between border-b border-border pb-6 md:mb-16">
        <div>
          <p className="type-label text-muted">Selected Works</p>
          <h2 className="type-h2 mt-2">Built with restraint</h2>
        </div>
        <Link href="/works" className="link-arrow">
          View all works <span className="arrow">→</span>
        </Link>
      </div>

      <div className="grid-site gap-y-16 md:gap-y-24">
        {p0 && (
          <div className="col-span-4 md:col-span-8 lg:col-span-12">
            <ProjectCard project={p0} />
          </div>
        )}

        {p1 && (
          <div className="col-span-4 md:col-span-4 lg:col-span-6">
            <ProjectCard project={p1} />
          </div>
        )}

        {p2 && (
          <div className="col-span-4 md:col-span-4 lg:col-span-6">
            <ProjectCard project={p2} />
          </div>
        )}

        {p3 && (
          <div className="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-3">
            <ProjectCard project={p3} />
          </div>
        )}

        {p4 && (
          <div className="col-span-4 md:col-span-4 lg:col-span-6">
            <ProjectCard project={p4} />
          </div>
        )}

        {p5 && (
          <div className="col-span-4 md:col-span-4 lg:col-span-6">
            <ProjectCard project={p5} />
          </div>
        )}
      </div>
    </section>
  );
}
