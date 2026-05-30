import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Oluremi Tinubu Free Medical Outreach" },
      { name: "description", content: "Get in touch, volunteer or partner with the Oluremi Tinubu Free Medical Outreach." },
      { property: "og:title", content: "Contact Us" },
      { property: "og:description", content: "Volunteer, donate or partner with us." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="bg-brand-hero">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:py-24">
          <h1 className="text-4xl font-bold md:text-6xl">Get <span className="text-[var(--brand-red)]">Involved</span></h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Whether you want to volunteer, donate or invite us to your community —
            we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2">
        <div className="space-y-6">
          {[
            { icon: MapPin, t: "Headquarters", v: "Abuja, Nigeria", c: "var(--brand-green)" },
            { icon: Mail, t: "Email", v: "info@oluremitinubufmo.org", c: "var(--sky)" },
            { icon: Phone, t: "Phone", v: "+234 800 000 0000", c: "var(--brand-red)" },
          ].map(({ icon: Icon, t, v, c }) => (
            <div key={t} className="flex items-start gap-4 rounded-xl border bg-card p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg text-white" style={{ background: c }}>
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold">{t}</div>
                <div className="text-sm text-muted-foreground">{v}</div>
              </div>
            </div>
          ))}
          <div className="rounded-xl bg-[var(--gold)]/15 p-5">
            <p className="text-sm">
              <strong>Want to host an outreach in your community?</strong> Send us a
              message with your LGA and contact person — we'll be in touch.
            </p>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="space-y-4 rounded-2xl border bg-card p-6 shadow-sm"
        >
          <div>
            <label className="text-sm font-medium">Name</label>
            <input required className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input type="email" required className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="text-sm font-medium">I'm interested in</label>
            <select className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm">
              <option>Volunteering</option>
              <option>Donating</option>
              <option>Hosting an outreach</option>
              <option>Partnership</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea required rows={5} className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" />
          </div>
          <button className="w-full rounded-md bg-[var(--brand-green)] py-3 text-sm font-semibold text-white hover:opacity-90">
            {sent ? "Thank you! We'll be in touch." : "Send Message"}
          </button>
        </form>
      </section>
    </>
  );
}
