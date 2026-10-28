"use client";
// Header gaya "tombol tengah": nama studio + tombol Menu hitam.
// Saat Menu diklik, panel hitam turun berisi 2 grup link,
// lalu copyright dan sosial media di bagian bawah.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { siteConfig, mainNav } from "@/data/site";

// Grup link pertama (halaman utama)
const primaryLinks = [{ label: "Home", href: "/" }, ...mainNav];

// Grup link kedua (halaman tambahan, opsional di design.md bagian 26).
// Hapus yang tidak dipakai, atau tambah sesuai kebutuhan.
const secondaryLinks = [
  { label: "People", href: "/people" },
  { label: "Clients", href: "/clients" },
  { label: "Partners", href: "/partners" },
  { label: "Awards", href: "/awards" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const closeMenu = () => setOpen(false);

  // Tutup menu saat tekan Escape atau klik di luar menu
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open]);

  // Gaya link di dalam panel: teks kecil bergaris bawah
  const linkClass = (href: string) =>
    `block py-1 text-[17px] underline underline-offset-[3px] decoration-1 transition-opacity duration-200 hover:opacity-100 ${
      isActive(href) ? "opacity-100" : "opacity-80"
    }`;

  return (
    // pointer-events-none: area kosong header tidak menghalangi klik ke halaman
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <div ref={menuRef} className="pointer-events-auto relative flex">
        {/* Kotak nama studio */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex h-11 items-center bg-border/70 px-4 text-[15px] md:h-[52px] md:px-5"
        >
          {siteConfig.name}
        </Link>

        {/* Tombol Menu hitam */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="site-menu"
          className="ml-1 flex h-11 w-40 items-center justify-between bg-inverse pl-4 pr-2 text-[15px] text-inverse-foreground md:h-[52px] md:w-64 md:pl-4"
        >
          <span>{open ? "Close" : "Menu"}</span>

          {/* Ikon + di kotak kecil, berputar jadi × saat menu terbuka */}
          <span
            aria-hidden="true"
            className="flex h-7 w-7 items-center justify-center rounded-[3px] bg-inverse-foreground/15"
          >
            <span
              className={`relative block h-3.5 w-3.5 transition-transform duration-400 ease-editorial ${
                open ? "rotate-45" : ""
              }`}
            >
              <span className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-current" />
              <span className="absolute left-1/2 top-0 h-full w-[1.5px] -translate-x-1/2 bg-current" />
            </span>
          </span>
        </button>

        {/* Panel menu */}
        {open && (
          <nav
            id="site-menu"
            aria-label="Main navigation"
            className="absolute inset-x-0 top-full mt-1 flex max-h-[calc(100vh-6rem)] flex-col overflow-y-auto bg-inverse px-6 pb-7 pt-8 text-inverse-foreground animate-fade-up md:min-h-[520px] md:px-8"
          >
            {/* Grup 1 */}
            <ul>
              {primaryLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={linkClass(item.href)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <hr className="my-10 border-0 border-t border-inverse-foreground/20" />

            {/* Grup 2 */}
            <ul>
              {secondaryLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={linkClass(item.href)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Bagian bawah: copyright + sosial media */}
            <div className="mt-auto pt-16">
              <p className="text-[15px] leading-snug opacity-50">
                © {siteConfig.name}. All rights reserved.
              </p>

              <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                {siteConfig.social.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[17px] underline underline-offset-[3px] decoration-1 opacity-80 transition-opacity duration-200 hover:opacity-100"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}