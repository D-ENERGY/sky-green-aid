import { createFileRoute } from "@tanstack/react-router";
import o1 from "@/assets/outreach-1.png";
import speech from "@/assets/tinubu-speech.png";
import volunteers from "@/assets/volunteers.png";
import banner from "@/assets/banner-wide.png";
import title from "@/assets/banner-title.png";
import hero from "@/assets/hero-poster.png";
import ofn from "@/assets/ofn.png";
import coordinator from "@/assets/coordinator.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Oluremi Tinubu Free Medical Outreach" },
      { name: "description", content: "Photos from our medical outreach camps across Nigeria." },
      { property: "og:title", content: "Gallery" },
      { property: "og:description", content: "Moments from our nationwide medical outreach." },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const photos = [
  { src: o1, alt: "Medical team at outreach camp" },
  { src: speech, alt: "Sen. Oluremi Tinubu speaking" },
  { src: volunteers, alt: "Volunteers at outreach" },
  { src: banner, alt: "Outreach banner" },
  { src: title, alt: "Free Medical Outreach title" },
  { src: hero, alt: "Outreach poster" },
  { src: ofn, alt: "Operation Feed Nigeria" },
  { src: coordinator, alt: "National Coordinator" },
];

function Gallery() {
  return (
    <>
      <section className="bg-brand-hero">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:py-24">
          <h1 className="text-4xl font-bold md:text-6xl">Moments of <span className="text-[var(--brand-green)]">Care</span></h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Highlights from our outreach camps across Nigeria.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {photos.map((p, i) => (
            <div key={i} className="break-inside-avoid overflow-hidden rounded-xl shadow-md transition hover:shadow-2xl">
              <img src={p.src} alt={p.alt} className="w-full" loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
