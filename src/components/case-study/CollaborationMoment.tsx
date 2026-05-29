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
    <div className="mt-8 border-t border-line pt-6">
      <p className="text-[11px] uppercase tracking-[0.18em] text-fg-faint">Collaboration Moment</p>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.14em] text-fg-faint">상황</p>
          <p className="mt-2 break-keep text-sm leading-6 text-fg-muted">{situation}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.14em] text-fg-faint">근거</p>
          <p className="mt-2 break-keep text-sm leading-6 text-fg">{evidence}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.14em] text-fg-faint">결과</p>
          <p className="mt-2 break-keep text-sm leading-6 text-fg-muted">{result}</p>
        </div>
      </div>
    </div>
  )
}
