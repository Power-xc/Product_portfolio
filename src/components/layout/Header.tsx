import Link from "next/link"
import { navItems } from "@/lib/home-content"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/95">
      <div className="mx-auto flex max-w-content flex-col gap-3 px-5 py-4 md:h-16 md:flex-row md:items-center md:justify-between md:px-8">
        <Link
          href="/"
          className="w-fit text-[15px] font-normal text-[#999] transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:text-[17px]"
        >
          KANGKEUN PARK / 박강근
        </Link>
        <nav
          aria-label="Primary navigation"
          className="-mx-1 flex items-center gap-x-5 overflow-x-auto whitespace-nowrap px-1 pb-1 md:mx-0 md:gap-x-8 md:overflow-visible md:px-0 md:pb-0"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-normal text-white/55 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
