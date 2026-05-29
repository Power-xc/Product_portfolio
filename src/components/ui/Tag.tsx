type TagProps = {
  children: string
}

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-[11px] font-normal leading-5 text-white/50">
      {children}
    </span>
  )
}
