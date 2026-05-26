export type NavItem = {
  label: string
  href: string
}

export type SelectedQuestion = {
  number: string
  question: string
  project: string
  tag: string
  slug: string
  href: string
}

export type WorkProject = {
  name: string
  role: string
  year: string
}

export type WorkProjectGroup = {
  category: string
  projects: WorkProject[]
}

export type BehindItem = {
  number: string
  title: string
  body: string
  placeholder: "signals" | "map" | "draft" | "standard"
}

export type ProcessStep = {
  number: string
  title: string
  body: string
  featured?: boolean
}

export type WorkflowCard = {
  title: string
  body: string
}

export type ContactLink = {
  label: string
  href: string
}

export const contactEmail = "pkk062300@naver.com"
export const contactHref = `mailto:${contactEmail}`
export const phoneDisplay = "요청 시 공유"
export const githubUrl = "https://github.com/Power-xc"
export const linkedinUrl =
  "https://www.linkedin.com/in/%EA%B0%95%EA%B7%BC-%EB%B0%95-b9a97238a/"

export const navItems: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "AI Workflow", href: "/#ai-workflow" },
  { label: "Contact", href: "/#contact" },
]

export const selectedQuestions: SelectedQuestion[] = [
  {
    number: "01",
    question: "AI가 추천해도,\n점주는 왜 바로 주문하지 못했을까?",
    project: "SPC Dunkin AI Smart POS / Mobile",
    tag: "AI Decision UX",
    slug: "spc-dunkin-ai-smart-pos",
    href: "/work/spc-dunkin-ai-smart-pos",
  },
  {
    number: "02",
    question: "메뉴는 충분했는데,\n왜 사용자는 계속 길을 잃었을까?",
    project: "STEP 평생교육원",
    tag: "IA Redesign",
    slug: "step-lifelong-education-platform",
    href: "/work/step-lifelong-education-platform",
  },
  {
    number: "03",
    question: "AI의 답은 나왔는데,\n사용자는 무엇을 근거로 믿어야 할까?",
    project: "SAPIE DeepQ",
    tag: "Explainable AI UX",
    slug: "sapie-deepq",
    href: "/work/sapie-deepq",
  },
  {
    number: "04",
    question: "AI 도구를 허용할수록,\n조직은 무엇을 감시하고 통제해야 할까?",
    project: "SAPIE Guardian / Enterprise Gen AI Security Platform",
    tag: "Enterprise AI Security",
    slug: "sapie-guardian",
    href: "/work/sapie-guardian",
  },
]

export function getCaseStudyBySlug(slug: string) {
  return selectedQuestions.find((caseStudy) => caseStudy.slug === slug) ?? null
}

export const workProjectGroups: WorkProjectGroup[] = [
  {
    category: "AI Products",
    projects: [
      { name: "SPC 던킨 AI 스마트 POS", role: "프로덕트 UX 리드", year: "2026" },
      { name: "SAPIE Guardian", role: "Enterprise AI Security Platform UX", year: "2026" },
      { name: "SAPIE DeepQ", role: "AI 에이전트 UX/UI", year: "2025" },
      { name: "SAPIE SQL Agent", role: "AI 데이터 질의 UX/UI", year: "2025" },
      { name: "LG U+ Simple Agent", role: "UI/UX 개선", year: "2025" },
      { name: "SAPIE AI 챗봇", role: "AI 서비스 UX/UI", year: "2024" },
    ],
  },
  {
    category: "Internal",
    projects: [
      { name: "솔트웨어 관리자 포털", role: "관리자 시스템 UX/UI", year: "2024" },
      { name: "솔트웨어 홈페이지 리뉴얼", role: "웹사이트 UX/UI", year: "2024" },
      { name: "솔트웨어 영문 트랜스레이터", role: "AI 번역 서비스 UX/UI", year: "2024" },
    ],
  },
  {
    category: "Enterprise",
    projects: [
      { name: "STEP 평생교육원", role: "학습 플랫폼 IA 재설계", year: "2026" },
      { name: "재외동포청", role: "UI/UX 설계 · 마크업", year: "2024" },
      { name: "국민연금", role: "UI/UX 설계 · 마크업", year: "2023" },
      { name: "펑션베이", role: "UI/UX 설계 · 마크업", year: "2021" },
      { name: "경인교육대학교", role: "UI/UX 설계 · 마크업", year: "2020" },
      { name: "경북대학교", role: "UI/UX 설계 · 마크업", year: "2020" },
      { name: "전주비전대학교", role: "UI/UX 설계 · 마크업", year: "2020" },
      { name: "금융감독원", role: "UI/UX 설계 · 마크업", year: "2020" },
      { name: "광양만권경제자유구역", role: "UI/UX 설계 · 마크업", year: "2020" },
      { name: "한국체육대학교", role: "UI/UX 설계 · 마크업", year: "2019" },
      { name: "롯데정보통신", role: "내부업무시스템 고도화", year: "2019" },
      { name: "인하공업전문대학교", role: "UI/UX 설계 · 마크업", year: "2019" },
      { name: "한서대학교", role: "UI/UX 설계 · 마크업", year: "2019" },
      { name: "경기도 수사정보시스템", role: "UI/UX 설계 · 마크업", year: "2019" },
      { name: "인천항만공사", role: "그룹웨어 UI/UX 설계 · 마크업", year: "2018" },
      { name: "서울대학교", role: "UI/UX 설계 · 마크업", year: "2018" },
      { name: "서울시 민생사법경찰단", role: "UI/UX 설계 · 마크업", year: "2018" },
      { name: "UST 과학기술연합대학원대학교", role: "UI/UX 설계 · 마크업", year: "2018" },
      { name: "한전KPS", role: "UI/UX 설계 · 마크업", year: "2018" },
      { name: "성신여자대학교", role: "UI/UX 설계 · 마크업", year: "2018" },
      { name: "한국교원대학교", role: "UI/UX 설계 · 마크업", year: "2017" },
      { name: "중소기업중앙회", role: "UI/UX 설계 · 마크업", year: "2017" },
      { name: "한국국학진흥원", role: "UI/UX 설계 · 마크업", year: "2017" },
    ],
  },
]

export const behindItems: BehindItem[] = [
  {
    number: "01",
    title: "User Signals",
    body: "인터뷰, FGI, 회의 기록에서 사용자가 실제로 멈추는 지점을 찾습니다.",
    placeholder: "signals",
  },
  {
    number: "02",
    title: "Structure Map",
    body: "카드소팅과 IA 맵으로 복잡한 메뉴와 업무 흐름을 펼쳐봅니다.",
    placeholder: "map",
  },
  {
    number: "03",
    title: "Draft to Discussion",
    body: "AI로 와이어프레임과 화면 Draft를 빠르게 만들고, 고객과 같은 화면을 보며 검증합니다.",
    placeholder: "draft",
  },
  {
    number: "04",
    title: "Human Standard",
    body: "AI가 확장하기 전에 사람이 먼저 기준 화면, 컴포넌트, 상태 규칙을 설계합니다.",
    placeholder: "standard",
  },
]

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Observe",
    body: "사용자가 실제로 막히는 말과 행동을 수집합니다.",
  },
  {
    number: "02",
    title: "Map",
    body: "카드소팅과 업무 흐름 분석으로 복잡한 구조를 펼쳐봅니다.",
  },
  {
    number: "03",
    title: "Cut",
    body: "불필요한 뎁스와 중복 흐름을 덜어냅니다.",
    featured: true,
  },
  {
    number: "04",
    title: "Reframe",
    body: "정보를 사용자의 판단 기준에 맞게 다시 묶습니다.",
  },
  {
    number: "05",
    title: "Prototype",
    body: "Figma와 AI 기반 Frontend Draft로 빠르게 검증합니다.",
  },
]

export const workflowCards: WorkflowCard[] = [
  {
    title: "Draft Fast",
    body: "AI로 초기 화면과 흐름을 빠르게 구체화합니다.",
  },
  {
    title: "Align Early",
    body: "클릭 가능한 Draft를 고객과 함께 보며 요구사항과 UX 흐름을 검증합니다.",
  },
  {
    title: "Reduce Risk",
    body: "문서 해석 차이, 핸드오프 오류, 늦은 수정 리스크를 줄입니다.",
  },
]

export const workflowFlow = [
  "Research Summary",
  "IA Exploration",
  "Wireframe Draft",
  "Frontend Draft",
  "Team Review",
] as const

export const tools = ["LLM", "Figma Make", "Claude", "Codex", "GitHub"] as const

export const contactLinks: ContactLink[] = [
  { label: "Email", href: contactHref },
  { label: "GitHub", href: githubUrl },
  { label: "LinkedIn", href: linkedinUrl },
]
