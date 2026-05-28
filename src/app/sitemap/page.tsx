import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import { selectedQuestions, workProjectGroups } from "@/lib/home-content"

type SitemapLink = {
  label: string
  href: string
  description: string
}

type SitemapSection = {
  number: string
  title: string
  body: string
  links: SitemapLink[]
}

const mainLinks: SitemapLink[] = [
  {
    label: "Home",
    href: "/",
    description: "Product 1.1 포지셔닝과 대표 질문을 확인하는 첫 화면",
  },
  {
    label: "Work",
    href: "/work",
    description: "AI 제품, 내부 시스템, 엔터프라이즈 프로젝트 아카이브",
  },
  {
    label: "About",
    href: "/about",
    description: "프로필, 경험, 역량, 연락처를 정리한 소개 페이지",
  },
]

const homeSectionLinks: SitemapLink[] = [
  {
    label: "Selected Questions",
    href: "/#selected-questions",
    description: "대표 케이스를 질문 중심으로 살펴보는 영역",
  },
  {
    label: "Behind the 1.1",
    href: "/#behind-1-1",
    description: "리서치, IA, Draft, 기준 화면으로 이어지는 작업 방식",
  },
  {
    label: "Approach",
    href: "/#approach",
    description: "Observe, Map, Cut, Reframe, Prototype로 정리한 설계 흐름",
  },
  {
    label: "AI Workflow",
    href: "/#ai-workflow",
    description: "AI를 빠른 검증과 협업 정렬에 사용하는 방식",
  },
  {
    label: "Contact",
    href: "/#contact",
    description: "메일과 외부 프로필로 이어지는 연락 경로",
  },
]

const caseStudyLinks: SitemapLink[] = selectedQuestions.map((caseStudy) => ({
  label: caseStudy.project,
  href: caseStudy.href,
  description: `${caseStudy.number} · ${caseStudy.tag}`,
}))

const archiveLinks: SitemapLink[] = workProjectGroups.map((group) => ({
  label: group.category,
  href: "/work",
  description: `${group.projects.length} projects · ${group.projects
    .slice(0, 2)
    .map((project) => project.name)
    .join(" / ")}`,
}))

const sitemapSections: SitemapSection[] = [
  {
    number: "01",
    title: "Primary Routes",
    body: "포트폴리오를 이루는 큰 단위의 페이지입니다.",
    links: mainLinks,
  },
  {
    number: "02",
    title: "Home Sections",
    body: "홈에서 제품 1.1의 관점과 작업 방식을 확인하는 경로입니다.",
    links: homeSectionLinks,
  },
  {
    number: "03",
    title: "Case Studies",
    body: "대표 케이스를 SPC, Guardian, STEP, DeepQ 순서로 정리했습니다.",
    links: caseStudyLinks,
  },
  {
    number: "04",
    title: "Work Archive",
    body: "연도와 도메인별 프로젝트 목록으로 이어지는 경로입니다.",
    links: archiveLinks,
  },
]

export const metadata: Metadata = {
  title: "Sitemap · Kangkeun Park",
  description: "Portfolio sitemap for Kangkeun Park, Product Designer.",
}

function SitemapCard({ section }: { section: SitemapSection }) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.018] p-5 md:p-6">
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-[11px] font-normal uppercase tracking-[0.16em] text-white/35 md:text-xs">
            {section.number}
          </p>
          <h2 className="mt-4 text-2xl font-normal text-white">{section.title}</h2>
        </div>
        <span className="text-sm text-white/30">{section.links.length}</span>
      </div>
      <p className="mt-5 break-keep text-sm font-normal leading-7 text-white/55">
        {section.body}
      </p>
      <div className="mt-7 divide-y divide-white/10 border-t border-white/10">
        {section.links.map((link) => (
          <Link
            key={`${section.number}-${link.label}`}
            href={link.href}
            className="group grid gap-2 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <span className="flex items-center justify-between gap-4 text-[15px] font-normal text-white/85 transition group-hover:text-white">
              <span className="break-keep">{link.label}</span>
              <span className="text-white/35 transition group-hover:translate-x-1 group-hover:text-white">
                →
              </span>
            </span>
            <span className="break-keep text-sm font-normal leading-6 text-white/45">
              {link.description}
            </span>
          </Link>
        ))}
      </div>
    </article>
  )
}

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main>
        <section className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-24 lg:py-32">
          <p className="text-[12px] font-normal uppercase tracking-[0.18em] text-white/40">
            Site Map
          </p>
          <h1 className="mt-5 max-w-4xl break-keep text-[clamp(2.45rem,9.6vw,71px)] font-normal leading-[1.13] text-white">
            제품의 1.1을 따라,
            <br />
            작업의 구조를 한 번에 확인합니다.
          </h1>
          <p className="mt-8 max-w-2xl break-keep text-base font-normal leading-8 text-[#999] md:text-[17px] md:leading-9">
            홈의 질문, 케이스스터디, 프로젝트 아카이브, 소개와 연락 경로를 같은
            기준으로 정리했습니다.
          </p>
        </section>

        <section className="border-y border-white/10 bg-[#0B0B10]">
          <div className="mx-auto grid max-w-content gap-4 px-5 py-20 md:grid-cols-2 md:px-8 md:py-24 lg:py-32">
            {sitemapSections.map((section) => (
              <SitemapCard key={section.number} section={section} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
