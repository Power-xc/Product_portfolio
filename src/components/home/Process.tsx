import { SectionHeading } from "@/components/ui/SectionHeading"
import { processSteps } from "@/lib/home-content"

export function Process() {
  return (
    <section id="approach" className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-24 lg:py-32">
      <div>
        <SectionHeading title="저는 화면을 그리기 전에, 사용자가 멈추는 구조를 먼저 찾습니다." />
        <div className="mt-10 grid gap-px overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 md:mt-14 md:grid-cols-2 md:rounded-[1.75rem] lg:grid-cols-5">
          {processSteps.map((step) => (
            <article
              key={step.number}
              className={`min-h-[220px] bg-background p-5 md:min-h-[240px] md:p-6 lg:min-h-[270px] ${
                step.featured
                  ? "bg-[linear-gradient(180deg,rgba(201,182,255,0.11),rgba(8,8,12,1))]"
                  : ""
              }`}
            >
              <p className="text-[11px] font-normal uppercase tracking-[0.16em] text-white/30 md:text-xs">
                {step.number}
              </p>
              <h3 className="mt-8 text-2xl font-normal text-white">{step.title}</h3>
              <p className="mt-5 break-keep text-sm font-normal leading-7 text-white/55">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
