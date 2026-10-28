import ProjectGrid from "@/components/ProjectGrid";

export const metadata = {
  title: "Works — Archi Studio",
  description: "Selected architectural projects and residences.",
};

export default function WorksPage() {
  return (
    <main className="pt-24 md:pt-32">
      <div className="container-site">
        <p className="type-label text-muted">(Index)</p>
        <h1 className="type-display mt-4">Selected Works</h1>
      </div>
      <ProjectGrid />
    </main>
  );
}
