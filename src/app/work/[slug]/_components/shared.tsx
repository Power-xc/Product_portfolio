import type { ReactNode } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import type { Hypothesis, LearningNote, Metric, QuoteItem } from "../_lib/types"

export function CaseStudyShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export function CaseSection({
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
      {learningNote && (
        <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.02] p-6">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-white/45">
              {learningNote.hypothesis} · 회고
            </span>
            <p className="text-[12px] uppercase tracking-[0.12em] text-white/25">
              가설이 수정된 지점
            </p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.14em] text-white/30">예상</p>
              <p className="mt-2 break-keep text-sm leading-6 text-white/55">
                {learningNote.expected}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.14em] text-white/30">실제</p>
              <p className="mt-2 break-keep text-sm leading-6 text-white">{learningNote.actual}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.14em] text-white/30">변경한 것</p>
              <p className="mt-2 break-keep text-sm leading-6 text-white/55">
                {learningNote.change}
              </p>
            </div>
          </div>
        </div>
      )}
    </CaseSection>
  )
}

export function MetricGrid({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <div key={metric.label} className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <p className="text-[11px] uppercase tracking-[0.16em] text-white/35">{metric.context}</p>
          <p className="mt-4 text-[clamp(2rem,5vw,3.4rem)] font-normal leading-none text-white">
            {metric.value}
          </p>
          <p className="mt-5 break-keep text-sm leading-6 text-white/55">{metric.label}</p>
        </div>
      ))}
    </div>
  )
}

export function TagText({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-[11px] leading-5 text-white/50">
      {children}
    </span>
  )
}

export function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
      <h3 className="break-keep text-xl font-normal leading-7 text-white">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  )
}

export function DiagramCard({ title, nodes }: { title: string; nodes: string[] }) {
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

export function ResponsiveTable({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-full overflow-x-auto rounded-lg border border-white/10 bg-white/[0.035]">
      <table className="min-w-[760px] w-full border-collapse text-left">{children}</table>
    </div>
  )
}

export function TableHead({ children }: { children: ReactNode }) {
  return (
    <th className="px-5 py-4 text-[11px] font-normal uppercase tracking-[0.14em] text-white/35">
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
        strong ? "text-white" : muted ? "text-white/40" : "text-white/60"
      }`}
    >
      {children}
    </td>
  )
}

export function ClosingText({ children }: { children: ReactNode }) {
  return (
    <p className="mt-8 max-w-3xl break-keep border-l border-white/15 pl-5 text-lg font-normal leading-8 text-white/70">
      {children}
    </p>
  )
}

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
      <p className="break-keep text-xl font-normal leading-7 text-white">{value}</p>
      <p className="mt-4 text-sm leading-6 text-white/45">{label}</p>
    </div>
  )
}

export function QuoteCard({ item }: { item: QuoteItem }) {
  return (
    <figure className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
      <figcaption className="text-sm leading-6 text-white/45">
        {item.store} — {item.meta}
      </figcaption>
      <blockquote className="mt-5">
        <p className="break-keep text-lg font-normal italic leading-8 text-white/80">
          &quot;{item.quote}&quot;
        </p>
      </blockquote>
    </figure>
  )
}

export function BeforeAfterCard({ title, items }: { title: string; items: string[] }) {
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

export function NumberedList({ title, items }: { title: string; items: readonly string[] }) {
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
