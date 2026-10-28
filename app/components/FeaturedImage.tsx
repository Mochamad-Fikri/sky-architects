export default function FeaturedImage() {
  return (
    <section className="container-site section">
      <div className="img-frame aspect-[16/9] w-full md:aspect-[21/9]">
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2400&auto=format&fit=crop"
          alt="Architectural space capturing natural light and material texture"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between border-b border-border pb-4 text-muted">
        <p className="type-small">Sombra Coastline Study</p>
        <span className="type-small">38°18&apos;N 8°47&apos;W</span>
      </div>
    </section>
  );
}
