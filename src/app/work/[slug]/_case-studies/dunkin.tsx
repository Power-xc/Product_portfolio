import Link from "next/link"
import { CollaborationMoment } from "@/components/case-study/CollaborationMoment"
import { DefinitionCard } from "@/components/case-study/DefinitionCard"
import { FormulaCard } from "@/components/case-study/FormulaCard"
import { OpenQuestion } from "@/components/case-study/OpenQuestion"
import { PriorityRationale } from "@/components/case-study/PriorityRationale"
import { ProblemStatement } from "@/components/case-study/ProblemStatement"
import type {
  DepthRow,
  Hypothesis,
  InfoItem,
  JourneyRow,
  LearningNote,
  Metric,
  Persona,
  Principle,
  QuoteItem,
  RequirementRow,
  ResearchPattern,
  ScreenItem,
  SortingRow,
  TradeOff,
} from "../_lib/types"
import {
  CaseStudyShell,
  BeforeAfterCard,
  Card,
  CaseSection,
  ClosingText,
  DesignBlock,
  DiagramCard,
  HypothesisSection,
  ListCard,
  MetricGrid,
  NumberedList,
  QuoteCard,
  ResponsiveTable,
  ScreenFigure,
  SimpleTable,
  StatCard,
  TableCell,
  TableHead,
  TagText,
  TwoColumn,
} from "../_components/shared"

const imageBase = "/images/dunkin"
const captureBase = `${imageBase}/captures`
const structureMetrics: Metric[] = [
  {
    value: "87%",
    label: "선택지 축소",
    context: "Structure Change",
  },
  {
    value: "30+ → 4",
    label: "메뉴 그룹 재구성",
    context: "Design Outcome",
  },
  {
    value: "6 → 1",
    label: "핵심 정보 탐색 뎁스",
    context: "Structure Change",
  },
  {
    value: "20 → 3",
    label: "POS 주문·결제 플로우 단순화",
    context: "Design Outcome",
  },
]

const heroMeta: InfoItem[] = [
  { label: "Role", value: "UX Lead · PO · Frontend 참여" },
  { label: "Period", value: "2026" },
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
      "데이터가 100% 완벽하지 않더라도, 우리가 참고할 수 있는 가이드라인만 제대로 주어진다면 장사하는 입장에선 충분히 유의미하죠.",
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
      "감에 의존하던 내용들을 AI가 근거를 제공해 주고, 그게 맞기 시작하면 점주들은 신뢰하게 되거든요.",
  },
  {
    store: "약수역",
    meta: "13년차",
    quote:
      "웹포스는 정보가 너무 많아서 뭘 봐야 할지 모르겠고, 모바일은 정작 볼 게 없어요. 숫자가 나열된 데이터보다 매장의 흐름을 한눈에 보고 싶습니다.",
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
    design: "숫자 나열을 다음 행동 제시 · 기회손실 표시 · 소진 예상 시간 제공으로 전환",
  },
  {
    insight: "Control Retention",
    principle: "통제 가능한 실수 설계",
    design: "AI 추천 후 수량 조정 · 최종 확인 · Undo · 이상 주문 경고",
  },
]

const researchPatterns: ResearchPattern[] = [
  {
    title: "AI Distrust",
    body: "AI를 믿을 근거가 없다",
  },
  {
    title: "Decision Paralysis",
    body: "숫자는 있지만 다음 조치가 보이지 않는다",
  },
  {
    title: "Control Retention",
    body: "결정은 내가 해야 한다",
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
    hypothesis: "H1",
  },
  {
    requirement: "당일 생산·폐기 관리",
    problem: "언제 생산하고 언제 멈춰야 하는지 정하기 어려움",
    solution: "시간 중심 신선도 라이브 보드",
    metric: "폐기율, 품절 시간, 생산 지시 반응 시간",
    hypothesis: "H2",
  },
  {
    requirement: "프로모션 수익성 불투명",
    problem: "참여 여부를 손익 기준으로 검토하기 어려움",
    solution: "P&L 시뮬레이터",
    metric: "프로모션 참여율, 예상·실제 손익 차이",
    hypothesis: "H2",
  },
  {
    requirement: "복잡한 메뉴 구조",
    problem: "필요한 기능에 도달하기 전 탐색 비용이 큼",
    solution: "4개 그룹 중심 IA 재설계, 자연어 업무 비서",
    metric: "핵심 태스크 완료 시간, 탐색 뎁스",
    hypothesis: "H2",
  },
  {
    requirement: "레거시 데이터 지연",
    problem: "점주가 화면을 새로고침하며 상태를 확인함",
    solution: "체감 실시간 UX, 상태 변화 알림",
    metric: "재확인 행동 빈도, 알림 후 조치율",
    hypothesis: "H1",
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
    description: "최종 발주 전 수량과 납품 조건을 재확인하는 팝업으로 승인 책임을 분리했다.",
    src: `${imageBase}/pos-order-final-review-step-3.png`,
    alt: "POS 최종 검토 3단계",
    type: "desktop",
  },
]

const mobileScreens: ScreenItem[] = [
  {
    title: "매장",
    description: "재고 타임라인과 생산지시를 모바일에서도 이어서 확인할 수 있게 했다.",
    src: `${imageBase}/mobile-store-status-expanded.png`,
    alt: "모바일 매장 재고 타임라인 화면",
    type: "mobile",
  },
  {
    title: "한눈에",
    description: "전체 기능보다 당일 운영 확인에 필요한 카드만 전면에 배치했다.",
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
    description: "검색 실패나 승인 보류 상황에서 자연어로 발주 절차에 재진입하게 했다.",
    src: `${imageBase}/mobile-pip-ai-chat-order-approval.png`,
    alt: "모바일 PIP AI 채팅 발주 승인 화면",
    type: "mobile",
  },
]

const workflowActualScreens: ScreenItem[] = [
  {
    title: "POS 종합현황",
    description: "디자인에서 구현까지 책임진 결과물",
    src: `${captureBase}/actual-pos-dashboard.png`,
    alt: "실제 구현된 POS 종합현황 화면",
    type: "desktop",
  },
  {
    title: "POS 발주관리",
    description: "AI 추천 이후 점주가 발주 목록을 검토하는 화면",
    src: `${captureBase}/actual-pos-order-1.png`,
    alt: "실제 구현된 POS 발주관리 화면",
    type: "desktop",
  },
]

const actualPosScreens: ScreenItem[] = [
  {
    title: "POS 종합현황",
    description: "당일 운영 확인을 시작하는 실제 POS 종합현황 화면",
    src: `${captureBase}/actual-pos-dashboard.png`,
    alt: "실제 구현된 POS 종합현황 화면",
    type: "desktop",
  },
  {
    title: "POS 생산관리",
    description: "소진 예상과 생산 지시를 확인하는 실제 생산관리 화면",
    src: `${captureBase}/actual-pos-production.png`,
    alt: "실제 구현된 POS 생산관리 화면",
    type: "desktop",
  },
  {
    title: "POS 발주관리",
    description: "AI 추천 이후 발주 수량을 검토하는 실제 발주 화면",
    src: `${captureBase}/actual-pos-order-1.png`,
    alt: "실제 구현된 POS 발주관리 화면",
    type: "desktop",
  },
  {
    title: "POS AI 실시간 현황",
    description: "에이전트 상태와 추천 근거를 추적하는 실제 화면",
    src: `${captureBase}/actual-pos-ai-realtime.png`,
    alt: "실제 구현된 POS AI 실시간 현황 화면",
    type: "desktop",
  },
  {
    title: "POS 프로모션",
    description: "프로모션 손익 기준을 확인하는 실제 화면",
    src: `${captureBase}/actual-pos-promotion.png`,
    alt: "실제 구현된 POS 프로모션 화면",
    type: "desktop",
  },
  {
    title: "POS AI 검증",
    description: "AI 추천 검증 기준을 확인하는 실제 화면",
    src: `${captureBase}/actual-pos-ai-validation.png`,
    alt: "실제 구현된 POS AI 검증 화면",
    type: "desktop",
  },
  {
    title: "POS 운영 지표",
    description: "점포 운영 상태를 지표 기준으로 확인하는 실제 화면",
    src: `${captureBase}/actual-pos-performance.png`,
    alt: "실제 구현된 POS 운영 지표 화면",
    type: "desktop",
  },
  {
    title: "POS 벤치마킹",
    description: "비교 기준을 통해 매장 상태를 확인하는 실제 화면",
    src: `${captureBase}/actual-pos-benchmarking.png`,
    alt: "실제 구현된 POS 벤치마킹 화면",
    type: "desktop",
  },
]

const actualMobileScreens: ScreenItem[] = [
  {
    title: "모바일 한눈에",
    description: "원격에서 당일 운영 상태를 확인하는 실제 모바일 화면",
    src: `${captureBase}/actual-mobile-main.png`,
    alt: "실제 구현된 모바일 한눈에 화면",
    type: "mobile",
  },
  {
    title: "모바일 매장",
    description: "재고 타임라인과 생산지시를 확인하는 실제 모바일 화면",
    src: `${captureBase}/actual-mobile-store.png`,
    alt: "실제 구현된 모바일 매장 화면",
    type: "mobile",
  },
  {
    title: "모바일 발주",
    description: "AI 추천 이후 수량을 조정하는 실제 모바일 발주 화면",
    src: `${captureBase}/actual-mobile-order.png`,
    alt: "실제 구현된 모바일 발주 화면",
    type: "mobile",
  },
  {
    title: "모바일 채팅",
    description: "PIP AI로 업무 절차에 재진입하는 실제 모바일 화면",
    src: `${captureBase}/actual-mobile-chat.png`,
    alt: "실제 구현된 모바일 PIP AI 채팅 화면",
    type: "mobile",
  },
]

const crossPlatformFlows = [
  {
    from: "모바일 AI 발주 승인",
    to: "POS 재고 자동 반영",
  },
  {
    from: "POS 실시간 판매",
    to: "모바일 신선도 타이머 반영",
  },
  {
    from: "POS 프로모션 실적",
    to: "모바일 P&L 시뮬레이터 반영",
  },
] as const

const tradeOffs: TradeOff[] = [
  {
    title: "숨긴 것",
    items: ["상세 분석 뷰", "고급 필터", "모든 원천 데이터"],
  },
  {
    title: "남긴 것",
    items: ["추천 근거", "검증 기준", "다음 행동", "예외 경고"],
  },
  {
    title: "이유",
    items: ["피크타임에는 상세 분석보다 즉시 조치와 복구 가능성이 우선이었기 때문"],
  },
]

const ideationSteps = [
  "데스크 리서치·인터뷰",
  "업무 단계 기준 아이디어 60개 정리",
  "어피니티 다이어그램 5테마 클러스터링",
  "MoSCoW + Impact-Effort 필터링",
  "핵심 후보 기능 5개 도출",
] as const

const workflowSteps = [
  "리서치",
  "인사이트 정리",
  "카드소팅",
  "구조 설계",
  "핵심 디자인",
  "반응형 구현",
  "핸드오프",
] as const

const qualitativeResults = [
  "점주가 AI 추천을 거절하거나 수정해야 하는 이유를 화면 안에서 검토할 수 있게 했다.",
  "추천 수치, 근거, 조정, 최종 확인을 하나의 발주 검토 단계로 연결했다.",
  "POS는 매장 내 즉시 조치, 모바일은 매장 밖 운영 확인으로 역할을 분리했다.",
  "본사, SV, 점주, 크루가 같은 운영 데이터를 각자의 책임 범위에 맞게 보도록 구조화했다.",
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
    title: "구조화한 지점",
    items: [
      "기능 구현 요청을 점주의 발주·생산 운영 문제로 재정의",
      "AI 추천을 근거 확인, 수량 조정, 최종 승인 단계로 분리",
      "피크타임 처리 속도와 상세 분석 범위 사이의 Trade-off를 정리",
      "제한된 일정 안에서 디자인과 반응형 구현 범위를 함께 조율한 것",
    ],
  },
  {
    title: "추가 검증이 필요한 지점",
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
      "코호트 단위 운영 검증 필요",
    ],
  },
  {
    title: "다음 검증",
    items: [
      "AI 추천 수용률 주 단위 추적",
      "점포 규모별 세그먼트 분석",
      "추천 근거 노출 수준에 따른 신뢰도 비교",
      "챗봇 내 질의 → 분석 → 발주 완결 구조 검증",
      "POS와 모바일 간 작업 이어하기 데이터 추적",
    ],
  },
]

const dunkinHypotheses: Hypothesis[] = [
  {
    id: "H1",
    ifStatement: "추천 근거와 오차 기준을 화면에 함께 표시하면",
    thenStatement: "점주가 AI 제안을 수용할 기준이 생기고 신뢰도가 높아질 것이다",
    metric: "AI 추천 수용률 · 수동 수정률",
    tag: "AI 신뢰 근거 부재",
  },
  {
    id: "H2",
    ifStatement: "운영 숫자를 다음 행동 제시(생산 지시, 발주량)로 변환하면",
    thenStatement: "점주가 정보 확인 후 즉시 행동을 결정할 수 있어 처리 지연이 줄어들 것이다",
    metric: "핵심 태스크 완료 시간 · 알림 후 조치율",
    tag: "결정 판단 구조",
  },
  {
    id: "H3",
    ifStatement: "크루가 피크타임에도 실수 복구 장치를 확인할 수 있으면",
    thenStatement: "주문·품절·생산 지시 실행 중 발생하는 오조작 불안이 줄어들 것이다",
    metric: "Undo 사용률 · 오류 복구 시간",
    tag: "크루 실행 안전망",
  },
]

const dunkinLearningNote: LearningNote = {
  hypothesis: "H2",
  expected: "운영 숫자를 행동 지시로 변환하면 점주가 즉시 결정할 것이다",
  actual:
    "초기 프로토타입 검토에서 정보가 많을수록 오히려 결정 지연이 발생했다. 점주는 '몇 개 만들면 되나'는 결론만 원했고, 근거 수치는 요청 시 확인하는 방식을 선호했다",
  change: "대시보드 기본 화면을 요약 지시 중심으로 압축하고, 근거 수치는 드릴다운으로 분리했다",
}

export function DunkinCaseStudy() {
  return (
    <CaseStudyShell>
      <HeroSection />
      <BusinessContextSection />
      <ProblemSection />
      <ResearchSection />
      <JourneySection />
      <PrincipleSection />
      <HypothesisSection
        number="05-1 / Hypothesis"
        title="인사이트를 3가지 검증 가설로 정의했다"
        description="AI 신뢰 근거·결정 판단 구조·크루 실행 안전망 3가지 패턴을 If-Then 가설로 바꾸고, 각 가설을 검증할 운영 지표를 사전에 설정했다."
        hypotheses={dunkinHypotheses}
        learningNote={dunkinLearningNote}
      />
      <RequirementMappingSection />
      <IaRedesignSection />
      <UxDesignSection />
      <KeyScreensSection />
      <TradeOffSection />
      <SpeedWorkflowSection />
      <ResultSection />
      <ReflectionSection />
    </CaseStudyShell>
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
          <h1 className="max-w-5xl break-keep text-[clamp(2.45rem,8.3vw,76px)] font-normal leading-[1.08] text-white">
            AI가 추천해도, 점주는 왜 바로 주문하지 못했을까?
          </h1>
          <p className="mt-8 max-w-2xl text-base font-normal leading-8 text-white/55 md:text-lg">
            AI Decision UX — 추천 검토와 발주 조정을 지원하는 운영 UX
          </p>
          <p className="mt-4 max-w-2xl break-keep text-sm leading-7 text-white/45 md:text-base md:leading-8">
            AI 기능 자체보다, 추천 근거와 수량 조정 단계를 설계해 점주의 최종 승인권을 유지한
            Product UX 케이스입니다.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            <TagText>B2B</TagText>
            <TagText>AI Agent UX</TagText>
            <TagText>2026</TagText>
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
          caption="디자인 파일 이미지 — 점주가 당일 매출과 생산 상태를 함께 확인하는 종합현황 화면"
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
      title="데이터는 있었지만, 매장 운영 순서로 전달되지는 않았다"
      description="SPC 던킨 매장은 본사, 주문, 생산, 매출 데이터를 이미 갖고 있었습니다. 확인된 간격은 데이터의 존재보다, 점주가 운영 중 필요한 순서로 그 데이터를 받지 못한다는 점이었습니다."
    >
      <DiagramCard
        title="이해관계자 구조"
        nodes={["본사 HQ", "SV 슈퍼바이저", "점주", "알바 크루"]}
      />
      <TwoColumn className="mt-6">
        <Card title="기존 커뮤니케이션 문제">
          <p className="break-keep text-sm leading-7 text-white/55">
            영업담당자가 매장을 직접 방문해 출력물을 보여주며 설명하는 구조. 데이터는 있었지만
            점주가 바로 조치할 수 있는 형태로 연결되지 않았다.
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
      <div className="mt-6">
        <DiagramCard
          title="에이전트 아키텍처"
          nodes={["생산관리", "주문관리", "매출분석", "PIP AI 통합", "점주 발주 결정"]}
        />
      </div>
    </CaseSection>
  )
}

function ProblemSection() {
  const rows = [
    ["데이터가 부족하다", "데이터를 보고도 조치를 정하기 어렵다"],
    ["AI가 틀렸다", "AI를 믿을 근거가 없다"],
    ["기능이 부족하다", "결정 비용이 너무 높다"],
  ] as const

  return (
    <CaseSection
      number="02"
      title="AI 추천보다 추천을 검토할 근거가 부족했다"
      description="제한된 리소스와 짧은 일정 안에서 PoC 방향을 다시 정리했습니다. 확인된 지점은 AI 추천 수를 늘리는 것보다, 점주가 추천을 수용하거나 수정할 기준을 갖는 것이었습니다."
    >
      <PriorityRationale>
        발주율이 낮다는 데이터는 있었지만, AI 추천 자체의 문제인지 UX의 문제인지 구분이 먼저
        필요했다. AI가 더 많이 추천하는 방향 대신, 점주가 추천을 수용하거나 거부할 근거를 갖는
        구조를 먼저 정의하기로 했다.
      </PriorityRationale>
      <SimpleTable
        headers={["기존 가설", "실제 문제"]}
        rows={rows.map(([before, after]) => [before, after])}
      />
      <ClosingText>
        따라서 설계 목표는 AI 추천 수를 늘리는 데 두지 않고, 점주가 추천을 이해하고, 조정하고, 최종
        승인할 수 있는 발주 절차를 만드는 것이었습니다.
      </ClosingText>
      <ProblemStatement
        target="점주"
        situation="AI 추천 화면에서 발주를 검토할 때"
        pain="추천 근거를 확인하지 못해 수동 조정이 반복된다"
        breakdown="발주 완료율이 낮고 AI 추천 수용이 일어나지 않는다"
      />
    </CaseSection>
  )
}

function ResearchSection() {
  return (
    <CaseSection
      number="03"
      title="현장 리서치에서는 숫자보다 운영 기준의 부족이 반복됐다"
      description="인터뷰, FGI, 카드소팅에서는 기능 수보다 신뢰, 지연, 책임의 문제가 반복되었습니다. 점주는 숫자 자체보다 그 숫자를 바탕으로 어떤 조치를 해야 하는지 확인하고 싶어 했습니다."
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
        {researchPatterns.map((pattern) => (
          <Card key={pattern.title} title={pattern.title}>
            <p className="text-sm leading-7 text-white/55">{pattern.body}</p>
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
                &quot;{persona.quote}&quot;
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
      title="점주의 하루에서 발주와 생산 결정 지점이 반복적으로 끊겼다"
      description="하루 운영을 기준으로 보면 화면 수보다, 발주·생산·손익 확인 시점마다 필요한 근거가 흩어져 있다는 점이 드러났습니다."
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
      title="AI 추천에 근거, 조정, 복구 장치를 함께 배치했다"
      description="현장에서 확인한 불신과 처리 지연을 추천 기준, 수량 수정 단계, 되돌리기 장치로 연결했습니다."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {patterns.map((pattern) => (
          <div
            key={pattern.insight}
            className="rounded-lg border border-white/10 bg-white/[0.035] p-6"
          >
            <p className="text-[12px] uppercase tracking-[0.16em] text-white/35">
              {pattern.insight}
            </p>
            <p className="mt-5 break-keep text-xl font-normal leading-tight text-white">
              {pattern.principle}
            </p>
            <p className="mt-5 break-keep text-sm leading-7 text-white/55">{pattern.design}</p>
          </div>
        ))}
      </div>
      <ClosingText>
        AI가 결정을 대신하지 않고, 점주가 추천을 검토하고 발주 책임을 유지할 수 있도록 기준과 복구
        장치를 설계했습니다.
      </ClosingText>
    </CaseSection>
  )
}

function RequirementMappingSection() {
  return (
    <CaseSection
      number="06"
      title="요구사항을 검증 가능한 운영 시나리오로 바꿨다"
      description="요구사항을 기능 목록으로 끝내지 않고, 점주가 어디에서 멈추는지와 어떤 지표로 운영 검증이 필요한지를 함께 매핑했습니다."
    >
      <ResponsiveTable>
        <thead>
          <tr>
            {["고객사 요구사항", "확인된 UX 문제", "UX 솔루션", "검증할 지표", "핵심 가설"].map(
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
              <TableCell muted>{row.hypothesis}</TableCell>
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
      title="기능 메뉴를 발주·생산·손익 확인 순서로 다시 묶었다"
      description="점주가 기능명을 찾는 구조에서, 당일 운영 업무를 따라가는 구조로 바꾸었습니다."
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
            "점주의 발주·생산 업무 기준으로 재구성",
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
      title="AI 추천 이후 점주가 검토하고 승인하는 작업 공간을 만들었다"
      description="화면을 AI 결과 표시 영역으로 두지 않고, 점주가 근거를 확인하고 수량을 수정한 뒤 승인하는 작업 공간으로 구성했습니다."
    >
      <DesignBlock
        eyebrow="01"
        title="행동 중심 정보 설계"
        body="숫자 나열을 당장 확인해야 할 운영 정보로 바꿨습니다. 기회손실 금액, 소진 예상 시간, 생산 완료 후 피드백을 같은 화면 맥락에서 확인하게 했습니다."
        researchLink={{
          hypothesis: "H2",
          findings: "약수역 점주 인터뷰 — 숫자 확인 후 다음 행동을 결정하지 못하는 패턴 관찰",
        }}
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
            caption="디자인 파일 이미지 — 당일 매출과 재고 상태를 함께 확인하는 시작 화면"
          />
          <ScreenFigure
            src={`${imageBase}/pos-production-management.png`}
            alt="POS 생산관리 디자인"
            caption="디자인 파일 이미지 — 소진 예상 시간과 생산 지시 여부를 함께 확인하는 화면"
          />
        </div>
      </DesignBlock>

      <DesignBlock
        eyebrow="02"
        title="검증 가능한 AI 신뢰 구조"
        body="AI 추천을 검토할 근거를 화면 안에 배치했습니다. 추천량, 오차 기준, 에이전트 로그를 통해 점주가 AI의 제안을 검토할 수 있게 했습니다."
        researchLink={{
          hypothesis: "H1",
          findings:
            "아현뉴타운 점주 인터뷰 — AI 추천을 믿을 근거가 없어 매번 수동 확인하는 행동 관찰",
        }}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <FormulaCard
            label="추천 검증 기준"
            value="추천량과 실제 판매량의 오차를 7일 단위로 확인"
          />
          <FormulaCard label="에이전트 활동 로그" value="추천 근거 역추적 가능" />
        </div>
        <div className="mt-6">
          <ScreenFigure
            src={`${imageBase}/pos-ai-realtime-status.png`}
            alt="POS AI 실시간 현황 디자인"
            caption="디자인 파일 이미지 — AI 추천 근거와 에이전트 상태를 확인하는 화면"
            wide
          />
        </div>
      </DesignBlock>

      <DesignBlock
        eyebrow="03"
        title="통제 가능한 발주 설계"
        body="AI 추천 → 수량 조정 → 최종 확인의 3단계로 분리했습니다. AI가 자동으로 결정하지 않고, 점주가 마지막 승인권을 유지하는 구조로 설계했습니다."
        researchLink={{
          hypothesis: "H3",
          findings: "크루 FGI — 자동 발주 시 실수 복구 불가로 인한 불안감 표현 수집",
        }}
      >
        <div className="grid gap-4 md:grid-cols-3">
          <DefinitionCard title="130% 초과" body="재확인 팝업" />
          <DefinitionCard title="4주 평균 180% 초과" body="이상 주문으로 분류" />
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
          body="확인 팝업으로 모든 작업을 끊는 대신, 일부 빠른 작업에는 5초 Undo를 제공했습니다. 피크타임 처리 속도와 오조작 복구 가능성을 함께 고려했습니다."
          compact
        />
        <DesignBlock
          eyebrow="05"
          title="본사 관점: HQ Console"
          body="점주 사용 데이터가 쌓이면 본사는 33개 점포의 운영 패턴을 집계할 수 있습니다. 발주 추천의 적합성, 폐기율 변화, 공급망 조정 여부를 확인할 기반 데이터로 연결되도록 설계했습니다."
          compact
        />
      </div>

      <DesignBlock
        eyebrow="06"
        title="모바일 UX 원칙"
        body="모바일은 전체 기능을 압축하기보다, 매장 밖에서도 생산·발주 상태를 이어서 확인할 수 있는 보조 운영 화면으로 정의했습니다."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <DefinitionCard
            title="Context Continuity"
            body="POS와 동일 데이터를 모바일에서 이어서 확인"
          />
          <DefinitionCard title="Remote Decision" body="매장 부재 중에도 생산지시·발주 가능" />
          <DefinitionCard
            title="Information Compression"
            body="모든 기능보다 주요 운영 확인 단계만 제공"
          />
        </div>
        <div className="mt-6">
          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
            <h3 className="text-xl font-normal text-white">크로스 플랫폼 데이터 흐름</h3>
            <div className="mt-6 grid gap-3 lg:grid-cols-3">
              {crossPlatformFlows.map((flow) => (
                <div
                  key={flow.from}
                  className="grid gap-3 rounded-lg border border-white/10 bg-black/20 p-4 text-sm leading-6 text-white/60"
                >
                  <span>{flow.from}</span>
                  <span className="text-white/25">→</span>
                  <span>{flow.to}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-[0.7fr_1fr]">
          <ScreenFigure
            src={`${imageBase}/mobile-order-final-confirmation.png`}
            alt="모바일 발주 최종 확인 디자인"
            caption="디자인 파일 이미지 — 새벽 납품과 점심 납품 금액을 분리해 자금 계획에 활용하는 화면"
            mobile
          />
          <div className="grid content-start gap-4">
            <DefinitionCard title="완료 주문 30초 후 자동 삭제" body="피크타임 화면 혼란 방지" />
            <DefinitionCard title="영업 종료 시각 근접" body="생산 알림 자동 차단" />
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
      title="각 화면을 다음 운영 행동과 연결해 설명했다"
      description="각 화면을 정보 노출 단위보다, 점주가 다음 운영 행동을 확인하는 단위로 정리했습니다."
    >
      <div className="space-y-10">
        <ScreenFigure
          src={`${imageBase}/pos-dashboard-overview.png`}
          alt="POS 종합현황 대시보드"
          caption="디자인 파일 이미지 — 당일 매출, 추천 행동, 손실 가능성을 같은 화면에서 확인하게 했다."
          wide
        />
        <div className="grid gap-4 lg:grid-cols-2">
          <ScreenFigure
            src={`${imageBase}/pos-production-management.png`}
            alt="POS 생산관리 화면"
            caption="디자인 파일 이미지 — 소진 예상과 생산 지시를 함께 배치해 즉시 조치 여부를 확인하게 했다."
          />
          <ScreenFigure
            src={`${imageBase}/pos-order-management-overview.png`}
            alt="POS 발주관리 화면"
            caption="디자인 파일 이미지 — 추천과 수동 조정을 분리해 최종 승인 전 검토하게 했다."
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
        <ScreenFigure
          src={`${imageBase}/pos-ai-realtime-status.png`}
          alt="POS AI 실시간 현황 화면"
          caption="디자인 파일 이미지 — 에이전트별 상태와 추천 근거를 통해 AI 제안을 추적하게 했다."
          wide
        />
        <div className="grid gap-4 md:grid-cols-2">
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
        <div className="border-t border-white/10 pt-10">
          <h3 className="mb-5 break-keep text-xl font-normal text-white">실제 구현 화면</h3>
          <div className="grid gap-4 lg:grid-cols-2">
            {actualPosScreens.map((screen) => (
              <ScreenFigure
                key={screen.title}
                src={screen.src}
                alt={screen.alt}
                caption={`실제 구현 화면 — ${screen.description}`}
              />
            ))}
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {actualMobileScreens.map((screen) => (
              <ScreenFigure
                key={screen.title}
                src={screen.src}
                alt={screen.alt}
                caption={`실제 구현 화면 — ${screen.description}`}
                mobile
              />
            ))}
          </div>
        </div>
      </div>
    </CaseSection>
  )
}

function TradeOffSection() {
  return (
    <CaseSection
      number="10"
      title="전체 데이터보다 즉시 조치에 필요한 정보만 전면에 남겼다"
      description="모든 데이터를 보여주기보다, 고급 커스터마이징과 일부 상세 분석을 줄이고 바쁜 아침에 점주가 바로 확인해야 하는 정보만 전면에 배치했습니다."
    >
      <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6 md:p-8">
        <p className="max-w-2xl break-keep text-[clamp(1.7rem,4vw,3rem)] font-normal leading-tight text-white">
          더 많은 정보보다, 피크타임에 바로 조치할 수 있는 정보가 우선이었습니다.
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
      title="AI와 프론트엔드 구현은 반복 작업과 화면 검증에 사용했다"
      description="프로젝트는 제한된 일정과 적은 인원 안에서 진행되었습니다. AI는 결과물 대체용으로 쓰지 않고 리서치 요약, 구조 탐색, 화면 Draft, 프론트엔드 초안 생성에 사용했습니다."
    >
      <TwoColumn>
        <NumberedList title="아이디에이션 프로세스" items={ideationSteps} />
        <NumberedList title="실행 워크플로우" items={workflowSteps} />
      </TwoColumn>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {[
          {
            hypothesis: "H1",
            label: "AI Distrust",
            impact: "High",
            feasibility: "High",
            reason: "점주 불신이 가장 강했고 추천 정확도 데이터 확보 가능",
          },
          {
            hypothesis: "H2",
            label: "Decision Paralysis",
            impact: "High",
            feasibility: "Medium",
            reason: "카드소팅 80% 일치로 구조 방향 확인",
          },
          {
            hypothesis: "H3",
            label: "Control Retention",
            impact: "Medium",
            feasibility: "High",
            reason: "3단계 프로토타입 사용성 검증 완료",
          },
        ].map((item) => (
          <div
            key={item.hypothesis}
            className="rounded-lg border border-white/10 bg-white/[0.035] p-5"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-white/45">
                {item.hypothesis}
              </span>
              <span className="text-[11px] uppercase tracking-[0.12em] text-white/30">
                {item.label}
              </span>
            </div>
            <div className="mt-5 flex gap-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.14em] text-white/30">Impact</p>
                <p className="mt-1.5 text-sm font-normal text-white">{item.impact}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.14em] text-white/30">Feasibility</p>
                <p className="mt-1.5 text-sm font-normal text-white">{item.feasibility}</p>
              </div>
            </div>
            <p className="mt-4 break-keep text-[12px] leading-5 text-white/35">{item.reason}</p>
          </div>
        ))}
      </div>
      <ClosingText>
        AI는 반복과 초안을 맡고, 사람은 문제 정의와 품질 검토를 맡았습니다. 구현은 컴포넌트 범위를
        좁히고 POS·모바일 반응형 화면을 함께 점검하는 방식으로 진행했습니다.
      </ClosingText>
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {workflowActualScreens.map((screen) => (
          <ScreenFigure
            key={screen.title}
            src={screen.src}
            alt={screen.alt}
            caption={`실제 구현 화면 — ${screen.description}`}
          />
        ))}
      </div>
    </CaseSection>
  )
}

function ResultSection() {
  return (
    <CaseSection
      number="12"
      title="정식 운영 전 단계에서 검증 가능한 제품 구조를 정리했다"
      description="정식 운영 전 단계이므로 성과 수치 대신 UX 구조 변화와 운영 시 추적할 지표로 결과를 정리했습니다."
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
      <OpenQuestion>
        정식 운영 전 단계이므로 실제 발주 완료율과 AI 추천 수용률 변화는 확인하지 못했다. 런칭 이후
        추천 수용률을 기준 지표로 설정하고, 화면 구조별 수용 패턴 차이를 A/B 테스트로 검증하고 싶다.
      </OpenQuestion>
    </CaseSection>
  )
}

function ReflectionSection() {
  return (
    <CaseSection
      number="13"
      title="다음 검증 기준은 추천 수용과 운영 리스크로 정리했다"
      description="PoC에서 확인한 구조는 정식 운영 데이터와 점포별 운영 차이로 다시 검증할 필요가 있습니다."
    >
      <div className="grid gap-4 lg:grid-cols-4">
        {reflectionColumns.map((column) => (
          <ListCard key={column.title} title={column.title} items={column.items} />
        ))}
      </div>
      <CollaborationMoment
        situation="AI 추천 근거 표시 여부를 놓고 PM과 의견이 나뉘었다. PM은 화면 단순화를 원했고, 나는 점주가 추천을 수용하려면 근거 확인 단계가 필수라고 판단했다."
        evidence={
          '인터뷰에서 점주가 "왜 이게 추천됐는지 모르면 그냥 수동으로 한다"고 말했다. 이 발언을 근거로 추천 카드에 AI 근거 레이어를 3단계로 구조화한 안을 제시했다.'
        }
        result="PM이 인터뷰 발언을 직접 확인하고 설득됐다. 추천 수량 근거와 재고 상태를 카드 안에 함께 표시하는 방향으로 합의했다."
      />
    </CaseSection>
  )
}
