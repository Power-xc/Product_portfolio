import Link from "next/link"
import { CollaborationMoment } from "@/components/case-study/CollaborationMoment"
import { DefinitionCard } from "@/components/case-study/DefinitionCard"
import { OpenQuestion } from "@/components/case-study/OpenQuestion"
import { PriorityRationale } from "@/components/case-study/PriorityRationale"
import { ProblemStatement } from "@/components/case-study/ProblemStatement"
import type { Hypothesis, LearningNote, StepScreenItem, TradeOff } from "../_lib/types"
import {
  HeroAtmosphere,
  CaseStudyShell,
  CaseSection,
  ClosingText,
  HypothesisSection,
  ListCard,
  NumberedList,
  TagText,
  TwoColumn,
} from "../_components/shared"

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

const stepHypotheses: Hypothesis[] = [
  {
    id: "H1",
    ifStatement: "콘텐츠를 학습자의 행동 목적(탐색·비교·결정·지속) 기준으로 재분류하면",
    thenStatement: "사용자가 다음에 할 행동을 찾는 데 걸리는 탐색 뎁스가 줄어들 것이다",
    metric: "핵심 태스크 완료 시간 · GNB 클릭 경로 뎁스",
    tag: "IA 목적 기반 재구조",
  },
  {
    id: "H2",
    ifStatement: "홈·검색·카테고리 진입점을 한 탐색 축으로 정리하면",
    thenStatement: "사용자가 정확한 과정명을 몰라도 적절한 과정 목록까지 도달할 수 있을 것이다",
    metric: "검색 진입률 · 카테고리 경유 상세 진입률",
    tag: "탐색 진입 일원화",
  },
  {
    id: "H3",
    ifStatement: "모바일 홈과 메뉴에서 주요 서비스 진입을 유지하면",
    thenStatement: "작은 화면에서도 학습자가 탐색·신청·학습 관리 기능에 접근할 수 있을 것이다",
    metric: "모바일 메뉴 진입률 · 모바일 수강신청 전환율",
    tag: "모바일 접근성",
  },
]

const stepLearningNote: LearningNote = {
  hypothesis: "H1",
  expected: "IA를 행동 목적 기준으로 재분류하면 탐색 뎁스가 줄어들 것이다",
  actual:
    "카드소팅에서 학습자의 첫 번째 기준은 메뉴 구조가 아니라 수강료 지원 여부였다. IA 재설계보다 과정 카드 안의 정보 노출이 더 급한 문제였다",
  change: "IA 정비와 병행해 과정 목록 카드에 지원 여부·교육비를 1순위로 노출하는 방향을 추가했다",
}

export function StepCaseStudy() {
  return (
    <CaseStudyShell accent="#FFFFFF">
      <StepHeroSection />
      <StepProblemSection />
      <HypothesisSection
        number="01-1 / Hypothesis"
        title="탐색 구조 문제를 3가지 검증 가설로 정의했다"
        description="IA 목적 기반 재구조·탐색 진입 일원화·모바일 접근성 3가지 과제를 If-Then 가설로 바꾸고, 각 가설을 검증할 운영 지표를 사전에 설정했다."
        hypotheses={stepHypotheses}
        learningNote={stepLearningNote}
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
    </CaseStudyShell>
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
    <section className="relative isolate mx-auto max-w-content px-5 py-[88px] md:px-8 md:py-[120px]">
      <HeroAtmosphere />
      <Link
        href="/work"
        className="inline-flex text-sm font-normal text-fg-faint transition hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        ← Back to Work
      </Link>
      <p className="mt-12 text-[12px] font-normal uppercase tracking-[0.18em] text-fg-faint">
        02 / Lifelong Education Platform UX
      </p>
      <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_0.5fr] lg:items-end">
        <div>
          <h1 className="max-w-5xl break-keep text-[clamp(2.45rem,8.3vw,76px)] font-normal leading-[1.08] text-fg">
            콘텐츠가 넘쳐도,
            <br />
            학습자는 왜 <br className="sm:hidden" />
            다음 행동을 <br className="sm:hidden" />
            찾지 못했을까?
          </h1>
          <p className="mt-6 break-keep text-lg font-normal leading-8 text-fg-muted">
            STEP Lifelong Education Platform
          </p>
          <p className="mt-2 text-base font-normal leading-7 text-fg-faint">
            From Content-heavy Portal to Learner-centered Education Journey
          </p>
        </div>
        <div className="border-t border-line pt-5">
          <dl className="space-y-5">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-fg-faint">Role</dt>
              <dd className="mt-2 break-keep text-sm leading-6 text-fg-muted">
                UX/UI Design · IA Structuring · Design Handoff
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-fg-faint">Scope</dt>
              <dd className="mt-2 break-keep text-sm leading-6 text-fg-muted">
                Home · Search · Course Flow · My Learning · Wiki · Responsive Review
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-fg-faint">Evidence</dt>
              <dd className="mt-2 break-keep text-sm leading-6 text-fg-muted">
                운영 화면 고화질 캡처 · IA / GNB / 검색 / 목록 / 상세 / 모바일 메뉴
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="mt-10 max-w-4xl space-y-5 text-base leading-8 text-fg-muted md:text-lg">
        <p className="break-keep">
          STEP은 단일 교육 사이트보다 여러 학습 서비스가 연결된 공공 포털에 가까웠습니다. 이러닝,
          K-디지털, 가상훈련, 에듀테크+, 위키, 커뮤니티, 업무지원까지 서로 다른 목적의 기능이 한
          화면 체계 안에 공존했습니다.
        </p>
        <p className="break-keep">
          검토한 지점은 콘텐츠 양보다, 학습자가 과정을 찾고, 비교하고, 신청하고, 이후 학습을 이어갈
          수 있도록 화면과 메뉴의 순서를 정리하는 것이었습니다.
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
    <figure className="mt-12 w-full min-w-0 max-w-full overflow-hidden rounded-lg border border-line bg-surface shadow-card 2xl:-mx-[120px]">
      <div className="grid items-start gap-3 bg-surface-2 p-3 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="min-w-0 max-w-full overflow-hidden rounded-md border border-line bg-white">
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
          <div className="min-w-0 max-w-full overflow-hidden rounded-md border border-line bg-white">
            <img
              src={stepScreens.sitemap}
              alt="STEP 전체 메뉴 IA 고화질 캡처 화면"
              loading="eager"
              decoding="async"
              draggable={false}
              className="block h-auto w-full max-w-full object-contain"
            />
          </div>
          <div className="min-w-0 max-w-full overflow-hidden rounded-md border border-line bg-white">
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
      <figcaption className="border-t border-line px-5 py-4 text-xs leading-6 text-fg-faint">
        고화질 캡처 화면 — 홈, 전체 메뉴 IA, 과정 목록을 연결해 학습자가 어디서 시작하고 어떻게
        탐색하는지 보여주는 구조
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
      <PriorityRationale>
        기능을 추가하면 해결될 것처럼 보였지만, 메뉴 30개+가 있는데도 탐색 이탈이 반복된다는 것은
        구조 문제였다. 기능 개선 전에 IA를 먼저 건드리지 않으면 어떤 화면 개선도 효과를 내기
        어렵다고 판단했다.
      </PriorityRationale>
      <div className="grid gap-5 md:grid-cols-2">
        {problems.map((p) => (
          <DefinitionCard key={p.title} title={p.title} body={p.body} />
        ))}
      </div>
      <ClosingText>
        각 항목은 &quot;기능이 없다&quot;보다 &quot;사용자가 다음 행동을 찾기 어렵다&quot;는
        관점에서 재정의했습니다. 이것이 기능 추가가 아닌 구조 재설계로 방향을 잡은 근거였습니다.
      </ClosingText>
      <ProblemStatement
        target="학습자"
        situation="30개 이상 메뉴가 있는 플랫폼에서 과정을 탐색할 때"
        pain="원하는 과정을 찾지 못하고 탐색 중 이탈이 반복된다"
        breakdown="기능은 충분하지만 학습자가 다음 행동을 찾지 못한다"
      />
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
      <div className="mb-8 border-t border-line pt-6">
        <p className="text-[11px] uppercase tracking-[0.16em] text-fg-faint">기존 기능 단위</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {original.map((item) => (
            <span
              key={item}
              className="rounded-full border border-line bg-surface-2 px-3 py-1.5 text-sm text-fg-muted"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-3 text-fg-faint">
          <div className="h-px flex-1 bg-surface-2" />
          <span className="text-xs uppercase tracking-widest">
            학습자 행동 목적 기준으로 재분류
          </span>
          <div className="h-px flex-1 bg-surface-2" />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {restructured.map((group) => (
          <div key={group.stage} className="border-t border-line pt-5">
            <div className="flex items-baseline gap-3">
              <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[11px] font-normal uppercase tracking-widest text-accent">
                {group.stage}
              </span>
              <span className="text-sm text-fg-faint">{group.label}</span>
            </div>
            <ul className="mt-4 space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="text-sm leading-6 text-fg-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <ClosingText>
        기능을 줄이기보다, 사용자가 과정을 찾고·비교하고·신청하고·이어서 학습하고·지식을 확장하는
        순서에 맞게 정보 구조를 다시 정리했습니다.
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
    "min-w-0 overflow-hidden rounded-lg border border-line bg-surface",
    screen.size === "wide" ? "md:col-span-2" : "",
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <figure className={figureClass}>
      <div className={compact ? "min-w-0 bg-surface-2 p-3" : "min-w-0 bg-surface-2 p-4"}>
        {isPhone ? (
          <div className="mx-auto max-w-[250px] rounded-xl border border-line-strong bg-surface-2 p-2 shadow-card">
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
          <div className="min-w-0 max-w-full overflow-hidden rounded-md border border-line bg-white">
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
      <figcaption className="border-t border-line px-5 py-4">
        <p className="text-[11px] uppercase tracking-[0.14em] text-fg-faint">{screen.label}</p>
        <p className="mt-1.5 break-keep text-sm font-normal leading-6 text-fg">{screen.title}</p>
        <p className="mt-2 break-keep text-xs leading-5 text-fg-faint">{screen.caption}</p>
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
      caption:
        "고화질 캡처 화면 — 이러닝, K-디지털, 가상훈련, 에듀테크+, 위키, 커뮤니티가 한 포털 안에서 어떻게 묶이는지 보여주는 IA 화면",
      src: stepScreens.sitemap,
      alt: "STEP 전체 메뉴 IA 고화질 캡처 화면",
    },
    {
      label: "IA / GNB",
      title: "상위 메뉴와 과정 탐색의 연결 구조",
      caption:
        "고화질 캡처 화면 — 메가메뉴에서 과정 탐색과 서비스 진입이 어떻게 분리되는지 확인할 수 있는 화면",
      src: stepScreens.megamenu,
      alt: "STEP GNB 메가메뉴 고화질 캡처 화면",
    },
    {
      label: "Search / Entry",
      title: "검색을 탐색 시작점으로 보강",
      caption:
        "고화질 캡처 화면 — 사용자가 정확한 과정명을 몰라도 추천 키워드와 결과 후보로 탐색을 시작할 수 있게 한 검색 구조",
      src: stepScreens.search,
      alt: "STEP 검색 자동완성 고화질 캡처 화면",
    },
    {
      label: "Mobile / IA",
      title: "모바일에서는 포털 구조를 접이식 메뉴로 재배치",
      caption:
        "고화질 캡처 화면 — 데스크톱 IA를 작은 화면에서도 잃지 않도록 주요 서비스 진입을 메뉴 구조로 재정리한 화면",
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
        고화질 캡처는 단순한 화면 나열로 두지 않고, 사용자가 포털에서 길을 찾고 수강 여부를 검토하는
        구조를 설명하기 위한 근거로 사용했습니다.
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
            className="grid gap-4 border-t border-line pt-5 md:grid-cols-[auto_1fr_1fr]"
          >
            <div className="flex items-center gap-3 md:block">
              <span className="text-[11px] uppercase tracking-widest text-fg-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="ml-2 text-sm font-normal text-fg md:ml-0 md:mt-2 md:block">
                {s.stage}
              </span>
            </div>
            <p className="break-keep text-sm leading-7 text-fg-muted md:border-l md:border-line md:pl-5">
              &quot;{s.question}&quot;
            </p>
            <p className="break-keep text-sm leading-7 text-fg-faint md:border-l md:border-line md:pl-5">
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
          <div key={g.title} className="border-t border-line pt-6">
            <p className="text-[11px] uppercase tracking-[0.16em] text-fg-faint">{g.sub}</p>
            <h3 className="mt-2 text-base font-normal text-fg">{g.title}</h3>
            <ul className="mt-4 space-y-2">
              {g.items.map((item) => (
                <li key={item} className="text-sm leading-6 text-fg-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <ClosingText>
        기능을 더 넣기보다, 정보가 놓이는 순서를 다시 잡는 것이 핵심이었습니다. 사용자가 어떤 정보를
        먼저 보고 어떤 행동으로 이어져야 하는지를 기준으로 화면 구조를 정리했습니다.
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
          <div key={d.number} className="border-t border-line pt-6">
            <p className="text-[11px] uppercase tracking-[0.16em] text-fg-faint">{d.number}</p>
            <h3 className="mt-3 break-keep text-[17px] font-normal leading-7 text-fg">{d.title}</h3>
            <p className="mt-4 break-keep text-sm leading-7 text-fg-muted">{d.body}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {d.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line bg-surface-2 px-3 py-1 text-xs text-fg-faint"
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
        이 케이스는 전체 퍼블리싱 담당 사례로 두기보다, 설계 의도와 구현 결과 사이의 간격을 줄인
        협업 사례로 표현됩니다. 현재 운영 중인 STEP 화면은 협업을 통해 구현된 결과이며, 본 케이스는
        그 중 UX/UI 설계 기여 범위를 중심으로 서술합니다.
      </ClosingText>
      <figure className="mt-8 overflow-hidden rounded-lg border border-line bg-surface">
        <div className="min-w-0 bg-surface-2 p-3">
          <div className="min-w-0 max-w-full overflow-hidden rounded-md border border-line bg-white">
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
        <figcaption className="border-t border-line px-5 py-4 text-xs leading-6 text-fg-faint">
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
        <div className="border-t border-line pt-6">
          <p className="text-[11px] uppercase tracking-[0.16em] text-fg-faint">Design Outcome</p>
          <ul className="mt-5 space-y-3">
            {outcomes.map((o) => (
              <li key={o} className="break-keep text-sm leading-7 text-fg-muted">
                {o}
              </li>
            ))}
          </ul>
        </div>
        <NumberedList title="Next Metrics — 운영 후 검증 지표" items={nextMetrics} />
      </TwoColumn>
      <ClosingText>
        위 지표는 측정된 성과값이 아니며 정식 운영 후 확인해야 할 검증 지표입니다. 이 구조가 실제로
        효과가 있었는지는 운영 데이터와 사용자 행동을 통해 확인해야 합니다.
      </ClosingText>
      <OpenQuestion>
        이번 IA 재설계가 실제 탐색 성공률과 수강 전환율에 어떤 영향을 미쳤는지는 운영 데이터로만
        확인 가능하다. 재방문율과 과정 등록 전환율을 추적해 구조 변화의 효과를 정량적으로 검증하는
        것이 다음 단계다.
      </OpenQuestion>
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
      <CollaborationMoment
        situation="개발사가 기존 메뉴 구조를 최대한 유지하길 원했다. 학습자 탐색 흐름 기준으로 보면 GNB 재구성이 필요했지만, 전면 재설계보다 기존 기능을 새 IA에 흡수하는 방식을 선택했다."
        evidence="운영 화면 고화질 캡처를 기반으로 메뉴 항목이 학습 행동 목적과 맞지 않는 지점을 시각화했다. 학습 여정 단계 기준으로 재분류한 IA 초안을 함께 제시해 변경 범위와 기대 효과를 구체적으로 설명했다."
        result="메뉴명과 1·2뎁스 구조는 변경하되, 기존 기능은 새 IA에 흡수하는 방식으로 합의했다. 개발 공수를 최소화하면서 탐색 흐름을 개선하는 방향이 채택됐다."
      />
      <div className="mt-10 flex justify-start">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-normal text-fg-faint transition hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          ← Back to Work
        </Link>
      </div>
    </CaseSection>
  )
}
