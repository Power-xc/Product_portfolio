export function DefinitionCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-t border-line pt-5">
      <p className="text-[15px] font-normal leading-6 text-fg">{title}</p>
      <p className="mt-3 break-keep text-sm leading-6 text-fg-muted">{body}</p>
    </div>
  )
}
