import Link from "next/link";
import { newsArticles } from "@/data/news";

export default function NewsList() {
  return (
    <section className="container-site section-lg border-t border-border">
      <div className="mb-12 flex items-baseline justify-between border-b border-border pb-6 md:mb-16">
        <div>
          <p className="type-label text-muted">Journal & Updates</p>
          <h2 className="type-h2 mt-2">News & publications</h2>
        </div>
        <Link href="/news" className="link-arrow">
          View all news <span className="arrow">→</span>
        </Link>
      </div>

      <div className="flex flex-col divide-y divide-border">
        {newsArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/news/${article.slug}`}
            className="group py-6 transition-colors md:py-8"
          >
            <div className="grid-site items-baseline gap-y-2">
              <div className="col-span-4 md:col-span-2 lg:col-span-2 text-muted">
                <span className="type-small">{article.date}</span>
              </div>

              <div className="col-span-4 md:col-span-2 lg:col-span-2 text-muted">
                <span className="type-small">{article.category}</span>
              </div>

              <div className="col-span-4 md:col-span-3 lg:col-span-7">
                <h3 className="type-h3 group-hover:underline underline-offset-4">
                  {article.title}
                </h3>
                {article.publication && (
                  <p className="type-small text-muted mt-1">
                    Featured in {article.publication}
                  </p>
                )}
              </div>

              <div className="hidden text-right md:col-span-1 md:block lg:col-span-1">
                <span className="arrow inline-block transition-transform duration-300 ease-editorial group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
