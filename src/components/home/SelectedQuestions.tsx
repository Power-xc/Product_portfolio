import Link from "next/link"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { selectedQuestions } from "@/lib/home-content"

export function SelectedQuestions() {
  return (
    <section
      id="selected-questions"
      className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-24 lg:py-32"
    >
      <SectionHeading
        eyebrow="Selected Questions"
        title="질문은 프로젝트보다 먼저 보입니다."
        description="질문은 프로젝트를 소개하기보다, 제가 문제를 바라보는 방식을 보여줍니다."
      />
      <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2">
        {selectedQuestions.map((card) => (
          <Link
            key={card.number}
            href={card.href}
            className="group relative flex min-h-[250px] flex-col overflow-hidden rounded-xl border border-line bg-surface p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-line-strong hover:bg-surface-2 hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:min-h-[300px] md:p-9"
            aria-label={`${card.project} 질문 보기`}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent opacity-0 blur-[80px] transition duration-500 group-hover:opacity-20"
            />
            <div className="flex items-start justify-between gap-4 text-[11px] font-normal uppercase tracking-[0.16em] text-fg-faint md:text-xs">
              <span>{card.number}</span>
              <span className="max-w-[72%] text-right leading-5">{card.tag}</span>
            </div>
            <h3 className="mt-10 whitespace-pre-line break-keep text-[25px] font-normal leading-[1.25] text-fg sm:text-[28px] md:mt-12 md:text-[32px]">
              {card.question}
            </h3>
            <div className="mt-auto pt-10">
              <p className="break-keep text-xs leading-5 text-fg-faint">{card.result}</p>
              <div className="mt-3 flex items-end justify-between gap-6">
                <p className="text-sm font-normal leading-6 text-fg-muted">{card.project}</p>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-fg-faint transition duration-300 group-hover:border-line-strong group-hover:bg-fg group-hover:text-bg">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
