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
const captureBase = `${imageBase}/captures`
const guardianSlug = "sapie-guardian"
const guardianImageBase = "/images/guardian"

const caseStudies = [
  {
    slug: dunkinSlug,
    number: "01",
    tag: "AI Decision UX",
    question: "AI가 추천해도,\n점주는 왜 바로 주문하지 못했을까?",
    project: "SPC Dunkin AI Decision UX / Product Structure",
  },
  {
    slug: guardianSlug,
    number: "04",
    tag: "Enterprise AI Security Platform",
    question: "AI 도구를 허용할수록,\n조직은 무엇을 감시하고 통제해야 할까?",
    project: "SAPIE Guardian / Enterprise Gen AI Security Platform",
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
    design: "숫자 나열이 아니라 다음 행동 제시 · 기회손실 표시 · 소진 예상 시간 제공",
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
    body: "숫자는 있는데 판단이 안 된다",
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
    description: "당일 운영 판단을 시작하는 실제 POS 종합현황 화면",
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
    description: "프로모션 손익 판단을 확인하는 실제 화면",
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
    description: "비교 기준을 통해 매장 상태를 판단하는 실제 화면",
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
    description: "PIP AI로 업무 흐름에 재진입하는 실제 모바일 화면",
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
    items: ["피크타임에는 분석보다 즉시 판단과 복구 가능성이 더 중요했기 때문"],
  },
]

const ideationSteps = [
  "데스크 리서치·인터뷰",
  "업무 흐름 기준 아이디어 60개 정리",
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
  "점주가 AI 추천을 거절하거나 수정해야 하는 이유를 화면 안에서 확인할 수 있게 했다.",
  "추천 수치, 근거, 조정, 최종 확인을 하나의 발주 판단 흐름으로 연결했다.",
  "POS는 매장 내 즉시 조치, 모바일은 매장 밖 원격 판단으로 역할을 분리했다.",
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
    title: "잘한 것",
    items: [
      "기능 구현 요청을 점주의 판단 문제로 재정의한 것",
      "AI 추천을 근거·조정·확인 가능한 구조로 바꾼 것",
      "피크타임 판단 속도와 상세 분석 사이의 Trade-off를 명확히 한 것",
      "제한된 일정 안에서 디자인과 반응형 구현 범위를 함께 조율한 것",
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
    items: ["보안 관리자, IT 관리자, 감사 담당자의 판단 흐름 설계"],
  },
  {
    title: "Product Structure",
    items: ["Dashboard → Violation → Policy → Records → Permission으로 이어지는 제품 구조"],
  },
  {
    title: "Governance",
    items: ["AI 사용을 막는 것이 아니라 책임 있게 허용하기 위한 통제 구조"],
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
    items: ["팀 단위 AI 사용과 위반 패턴 확인", "업무 생산성과 보안 리스크 사이에서 판단"],
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
  "전체 사용량보다 위험 흐름을 먼저 보여준다",
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
  "로그가 아니라 판단 가능한 이벤트 단위로 구성한다",
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
  "콘솔 접근 자체를 보안 흐름으로 설계한다",
  "권한 관리와 접속 보안을 분리하지 않는다",
] as const

const guardianCoverageScreens: ScreenItem[] = [
  {
    title: "Dashboard",
    description: "조직 전체 AI 사용과 위반 흐름을 먼저 판단한다.",
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
  "관리자가 전체 로그가 아니라 위험 이벤트와 후속 조치 중심으로 판단할 수 있도록 정보 구조 재설계",
  "메시지·파일·정책·사용자·권한 데이터를 연결해 감사 가능한 운영 흐름 구성",
  "삼성 도입 검토를 전제로, 대기업 조직 구조에 맞는 관리자 권한과 보안 접속 흐름 설계",
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
    title: "잘한 것",
    items: [
      "AI 차단 문제가 아니라 운영 가능한 보안 플랫폼 구조로 문제를 재정의",
      "대시보드, 위반 상세, 정책, 기록, 권한을 하나의 관리 흐름으로 연결",
      "관리자 접속 보안까지 제품 흐름 안에 포함",
      "화면 단위가 아니라 조직 운영 구조 단위로 설계",
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
        "AI 추천을 점주가 검토하고 조정한 뒤 최종 판단할 수 있게 재설계한 Product UX 케이스스터디.",
    }
  }

  if (slug === guardianSlug) {
    return {
      title: "SAPIE Guardian Enterprise Gen AI Security Platform · Kangkeun Park",
      description:
        "삼성 도입 검토를 전제로 AI 사용 현황, 정책, 위반 처리, 감사 기록, 권한 관리를 하나의 운영 콘솔로 설계한 케이스스터디.",
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

  if (slug === guardianSlug) {
    return <GuardianCaseStudy />
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
            AI 도구를 허용할수록, 조직은 무엇을 감시하고 통제해야 할까?
          </h1>
          <p className="mt-8 max-w-3xl text-base font-normal leading-8 text-white/55 md:text-[18px]">
            Enterprise Gen AI Security Platform — Designing visibility, policy,
            audit, and access control for responsible AI usage
          </p>
          <p className="mt-5 max-w-3xl break-keep text-sm leading-7 text-white/45 md:text-base md:leading-8">
            삼성 도입 검토를 위해 설계한 Enterprise Gen AI Security Platform입니다.
            조직이 Gen AI 사용을 단순히 차단하는 것이 아니라, 사용 현황을
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
      title="복잡한 AI 보안 운영을 제품 구조로 설명하는 케이스다"
      description="이 포트폴리오는 많은 프로젝트를 나열하기보다, 복잡한 제품 문제를 깊게 파고드는 방식을 보여주기 위해 4개의 케이스스터디만 선별했습니다."
    >
      <p className="max-w-3xl break-keep text-base leading-8 text-white/55">
        Guardian은 그중 Enterprise AI Security 영역을 보여주는 케이스입니다. AI
        도구 사용이 늘어나는 조직에서, 보안 운영자가 무엇을 보고 어떤 기준으로
        판단하며 사고 이후 무엇을 추적해야 하는지를 제품 구조로 설계했습니다.
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
      title="기업은 AI 사용을 막는 것이 아니라 운영해야 한다"
      description="Gen AI 도구는 이미 업무 안으로 들어오고 있습니다. 문제는 사용 여부가 아니라, 조직이 어떤 사용을 허용하고 어떤 사용을 제한할지 판단할 수 있는 운영 구조가 있는가입니다."
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
      title="보안 관리자는 어떤 정보를 보고 어떤 판단을 해야 하는가"
      description="Guardian의 핵심 사용자는 일반 최종 사용자가 아니라, 조직의 AI 사용 리스크를 관리해야 하는 보안·운영 관리자입니다."
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
      title="문제는 AI 차단이 아니라 운영 가능한 통제 구조의 부재였다"
      description="초기 문제는 AI 도구를 어떻게 막을 것인가처럼 보일 수 있습니다. 하지만 기업 환경에서는 차단만으로 사용 현황, 위반 원인, 사고 이후 추적을 다룰 수 없습니다."
    >
      <SimpleTable
        headers={["기존 접근", "실제 UX 문제"]}
        rows={guardianProblemRows.map(([before, after]) => [before, after])}
      />
      <ClosingText>
        AI 사용 현황, 위반 감지, 정책 설정, 파일·채팅 기록, 권한 관리를 하나의
        관리 흐름으로 재구성했다.
      </ClosingText>
    </CaseSection>
  )
}

function GuardianProductStructureSection() {
  return (
    <CaseSection
      number="05"
      title="제품 구조를 보안 운영 흐름에 맞게 설계했다"
      description="Guardian은 기능 메뉴를 나열하는 방식이 아니라, 관리자가 위험을 발견하고 조치하고 기록으로 남기는 운영 흐름을 기준으로 구조화했습니다."
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
          <GuardianCompactFigure
            key={screen.title}
            src={screen.src}
            alt={screen.alt}
            caption={screen.description}
            fit={screen.type === "desktop" ? "cover" : "contain"}
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
      title="위험을 업무 단위로 다시 분류했다"
      description="보안 리스크를 단순히 위험/정상으로 나누지 않고, 관리자가 실제로 조치할 수 있는 업무 단위로 분류했습니다."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {guardianRiskCards.map((card) => (
          <ListCard key={card.title} title={card.title} items={card.items} />
        ))}
      </div>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <GuardianCompactFigure
          src={guardianScreens.violations}
          alt="Guardian 실시간 위반 화면"
          caption="위험 이벤트를 정책과 상태 기준으로 분류"
        />
        <GuardianCompactFigure
          src={guardianScreens.policy}
          alt="Guardian 정책 관리 화면"
          caption="정책별 위반 건수와 상태를 함께 확인"
        />
        <GuardianCompactFigure
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
      title="첫 화면은 전체 로그가 아니라 대응 우선순위를 보여줘야 했다"
      description="대시보드는 단순 사용량이 아니라, 위반 유형, 부서별 비율, 사용 AI 서비스, 정규화된 위반 TOP 항목을 함께 보여줍니다."
    >
      <ScreenFigure
        src={guardianScreens.dashboard}
        alt="Guardian 대시보드 화면"
        caption="Risk Overview — 조직 전체 AI 사용과 위반 흐름을 한 화면에서 파악하는 대시보드"
        wide
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {guardianRiskOverviewDecisions.map((decision) => (
          <DefinitionCard key={decision} title={decision} body="위험 흐름을 먼저 읽고 상세 이벤트로 이동하게 했다." />
        ))}
      </div>
    </CaseSection>
  )
}

function GuardianViolationTriageSection() {
  return (
    <CaseSection
      number="08"
      title="위반 이벤트는 감지보다 처리 흐름이 중요했다"
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
        <ListCard title="설계 판단" items={[...guardianViolationDecisions]} />
      </TwoColumn>
    </CaseSection>
  )
}

function GuardianPolicyControlSection() {
  return (
    <CaseSection
      number="09"
      title="정책은 관리자가 조정 가능한 조건이어야 했다"
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
          title="설계 포인트"
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
      title="사고 이후에는 메시지와 파일 기록을 추적할 수 있어야 했다"
      description="채팅과 파일 기록은 단순 보관이 아니라 감사와 사고 대응의 근거입니다."
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
          title="설계 포인트"
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
      title="AI 사용 통제는 조직 권한 구조 위에서 작동해야 했다"
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
        <GuardianCompactFigure
          src={guardianScreens.departments}
          alt="Guardian 부서 관리 화면"
          caption="부서 기준 정책 적용 범위"
        />
        <GuardianCompactFigure
          src={guardianScreens.roles}
          alt="Guardian 직급 관리 화면"
          caption="직급 기준 책임 범위"
        />
        <GuardianCompactFigure
          src={guardianScreens.adminDetail}
          alt="Guardian 관리자 상세 정보 패널"
          caption="관리자 상태와 접속 이력"
          fit="contain"
        />
        <GuardianCompactFigure
          src={guardianScreens.login}
          alt="Guardian 관리자 로그인 화면"
          caption="콘솔 진입 전 인증 흐름"
        />
        <GuardianCompactFigure
          src={guardianScreens.otpDevice}
          alt="Guardian OTP 인증 기기 등록 화면"
          caption="관리자 접근을 보호하는 인증 흐름"
        />
      </div>
      <div className="mt-8">
        <ListCard title="설계 판단" items={[...guardianAccessPoints]} />
      </div>
    </CaseSection>
  )
}

function GuardianSystemCoverageSection() {
  return (
    <CaseSection
      number="12"
      title="운영에 필요한 화면 범위를 함께 설계했다"
      description="Guardian은 하나의 대시보드가 아니라, AI 사용을 운영하기 위해 필요한 관리 화면들이 연결된 콘솔입니다."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {guardianCoverageScreens.map((screen) => (
          <GuardianCompactFigure
            key={screen.title}
            src={screen.src}
            alt={screen.alt}
            caption={`${screen.title} — ${screen.description}`}
            fit={screen.type === "desktop" ? "cover" : "contain"}
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
      title="감시처럼 보이지 않게, 통제 가능성을 설계했다"
      description="모든 행동을 감시하는 구조는 사용자 반발을 만들 수 있습니다. 반대로 아무것도 보지 않으면 조직은 AI 사용 리스크를 통제할 수 없습니다."
    >
      <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6 md:p-8">
        <p className="max-w-3xl break-keep text-[clamp(1.7rem,4vw,3rem)] font-normal leading-tight text-white">
          개인의 모든 행동이 아니라, 정책 위반 가능성이 있는 메시지·파일·AI 사용
          이벤트를 중심으로 구조화했다.
        </p>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {guardianTradeOffs.map((item) => (
          <ListCard key={item.title} title={item.title} items={item.items} />
        ))}
      </div>
      <ClosingText>
        차단, 경고, 상세 확인, 내보내기, 권한 관리가 이어지는 운영 흐름을 설계해
        보안팀이 대응 가능한 단위로 위험을 다룰 수 있게 했다.
      </ClosingText>
    </CaseSection>
  )
}

function GuardianOutcomeSection() {
  return (
    <CaseSection
      number="14"
      title="정식 운영 성과보다 제품 구조로 무엇을 만들었는지 정리했다"
      description="운영 성과 수치를 주장하기보다, 제품 구조상 어떤 운영 흐름을 가능하게 했는지 중심으로 정리합니다."
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
      title="제품화 관점에서 더 고도화할 것"
      description="회고는 감상보다 다음 판단 기준이어야 한다. 운영 구조를 확장할 때 어떤 부분을 더 검증하고 세분화해야 하는지로 정리했다."
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
          <h1 className="max-w-5xl break-keep text-[clamp(2.45rem,8.6vw,76px)] font-normal leading-[1.08] text-white">
            AI가 추천해도, 점주는 왜 바로 주문하지 못했을까?
          </h1>
          <p className="mt-8 max-w-2xl text-base font-normal leading-8 text-white/55 md:text-[18px]">
            AI Decision UX — 점주가 추천을 검토하고 조정하는 운영 판단 구조
          </p>
          <p className="mt-4 max-w-2xl break-keep text-sm leading-7 text-white/45 md:text-base md:leading-8">
            AI 기능 제작 사례가 아니라, 추천의 근거와 조정 흐름을 설계해 점주의
            최종 판단권을 유지한 Product UX 케이스다.
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
      title="데이터는 있었지만, 점주의 판단 흐름에는 닿지 않았다"
      description="SPC 던킨 매장은 본사, 주문, 생산, 매출 데이터를 이미 갖고 있었다. 문제는 데이터의 존재가 아니라, 점주가 운영 중 그 데이터를 판단 가능한 순서로 받지 못한다는 점이었다."
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
      title="문제는 AI 기능이 아니라, 추천을 검토할 근거가 없다는 점이었다"
      description="제한된 리소스와 짧은 일정 안에서 PoC 방향을 다시 정리해야 했다. 핵심 문제는 AI 추천을 더 많이 만드는 것이 아니라, 점주가 추천을 믿거나 수정할 기준을 갖는 것이었다."
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
      title="현장에서는 숫자보다 판단 기준이 부족했다"
      description="인터뷰, FGI, 카드소팅에서 반복된 문제는 기능 부족보다 신뢰, 지연, 책임의 문제였다. 점주는 숫자를 보는 것보다 그 숫자로 무엇을 해야 하는지 알고 싶어 했다."
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
      title="점주의 하루는 판단해야 하는 순간마다 멈췄다"
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
      title="AI 추천은 근거, 조정, 복구 장치와 함께 제공되어야 했다"
      description="현장에서 확인한 불신과 판단 지연을 화면의 기준, 수정 흐름, 되돌리기 장치로 연결했다."
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
            <p className="mt-5 break-keep text-2xl font-normal leading-tight text-white">
              {pattern.principle}
            </p>
            <p className="mt-5 break-keep text-sm leading-7 text-white/55">{pattern.design}</p>
          </div>
        ))}
      </div>
      <ClosingText>
        AI가 결정을 대신하는 것이 아니라, 점주가 더 나은 결정을 할 수 있도록
        판단 기준과 복구 장치를 설계했다.
      </ClosingText>
    </CaseSection>
  )
}

function RequirementMappingSection() {
  return (
    <CaseSection
      number="06"
      title="요구사항을 기능이 아니라 검증 가능한 판단 흐름으로 바꿨다"
      description="요구사항은 기능 목록으로 끝내지 않았다. 점주가 어디에서 멈추는지, 어떤 지표로 운영 검증이 필요한지 함께 매핑했다."
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
      title="기능 메뉴를 점주의 판단 순서로 다시 묶었다"
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
      title="AI가 결정하지 않고, 점주가 판단할 수 있게 했다"
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
        body="AI 추천을 믿을 근거를 화면 안에 넣었다. 추천량, 오차 기준, 에이전트 판단 로그를 통해 점주가 AI의 제안을 검토할 수 있게 했다."
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
          body="점주 사용 데이터가 쌓이면 본사는 33개 점포의 운영 패턴을 집계할 수 있다. 발주 추천의 적합성, 폐기율 변화, 공급망 조정 여부를 확인할 기반 데이터로 연결되도록 설계했다."
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
          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
            <h3 className="text-xl font-normal text-white">크로스 플랫폼 데이터 흐름</h3>
            <div className="mt-6 grid gap-3 lg:grid-cols-3">
              {crossPlatformFlows.map((flow) => (
                <div
                  key={flow.from}
                  className="grid gap-3 rounded-lg border border-white/10 bg-black/20 p-4 text-sm leading-6 text-white/62"
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
      title="화면은 다음 행동을 결정하는 증거가 되어야 했다"
      description="각 화면은 정보를 보여주는 단위가 아니라, 점주가 다음 결정을 내리는 단위로 정리했다."
    >
      <div className="space-y-10">
        <ScreenFigure
          src={`${imageBase}/pos-dashboard-overview.png`}
          alt="POS 종합현황 대시보드"
          caption="디자인 파일 이미지 — 당일 매출, 추천 행동, 손실 가능성을 같은 판단 화면으로 묶었다."
          wide
        />
        <div className="grid gap-4 lg:grid-cols-2">
          <ScreenFigure
            src={`${imageBase}/pos-production-management.png`}
            alt="POS 생산관리 화면"
            caption="디자인 파일 이미지 — 소진 예상과 생산 지시를 같은 흐름에 놓아 즉시 조치 여부를 판단하게 했다."
          />
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
        <ScreenFigure
          src={`${imageBase}/pos-ai-realtime-status.png`}
          alt="POS AI 실시간 현황 화면"
          caption="디자인 파일 이미지 — 에이전트별 상태와 추천 근거를 통해 AI 판단을 추적하게 했다."
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
      title="모든 데이터를 보여주는 대신 즉시 판단을 남겼다"
      description="모든 데이터를 보여주지 않기로 결정했다. 고급 커스터마이징과 일부 상세 분석을 줄이고, 바쁜 아침에 점주가 바로 판단해야 하는 정보만 전면에 배치했다."
    >
      <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6 md:p-8">
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
      title="AI와 프론트엔드 구현은 판단 속도를 높이는 도구로 사용했다"
      description="프로젝트는 제한된 일정과 적은 인원 안에서 진행됐다. AI는 결과물 대체가 아니라 리서치 요약, 구조 탐색, 화면 Draft, 프론트엔드 초안 생성에 사용했다."
    >
      <TwoColumn>
        <NumberedList title="아이디에이션 프로세스" items={ideationSteps} />
        <NumberedList title="실행 워크플로우" items={workflowSteps} />
      </TwoColumn>
      <ClosingText>
        AI는 반복과 초안을 맡고, 사람은 문제 정의와 품질 판단을 맡는다. 구현은
        컴포넌트 범위를 좁히고 POS·모바일 반응형 화면을 함께 점검하는 방식으로
        진행했다.
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
      title="비즈니스 성과가 아니라, 검증 가능한 제품 구조를 남겼다"
      description="정식 운영 전 단계이므로 성과 수치가 아니라 UX 구조 변화와 운영 시 추적할 지표로 결과를 정리했다."
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
      title="다음 검증은 추천 수용과 운영 리스크를 기준으로 해야 한다"
      description="PoC에서 확인한 구조는 정식 운영 데이터와 점포별 운영 차이로 다시 검증되어야 한다."
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
          <h2 className="max-w-4xl break-keep text-[clamp(2rem,6vw,52px)] font-normal leading-[1.14] text-white">
            {title}
          </h2>
          <p className="mt-6 max-w-3xl break-keep text-base font-normal leading-8 text-white/55 md:text-[18px]">
            {description}
          </p>
          <div className="mt-10 min-w-0">{children}</div>
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
          className="rounded-lg border border-white/10 bg-white/[0.035] p-6"
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
      <p className="mt-3 break-keep text-sm leading-6 text-white/52">{body}</p>
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
        <p className="break-keep text-[18px] font-normal italic leading-8 text-white/78">
          "{item.quote}"
        </p>
      </blockquote>
    </figure>
  )
}

function BeforeAfterCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
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
      className={`rounded-lg border border-white/10 bg-white/[0.035] p-6 md:p-8 ${
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
    <div className="rounded-lg border border-white/10 bg-black/25 p-5">
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
              loading="lazy"
              decoding="async"
              draggable={false}
              className="h-auto w-full rounded-[20px]"
            />
          </div>
        ) : src ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
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
            className="h-full max-h-[720px] w-full object-cover object-top"
          />
        </div>
        <div className="min-w-0 overflow-hidden rounded-md border border-white/10 bg-white lg:-ml-px">
          <img
            src={guardianScreens.violations}
            alt="Guardian 실시간 위반 화면"
            loading="eager"
            decoding="async"
            draggable={false}
            className="h-full max-h-[720px] w-full object-cover object-top"
          />
        </div>
      </div>
      <figcaption className="border-t border-white/10 px-5 py-4 text-xs leading-6 text-white/45">
        마스킹 처리 이미지 — 조직 전체 위험 흐름과 고위험 이벤트 처리 화면을 함께 배치
      </figcaption>
    </figure>
  )
}

function GuardianCompactFigure({
  src,
  alt,
  caption,
  fit = "cover",
}: {
  src: string
  alt: string
  caption: string
  fit?: "cover" | "contain"
}) {
  return (
    <figure className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
      <div className="aspect-[4/3] bg-black/30 p-2">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          draggable={false}
          className={`h-full w-full rounded-md ${
            fit === "contain" ? "object-contain" : "object-cover object-top"
          }`}
        />
      </div>
      <figcaption className="border-t border-white/10 px-4 py-3 text-xs leading-5 text-white/45">
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
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
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
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
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
