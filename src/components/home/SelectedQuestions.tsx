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
            className="group flex min-h-[250px] flex-col rounded-lg border border-white/10 bg-white/[0.018] p-5 transition duration-200 hover:border-white/30 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:min-h-[280px] md:p-8"
            aria-label={`${card.project} 질문 보기`}
          >
            <div className="flex items-start justify-between gap-4 text-[11px] font-normal uppercase tracking-[0.16em] text-white/35 md:text-xs">
              <span>{card.number}</span>
              <span className="max-w-[72%] text-right leading-5">{card.tag}</span>
            </div>
            <h3 className="mt-10 whitespace-pre-line break-keep text-[25px] font-normal leading-[1.25] text-white sm:text-[28px] md:mt-12 md:text-[32px]">
              {card.question}
            </h3>
            <div className="mt-auto pt-10">
              <p className="break-keep text-xs leading-5 text-white/35">{card.result}</p>
              <div className="mt-3 flex items-end justify-between gap-6">
                <p className="text-sm font-normal leading-6 text-white/45">{card.project}</p>
                <span className="text-xl text-white/45 opacity-60 transition duration-200 group-hover:translate-x-1 group-hover:text-white group-hover:opacity-100">
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
