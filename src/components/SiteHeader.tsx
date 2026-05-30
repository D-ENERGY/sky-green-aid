import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/outreach", label: "Outreach" },
  { to: "/team", label: "Team" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Oluremi Tinubu Free Medical Outreach logo" className="h-12 w-12" />
          <div className="leading-tight">
            <div className="text-sm font-semibold text-[var(--brand-green)]">OLUREMI TINUBU</div>
            <div className="text-xs font-medium text-[var(--brand-red)]">Free Medical Outreach</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition hover:bg-secondary hover:text-foreground [&.active]:bg-secondary [&.active]:text-[var(--brand-green)]"
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 rounded-md bg-[var(--brand-red)] px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90"
          >
            Get Involved
          </Link>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded px-2 py-2 text-sm hover:bg-secondary">
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
