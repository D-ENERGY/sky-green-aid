import { createFileRoute } from "@tanstack/react-router";
import speech from "@/assets/tinubu-speech.png";
import banner from "@/assets/banner-wide.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Oluremi Tinubu Free Medical Outreach" },
      { name: "description", content: "Our mission, vision and story behind Nigeria's free medical outreach initiative." },
      { property: "og:title", content: "About the Oluremi Tinubu Free Medical Outreach" },
      { property: "og:description", content: "Bringing quality healthcare to underserved Nigerian communities." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="bg-brand-hero">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:py-24">
          <h1 className="text-4xl font-bold md:text-6xl">About <span className="text-gradient-brand">Our Mission</span></h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A nationwide humanitarian initiative bringing free, quality healthcare
            to communities across Nigeria.
          </p>
          <img src={banner} alt="Oluremi Tinubu Free Medical Outreach" className="mx-auto mt-10 w-full max-w-3xl rounded-xl shadow-xl" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            { t: "Our Mission", c: "To provide free, accessible, quality healthcare to underserved Nigerians regardless of geography or income.", color: "var(--brand-green)" },
            { t: "Our Vision", c: "A Nigeria where every citizen has access to dignified medical care and the chance at a healthy life.", color: "var(--sky)" },
            { t: "Our Values", c: "Compassion, integrity, excellence and unwavering service to humanity.", color: "var(--brand-red)" },
          ].map((b) => (
            <div key={b.t} className="rounded-2xl border bg-card p-8 shadow-sm">
              <div className="mb-4 h-1 w-12 rounded-full" style={{ background: b.color }} />
              <h3 className="text-xl font-bold">{b.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{b.c}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--sky-soft)]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2">
          <img src={speech} alt="Sen. Oluremi Tinubu speaking" className="rounded-2xl shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              Born from Her Excellency Sen. Oluremi Tinubu's lifelong work with
              women and children, the Free Medical Outreach scales decades of
              grassroots care into a nationwide movement. Today, in partnership
              with HASO Rock, we deploy medical teams to communities that have
              long been overlooked — closing the gap between policy and people.
            </p>
            <p className="mt-4 text-muted-foreground">
              Every camp we host is a promise kept: that no Nigerian should be
              left behind when it comes to their health.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
