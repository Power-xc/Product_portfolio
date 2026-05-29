import Link from "next/link"

const footerLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Sitemap", href: "/sitemap" },
]

export function Footer() {
  return (
    <footer className="border-t border-line bg-background">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-5 py-10 text-sm text-fg-muted md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-normal text-fg">Kangkeun Park</p>
          <p className="mt-2">Product Designer focused on AI · Enterprise UX · Product 1.1</p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p>© 2026 Kangkeun Park</p>
        </div>
      </div>
    </footer>
  )
}
