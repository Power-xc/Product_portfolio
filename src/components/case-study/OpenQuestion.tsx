import type { ReactNode } from "react"

export function OpenQuestion({ children }: { children: ReactNode }) {
  return (
    <div className="mt-8 rounded-lg border border-line bg-surface px-5 py-5">
      <p className="text-[10px] uppercase tracking-[0.14em] text-fg-faint">검증하지 못한 가설</p>
      <p className="mt-3 break-keep text-sm leading-7 text-fg-muted">{children}</p>
    </div>
  )
}
