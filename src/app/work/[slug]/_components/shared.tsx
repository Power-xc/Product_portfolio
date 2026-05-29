import type { CSSProperties, ReactNode } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import type { Hypothesis, LearningNote, Metric, QuoteItem } from "../_lib/types"

export function CaseStudyShell({ children, accent }: { children: ReactNode; accent?: string }) {
  return (
    <div
      className="min-h-screen bg-background text-fg"
      style={accent ? ({ "--case-accent": accent } as CSSProperties) : undefined}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export function AccentGlow({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-10 rounded-full opacity-40 blur-3xl ${className}`}
      style={{
        background: "radial-gradient(closest-side, var(--case-accent, #c9b6ff), transparent 70%)",
      }}
    />
  )
}

export function HeroAtmosphere({
  colorA = "var(--case-accent, #c9b6ff)",
  colorB,
}: {
  colorA?: string
  colorB?: string
}) {
  const tone = (c: string) => `radial-gradient(closest-side, ${c}, transparent 70%)`
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[760px] w-screen -translate-x-1/2 overflow-hidden"
    >
      <div
        className="absolute -left-[12%] -top-[24%] h-[620px] w-[680px] rounded-full opacity-30 blur-[130px]"
        style={{ background: tone(colorA) }}
      />
      <div
        className="absolute right-[2%] -top-[10%] h-[460px] w-[460px] rounded-full opacity-[0.18] blur-[150px]"
        style={{ background: tone(colorB ?? colorA) }}
      />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background" />
    </div>
  )
}

export function PullQuote({ quote, source }: { quote: string; source?: string }) {
  return (
    <figure className="mx-auto max-w-content px-5 py-[88px] md:px-8 md:py-[120px]">
      <blockquote className="mx-auto max-w-4xl break-keep text-center text-[clamp(1.6rem,3.6vw,2.4rem)] font-normal italic leading-[1.4] text-fg">
        &ldquo;{quote}&rdquo;
      </blockquote>
      {source ? (
        <figcaption className="mt-8 text-center text-sm font-normal not-italic tracking-[0.04em] text-fg-faint">
          — {source}
        </figcaption>
      ) : null}
    </figure>
  )
}

export function CaseSection({
  number,
  title,
  description,
  children,
  tone = "base",
}: {
  number: string
  title: string
  description: string
  children: ReactNode
  tone?: "base" | "raised"
}) {
  return (
    <section className={`border-t border-line ${tone === "raised" ? "bg-raised" : ""}`}>
      <div className="mx-auto max-w-content px-5 py-[88px] md:px-8 md:py-[120px]">
        <div className="grid gap-10 lg:grid-cols-[0.22fr_1fr]">
          <p className="text-[12px] font-normal uppercase tracking-[0.18em] text-fg-faint">
            {number}
          </p>
          <div className="min-w-0">
            <h2 className="max-w-4xl break-keep text-[clamp(2rem,4.4vw,52px)] font-normal leading-[1.14] text-fg">
              {title}
            </h2>
            <p className="mt-6 max-w-3xl break-keep text-base font-normal leading-[1.7] text-fg-muted md:text-[17px]">
              {description}
            </p>
            <div className="mt-12 min-w-0">{children}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HypothesisSection({
  number,
  title,
  description,
  hypotheses,
  learningNote,
}: {
  number: string
  title: string
  description: string
  hypotheses: Hypothesis[]
  learningNote?: LearningNote
}) {
  return (
    <CaseSection number={number} title={title} description={description}>
      <div className="grid gap-6 lg:grid-cols-3">
        {hypotheses.map((h) => (
          <div key={h.id} className="border-t border-line pt-6">
            <div className="flex items-center justify-between">
              <p className="text-[12px] uppercase tracking-[0.16em] text-fg-faint">가설 {h.id}</p>
              <span className="rounded-full border border-line bg-surface-2 px-2 py-1 text-[11px] text-fg-faint">
                {h.tag}
              </span>
            </div>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-fg-faint">If</p>
                <p className="mt-2 break-keep text-sm leading-6 text-fg">{h.ifStatement}</p>
              </div>
              <div className="border-t border-line pt-4">
                <p className="text-[11px] uppercase tracking-[0.16em] text-fg-faint">Then</p>
                <p className="mt-2 break-keep text-sm leading-6 text-fg">{h.thenStatement}</p>
              </div>
              <div className="border-t border-line pt-4">
                <p className="text-[11px] uppercase tracking-[0.16em] text-fg-faint">검증 지표</p>
                <p className="mt-2 break-keep text-[13px] leading-6 text-fg-muted">{h.metric}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {learningNote && (
        <div className="mt-6 border-t border-line pt-6">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-line-strong bg-surface-2 px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-fg-faint">
              {learningNote.hypothesis} · 회고
            </span>
            <p className="text-[12px] uppercase tracking-[0.12em] text-fg-faint">
              가설이 수정된 지점
            </p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.14em] text-fg-faint">예상</p>
              <p className="mt-2 break-keep text-sm leading-6 text-fg-muted">
                {learningNote.expected}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.14em] text-fg-faint">실제</p>
              <p className="mt-2 break-keep text-sm leading-6 text-fg">{learningNote.actual}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.14em] text-fg-faint">변경한 것</p>
              <p className="mt-2 break-keep text-sm leading-6 text-fg-muted">
                {learningNote.change}
              </p>
            </div>
          </div>
        </div>
      )}
    </CaseSection>
  )
}

export function MetricGrid({ metrics, accent = false }: { metrics: Metric[]; accent?: boolean }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <div key={metric.label} className="border-t border-line pt-6">
          <p className="text-[11px] uppercase tracking-[0.16em] text-fg-faint">{metric.context}</p>
          <p
            className={`mt-4 text-[clamp(2rem,5vw,3.4rem)] font-normal leading-none ${
              accent ? "text-[color:var(--case-accent)]" : "text-fg"
            }`}
          >
            {metric.value}
          </p>
          <p className="mt-5 break-keep text-sm leading-6 text-fg-muted">{metric.label}</p>
        </div>
      ))}
    </div>
  )
}

export function TagText({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-line bg-surface px-3 py-1 text-[11px] leading-5 text-fg-muted">
      {children}
    </span>
  )
}

export function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border-t border-line pt-6">
      <h3 className="break-keep text-xl font-normal leading-7 text-fg">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  )
}

export function DiagramCard({ title, nodes }: { title: string; nodes: string[] }) {
  return (
    <div className="border-t border-line pt-6">
      <h3 className="text-xl font-normal text-fg">{title}</h3>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        {nodes.map((node, index) => (
          <div key={`${title}-${node}`} className="flex items-center gap-3">
            <span className="rounded-full border border-line bg-surface-2 px-4 py-2 text-sm text-fg-muted">
              {node}
            </span>
            {index < nodes.length - 1 ? <span className="text-fg-faint">→</span> : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export function TwoColumn({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`grid gap-5 lg:grid-cols-2 ${className}`}>{children}</div>
}

export function SimpleTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
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
          <tr key={row.join("-")} className="border-t border-line">
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

export function ResponsiveTable({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-full overflow-x-auto rounded-lg border border-line bg-surface">
      <table className="min-w-[760px] w-full border-collapse text-left">{children}</table>
    </div>
  )
}

export function TableHead({ children }: { children: ReactNode }) {
  return (
    <th className="px-5 py-4 text-[11px] font-normal uppercase tracking-[0.14em] text-fg-faint">
      {children}
    </th>
  )
}

export function TableCell({
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
        strong ? "text-fg" : muted ? "text-fg-faint" : "text-fg-muted"
      }`}
    >
      {children}
    </td>
  )
}

export function ClosingText({ children }: { children: ReactNode }) {
  return (
    <p className="mt-8 max-w-3xl break-keep border-l border-line-strong pl-5 text-lg font-normal leading-8 text-fg-muted">
      {children}
    </p>
  )
}

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-t border-line pt-6">
      <p className="break-keep text-xl font-normal leading-7 text-fg">{value}</p>
      <p className="mt-4 text-sm leading-6 text-fg-faint">{label}</p>
    </div>
  )
}

export function QuoteCard({ item }: { item: QuoteItem }) {
  return (
    <figure className="border-t border-line pt-6">
      <figcaption className="text-sm leading-6 text-fg-faint">
        {item.store} — {item.meta}
      </figcaption>
      <blockquote className="mt-5">
        <p className="break-keep text-lg font-normal italic leading-8 text-fg">
          &quot;{item.quote}&quot;
        </p>
      </blockquote>
    </figure>
  )
}

export function BeforeAfterCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border-t border-line pt-6">
      <h3 className="text-xl font-normal text-fg">{title}</h3>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item} className="break-keep text-sm leading-7 text-fg-muted">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function DesignBlock({
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
    <section className={`border-t border-line pt-6 md:pt-8 ${compact ? "" : "mb-8"}`}>
      <p className="text-[11px] uppercase tracking-[0.18em] text-fg-faint">{eyebrow}</p>
      <h3 className="mt-4 break-keep text-xl font-normal leading-tight text-fg md:text-2xl">
        {title}
      </h3>
      <p className="mt-5 max-w-3xl break-keep text-sm leading-7 text-fg-muted md:text-base md:leading-8">
        {body}
      </p>
      {children ? <div className="mt-6">{children}</div> : null}
      {researchLink && !compact ? (
        <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
          <span className="rounded-full border border-line-strong bg-surface-2 px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-fg-faint">
            {researchLink.hypothesis}
          </span>
          <p className="text-[12px] leading-5 text-fg-faint">{researchLink.findings}</p>
        </div>
      ) : null}
    </section>
  )
}

export function ScreenFigure({
  src,
  alt,
  caption,
  wide = false,
  mobile = false,
  eager = false,
}: {
  src?: string
  alt: string
  caption: string
  wide?: boolean
  mobile?: boolean
  eager?: boolean
}) {
  const imageLoading = eager ? "eager" : "lazy"

  return (
    <figure
      className={`overflow-hidden rounded-lg border border-line bg-surface shadow-card ${
        wide ? "2xl:-mx-[120px]" : ""
      }`}
    >
      <div
        className={`flex bg-surface-2 ${
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
          <div className="flex min-h-[280px] w-full items-center justify-center rounded-md border border-line bg-surface text-sm text-fg-faint">
            Image placeholder
          </div>
        )}
      </div>
      <figcaption className="border-t border-line px-5 py-4 text-xs leading-6 text-fg-faint">
        {caption}
      </figcaption>
    </figure>
  )
}

export function CompactFigure({
  src,
  alt,
  caption,
  eager = false,
}: {
  src: string
  alt: string
  caption: string
  eager?: boolean
}) {
  const imageLoading = eager ? "eager" : "lazy"

  return (
    <figure className="overflow-hidden rounded-lg border border-line bg-surface shadow-card">
      <div className="aspect-[4/3] bg-surface-2 p-2">
        <img
          src={src}
          alt={alt}
          loading={imageLoading}
          decoding="async"
          draggable={false}
          className="h-full w-full rounded-md object-contain"
        />
      </div>
      <figcaption className="border-t border-line px-4 py-3 text-xs leading-5 text-fg-faint">
        {caption}
      </figcaption>
    </figure>
  )
}

export function ListCard({
  title,
  items,
  intro,
}: {
  title: string
  items: string[]
  intro?: string
}) {
  return (
    <div className="border-t border-line pt-6">
      <h3 className="break-keep text-xl font-normal text-fg">{title}</h3>
      {intro ? <p className="mt-4 text-sm leading-7 text-fg-faint">{intro}</p> : null}
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="break-keep text-sm leading-7 text-fg-muted">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function NumberedList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="border-t border-line pt-6">
      <h3 className="text-xl font-normal text-fg">{title}</h3>
      <ol className="mt-6 space-y-4">
        {items.map((item, index) => (
          <li key={item} className="grid grid-cols-[42px_1fr] gap-4 text-sm leading-7">
            <span className="text-fg-faint">{String(index + 1).padStart(2, "0")}</span>
            <span className="break-keep text-fg-muted">{item}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
