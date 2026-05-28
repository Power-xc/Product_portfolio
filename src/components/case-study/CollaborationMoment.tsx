export function CollaborationMoment({
  situation,
  evidence,
  result,
}: {
  situation: string
  evidence: string
  result: string
}) {
  return (
    <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.02] p-6">
      <p className="text-[11px] uppercase tracking-[0.18em] text-white/35">Collaboration Moment</p>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.14em] text-white/30">상황</p>
          <p className="mt-2 break-keep text-sm leading-6 text-white/55">{situation}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.14em] text-white/30">근거</p>
          <p className="mt-2 break-keep text-sm leading-6 text-white">{evidence}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.14em] text-white/30">결과</p>
          <p className="mt-2 break-keep text-sm leading-6 text-white/55">{result}</p>
        </div>
      </div>
    </div>
  )
}
