import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"

type CaseStudyPageProps = {
  params: Promise<{
    slug: string
  }>
}

type Metric = {
  value: string
  label: string
  context: string
}

type InfoItem = {
  label: string
  value: string
}

type QuoteItem = {
  store: string
  meta: string
  quote: string
}

type Persona = {
  name: string
  profile: string
  quote: string
}

type JourneyRow = {
  stage: string
  time: string
  before: string
  beforeState: string
  after: string
  afterState: string
}

type Principle = {
  insight: string
  principle: string
  design: string
}

type RequirementRow = {
  requirement: string
  problem: string
  solution: string
  metric: string
}

type SortingRow = {
  item: string
  recommend: string
  donut: string
  beverage: string
  hotMeal: string
}

type DepthRow = {
  task: string
  asIs: string
  toBe: string
  change: string
}

type ScreenItem = {
  title: string
  description: string
  src: string
  alt: string
  type?: "desktop" | "mobile"
}

type TradeOff = {
  title: string
  items: string[]
}

const dunkinSlug = "spc-dunkin-ai-smart-pos"
const imageBase = "/images/dunkin"

const caseStudies = [
  {
    slug: dunkinSlug,
    number: "01",
    tag: "AI Decision UX",
    question: "AI가 추천해도,\n점주는 왜 바로 주문하지 못했을까?",
    project: "SPC Dunkin AI Smart POS / Mobile",
  },
] as const

function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug) ?? null
}

const structureMetrics: Metric[] = [
  {
    value: "87%",
    label: "선택지 축소",
    context: "Structure Change",
  },
  {
    value: "30+ -> 4",
    label: "메뉴 그룹 재구성",
    context: "Design Outcome",
  },
  {
    value: "6 -> 1",
    label: "핵심 정보 탐색 뎁스",
    context: "Structure Change",
  },
  {
    value: "20 -> 3",
    label: "POS 주문·결제 플로우 단순화",
    context: "Design Outcome",
  },
]

const heroMeta: InfoItem[] = [
  { label: "Role", value: "UX Lead · PO · Frontend 참여" },
  { label: "Period", value: "2025 ~ 2026" },
  { label: "Team", value: "디자인 3 · 개발 1 · 데이터 1" },
]

const researchMethods: InfoItem[] = [
  { label: "4개 점포 점주 인터뷰", value: "2026.03.10~13" },
  { label: "알바 크루 FGI", value: "8명 · 120분" },
  { label: "90장 하이브리드 카드소팅", value: "점주 5명 + 크루 5명" },
]

const interviewQuotes: QuoteItem[] = [
  {
    store: "양천구청센트럴",
    meta: "점주 인터뷰",
    quote:
      "데이터가 완벽하지 않아도 가이드라인만 줘도 충분해요. AI가 제안하는 수치가 장사의 기준점이 되어주길 기대합니다.",
  },
  {
    store: "아현뉴타운",
    meta: "13년차",
    quote:
      "본사가 보여주는 건 가공된 자료라 믿을 수 없다. 팩트가 없으면 AI도 결국 거짓말 도구일 뿐이다.",
  },
  {
    store: "동탄하나로",
    meta: "점주협의체 회장",
    quote:
      "감에 의존하던 걸 AI가 근거를 주고, 그게 맞기 시작하면 점주들은 신뢰하게 됩니다.",
  },
  {
    store: "약수역",
    meta: "13년차",
    quote:
      "웹포스는 정보가 너무 많아서 뭘 봐야 할지 모르겠고, 모바일은 정작 볼 게 없어요.",
  },
]

const patterns: Principle[] = [
  {
    insight: "AI Distrust",
    principle: "검증 가능한 AI 신뢰 구조",
    design: "예측 정확도 공개 · 추천 근거 표시 · 에이전트 로그 추적",
  },
  {
    insight: "Decision Paralysis",
    principle: "행동 중심 정보 설계",
    design: "숫자 나열이 아니라 다음 행동 제시 · 기회손실 표시 · 소진 예상 시간 제공",
  },
  {
    insight: "Control Retention",
    principle: "통제 가능한 실수 설계",
    design: "AI 추천 후 수량 조정 · 최종 확인 · Undo · 이상 주문 경고",
  },
]

const personas: Persona[] = [
  {
    name: "김영수",
    profile: "58세 · 시니어 점주 · 7년차",
    quote: "매장에 안 가고 한눈에 보고 싶다",
  },
  {
    name: "박지은",
    profile: "23세 · 알바 크루 · 2개월차",
    quote: "피크타임에 실수하면 무서워서 못 한다",
  },
  {
    name: "이준호",
    profile: "35세 · SV 슈퍼바이저 · 8개 매장 관리",
    quote: "문제 매장에만 집중하고 싶다",
  },
]

const journeyRows: JourneyRow[] = [
  {
    stage: "출근",
    time: "07:00",
    before: "30개+ 카테고리 탐색, 감으로 발주",
    beforeState: "High Cognitive Load",
    after: "AI 브리핑 즉시 확인, 기회손실 표시",
    afterState: "Decision Ready",
  },
  {
    stage: "피크타임",
    time: "11:00",
    before: "배달앱 4개 각각 품절 처리, 주문 누락",
    beforeState: "Critical Friction",
    after: "30분 전 알림 + 1탭 품절 처리",
    afterState: "Operational Flow",
  },
  {
    stage: "발주 마감",
    time: "14:00",
    before: "수기 계산, 오발주 불안, 책임 불명확",
    beforeState: "Loss Aversion",
    after: "3단계 발주 플로우 + 추천 근거 확인",
    afterState: "Verified Confidence",
  },
  {
    stage: "마감 후",
    time: "21:00",
    before: "손익 직접 계산, SV 방문 설명",
    beforeState: "Financial Opacity",
    after: "순이익 실시간 확인 + 알림톡 자동 발송",
    afterState: "Real-time Clarity",
  },
]

const requirementRows: RequirementRow[] = [
  {
    requirement: "추천 수량 근거 부족",
    problem: "AI를 믿을 기준이 없음",
    solution: "설명 가능한 AI 발주, 예측 정확도, 추천 근거 표시",
    metric: "AI 추천 수용률, 수동 수정률",
  },
  {
    requirement: "당일 생산·폐기 관리",
    problem: "언제 생산하고 언제 멈춰야 하는지 판단이 어려움",
    solution: "시간 중심 신선도 라이브 보드",
    metric: "폐기율, 품절 시간, 생산 지시 반응 시간",
  },
  {
    requirement: "프로모션 수익성 불투명",
    problem: "참여 여부를 손익 기준으로 판단하기 어려움",
    solution: "P&L 시뮬레이터",
    metric: "프로모션 참여율, 예상·실제 손익 차이",
  },
  {
    requirement: "복잡한 메뉴 구조",
    problem: "필요한 기능에 도달하기 전 탐색 비용이 큼",
    solution: "4개 그룹 중심 IA 재설계, 자연어 업무 비서",
    metric: "핵심 태스크 완료 시간, 탐색 뎁스",
  },
  {
    requirement: "레거시 데이터 지연",
    problem: "점주가 화면을 새로고침하며 상태를 확인함",
    solution: "체감 실시간 UX, 상태 변화 알림",
    metric: "재확인 행동 빈도, 알림 후 조치율",
  },
]

const sortingRows: SortingRow[] = [
  { item: "글레이즈드", recommend: "30%", donut: "90%", beverage: "-", hotMeal: "-" },
  { item: "아메리카노", recommend: "50%", donut: "-", beverage: "100%", hotMeal: "-" },
  { item: "먼치킨 10개", recommend: "40%", donut: "80%", beverage: "-", hotMeal: "-" },
  { item: "베이컨 머핀", recommend: "10%", donut: "-", beverage: "-", hotMeal: "95%" },
]

const depthRows: DepthRow[] = [
  { task: "발주서 확인·승인", asIs: "5", toBe: "1", change: "80% 감소" },
  { task: "실시간 매출 확인", asIs: "4", toBe: "0", change: "홈에서 즉시 확인" },
  { task: "신선도 확인·조치", asIs: "6", toBe: "1", change: "83% 감소" },
  { task: "프로모션 참여 결정", asIs: "7", toBe: "2", change: "71% 감소" },
  { task: "POS 주문 처리", asIs: "4", toBe: "1", change: "75% 감소" },
  { task: "재고 부족 대응", asIs: "5", toBe: "0", change: "알림에서 즉시 조치" },
]

const posScreens: ScreenItem[] = [
  {
    title: "종합현황 대시보드",
    description: "매출, 기회손실, 추천 행동을 한 화면에 묶어 아침 판단의 시작점을 만들었다.",
    src: `${imageBase}/pos-dashboard-overview.png`,
    alt: "POS 종합현황 대시보드 디자인",
    type: "desktop",
  },
  {
    title: "생산관리",
    description: "소진 예상과 생산 지시를 같은 흐름에 놓아 즉시 조치 여부를 판단하게 했다.",
    src: `${imageBase}/pos-production-management.png`,
    alt: "POS 생산관리 화면 디자인",
    type: "desktop",
  },
  {
    title: "AI 실시간 현황",
    description: "에이전트별 상태와 추천 근거를 보여줘 AI 판단을 추적 가능하게 했다.",
    src: `${imageBase}/pos-ai-realtime-status.png`,
    alt: "POS AI 실시간 현황 화면 디자인",
    type: "desktop",
  },
]

const orderStepScreens: ScreenItem[] = [
  {
    title: "1. AI 추천 발주",
    description: "추천량을 먼저 제시하되 품목별 수량 조정 가능성을 열어두었다.",
    src: `${imageBase}/pos-order-ai-recommend-step-1.png`,
    alt: "POS AI 추천 발주 1단계",
    type: "desktop",
  },
  {
    title: "2. 수동 발주",
    description: "점주가 직접 조정한 수량과 AI 추천 수량을 같은 맥락에서 비교하게 했다.",
    src: `${imageBase}/pos-order-manual-step-2.png`,
    alt: "POS 수동 발주 2단계",
    type: "desktop",
  },
  {
    title: "3. 최종 검토",
    description: "납품 시간대와 금액을 확인한 뒤 마지막 판단을 내리도록 분리했다.",
    src: `${imageBase}/pos-order-final-review-step-3.png`,
    alt: "POS 최종 검토 3단계",
    type: "desktop",
  },
]

const mobileScreens: ScreenItem[] = [
  {
    title: "매장",
    description: "재고 타임라인과 생산지시를 모바일에서도 이어서 판단할 수 있게 했다.",
    src: `${imageBase}/mobile-store-status-expanded.png`,
    alt: "모바일 매장 재고 타임라인 화면",
    type: "mobile",
  },
  {
    title: "한눈에",
    description: "전체 기능보다 당일 운영 판단에 필요한 카드만 전면에 배치했다.",
    src: `${imageBase}/mobile-main-dashboard.png`,
    alt: "모바일 한눈에 대시보드",
    type: "mobile",
  },
  {
    title: "발주",
    description: "추천 근거, 품목 선택, 수량 조정을 작은 화면에서 순차적으로 처리하게 했다.",
    src: `${imageBase}/mobile-order-items-ai-suggestion.png`,
    alt: "모바일 AI 추천 발주 화면",
    type: "mobile",
  },
  {
    title: "채팅",
    description: "검색 실패나 판단 보류 상황에서 자연어로 발주 흐름에 재진입하게 했다.",
    src: `${imageBase}/mobile-pip-ai-chat-order-approval.png`,
    alt: "모바일 PIP AI 채팅 발주 승인 화면",
    type: "mobile",
  },
]

const tradeOffs: TradeOff[] = [
  {
    title: "숨긴 것",
    items: ["상세 분석 뷰", "고급 필터", "모든 원천 데이터"],
  },
  {
    title: "남긴 것",
    items: ["추천 근거", "정확도", "다음 행동", "예외 경고"],
  },
  {
    title: "이유",
    items: ["피크타임에는 분석보다 즉시 판단과 복구 가능성이 더 중요했기 때문"],
  },
]

const ideationSteps = [
  "데스크 리서치·인터뷰",
  "브레인스토밍 60개 아이디어",
  "어피니티 다이어그램 5테마 클러스터링",
  "MoSCoW + Impact-Effort 필터링",
  "5가지 킬러 기능 도출",
] as const

const workflowSteps = [
  "리서치",
  "인사이트 정리",
  "카드소팅",
  "구조 설계",
  "핵심 디자인",
  "병렬 개발",
  "핸드오프",
] as const

const qualitativeResults = [
  "점주 인터뷰와 FGI를 통해 AI 추천의 핵심 불신 요인을 도출했다.",
  "AI 추천을 단순 수치 제안이 아니라, 근거·조정·확인 가능한 의사결정 흐름으로 재설계했다.",
  "POS와 모바일의 역할을 분리해 매장 내 즉시 처리와 원격 판단 흐름을 연결했다.",
  "본사, SV, 점주, 크루가 같은 운영 데이터를 다른 수준의 의사결정 화면으로 볼 수 있게 구조화했다.",
] as const

const operationMetrics = [
  "AI 추천 수용률",
  "발주 수동 수정률",
  "폐기율 변화",
  "품절 처리 시간",
  "생산 지시 후 실제 판매 전환율",
  "알림 후 조치율",
  "핵심 태스크 완료 시간",
] as const

const reflectionColumns: TradeOff[] = [
  {
    title: "잘한 것",
    items: [
      "리서치로 문제를 재정의한 것",
      "AI 추천을 신뢰·조정·확인 가능한 구조로 바꾼 것",
      "Trade-off를 명확히 한 것",
      "병렬 워크플로우로 제한된 일정을 대응한 것",
    ],
  },
  {
    title: "아쉬운 것",
    items: [
      "데이터 엔지니어링 지원이 초기부터 결합됐다면 추천 로직 검증 범위를 더 넓힐 수 있었음",
      "4개 점포 리서치는 상권과 운영 방식의 편향 가능성이 있음",
      "정식 운영 데이터 기반의 장기 지표 검증은 아직 필요함",
    ],
  },
  {
    title: "스케일에서 깨질 수 있는 지점",
    items: [
      "전국 확장 시 지역별 소비 패턴 차이",
      "점포 규모별 운영 방식 차이",
      "점주 숙련도에 따른 AI 추천 수용률 차이",
      "코호트 단위 A/B 테스트 필요",
    ],
  },
  {
    title: "다음에 했을 것",
    items: [
      "AI 추천 수용률 주 단위 추적",
      "점포 규모별 세그먼트 분석",
      "추천 근거 노출 수준에 따른 신뢰도 비교",
      "챗봇 내 질의 → 분석 → 발주 완결 구조 검증",
      "POS와 모바일 간 작업 이어하기 데이터 추적",
    ],
  },
]

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }))
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
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
        "AI 추천을 점주가 이해하고, 조정하고, 최종 판단할 수 있게 재설계한 AI Decision UX 케이스스터디.",
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

  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main>
        <section className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-24 lg:py-32">
          <Link
            href="/work"
            className="inline-flex text-sm font-normal text-white/45 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            ← Back to Work
          </Link>
          <p className="mt-12 text-[12px] font-normal uppercase tracking-[0.18em] text-white/35">
            {caseStudy.number} / {caseStudy.tag}
          </p>
          <h1 className="mt-5 max-w-4xl whitespace-pre-line break-keep text-[clamp(2.45rem,9.6vw,71px)] font-normal leading-[1.13] text-white">
            {caseStudy.question}
          </h1>
          <p className="mt-8 text-base font-normal leading-8 text-white/55 md:text-[17px]">
            {caseStudy.project}
          </p>
          <div className="mt-16 border-t border-white/10 pt-8">
            <p className="break-keep text-sm font-normal leading-7 text-white/45">
              케이스 스터디 상세 내용은 준비 중입니다.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function DunkinCaseStudy() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main>
        <HeroSection />
        <BusinessContextSection />
        <ProblemSection />
        <ResearchSection />
        <JourneySection />
        <PrincipleSection />
        <RequirementMappingSection />
        <IaRedesignSection />
        <UxDesignSection />
        <KeyScreensSection />
        <TradeOffSection />
        <SpeedWorkflowSection />
        <ResultSection />
        <ReflectionSection />
      </main>
      <Footer />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-24 lg:py-32">
      <Link
        href="/work"
        className="inline-flex text-sm font-normal text-white/45 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        ← Back to Work
      </Link>
      <p className="mt-12 text-[12px] font-normal uppercase tracking-[0.18em] text-white/35">
        01 / AI Decision UX
      </p>
      <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_0.5fr] lg:items-end">
        <div>
          <h1 className="max-w-5xl break-keep text-[clamp(2.45rem,8.6vw,76px)] font-normal leading-[1.08] text-white">
            AI가 추천해도, 점주는 왜 바로 주문하지 못했을까?
          </h1>
          <p className="mt-8 max-w-2xl text-base font-normal leading-8 text-white/55 md:text-[18px]">
            AI-Driven Decision UX — Reimagining Store Manager Experience
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            <TagText>B2B</TagText>
            <TagText>AI Agent UX</TagText>
            <TagText>2025~2026</TagText>
          </div>
        </div>
        <div className="grid gap-3">
          {heroMeta.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-[0.36fr_1fr] gap-4 border-t border-white/10 py-4"
            >
              <span className="text-[12px] uppercase tracking-[0.16em] text-white/35">
                {item.label}
              </span>
              <span className="break-keep text-sm leading-6 text-white/70">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <p className="mb-4 text-[11px] uppercase tracking-[0.18em] text-white/35">
          Structure Change, not business performance
        </p>
        <MetricGrid metrics={structureMetrics} />
      </div>

      <div className="mt-12">
        <ScreenFigure
          src={`${imageBase}/pos-dashboard-overview.png`}
          alt="SPC Dunkin POS 종합현황 디자인 화면"
          caption="디자인 파일 이미지 — 점주가 당일 운영 판단을 시작하는 종합현황 화면"
          wide
        />
      </div>
    </section>
  )
}

function BusinessContextSection() {
  return (
    <CaseSection
      number="01"
      title="왜 이 문제가 중요했는가"
      description="SPC 던킨 매장은 이미 본사 데이터, 주문 데이터, 생산 데이터, 매출 데이터를 갖고 있었다. 문제는 데이터의 존재가 아니라, 점주가 매장 운영 중 그 데이터를 판단 가능한 형태로 받아보지 못한다는 점이었다."
    >
      <TwoColumn>
        <Card title="기존 커뮤니케이션 문제">
          <p className="break-keep text-sm leading-7 text-white/55">
            영업담당자가 매장을 직접 방문해 출력물을 보여주며 설명하는 구조.
            데이터는 있었지만 점주에게 닿는 방식이 달랐다.
          </p>
        </Card>
        <Card title="PIP 네이밍">
          <div className="grid gap-4 md:grid-cols-2">
            <DefinitionCard title="황새" body="SPC 본사의 방대한 데이터" />
            <DefinitionCard
              title="뱁새"
              body="PIP. 그 데이터를 매장 상황에 맞게 작고 민첩하게 전달하는 AI"
            />
          </div>
        </Card>
      </TwoColumn>
      <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <DiagramCard
          title="이해관계자 구조"
          nodes={["본사 HQ", "SV 슈퍼바이저", "점주", "알바 크루"]}
        />
        <DiagramCard
          title="에이전트 아키텍처"
          nodes={["생산관리", "주문관리", "매출분석", "PIP AI 통합", "점주 판단"]}
        />
      </div>
    </CaseSection>
  )
}

function ProblemSection() {
  const rows = [
    ["데이터가 부족하다", "데이터를 보고도 판단할 수 없다"],
    ["AI가 틀렸다", "AI를 믿을 근거가 없다"],
    ["기능이 부족하다", "결정 비용이 너무 높다"],
  ] as const

  return (
    <CaseSection
      number="02"
      title="기존 가설이 왜 틀렸는가"
      description="제한된 리소스와 짧은 일정 안에서 PoC 방향을 다시 정리해야 했다. 핵심 문제는 AI 기능 구현이 아니라, 점주가 AI 추천을 믿고 판단할 수 있는 구조에 있었다."
    >
      <SimpleTable
        headers={["기존 가설", "실제 문제"]}
        rows={rows.map(([before, after]) => [before, after])}
      />
      <ClosingText>
        따라서 설계 목표는 AI 추천을 더 많이 보여주는 것이 아니라, 점주가 추천을
        이해하고, 조정하고, 책임 있게 결정할 수 있는 흐름을 만드는 것이었다.
      </ClosingText>
    </CaseSection>
  )
}

function ResearchSection() {
  return (
    <CaseSection
      number="03"
      title="현장에서 확인한 진짜 문제"
      description="인터뷰, FGI, 카드소팅을 통해 점주가 멈추는 지점을 기능 부족이 아니라 신뢰와 판단 비용의 문제로 정리했다."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {researchMethods.map((method) => (
          <StatCard key={method.label} value={method.label} label={method.value} />
        ))}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {interviewQuotes.map((item) => (
          <QuoteCard key={item.store} item={item} />
        ))}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {patterns.map((pattern) => (
          <Card key={pattern.insight} title={pattern.insight}>
            <p className="text-sm leading-7 text-white/55">{pattern.principle}</p>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <p className="mb-4 text-[11px] uppercase tracking-[0.18em] text-white/35">
          Representative Persona
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {personas.map((persona) => (
            <Card key={persona.name} title={persona.name}>
              <p className="text-sm leading-6 text-white/45">{persona.profile}</p>
              <p className="mt-5 break-keep text-[17px] leading-7 text-white/80">
                "{persona.quote}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </CaseSection>
  )
}

function JourneySection() {
  return (
    <CaseSection
      number="04"
      title="점주의 하루는 어디서 막혔는가"
      description="하루 흐름을 기준으로 보면 문제는 화면 수가 아니라, 판단해야 하는 순간마다 필요한 근거가 흩어져 있다는 점이었다."
    >
      <ResponsiveTable>
        <thead>
          <tr>
            {["단계", "시간", "Before 행동·Pain", "Before 상태", "After 변화", "After 상태"].map(
              (header) => (
                <TableHead key={header}>{header}</TableHead>
              ),
            )}
          </tr>
        </thead>
        <tbody>
          {journeyRows.map((row) => (
            <tr key={row.stage} className="border-t border-white/10">
              <TableCell strong>{row.stage}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.before}</TableCell>
              <TableCell muted>{row.beforeState}</TableCell>
              <TableCell>{row.after}</TableCell>
              <TableCell muted>{row.afterState}</TableCell>
            </tr>
          ))}
        </tbody>
      </ResponsiveTable>
    </CaseSection>
  )
}

function PrincipleSection() {
  return (
    <CaseSection
      number="05"
      title="인사이트를 설계 원칙으로 바꾸다"
      description="AI가 결정을 대신하는 것이 아니라, 점주가 더 나은 결정을 할 수 있도록 판단 기준과 복구 장치를 설계했다."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {patterns.map((pattern) => (
          <div
            key={pattern.insight}
            className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6"
          >
            <p className="text-[12px] uppercase tracking-[0.16em] text-white/35">
              {pattern.insight}
            </p>
            <p className="mt-5 break-keep text-2xl font-normal leading-tight text-white">
              {pattern.principle}
            </p>
            <p className="mt-5 break-keep text-sm leading-7 text-white/55">{pattern.design}</p>
          </div>
        ))}
      </div>
    </CaseSection>
  )
}

function RequirementMappingSection() {
  return (
    <CaseSection
      number="06"
      title="고객사 요구사항을 어떻게 UX 구조로 바꿨나"
      description="요구사항은 기능 목록으로 끝내지 않고, 점주가 판단할 때 막히는 이유와 검증할 운영 지표로 다시 매핑했다."
    >
      <ResponsiveTable>
        <thead>
          <tr>
            {["고객사 요구사항", "확인된 UX 문제", "UX 솔루션", "검증할 지표"].map(
              (header) => (
                <TableHead key={header}>{header}</TableHead>
              ),
            )}
          </tr>
        </thead>
        <tbody>
          {requirementRows.map((row) => (
            <tr key={row.requirement} className="border-t border-white/10">
              <TableCell strong>{row.requirement}</TableCell>
              <TableCell>{row.problem}</TableCell>
              <TableCell>{row.solution}</TableCell>
              <TableCell muted>{row.metric}</TableCell>
            </tr>
          ))}
        </tbody>
      </ResponsiveTable>
    </CaseSection>
  )
}

function IaRedesignSection() {
  return (
    <CaseSection
      number="07"
      title="구조를 먼저 바꿨다"
      description="점주가 기능명을 찾는 구조에서, 지금 해야 할 판단을 따라가는 구조로 바꾸었다."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <BeforeAfterCard
          title="Before"
          items={["30개+ 카테고리", "탐색 뎁스 6단계", "업무 기준보다 시스템 메뉴 기준으로 분리"]}
        />
        <BeforeAfterCard
          title="After"
          items={[
            "4개 그룹",
            "추천 · 도넛/먼치킨 · 커피/음료 · 핫밀",
            "핵심 정보 탐색 뎁스 1단계",
            "점주의 판단 흐름 기준으로 재구성",
          ]}
        />
      </div>
      <div className="mt-8">
        <h3 className="mb-4 text-xl font-normal text-white">카드소팅 일치율 매트릭스</h3>
        <ResponsiveTable>
          <thead>
            <tr>
              {["항목", "추천(AI)", "도넛·먼치킨", "커피·음료", "핫밀"].map((header) => (
                <TableHead key={header}>{header}</TableHead>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortingRows.map((row) => (
              <tr key={row.item} className="border-t border-white/10">
                <TableCell strong>{row.item}</TableCell>
                <TableCell>{row.recommend}</TableCell>
                <TableCell>{row.donut}</TableCell>
                <TableCell>{row.beverage}</TableCell>
                <TableCell>{row.hotMeal}</TableCell>
              </tr>
            ))}
          </tbody>
        </ResponsiveTable>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <DefinitionCard title="80% 이상" body="고정 배정" />
        <DefinitionCard title="40~79%" body="AI 후보군 동적 할당" />
        <DefinitionCard title="40% 미만" body="제거 또는 하위 구조 재검토" />
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Card title="Hick's Law">
          <p className="text-sm leading-7 text-white/55">선택지 압축으로 결정 부담 감소.</p>
        </Card>
        <Card title="Fitts's Law">
          <p className="text-sm leading-7 text-white/55">
            핵심 버튼 터치 영역 확대, 고대비 인터랙션.
          </p>
        </Card>
      </div>
      <div className="mt-8">
        <h3 className="mb-4 text-xl font-normal text-white">뎁스 분석 매트릭스</h3>
        <ResponsiveTable>
          <thead>
            <tr>
              {["핵심 태스크", "AS-IS", "TO-BE", "구조 변화"].map((header) => (
                <TableHead key={header}>{header}</TableHead>
              ))}
            </tr>
          </thead>
          <tbody>
            {depthRows.map((row) => (
              <tr key={row.task} className="border-t border-white/10">
                <TableCell strong>{row.task}</TableCell>
                <TableCell>{row.asIs}</TableCell>
                <TableCell>{row.toBe}</TableCell>
                <TableCell muted>{row.change}</TableCell>
              </tr>
            ))}
          </tbody>
        </ResponsiveTable>
      </div>
    </CaseSection>
  )
}

function UxDesignSection() {
  return (
    <CaseSection
      number="08"
      title="의사결정 구조를 어떻게 바꿨는가"
      description="화면은 AI 결과를 보여주는 곳이 아니라, 점주가 근거를 확인하고 수정한 뒤 결정하는 작업 공간이어야 했다."
    >
      <DesignBlock
        eyebrow="01"
        title="행동 중심 정보 설계"
        body="숫자 나열을 지금 무엇을 해야 하는지로 바꿨다. 기회손실 금액, 소진 예상 시간, 생산 완료 후 피드백을 같은 판단 흐름 안에서 확인하게 했다."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <FormulaCard label="찬스로스" value="재고 0 시간대 평균 판매속도 역산 × 단가" />
          <FormulaCard
            label="소진 예상 시간"
            value="현재 재고 ÷ 시간당 평균 판매량 + 리드타임 1시간"
          />
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <ScreenFigure
            src={`${imageBase}/pos-dashboard-overview.png`}
            alt="POS 종합현황 디자인"
            caption="디자인 파일 이미지 — 당일 운영 판단의 시작점"
          />
          <ScreenFigure
            src={`${imageBase}/pos-production-management.png`}
            alt="POS 생산관리 디자인"
            caption="디자인 파일 이미지 — 생산 지시 여부를 판단하는 흐름"
          />
        </div>
      </DesignBlock>

      <DesignBlock
        eyebrow="02"
        title="검증 가능한 AI 신뢰 구조"
        body="AI 추천을 믿을 근거를 화면 안에 넣었다. 추천량, 예측 정확도, 에이전트 판단 로그를 통해 점주가 AI의 제안을 검토할 수 있게 했다."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <FormulaCard label="AI 승률" value="추천량 vs 실제 판매량 오차율 7일 평균" />
          <FormulaCard label="에이전트 활동 로그" value="추천 근거 역추적 가능" />
        </div>
        <div className="mt-6">
          <ScreenFigure
            src={`${imageBase}/pos-ai-realtime-status.png`}
            alt="POS AI 실시간 현황 디자인"
            caption="디자인 파일 이미지 — AI 판단 근거와 에이전트 상태를 확인하는 화면"
            wide
          />
        </div>
      </DesignBlock>

      <DesignBlock
        eyebrow="03"
        title="통제 가능한 발주 설계"
        body="AI 추천 → 수량 조정 → 최종 확인의 3단계로 분리했다. AI가 자동으로 결정하는 구조가 아니라, 점주가 마지막 판단권을 유지하는 구조로 설계했다."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <DefinitionCard title="130% 초과" body="재확인 팝업" />
          <DefinitionCard title="4주 평균 180% 초과" body="이상 주문으로 판단" />
          <DefinitionCard title="5초" body="Undo 제공" />
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {orderStepScreens.map((screen) => (
            <ScreenFigure
              key={screen.title}
              src={screen.src}
              alt={screen.alt}
              caption={`디자인 파일 이미지 — ${screen.description}`}
            />
          ))}
        </div>
      </DesignBlock>

      <div className="grid gap-6 lg:grid-cols-2">
        <DesignBlock
          eyebrow="04"
          title="Undo, Not Confirm"
          body="확인 팝업으로 모든 흐름을 끊는 대신, 일부 빠른 작업에는 5초 Undo를 제공했다. 피크타임 처리 속도와 오조작 복구 가능성을 함께 고려했다."
          compact
        />
        <DesignBlock
          eyebrow="05"
          title="본사 관점: HQ Console"
          body="점주 사용 데이터가 쌓이면 본사는 33개 점포의 운영 패턴을 집계할 수 있다. 발주 정확도 개선, 폐기율 추적, 공급망 최적화의 기반 데이터로 연결되도록 설계했다."
          compact
        />
      </div>

      <DesignBlock
        eyebrow="06"
        title="모바일 UX 원칙"
        body="모바일은 전체 기능을 압축한 화면이 아니라, 매장 밖에서도 판단을 이어갈 수 있는 보조 의사결정 흐름으로 정의했다."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <DefinitionCard title="Context Continuity" body="POS와 동일 데이터를 모바일에서 이어서 확인" />
          <DefinitionCard title="Remote Decision" body="매장 부재 중에도 생산지시·발주 가능" />
          <DefinitionCard
            title="Information Compression"
            body="모든 기능이 아니라 주요 판단 흐름만 제공"
          />
        </div>
        <div className="mt-6">
          <DiagramCard
            title="크로스 플랫폼 데이터 흐름"
            nodes={[
              "모바일 AI 발주 승인",
              "POS 재고 자동 반영",
              "POS 실시간 판매",
              "모바일 신선도 타이머 반영",
              "POS 프로모션 실적",
              "모바일 P&L 시뮬레이터 반영",
            ]}
          />
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-[0.7fr_1fr]">
          <ScreenFigure
            src={`${imageBase}/mobile-order-final-confirmation.png`}
            alt="모바일 발주 최종 확인 디자인"
            caption="디자인 파일 이미지 — 새벽 납품과 점심 납품 금액을 분리해 자금 계획에 활용하는 화면"
            mobile
          />
          <div className="grid content-start gap-4">
            <DefinitionCard
              title="완료 주문 30초 후 자동 삭제"
              body="피크타임 화면 혼란 방지"
            />
            <DefinitionCard
              title="영업 종료 시각 근접"
              body="생산 알림 자동 차단"
            />
            <DefinitionCard title="검색 실패" body="PIP AI 연결로 탈출구 제공" />
          </div>
        </div>
      </DesignBlock>
    </CaseSection>
  )
}

function KeyScreensSection() {
  return (
    <CaseSection
      number="09"
      title="주요 화면"
      description="각 화면은 정보를 보여주는 단위가 아니라, 점주가 다음 결정을 내리는 단위로 정리했다."
    >
      <div className="space-y-10">
        <ScreenFigure
          src={`${imageBase}/pos-dashboard-overview.png`}
          alt="POS 종합현황 대시보드"
          caption="디자인 파일 이미지 — 당일 매출, 추천 행동, 손실 가능성을 같은 판단 화면으로 묶었다."
          wide
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {posScreens.slice(1).map((screen) => (
            <ScreenFigure
              key={screen.title}
              src={screen.src}
              alt={screen.alt}
              caption={`디자인 파일 이미지 — ${screen.description}`}
            />
          ))}
          <ScreenFigure
            src={`${imageBase}/pos-order-management-overview.png`}
            alt="POS 발주관리 화면"
            caption="디자인 파일 이미지 — 추천과 수동 조정을 분리해 최종 판단 전 검토하게 했다."
          />
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {orderStepScreens.map((screen) => (
            <ScreenFigure
              key={screen.title}
              src={screen.src}
              alt={screen.alt}
              caption={`디자인 파일 이미지 — ${screen.description}`}
            />
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {mobileScreens.map((screen) => (
            <ScreenFigure
              key={screen.title}
              src={screen.src}
              alt={screen.alt}
              caption={`디자인 파일 이미지 — ${screen.description}`}
              mobile
            />
          ))}
        </div>
      </div>
    </CaseSection>
  )
}

function TradeOffSection() {
  return (
    <CaseSection
      number="10"
      title="무엇을 보여주지 않기로 했는가"
      description="모든 데이터를 보여주지 않기로 결정했다. 바쁜 아침에 점주가 바로 판단해야 하는 정보만 전면에 배치했다."
    >
      <div className="rounded-[32px] border border-white/10 bg-white/[0.035] p-6 md:p-8">
        <p className="max-w-2xl break-keep text-[clamp(1.7rem,4vw,3rem)] font-normal leading-tight text-white">
          더 많은 정보보다, 더 빠른 판단이 우선이었다.
        </p>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {tradeOffs.map((item) => (
          <ListCard key={item.title} title={item.title} items={item.items} />
        ))}
      </div>
    </CaseSection>
  )
}

function SpeedWorkflowSection() {
  return (
    <CaseSection
      number="11"
      title="어떻게 빠르게 만들었나"
      description="AI를 결과물 대체가 아니라 리서치 요약, 구조 탐색, 화면 Draft, 프론트엔드 초안 생성에 사용해 병렬 협업 속도를 높였다."
    >
      <TwoColumn>
        <NumberedList title="아이디에이션 프로세스" items={ideationSteps} />
        <NumberedList title="실행 워크플로우" items={workflowSteps} />
      </TwoColumn>
      <ClosingText>
        AI는 반복과 초안을 맡고, 사람은 문제 정의와 품질 판단을 맡는다.
      </ClosingText>
      <div className="mt-8">
        <ScreenFigure
          src={`${imageBase}/actual-implementation-pos-overview.png`}
          alt="실제 구현된 POS 화면"
          caption="실제 구현 화면 — 디자인에서 구현까지 연결한 PoC 결과물"
          wide
        />
      </div>
    </CaseSection>
  )
}

function ResultSection() {
  return (
    <CaseSection
      number="12"
      title="무엇이 달라졌는가"
      description="Result는 비즈니스 성과가 아니라, 검증 가능한 UX 구조 변화와 정식 운영 시 추적할 지표로 정리했다."
    >
      <MetricGrid metrics={structureMetrics} />
      <TwoColumn className="mt-8">
        <ListCard title="정성 결과" items={[...qualitativeResults]} />
        <ListCard
          title="운영 지표 계획"
          intro="정식 서비스 투입 시 아래 지표를 주 단위로 추적한다."
          items={[...operationMetrics]}
        />
      </TwoColumn>
    </CaseSection>
  )
}

function ReflectionSection() {
  return (
    <CaseSection
      number="13"
      title="다음에는 무엇을 검증할 것인가"
      description="PoC에서 확인한 구조는 정식 운영 데이터로 다시 검증되어야 한다."
    >
      <div className="grid gap-4 lg:grid-cols-4">
        {reflectionColumns.map((column) => (
          <ListCard key={column.title} title={column.title} items={column.items} />
        ))}
      </div>
    </CaseSection>
  )
}

function CaseSection({
  number,
  title,
  description,
  children,
}: {
  number: string
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <section className="mx-auto max-w-content border-t border-white/10 px-5 py-20 md:px-8 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.22fr_1fr]">
        <p className="text-[12px] font-normal uppercase tracking-[0.18em] text-white/35">
          {number}
        </p>
        <div>
          <h2 className="max-w-4xl break-keep text-[clamp(2rem,6vw,52px)] font-normal leading-[1.14] text-white">
            {title}
          </h2>
          <p className="mt-6 max-w-3xl break-keep text-base font-normal leading-8 text-white/55 md:text-[18px]">
            {description}
          </p>
          <div className="mt-10">{children}</div>
        </div>
      </div>
    </section>
  )
}

function MetricGrid({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-[26px] border border-white/10 bg-white/[0.035] p-6"
        >
          <p className="text-[11px] uppercase tracking-[0.16em] text-white/35">
            {metric.context}
          </p>
          <p className="mt-4 text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-none text-white">
            {metric.value}
          </p>
          <p className="mt-5 break-keep text-sm leading-6 text-white/55">{metric.label}</p>
        </div>
      ))}
    </div>
  )
}

function TagText({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-[11px] leading-5 text-white/50">
      {children}
    </span>
  )
}

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-[26px] border border-white/10 bg-white/[0.035] p-6">
      <h3 className="break-keep text-xl font-normal leading-7 text-white">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  )
}

function DefinitionCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-black/20 p-5">
      <p className="text-[15px] font-normal leading-6 text-white">{title}</p>
      <p className="mt-3 break-keep text-sm leading-6 text-white/52">{body}</p>
    </div>
  )
}

function DiagramCard({ title, nodes }: { title: string; nodes: string[] }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6">
      <h3 className="text-xl font-normal text-white">{title}</h3>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        {nodes.map((node, index) => (
          <div key={`${title}-${node}`} className="flex items-center gap-3">
            <span className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-white/70">
              {node}
            </span>
            {index < nodes.length - 1 ? <span className="text-white/25">→</span> : null}
          </div>
        ))}
      </div>
    </div>
  )
}

function TwoColumn({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`grid gap-5 lg:grid-cols-2 ${className}`}>{children}</div>
}

function SimpleTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <ResponsiveTable>
      <thead>
        <tr>
          {headers.map((header) => (
            <TableHead key={header}>{header}</TableHead>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.join("-")} className="border-t border-white/10">
            {row.map((cell, index) => (
              <TableCell key={cell} strong={index === 0}>
                {cell}
              </TableCell>
            ))}
          </tr>
        ))}
      </tbody>
    </ResponsiveTable>
  )
}

function ResponsiveTable({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-[26px] border border-white/10 bg-white/[0.035]">
      <table className="min-w-[760px] w-full border-collapse text-left">{children}</table>
    </div>
  )
}

function TableHead({ children }: { children: ReactNode }) {
  return (
    <th className="px-5 py-4 text-[11px] font-normal uppercase tracking-[0.14em] text-white/35">
      {children}
    </th>
  )
}

function TableCell({
  children,
  strong = false,
  muted = false,
}: {
  children: ReactNode
  strong?: boolean
  muted?: boolean
}) {
  return (
    <td
      className={`px-5 py-5 align-top text-sm leading-6 ${
        strong ? "text-white" : muted ? "text-white/42" : "text-white/60"
      }`}
    >
      {children}
    </td>
  )
}

function ClosingText({ children }: { children: ReactNode }) {
  return (
    <p className="mt-8 max-w-3xl break-keep border-l border-white/18 pl-5 text-[18px] font-normal leading-8 text-white/72">
      {children}
    </p>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[26px] border border-white/10 bg-white/[0.035] p-6">
      <p className="break-keep text-xl font-normal leading-7 text-white">{value}</p>
      <p className="mt-4 text-sm leading-6 text-white/45">{label}</p>
    </div>
  )
}

function QuoteCard({ item }: { item: QuoteItem }) {
  return (
    <figure className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6">
      <figcaption className="text-sm leading-6 text-white/45">
        {item.store} — {item.meta}
      </figcaption>
      <blockquote className="mt-5">
        <p className="break-keep text-[18px] font-normal italic leading-8 text-white/78">
          "{item.quote}"
        </p>
      </blockquote>
    </figure>
  )
}

function BeforeAfterCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6">
      <h3 className="text-2xl font-normal text-white">{title}</h3>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item} className="break-keep text-sm leading-7 text-white/58">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function DesignBlock({
  eyebrow,
  title,
  body,
  children,
  compact = false,
}: {
  eyebrow: string
  title: string
  body: string
  children?: ReactNode
  compact?: boolean
}) {
  return (
    <section
      className={`rounded-[32px] border border-white/10 bg-white/[0.035] p-6 md:p-8 ${
        compact ? "" : "mb-8"
      }`}
    >
      <p className="text-[11px] uppercase tracking-[0.18em] text-white/35">{eyebrow}</p>
      <h3 className="mt-4 break-keep text-[clamp(1.65rem,4vw,2.6rem)] font-normal leading-tight text-white">
        {title}
      </h3>
      <p className="mt-5 max-w-3xl break-keep text-sm leading-7 text-white/55 md:text-base md:leading-8">
        {body}
      </p>
      {children ? <div className="mt-6">{children}</div> : null}
    </section>
  )
}

function FormulaCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-black/25 p-5">
      <p className="text-[12px] uppercase tracking-[0.16em] text-white/35">{label}</p>
      <p className="mt-4 break-keep text-sm leading-7 text-white/66">{value}</p>
    </div>
  )
}

function ScreenFigure({
  src,
  alt,
  caption,
  wide = false,
  mobile = false,
}: {
  src?: string
  alt: string
  caption: string
  wide?: boolean
  mobile?: boolean
}) {
  return (
    <figure
      className={`overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] ${
        wide ? "shadow-card" : ""
      }`}
    >
      <div
        className={`flex bg-black/30 p-3 ${
          mobile ? "justify-center" : "items-center justify-center"
        }`}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className={`h-auto w-full rounded-[18px] object-contain ${
              mobile ? "max-h-[720px] max-w-[260px]" : "max-h-[760px]"
            }`}
          />
        ) : (
          <div className="flex min-h-[280px] w-full items-center justify-center rounded-[18px] border border-white/10 bg-white/[0.025] text-sm text-white/35">
            Image placeholder
          </div>
        )}
      </div>
      <figcaption className="border-t border-white/10 px-5 py-4 text-xs leading-6 text-white/45">
        {caption}
      </figcaption>
    </figure>
  )
}

function ListCard({
  title,
  items,
  intro,
}: {
  title: string
  items: string[]
  intro?: string
}) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6">
      <h3 className="break-keep text-xl font-normal text-white">{title}</h3>
      {intro ? <p className="mt-4 text-sm leading-7 text-white/45">{intro}</p> : null}
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="break-keep text-sm leading-7 text-white/58">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function NumberedList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6">
      <h3 className="text-xl font-normal text-white">{title}</h3>
      <ol className="mt-6 space-y-4">
        {items.map((item, index) => (
          <li key={item} className="grid grid-cols-[42px_1fr] gap-4 text-sm leading-7">
            <span className="text-white/35">{String(index + 1).padStart(2, "0")}</span>
            <span className="break-keep text-white/62">{item}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
