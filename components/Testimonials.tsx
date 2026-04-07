"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import ScrollReveal from "./ScrollReveal";

const slides = [
  { src: "/WhatsApp-Image-2026-04-02-at-10.15.19.webp",      alt: "Depoimento de aluna" },
  { src: "/WhatsApp-Image-2026-04-02-at-10.15.19-_1_.webp",  alt: "Depoimento de aluna" },
  { src: "/WhatsApp-Image-2026-04-02-at-10.15.20.webp",      alt: "Depoimento de aluna" },
  { src: "/WhatsApp-Image-2026-04-02-at-10.15.20-_1_.webp",  alt: "Depoimento de aluna" },
  { src: "/WhatsApp-Image-2026-04-02-at-10.15.30.webp",      alt: "Depoimento de aluna" },
  { src: "/WhatsApp-Image-2026-04-02-at-10.15.31.webp",      alt: "Depoimento de aluna" },
  { src: "/WhatsApp-Image-2026-04-02-at-10.15.31-_1_.webp",  alt: "Depoimento de aluna" },
  { src: "/WhatsApp-Image-2026-04-02-at-10.15.31-_2_.webp",  alt: "Depoimento de aluna" },
  { src: "/WhatsApp-Image-2026-04-02-at-10.15.32.webp",      alt: "Depoimento de aluna" },
];

const AUTOPLAY_MS = 2000;

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <div style={{ paddingTop: "3rem", paddingBottom: "3rem" }} className="border-b border-brand-gray-border">
      <ScrollReveal direction="up" delay={0}>
        <p className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-brand-purple mb-3">
          Quem já transformou
        </p>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <h2 className="text-[clamp(1.35rem,3vw,1.85rem)] font-extrabold leading-[1.25] mb-5 text-brand-text">
          Resultados reais de <span className="text-brand-red">pais reais.</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={200}>
        <div
          className="relative my-6 select-none"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          {/* Track com fade crossfade */}
          <div
            className="relative w-full overflow-hidden rounded-2xl bg-[#e5ddd5]"
            style={{ minHeight: "340px" }}
          >
            {slides.map((slide, i) => (
              <div
                key={slide.src}
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-700"
                style={{
                  opacity: i === active ? 1 : 0,
                  pointerEvents: i === active ? "auto" : "none",
                }}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={480}
                  height={640}
                  className="w-full h-auto max-h-[520px] object-contain"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {/* Dots de navegação */}
          <div className="flex justify-center gap-1.5 mt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}`}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background: i === active ? "#eb0031" : "#d1d1d1",
                  transform: i === active ? "scale(1.25)" : "scale(1)",
                }}
              />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
