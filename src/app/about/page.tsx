import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import { contactEmail, contactHref, githubUrl, linkedinUrl, phoneDisplay } from "@/lib/home-content"

type InfoItem = {
  label: string
  value: string
  href?: string
}

type SectionList = {
  title: string
  items: string[]
}

type TimelineItem = {
  period: string
  title: string
  meta: string
  body: string
}

const timelineItems: TimelineItem[] = [
  {
    period: "2023.01 ~ 현재",
    title: "솔트웨어㈜",
    meta: "프로덕트 디자이너 / 디자인서비스팀 팀장",
    body: "AI 제품, 엔터프라이즈 시스템, 공공·교육 플랫폼의 UX 구조와 화면 경험을 설계합니다.",
  },
  {
    period: "2021.07 ~ 2023.01",
    title: "육군 병장 제대",
    meta: "군 복무",
    body: "조직 안에서의 책임, 운영 흐름, 커뮤니케이션 기준을 경험했습니다.",
  },
  {
    period: "2017.02 ~ 2021.07",
    title: "솔트웨어㈜",
    meta: "UI/UX 디자인",
    body: "웹과 시스템 UI를 중심으로 제품 화면 설계와 운영형 서비스 디자인의 기반을 쌓았습니다.",
  },
]

const credentialSections: SectionList[] = [
  {
    title: "Education",
    items: [
      "한국공학대학교 디자인학부",
      "디지털디자인학과 · 2017.02 ~ 2021.02 졸업",
      "학점 3.9 / 4.5",
    ],
  },
  {
    title: "Certificates",
    items: [
      "Databricks Generative AI Associate · 2026.04",
      "NCS 디지털디자인 L5 · 2020.12 · 한국산업인력공단",
      "컴퓨터그래픽스운용기능사 · 2016.10 · 한국산업인력공단",
      "전자출판기능사 · 2016.07 · 한국산업인력공단",
    ],
  },
  {
    title: "Awards",
    items: ["2016 경기지방대회 · 그래픽디자인 · 은상", "발급 · 한국위원회"],
  },
]

const skillGroups: SectionList[] = [
  {
    title: "Design",
    items: [
      "Figma",
      "FigJam",
      "Design System",
      "Adobe XD",
      "Sketch",
      "Photoshop",
      "Illustrator",
    ],
  },
  {
    title: "Development",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "JavaScript",
      "TSX Prototype",
      "Git",
    ],
  },
  {
    title: "AI Tools",
    items: ["Claude Code", "Codex", "Gemini", "Figma MCP", "Figma Make", "UX Pilot"],
  },
  {
    title: "Process",
    items: [
      "카드소팅",
      "FGI",
      "Interview",
      "IA 재설계",
      "User Flow",
      "Prototype",
      "Frontend Draft",
      "Handoff",
      "Design QA",
    ],
  },
  {
    title: "Data",
    items: ["Databricks", "SQL"],
  },
  {
    title: "Collaboration",
    items: ["Confluence", "Notion", "Slack", "PowerPoint"],
  },
]

const contactInfo: InfoItem[] = [
  { label: "Email", value: contactEmail, href: contactHref },
  { label: "Phone", value: phoneDisplay },
  { label: "GitHub", value: "github.com/Power-xc", href: githubUrl },
  { label: "LinkedIn", value: "LinkedIn Profile", href: linkedinUrl },
]

export const metadata: Metadata = {
  title: "About · Kangkeun Park",
  description:
    "Senior Product Designer focused on AI UX, Enterprise UX, design systems, and frontend draft workflows.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#171717]">
      <Header />
      <main>
        <section className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-24 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16">
            <div className="self-center">
              <p className="text-[12px] font-normal uppercase tracking-[0.18em] text-[#5F5F59]">
                About
              </p>
              <h1 className="mt-5 break-keep text-[clamp(2.45rem,9vw,64px)] font-normal leading-[1.12] text-[#171717]">
                박강근
                <br />
                <span className="text-[#5F5F59]">Senior Product Designer</span>
              </h1>
              <div className="mt-8 max-w-2xl space-y-5 break-keep text-base font-normal leading-8 text-[#4B4B45] md:text-[17px] md:leading-9">
                <p>
                  복잡한 제품과 운영 시스템을 사용자가 이해하고, 판단하고, 행동할 수
                  있는 구조로 다시 설계하는 Product Designer입니다.
                </p>
                <p>
                  AI 제품과 엔터프라이즈 시스템에서 화면의 완성도보다 먼저 문제의
                  구조, 판단 기준, 업무 흐름을 정리합니다. 필요할 때는 프론트엔드
                  Draft까지 직접 만들어 팀이 같은 화면으로 논의할 수 있게 합니다.
                </p>
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={contactHref}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#171717] px-5 text-sm font-medium text-white transition duration-200 hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:w-fit"
                >
                  Contact Me
                </a>
                <Link
                  href="/work"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/20 px-5 text-sm font-medium text-[#171717] transition duration-200 hover:border-black/40 hover:bg-[#EFEDE5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:w-fit"
                >
                  View Work
                </Link>
              </div>
            </div>

            <aside className="self-center">
              <div className="flex items-center gap-5">
                <div className="relative size-[88px] shrink-0 overflow-hidden rounded-full border border-black/15 bg-white/70 md:size-[100px]">
                  <Image
                    src="/profile.png"
                    alt="박강근 프로필 사진"
                    fill
                    sizes="100px"
                    className="object-cover object-[center_30%]"
                    priority
                  />
                </div>
                <div className="min-w-0">
                  <p className="break-keep text-xl font-normal leading-7 text-[#171717]">박강근</p>
                  <p className="mt-1 break-keep text-sm font-normal leading-6 text-[#4B4B45]">
                    Senior Product Designer
                  </p>
                  <p className="mt-0.5 break-keep text-sm font-normal leading-6 text-[#6F6F68]">
                    솔트웨어㈜ · Uiwang-si, Gyeonggi-do
                  </p>
                </div>
              </div>
              <dl className="mt-8 space-y-4">
                <div className="grid grid-cols-[100px_1fr] gap-2 text-sm font-normal leading-6">
                  <dt className="pt-0.5 text-[11px] font-normal uppercase tracking-[0.14em] text-[#6F6F68]">Company</dt>
                  <dd className="break-keep text-[#3F3F39]">솔트웨어㈜</dd>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-2 text-sm font-normal leading-6">
                  <dt className="pt-0.5 text-[11px] font-normal uppercase tracking-[0.14em] text-[#6F6F68]">Team</dt>
                  <dd className="break-keep text-[#3F3F39]">디자인서비스팀 팀장</dd>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-2 text-sm font-normal leading-6">
                  <dt className="pt-0.5 text-[11px] font-normal uppercase tracking-[0.14em] text-[#6F6F68]">Level</dt>
                  <dd className="break-keep text-[#3F3F39]">책임매니저 (과장급)</dd>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-2 text-sm font-normal leading-6">
                  <dt className="pt-0.5 text-[11px] font-normal uppercase tracking-[0.14em] text-[#6F6F68]">Location</dt>
                  <dd className="break-keep text-[#3F3F39]">Uiwang-si, Gyeonggi-do</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-content px-5 pb-20 md:px-8 md:pb-24 lg:pb-32">
          <div className="grid gap-8 border-t border-black/15 pt-10 md:grid-cols-[0.32fr_1fr] md:pt-12">
            <div>
              <p className="text-[12px] font-normal uppercase tracking-[0.18em] text-[#5F5F59]">
                Experience
              </p>
              <h2 className="mt-4 break-keep text-[clamp(1.8rem,7vw,3rem)] font-normal leading-[1.16] text-[#171717] md:text-[48px]">
                제품과 조직의 흐름을 함께 설계합니다.
              </h2>
            </div>
            <div className="divide-y divide-black/15 border-t border-black/15 md:border-t-0">
              {timelineItems.map((item) => (
                <article
                  key={`${item.period}-${item.title}`}
                  className="grid gap-4 py-6 md:grid-cols-[0.28fr_1fr] md:gap-8"
                >
                  <p className="text-sm font-normal leading-6 text-[#6F6F68]">{item.period}</p>
                  <div>
                    <h3 className="text-xl font-normal text-[#171717]">{item.title}</h3>
                    <p className="mt-2 break-keep text-sm font-normal leading-6 text-[#4B4B45]">
                      {item.meta}
                    </p>
                    <p className="mt-4 break-keep text-sm font-normal leading-7 text-[#55554F]">
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-content px-5 pb-20 md:px-8 md:pb-24 lg:pb-32">
          <div className="grid gap-5 md:grid-cols-3">
            {credentialSections.map((section) => (
              <article
                key={section.title}
                className="rounded-lg border border-black/15 bg-white/55 p-5 md:p-6"
              >
                <h2 className="text-[18px] font-normal text-[#171717] md:text-[20px]">
                  {section.title}
                </h2>
                <ul className="mt-7 divide-y divide-black/15">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="break-keep py-4 text-sm font-normal leading-7 text-[#4B4B45]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-content px-5 pb-20 md:px-8 md:pb-24 lg:pb-32">
          <div className="border-t border-black/15 pt-10 md:pt-12">
            <p className="text-[12px] font-normal uppercase tracking-[0.18em] text-[#5F5F59]">
              Capabilities
            </p>
            <h2 className="mt-4 max-w-3xl break-keep text-[clamp(1.8rem,6.4vw,42px)] font-normal leading-[1.18] text-[#171717]">
              프로젝트에서 실제로 사용하는 도구와 방법을 중심으로 정리했습니다.
            </h2>
            <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <article
                  key={group.title}
                  className="rounded-lg border border-black/15 bg-white/55 p-5"
                >
                  <h3 className="text-base font-normal text-[#171717]">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-black/15 bg-[#EDEBE2] px-3 py-1.5 text-[12px] font-normal leading-5 text-[#4B4B45]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-content px-5 pb-20 md:px-8 md:pb-24 lg:pb-32">
          <div className="grid gap-8 border-t border-black/15 pt-10 md:grid-cols-[0.7fr_1fr] md:pt-12">
            <div>
              <p className="text-[12px] font-normal uppercase tracking-[0.18em] text-[#5F5F59]">
                Contact
              </p>
              <h2 className="mt-4 break-keep text-[clamp(1.8rem,7vw,3rem)] font-normal leading-[1.16] text-[#171717] md:text-[48px]">
                제품과 경험에 대해 이야기할 수 있습니다.
              </h2>
            </div>
            <dl className="divide-y divide-black/15 border-t border-black/15 md:border-t-0">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-2 py-5 text-sm font-normal leading-6 md:grid-cols-[0.34fr_1fr]"
                >
                  <dt className="text-[#6F6F68]">{item.label}</dt>
                  <dd className="break-all text-[#3F3F39]">
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className="transition hover:text-[#171717] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
