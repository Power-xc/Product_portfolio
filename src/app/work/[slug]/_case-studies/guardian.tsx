import Link from "next/link"
import { CollaborationMoment } from "@/components/case-study/CollaborationMoment"
import { DefinitionCard } from "@/components/case-study/DefinitionCard"
import { OpenQuestion } from "@/components/case-study/OpenQuestion"
import { PriorityRationale } from "@/components/case-study/PriorityRationale"
import { ProblemStatement } from "@/components/case-study/ProblemStatement"
import type { Hypothesis, InfoItem, LearningNote, ScreenItem, TradeOff } from "../_lib/types"
import {
  HeroAtmosphere,
  CaseStudyShell,
  BeforeAfterCard,
  Card,
  CaseSection,
  ClosingText,
  CompactFigure,
  DiagramCard,
  HypothesisSection,
  ListCard,
  ScreenFigure,
  SimpleTable,
  TagText,
  TwoColumn,
} from "../_components/shared"

const guardianImageBase = "/images/guardian"
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

const guardianHypotheses: Hypothesis[] = [
  {
    id: "H1",
    ifStatement: "AI 사용 현황·위반 감지·정책 설정을 하나의 운영 절차로 연결하면",
    thenStatement: "보안 관리자가 AI 리스크를 차단 대신 통제 가능한 형태로 관리하게 될 것이다",
    metric: "위반 이벤트 평균 대응 시간 · 정책 미설정 항목 수",
    tag: "위험 가시화",
  },
  {
    id: "H2",
    ifStatement: "위반 이벤트를 위험 유형·부서·처리 상태 기준으로 분류해 대시보드에 배치하면",
    thenStatement: "관리자가 고위험 이벤트부터 우선 처리할 수 있게 될 것이다",
    metric: "고위험 이벤트 처리율 · 미처리 적체 건수",
    tag: "위험 트리아지",
  },
  {
    id: "H3",
    ifStatement: "정책 설정·위반 이력·권한 관리를 같은 관리 체계에 포함하면",
    thenStatement: "AI 사용 기준이 운영 중 변경·감사 가능한 거버넌스로 내재화될 것이다",
    metric: "정책 변경 이력 조회율 · 권한 설정 오류율",
    tag: "정책 거버넌스 내재화",
  },
]

const guardianLearningNote: LearningNote = {
  hypothesis: "H2",
  expected: "위험 유형·부서·처리 상태로 분류하면 관리자가 고위험 이벤트부터 처리할 것이다",
  actual:
    "보안 관리자는 이미 별도 도구로 이 분류 정보를 보고 있었다. 대시보드 통합보다 '즉시 취할 수 있는 조치 버튼'이 없는 것이 더 큰 병목이었다",
  change:
    "분류 필터보다 위반 이벤트 행 안에 즉시 조치 액션(경고·차단·예외처리)을 인라인으로 노출하는 방향을 추가했다",
}

export function GuardianCaseStudy() {
  return (
    <CaseStudyShell accent="#6AA8FF">
      <GuardianHeroSection />
      <GuardianWhySection />
      <GuardianContextSection />
      <GuardianWorkflowSection />
      <GuardianProblemSection />
      <HypothesisSection
        number="04-1 / Hypothesis"
        title="보안 운영 문제를 3가지 검증 가설로 정의했다"
        description="위험 가시화·위험 트리아지·정책 거버넌스 내재화 3가지 과제를 If-Then 가설로 바꾸고, 각 가설을 검증할 운영 지표를 사전에 설정했다."
        hypotheses={guardianHypotheses}
        learningNote={guardianLearningNote}
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
    </CaseStudyShell>
  )
}

function GuardianHeroSection() {
  return (
    <section className="relative isolate mx-auto max-w-content px-5 py-[88px] md:px-8 md:py-[120px]">
      <HeroAtmosphere />
      <Link
        href="/work"
        className="inline-flex text-sm font-normal text-fg-faint transition hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        ← Back to Work
      </Link>
      <p className="mt-12 text-[12px] font-normal uppercase tracking-[0.18em] text-fg-faint">
        04 / Enterprise AI Security Platform
      </p>
      <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_0.54fr] lg:items-end">
        <div>
          <h1 className="max-w-5xl break-keep text-[clamp(2.45rem,8.3vw,76px)] font-normal leading-[1.08] text-fg">
            AI 도구를 허용할수록, 조직은 무엇을 확인하고 통제해야 할까?
          </h1>
          <p className="mt-8 max-w-3xl text-base font-normal leading-8 text-fg-muted md:text-lg">
            Enterprise Gen AI Security Platform — Designing visibility, policy, audit, and access
            control for responsible AI usage
          </p>
          <p className="mt-5 max-w-3xl break-keep text-sm leading-7 text-fg-faint md:text-base md:leading-8">
            삼성 도입 검토를 위해 설계한 Enterprise Gen AI Security Platform입니다. 조직이 Gen AI
            사용을 차단만 하는 방식에서 벗어나, 사용 현황을 파악하고 정책을 설정하며 위반 처리와
            감사 기록까지 이어지는 운영 구조를 설계했습니다.
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
              className="grid grid-cols-[0.32fr_1fr] gap-4 border-t border-line py-4"
            >
              <span className="text-[12px] uppercase tracking-[0.16em] text-fg-faint">
                {item.label}
              </span>
              <span className="break-keep text-sm leading-6 text-fg-muted">{item.value}</span>
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
      <p className="max-w-3xl break-keep text-base leading-8 text-fg-muted">
        Guardian은 그중 Enterprise AI Security 영역을 보여주는 케이스입니다. AI 도구 사용이 늘어나는
        조직에서, 보안 운영자가 무엇을 보고 어떤 기준으로 조치하며 사고 이후 무엇을 추적해야
        하는지를 제품 구조로 정리했습니다.
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
        <p className="break-keep text-sm leading-7 text-fg-muted">
          Guardian은 삼성 도입 검토를 전제로, AI 사용 현황, 위반 감지, 정책 관리, 파일·채팅 기록,
          사용자·관리자 권한을 하나의 관리 콘솔로 통합한 AI Security & Governance Platform입니다.
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
      <p className="max-w-3xl break-keep text-base leading-8 text-fg-muted">
        사용자 분석의 초점은 화면 편의성보다, 관리자가 어떤 위험을 먼저 봐야 하는지, 어떤 기준으로
        정책을 설정해야 하는지, 사고 이후 어떤 기록을 추적해야 하는지에 있었습니다.
      </p>
      <div className="mt-8 grid gap-4 lg:grid-cols-4">
        {guardianRoles.map((role) => (
          <ListCard key={role.title} title={role.title} items={role.items} />
        ))}
      </div>
      <div className="mt-8 border-t border-line pt-6">
        <h3 className="text-xl font-normal text-fg">Workflow</h3>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {guardianWorkflow.map((step, index) => (
            <div key={step} className="flex items-center gap-3">
              <span className="rounded-full border border-line bg-surface-2 px-4 py-2 text-sm text-fg-muted">
                {step}
              </span>
              {index < guardianWorkflow.length - 1 ? (
                <span className="text-fg-faint">→</span>
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
      <PriorityRationale>
        AI 사용 증가는 측정됐지만 어떤 위험이 실제로 발생하는지 조직 내부에서 보이지 않았다. 차단
        정책을 강화하는 방향보다, 위험을 가시화하고 운영 가능한 통제 구조를 먼저 만들어야 관리자가
        판단할 수 있다고 판단했다.
      </PriorityRationale>
      <SimpleTable
        headers={["기존 접근", "실제 UX 문제"]}
        rows={guardianProblemRows.map(([before, after]) => [before, after])}
      />
      <ClosingText>
        AI 사용 현황, 위반 감지, 정책 설정, 파일·채팅 기록, 권한 관리를 하나의 관리 절차로
        재구성했습니다.
      </ClosingText>
      <ProblemStatement
        target="보안 관리자"
        situation="조직 내 AI 사용이 증가하는 상황"
        pain="어떤 위험이 발생하는지 확인하고 통제할 수단이 없다"
        breakdown="AI를 허용할수록 조직 리스크가 커진다"
      />
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
          <DefinitionCard
            key={decision}
            title={decision}
            body="위험 이벤트를 먼저 확인하고 상세 기록으로 이동하게 했다."
          />
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
      <p className="max-w-3xl break-keep text-base leading-8 text-fg-muted">
        Guardian은 부서·직급·사용자·관리자 권한을 분리해 정책 적용 범위와 책임 범위를 명확히
        했습니다. 보안 관리 콘솔에 접근하는 관리자 계정도 별도 보호가 필요했기 때문에 인증 기기,
        OTP, 접속 상태 관리를 함께 설계했습니다.
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
      <div className="border-t border-line pt-6 md:pt-8">
        <p className="max-w-3xl break-keep text-[clamp(1.7rem,4vw,3rem)] font-normal leading-tight text-fg">
          개인의 모든 행동보다, 정책 위반 가능성이 있는 메시지·파일·AI 사용 이벤트를 중심으로
          구조화했습니다.
        </p>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {guardianTradeOffs.map((item) => (
          <ListCard key={item.title} title={item.title} items={item.items} />
        ))}
      </div>
      <ClosingText>
        차단, 경고, 상세 확인, 내보내기, 권한 관리가 이어지는 운영 절차를 설계해 보안팀이 대응
        가능한 단위로 위험을 다룰 수 있게 했습니다.
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
      <OpenQuestion>
        정책 적용 이후 실제 위반 건수 감소 여부와 관리자의 대시보드 사용 패턴은 6개월 이상 운영
        데이터가 있어야 확인 가능하다. 알림 피로도 감소 여부는 운영 후 관리자 인터뷰로 검증하고
        싶다.
      </OpenQuestion>
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
      <CollaborationMoment
        situation="보안팀은 모든 위반 이벤트를 실시간 알림으로 전송하길 원했다. 관리자 부담을 고려해 중요도 기반 분류 방식을 먼저 제안했다."
        evidence="알림 과잉은 정작 중요한 이벤트를 놓치게 만든다는 점을 근거로 들었다. 심각도·정책 기준으로 위반을 분류한 대시보드 구조와 고위험 이벤트만 알림으로 보내는 안을 시각화해 제시했다."
        result="보안팀도 관리자가 대시보드 요약을 먼저 보고 상세로 이동하는 흐름에 동의했다. 실시간 알림은 고위험 이벤트에만 적용하는 방향으로 조율했다."
      />
    </CaseSection>
  )
}

function GuardianHeroVisual() {
  return (
    <figure className="mt-12 overflow-hidden rounded-lg border border-line bg-surface shadow-card 2xl:-mx-[120px]">
      <div className="grid gap-0 bg-surface-2 p-3 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="min-w-0 overflow-hidden rounded-md border border-line bg-white">
          <img
            src={guardianScreens.dashboard}
            alt="Guardian 대시보드 화면"
            loading="eager"
            decoding="async"
            draggable={false}
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="min-w-0 overflow-hidden rounded-md border border-line bg-white lg:-ml-px">
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
      <figcaption className="border-t border-line px-5 py-4 text-xs leading-6 text-fg-faint">
        비식별 처리 이미지 — 조직 전체 위험 흐름과 고위험 이벤트 처리 화면을 함께 배치
      </figcaption>
    </figure>
  )
}
