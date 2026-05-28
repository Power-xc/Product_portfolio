export function FormulaCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-black/25 p-5">
      <p className="text-[12px] uppercase tracking-[0.16em] text-white/35">{label}</p>
      <p className="mt-4 break-keep text-sm leading-7 text-white/65">{value}</p>
    </div>
  )
}
