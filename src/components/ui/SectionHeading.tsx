type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-fg-faint md:text-xs">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="break-keep text-[clamp(1.8rem,7vw,3rem)] font-normal leading-[1.16] text-fg md:text-[48px]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl break-keep text-base font-normal leading-8 text-fg-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
