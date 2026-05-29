export function FormulaCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-line pt-5">
      <p className="text-[12px] uppercase tracking-[0.16em] text-fg-faint">{label}</p>
      <p className="mt-4 break-keep text-sm leading-7 text-fg-muted">{value}</p>
    </div>
  )
}
