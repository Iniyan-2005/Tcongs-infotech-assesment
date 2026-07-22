import Link from "next/link";
import { BrandMark } from "./brand-mark";

export function SiteFooter() {
  return (
    <footer className="bg-ink py-12 text-white">
      <div className="section-wrap">
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-start">
          <div>
            <Link href="/"><BrandMark dark /></Link>
            <p className="mt-5 max-w-xs text-sm leading-6 text-white/45">
              Empowering global brands with custom digital systems, commerce experiences and measurable growth.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-8 sm:grid-cols-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[.18em] text-white/35">Explore</p>
              <div className="mt-4 space-y-3 text-sm text-white/65">
                <Link className="block transition hover:text-cyan" href="/capabilities">Capabilities</Link>
                <Link className="block transition hover:text-cyan" href="/approach">Approach</Link>
                <Link className="block transition hover:text-cyan" href="/work">Work</Link>
                <Link className="block transition hover:text-cyan" href="/about">About</Link>
              </div>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[.18em] text-white/35">Connect</p>
              <div className="mt-4 space-y-3 text-sm text-white/65">
                <a className="block transition hover:text-cyan" href="mailto:info@tcongsinfotech.com">Email us</a>
                <a className="block transition hover:text-cyan" href="https://in.linkedin.com/company/tcongs-infotech" target="_blank" rel="noreferrer">LinkedIn</a>
                <Link className="block transition hover:text-cyan" href="/contact">Start a project</Link>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-[11px] font-semibold uppercase tracking-[.18em] text-white/35">Our base</p>
              <p className="mt-4 text-sm leading-6 text-white/65">Mumbai, India<br />Serving clients worldwide</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 pt-6 text-xs text-white/35 sm:flex-row">
          <p>© 2026 Tcongs Infotech. All rights reserved. Developed by Iniyan S.</p>
          <p>Built with intent.</p>
        </div>
      </div>
    </footer>
  );
}
