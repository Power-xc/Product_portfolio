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

type ResearchPattern = {
  title: string
  body: string
}

type RequirementRow = {
  requirement: string
  problem: string
  solution: string
  metric: string
  hypothesis: string
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

type Hypothesis = {
  id: string
  ifStatement: string
  thenStatement: string
  metric: string
  tag: string
}

const dunkinSlug = "spc-dunkin-ai-smart-pos"
const imageBase = "/images/dunkin"
const captureBase = `${imageBase}/captures`
const deepqSlug = "sapie-deepq"
const deepqImageBase = "/images/deepq"
const guardianSlug = "sapie-guardian"
const guardianImageBase = "/images/guardian"
const stepSlug = "step-lifelong-education-platform"
const stepImageBase = "/images/work/step"
const stepImageVersion = "20260528"
const stepImage = (fileName: string) => `${stepImageBase}/${fileName}?v=${stepImageVersion}`
const stepScreens = {
  home: stepImage("step-main-home-1440.png"),
  sitemap: stepImage("step-sitemap-ia.png"),
  megamenu: stepImage("step-gnb-megamenu.png"),
  search: stepImage("step-search-autocomplete.png"),
  allCourses: stepImage("step-all-courses-fullpage.png"),
  courseDetail: stepImage("step-course-detail-live.png"),
  edutech: stepImage("step-edutech-fullpage.png"),
  mobileHome: stepImage("step-mobile-home.png"),
  mobileMenu: stepImage("step-mobile-menu.png"),
  myLearning: stepImage("04_step_my_learning.jpg"),
  loginSignup: stepImage("05_step_login_signup.png"),
  wiki: stepImage("06_step_wiki.jpg"),
  liveService: stepImage("08_step_live_service.jpg"),
} as const

type StepScreenSize = "standard" | "wide" | "phone"

type StepScreenItem = {
  label: string
  title: string
  caption: string
  src: string
  alt: string
  size?: StepScreenSize
}

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
    description: "납품 시간대와 금액을 확인한 뒤 최종 승인하도록 분리했다.",
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

const guardianScreens = {
  dashboard: `${guardianImageBase}/guardian-dashboard.png`,
  violations: `${guardianImageBase}/guardian-violations.png`,
  violationDetail: `${guardianImageBase}/guardian-violation-detail.png`,
  policy: `${guardianImageBase}/guardian-policy.png`,
  policyDetail: `${guardianImageBase}/guardian-policy-detail.png`,
  fileRules: `${guardianImageBase}/guardian-file-rules.png`,
  chatRecords: `${guardianImageBase}/guardian-chat-records.png`,
  messageDetail: `${guardianImageBase}/guardian-message-detail.png`,
  chatExport: `${guardianImageBase}/guardian-chat-export.png`,
  files: `${guardianImageBase}/guardian-files.png`,
  fileDetail: `${guardianImageBase}/guardian-file-detail.png`,
  admins: `${guardianImageBase}/guardian-admins.png`,
  adminPermission: `${guardianImageBase}/guardian-admin-permission.png`,
  adminDetail: `${guardianImageBase}/guardian-admin-detail.png`,
  departments: `${guardianImageBase}/guardian-departments.png`,
  users: `${guardianImageBase}/guardian-users.png`,
  roles: `${guardianImageBase}/guardian-roles.png`,
  securityAccess: `${guardianImageBase}/guardian-security-access.png`,
  login: `${guardianImageBase}/guardian-login.png`,
  otpDevice: `${guardianImageBase}/guardian-otp-device.png`,
} as const

const guardianMeta: InfoItem[] = [
  { label: "Role", value: "Product Designer / UX Strategy / Admin UX" },
  {
    label: "Scope",
    value: "Product Structure · IA · Dashboard · Policy Flow · Violation Triage · Audit UX",
  },
  {
    label: "Context",
    value: "Samsung Adoption Review / Enterprise Gen AI Security",
  },
]

const guardianCapabilities: InfoItem[] = [
  { label: "Visibility", value: "조직 전체 AI 사용 현황 보기" },
  { label: "Policy", value: "허용/차단 기준 설정" },
  { label: "Detection", value: "위험 메시지·파일 탐지" },
  { label: "Audit", value: "사고 이후 추적 가능한 기록 제공" },
  { label: "Access Control", value: "부서·직급·관리자 권한 관리" },
]

const guardianWhyCards: TradeOff[] = [
  {
    title: "Complexity",
    items: ["AI 도구, 메시지, 파일, 정책, 권한, 감사 기록이 연결되는 운영 구조"],
  },
  {
    title: "Enterprise UX",
    items: ["보안 관리자, IT 관리자, 감사 담당자의 업무 절차 설계"],
  },
  {
    title: "Product Structure",
    items: ["Dashboard → Violation → Policy → Records → Permission으로 이어지는 제품 구조"],
  },
  {
    title: "Governance",
    items: ["AI 사용을 책임 범위 안에서 허용하기 위한 통제 구조"],
  },
]

const guardianRoles: TradeOff[] = [
  {
    title: "Security Admin",
    items: ["조직 전체 AI 사용 현황과 고위험 이벤트 확인", "정책 설정과 후속 조치 담당"],
  },
  {
    title: "IT / System Admin",
    items: ["사용자, 부서, 직급, 관리자 권한 관리", "인증 기기와 접속 보안 관리"],
  },
  {
    title: "Team Lead",
    items: ["팀 단위 AI 사용과 위반 패턴 확인", "업무 생산성과 보안 리스크를 함께 검토"],
  },
  {
    title: "Auditor / Compliance",
    items: ["특정 사고의 사용자, 메시지, 파일, 정책 변경 이력 추적"],
  },
]

const guardianWorkflow = [
  "Detect",
  "Prioritize",
  "Inspect",
  "Act",
  "Record",
  "Adjust Policy",
] as const

const guardianProblemRows = [
  ["모든 AI 사용을 차단한다", "사용자는 우회하고, 조직은 실제 사용을 더 못 보게 된다"],
  ["로그를 많이 보여준다", "로그가 많을수록 어떤 위험을 먼저 봐야 하는지 모른다"],
  ["정책을 설정한다", "정책은 사용자, 부서, 도구, 파일, 메시지 유형에 따라 달라진다"],
  ["위반을 감지한다", "감지 이후 누가 조치하고 어떻게 기록할지가 더 중요하다"],
  ["계정을 관리한다", "관리자 권한과 접속 보안이 분리되면 통제 자체가 위험해진다"],
] as const

const guardianStructureCards: TradeOff[] = [
  {
    title: "Dashboard",
    items: ["조직 전체 AI 사용과 위반 흐름"],
  },
  {
    title: "Real-time Violations",
    items: ["위험 이벤트 감지와 triage"],
  },
  {
    title: "Policies",
    items: ["탐지 기준, 차단 기준, 배포 이력"],
  },
  {
    title: "Files",
    items: ["허용 확장자, 파일 제한, 파일 상세 추적"],
  },
  {
    title: "Chat Records",
    items: ["AI 메시지 기록, 상세 확인, 내보내기"],
  },
  {
    title: "Users & Organization",
    items: ["부서, 직급, 사용자, 관리자 권한"],
  },
  {
    title: "Security Access",
    items: ["MFA, OTP, 인증 기기, 로그인, 비밀번호 관리"],
  },
]

const guardianRiskCards: TradeOff[] = [
  {
    title: "Message Risk",
    items: ["AI 채팅에 민감정보나 제한 키워드가 포함되는 경우"],
  },
  {
    title: "File Risk",
    items: ["허용되지 않은 확장자, 대용량 파일, 민감 파일 업로드"],
  },
  {
    title: "User Risk",
    items: ["특정 사용자의 반복 위반, 고위험 행동 패턴"],
  },
  {
    title: "Policy Risk",
    items: ["조직 정책에 의해 차단되거나 경고되는 이벤트"],
  },
  {
    title: "Access Risk",
    items: ["관리자 권한, 인증 기기, 접속 상태 관리"],
  },
  {
    title: "Audit Risk",
    items: ["사고 이후 메시지·파일·정책 변경 이력을 추적하지 못하는 경우"],
  },
]

const guardianRiskOverviewDecisions = [
  "전체 사용량보다 위험 이벤트를 먼저 보여준다",
  "위반 유형과 부서별 비율을 함께 보여준다",
  "사용 AI 서비스와 위반 TOP 항목을 연결한다",
  "관리자가 상세 이벤트로 이동할 수 있게 한다",
] as const

const guardianViolationInfo = [
  "Who — 사용자 / 부서 / 직급",
  "Tool — 사용한 AI 서비스",
  "What — 메시지 또는 파일 유형",
  "Why — 위반 정책과 위험 점수",
  "Action — 다운로드 / 초기화 / 조치",
  "History — 발생 시간과 반복 여부",
] as const

const guardianViolationDecisions = [
  "리스트에서는 우선순위와 상태를 빠르게 본다",
  "상세에서는 원인과 조치 가능성을 본다",
  "로그 단위보다 조치 가능한 이벤트 단위로 구성한다",
] as const

const guardianPolicyPoints = [
  "정책 상태 활성/비활성",
  "정책 유형: 키워드 / AI 모델 / 파일",
  "위반 건수",
  "정책 상세",
  "배포 및 버전 이력",
  "허용 확장자",
  "최대 파일 크기",
] as const

const guardianAuditPoints = [
  "메시지 상세",
  "파일 상세",
  "사용자 / 부서 / AI 서비스",
  "위험도 / 처리 상태",
  "내보내기 기준: 부서별 / 사용자별 / 서비스별",
  "사고 이후 감사 가능한 기록 구조",
] as const

const guardianAccessPoints = [
  "정책 적용 범위와 조직 구조를 연결한다",
  "관리자 권한을 세분화한다",
  "콘솔 접근 자체를 별도 보안 절차로 설계한다",
  "권한 관리와 접속 보안을 분리하지 않는다",
] as const

const guardianCoverageScreens: ScreenItem[] = [
  {
    title: "Dashboard",
    description: "조직 전체 AI 사용과 위반 이벤트를 먼저 확인한다.",
    src: guardianScreens.dashboard,
    alt: "Guardian 대시보드 화면",
    type: "desktop",
  },
  {
    title: "Real-time Violation",
    description: "고위험 이벤트를 리스트에서 우선순위로 확인한다.",
    src: guardianScreens.violations,
    alt: "Guardian 실시간 위반 화면",
    type: "desktop",
  },
  {
    title: "Violation Detail",
    description: "위반 원인과 후속 조치를 한 패널에서 검토한다.",
    src: guardianScreens.violationDetail,
    alt: "Guardian 위반 상세 패널",
  },
  {
    title: "Policy Management",
    description: "정책 상태와 위반 건수를 연결해 조정 기준을 본다.",
    src: guardianScreens.policy,
    alt: "Guardian 정책 관리 화면",
    type: "desktop",
  },
  {
    title: "File Management",
    description: "파일 단위 위험과 처리 상태를 추적한다.",
    src: guardianScreens.files,
    alt: "Guardian 파일 관리 화면",
    type: "desktop",
  },
  {
    title: "Chat Records",
    description: "메시지 기록을 감사 가능한 단위로 확인한다.",
    src: guardianScreens.chatRecords,
    alt: "Guardian 채팅 기록 화면",
    type: "desktop",
  },
  {
    title: "User Management",
    description: "사용자와 조직 정보를 정책 적용 범위로 연결한다.",
    src: guardianScreens.users,
    alt: "Guardian 사용자 관리 화면",
    type: "desktop",
  },
  {
    title: "Department / Role",
    description: "부서와 직급 기준으로 책임 범위를 나눈다.",
    src: guardianScreens.departments,
    alt: "Guardian 부서 관리 화면",
    type: "desktop",
  },
  {
    title: "Admin Permission",
    description: "관리자 권한을 업무 책임에 맞게 부여한다.",
    src: guardianScreens.adminPermission,
    alt: "Guardian 관리자 권한 부여 화면",
  },
  {
    title: "Admin Detail",
    description: "관리자 상태와 접속 이력을 권한 책임과 함께 본다.",
    src: guardianScreens.adminDetail,
    alt: "Guardian 관리자 상세 정보 패널",
  },
  {
    title: "MFA / Security Login",
    description: "콘솔 접근 자체를 별도 보안 흐름으로 보호한다.",
    src: guardianScreens.securityAccess,
    alt: "Guardian 보안 및 접속 관리 화면",
    type: "desktop",
  },
  {
    title: "Admin Login",
    description: "관리자 콘솔 진입 전 인증 흐름을 분리한다.",
    src: guardianScreens.login,
    alt: "Guardian 관리자 로그인 화면",
    type: "desktop",
  },
]

const guardianTradeOffs: TradeOff[] = [
  {
    title: "More Surveillance",
    items: ["모든 행동 기록", "사용자 반발 가능성", "낮은 신뢰"],
  },
  {
    title: "No Visibility",
    items: ["우회 사용 증가", "사고 이후 추적 불가", "정책 적용 불가"],
  },
  {
    title: "Chosen Direction",
    items: ["위험 이벤트 중심 구조", "정책 기반 감지", "후속 조치와 감사 기록 연결"],
  },
]

const guardianProductOutcomes = [
  "Gen AI 사용 현황, 위반 감지, 정책 설정, 기록 추적, 권한 관리를 하나의 운영 콘솔로 통합",
  "관리자가 전체 로그보다 위험 이벤트와 후속 조치 중심으로 검토할 수 있도록 정보 구조 재설계",
  "메시지·파일·정책·사용자·권한 데이터를 연결해 감사 가능한 운영 절차 구성",
  "삼성 도입 검토를 전제로, 대기업 조직 구조에 맞는 관리자 권한과 보안 접속 절차 설계",
  "복잡한 보안 운영 업무를 Dashboard → Violation → Policy → Records → Permission의 제품 구조로 정리",
] as const

const guardianNextMetrics = [
  "고위험 이벤트 확인까지 걸리는 시간",
  "위반 상세에서 원인 파악 성공률",
  "정책 생성/수정 완료 시간",
  "부서·사용자별 정책 적용 오류율",
  "메시지/파일 추적 성공률",
  "감사 리포트 내보내기 완료 시간",
  "관리자 권한 설정 오류율",
  "경고/차단에 대한 사용자 이해도",
] as const

const guardianReflectionColumns: TradeOff[] = [
  {
    title: "구조화한 지점",
    items: [
      "AI 차단 범위를 운영 가능한 보안 플랫폼 구조로 재정의",
      "대시보드, 위반 상세, 정책, 기록, 권한을 하나의 관리 절차로 연결",
      "관리자 접속 보안까지 제품 범위 안에 포함",
      "화면 단위보다 조직 운영 구조 단위로 설계",
    ],
  },
  {
    title: "더 고도화할 것",
    items: [
      "조직별 보안 정책 템플릿",
      "역할별 대시보드",
      "경고/차단 문구 체계",
      "고위험 이벤트 triage workflow",
      "감사 리포트 자동 생성",
      "부서/직급별 정책 적용 시나리오",
      "안전한 AI 사용 기준으로 인식되게 하는 커뮤니케이션 UX",
    ],
  },
]

const deepqScreens = {
  login: `${deepqImageBase}/deepq-login.png`,
  intro: `${deepqImageBase}/deepq-intro.png`,
  dataStructure: `${deepqImageBase}/deepq-data-structure.png`,
  firstQuestion: `${deepqImageBase}/deepq-first-question.png`,
  workspace: `${deepqImageBase}/deepq-workspace.png`,
  userMenu: `${deepqImageBase}/deepq-user-menu.png`,
  usage: `${deepqImageBase}/deepq-usage.png`,
  resultChart: `${deepqImageBase}/deepq-result-chart.png`,
  processPanel: `${deepqImageBase}/deepq-process-panel.png`,
  viewSql: `${deepqImageBase}/deepq-view-sql.png`,
  adminDashboard: `${deepqImageBase}/deepq-admin-dashboard.png`,
  userManagement: `${deepqImageBase}/deepq-user-management.png`,
  userEdit: `${deepqImageBase}/deepq-user-edit.png`,
  passwordReset: `${deepqImageBase}/deepq-password-reset.png`,
  userAdd: `${deepqImageBase}/deepq-user-add.png`,
  conversationMonitoring: `${deepqImageBase}/deepq-conversation-monitoring.png`,
  responseDetail: `${deepqImageBase}/deepq-response-detail.png`,
} as const

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

const dunkinHypotheses: Hypothesis[] = [
  {
    id: "H1",
    ifStatement: "추천 근거와 오차 기준을 화면에 함께 표시하면",
    thenStatement: "점주가 AI 제안을 수용할 기준이 생기고 신뢰도가 높아질 것이다",
    metric: "AI 추천 수용률 · 수동 수정률",
    tag: "AI Distrust",
  },
  {
    id: "H2",
    ifStatement: "운영 숫자를 다음 행동 제시(생산 지시, 발주량)로 변환하면",
    thenStatement: "점주가 정보 확인 후 즉시 행동을 결정할 수 있어 처리 지연이 줄어들 것이다",
    metric: "핵심 태스크 완료 시간 · 알림 후 조치율",
    tag: "Decision Paralysis",
  },
  {
    id: "H3",
    ifStatement: "AI 추천 후 수량 조정·최종 확인·Undo를 순차 배치하면",
    thenStatement: "점주가 발주 책임을 유지하면서 실수 복구 가능성도 높아질 것이다",
    metric: "발주 승인 전 수정 횟수 · Undo 사용률",
    tag: "Control Retention",
  },
]

const stepHypotheses: Hypothesis[] = [
  {
    id: "H1",
    ifStatement: "콘텐츠를 학습자의 행동 목적(탐색·비교·결정·지속) 기준으로 재분류하면",
    thenStatement: "사용자가 다음에 할 행동을 찾는 데 걸리는 탐색 뎁스가 줄어들 것이다",
    metric: "핵심 태스크 완료 시간 · GNB 클릭 경로 뎁스",
    tag: "IA Restructuring",
  },
  {
    id: "H2",
    ifStatement: "과정 목록에서 수강 결정 근거(교육비·지원기기·수료여부)를 카드에 함께 노출하면",
    thenStatement: "상세 페이지 진입 전 비교 판단이 가능해져 반복 탐색이 줄어들 것이다",
    metric: "과정 상세 진입률 · 수강신청 전환율",
    tag: "Decision Support",
  },
  {
    id: "H3",
    ifStatement: "마이페이지에 진도·성적·수료증·후기를 학습 흐름 순서대로 배치하면",
    thenStatement: "수강 후 다음 행동을 찾지 못해 이탈하는 비율이 줄어들 것이다",
    metric: "마이페이지 재방문율 · 수료 후 후속 수강 신청율",
    tag: "Learning Continuity",
  },
]

const deepqHypotheses: Hypothesis[] = [
  {
    id: "H1",
    ifStatement: "AI 답변 생성 과정(스키마 검색 → SQL 생성 → 실행)을 단계별로 시각화하면",
    thenStatement: "사용자가 답변을 검토할 근거를 확인하고 신뢰하게 될 것이다",
    metric: "Evidence Layer 조회율 · SQL 확인 클릭율",
    tag: "Process Visibility",
  },
  {
    id: "H2",
    ifStatement: "질문·SQL·결과·설명을 하나의 Analysis Receipt로 연결하면",
    thenStatement: "사용자가 다음 업무 질문으로 이어가는 탐색 연결이 늘어날 것이다",
    metric: "추천 질문 클릭율 · 세션당 평균 질문 수",
    tag: "Continuity",
  },
  {
    id: "H3",
    ifStatement: "관리자가 대화 이력·SQL·비용·오류를 한 화면에서 추적할 수 있으면",
    thenStatement: "AI 서비스 운영 문제를 조기에 발견하고 대응하는 효율이 높아질 것이다",
    metric: "오류 발견 → 조치 소요 시간 · 비용 이상 감지율",
    tag: "Admin Observability",
  },
]

const guardianHypotheses: Hypothesis[] = [
  {
    id: "H1",
    ifStatement: "AI 사용 현황·위반 감지·정책 설정을 하나의 운영 절차로 연결하면",
    thenStatement: "보안 관리자가 AI 리스크를 차단 대신 통제 가능한 형태로 관리하게 될 것이다",
    metric: "위반 이벤트 평균 대응 시간 · 정책 미설정 항목 수",
    tag: "Visibility",
  },
  {
    id: "H2",
    ifStatement: "위반 이벤트를 위험 유형·부서·처리 상태 기준으로 분류해 대시보드에 배치하면",
    thenStatement: "관리자가 고위험 이벤트부터 우선 처리할 수 있게 될 것이다",
    metric: "고위험 이벤트 처리율 · 미처리 적체 건수",
    tag: "Risk Triage",
  },
  {
    id: "H3",
    ifStatement: "메시지·파일 기록을 위험도와 처리 상태로 연결하면",
    thenStatement: "사고 이후 감사 추적이 가능한 기록 체계를 갖추게 될 것이다",
    metric: "감사 요청 → 기록 추출 소요 시간 · 내보내기 사용 빈도",
    tag: "Audit Trail",
  },
]

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
        <HypothesisSection
          number="05-1 / Hypothesis"
          title="인사이트를 3가지 검증 가설로 정의했다"
          description="불신·지연·통제 3가지 패턴을 If-Then 가설로 바꾸고, 각 가설을 검증할 운영 지표를 사전에 설정했다."
          hypotheses={dunkinHypotheses}
        />
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

function GuardianCaseStudy() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main>
        <GuardianHeroSection />
        <GuardianWhySection />
        <GuardianContextSection />
        <GuardianWorkflowSection />
        <GuardianProblemSection />
        <HypothesisSection
          number="04-1 / Hypothesis"
          title="보안 운영 문제를 3가지 검증 가설로 정의했다"
          description="가시성·우선순위·감사 추적 3가지 과제를 If-Then 가설로 바꾸고, 각 가설을 검증할 운영 지표를 사전에 설정했다."
          hypotheses={guardianHypotheses}
        />
        <GuardianProductStructureSection />
        <GuardianRiskModelSection />
        <GuardianRiskOverviewSection />
        <GuardianViolationTriageSection />
        <GuardianPolicyControlSection />
        <GuardianAuditTrailSection />
        <GuardianAccessControlSection />
        <GuardianSystemCoverageSection />
        <GuardianTradeOffSection />
        <GuardianOutcomeSection />
        <GuardianReflectionSection />
      </main>
      <Footer />
    </div>
  )
}

function DeepQCaseStudy() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main>
        <DeepQHeroSection />
        <DeepQWhySection />
        <DeepQContextSection />
        <DeepQDiscoverySection />
        <DeepQProblemSection />
        <HypothesisSection
          number="04-1 / Hypothesis"
          title="신뢰 문제를 3가지 검증 가설로 정의했다"
          description="프로세스 가시성·분석 연속성·관리자 추적 3가지 과제를 If-Then 가설로 바꾸고, 각 가설을 검증할 운영 지표를 사전에 설정했다."
          hypotheses={deepqHypotheses}
        />
        <DeepQThesisSection />
        <DeepQWorkflowSection />
        <DeepQProductStructureSection />
        <DeepQTrustLadderSection />
        <DeepQFirstEntrySection />
        <DeepQQuestionWorkspaceSection />
        <DeepQTransparencySection />
        <DeepQEvidenceLayerSection />
        <DeepQAdminLoopSection />
        <DeepQTradeOffSection />
        <DeepQSystemCoverageSection />
        <DeepQOutcomeSection />
        <DeepQReflectionSection />
      </main>
      <Footer />
    </div>
  )
}

function DeepQHeroSection() {
  const cards = [
    {
      title: "Natural Language Query",
      body: "SQL 없이 업무 질문에서 분석을 시작",
    },
    {
      title: "Analysis Receipt",
      body: "질문, SQL, 결과, 설명을 하나의 분석 기록으로 연결",
    },
    {
      title: "Process Visibility",
      body: "AI 답변 준비 과정을 단계별로 시각화",
    },
    {
      title: "Evidence Layer",
      body: "테이블, 차트, SQL, 설명으로 근거 검토",
    },
    {
      title: "Admin Observability",
      body: "질문, SQL, 비용, 응답 이력을 운영자가 추적",
    },
  ]

  return (
    <section className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-24 lg:py-32">
      <Link
        href="/work"
        className="inline-flex text-sm font-normal text-white/45 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        ← Back to Work
      </Link>
      <p className="mt-12 text-[12px] font-normal uppercase tracking-[0.18em] text-white/35">
        03 / Explainable AI Data Analysis UX
      </p>
      <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
        <div>
          <h1 className="max-w-5xl break-keep text-[clamp(2.45rem,8.3vw,76px)] font-normal leading-[1.08] text-white">
            AI가 답을 말해도, 사용자는 무엇을 보고 신뢰할 수 있을까?
          </h1>
          <p className="mt-8 max-w-3xl text-base font-normal leading-8 text-white/55 md:text-lg">
            SAPIE DeepQ — Designing an explainable data analysis experience for
            enterprise users
          </p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
          <p className="text-[11px] uppercase tracking-[0.16em] text-white/35">
            Product Frame
          </p>
          <p className="mt-4 break-keep text-sm leading-7 text-white/60">
            B2B · AI Data Analysis · Explainable AI UX · Enterprise Intelligence
            Platform · Admin UX · Data Workflow
          </p>
        </div>
      </div>
      <div className="mt-12 max-w-4xl space-y-5 text-base leading-8 text-white/60 md:text-lg">
        <p className="break-keep">
          DeepQ는 SQL이나 데이터 구조를 모르는 현업 사용자가 자연어로 데이터에
          질문하고, AI가 어떤 데이터와 로직으로 답을 만들었는지 확인하며, 업무
          의사결정까지 이어갈 수 있도록 설계한 Enterprise Intelligence Platform입니다.
        </p>
        <p className="break-keep">
          기존에는 데이터나 문서 분석을 위해 전산/IT 조직에 요청하고 기다려야 했던
          업무를, 사용자가 직접 질문하고 검토할 수 있는 분석 경험으로 전환했습니다.
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {cards.map((card) => (
          <DefinitionCard key={card.title} title={card.title} body={card.body} />
        ))}
      </div>
      <DeepQHeroVisual />
    </section>
  )
}

function DeepQWhySection() {
  return (
    <CaseSection
      number="01 / Why This Case"
      title="DeepQ를 별도 케이스로 정리한 이유"
      description="이 포트폴리오는 프로젝트 수보다 제품 문제를 분석하고 구조화한 방식을 보여주기 위해 4개의 케이스스터디를 선별했습니다."
    >
      <p className="max-w-3xl break-keep text-base leading-8 text-white/60 md:text-lg">
        DeepQ는 그중 Explainable AI UX와 Enterprise Data Product 설계를 보여주는
        케이스입니다. 검토한 지점은 AI가 답을 생성하는 화면 자체보다, 사용자가
        그 답을 어떤 근거로 이해하고, 검토하고, 다음 업무 질문으로 이어갈 수 있는가였습니다.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <DefinitionCard
          title="Problem Definition"
          body="데이터는 있지만 현업 사용자가 직접 분석하기 어려운 구조"
        />
        <DefinitionCard
          title="Context Sensing"
          body="사용자는 SQL 자체보다 업무 질문에 대한 분석 근거가 필요함"
        />
        <DefinitionCard
          title="Rationale"
          body="AI 답변은 검토 가능한 근거 레이어와 함께 제공할 필요가 있음"
        />
        <DefinitionCard
          title="Craft"
          body="질문 입력, 답변 과정, 결과 검토, 관리자 모니터링을 하나의 제품 구조로 연결"
        />
      </div>
    </CaseSection>
  )
}

function DeepQContextSection() {
  return (
    <CaseSection
      number="02 / Context"
      title="데이터 접근 권한과 분석 실행 사이에 간격이 있었다"
      description="많은 조직에서 데이터는 이미 존재합니다. 하지만 현업 사용자가 원하는 질문을 직접 분석하려면 SQL, DB 구조, BI 도구, 데이터 요청 프로세스를 이해해야 합니다."
    >
      <div className="space-y-5 text-base leading-8 text-white/60 md:text-lg">
        <p className="break-keep">
          기존 방식에서는 사용자가 전산/IT 조직에 분석을 요청하고, 결과를 기다린 뒤
          다시 추가 질문을 하는 흐름이 반복될 수밖에 없었습니다.
        </p>
        <p className="break-keep">
          DeepQ는 이 흐름을 자연어 기반 분석 경험으로 바꾸는 제품입니다. 사용자는
          질문을 입력하고, AI는 연결된 데이터 구조를 바탕으로 SQL을 생성하고 실행한
          뒤, 결과와 해석을 제공합니다.
        </p>
      </div>
      <TwoColumn className="mt-8">
        <DeepQFlowCard
          title="Before"
          nodes={[
            "Business Question",
            "IT / Data Team Request",
            "Waiting / Clarification",
            "SQL / Analysis",
            "Result Delivery",
            "Follow-up Request",
          ]}
        />
        <DeepQFlowCard
          title="After"
          nodes={[
            "Business Question",
            "Natural Language Query",
            "Schema Understanding",
            "SQL Generation",
            "Result / Chart / Explanation",
            "Follow-up Exploration",
          ]}
        />
      </TwoColumn>
    </CaseSection>
  )
}

function DeepQDiscoverySection() {
  return (
    <CaseSection
      number="03 / Discovery & Structuring"
      title="질문 경험과 운영 경험을 먼저 분리해 정리했다"
      description="DeepQ에는 로그인, 인트로, 질문 입력, 답변 결과, SQL 확인, 추천 질문, 관리자 대시보드, 사용자 관리, 대화 이력, 응답 상세 정보가 함께 포함되어 있었습니다."
    >
      <p className="max-w-3xl break-keep text-base leading-8 text-white/60 md:text-lg">
        처음부터 화면을 나열하면 제품이 복잡한 질의 도구처럼 보일 수 있었습니다.
        그래서 화면과 기능을 사용자의 업무 목적 기준으로 재분류했습니다.
      </p>
      <DeepQSortingMap />
      <ClosingText>
        화면을 기능 단위로 나열하지 않고, 사용자가 질문을 시작하고, AI가 답을 만들고,
        사용자가 검토하고, 관리자가 운영하는 절차로 재구성했습니다.
      </ClosingText>
    </CaseSection>
  )
}

function DeepQProblemSection() {
  return (
    <CaseSection
      number="04 / Problem Definition"
      title="답변 생성보다 답변 검토 구조가 더 크게 드러났다"
      description="자연어 질문에 대한 답변만 제공할 경우, Enterprise 데이터 분석 환경에서는 데이터 출처와 계산 기준을 확인하기 어렵습니다."
    >
      <p className="max-w-3xl break-keep text-base leading-8 text-white/60 md:text-lg">
        사용자는 AI가 어떤 데이터베이스를 봤는지, 질문을 어떻게 해석했는지, 어떤
        SQL을 생성했는지, 결과가 어떤 기준으로 요약됐는지 확인할 수 있어야 합니다.
      </p>
      <div className="mt-8">
        <SimpleTable
          headers={["기존 접근", "실제 UX 문제"]}
          rows={[
            ["AI가 답변을 생성한다", "사용자는 왜 그 답이 나왔는지 알 수 없다"],
            [
              "자연어 질문을 받는다",
              "질문이 어떤 데이터 구조로 해석됐는지 보이지 않는다",
            ],
            [
              "SQL을 자동 생성한다",
              "SQL이 숨겨지면 데이터 신뢰성이 떨어진다",
            ],
            [
              "차트를 보여준다",
              "차트만으로는 계산 기준과 데이터 출처를 알 수 없다",
            ],
            [
              "관리자가 사용자를 관리한다",
              "대화 이력, SQL, 비용, 오류를 함께 추적하지 못하면 운영이 어렵다",
            ],
          ]}
        />
      </div>
      <ClosingText>
        질문, 데이터 구조, SQL, 결과, 설명, 추천 질문, 관리자 모니터링을 하나의 제품
        절차로 연결했습니다.
      </ClosingText>
    </CaseSection>
  )
}

function DeepQThesisSection() {
  return (
    <CaseSection
      number="05 / UX Thesis"
      title="AI 답변을 검토 가능한 업무 자산으로 바꾸는 경험"
      description="DeepQ의 설계 방향은 AI 답변을 단일 메시지로 두지 않고, 사용자가 이해하고 검토한 뒤 다음 업무 질문으로 이어갈 수 있게 만드는 것이었습니다."
    >
      <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6 md:p-8">
        <p className="text-[12px] uppercase tracking-[0.18em] text-white/35">
          Core UX Idea
        </p>
        <h3 className="mt-4 text-[clamp(1.8rem,5vw,3rem)] font-normal text-white">
          Analysis Receipt
        </h3>
        <p className="mt-5 max-w-3xl break-keep text-base leading-8 text-white/60 md:text-lg">
          질문 하나가 단순 메시지로 끝나지 않고, 의도 해석, 데이터 구조, 생성 SQL,
          실행 결과, 차트, 설명, 추천 질문, 관리자 로그로 이어지는 검토 가능한 분석
          기록이 되도록 설계했습니다.
        </p>
        <div className="mt-8">
          <DeepQFlowLine
            nodes={[
              "Question",
              "Intent Understanding",
              "Schema Mapping",
              "SQL Generation",
              "SQL Execution",
              "Result / Chart",
              "Explanation",
              "Follow-up Questions",
              "Admin Monitoring",
            ]}
          />
        </div>
      </div>
      <ClosingText>
        AI가 답을 생성하는 경험에서, 사용자가 답을 검토하고 조직이 추적할 수 있는
        경험으로 전환했습니다.
      </ClosingText>
    </CaseSection>
  )
}

function DeepQWorkflowSection() {
  return (
    <CaseSection
      number="06 / User & Workflow Analysis"
      title="현업 사용자는 답변과 함께 검토 가능한 근거가 필요했다"
      description="DeepQ의 핵심 사용자는 데이터 전문가보다, 업무 의사결정을 위해 데이터를 확인해야 하는 현업 사용자입니다."
    >
      <p className="max-w-3xl break-keep text-base leading-8 text-white/60 md:text-lg">
        이 사용자는 SQL 직접 작성보다, 내 질문이 어떤 데이터로
        해석됐는지, 결과가 어떤 계산과 조건에서 나왔는지, 다음에 어떤 질문을 이어가야
        하는지 알고 싶어합니다.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <ListCard
          title="Business User"
          items={[
            "자연어로 질문하고 빠르게 방향성을 확인",
            "테이블과 차트로 결과를 이해",
            "추천 질문으로 추가 탐색",
          ]}
        />
        <ListCard
          title="Data / IT Admin"
          items={[
            "DB 연결과 권한 관리",
            "생성된 SQL과 응답 이력 확인",
            "오류와 비용, 사용량 모니터링",
          ]}
        />
        <ListCard
          title="Organization Admin"
          items={[
            "사용자 권한 관리",
            "사용량과 비용 관리",
            "대화 이력과 응답 상세 추적",
          ]}
        />
      </div>
      <div className="mt-8">
        <DiagramCard
          title="Workflow"
          nodes={["Ask", "Interpret", "Generate SQL", "Execute", "Explain", "Explore", "Monitor"]}
        />
      </div>
    </CaseSection>
  )
}

function DeepQProductStructureSection() {
  return (
    <CaseSection
      number="07 / Product Structure"
      title="사용자 분석 경험과 관리자 운영 경험을 함께 설계했다"
      description="DeepQ는 사용자가 질문하고 결과를 검토하는 분석 경험과 관리자가 서비스 사용을 운영하는 콘솔이 연결된 제품입니다."
    >
      <DeepQProductStructureVisual />
      <TwoColumn className="mt-8">
        <ListCard
          title="사용자 제품 구조"
          items={[
            "Intro — 제품 목적과 사용 방식 이해",
            "Question Input — 자연어 기반 첫 질문",
            "Analysis Workspace — 질문과 답변을 이어가는 분석 공간",
            "Answer Process — AI가 답변을 준비하는 단계 시각화",
            "Result View — 테이블, 차트, SQL, 설명, 추천 질문",
          ]}
        />
        <ListCard
          title="관리자 제품 구조"
          items={[
            "Admin Dashboard — 사용량, 응답 시간, 오류, 비용 현황",
            "User Management — 사용자, 권한, DB 연결 계정 관리",
            "Conversation Monitoring — 질문 내용, 응답 생성 시간, Trace, 비용 확인",
            "Response Detail — Generated SQL, DB 실행 결과, Final NL Answer 확인",
          ]}
        />
      </TwoColumn>
    </CaseSection>
  )
}

function DeepQTrustLadderSection() {
  return (
    <CaseSection
      number="08 / Trust Ladder"
      title="신뢰를 위해 결과와 처리 과정을 함께 노출했다"
      description="DeepQ는 AI가 정확하다고 선언하는 방식보다, 사용자가 처리 과정과 근거를 단계적으로 확인할 수 있는 방식으로 설계했습니다."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {[
          ["Step 1. Understand", "Intro에서 DeepQ가 무엇을 하는 제품인지 먼저 이해한다."],
          ["Step 2. Ask", "SQL 없이 자연어로 질문한다."],
          [
            "Step 3. See the Process",
            "스키마 검색, 유사 쿼리 검색, 메타데이터 로드, SQL 생성, SQL 실행, 결과 분석을 거치는 과정을 확인한다.",
          ],
          [
            "Step 4. Review Evidence",
            "테이블, 차트, View SQL, 요약 설명으로 답변 근거를 검토한다.",
          ],
          [
            "Step 5. Continue Thinking",
            "추천 질문으로 다음 탐색 방향을 이어간다.",
          ],
          [
            "Step 6. Monitor",
            "관리자는 질문, SQL, 응답 상세, Trace, 비용/토큰, 오류 이력을 추적한다.",
          ],
        ].map(([title, body]) => (
          <DefinitionCard key={title} title={title} body={body} />
        ))}
      </div>
    </CaseSection>
  )
}

function DeepQFirstEntrySection() {
  return (
    <CaseSection
      number="09 / Key UX Decision 1"
      title="첫 진입에서 사용 맥락과 데이터 원칙을 먼저 배치했다"
      description="DeepQ는 첫 진입에서 질문 입력창만 제공하기보다, 제품이 어떤 데이터를 어떻게 분석하는지 먼저 확인할 수 있는 구성을 선택했습니다."
    >
      <p className="max-w-3xl break-keep text-base leading-8 text-white/60 md:text-lg">
        신규 사용자는 Intro를 통해 자연어 질문, 실시간 분석, 데이터 구조 이해,
        보안/관리 맥락을 이해하고, 반복 사용자는 “다시 보지 않기” 옵션으로 불필요한
        단계를 건너뛸 수 있습니다.
      </p>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <CompactFigure
          src={deepqScreens.login}
          alt="DeepQ 로그인 화면"
          caption="비식별 처리 이미지 — 엔터프라이즈 계정으로 분석 환경에 진입하는 화면"
        />
        <CompactFigure
          src={deepqScreens.intro}
          alt="DeepQ Intro 화면"
          caption="비식별 처리 이미지 — 첫 사용자가 제품 목적과 검토 흐름을 이해하는 화면"
        />
        <CompactFigure
          src={deepqScreens.dataStructure}
          alt="DeepQ 데이터 구조 이해 화면"
          caption="비식별 처리 이미지 — 연결된 데이터 구조와 읽기 전용 실행 원칙을 먼저 확인"
        />
      </div>
      <div className="mt-8">
        <ListCard
          title="설계 기준"
          items={[
            "신규 사용자에게는 제품 목적을 먼저 설명한다",
            "반복 사용자에게는 진입 단계를 줄인다",
            "첫 릴리즈 단계에서는 기능 수보다 신뢰와 사용 맥락을 먼저 검증한다",
            "Enterprise AI 제품은 분석 가능 범위와 안전한 사용 조건을 먼저 전달한다",
          ]}
        />
      </div>
    </CaseSection>
  )
}

function DeepQQuestionWorkspaceSection() {
  return (
    <CaseSection
      number="10 / Key UX Decision 2"
      title="분석 시작점을 메뉴 탐색에서 자연어 질문으로 옮겼다"
      description="DeepQ의 핵심 행동은 리포트 메뉴 탐색보다 자연어 질문 입력에 가까웠습니다. 첫 화면의 중심도 대시보드 목록보다 사용자의 질문 입력으로 배치했습니다."
    >
      <p className="max-w-3xl break-keep text-base leading-8 text-white/60 md:text-lg">
        최근 대화와 추천 질문은 보조 요소로 두고, 사용자가 가장 먼저 지금 궁금한 업무
        질문을 입력하도록 구조화했습니다.
      </p>
      <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1.2fr]">
        <ScreenFigure
          src={deepqScreens.firstQuestion}
          alt="DeepQ 첫 질문 입력 화면"
          caption="비식별 처리 이미지 — BI 메뉴 탐색 대신 자연어 질문에서 분석을 시작하도록 한 구조"
        />
        <ScreenFigure
          src={deepqScreens.workspace}
          alt="DeepQ 질문 중심 분석 공간"
          caption="비식별 처리 이미지 — 최근 대화는 보조로 두고 현재 질문 입력을 화면의 중심에 배치"
        />
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <CompactFigure
          src={deepqScreens.userMenu}
          alt="DeepQ 사용자 메뉴 화면"
          caption="비식별 처리 이미지 — 사용량과 설정은 보조 패널로 분리해 분석 흐름을 방해하지 않음"
        />
        <CompactFigure
          src={deepqScreens.usage}
          alt="DeepQ 사용량 팝업"
          caption="비식별 처리 이미지 — 비용과 쿼리 사용량은 운영 지표로 분리해 확인"
        />
      </div>
    </CaseSection>
  )
}

function DeepQTransparencySection() {
  return (
    <CaseSection
      number="11 / Key UX Decision 3"
      title="대기 상태를 분석 준비 과정으로 표시했다"
      description="AI 분석은 사용자가 입력한 뒤 결과가 나오기까지 짧은 지연이 발생합니다. 단순 로딩만 보여주면 사용자는 시스템이 어떤 작업을 처리 중인지 확인하기 어렵습니다."
    >
      <p className="max-w-3xl break-keep text-base leading-8 text-white/60 md:text-lg">
        DeepQ는 스키마 검색, 유사 쿼리 검색, 메타데이터 로드, SQL 생성, SQL 실행,
        결과 분석, 추천 질문 생성 과정을 단계별로 보여줍니다. 이 구조는 대기 시간을
        분석 근거를 준비하는 단계를 확인하는 시간으로 바꿉니다.
      </p>
      <div className="mt-8 grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
        <ScreenFigure
          src={deepqScreens.processPanel}
          alt="DeepQ 답변 준비 과정 패널"
          caption="비식별 처리 이미지 — AI의 대기 시간을 분석 과정의 투명성으로 전환한 패널"
          mobile
        />
        <ScreenFigure
          src={deepqScreens.resultChart}
          alt="DeepQ 답변 결과와 준비 과정 화면"
          caption="비식별 처리 이미지 — 결과와 준비 과정이 같은 분석 맥락 안에서 이어지는 화면"
        />
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <NumberedList
          title="프로세스 단계"
          items={[
            "스키마 검색",
            "유사 쿼리 검색",
            "메타데이터 로드",
            "SQL 생성",
            "SQL 실행",
            "결과 분석",
            "추천 질문 생성",
          ]}
        />
        <ListCard
          title="설계 기준"
          items={[
            "대기 중인 사용자의 불안을 줄인다",
            "AI가 데이터 구조를 탐색하고 있음을 보여준다",
            "분석 단계가 실패했을 때 어느 지점에서 문제가 생겼는지 파악 가능하게 한다",
            "설명 가능성을 답변 이후 단계에만 두지 않고 생성 과정부터 제공한다",
          ]}
        />
      </div>
    </CaseSection>
  )
}

function DeepQEvidenceLayerSection() {
  return (
    <CaseSection
      number="12 / Key UX Decision 4"
      title="답변을 검토 가능한 레이어로 나눴다"
      description="DeepQ는 AI의 최종 답변만 보여주지 않습니다. 같은 결과를 테이블, 차트, SQL, 자연어 설명, 추천 질문으로 나눠 제공합니다."
    >
      <p className="max-w-3xl break-keep text-base leading-8 text-white/60 md:text-lg">
        현업 사용자는 요약과 차트로 빠르게 이해하고, 데이터에 익숙한 사용자는 SQL과
        테이블을 확인해 답변의 근거를 검토할 수 있습니다.
      </p>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <ScreenFigure
          src={deepqScreens.resultChart}
          alt="DeepQ 결과 테이블과 차트 화면"
          caption="비식별 처리 이미지 — 하나의 질문 결과를 표와 차트로 나눠 확인하는 Evidence Layer"
        />
        <ScreenFigure
          src={deepqScreens.viewSql}
          alt="DeepQ View SQL 화면"
          caption="비식별 처리 이미지 — AI 답변의 근거를 사용자가 직접 검토할 수 있게 한 SQL 레이어"
        />
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <ListCard
          title="Surface Layer"
          items={["자연어 질문", "자연어 답변", "테이블", "차트"]}
        />
        <ListCard
          title="Evidence Layer"
          items={["View SQL", "요약 설명", "주요 근거", "추천 질문"]}
        />
        <ListCard
          title="Operation Layer"
          items={[
            "대화 이력",
            "응답 상세",
            "Generated SQL",
            "DB 실행 결과",
            "Trace",
            "LLM Cost",
            "사용자/권한 관리",
          ]}
        />
      </div>
    </CaseSection>
  )
}

function DeepQAdminLoopSection() {
  return (
    <CaseSection
      number="13 / Key UX Decision 5"
      title="Enterprise AI 제품에는 운영 추적 화면이 필요했다"
      description="DeepQ는 사용자 질문 화면만으로 운영되기 어렵습니다. 기업 환경에서는 누가 어떤 데이터에 질문했는지, 어떤 SQL이 생성됐는지, 어떤 답변이 제공됐는지, 비용과 오류가 어떻게 발생했는지 추적할 수 있어야 합니다."
    >
      <p className="max-w-3xl break-keep text-base leading-8 text-white/60 md:text-lg">
        관리자 콘솔은 이 정보를 운영자가 확인하고, 권한·DB 연결·품질·비용을 관리할
        수 있게 하는 Enterprise AI 운영 구조입니다.
      </p>
      <div className="mt-8">
        <DeepQFlowLine
          nodes={[
            "User Question",
            "Generated SQL",
            "Result",
            "Final Answer",
            "Trace",
            "Cost / Token",
            "Error / Latency",
            "Admin Review",
            "Product / Prompt / Permission Improvement",
          ]}
        />
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <ScreenFigure
          src={deepqScreens.adminDashboard}
          alt="DeepQ 관리자 대시보드"
          caption="비식별 처리 이미지 — 사용량, 오류, 비용, 사용자 흐름을 운영자가 함께 보는 구조"
        />
        <ScreenFigure
          src={deepqScreens.conversationMonitoring}
          alt="DeepQ 대화 이력 모니터링 화면"
          caption="비식별 처리 이미지 — 질문 내용, 생성 시간, Trace, 비용을 운영 이력으로 추적"
        />
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <CompactFigure
          src={deepqScreens.userManagement}
          alt="DeepQ 사용자 관리 화면"
          caption="비식별 처리 이미지 — 사용자와 권한, DB 연결 계정을 운영 단위로 관리"
        />
        <CompactFigure
          src={deepqScreens.responseDetail}
          alt="DeepQ 응답 상세 정보 패널"
          caption="비식별 처리 이미지 — Generated SQL, 실행 결과, 최종 답변을 추적할 수 있는 운영 구조"
        />
      </div>
    </CaseSection>
  )
}

function DeepQTradeOffSection() {
  return (
    <CaseSection
      number="14 / Trade-off"
      title="질문 입력의 단순함과 분석 근거 노출 범위를 조정했다"
      description="DeepQ는 사용자가 쉽게 질문할 수 있어야 했지만, 답변 근거가 부족하면 Enterprise 환경에서 검토가 어려웠습니다."
    >
      <p className="max-w-3xl break-keep text-base leading-8 text-white/60 md:text-lg">
        반대로 SQL, 데이터 구조, 실행 과정, 메타데이터를 모두 전면에 노출하면 현업
        사용자에게는 다시 어려운 분석 도구가 됩니다. 그래서 기본 경험은 질문과 답변
        중심으로 단순화하고, 검증이 필요한 사용자를 위해 SQL, 데이터 샘플, 설명, 추천
        질문을 확장 가능한 레이어로 제공했습니다.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <ListCard
          title="Too Simple"
          items={[
            "빠르게 질문 가능",
            "하지만 답변 근거가 부족함",
            "AI hallucination 리스크 증가",
          ]}
        />
        <ListCard
          title="Too Technical"
          items={[
            "SQL과 데이터 구조를 모두 확인 가능",
            "하지만 현업 사용자의 진입 장벽 증가",
            "BI/DB 도구처럼 복잡해짐",
          ]}
        />
        <ListCard
          title="Selected Scope"
          items={[
            "질문 중심의 단순한 기본 경험",
            "필요할 때 확인 가능한 SQL/테이블/차트/설명 레이어",
            "관리자 콘솔에서 운영 이력 추적",
          ]}
        />
      </div>
    </CaseSection>
  )
}

function DeepQSystemCoverageSection() {
  const screens = [
    ["Login", deepqScreens.login],
    ["Intro", deepqScreens.intro],
    ["Database Understanding", deepqScreens.dataStructure],
    ["First Question", deepqScreens.firstQuestion],
    ["Analysis Workspace", deepqScreens.workspace],
    ["Answer Process", deepqScreens.processPanel],
    ["Result Table", deepqScreens.resultChart],
    ["Chart", deepqScreens.resultChart],
    ["View SQL", deepqScreens.viewSql],
    ["Summary Explanation", deepqScreens.viewSql],
    ["Suggested Questions", deepqScreens.viewSql],
    ["Admin Dashboard", deepqScreens.adminDashboard],
    ["User Management", deepqScreens.userManagement],
    ["Token Usage", deepqScreens.usage],
    ["Conversation Monitoring", deepqScreens.conversationMonitoring],
    ["Response Detail", deepqScreens.responseDetail],
  ] as const

  return (
    <CaseSection
      number="15 / System Coverage"
      title="질문 입력부터 운영 관리까지 필요한 화면 범위를 정리했다"
      description="DeepQ는 질문 입력 화면에 그치지 않고, AI 데이터 분석 서비스가 조직 안에서 운영되기 위해 필요한 화면 범위를 함께 포함했습니다."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {screens.map(([title, src]) => (
          <CompactFigure
            key={`${title}-${src}`}
            src={src}
            alt={`DeepQ ${title} 화면`}
            caption={`비식별 처리 이미지 — ${title}`}
          />
        ))}
      </div>
    </CaseSection>
  )
}

function DeepQOutcomeSection() {
  return (
    <CaseSection
      number="16 / Product Outcome & Next Metrics"
      title="제품 구조와 운영 후 검증 지표를 정리했다"
      description="정식 운영 성과 수치를 주장하지 않고, 제품 구조상 어떤 분석 절차와 운영 절차를 가능하게 했는지 중심으로 정리합니다."
    >
      <TwoColumn>
        <ListCard
          title="Product Outcome"
          items={[
            "SQL 지식 없이 자연어로 데이터 질문을 시작할 수 있는 분석 경험 설계",
            "AI 답변 생성 과정을 단계적으로 보여주는 Process Visibility 구조 설계",
            "테이블, 차트, SQL, 자연어 설명, 추천 질문으로 답변 근거를 분리한 Evidence Layer 구성",
            "질문, SQL, 결과, 설명, 추천 질문, 관리자 로그를 하나의 Analysis Receipt 구조로 연결",
            "사용자 질문 경험과 관리자 운영 콘솔을 하나의 Enterprise Intelligence Platform 구조로 연결",
            "대화 이력, 응답 상세, Generated SQL, DB 실행 결과를 추적할 수 있는 관리자 모니터링 구조 설계",
            "첫 사용자와 반복 사용자의 진입 흐름을 분리한 Intro UX 설계",
          ]}
        />
        <ListCard
          title="Next Metrics"
          intro="정식 운영 시 추적할 수 있는 지표로만 표현합니다."
          items={[
            "첫 질문 입력까지 걸리는 시간",
            "답변 생성 완료까지 걸리는 시간",
            "SQL 실행 성공률",
            "사용자가 View SQL 또는 설명 영역을 확인하는 비율",
            "추천 질문 클릭률",
            "후속 질문 전환율",
            "관리자 응답 상세 확인 빈도",
            "오류 발생률",
            "비용/토큰 사용량 추이",
            "사용자의 AI 답변 신뢰 여부를 확인할 수 있는 정성 피드백",
          ]}
        />
      </TwoColumn>
    </CaseSection>
  )
}

function DeepQReflectionSection() {
  return (
    <CaseSection
      number="17 / Reflection"
      title="AI 답변을 업무에 활용하기 위한 검토 구조를 정리했다"
      description="DeepQ를 설계하면서 확인한 지점은 AI가 생성하는 답변의 양보다, 사용자가 그 답을 업무에 활용해도 되는지 검토할 수 있는 구조였습니다."
    >
      <p className="max-w-3xl break-keep text-base leading-8 text-white/60 md:text-lg">
        그래서 질문, 데이터 구조, SQL, 결과, 설명, 추천 질문, 관리자 로그를 연결해
        AI 답변을 일회성 메시지로 두지 않고 검토 가능한 분석 기록으로 다루는 방향을
        선택했습니다.
      </p>
      <TwoColumn className="mt-8">
        <ListCard
          title="구조화한 지점"
          items={[
            "자연어 질문 경험을 데이터 분석 제품 구조로 확장",
            "답변 준비 과정을 시각화해 AI의 불투명성을 줄임",
            "SQL, 테이블, 차트, 설명, 추천 질문을 분리해 사용자별 검토 깊이를 조절할 수 있게 함",
            "관리자 대시보드와 대화이력 모니터링까지 설계해 Enterprise 운영 가능성을 확보",
            "화면과 기능을 업무 목적 기준으로 재분류해 Start, Ask, Understand, Review, Continue, Operate 흐름으로 구조화",
          ]}
        />
        <ListCard
          title="더 고도화할 것"
          items={[
            "데이터 출처와 컬럼 설명을 더 명확히 보여주는 Source Trace UX",
            "AI 답변 신뢰도 또는 검토 상태 표시",
            "SQL 오류 발생 시 복구 플로우",
            "권한별 접근 가능한 DB/테이블 범위 표시",
            "질문 추천의 개인화",
            "반복 질문 패턴 기반 템플릿화",
            "관리자용 비용/품질 모니터링 고도화",
            "현업 사용자에게 SQL을 노출하지 않고도 신뢰를 줄 수 있는 쉬운 설명 레이어",
          ]}
        />
      </TwoColumn>
    </CaseSection>
  )
}

function GuardianHeroSection() {
  return (
    <section className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-24 lg:py-32">
      <Link
        href="/work"
        className="inline-flex text-sm font-normal text-white/45 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        ← Back to Work
      </Link>
      <p className="mt-12 text-[12px] font-normal uppercase tracking-[0.18em] text-white/35">
        04 / Enterprise AI Security Platform
      </p>
      <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_0.54fr] lg:items-end">
        <div>
          <h1 className="max-w-5xl break-keep text-[clamp(2.45rem,8.3vw,76px)] font-normal leading-[1.08] text-white">
            AI 도구를 허용할수록, 조직은 무엇을 확인하고 통제해야 할까?
          </h1>
          <p className="mt-8 max-w-3xl text-base font-normal leading-8 text-white/55 md:text-lg">
            Enterprise Gen AI Security Platform — Designing visibility, policy,
            audit, and access control for responsible AI usage
          </p>
          <p className="mt-5 max-w-3xl break-keep text-sm leading-7 text-white/45 md:text-base md:leading-8">
            삼성 도입 검토를 위해 설계한 Enterprise Gen AI Security Platform입니다.
            조직이 Gen AI 사용을 차단만 하는 방식에서 벗어나, 사용 현황을
            파악하고 정책을 설정하며 위반 처리와 감사 기록까지 이어지는 운영
            구조를 설계했습니다.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            <TagText>B2B</TagText>
            <TagText>AI Security Platform</TagText>
            <TagText>Governance UX</TagText>
            <TagText>Enterprise Admin</TagText>
            <TagText>Samsung Adoption Review</TagText>
          </div>
        </div>
        <div className="grid gap-3">
          {guardianMeta.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-[0.32fr_1fr] gap-4 border-t border-white/10 py-4"
            >
              <span className="text-[12px] uppercase tracking-[0.16em] text-white/35">
                {item.label}
              </span>
              <span className="break-keep text-sm leading-6 text-white/70">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-5">
        {guardianCapabilities.map((item) => (
          <DefinitionCard key={item.label} title={item.label} body={item.value} />
        ))}
      </div>

      <GuardianHeroVisual />
    </section>
  )
}

function GuardianWhySection() {
  return (
    <CaseSection
      number="01"
      title="AI 보안 운영을 제품 구조로 정리한 케이스"
      description="이 포트폴리오는 프로젝트 수보다 복잡한 제품 문제를 분석하고 구조화한 방식을 보여주기 위해 4개의 케이스스터디를 선별했습니다."
    >
      <p className="max-w-3xl break-keep text-base leading-8 text-white/55">
        Guardian은 그중 Enterprise AI Security 영역을 보여주는 케이스입니다. AI
        도구 사용이 늘어나는 조직에서, 보안 운영자가 무엇을 보고 어떤 기준으로
        조치하며 사고 이후 무엇을 추적해야 하는지를 제품 구조로 정리했습니다.
      </p>
      <div className="mt-8 grid gap-4 lg:grid-cols-4">
        {guardianWhyCards.map((card) => (
          <ListCard key={card.title} title={card.title} items={card.items} />
        ))}
      </div>
    </CaseSection>
  )
}

function GuardianContextSection() {
  return (
    <CaseSection
      number="02"
      title="기업 환경의 AI 사용 현황을 운영 단위로 구성했다"
      description="Gen AI 도구는 이미 업무 안으로 들어오고 있습니다. 사용 여부 자체보다, 조직이 어떤 사용을 허용하고 어떤 사용을 제한할지 관리할 수 있는 운영 체계가 필요했습니다."
    >
      <Card title="대기업 환경 도입 검토">
        <p className="break-keep text-sm leading-7 text-white/55">
          Guardian은 삼성 도입 검토를 전제로, AI 사용 현황, 위반 감지, 정책 관리,
          파일·채팅 기록, 사용자·관리자 권한을 하나의 관리 콘솔로 통합한 AI
          Security & Governance Platform입니다.
        </p>
      </Card>
      <div className="mt-6">
        <DiagramCard
          title="AI 사용 리스크가 운영 구조로 전환되는 흐름"
          nodes={[
            "Employee",
            "Gen AI Tools",
            "Message / File / Prompt",
            "Unknown data movement",
            "Security / Compliance / Governance Risk",
            "Guardian",
            "Visibility / Policy / Detection / Audit / Access Control",
          ]}
        />
      </div>
    </CaseSection>
  )
}

function GuardianWorkflowSection() {
  return (
    <CaseSection
      number="03"
      title="보안 관리자가 확인해야 할 정보와 조치 단위를 정리했다"
      description="Guardian의 핵심 사용자는 일반 최종 사용자보다, 조직의 AI 사용 리스크를 관리해야 하는 보안·운영 관리자입니다."
    >
      <p className="max-w-3xl break-keep text-base leading-8 text-white/55">
        사용자 분석의 초점은 화면 편의성보다, 관리자가 어떤 위험을 먼저 봐야
        하는지, 어떤 기준으로 정책을 설정해야 하는지, 사고 이후 어떤 기록을
        추적해야 하는지에 있었습니다.
      </p>
      <div className="mt-8 grid gap-4 lg:grid-cols-4">
        {guardianRoles.map((role) => (
          <ListCard key={role.title} title={role.title} items={role.items} />
        ))}
      </div>
      <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.035] p-6">
        <h3 className="text-xl font-normal text-white">Workflow</h3>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {guardianWorkflow.map((step, index) => (
            <div key={step} className="flex items-center gap-3">
              <span className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-white/70">
                {step}
              </span>
              {index < guardianWorkflow.length - 1 ? (
                <span className="text-white/25">→</span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </CaseSection>
  )
}

function GuardianProblemSection() {
  return (
    <CaseSection
      number="04"
      title="AI 차단보다 운영 가능한 통제 체계가 부족했다"
      description="초기에는 AI 도구 차단이 문제처럼 보일 수 있습니다. 하지만 기업 환경에서는 차단만으로 사용 현황, 위반 원인, 사고 이후 추적을 다룰 수 없습니다."
    >
      <SimpleTable
        headers={["기존 접근", "실제 UX 문제"]}
        rows={guardianProblemRows.map(([before, after]) => [before, after])}
      />
      <ClosingText>
        AI 사용 현황, 위반 감지, 정책 설정, 파일·채팅 기록, 권한 관리를 하나의
        관리 절차로 재구성했습니다.
      </ClosingText>
    </CaseSection>
  )
}

function GuardianProductStructureSection() {
  return (
    <CaseSection
      number="05"
      title="제품 구조를 보안 운영 절차에 맞게 정리했다"
      description="Guardian은 기능 메뉴를 나열하는 방식보다, 관리자가 위험을 발견하고 조치하고 기록으로 남기는 운영 절차를 기준으로 구조화했습니다."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {guardianStructureCards.map((card) => (
          <ListCard key={card.title} title={card.title} items={card.items} />
        ))}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <BeforeAfterCard
          title="Before"
          items={["Raw logs", "Scattered settings", "Unclear ownership"]}
        />
        <BeforeAfterCard
          title="After"
          items={["Dashboard", "Violation", "Policy", "Records", "Permission"]}
        />
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {guardianCoverageScreens.slice(0, 6).map((screen) => (
          <CompactFigure
            key={screen.title}
            src={screen.src}
            alt={screen.alt}
            caption={screen.description}
          />
        ))}
      </div>
    </CaseSection>
  )
}

function GuardianRiskModelSection() {
  return (
    <CaseSection
      number="06"
      title="위험 이벤트를 업무 단위로 다시 분류했다"
      description="보안 리스크를 단순히 위험/정상으로 나누지 않고, 관리자가 실제로 조치할 수 있는 업무 단위로 분류했습니다."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {guardianRiskCards.map((card) => (
          <ListCard key={card.title} title={card.title} items={card.items} />
        ))}
      </div>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <CompactFigure
          src={guardianScreens.violations}
          alt="Guardian 실시간 위반 화면"
          caption="위험 이벤트를 정책과 상태 기준으로 분류"
        />
        <CompactFigure
          src={guardianScreens.policy}
          alt="Guardian 정책 관리 화면"
          caption="정책별 위반 건수와 상태를 함께 확인"
        />
        <CompactFigure
          src={guardianScreens.files}
          alt="Guardian 파일 관리 화면"
          caption="파일 단위 위험과 처리 상태를 추적"
        />
      </div>
    </CaseSection>
  )
}

function GuardianRiskOverviewSection() {
  return (
    <CaseSection
      number="07"
      title="첫 화면에는 전체 로그보다 대응 우선순위를 배치했다"
      description="대시보드는 단순 사용량보다, 위반 유형, 부서별 비율, 사용 AI 서비스, 정규화된 위반 TOP 항목을 함께 보여주는 방식으로 구성했습니다."
    >
      <ScreenFigure
        src={guardianScreens.dashboard}
        alt="Guardian 대시보드 화면"
        caption="Risk Overview — 조직 전체 AI 사용과 위반 흐름을 한 화면에서 파악하는 대시보드"
        wide
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {guardianRiskOverviewDecisions.map((decision) => (
          <DefinitionCard key={decision} title={decision} body="위험 이벤트를 먼저 확인하고 상세 기록으로 이동하게 했다." />
        ))}
      </div>
    </CaseSection>
  )
}

function GuardianViolationTriageSection() {
  return (
    <CaseSection
      number="08"
      title="위반 이벤트는 감지 이후 처리 절차까지 필요했다"
      description="위반 상세에서는 사용자, 부서, AI 서비스, 감지 시각, 최고 위험도, 위반 정책을 한 번에 확인할 수 있게 했습니다."
    >
      <div className="grid gap-5 lg:grid-cols-[1fr_0.42fr]">
        <ScreenFigure
          src={guardianScreens.violations}
          alt="Guardian 실시간 위반 화면"
          caption="Violation Triage — 고위험 이벤트를 우선순위와 상태 기준으로 확인"
        />
        <ScreenFigure
          src={guardianScreens.violationDetail}
          alt="Guardian 위반 상세 패널"
          caption="Violation Detail — 원인과 다음 조치를 한 화면에서 검토"
        />
      </div>
      <TwoColumn className="mt-8">
        <ListCard title="정보 구조" items={[...guardianViolationInfo]} />
        <ListCard title="설계 기준" items={[...guardianViolationDecisions]} />
      </TwoColumn>
    </CaseSection>
  )
}

function GuardianPolicyControlSection() {
  return (
    <CaseSection
      number="09"
      title="정책은 관리자가 조정 가능한 조건으로 나눴다"
      description="정책 관리는 키워드, AI 모델, 파일 확장자, 최대 파일 크기처럼 관리자가 실제로 조정할 수 있는 조건으로 나눴습니다."
    >
      <div className="grid gap-5 lg:grid-cols-[1fr_0.42fr]">
        <ScreenFigure
          src={guardianScreens.policy}
          alt="Guardian 정책 관리 화면"
          caption="Policy Control — 조직의 보안 기준을 관리 가능한 조건으로 설정"
        />
        <ScreenFigure
          src={guardianScreens.policyDetail}
          alt="Guardian 정책 상세 패널"
          caption="Policy Detail — 정책 상태와 위반 건수를 함께 확인"
        />
      </div>
      <div className="mt-6 grid gap-5 lg:grid-cols-[0.42fr_1fr]">
        <ScreenFigure
          src={guardianScreens.fileRules}
          alt="Guardian 파일 관리 설정 패널"
          caption="File Rule — 허용 확장자와 최대 파일 크기를 운영 조건으로 조정"
        />
        <ListCard
          title="설계 기준"
          intro="정책별 위반 건수와 상태를 함께 노출해, 정책이 실제 위험 이벤트와 연결되도록 했다."
          items={[...guardianPolicyPoints]}
        />
      </div>
    </CaseSection>
  )
}

function GuardianAuditTrailSection() {
  return (
    <CaseSection
      number="10"
      title="사고 이후 추적을 위해 메시지와 파일 기록을 연결했다"
      description="채팅과 파일 기록은 보관 대상에 그치지 않고, 감사와 사고 대응의 근거로 사용됩니다."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        <ScreenFigure
          src={guardianScreens.chatRecords}
          alt="Guardian 채팅 기록 화면"
          caption="Audit Trail — 메시지 기록을 위험도와 처리 상태 기준으로 추적"
        />
        <ScreenFigure
          src={guardianScreens.files}
          alt="Guardian 파일 관리 화면"
          caption="File Trace — 파일 단위 위험과 처리 상태를 연결해 확인"
        />
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        <ScreenFigure
          src={guardianScreens.messageDetail}
          alt="Guardian 메시지 상세 패널"
          caption="Message Detail — 사고 이후 확인해야 하는 기록 단위"
        />
        <ScreenFigure
          src={guardianScreens.fileDetail}
          alt="Guardian 파일 상세 패널"
          caption="File Detail — 파일 업로드 맥락과 검사 상태를 추적"
        />
        <ScreenFigure
          src={guardianScreens.chatExport}
          alt="Guardian 내보내기 패널"
          caption="Export — 감사 기준에 맞게 기록을 추출하는 흐름"
        />
      </div>
      <div className="mt-8">
        <ListCard
          title="설계 기준"
          intro="관리자는 메시지, 파일, AI 서비스, 사용자, 위험도, 처리 상태를 연결해 확인하고 필요한 기록을 내보낼 수 있다."
          items={[...guardianAuditPoints]}
        />
      </div>
    </CaseSection>
  )
}

function GuardianAccessControlSection() {
  return (
    <CaseSection
      number="11"
      title="AI 사용 통제는 조직 권한 체계와 함께 작동하도록 구성했다"
      description="같은 AI 도구라도 부서, 직급, 역할에 따라 허용 범위가 달라질 수 있습니다."
    >
      <p className="max-w-3xl break-keep text-base leading-8 text-white/55">
        Guardian은 부서·직급·사용자·관리자 권한을 분리해 정책 적용 범위와 책임
        범위를 명확히 했습니다. 보안 관리 콘솔에 접근하는 관리자 계정도 별도
        보호가 필요했기 때문에 인증 기기, OTP, 접속 상태 관리를 함께 설계했습니다.
      </p>
      <div className="mt-8 grid gap-5 lg:grid-cols-[0.42fr_1fr]">
        <ScreenFigure
          src={guardianScreens.adminPermission}
          alt="Guardian 관리자 권한 부여 패널"
          caption="Access Control — 업무 책임에 따라 관리자 권한을 부여"
        />
        <div className="grid gap-5">
          <ScreenFigure
            src={guardianScreens.admins}
            alt="Guardian 관리자 관리 화면"
            caption="Admin Management — 관리자 상태와 권한 생성·수정 이력을 확인"
          />
          <ScreenFigure
            src={guardianScreens.securityAccess}
            alt="Guardian 보안 및 접속 관리 화면"
            caption="Security Access — 콘솔 접근 자체를 인증 기기 흐름으로 관리"
          />
        </div>
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        <CompactFigure
          src={guardianScreens.departments}
          alt="Guardian 부서 관리 화면"
          caption="부서 기준 정책 적용 범위"
        />
        <CompactFigure
          src={guardianScreens.roles}
          alt="Guardian 직급 관리 화면"
          caption="직급 기준 책임 범위"
        />
        <CompactFigure
          src={guardianScreens.adminDetail}
          alt="Guardian 관리자 상세 정보 패널"
          caption="관리자 상태와 접속 이력"
        />
        <CompactFigure
          src={guardianScreens.login}
          alt="Guardian 관리자 로그인 화면"
          caption="콘솔 진입 전 인증 흐름"
        />
        <CompactFigure
          src={guardianScreens.otpDevice}
          alt="Guardian OTP 인증 기기 등록 화면"
          caption="관리자 접근을 보호하는 인증 흐름"
        />
      </div>
      <div className="mt-8">
        <ListCard title="설계 기준" items={[...guardianAccessPoints]} />
      </div>
    </CaseSection>
  )
}

function GuardianSystemCoverageSection() {
  return (
    <CaseSection
      number="12"
      title="운영에 필요한 관리 화면 범위를 함께 정리했다"
      description="Guardian은 대시보드 한 화면에 그치지 않고, AI 사용을 운영하기 위해 필요한 관리 화면들이 연결된 콘솔입니다."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {guardianCoverageScreens.map((screen) => (
          <CompactFigure
            key={screen.title}
            src={screen.src}
            alt={screen.alt}
            caption={`${screen.title} — ${screen.description}`}
          />
        ))}
      </div>
    </CaseSection>
  )
}

function GuardianTradeOffSection() {
  return (
    <CaseSection
      number="13"
      title="전수 감시보다 위험 이벤트 중심의 통제 범위를 선택했다"
      description="모든 행동을 기록하는 방식은 사용자 반발을 만들 수 있습니다. 반대로 아무것도 보지 않으면 조직은 AI 사용 리스크를 통제할 수 없습니다."
    >
      <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6 md:p-8">
        <p className="max-w-3xl break-keep text-[clamp(1.7rem,4vw,3rem)] font-normal leading-tight text-white">
          개인의 모든 행동보다, 정책 위반 가능성이 있는 메시지·파일·AI 사용
          이벤트를 중심으로 구조화했습니다.
        </p>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {guardianTradeOffs.map((item) => (
          <ListCard key={item.title} title={item.title} items={item.items} />
        ))}
      </div>
      <ClosingText>
        차단, 경고, 상세 확인, 내보내기, 권한 관리가 이어지는 운영 절차를 설계해
        보안팀이 대응 가능한 단위로 위험을 다룰 수 있게 했습니다.
      </ClosingText>
    </CaseSection>
  )
}

function GuardianOutcomeSection() {
  return (
    <CaseSection
      number="14"
      title="제품 구조와 운영 후 검증 지표를 정리했다"
      description="운영 성과 수치를 주장하지 않고, 제품 구조상 어떤 운영 절차를 가능하게 했는지 중심으로 정리합니다."
    >
      <TwoColumn>
        <ListCard title="Product Outcome" items={[...guardianProductOutcomes]} />
        <ListCard
          title="Next Metrics"
          intro="정식 운영 시 추적할 수 있는 지표로만 표현한다."
          items={[...guardianNextMetrics]}
        />
      </TwoColumn>
    </CaseSection>
  )
}

function GuardianReflectionSection() {
  return (
    <CaseSection
      number="15"
      title="제품화 관점에서 추가 검증할 지점"
      description="운영 구조를 확장할 때 어떤 부분을 더 검증하고 세분화해야 하는지 기준으로 정리했습니다."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {guardianReflectionColumns.map((column) => (
          <ListCard key={column.title} title={column.title} items={column.items} />
        ))}
      </div>
    </CaseSection>
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
            AI 기능 자체보다, 추천 근거와 수량 조정 단계를 설계해 점주의
            최종 승인권을 유지한 Product UX 케이스입니다.
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
            영업담당자가 매장을 직접 방문해 출력물을 보여주며 설명하는 구조.
            데이터는 있었지만 점주가 바로 조치할 수 있는 형태로 연결되지 않았다.
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
      <SimpleTable
        headers={["기존 가설", "실제 문제"]}
        rows={rows.map(([before, after]) => [before, after])}
      />
      <ClosingText>
        따라서 설계 목표는 AI 추천 수를 늘리는 데 두지 않고, 점주가 추천을
        이해하고, 조정하고, 최종 승인할 수 있는 발주 절차를 만드는 것이었습니다.
      </ClosingText>
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
        AI가 결정을 대신하지 않고, 점주가 추천을 검토하고 발주 책임을 유지할 수 있도록
        기준과 복구 장치를 설계했습니다.
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
        researchLink={{ hypothesis: "H2", findings: "약수역 점주 인터뷰 — 숫자 확인 후 다음 행동을 결정하지 못하는 패턴 관찰" }}
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
        researchLink={{ hypothesis: "H1", findings: "아현뉴타운 점주 인터뷰 — AI 추천을 믿을 근거가 없어 매번 수동 확인하는 행동 관찰" }}
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
        researchLink={{ hypothesis: "H3", findings: "크루 FGI — 자동 발주 시 실수 복구 불가로 인한 불안감 표현 수집" }}
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
          <DefinitionCard title="Context Continuity" body="POS와 동일 데이터를 모바일에서 이어서 확인" />
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
          <div key={item.hypothesis} className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-white/45">
                {item.hypothesis}
              </span>
              <span className="text-[11px] uppercase tracking-[0.12em] text-white/30">{item.label}</span>
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
        AI는 반복과 초안을 맡고, 사람은 문제 정의와 품질 검토를 맡았습니다. 구현은
        컴포넌트 범위를 좁히고 POS·모바일 반응형 화면을 함께 점검하는 방식으로
        진행했습니다.
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
        <div className="min-w-0">
          <h2 className="max-w-4xl break-keep text-[clamp(1.72rem,4.6vw,42px)] font-normal leading-[1.18] text-white">
            {title}
          </h2>
          <p className="mt-5 max-w-3xl break-keep text-[15px] font-normal leading-7 text-white/55 md:text-base md:leading-8">
            {description}
          </p>
          <div className="mt-10 min-w-0">{children}</div>
        </div>
      </div>
    </section>
  )
}

function HypothesisSection({
  number,
  title,
  description,
  hypotheses,
}: {
  number: string
  title: string
  description: string
  hypotheses: Hypothesis[]
}) {
  return (
    <CaseSection number={number} title={title} description={description}>
      <div className="grid gap-6 lg:grid-cols-3">
        {hypotheses.map((h) => (
          <div key={h.id} className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
            <div className="flex items-center justify-between">
              <p className="text-[12px] uppercase tracking-[0.16em] text-white/35">가설 {h.id}</p>
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-1 text-[11px] text-white/40">
                {h.tag}
              </span>
            </div>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/35">If</p>
                <p className="mt-2 break-keep text-sm leading-6 text-white">{h.ifStatement}</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/35">Then</p>
                <p className="mt-2 break-keep text-sm leading-6 text-white">{h.thenStatement}</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/35">검증 지표</p>
                <p className="mt-2 break-keep text-[13px] leading-6 text-white/50">{h.metric}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CaseSection>
  )
}

function MetricGrid({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-lg border border-white/10 bg-white/[0.035] p-6"
        >
          <p className="text-[11px] uppercase tracking-[0.16em] text-white/35">
            {metric.context}
          </p>
          <p className="mt-4 text-[clamp(2rem,5vw,3.4rem)] font-normal leading-none text-white">
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
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
      <h3 className="break-keep text-xl font-normal leading-7 text-white">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  )
}

function DefinitionCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-black/20 p-5">
      <p className="text-[15px] font-normal leading-6 text-white">{title}</p>
      <p className="mt-3 break-keep text-sm leading-6 text-white/50">{body}</p>
    </div>
  )
}

function DiagramCard({ title, nodes }: { title: string; nodes: string[] }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
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
    <div className="max-w-full overflow-x-auto rounded-lg border border-white/10 bg-white/[0.035]">
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
        strong ? "text-white" : muted ? "text-white/40" : "text-white/60"
      }`}
    >
      {children}
    </td>
  )
}

function ClosingText({ children }: { children: ReactNode }) {
  return (
    <p className="mt-8 max-w-3xl break-keep border-l border-white/15 pl-5 text-lg font-normal leading-8 text-white/70">
      {children}
    </p>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
      <p className="break-keep text-xl font-normal leading-7 text-white">{value}</p>
      <p className="mt-4 text-sm leading-6 text-white/45">{label}</p>
    </div>
  )
}

function QuoteCard({ item }: { item: QuoteItem }) {
  return (
    <figure className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
      <figcaption className="text-sm leading-6 text-white/45">
        {item.store} — {item.meta}
      </figcaption>
      <blockquote className="mt-5">
        <p className="break-keep text-lg font-normal italic leading-8 text-white/80">
          "{item.quote}"
        </p>
      </blockquote>
    </figure>
  )
}

function BeforeAfterCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
      <h3 className="text-xl font-normal text-white">{title}</h3>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item} className="break-keep text-sm leading-7 text-white/60">
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
  researchLink,
}: {
  eyebrow: string
  title: string
  body: string
  children?: ReactNode
  compact?: boolean
  researchLink?: { hypothesis: string; findings: string }
}) {
  return (
    <section
      className={`rounded-lg border border-white/10 bg-white/[0.035] p-6 md:p-8 ${
        compact ? "" : "mb-8"
      }`}
    >
      <p className="text-[11px] uppercase tracking-[0.18em] text-white/35">{eyebrow}</p>
      <h3 className="mt-4 break-keep text-xl font-normal leading-tight text-white md:text-2xl">
        {title}
      </h3>
      <p className="mt-5 max-w-3xl break-keep text-sm leading-7 text-white/55 md:text-base md:leading-8">
        {body}
      </p>
      {children ? <div className="mt-6">{children}</div> : null}
      {researchLink && !compact ? (
        <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
          <span className="rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-white/45">
            {researchLink.hypothesis}
          </span>
          <p className="text-[12px] leading-5 text-white/35">{researchLink.findings}</p>
        </div>
      ) : null}
    </section>
  )
}

function FormulaCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-black/25 p-5">
      <p className="text-[12px] uppercase tracking-[0.16em] text-white/35">{label}</p>
      <p className="mt-4 break-keep text-sm leading-7 text-white/65">{value}</p>
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
  const isDeepQImage = src?.startsWith(deepqImageBase)
  const imageLoading = isDeepQImage ? "eager" : "lazy"

  return (
    <figure
      className={`overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] ${
        wide ? "shadow-card 2xl:-mx-[120px]" : ""
      }`}
    >
      <div
        className={`flex bg-black/30 ${
          mobile ? "justify-center p-4 sm:p-5" : "items-center justify-center p-3"
        }`}
      >
        {src && mobile ? (
          <div className="w-full max-w-[320px] overflow-hidden rounded-[30px] border-[10px] border-[#121217] bg-[#121217] shadow-card">
            <img
              src={src}
              alt={alt}
              loading={imageLoading}
              decoding="async"
              draggable={false}
              className="h-auto w-full rounded-[20px]"
            />
          </div>
        ) : src ? (
          <img
            src={src}
            alt={alt}
            loading={imageLoading}
            decoding="async"
            draggable={false}
            className="h-auto w-full rounded-md object-contain"
          />
        ) : (
          <div className="flex min-h-[280px] w-full items-center justify-center rounded-md border border-white/10 bg-white/[0.025] text-sm text-white/35">
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

function DeepQHeroVisual() {
  return (
    <figure className="mt-12 overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] shadow-card 2xl:-mx-[120px]">
      <div className="grid gap-3 bg-black/30 p-3 lg:grid-cols-[1.12fr_0.88fr]">
        <div className="min-w-0 overflow-hidden rounded-md border border-white/10 bg-[#111]">
          <img
            src={deepqScreens.workspace}
            alt="DeepQ 질문 중심 분석 공간"
            loading="eager"
            decoding="async"
            draggable={false}
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="grid min-w-0 gap-3 md:grid-cols-2 lg:grid-cols-1">
          <div className="overflow-hidden rounded-md border border-white/10 bg-[#111]">
            <img
              src={deepqScreens.resultChart}
              alt="DeepQ 결과 검토 화면"
              loading="eager"
              decoding="async"
              draggable={false}
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="overflow-hidden rounded-md border border-white/10 bg-[#111]">
            <img
              src={deepqScreens.viewSql}
              alt="DeepQ View SQL 근거 확인 화면"
              loading="eager"
              decoding="async"
              draggable={false}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
      <figcaption className="border-t border-white/10 px-5 py-4 text-xs leading-6 text-white/45">
          비식별 처리 이미지 — 질문 입력, 결과 검토, SQL 확인을 하나의 분석 흐름으로 배치
      </figcaption>
    </figure>
  )
}

function DeepQFlowCard({ title, nodes }: { title: string; nodes: string[] }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
      <h3 className="text-xl font-normal text-white">{title}</h3>
      <ol className="mt-6 space-y-3">
        {nodes.map((node, index) => (
          <li key={node} className="grid grid-cols-[34px_1fr] gap-3 text-sm leading-6">
            <span className="text-white/30">{String(index + 1).padStart(2, "0")}</span>
            <span className="break-keep text-white/60">{node}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

function DeepQFlowLine({ nodes }: { nodes: string[] }) {
  return (
    <div className="rounded-lg border border-white/10 bg-black/25 p-4">
      <div className="flex flex-wrap items-center gap-3">
        {nodes.map((node, index) => (
          <div key={`${node}-${index}`} className="flex items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs leading-5 text-white/65 md:text-sm">
              {node}
            </span>
            {index < nodes.length - 1 ? <span className="text-white/25">→</span> : null}
          </div>
        ))}
      </div>
    </div>
  )
}

function DeepQSortingMap() {
  const groups = [
    {
      title: "Start",
      items: ["Login", "Intro", "Database Understanding"],
    },
    {
      title: "Ask",
      items: ["First Question", "Analysis Workspace", "Recent Conversations"],
    },
    {
      title: "Understand",
      items: ["Answer Preparation Panel", "Schema Search", "Similar Query Search", "Metadata Loading"],
    },
    {
      title: "Review",
      items: ["Result Table", "Chart", "View SQL", "Summary Explanation"],
    },
    {
      title: "Continue",
      items: ["Suggested Questions", "Follow-up Input"],
    },
    {
      title: "Operate",
      items: [
        "Admin Dashboard",
        "User Management",
        "Conversation Monitoring",
        "Response Detail",
        "Token / Cost Usage",
      ],
    },
  ]

  return (
    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {groups.map((group) => (
        <div key={group.title} className="rounded-lg border border-white/10 bg-black/20 p-5">
          <p className="text-[12px] uppercase tracking-[0.18em] text-white/35">
            {group.title}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-xs leading-5 text-white/60"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function DeepQProductStructureVisual() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <figure className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
        <div className="bg-black/30 p-3">
          <img
            src={deepqScreens.resultChart}
            alt="DeepQ 사용자 분석 경험 화면"
            loading="eager"
            decoding="async"
            draggable={false}
            className="h-auto w-full rounded-md object-contain"
          />
        </div>
        <figcaption className="border-t border-white/10 px-5 py-4 text-xs leading-6 text-white/45">
          비식별 처리 이미지 — 질문, 결과, 차트, 과정 패널이 이어지는 사용자 분석 흐름
        </figcaption>
      </figure>
      <figure className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
        <div className="bg-black/30 p-3">
          <img
            src={deepqScreens.adminDashboard}
            alt="DeepQ 관리자 운영 콘솔 화면"
            loading="eager"
            decoding="async"
            draggable={false}
            className="h-auto w-full rounded-md object-contain"
          />
        </div>
        <figcaption className="border-t border-white/10 px-5 py-4 text-xs leading-6 text-white/45">
          비식별 처리 이미지 — 사용자, 사용량, 오류, 비용을 함께 관찰하는 관리자 운영 흐름
        </figcaption>
      </figure>
    </div>
  )
}

function CompactFigure({
  src,
  alt,
  caption,
}: {
  src: string
  alt: string
  caption: string
}) {
  const imageLoading = src.startsWith(deepqImageBase) ? "eager" : "lazy"

  return (
    <figure className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
      <div className="aspect-[4/3] bg-black/30 p-2">
        <img
          src={src}
          alt={alt}
          loading={imageLoading}
          decoding="async"
          draggable={false}
          className="h-full w-full rounded-md object-contain"
        />
      </div>
      <figcaption className="border-t border-white/10 px-4 py-3 text-xs leading-5 text-white/45">
        {caption}
      </figcaption>
    </figure>
  )
}

function GuardianHeroVisual() {
  return (
    <figure className="mt-12 overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] shadow-card 2xl:-mx-[120px]">
      <div className="grid gap-0 bg-black/30 p-3 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="min-w-0 overflow-hidden rounded-md border border-white/10 bg-white">
          <img
            src={guardianScreens.dashboard}
            alt="Guardian 대시보드 화면"
            loading="eager"
            decoding="async"
            draggable={false}
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="min-w-0 overflow-hidden rounded-md border border-white/10 bg-white lg:-ml-px">
          <img
            src={guardianScreens.violations}
            alt="Guardian 실시간 위반 화면"
            loading="eager"
            decoding="async"
            draggable={false}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
      <figcaption className="border-t border-white/10 px-5 py-4 text-xs leading-6 text-white/45">
        비식별 처리 이미지 — 조직 전체 위험 흐름과 고위험 이벤트 처리 화면을 함께 배치
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
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
      <h3 className="break-keep text-xl font-normal text-white">{title}</h3>
      {intro ? <p className="mt-4 text-sm leading-7 text-white/45">{intro}</p> : null}
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="break-keep text-sm leading-7 text-white/60">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function NumberedList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
      <h3 className="text-xl font-normal text-white">{title}</h3>
      <ol className="mt-6 space-y-4">
        {items.map((item, index) => (
          <li key={item} className="grid grid-cols-[42px_1fr] gap-4 text-sm leading-7">
            <span className="text-white/35">{String(index + 1).padStart(2, "0")}</span>
            <span className="break-keep text-white/60">{item}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// STEP Lifelong Education Platform Case Study
// ─────────────────────────────────────────────────────────────

function StepCaseStudy() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main>
        <StepHeroSection />
        <StepProblemSection />
        <HypothesisSection
          number="01-1 / Hypothesis"
          title="탐색 구조 문제를 3가지 검증 가설로 정의했다"
          description="IA 재구성·결정 지원·학습 지속 3가지 과제를 If-Then 가설로 바꾸고, 각 가설을 검증할 운영 지표를 사전에 설정했다."
          hypotheses={stepHypotheses}
        />
        <StepDiscoverySection />
        <StepCaptureStrategySection />
        <StepWorkflowSection />
        <StepIaSection />
        <StepKeyDecisionsSection />
        <StepKeyScreensSection />
        <StepTradeOffSection />
        <StepCollaborationSection />
        <StepOutcomeSection />
        <StepReflectionSection />
      </main>
      <Footer />
    </div>
  )
}

function StepHeroSection() {
  const tags = [
    "평생교육 포털",
    "IA Structuring",
    "Learner UX",
    "Responsive IA",
    "Key Screen Design",
    "Production Capture Review",
  ]

  return (
    <section className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-24 lg:py-32">
      <Link
        href="/work"
        className="inline-flex text-sm font-normal text-white/45 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        ← Back to Work
      </Link>
      <p className="mt-12 text-[12px] font-normal uppercase tracking-[0.18em] text-white/35">
        02 / Lifelong Education Platform UX
      </p>
      <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_0.5fr] lg:items-end">
        <div>
          <h1 className="max-w-5xl break-keep text-[clamp(2.45rem,8.3vw,76px)] font-normal leading-[1.08] text-white">
            콘텐츠가 넘쳐도,<br />
            학습자는 왜 <br className="sm:hidden" />
            다음 행동을 <br className="sm:hidden" />
            찾지 못했을까?
          </h1>
          <p className="mt-6 break-keep text-lg font-normal leading-8 text-white/55">
            STEP Lifelong Education Platform
          </p>
          <p className="mt-2 text-base font-normal leading-7 text-white/38">
            From Content-heavy Portal to Learner-centered Education Journey
          </p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
          <dl className="space-y-5">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-white/35">Role</dt>
              <dd className="mt-2 break-keep text-sm leading-6 text-white/60">
                UX/UI Design · IA Structuring · Design Handoff
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-white/35">Scope</dt>
              <dd className="mt-2 break-keep text-sm leading-6 text-white/60">
                Home · Search · Course Flow · My Learning · Wiki · Responsive Review
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-white/35">Evidence</dt>
              <dd className="mt-2 break-keep text-sm leading-6 text-white/60">
                운영 화면 고화질 캡처 · IA / GNB / 검색 / 목록 / 상세 / 모바일 메뉴
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="mt-10 max-w-4xl space-y-5 text-base leading-8 text-white/60 md:text-lg">
        <p className="break-keep">
          STEP은 단일 교육 사이트보다 여러 학습 서비스가 연결된 공공 포털에 가까웠습니다.
          이러닝, K-디지털, 가상훈련, 에듀테크+, 위키, 커뮤니티, 업무지원까지
          서로 다른 목적의 기능이 한 화면 체계 안에 공존했습니다.
        </p>
        <p className="break-keep">
          검토한 지점은 콘텐츠 양보다, 학습자가 과정을 찾고, 비교하고, 신청하고,
          이후 학습을 이어갈 수 있도록 화면과 메뉴의 순서를 정리하는 것이었습니다.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <TagText key={tag}>{tag}</TagText>
        ))}
      </div>
      <StepHeroVisual />
    </section>
  )
}

function StepHeroVisual() {
  return (
    <figure className="mt-12 w-full min-w-0 max-w-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] shadow-card 2xl:-mx-[120px]">
      <div className="grid items-start gap-3 bg-black/30 p-3 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="min-w-0 max-w-full overflow-hidden rounded-md border border-white/10 bg-white">
          <img
            src={stepScreens.home}
            alt="STEP 운영 홈 고화질 캡처 화면"
            loading="eager"
            decoding="async"
            draggable={false}
            className="block h-auto w-full max-w-full object-contain"
          />
        </div>
        <div className="grid min-w-0 content-start gap-3">
          <div className="min-w-0 max-w-full overflow-hidden rounded-md border border-white/10 bg-white">
            <img
              src={stepScreens.sitemap}
              alt="STEP 전체 메뉴 IA 고화질 캡처 화면"
              loading="eager"
              decoding="async"
              draggable={false}
              className="block h-auto w-full max-w-full object-contain"
            />
          </div>
          <div className="min-w-0 max-w-full overflow-hidden rounded-md border border-white/10 bg-white">
            <img
              src={stepScreens.allCourses}
              alt="STEP 이러닝 과정 목록 고화질 캡처 화면"
              loading="eager"
              decoding="async"
              draggable={false}
              className="block h-auto w-full max-w-full object-contain"
            />
          </div>
        </div>
      </div>
      <figcaption className="border-t border-white/10 px-5 py-4 text-xs leading-6 text-white/45">
        고화질 캡처 화면 — 홈, 전체 메뉴 IA, 과정 목록을 연결해 학습자가 어디서 시작하고 어떻게 탐색하는지 보여주는 구조
      </figcaption>
    </figure>
  )
}

function StepProblemSection() {
  const problems = [
    {
      title: "탐색 기준의 분산",
      body: "이러닝, K-디지털, 가상훈련, 추천테마 등 콘텐츠 유형이 많아 사용자가 어디서 탐색을 시작해야 할지 확인하기 어려웠습니다.",
    },
    {
      title: "수강 결정 정보의 흩어짐",
      body: "과정 목록에서 교육비, 지원 기기, 운영사, 수료 여부 같은 수강 결정 근거가 여러 단계에 분산되어 있었습니다.",
    },
    {
      title: "학습 지속 과정의 단절",
      body: "수강 이후 진도, 성적, 수료증, 후기 관리가 분리되어 있어 다음에 해야 할 행동을 확인하기 어려웠습니다.",
    },
    {
      title: "사용자 유형별 인증 복잡성",
      body: "일반 학습자, 기업 담당자, 실무 담당자 등 사용자 유형에 따라 인증 조건과 가입 절차가 달라 진입 자체에 마찰이 생겼습니다.",
    },
  ]

  return (
    <CaseSection
      number="01 / Problem Definition"
      title="기능 수보다 탐색과 신청 과정의 분산이 드러났다"
      description="STEP에는 필요한 기능이 이미 많았습니다. 다만 사용자가 '다음에 무엇을 해야 하는가'를 화면 안에서 찾기 어려웠습니다."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {problems.map((p) => (
          <DefinitionCard key={p.title} title={p.title} body={p.body} />
        ))}
      </div>
      <ClosingText>
        각 항목은 "기능이 없다"보다 "사용자가 다음 행동을 찾기 어렵다"는
        관점에서 재정의했습니다. 이것이 기능 추가가 아닌 구조 재설계로 방향을 잡은 근거였습니다.
      </ClosingText>
    </CaseSection>
  )
}

function StepDiscoverySection() {
  const original = [
    "강의 (이러닝)",
    "K-디지털",
    "추천테마",
    "가상훈련",
    "에듀테크+",
    "위키",
    "커뮤니티",
    "업무지원",
    "게시판",
    "인증/회원",
    "마이페이지",
  ]

  const restructured = [
    {
      stage: "Explore",
      label: "탐색 진입",
      items: ["메인", "통합검색", "카테고리", "추천/인기/신규 과정"],
    },
    {
      stage: "Compare",
      label: "비교·조건 탐색",
      items: ["과정 목록", "필터", "카드 정보", "미리보기"],
    },
    {
      stage: "Decide",
      label: "수강 결정",
      items: ["과정 상세", "학습시간", "운영사", "수료증", "수강신청"],
    },
    {
      stage: "Continue",
      label: "학습 지속",
      items: ["마이페이지", "진도율", "학습하기", "성적", "수료증", "후기"],
    },
    {
      stage: "Extend",
      label: "지식 확장",
      items: ["위키", "칼럼", "멘토링", "커뮤니티", "이벤트"],
    },
    {
      stage: "Support",
      label: "운영·인증 지원",
      items: ["로그인", "회원가입", "인증", "업무지원", "게시판"],
    },
  ]

  return (
    <CaseSection
      number="02 / Discovery & Structuring"
      title="기존 기능을 학습자의 행동 목적 기준으로 재분류했다"
      description="STEP은 다양한 기능이 각자 독립적으로 구성된 포털이었습니다. 처음부터 화면을 새로 그리기보다, 기존 기능과 화면을 학습자의 행동 목적 기준으로 먼저 재분류했습니다."
    >
      <div className="mb-8 rounded-lg border border-white/10 bg-white/[0.035] p-6">
        <p className="text-[11px] uppercase tracking-[0.16em] text-white/35">기존 기능 단위</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {original.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-sm text-white/55"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-3 text-white/25">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs uppercase tracking-widest">학습자 행동 목적 기준으로 재분류</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {restructured.map((group) => (
          <div
            key={group.stage}
            className="rounded-lg border border-white/10 bg-white/[0.035] p-5"
          >
            <div className="flex items-baseline gap-3">
              <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[11px] font-normal uppercase tracking-widest text-accent">
                {group.stage}
              </span>
              <span className="text-sm text-white/45">{group.label}</span>
            </div>
            <ul className="mt-4 space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="text-sm leading-6 text-white/60">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <ClosingText>
        기능을 줄이기보다, 사용자가 과정을 찾고·비교하고·신청하고·이어서 학습하고·지식을
        확장하는 순서에 맞게 정보 구조를 다시 정리했습니다.
      </ClosingText>
    </CaseSection>
  )
}

function StepScreenFigure({
  screen,
  compact = false,
}: {
  screen: StepScreenItem
  compact?: boolean
}) {
  const isPhone = screen.size === "phone"
  const figureClass = [
    "min-w-0 overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]",
    screen.size === "wide" ? "md:col-span-2" : "",
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <figure className={figureClass}>
      <div className={compact ? "min-w-0 bg-black/30 p-3" : "min-w-0 bg-black/30 p-4"}>
        {isPhone ? (
          <div className="mx-auto max-w-[250px] rounded-[28px] border border-white/15 bg-[#101010] p-2 shadow-card">
            <div className="overflow-hidden rounded-[22px] bg-white">
              <img
                src={screen.src}
                alt={screen.alt}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="block h-auto w-full max-w-full object-contain"
              />
            </div>
          </div>
        ) : (
          <div className="min-w-0 max-w-full overflow-hidden rounded-md border border-white/10 bg-white">
            <img
              src={screen.src}
              alt={screen.alt}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="block h-auto w-full max-w-full object-contain"
            />
          </div>
        )}
      </div>
      <figcaption className="border-t border-white/10 px-5 py-4">
        <p className="text-[11px] uppercase tracking-[0.14em] text-white/35">{screen.label}</p>
        <p className="mt-1.5 break-keep text-sm font-normal leading-6 text-white">{screen.title}</p>
        <p className="mt-2 break-keep text-xs leading-5 text-white/40">{screen.caption}</p>
      </figcaption>
    </figure>
  )
}

function StepCaptureStrategySection() {
  const capturePoints = [
    {
      title: "IA Evidence",
      body: "전체 메뉴와 GNB 메가메뉴를 함께 캡처해, 학습 서비스가 어떤 상위 구조로 묶이는지 확인했습니다.",
    },
    {
      title: "Decision Flow Evidence",
      body: "검색 자동완성, 과정 목록, 과정 상세를 한 절차로 묶어 찾기 → 비교하기 → 신청하기를 설명할 수 있게 했습니다.",
    },
    {
      title: "Responsive Evidence",
      body: "모바일 홈과 메뉴를 별도 캡처해, 작은 화면에서 포털 IA가 어떻게 재배치되는지 함께 보여줍니다.",
    },
    {
      title: "Production Evidence",
      body: "운영 화면 기준의 고화질 PNG를 사용해 디자인 산출물이 실제 서비스 구조로 연결된 맥락을 보강했습니다.",
    },
  ]

  const evidenceScreens: StepScreenItem[] = [
    {
      label: "IA / All Menu",
      title: "전체 메뉴에서 서비스 축을 먼저 확인",
      caption: "고화질 캡처 화면 — 이러닝, K-디지털, 가상훈련, 에듀테크+, 위키, 커뮤니티가 한 포털 안에서 어떻게 묶이는지 보여주는 IA 화면",
      src: stepScreens.sitemap,
      alt: "STEP 전체 메뉴 IA 고화질 캡처 화면",
    },
    {
      label: "IA / GNB",
      title: "상위 메뉴와 과정 탐색의 연결 구조",
      caption: "고화질 캡처 화면 — 메가메뉴에서 과정 탐색과 서비스 진입이 어떻게 분리되는지 확인할 수 있는 화면",
      src: stepScreens.megamenu,
      alt: "STEP GNB 메가메뉴 고화질 캡처 화면",
    },
    {
      label: "Search / Entry",
      title: "검색을 탐색 시작점으로 보강",
      caption: "고화질 캡처 화면 — 사용자가 정확한 과정명을 몰라도 추천 키워드와 결과 후보로 탐색을 시작할 수 있게 한 검색 구조",
      src: stepScreens.search,
      alt: "STEP 검색 자동완성 고화질 캡처 화면",
    },
    {
      label: "Mobile / IA",
      title: "모바일에서는 포털 구조를 접이식 메뉴로 재배치",
      caption: "고화질 캡처 화면 — 데스크톱 IA를 작은 화면에서도 잃지 않도록 주요 서비스 진입을 메뉴 구조로 재정리한 화면",
      src: stepScreens.mobileMenu,
      alt: "STEP 모바일 메뉴 고화질 캡처 화면",
      size: "phone",
    },
  ]

  return (
    <CaseSection
      number="03 / Capture Evidence"
      title="캡처 화면은 IA와 학습 절차를 설명하는 근거로 선별했다"
      description="STEP은 긴 포털 화면과 여러 메뉴 체계가 함께 작동하는 서비스입니다. 화면을 단순 나열하기보다, IA와 학습 결정 과정을 확인할 수 있는 장면을 우선 캡처했습니다."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {capturePoints.map((point) => (
          <DefinitionCard key={point.title} title={point.title} body={point.body} />
        ))}
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {evidenceScreens.map((screen) => (
          <StepScreenFigure key={screen.label} screen={screen} compact />
        ))}
      </div>
      <ClosingText>
        고화질 캡처는 단순한 화면 나열로 두지 않고, 사용자가 포털에서 길을 찾고 수강 여부를
        검토하는 구조를 설명하기 위한 근거로 사용했습니다.
      </ClosingText>
    </CaseSection>
  )
}

function StepWorkflowSection() {
  const stages = [
    {
      stage: "탐색",
      question: "내가 들을 만한 과정은 어디에 있는가?",
      surfaces: "메인 · 검색 · 카테고리 · 추천/인기",
    },
    {
      stage: "비교·검토",
      question: "이 과정이 내 목적과 조건에 맞는가?",
      surfaces: "목록 · 필터 · 카드 정보 · 미리보기",
    },
    {
      stage: "신청",
      question: "지금 바로 신청해도 되는가?",
      surfaces: "상세 · 수강신청 CTA · 운영사 · 수료증",
    },
    {
      stage: "학습 지속",
      question: "내가 이어서 해야 할 학습은 무엇인가?",
      surfaces: "마이페이지 · 진도율 · 학습하기",
    },
    {
      stage: "수료·후기",
      question: "성적, 수료증, 후기는 어디서 처리하는가?",
      surfaces: "성적 · 수료증 발급 · 수강후기",
    },
    {
      stage: "지식 공유",
      question: "더 배우거나 질문할 수 있는 공간이 있는가?",
      surfaces: "위키 · 커뮤니티 · 멘토링 · 이벤트",
    },
  ]

  return (
    <CaseSection
      number="04 / User Workflow Analysis"
      title="학습자의 질문을 기준으로 탐색과 신청 단계를 정리했다"
      description="각 단계에서 사용자가 실제로 던지는 질문을 기준으로 절차를 재구성했습니다. 이 질문들이 화면 구조를 결정하는 기준이 되었습니다."
    >
      <div className="space-y-3">
        {stages.map((s, i) => (
          <div
            key={s.stage}
            className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.035] p-5 md:grid-cols-[auto_1fr_1fr]"
          >
            <div className="flex items-center gap-3 md:block">
              <span className="text-[11px] uppercase tracking-widest text-white/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="ml-2 text-sm font-normal text-white md:ml-0 md:mt-2 md:block">
                {s.stage}
              </span>
            </div>
            <p className="break-keep text-sm leading-7 text-white/65 md:border-l md:border-white/10 md:pl-5">
              "{s.question}"
            </p>
            <p className="break-keep text-sm leading-7 text-white/38 md:border-l md:border-white/10 md:pl-5">
              {s.surfaces}
            </p>
          </div>
        ))}
      </div>
    </CaseSection>
  )
}

function StepIaSection() {
  const groups = [
    {
      title: "Learning Discovery",
      sub: "탐색 진입",
      items: ["메인", "통합검색", "카테고리", "추천 과정", "인기 과정", "신규 과정"],
    },
    {
      title: "Course Decision",
      sub: "수강 결정",
      items: ["과정 목록", "필터 탐색", "과정 상세", "미리보기", "수강신청"],
    },
    {
      title: "Learning Management",
      sub: "학습 관리",
      items: ["마이페이지", "진도율", "학습하기", "성적", "수료증", "수강후기"],
    },
    {
      title: "Knowledge Community",
      sub: "지식 확장",
      items: ["위키", "칼럼", "멘토링", "커뮤니티", "이벤트", "설문"],
    },
    {
      title: "Operational Support",
      sub: "운영·인증",
      items: ["로그인", "회원가입", "인증", "업무지원", "게시판"],
    },
  ]

  return (
    <CaseSection
      number="05 / IA & Product Structure"
      title="포털 기능을 학습 여정과 운영 지원 영역으로 나눠 정리했다"
      description="정보 구조는 기능 목록보다, 사용자가 언제 무엇을 필요로 하는지를 기준으로 재편성했습니다."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div key={g.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
            <p className="text-[11px] uppercase tracking-[0.16em] text-white/35">{g.sub}</p>
            <h3 className="mt-2 text-base font-normal text-white">{g.title}</h3>
            <ul className="mt-4 space-y-2">
              {g.items.map((item) => (
                <li key={item} className="text-sm leading-6 text-white/55">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <ClosingText>
        기능을 더 넣기보다, 정보가 놓이는 순서를 다시 잡는 것이 핵심이었습니다.
        사용자가 어떤 정보를 먼저 보고 어떤 행동으로 이어져야 하는지를 기준으로
        화면 구조를 정리했습니다.
      </ClosingText>
    </CaseSection>
  )
}

function StepKeyDecisionsSection() {
  const decisions = [
    {
      number: "Decision 01",
      title: "메인을 진입 목적별 허브로 재구성",
      body: "이어서 학습하기, 인기 과정, 추천 과정, 새로 올라온 과정, 공지/이벤트/위키를 진입 목적에 따라 분리 배치했습니다. 전체 콘텐츠를 한 번에 보여주기보다, 사용자가 지금 어떤 행동을 원하는지에 따라 이동할 수 있는 구조로 설계했습니다.",
      tags: ["이어서 학습하기", "인기 과정", "추천 과정", "공지/이벤트"],
    },
    {
      number: "Decision 02",
      title: "과정 목록은 탐색 조건과 비교 정보를 함께 제공",
      body: "교육비, 교육구분, 지원기기 필터와 카드/리스트 전환, 미리보기, 수강신청 CTA를 목록 단계에서 제공해 비교에 필요한 정보를 앞단에 배치했습니다. 상세 화면까지 가지 않고도 핵심 조건을 비교할 수 있도록 했습니다.",
      tags: ["교육비 필터", "교육구분", "지원기기", "미리보기 CTA"],
    },
    {
      number: "Decision 03",
      title: "상세 화면은 수강 결정을 위한 근거를 한 화면에 정리",
      body: "운영사, 학습시간, 과정 소개, 학습 목차, 수료증 발급 여부, 관련 과정, 수강신청을 수강 결정 단계에 맞게 배치했습니다. 상세 화면은 소개 페이지보다 수강 조건을 검토하는 화면으로 설계했습니다.",
      tags: ["운영사 정보", "수료증 발급", "관련 과정", "수강신청 CTA"],
    },
    {
      number: "Decision 04",
      title: "마이페이지는 기록 확인보다 다음 행동 중심으로 구성",
      body: "학습하기 버튼, 진도율, 성적, 수료증, 수강후기를 이어서 해야 할 행동 순서에 맞게 배치했습니다. 단순 수강 이력 확인 화면보다 학습 관리 허브에 가깝게 설계했습니다.",
      tags: ["이어서 학습하기", "진도율", "수료증", "패키지 과정"],
    },
    {
      number: "Decision 05",
      title: "위키·커뮤니티는 학습 이후 지식 확장 흐름으로 연결",
      body: "학습 경험이 과정 수강에서 끝나지 않도록 칼럼, 멘토링, 공지, 이벤트, 설문으로 이어지는 구조를 함께 설계했습니다. 각 채널은 독립적인 기능보다 학습 이후 참여 경로의 일부로 정의했습니다.",
      tags: ["위키", "칼럼", "멘토링", "커뮤니티"],
    },
  ]

  return (
    <CaseSection
      number="06 / Key UX Decisions"
      title="각 화면은 사용자의 결정 단계에 맞춰 구성했다"
      description="각 화면 구성은 기능 배치보다 '이 단계에서 사용자가 무엇을 확인해야 하는가'를 기준으로 설계했습니다."
    >
      <div className="space-y-5">
        {decisions.map((d) => (
          <div key={d.number} className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
            <p className="text-[11px] uppercase tracking-[0.16em] text-white/35">{d.number}</p>
            <h3 className="mt-3 break-keep text-[17px] font-normal leading-7 text-white">
              {d.title}
            </h3>
            <p className="mt-4 break-keep text-sm leading-7 text-white/60">{d.body}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {d.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/45"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </CaseSection>
  )
}

function StepKeyScreensSection() {
  const screens: StepScreenItem[] = [
    {
      label: "01 / Home Entry",
      title: "홈은 학습 진입 허브",
      caption:
        "고화질 캡처 화면 — 학습자가 이어서 학습할지, 새 과정을 찾을지, 추천/인기 과정을 볼지 먼저 선택하게 하는 진입 구조",
      src: stepScreens.home,
      alt: "STEP 메인 홈 고화질 캡처 화면",
      size: "wide",
    },
    {
      label: "02 / Search Entry",
      title: "정확한 과정명을 몰라도 탐색을 시작할 수 있는 검색",
      caption:
        "고화질 캡처 화면 — 추천 키워드와 결과 후보를 함께 보여줘 사용자의 첫 탐색 비용을 낮춘 구조",
      src: stepScreens.search,
      alt: "STEP 검색 자동완성 고화질 캡처 화면",
    },
    {
      label: "03 / Course List",
      title: "조건 탐색과 비교 정보를 목록 단계에 배치",
      caption:
        "고화질 캡처 화면 — 과정 목록에서 카테고리, 필터, 카드 정보를 함께 보며 비교할 수 있게 한 탐색 화면",
      src: stepScreens.allCourses,
      alt: "STEP 과정 목록 고화질 캡처 화면",
    },
    {
      label: "04 / Course Detail",
      title: "수강 신청 직전 필요한 결정 근거를 한 화면에",
      caption:
        "고화질 캡처 화면 — 운영사, 학습 시간, 과정 소개, 수강신청 CTA를 수강 결정 흐름에 맞게 정리한 상세 화면",
      src: stepScreens.courseDetail,
      alt: "STEP 과정 상세 고화질 캡처 화면",
    },
    {
      label: "05 / My Learning",
      title: "수강 이력보다 다음 학습 행동 중심",
      caption:
        "운영 참고 화면 — 학습하기, 진도율, 성적, 수료증, 후기처럼 이어서 해야 할 행동을 먼저 확인하는 관리 화면",
      src: stepScreens.myLearning,
      alt: "STEP 마이페이지 학습 관리 화면",
    },
    {
      label: "06 / Edutech Service",
      title: "학습 포털 밖의 확장 서비스도 같은 구조 안에서 연결",
      caption:
        "고화질 캡처 화면 — 에듀테크+처럼 별도 성격의 서비스도 포털 전체 탐색 흐름 안에서 이해되도록 정리한 화면",
      src: stepScreens.edutech,
      alt: "STEP 에듀테크 서비스 고화질 캡처 화면",
    },
    {
      label: "07 / Mobile Home",
      title: "모바일에서도 주요 학습 진입을 유지",
      caption:
        "고화질 캡처 화면 — 작은 화면에서도 학습자가 주요 서비스와 과정 탐색으로 이동할 수 있게 한 모바일 홈 구조",
      src: stepScreens.mobileHome,
      alt: "STEP 모바일 홈 고화질 캡처 화면",
      size: "phone",
    },
    {
      label: "08 / Mobile Menu",
      title: "복잡한 포털 IA를 접이식 메뉴로 재구성",
      caption:
        "고화질 캡처 화면 — 데스크톱의 전체 메뉴 구조를 모바일에서 탐색 가능한 메뉴 체계로 재배치한 화면",
      src: stepScreens.mobileMenu,
      alt: "STEP 모바일 메뉴 고화질 캡처 화면",
      size: "phone",
    },
  ]

  return (
    <CaseSection
      number="07 / Key Screens"
      title="각 화면은 사용자가 확인해야 할 정보로 설명했다"
      description="화면 수보다, 각 화면이 탐색·비교·신청·학습 지속 중 어떤 정보를 제공하는지를 기준으로 선별했습니다."
    >
      <div className="grid gap-8 md:grid-cols-2">
        {screens.map((s) => (
          <StepScreenFigure key={s.label} screen={s} />
        ))}
      </div>
    </CaseSection>
  )
}

function StepTradeOffSection() {
  const cols = [
    {
      title: "제거하지 않은 것",
      items: [
        "다양한 교육 카테고리 구조",
        "기관별 콘텐츠 분류",
        "운영·인증·게시판 기능",
        "복잡한 사용자 유형 처리",
      ],
    },
    {
      title: "재정리한 것",
      items: [
        "화면의 목적과 정보 배치 순서",
        "탐색 → 비교 → 신청 → 지속학습 과정",
        "진입 목적별 메인 구조",
        "다음 행동 중심 마이페이지",
      ],
    },
    {
      title: "선택한 이유",
      items: [
        "공공 포털은 정보를 과감히 제거하기 어렵다",
        "운영 안정성과 사용자 탐색성을 동시에 고려했습니다",
        "미니멀 UI보다 정보가 놓이는 순서를 바꾸는 것이 현실적이었다",
      ],
    },
  ]

  return (
    <CaseSection
      number="08 / Trade-off"
      title="공공 포털의 정보를 사용 목적별로 다시 묶었다"
      description="STEP은 다양한 기관, 과정, 사용자 유형, 운영 기능을 포함해야 했기 때문에 정보를 과감히 제거하기보다 사용 목적별로 재배치했습니다."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {cols.map((col) => (
          <ListCard key={col.title} title={col.title} items={col.items} />
        ))}
      </div>
    </CaseSection>
  )
}

function StepCollaborationSection() {
  return (
    <CaseSection
      number="09 / Collaboration & Handoff"
      title="설계 의도가 구현 화면에 반영되도록 퍼블리싱 협업을 병행했다"
      description="주요 화면 UX/UI 설계를 담당했고, 전체 퍼블리싱은 별도 담당자와 협업했다."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <DefinitionCard
          title="설계 담당 범위"
          body="UX/UI 설계, 정보구조 정리, 주요 화면 디자인, 디자인 핸드오프"
        />
        <DefinitionCard
          title="협업 범위"
          body="퍼블리싱 검수 및 일부 수정 대응 — 디자인 산출물이 실제 화면으로 확장되는 과정에서 스타일 수정과 구현 검수에 참여"
        />
      </div>
      <ClosingText>
        이 케이스는 전체 퍼블리싱 담당 사례로 두기보다, 설계 의도와 구현 결과 사이의
        간격을 줄인 협업 사례로 표현됩니다. 현재 운영 중인 STEP 화면은 협업을 통해
        구현된 결과이며, 본 케이스는 그 중 UX/UI 설계 기여 범위를 중심으로 서술합니다.
      </ClosingText>
      <figure className="mt-8 overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
        <div className="min-w-0 bg-black/30 p-3">
          <div className="min-w-0 max-w-full overflow-hidden rounded-md border border-white/10 bg-white">
            <img
              src={stepScreens.home}
              alt="STEP 운영 중인 서비스 홈 고화질 캡처 화면"
              loading="lazy"
              decoding="async"
              draggable={false}
              className="block h-auto w-full max-w-full object-contain"
            />
          </div>
        </div>
        <figcaption className="border-t border-white/10 px-5 py-4 text-xs leading-6 text-white/45">
          고화질 캡처 화면 — 설계 방향이 실제 운영 포털의 홈 구조로 이어진 맥락
        </figcaption>
      </figure>
    </CaseSection>
  )
}

function StepOutcomeSection() {
  const outcomes = [
    "주요 학습 여정을 탐색, 비교, 신청, 학습 지속, 지식 공유 과정으로 정리",
    "홈, 전체 메뉴, GNB, 검색, 목록, 상세, 모바일 메뉴를 하나의 탐색 시스템으로 연결",
    "과정 목록, 상세, 마이페이지, 위키, 커뮤니티 등 주요 화면 구조 설계",
    "운영 화면 고화질 캡처를 통해 설계 의도와 실제 서비스 구조의 연결 근거 보강",
    "퍼블리싱 검수와 일부 화면 조정을 통해 디자인 산출물이 구현 화면으로 이어지는 과정에 참여",
  ]

  const nextMetrics = [
    "과정 탐색 성공률 — 원하는 과정을 찾는 데 걸리는 단계 수",
    "검색·필터 사용 후 상세 진입률",
    "상세 페이지에서 수강신청 전환율",
    "이어서 학습하기 클릭률",
    "모바일 메뉴에서 주요 서비스 진입률",
    "마이페이지 내 학습하기·수료증·성적 확인 사용률",
    "위키·커뮤니티 재방문 및 참여율",
  ]

  return (
    <CaseSection
      number="10 / Outcome & Next Metrics"
      title="정량 성과 대신 운영 후 검증 지표를 정의했다"
      description="정량 성과를 임의로 만들지 않고, 이 구조 설계가 실제 효과를 냈는지 확인하기 위해 어떤 지표를 봐야 하는지를 정의했습니다."
    >
      <TwoColumn>
        <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <p className="text-[11px] uppercase tracking-[0.16em] text-white/35">Design Outcome</p>
          <ul className="mt-5 space-y-3">
            {outcomes.map((o) => (
              <li key={o} className="break-keep text-sm leading-7 text-white/60">
                {o}
              </li>
            ))}
          </ul>
        </div>
        <NumberedList title="Next Metrics — 운영 후 검증 지표" items={nextMetrics} />
      </TwoColumn>
      <ClosingText>
        위 지표는 측정된 성과값이 아니며 정식 운영 후 확인해야 할 검증 지표입니다.
        이 구조가 실제로 효과가 있었는지는 운영 데이터와 사용자 행동을 통해 확인해야 합니다.
      </ClosingText>
    </CaseSection>
  )
}

function StepReflectionSection() {
  const cols: TradeOff[] = [
    {
      title: "집중한 것",
      items: [
        "복잡한 교육 포털의 기능을 학습 여정 중심으로 재구성",
        "기능 추가가 아닌 정보 구조와 화면 목적의 재정리",
        "전체 메뉴, 검색, 목록, 상세, 모바일 메뉴를 고화질 캡처로 묶어 구조 근거를 보강",
        "공공 포털의 운영 현실을 고려한 현실적 트레이드오프 선택",
      ],
    },
    {
      title: "더 확인해야 할 것",
      items: [
        "실제 학습자가 어떤 기준으로 과정을 비교하고 신청하는지",
        "검색·필터 사용 흐름과 목록 → 상세 진입 패턴",
        "모바일 메뉴에서 원하는 학습 서비스까지 이동하는 실제 경로",
        "마이페이지에서의 실제 학습 지속 행동",
        "위키·커뮤니티 참여 흐름과 재방문 동기",
      ],
    },
    {
      title: "다음 단계",
      items: [
        "운영 데이터 기반 탐색 성공률 측정",
        "상세 페이지 수강 결정 과정 관찰",
        "데스크톱 IA와 모바일 메뉴 간 진입 경로 비교",
        "마이페이지 내 학습 지속 행동 추적",
        "사용자 유형별 인증 흐름 개선 검토",
      ],
    },
  ]

  return (
    <CaseSection
      number="11 / Reflection"
      title="다음 검증 기준은 학습자의 선택 과정으로 정리했다"
      description="이번 프로젝트에서는 복잡한 교육 포털의 기능을 학습 여정 중심으로 재구성하는 데 집중했습니다. 실제 효과는 운영 데이터와 사용자 관찰을 통해 더 확인해야 합니다."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {cols.map((col) => (
          <ListCard key={col.title} title={col.title} items={col.items} />
        ))}
      </div>
      <div className="mt-10 flex justify-start">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-normal text-white/45 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          ← Back to Work
        </Link>
      </div>
    </CaseSection>
  )
}
