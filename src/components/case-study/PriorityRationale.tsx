import type { ReactNode } from "react"

export function PriorityRationale({ children }: { children: ReactNode }) {
  return (
    <div className="mb-8 rounded-lg border border-line bg-surface px-5 py-4">
      <p className="text-[10px] uppercase tracking-[0.14em] text-fg-faint">
        Why This Problem First
      </p>
      <p className="mt-2 break-keep text-sm leading-6 text-fg-muted">{children}</p>
    </div>
  )
}
