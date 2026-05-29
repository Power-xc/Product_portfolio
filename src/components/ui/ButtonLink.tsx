import Link from "next/link"
import type { ReactNode } from "react"

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: "primary" | "secondary"
}

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  const variantClass =
    variant === "primary"
      ? "bg-white text-background hover:bg-[#DADADA] focus-visible:outline-accent"
      : "border border-white/20 text-white/75 hover:border-white/45 hover:text-white focus-visible:outline-accent"

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-medium transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 sm:w-fit ${variantClass}`}
    >
      {children}
    </Link>
  )
}
