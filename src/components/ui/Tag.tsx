type TagProps = {
  children: string
}

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex rounded-full border border-line bg-surface px-3 py-1 text-[11px] font-normal leading-5 text-fg-muted">
      {children}
    </span>
  )
}
