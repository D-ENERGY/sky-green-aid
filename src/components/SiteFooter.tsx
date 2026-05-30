import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import haso from "@/assets/haso-rock.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t bg-[var(--sky-soft)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-12 w-12" />
            <div>
              <div className="text-sm font-bold text-[var(--brand-green)]">OLUREMI TINUBU</div>
              <div className="text-xs text-[var(--brand-red)]">Free Medical Outreach</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Bringing free, quality healthcare to underserved communities across Nigeria.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">RC: 9511630</p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-[var(--brand-green)]">About</Link></li>
            <li><Link to="/outreach" className="hover:text-[var(--brand-green)]">Outreach Programs</Link></li>
            <li><Link to="/team" className="hover:text-[var(--brand-green)]">Leadership</Link></li>
            <li><Link to="/gallery" className="hover:text-[var(--brand-green)]">Gallery</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Abuja, Nigeria</li>
            <li>info@oluremitinubufmo.org</li>
            <li>+234 800 000 0000</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Powered by</h4>
          <img src={haso} alt="HASO Rock — RC: 7162893" className="h-16 w-auto rounded bg-white p-2" />
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Oluremi Tinubu Free Medical Outreach. All rights reserved.
      </div>
    </footer>
  );
}
