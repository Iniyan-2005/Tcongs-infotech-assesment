"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BrandMark } from "./brand-mark";
import { ThemeToggle } from "./theme-toggle";
import { useTheme } from "./theme-provider";

const links = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Approach", href: "/approach" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolledRef = useRef(false);
  const frameRef = useRef<number | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const updateHeader = () => {
      frameRef.current = null;
      const nextScrolled = window.scrollY > 18;
      if (nextScrolled !== scrolledRef.current) {
        scrolledRef.current = nextScrolled;
        setScrolled(nextScrolled);
      }
    };
    const onScroll = () => {
      if (frameRef.current === null) frameRef.current = window.requestAnimationFrame(updateHeader);
    };
    updateHeader();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <header className={`site-header fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "is-scrolled border-b border-slate-200/70 bg-white/80 shadow-[0_8px_34px_rgba(10,30,50,.06)] backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="section-wrap flex h-[76px] items-center justify-between">
        <Link href="/" aria-label="Tcongs Infotech home"><BrandMark dark={theme === "dark"} /></Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {links.map((link) => <Link className="text-[13px] font-medium text-slate-600 transition-colors hover:text-ink" href={link.href} key={link.label}>{link.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <Link href="/contact" className="group flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[12px] font-semibold text-white transition hover:bg-slate-800">
            Start a project <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button className="rounded-full border border-slate-200 bg-white/70 p-2.5 text-ink dark:bg-slate-900/70" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} onClick={() => setMobileOpen((value) => !value)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="border-t border-slate-200/70 bg-white/95 px-6 py-5 backdrop-blur-xl dark:border-slate-700/70 dark:bg-[#0b1927]/95 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-4">
            {links.map((link) => <Link onClick={() => setMobileOpen(false)} className="py-2 text-lg font-medium text-ink" href={link.href} key={link.label}>{link.label}</Link>)}
            <Link onClick={() => setMobileOpen(false)} href="/contact" className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white">Start a project <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </motion.nav>}
      </AnimatePresence>
    </header>
  );
}
