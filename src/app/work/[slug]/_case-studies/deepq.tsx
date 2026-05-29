import Link from "next/link"
import { CollaborationMoment } from "@/components/case-study/CollaborationMoment"
import { DefinitionCard } from "@/components/case-study/DefinitionCard"
import { OpenQuestion } from "@/components/case-study/OpenQuestion"
import { PriorityRationale } from "@/components/case-study/PriorityRationale"
import { ProblemStatement } from "@/components/case-study/ProblemStatement"
import type { Hypothesis, LearningNote } from "../_lib/types"
import {
  HeroAtmosphere,
  CaseStudyShell,
  CaseSection,
  ClosingText,
  CompactFigure,
  DiagramCard,
  HypothesisSection,
  ListCard,
  NumberedList,
  ScreenFigure,
  SimpleTable,
  TwoColumn,
} from "../_components/shared"

const deepqImageBase = "/images/deepq"
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

const deepqHypotheses: Hypothesis[] = [
  {
    id: "H1",
    ifStatement: "AI 답변 생성 과정(스키마 검색 → SQL 생성 → 실행)을 단계별로 시각화하면",
    thenStatement: "사용자가 답변을 검토할 근거를 확인하고 신뢰하게 될 것이다",
    metric: "Evidence Layer 조회율 · SQL 확인 클릭율",
    tag: "과정 투명성 → 신뢰",
  },
  {
    id: "H2",
    ifStatement: "현업 사용자와 데이터 담당자에게 서로 다른 해석 레이어를 제공하면",
    thenStatement: "각 사용자가 필요한 깊이만큼 답변 근거를 검토할 수 있을 것이다",
    metric: "요약 설명 조회율 · View SQL 클릭율",
    tag: "사용자별 해석 제공",
  },
  {
    id: "H3",
    ifStatement: "추천 질문과 대화 이력을 반복 질의 패턴으로 연결하면",
    thenStatement: "사용자가 첫 답변 이후 후속 질문으로 분석을 이어갈 수 있을 것이다",
    metric: "추천 질문 클릭율 · 세션당 평균 질문 수",
    tag: "반복 질의 패턴 지원",
  },
]

const deepqLearningNote: LearningNote = {
  hypothesis: "H1",
  expected: "AI 답변 생성 과정(스키마 → SQL → 실행)을 시각화하면 사용자가 신뢰할 것이다",
  actual:
    "데이터 분석 담당자는 SQL 실행 단계보다 'AI가 내 질문의 의도를 제대로 파악했는가'를 먼저 확인하고 싶어했다. 과정 투명성보다 의도 해석 확인이 더 중요한 신뢰 요소였다",
  change:
    "Evidence Layer에 SQL 실행 로그보다 '질문 의도 해석 요약'을 최상단에 배치하는 방향으로 우선순위를 조정했다",
}

export function DeepQCaseStudy() {
  return (
    <CaseStudyShell accent="#A78BFA">
      <DeepQHeroSection />
      <DeepQWhySection />
      <DeepQContextSection />
      <DeepQDiscoverySection />
      <DeepQProblemSection />
      <HypothesisSection
        number="04-1 / Hypothesis"
        title="신뢰 문제를 3가지 검증 가설로 정의했다"
        description="과정 투명성·사용자별 해석 제공·반복 질의 패턴 지원 3가지 과제를 If-Then 가설로 바꾸고, 각 가설을 검증할 운영 지표를 사전에 설정했다."
        hypotheses={deepqHypotheses}
        learningNote={deepqLearningNote}
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
    </CaseStudyShell>
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
    <section className="relative isolate mx-auto max-w-content px-5 py-[88px] md:px-8 md:py-[120px]">
      <HeroAtmosphere />
      <Link
        href="/work"
        className="inline-flex text-sm font-normal text-fg-faint transition hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        ← Back to Work
      </Link>
      <p className="mt-12 text-[12px] font-normal uppercase tracking-[0.18em] text-fg-faint">
        03 / Explainable AI Data Analysis UX
      </p>
      <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
        <div>
          <h1 className="max-w-5xl break-keep text-[clamp(2.45rem,8.3vw,76px)] font-normal leading-[1.08] text-fg">
            AI가 답을 말해도, 사용자는 무엇을 보고 신뢰할 수 있을까?
          </h1>
          <p className="mt-8 max-w-3xl text-base font-normal leading-8 text-fg-muted md:text-lg">
            SAPIE DeepQ — Designing an explainable data analysis experience for enterprise users
          </p>
        </div>
        <div className="border-t border-line pt-5">
          <p className="text-[11px] uppercase tracking-[0.16em] text-fg-faint">Product Frame</p>
          <p className="mt-4 break-keep text-sm leading-7 text-fg-muted">
            B2B · AI Data Analysis · Explainable AI UX · Enterprise Intelligence Platform · Admin UX
            · Data Workflow
          </p>
        </div>
      </div>
      <div className="mt-12 max-w-4xl space-y-5 text-base leading-8 text-fg-muted md:text-lg">
        <p className="break-keep">
          DeepQ는 SQL이나 데이터 구조를 모르는 현업 사용자가 자연어로 데이터에 질문하고, AI가 어떤
          데이터와 로직으로 답을 만들었는지 확인하며, 업무 의사결정까지 이어갈 수 있도록 설계한
          Enterprise Intelligence Platform입니다.
        </p>
        <p className="break-keep">
          기존에는 데이터나 문서 분석을 위해 전산/IT 조직에 요청하고 기다려야 했던 업무를, 사용자가
          직접 질문하고 검토할 수 있는 분석 경험으로 전환했습니다.
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
      <p className="max-w-3xl break-keep text-base leading-8 text-fg-muted md:text-lg">
        DeepQ는 그중 Explainable AI UX와 Enterprise Data Product 설계를 보여주는 케이스입니다.
        검토한 지점은 AI가 답을 생성하는 화면 자체보다, 사용자가 그 답을 어떤 근거로 이해하고,
        검토하고, 다음 업무 질문으로 이어갈 수 있는가였습니다.
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
      <div className="space-y-5 text-base leading-8 text-fg-muted md:text-lg">
        <p className="break-keep">
          기존 방식에서는 사용자가 전산/IT 조직에 분석을 요청하고, 결과를 기다린 뒤 다시 추가 질문을
          하는 흐름이 반복될 수밖에 없었습니다.
        </p>
        <p className="break-keep">
          DeepQ는 이 흐름을 자연어 기반 분석 경험으로 바꾸는 제품입니다. 사용자는 질문을 입력하고,
          AI는 연결된 데이터 구조를 바탕으로 SQL을 생성하고 실행한 뒤, 결과와 해석을 제공합니다.
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
      <p className="max-w-3xl break-keep text-base leading-8 text-fg-muted md:text-lg">
        처음부터 화면을 나열하면 제품이 복잡한 질의 도구처럼 보일 수 있었습니다. 그래서 화면과
        기능을 사용자의 업무 목적 기준으로 재분류했습니다.
      </p>
      <DeepQSortingMap />
      <ClosingText>
        화면을 기능 단위로 나열하지 않고, 사용자가 질문을 시작하고, AI가 답을 만들고, 사용자가
        검토하고, 관리자가 운영하는 절차로 재구성했습니다.
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
      <PriorityRationale>
        도입률은 있었지만 실제 업무 활용 여부가 불명확했다. AI가 답을 생성하는 것과 사용자가 그 답을
        업무에 쓸 수 있는지는 다른 문제 — 활용 장벽을 먼저 정의하기로 했다.
      </PriorityRationale>
      <p className="max-w-3xl break-keep text-base leading-8 text-fg-muted md:text-lg">
        사용자는 AI가 어떤 데이터베이스를 봤는지, 질문을 어떻게 해석했는지, 어떤 SQL을 생성했는지,
        결과가 어떤 기준으로 요약됐는지 확인할 수 있어야 합니다.
      </p>
      <div className="mt-8">
        <SimpleTable
          headers={["기존 접근", "실제 UX 문제"]}
          rows={[
            ["AI가 답변을 생성한다", "사용자는 왜 그 답이 나왔는지 알 수 없다"],
            ["자연어 질문을 받는다", "질문이 어떤 데이터 구조로 해석됐는지 보이지 않는다"],
            ["SQL을 자동 생성한다", "SQL이 숨겨지면 데이터 신뢰성이 떨어진다"],
            ["차트를 보여준다", "차트만으로는 계산 기준과 데이터 출처를 알 수 없다"],
            [
              "관리자가 사용자를 관리한다",
              "대화 이력, SQL, 비용, 오류를 함께 추적하지 못하면 운영이 어렵다",
            ],
          ]}
        />
      </div>
      <ClosingText>
        질문, 데이터 구조, SQL, 결과, 설명, 추천 질문, 관리자 모니터링을 하나의 제품 절차로
        연결했습니다.
      </ClosingText>
      <ProblemStatement
        target="현업 분석 담당자"
        situation="AI 답변을 업무에 사용해야 할 때"
        pain="출처와 계산 기준을 검토할 수 없어 의사결정에 쓰지 못한다"
        breakdown="AI 분석 도구를 도입해도 실제 업무 활용률이 낮다"
      />
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
      <div className="border-t border-line pt-6 md:pt-8">
        <p className="text-[12px] uppercase tracking-[0.18em] text-fg-faint">Core UX Idea</p>
        <h3 className="mt-4 text-[clamp(1.8rem,5vw,3rem)] font-normal text-fg">Analysis Receipt</h3>
        <p className="mt-5 max-w-3xl break-keep text-base leading-8 text-fg-muted md:text-lg">
          질문 하나가 단순 메시지로 끝나지 않고, 의도 해석, 데이터 구조, 생성 SQL, 실행 결과, 차트,
          설명, 추천 질문, 관리자 로그로 이어지는 검토 가능한 분석 기록이 되도록 설계했습니다.
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
        AI가 답을 생성하는 경험에서, 사용자가 답을 검토하고 조직이 추적할 수 있는 경험으로
        전환했습니다.
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
      <p className="max-w-3xl break-keep text-base leading-8 text-fg-muted md:text-lg">
        이 사용자는 SQL 직접 작성보다, 내 질문이 어떤 데이터로 해석됐는지, 결과가 어떤 계산과
        조건에서 나왔는지, 다음에 어떤 질문을 이어가야 하는지 알고 싶어합니다.
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
          items={["사용자 권한 관리", "사용량과 비용 관리", "대화 이력과 응답 상세 추적"]}
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
          ["Step 5. Continue Thinking", "추천 질문으로 다음 탐색 방향을 이어간다."],
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
      <p className="max-w-3xl break-keep text-base leading-8 text-fg-muted md:text-lg">
        신규 사용자는 Intro를 통해 자연어 질문, 실시간 분석, 데이터 구조 이해, 보안/관리 맥락을
        이해하고, 반복 사용자는 “다시 보지 않기” 옵션으로 불필요한 단계를 건너뛸 수 있습니다.
      </p>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <CompactFigure
          eager
          src={deepqScreens.login}
          alt="DeepQ 로그인 화면"
          caption="비식별 처리 이미지 — 엔터프라이즈 계정으로 분석 환경에 진입하는 화면"
        />
        <CompactFigure
          eager
          src={deepqScreens.intro}
          alt="DeepQ Intro 화면"
          caption="비식별 처리 이미지 — 첫 사용자가 제품 목적과 검토 흐름을 이해하는 화면"
        />
        <CompactFigure
          eager
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
      <p className="max-w-3xl break-keep text-base leading-8 text-fg-muted md:text-lg">
        최근 대화와 추천 질문은 보조 요소로 두고, 사용자가 가장 먼저 지금 궁금한 업무 질문을
        입력하도록 구조화했습니다.
      </p>
      <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1.2fr]">
        <ScreenFigure
          eager
          src={deepqScreens.firstQuestion}
          alt="DeepQ 첫 질문 입력 화면"
          caption="비식별 처리 이미지 — BI 메뉴 탐색 대신 자연어 질문에서 분석을 시작하도록 한 구조"
        />
        <ScreenFigure
          eager
          src={deepqScreens.workspace}
          alt="DeepQ 질문 중심 분석 공간"
          caption="비식별 처리 이미지 — 최근 대화는 보조로 두고 현재 질문 입력을 화면의 중심에 배치"
        />
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <CompactFigure
          eager
          src={deepqScreens.userMenu}
          alt="DeepQ 사용자 메뉴 화면"
          caption="비식별 처리 이미지 — 사용량과 설정은 보조 패널로 분리해 분석 흐름을 방해하지 않음"
        />
        <CompactFigure
          eager
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
      <p className="max-w-3xl break-keep text-base leading-8 text-fg-muted md:text-lg">
        DeepQ는 스키마 검색, 유사 쿼리 검색, 메타데이터 로드, SQL 생성, SQL 실행, 결과 분석, 추천
        질문 생성 과정을 단계별로 보여줍니다. 이 구조는 대기 시간을 분석 근거를 준비하는 단계를
        확인하는 시간으로 바꿉니다.
      </p>
      <div className="mt-8 grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
        <ScreenFigure
          eager
          src={deepqScreens.processPanel}
          alt="DeepQ 답변 준비 과정 패널"
          caption="비식별 처리 이미지 — AI의 대기 시간을 분석 과정의 투명성으로 전환한 패널"
          mobile
        />
        <ScreenFigure
          eager
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
      <p className="max-w-3xl break-keep text-base leading-8 text-fg-muted md:text-lg">
        현업 사용자는 요약과 차트로 빠르게 이해하고, 데이터에 익숙한 사용자는 SQL과 테이블을 확인해
        답변의 근거를 검토할 수 있습니다.
      </p>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <ScreenFigure
          eager
          src={deepqScreens.resultChart}
          alt="DeepQ 결과 테이블과 차트 화면"
          caption="비식별 처리 이미지 — 하나의 질문 결과를 표와 차트로 나눠 확인하는 Evidence Layer"
        />
        <ScreenFigure
          eager
          src={deepqScreens.viewSql}
          alt="DeepQ View SQL 화면"
          caption="비식별 처리 이미지 — AI 답변의 근거를 사용자가 직접 검토할 수 있게 한 SQL 레이어"
        />
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <ListCard title="Surface Layer" items={["자연어 질문", "자연어 답변", "테이블", "차트"]} />
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
      <p className="max-w-3xl break-keep text-base leading-8 text-fg-muted md:text-lg">
        관리자 콘솔은 이 정보를 운영자가 확인하고, 권한·DB 연결·품질·비용을 관리할 수 있게 하는
        Enterprise AI 운영 구조입니다.
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
          eager
          src={deepqScreens.adminDashboard}
          alt="DeepQ 관리자 대시보드"
          caption="비식별 처리 이미지 — 사용량, 오류, 비용, 사용자 흐름을 운영자가 함께 보는 구조"
        />
        <ScreenFigure
          eager
          src={deepqScreens.conversationMonitoring}
          alt="DeepQ 대화 이력 모니터링 화면"
          caption="비식별 처리 이미지 — 질문 내용, 생성 시간, Trace, 비용을 운영 이력으로 추적"
        />
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <CompactFigure
          eager
          src={deepqScreens.userManagement}
          alt="DeepQ 사용자 관리 화면"
          caption="비식별 처리 이미지 — 사용자와 권한, DB 연결 계정을 운영 단위로 관리"
        />
        <CompactFigure
          eager
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
      <p className="max-w-3xl break-keep text-base leading-8 text-fg-muted md:text-lg">
        반대로 SQL, 데이터 구조, 실행 과정, 메타데이터를 모두 전면에 노출하면 현업 사용자에게는 다시
        어려운 분석 도구가 됩니다. 그래서 기본 경험은 질문과 답변 중심으로 단순화하고, 검증이 필요한
        사용자를 위해 SQL, 데이터 샘플, 설명, 추천 질문을 확장 가능한 레이어로 제공했습니다.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <ListCard
          title="Too Simple"
          items={["빠르게 질문 가능", "하지만 답변 근거가 부족함", "AI hallucination 리스크 증가"]}
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
            eager
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
      <OpenQuestion>
        사용자가 View SQL이나 설명 영역을 실제로 확인하는지, 확인 이후 의사결정에 차이가 생기는지는
        운영 데이터로만 확인 가능하다. 쿼리 재사용률과 AI 답변 기반 리포트 공유 빈도를 측정해야 실질
        업무 활용 여부를 판단할 수 있다.
      </OpenQuestion>
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
      <p className="max-w-3xl break-keep text-base leading-8 text-fg-muted md:text-lg">
        그래서 질문, 데이터 구조, SQL, 결과, 설명, 추천 질문, 관리자 로그를 연결해 AI 답변을 일회성
        메시지로 두지 않고 검토 가능한 분석 기록으로 다루는 방향을 선택했습니다.
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
      <CollaborationMoment
        situation="개발팀은 SQL을 기본 노출하는 방식이 단순하다고 선호했다. 나는 비개발자 분석가의 인지 부하를 줄이기 위해 SQL을 선택적으로 열어보는 구조를 제안했다."
        evidence={
          '초기 사용성 검토에서 비개발자가 SQL을 처음 보고 당황하는 반응이 나왔다. "확인하고 싶을 때만 보여야 한다"는 피드백을 근거로 View SQL 버튼 방식을 제시했다.'
        }
        result="개발팀도 구현 복잡도가 크지 않다고 동의했다. SQL은 선택적 열람으로, 요약 설명은 기본 표시로 분리하는 방식으로 합의했다."
      />
    </CaseSection>
  )
}

function DeepQHeroVisual() {
  return (
    <figure className="mt-12 overflow-hidden rounded-lg border border-line bg-surface shadow-card 2xl:-mx-[120px]">
      <div className="grid gap-3 bg-surface-2 p-3 lg:grid-cols-[1.12fr_0.88fr]">
        <div className="min-w-0 overflow-hidden rounded-md border border-line bg-surface-2">
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
          <div className="overflow-hidden rounded-md border border-line bg-surface-2">
            <img
              src={deepqScreens.resultChart}
              alt="DeepQ 결과 검토 화면"
              loading="eager"
              decoding="async"
              draggable={false}
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="overflow-hidden rounded-md border border-line bg-surface-2">
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
      <figcaption className="border-t border-line px-5 py-4 text-xs leading-6 text-fg-faint">
        비식별 처리 이미지 — 질문 입력, 결과 검토, SQL 확인을 하나의 분석 흐름으로 배치
      </figcaption>
    </figure>
  )
}

function DeepQFlowCard({ title, nodes }: { title: string; nodes: string[] }) {
  return (
    <div className="border-t border-line pt-6">
      <h3 className="text-xl font-normal text-fg">{title}</h3>
      <ol className="mt-6 space-y-3">
        {nodes.map((node, index) => (
          <li key={node} className="grid grid-cols-[34px_1fr] gap-3 text-sm leading-6">
            <span className="text-fg-faint">{String(index + 1).padStart(2, "0")}</span>
            <span className="break-keep text-fg-muted">{node}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

function DeepQFlowLine({ nodes }: { nodes: string[] }) {
  return (
    <div className="border-t border-line pt-4">
      <div className="flex flex-wrap items-center gap-3">
        {nodes.map((node, index) => (
          <div key={`${node}-${index}`} className="flex items-center gap-3">
            <span className="rounded-full border border-line bg-surface px-4 py-2 text-xs leading-5 text-fg-muted md:text-sm">
              {node}
            </span>
            {index < nodes.length - 1 ? <span className="text-fg-faint">→</span> : null}
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
      items: [
        "Answer Preparation Panel",
        "Schema Search",
        "Similar Query Search",
        "Metadata Loading",
      ],
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
        <div key={group.title} className="border-t border-line pt-5">
          <p className="text-[12px] uppercase tracking-[0.18em] text-fg-faint">{group.title}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line bg-surface px-3 py-2 text-xs leading-5 text-fg-muted"
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
      <figure className="overflow-hidden rounded-lg border border-line bg-surface">
        <div className="bg-surface-2 p-3">
          <img
            src={deepqScreens.resultChart}
            alt="DeepQ 사용자 분석 경험 화면"
            loading="eager"
            decoding="async"
            draggable={false}
            className="h-auto w-full rounded-md object-contain"
          />
        </div>
        <figcaption className="border-t border-line px-5 py-4 text-xs leading-6 text-fg-faint">
          비식별 처리 이미지 — 질문, 결과, 차트, 과정 패널이 이어지는 사용자 분석 흐름
        </figcaption>
      </figure>
      <figure className="overflow-hidden rounded-lg border border-line bg-surface">
        <div className="bg-surface-2 p-3">
          <img
            src={deepqScreens.adminDashboard}
            alt="DeepQ 관리자 운영 콘솔 화면"
            loading="eager"
            decoding="async"
            draggable={false}
            className="h-auto w-full rounded-md object-contain"
          />
        </div>
        <figcaption className="border-t border-line px-5 py-4 text-xs leading-6 text-fg-faint">
          비식별 처리 이미지 — 사용자, 사용량, 오류, 비용을 함께 관찰하는 관리자 운영 흐름
        </figcaption>
      </figure>
    </div>
  )
}
