"use client";
// Section Expertise:
// 1) Gambar besar di tengah yang MELEBAR sampai penuh saat di-scroll.
// 2) Setelah itu muncul grid: gambar & deskripsi bergantian, dengan animasi masuk.

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { expertiseData } from "@/data/expertise";
import { selectedProjects } from "@/data/projects";

// ⚠️ GAMBAR SEMENTARA: diambil dari projects.ts.
// Nanti ganti dengan foto sendiri, misalnya "/images/expertise-1.jpg".
const featureImage = selectedProjects[5].image;
const gridImages = [
  selectedProjects[1].image,
  selectedProjects[3].image,
  selectedProjects[4].image,
];

export default function ExpertiseList() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [gridVisible, setGridVisible] = useState(false);

  // --- Efek 1: hitung progres scroll (0 → 1) untuk melebarkan gambar ---
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const distance = rect.height - window.innerHeight;
      const progress = reduceMotion
        ? 1
        : Math.min(1, Math.max(0, -rect.top / distance));
      // Simpan sebagai variabel CSS, dipakai di style gambar
      el.style.setProperty("--p", progress.toFixed(4));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // --- Efek 2: munculkan grid saat masuk ke layar ---
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGridVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Susunan grid: gambar, teks, gambar, teks / teks, gambar, teks, link
  const [e1, e2, e3, e4] = expertiseData;
  const cells = [
    { type: "image", src: gridImages[0] },
    { type: "text", item: e1 },
    { type: "image", src: gridImages[1] },
    { type: "text", item: e2 },
    { type: "text", item: e3 },
    { type: "image", src: gridImages[2] },
    { type: "text", item: e4 },
    { type: "link" },
  ] as const;

  // Animasi masuk tiap sel (muncul bergantian)
  const reveal = (index: number) => ({
    className: `transition-[opacity,transform] duration-700 ease-editorial ${
      gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    }`,
    style: { transitionDelay: `${index * 90}ms` },
  });

  return (
    <section aria-label="Expertise">
      {/* ===== 1. Gambar besar yang melebar saat scroll ===== */}
      <div
        ref={scrollRef}
        className="relative h-[200vh] [--p:0] [--w0:85%] md:[--w0:55%]"
      >
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          <div
            className="relative overflow-hidden"
            style={{
              width: "calc(var(--w0) + (100% - var(--w0)) * var(--p))",
              height: "calc(55vh + 45vh * var(--p))",
            }}
          >
            <Image
              src={featureImage}
              alt="Architectural detail"
              fill
              sizes="100vw"
              className="object-cover"
              style={{ transform: "scale(calc(1.08 - 0.08 * var(--p)))" }}
            />
          </div>
        </div>
      </div>

      {/* ===== 2. Grid gambar & deskripsi ===== */}
      <div className="px-4 py-24 lg:px-8 lg:py-32">
        <div
          ref={gridRef}
          className="grid grid-cols-2 border-l border-t border-border lg:grid-cols-4"
        >
          {cells.map((cell, index) => {
            const anim = reveal(index);

            if (cell.type === "image") {
              return (
                <div
                  key={index}
                  className="aspect-square border-b border-r border-border p-3 lg:p-4"
                >
                  <div
                    className={`relative h-full w-full overflow-hidden ${anim.className}`}
                    style={anim.style}
                  >
                    <Image
                      src={cell.src}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              );
            }

            if (cell.type === "text") {
              if (!cell.item) return null;
              return (
                <div
                  key={index}
                  className="aspect-square border-b border-r border-border p-3 lg:p-4"
                >
                  <div
                    className={`flex h-full flex-col justify-between ${anim.className}`}
                    style={anim.style}
                  >
                    <div className="text-[13px] leading-snug md:text-[15px]">
                      <p className="text-muted">{cell.item.number}</p>
                      <h3>{cell.item.title}</h3>
                    </div>
                    <p className="type-small text-muted md:max-w-[85%]">
                      {cell.item.description}
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="flex aspect-square items-center justify-center border-b border-r border-border p-3 lg:p-4"
              >
                <Link
                  href="/expertise"
                  className={`type-small inline-flex items-center gap-1 underline decoration-1 underline-offset-[3px] hover:opacity-60 ${anim.className}`}
                  style={anim.style}
                >
                  Expertise <span aria-hidden="true">↘</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}