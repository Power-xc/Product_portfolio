import type { Metadata } from "next"
import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import { workProjectGroups } from "@/lib/home-content"

export const metadata: Metadata = {
  title: "Work · Kangkeun Park",
  description: "Featured product design cases focused on AI UX, Enterprise UX, and Product 1.1.",
}

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Header />
      <main>
        <section className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-24 lg:py-32">
          <p className="text-[12px] font-normal uppercase tracking-[0.18em] text-fg-muted">
            Selected Work
          </p>
          <h1 className="mt-4 text-[clamp(2rem,5.4vw,4rem)] font-normal leading-[1.08] text-fg">
            Work Archive
          </h1>
          <p className="mt-6 max-w-2xl break-keep text-base font-normal leading-8 text-fg md:text-lg">
            AI 제품, 내부 시스템, 엔터프라이즈 플랫폼까지 제품 구조를 정리하고 사용자가 판단할 수
            있는 화면으로 옮긴 작업들입니다.
          </p>

          <div className="mt-14 space-y-16 md:mt-20 md:space-y-20">
            {workProjectGroups.map((group) => (
              <section key={group.category} aria-labelledby={`work-${group.category}`}>
                <div className="grid gap-5 border-t border-line-strong pt-6 md:grid-cols-[0.32fr_1fr] md:gap-10">
                  <h2
                    id={`work-${group.category}`}
                    className="text-[15px] font-normal leading-7 text-fg md:text-[18px]"
                  >
                    {group.category}
                  </h2>
                  <ul className="border-t border-line-strong md:border-t-0">
                    {group.projects.map((project) => (
                      <li
                        key={`${group.category}-${project.name}-${project.year}`}
                        className="grid gap-1 border-b border-line-strong py-4 text-sm font-normal leading-6 text-fg transition hover:bg-surface-2 md:grid-cols-[1fr_1fr_auto] md:gap-6 md:px-2 md:text-[15px]"
                      >
                        <span className="break-keep text-fg">{project.name}</span>
                        <span className="break-keep">{project.role}</span>
                        <span>{project.year}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
