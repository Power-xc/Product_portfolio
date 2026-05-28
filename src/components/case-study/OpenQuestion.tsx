import type { ReactNode } from "react"

export function OpenQuestion({ children }: { children: ReactNode }) {
  return (
    <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.02] px-5 py-5">
      <p className="text-[10px] uppercase tracking-[0.14em] text-white/30">검증하지 못한 가설</p>
      <p className="mt-3 break-keep text-sm leading-7 text-white/55">{children}</p>
    </div>
  )
}
