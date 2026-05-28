import type { ReactNode } from "react"

export function PriorityRationale({ children }: { children: ReactNode }) {
  return (
    <div className="mb-8 rounded-lg border border-white/10 bg-white/[0.02] px-5 py-4">
      <p className="text-[10px] uppercase tracking-[0.14em] text-white/30">Why This Problem First</p>
      <p className="mt-2 break-keep text-sm leading-6 text-white/55">{children}</p>
    </div>
  )
}
