import Link from "next/link";
import { siteConfig, mainNav } from "@/data/site";
import CurrentYear from "./CurrentYear";

export default function Footer() {
  return (
    <footer className="section-dark">
      <div className="container-site pb-8 pt-24 lg:pt-32">
        <div className="grid-site gap-y-16">
          {/* Pernyataan singkat */}
          <div className="col-span-4 md:col-span-8 lg:col-span-5">
            <p className="type-label opacity-50">{siteConfig.name}</p>
            <p className="type-h3 mt-6">{siteConfig.statement}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="type-body mt-8 inline-block underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>

          {/* Navigasi */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2 lg:col-start-7">
            <p className="type-label opacity-50">Navigation</p>
            <ul className="mt-6 flex flex-col gap-2">
              <li>
                <Link href="/" className="type-small opacity-80 hover:opacity-100">
                  Home
                </Link>
              </li>
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="type-small opacity-80 transition-opacity duration-200 hover:opacity-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sosial media */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2">
            <p className="type-label opacity-50">Social</p>
            <ul className="mt-6 flex flex-col gap-2">
              {siteConfig.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="type-small opacity-80 transition-opacity duration-200 hover:opacity-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Lokasi */}
          <div className="col-span-4 md:col-span-4 lg:col-span-2">
            <p className="type-label opacity-50">Locations</p>
            <ul className="mt-6 flex flex-col gap-2">
              {siteConfig.locations.map((loc, index) => (
                <li key={index} className="type-small opacity-80">
                  {loc.city}, {loc.country}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Nama studio besar di bawah */}
        <p className="type-display mt-24 lg:mt-40" aria-hidden="true">
          {siteConfig.name}
        </p>

        {/* Legal */}
        <div className="mt-10 flex flex-col gap-2 border-t border-inverse-foreground/15 pt-6 md:flex-row md:justify-between">
          <p className="type-small opacity-50">
            © <CurrentYear /> {siteConfig.name}. All rights reserved.
          </p>
          <Link
            href="/privacy-policy"
            className="type-small opacity-50 transition-opacity duration-200 hover:opacity-100"
          >
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
}