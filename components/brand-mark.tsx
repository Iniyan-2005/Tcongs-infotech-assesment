export function BrandMark({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5" aria-label="Tcongs Infotech">
      <svg className="logo-mark h-9 w-9 shrink-0" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M8 10.5 20 3l12 7.5v14L20 32 8 24.5v-14Z" fill={dark ? "#35D6E7" : "#07111D"} />
        <path d="m14 14 6-3.5 6 3.5v7l-6 3.5-6-3.5v-7Z" fill="#FF6A56" />
        <path d="m20 3 12 7.5-12 7-12-7L20 3Z" fill="#35D6E7" fillOpacity=".75" />
        <path d="M20 17.5V32" stroke={dark ? "#07111D" : "white"} strokeWidth="2" opacity=".8" />
      </svg>
      <span className={`text-[15px] font-bold tracking-[-.04em] ${dark ? "text-white" : "text-ink"}`}>
        tcongs<span className="text-coral">.</span>
        <span className={`ml-1 font-medium tracking-[-.03em] ${dark ? "text-white/50" : "text-slate-500"}`}>infotech</span>
      </span>
    </span>
  );
}
