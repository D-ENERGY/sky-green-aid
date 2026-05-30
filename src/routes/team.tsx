import { createFileRoute } from "@tanstack/react-router";
import coordinator from "@/assets/coordinator.png";
import speech from "@/assets/tinubu-speech.png";
import vbw from "@/assets/vbw.png";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Leadership — Oluremi Tinubu Free Medical Outreach" },
      { name: "description", content: "Meet the leadership behind the Oluremi Tinubu Free Medical Outreach — including National Coordinator Hon. Prince Gbenga Ajayi." },
      { property: "og:title", content: "Our Leadership" },
      { property: "og:description", content: "The people leading Nigeria's free medical outreach movement." },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: Team,
});

function Team() {
  return (
    <>
      <section className="bg-brand-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={vbw} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center md:py-24">
          <h1 className="text-4xl font-bold md:text-6xl">Our <span className="text-[var(--brand-red)]">Leadership</span></h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Visionary leaders, dedicated coordinators and a nationwide network
            of medical volunteers.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <article className="overflow-hidden rounded-2xl border bg-card shadow-lg">
            <img src={speech} alt="Sen. Oluremi Tinubu" className="h-80 w-full object-cover" />
            <div className="p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--brand-green)]">Patron</span>
              <h3 className="mt-2 text-2xl font-bold">Sen. Oluremi Tinubu</h3>
              <p className="text-sm text-muted-foreground">First Lady, Federal Republic of Nigeria</p>
              <p className="mt-4 text-sm">
                A distinguished senator and lifelong advocate for women, children
                and the vulnerable. Her vision powers this nationwide outreach.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border bg-card shadow-lg">
            <img src={coordinator} alt="Hon. Prince Gbenga Ajayi" className="h-80 w-full object-cover" />
            <div className="p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--brand-red)]">National Coordinator</span>
              <h3 className="mt-2 text-2xl font-bold">Hon. Prince Gbenga Ajayi</h3>
              <p className="text-sm text-muted-foreground">National Coordinator</p>
              <p className="mt-4 text-sm">
                Leading the day-to-day implementation of the outreach across all
                36 states, coordinating medical teams, logistics and community
                partnerships.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-16 rounded-2xl bg-[var(--sky-soft)] p-10 text-center">
          <h2 className="text-2xl font-bold">A Nationwide Network of Volunteers</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
            Hundreds of doctors, nurses, pharmacists and community workers donate
            their time at every camp.
          </p>
        </div>
      </section>
    </>
  );
}
