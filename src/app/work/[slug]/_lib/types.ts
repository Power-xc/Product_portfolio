export type Metric = {
  value: string
  label: string
  context: string
}

export type InfoItem = {
  label: string
  value: string
}

export type QuoteItem = {
  store: string
  meta: string
  quote: string
}

export type Persona = {
  name: string
  profile: string
  quote: string
}

export type JourneyRow = {
  stage: string
  time: string
  before: string
  beforeState: string
  after: string
  afterState: string
}

export type Principle = {
  insight: string
  principle: string
  design: string
}

export type ResearchPattern = {
  title: string
  body: string
}

export type RequirementRow = {
  requirement: string
  problem: string
  solution: string
  metric: string
  hypothesis: string
}

export type SortingRow = {
  item: string
  recommend: string
  donut: string
  beverage: string
  hotMeal: string
}

export type DepthRow = {
  task: string
  asIs: string
  toBe: string
  change: string
}

export type ScreenItem = {
  title: string
  description: string
  src: string
  alt: string
  type?: "desktop" | "mobile"
}

export type TradeOff = {
  title: string
  items: string[]
}

export type Hypothesis = {
  id: string
  ifStatement: string
  thenStatement: string
  metric: string
  tag: string
}

export type LearningNote = {
  hypothesis: string
  expected: string
  actual: string
  change: string
}

export type StepScreenSize = "standard" | "wide" | "phone"

export type StepScreenItem = {
  label: string
  title: string
  caption: string
  src: string
  alt: string
  size?: StepScreenSize
}
