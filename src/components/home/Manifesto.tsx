import { SectionHeading } from "@/components/ui/SectionHeading"

export function Manifesto() {
  return (
    <section className="border-y border-white/10 bg-[#0B0B10]">
      <div className="mx-auto grid max-w-content gap-10 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14 lg:py-32">
        <SectionHeading title="제품은 출시된 뒤부터 더 어려워집니다." />
        <div className="lg:pt-2">
          <div className="space-y-6 break-keep text-[18px] font-normal leading-9 text-[#999] md:text-xl md:leading-10">
            <p>
              사용자는 기능이 없어서만 멈추지 않습니다. 너무 많은 뎁스, 불명확한
              판단 기준, 반복되는 예외 때문에 멈춥니다.
            </p>
            <p>
              저는 이미 작동하는 제품 안에서 사용자가 왜 망설이는지, 어디서 판단이
              끊기는지, 어떤 구조를 덜어내야 행동으로 이어지는지를 봅니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
