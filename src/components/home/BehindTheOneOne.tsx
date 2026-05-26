import { SectionHeading } from "@/components/ui/SectionHeading"
import { behindItems, type BehindItem } from "@/lib/home-content"

function PlaceholderGraphic({ type }: { type: BehindItem["placeholder"] }) {
  if (type === "signals") {
    return (
      <div className="grid h-full grid-cols-2 gap-3">
        {[0, 1, 2, 3].map((item) => (
          <div key={item} className="rounded-md border border-white/10 bg-background/60 p-3">
            <span className="block h-1.5 w-14 rounded-full bg-white/20" />
            <span className="mt-4 block h-1.5 w-full rounded-full bg-white/10" />
            <span className="mt-2 block h-1.5 w-3/4 rounded-full bg-white/10" />
          </div>
        ))}
      </div>
    )
  }

  if (type === "map") {
    return (
      <div className="relative h-full">
        <span className="absolute left-[16%] top-1/2 h-px w-[68%] bg-white/10" />
        {[18, 42, 66, 84].map((left, index) => (
          <span
            key={left}
            className={`absolute top-1/2 h-16 w-24 -translate-x-1/2 -translate-y-1/2 rounded-md border border-white/10 bg-background/70 ${
              index % 2 === 0 ? "-mt-8" : "mt-8"
            }`}
            style={{ left: `${left}%` }}
          />
        ))}
      </div>
    )
  }

  if (type === "draft") {
    return (
      <div className="grid h-full grid-cols-[0.7fr_1fr] gap-3">
        <div className="rounded-md border border-white/10 bg-background/60 p-3">
          <span className="block h-24 rounded-md bg-white/[0.08]" />
          <span className="mt-4 block h-2 w-2/3 rounded-full bg-white/10" />
          <span className="mt-2 block h-2 w-1/2 rounded-full bg-white/10" />
        </div>
        <div className="rounded-md border border-accent/20 bg-accent/10 p-3">
          <span className="block h-2 w-20 rounded-full bg-accent/30" />
          <div className="mt-5 grid gap-2">
            {[0, 1, 2].map((item) => (
              <span key={item} className="h-10 rounded-md border border-white/10 bg-white/[0.07]" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="grid h-full grid-cols-3 gap-3">
      {[0, 1, 2].map((item) => (
        <div key={item} className="rounded-md border border-white/10 bg-background/60 p-3">
          <span className="block h-2 w-10 rounded-full bg-accent/30" />
          <span className="mt-6 block h-16 rounded-md border border-white/10" />
          <span className="mt-4 block h-2 rounded-full bg-white/10" />
        </div>
      ))}
    </div>
  )
}

export function BehindTheOneOne() {
  return (
    <section className="border-y border-white/10 bg-[#0B0B10]">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-24 lg:py-32">
        <SectionHeading
          eyebrow="Behind the 1.1"
          title="화면을 그리기 전에, 복잡한 구조를 먼저 펼쳐봅니다."
        />
        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-5">
          {behindItems.map((item) => (
            <article
              key={item.number}
              className="grid gap-6 rounded-lg border border-white/10 bg-white/[0.018] p-4 md:p-6"
            >
              <div className="h-44 rounded-md border border-white/10 bg-white/[0.025] p-3 sm:h-52 md:p-4">
                <PlaceholderGraphic type={item.placeholder} />
              </div>
              <div>
                <p className="text-[11px] font-normal uppercase tracking-[0.16em] text-white/35 md:text-xs">
                  {item.number}
                </p>
                <h3 className="mt-4 text-2xl font-normal text-white">{item.title}</h3>
                <p className="mt-4 break-keep text-sm font-normal leading-7 text-white/55">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
