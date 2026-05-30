import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-poster.png";
import outreach1 from "@/assets/outreach-1.png";
import speech from "@/assets/tinubu-speech.png";
import volunteers from "@/assets/volunteers.png";
import { Heart, Stethoscope, Users, HandHeart } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oluremi Tinubu Free Medical Outreach — Healthcare for All" },
      { name: "description", content: "A nationwide initiative providing free medical care, screenings and medicines to underserved communities across Nigeria." },
      { property: "og:title", content: "Oluremi Tinubu Free Medical Outreach" },
      { property: "og:description", content: "Free, quality healthcare for every Nigerian community." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={hero} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--brand-green)] shadow-sm ring-1 ring-[var(--brand-green)]/20">
              RC: 9511630 · Nationwide Initiative
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              <span className="text-[var(--brand-green)]">Oluremi Tinubu</span>{" "}
              <span className="block text-gradient-brand">Free Medical Outreach</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
              Delivering free consultations, screenings, medicines and surgeries to
              underserved communities across Nigeria — one heart at a time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/outreach" className="rounded-md bg-[var(--brand-green)] px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-90">
                Our Programs
              </Link>
              <Link to="/contact" className="rounded-md border-2 border-[var(--brand-red)] px-5 py-3 text-sm font-semibold text-[var(--brand-red)] hover:bg-[var(--brand-red)] hover:text-white">
                Volunteer / Donate
              </Link>
            </div>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-6 text-center">
              {[
                { n: "50K+", l: "Patients Served" },
                { n: "120+", l: "Outreach Camps" },
                { n: "36", l: "States Reached" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-bold text-[var(--brand-green)] md:text-3xl">{s.n}</div>
                  <div className="text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[var(--sky)]/40 via-white/0 to-[var(--gold)]/30 blur-2xl" />
            <img src={hero} alt="Oluremi Tinubu Free Medical Outreach poster" className="relative mx-auto w-full max-w-md rounded-2xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Mission strip */}
      <section className="border-y bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 md:grid-cols-4">
          {[
            { icon: Stethoscope, t: "Free Consultations", c: "text-[var(--sky)]" },
            { icon: Heart, t: "Medicines & Care", c: "text-[var(--brand-red)]" },
            { icon: Users, t: "Community Camps", c: "text-[var(--brand-green)]" },
            { icon: HandHeart, t: "Volunteer Network", c: "text-[var(--gold)]" },
          ].map(({ icon: Icon, t, c }) => (
            <div key={t} className="flex items-center gap-3">
              <Icon className={`h-8 w-8 ${c}`} />
              <div className="text-sm font-semibold">{t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <img src={outreach1} alt="Medical staff serving community" className="rounded-2xl shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Healthcare is a <span className="text-[var(--brand-green)]">right</span>, not a privilege.</h2>
            <p className="mt-4 text-muted-foreground">
              Inspired by Her Excellency Sen. Oluremi Tinubu's vision of a healthier
              Nigeria, our outreach mobilizes doctors, nurses and volunteers to bring
              essential medical services directly to communities that need them most.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "General health screenings & diagnostics",
                "Maternal and child care",
                "Free essential medicines",
                "Health education & awareness",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--brand-red)]" />
                  {i}
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex rounded-md bg-[var(--sky)] px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-90">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Quote / Patron */}
      <section className="bg-[var(--sky-soft)]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2">
          <img src={speech} alt="Sen. Oluremi Tinubu" className="rounded-2xl shadow-lg" />
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--brand-red)]">Our Patron</span>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Sen. Oluremi Tinubu</h2>
            <blockquote className="mt-6 border-l-4 border-[var(--gold)] pl-4 text-lg italic text-foreground/80">
              "Every Nigerian — no matter where they live — deserves dignity, care
              and the chance at a healthy life."
            </blockquote>
            <p className="mt-4 text-sm text-muted-foreground">
              The First Lady of the Federal Republic of Nigeria champions this
              initiative as part of her lifelong commitment to women, children and
              vulnerable communities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--brand-green)] via-[var(--sky)] to-[var(--brand-red)] p-10 text-center text-white shadow-xl md:p-16">
          <img src={volunteers} alt="Volunteers" className="mx-auto mb-6 hidden h-40 w-auto rounded-xl object-cover shadow-lg md:block" />
          <h2 className="text-3xl font-bold md:text-5xl">Join us. Heal a nation.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Whether you give time, expertise or resources — every contribution
            reaches a family in need.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-[var(--brand-green)] shadow hover:bg-[var(--gold)] hover:text-white">
              Become a Volunteer
            </Link>
            <Link to="/contact" className="rounded-md border-2 border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-[var(--brand-red)]">
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
