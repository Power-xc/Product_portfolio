export function DefinitionCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-black/20 p-5">
      <p className="text-[15px] font-normal leading-6 text-white">{title}</p>
      <p className="mt-3 break-keep text-sm leading-6 text-white/50">{body}</p>
    </div>
  )
}
