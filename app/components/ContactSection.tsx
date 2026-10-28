import { siteConfig } from "@/data/site";

export default function ContactSection() {
  return (
    <section className="section-dark section-lg border-t border-inverse-foreground/15">
      <div className="container-site">
        <div className="grid-site items-end gap-y-12">
          <div className="col-span-4 md:col-span-8 lg:col-span-8">
            <p className="type-label opacity-50">Inquiries & Collaborations</p>
            <h2 className="type-display mt-6">
              Let&apos;s build something meaningful together.
            </h2>
          </div>

          <div className="col-span-4 md:col-span-8 lg:col-span-4 flex flex-col gap-6 lg:items-end">
            <a
              href={`mailto:${siteConfig.email}`}
              className="type-h2 underline underline-offset-8 hover:opacity-80 transition-opacity"
            >
              {siteConfig.email}
            </a>

            <div className="flex flex-col gap-1 text-muted text-left lg:text-right">
              <span className="type-small">New business & project commissions</span>
              <span className="type-small">Press & publication requests</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
