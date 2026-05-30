import { createFileRoute } from "@tanstack/react-router";
import ofn from "@/assets/ofn.png";
import outreach1 from "@/assets/outreach-1.png";
import { Activity, Baby, Pill, Microscope, Heart, GraduationCap } from "lucide-react";
import vbw from "@/assets/vbw.png";

export const Route = createFileRoute("/outreach")({
  head: () => ({
    meta: [
      { title: "Outreach Programs — Oluremi Tinubu Free Medical Outreach" },
      { name: "description", content: "Explore our medical camps, maternal care, free medicines, screenings and partner initiatives like Operation Feed Nigeria." },
      { property: "og:title", content: "Outreach Programs" },
      { property: "og:description", content: "Free medical care, screenings and nutrition support across Nigeria." },
    ],
    links: [{ rel: "canonical", href: "/outreach" }],
  }),
  component: Outreach,
});

const programs = [
  { icon: Activity, t: "Health Screenings", d: "Blood pressure, diabetes, BMI, eye and dental screenings at every camp." },
  { icon: Baby, t: "Maternal & Child Care", d: "Antenatal checks, immunization drives and child nutrition support." },
  { icon: Pill, t: "Free Essential Medicines", d: "On-site pharmacy stocked with WHO-listed essential drugs." },
  { icon: Microscope, t: "Diagnostics", d: "Mobile lab services including malaria, HIV and pregnancy testing." },
  { icon: Heart, t: "Minor Surgeries", d: "Free hernia repair, eye surgeries and outpatient procedures." },
  { icon: GraduationCap, t: "Health Education", d: "Community workshops on hygiene, family planning and preventive care." },
];

function Outreach() {
  return (
    <>
      <section className="bg-brand-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={vbw} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center md:py-24">
          <h1 className="text-4xl font-bold md:text-6xl">Our <span className="text-[var(--brand-green)]">Programs</span></h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From rural villages to urban slums, we bring full-service medical
            outreach to the doorstep of every community.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map(({ icon: Icon, t, d }) => (
            <div key={t} className="group rounded-2xl border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--sky-soft)] text-[var(--brand-green)] group-hover:bg-[var(--brand-green)] group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--sky-soft)]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2">
          <img src={ofn} alt="Operation Feed Nigeria" className="mx-auto w-full max-w-md rounded-2xl shadow-lg" />
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--brand-red)]">Partner Initiative</span>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Operation Feed Nigeria (OFN)</h2>
            <p className="mt-4 text-muted-foreground">
              Nutrition is medicine. Through our partnership with OFN, every
              medical camp is paired with food relief — ensuring families
              leave with both care and sustenance.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>· Distribution of food packs to vulnerable households</li>
              <li>· Nutritional counseling for mothers and children</li>
              <li>· Community gardens & sustainable food projects</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <img src={outreach1} alt="Medical team at outreach" className="w-full rounded-2xl shadow-xl" />
      </section>
    </>
  );
}
