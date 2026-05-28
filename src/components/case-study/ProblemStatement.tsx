import { FormulaCard } from "./FormulaCard"

export function ProblemStatement({
  target,
  situation,
  pain,
  breakdown,
}: {
  target: string
  situation: string
  pain: string
  breakdown: string
}) {
  return (
    <div className="mt-8">
      <p className="mb-4 text-[11px] uppercase tracking-[0.16em] text-white/35">Problem Statement</p>
      <div className="grid gap-3 md:grid-cols-4">
        <FormulaCard label="대상" value={target} />
        <FormulaCard label="상황" value={situation} />
        <FormulaCard label="고통" value={pain} />
        <FormulaCard label="성공 기준 붕괴" value={breakdown} />
      </div>
    </div>
  )
}
