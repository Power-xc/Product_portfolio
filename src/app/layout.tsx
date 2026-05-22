import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Kangkeun Park · Product Designer",
  description:
    "Product Designer focused on AI UX, Enterprise UX, and Product 1.1 for complex systems.",
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#08080C",
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
