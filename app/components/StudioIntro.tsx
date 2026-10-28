import Link from "next/link";
import { siteConfig } from "@/data/site";

const statement = `${siteConfig.name} is an architecture and interior studio shaping calm, lasting places. We start with the site, the light, and the people who will live with the work — then remove everything that does not belong. From private homes to hospitality and workplaces, each project is built on clear ideas, honest materials, and careful detail .`;

export default function StudioIntro() {
  return (
    <section className="section-lg px-4 lg:px-8">
      <div className="grid-site">
        <p className="col-span-4 text-[clamp(32px,4.4vw,68px)] leading-[1.02] tracking-[-0.045em] text-muted md:col-span-8 lg:col-span-12">
          {statement}
        </p>
      </div>

      <Link
        href="/studio"
        className="type-medium mt-12 inline-flex items-center gap-1 underline decoration-1 underline-offset-[3px] transition-opacity duration-200 hover:opacity-60 lg:mt-16"
      >
        More About Us <span aria-hidden="true"></span>
      </Link>
    </section>
  );
}