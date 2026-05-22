export type NavItem = {
  label: string
  href: string
}

export type SelectedQuestion = {
  number: string
  question: string
  project: string
  tag: string
  href: string
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

export const navItems: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "Approach", href: "#approach" },
  { label: "AI Workflow", href: "#ai-workflow" },
  { label: "Contact", href: "#contact" },
]

export const selectedQuestions: SelectedQuestion[] = [
  {
    number: "01",
    question: "AI가 추천해도,\n점주는 왜 바로 주문하지 못했을까?",
    project: "SPC Dunkin AI Smart POS / Mobile",
    tag: "AI Decision UX",
    href: "#work",
  },
  {
    number: "02",
    question: "메뉴는 충분했는데,\n왜 사용자는 계속 길을 잃었을까?",
    project: "STEP 평생교육원",
    tag: "IA Redesign",
    href: "#work",
  },
  {
    number: "03",
    question: "AI의 답은 나왔는데,\n사용자는 무엇을 근거로 믿어야 할까?",
    project: "SAPIE DeepQ",
    tag: "Explainable AI UX",
    href: "#work",
  },
  {
    number: "04",
    question: "AI 도구를 허용할수록,\n조직은 무엇을 감시하고 통제해야 할까?",
    project: "SAPIE / Guardian",
    tag: "AI Security UX",
    href: "#work",
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
  { label: "Email", href: "mailto:your.email@example.com" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Resume PDF", href: "#" },
  { label: "Design Log", href: "#" },
]
