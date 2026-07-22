"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const darkMode = theme === "dark";

  return <button type="button" onClick={toggleTheme} aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"} title={darkMode ? "Switch to light mode" : "Switch to dark mode"} className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-ink transition hover:-translate-y-0.5 hover:border-cyan hover:bg-white focus:outline-none focus:ring-4 focus:ring-cyan/15 dark:border-cyan/30 dark:bg-[#13283a] dark:text-cyan dark:hover:border-cyan dark:hover:bg-[#19364b]">
    {darkMode ? <Sun className="h-4 w-4 text-cyan" /> : <Moon className="h-4 w-4" />}
  </button>;
}
