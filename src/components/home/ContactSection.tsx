import { ButtonLink } from "@/components/ui/ButtonLink"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { contactHref, contactLinks } from "@/lib/home-content"

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-24 lg:py-32">
      <div className="grid gap-10 border-t border-white/10 pt-12 md:pt-14 lg:grid-cols-[1fr_0.78fr]">
        <div>
          <SectionHeading title="좋은 제품은 더 많은 기능보다, 더 명확한 판단 구조에서 시작된다고 믿습니다." />
          <div className="mt-7 space-y-5 break-keep text-base font-normal leading-8 text-[#999] md:text-lg">
            <p>
              복잡한 시스템을 단순히 보기 좋게 만드는 것보다, 사용자가 이해하고
              판단하고 행동할 수 있는 구조로 바꾸는 일에 집중합니다.
            </p>
            <p>
              UX 리서치, IA 재설계, AI UX, 운영툴 UX, 프론트엔드 협업을 연결해
              제품이 더 명확하게 작동하도록 설계합니다.
            </p>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={contactHref}>Contact Me</ButtonLink>
            <button
              type="button"
              disabled
              className="inline-flex min-h-12 cursor-not-allowed items-center justify-center rounded-full border border-white/10 px-5 text-sm font-medium text-white/30 sm:w-fit"
            >
              Download Resume
            </button>
          </div>
        </div>
        <aside className="border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <dl className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
            <div className="border-b border-white/10 pb-5 sm:border-b-0 sm:pb-0 lg:border-b lg:pb-5">
              <dt className="text-[11px] font-normal uppercase tracking-[0.16em] text-white/30 md:text-xs">
                Name
              </dt>
              <dd className="mt-2 break-keep text-[15px] leading-6 text-white/85">
                Kangkeun Park / 박강근
              </dd>
            </div>
            <div className="border-b border-white/10 pb-5 sm:border-b-0 sm:pb-0 lg:border-b lg:pb-5">
              <dt className="text-[11px] font-normal uppercase tracking-[0.16em] text-white/30 md:text-xs">
                Role
              </dt>
              <dd className="mt-2 break-keep text-[15px] leading-6 text-white/85">
                Product Designer / AI UX / Enterprise UX
              </dd>
            </div>
            <div className="border-b border-white/10 pb-5 sm:border-b-0 sm:pb-0 lg:border-b lg:pb-5">
              <dt className="text-[11px] font-normal uppercase tracking-[0.16em] text-white/30 md:text-xs">
                Location
              </dt>
              <dd className="mt-2 break-keep text-[15px] leading-6 text-white/85">
                Uiwang-si, Gyeonggi-do
              </dd>
            </div>
            <div className="sm:col-span-3 lg:col-span-1">
              <dt className="text-[11px] font-normal uppercase tracking-[0.16em] text-white/30 md:text-xs">
                Links
              </dt>
              <dd className="mt-3 flex flex-wrap gap-x-5 gap-y-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="border-b border-white/20 pb-1 text-sm text-white/65 transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    {link.label}
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  )
}
