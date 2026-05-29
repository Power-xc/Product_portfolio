import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CaseStudyShell } from "./_components/shared"
import { DunkinCaseStudy } from "./_case-studies/dunkin"
import { DeepQCaseStudy } from "./_case-studies/deepq"
import { GuardianCaseStudy } from "./_case-studies/guardian"
import { StepCaseStudy } from "./_case-studies/step"

type CaseStudyPageProps = {
  params: Promise<{
    slug: string
  }>
}

const dunkinSlug = "spc-dunkin-ai-smart-pos"
const deepqSlug = "sapie-deepq"
const guardianSlug = "sapie-guardian"
const stepSlug = "step-lifelong-education-platform"
const caseStudies = [
  {
    slug: dunkinSlug,
    number: "01",
    tag: "AI Decision UX",
    question: "AI가 추천해도,\n점주는 왜 바로 주문하지 못했을까?",
    project: "SPC Dunkin AI Decision UX / Product Structure",
  },
  {
    slug: deepqSlug,
    number: "03",
    tag: "Explainable AI Data Analysis UX",
    question: "AI가 답을 말해도,\n사용자는 무엇을 보고 신뢰할 수 있을까?",
    project: "SAPIE DeepQ / Enterprise Intelligence Platform",
  },
  {
    slug: guardianSlug,
    number: "04",
    tag: "Enterprise AI Security Platform",
    question: "AI 도구를 허용할수록,\n조직은 무엇을 확인하고 통제해야 할까?",
    project: "SAPIE Guardian / Enterprise Gen AI Security Platform",
  },
  {
    slug: stepSlug,
    number: "02",
    tag: "Lifelong Education Platform UX",
    question: "콘텐츠가 넘쳐도,\n학습자는 왜 다음 행동을 찾지 못했을까?",
    project: "STEP Lifelong Education Platform",
  },
] as const

function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug) ?? null
}

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }))
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = getCaseStudyBySlug(slug)

  if (!caseStudy) {
    return {
      title: "Work · Kangkeun Park",
    }
  }

  if (slug === dunkinSlug) {
    return {
      title: "SPC Dunkin AI Decision UX · Kangkeun Park",
      description:
        "AI 추천을 점주가 검토하고 조정한 뒤 최종 승인할 수 있게 재설계한 Product UX 케이스스터디.",
    }
  }

  if (slug === deepqSlug) {
    return {
      title: "SAPIE DeepQ Explainable AI Data Analysis UX · Kangkeun Park",
      description:
        "AI 답변을 질문, SQL, 결과, 설명, 운영 이력까지 검토 가능한 분석 기록으로 연결한 Enterprise Intelligence Platform 케이스스터디.",
    }
  }

  if (slug === guardianSlug) {
    return {
      title: "SAPIE Guardian Enterprise Gen AI Security Platform · Kangkeun Park",
      description:
        "삼성 도입 검토를 전제로 AI 사용 현황, 정책, 위반 처리, 감사 기록, 권한 관리를 하나의 운영 콘솔로 설계한 케이스스터디.",
    }
  }

  if (slug === stepSlug) {
    return {
      title: "STEP Lifelong Education Platform · Kangkeun Park",
      description:
        "다양한 학습 콘텐츠와 운영 기능이 분산된 대규모 평생교육 포털을 학습자의 탐색·비교·신청·지속학습 과정으로 재구성한 UX 케이스스터디.",
    }
  }

  return {
    title: `${caseStudy.project} · Kangkeun Park`,
    description: caseStudy.question.replace(/\n/g, " "),
  }
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const caseStudy = getCaseStudyBySlug(slug)

  if (!caseStudy) {
    notFound()
  }

  if (slug === dunkinSlug) {
    return <DunkinCaseStudy />
  }

  if (slug === deepqSlug) {
    return <DeepQCaseStudy />
  }

  if (slug === guardianSlug) {
    return <GuardianCaseStudy />
  }

  if (slug === stepSlug) {
    return <StepCaseStudy />
  }

  return (
    <CaseStudyShell>
      <section className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-24 lg:py-32">
        <Link
          href="/work"
          className="inline-flex text-sm font-normal text-fg-faint transition hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          ← Back to Work
        </Link>
        <p className="mt-12 text-[12px] font-normal uppercase tracking-[0.18em] text-fg-faint">
          {caseStudy.number} / {caseStudy.tag}
        </p>
        <h1 className="mt-5 max-w-4xl whitespace-pre-line break-keep text-[clamp(2.45rem,9.6vw,71px)] font-normal leading-[1.13] text-fg">
          {caseStudy.question}
        </h1>
        <p className="mt-8 text-base font-normal leading-8 text-fg-muted md:text-[17px]">
          {caseStudy.project}
        </p>
        <div className="mt-16 border-t border-line pt-8">
          <p className="break-keep text-sm font-normal leading-7 text-fg-faint">
            케이스 스터디 상세 내용은 준비 중입니다.
          </p>
        </div>
      </section>
    </CaseStudyShell>
  )
}
