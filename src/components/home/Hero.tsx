import { ButtonLink } from "@/components/ui/ButtonLink"

export function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100svh-72px)] max-w-content items-center px-5 py-16 md:px-8 md:py-20 lg:min-h-[680px] lg:py-24">
      <div className="w-full max-w-[1040px]">
        <p className="text-[15px] font-normal leading-7 text-[#999] md:text-[20px]">
          Product 1.1 for the AX Era
        </p>
        <h1 className="mt-7 break-keep text-[clamp(2.45rem,9.6vw,71px)] font-normal leading-[1.13] text-[#999]">
          <span>AX 시대,</span>
          <br />
          <span>1에서 2로 키우기보다</span>
          <br />
          <span className="text-white">제품의 1.1을 집요하게 설계하는</span>
          <br />
          <span className="text-white">Product Designer</span>
        </h1>
        <div className="mt-8 max-w-none break-keep text-[16px] font-normal leading-8 text-[#999] md:text-[17px] md:leading-9">
          <p>
            <span className="lg:whitespace-nowrap">
              AX 시대의 UI/UX는 더 빠르게 만드는 것보다, 사용자가 더 잘 판단하고 행동하게 만드는 구조에 가깝다고 생각합니다.
            </span>
            <br />
            <span className="block">
              저는 복잡한 시스템의 뎁스를 줄이고, 명확한 경험으로 다시 설계합니다.
            </span>
          </p>
        </div>
        <div className="mt-9 grid max-w-[860px] gap-3 border-y border-white/10 py-5 text-sm leading-6 text-white/55 sm:grid-cols-3">
          <p className="font-normal text-white">Kangkeun Park</p>
          <p>Product Designer · AI UX · Enterprise UX</p>
          <p>Uiwang-si, Gyeonggi-do</p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/work">View Work</ButtonLink>
          <ButtonLink href="/about" variant="secondary">
            About
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
