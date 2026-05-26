import { SectionHeading } from "@/components/ui/SectionHeading"
import { Tag } from "@/components/ui/Tag"
import { tools, workflowCards, workflowFlow } from "@/lib/home-content"

export function AIWorkflow() {
  return (
    <section id="ai-workflow" className="border-y border-white/10 bg-[#0B0B10]">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <SectionHeading title="AI는 더 빨리 만들기보다, 더 빨리 검증하기 위한 방식입니다." />
          <div className="space-y-6 break-keep text-base font-normal leading-8 text-[#999] md:text-lg">
            <p>
              저는 AI를 활용해 리서치 요약, IA 탐색, 와이어프레임, Frontend Draft를
              빠르게 만듭니다.
            </p>
            <p>
              목적은 결과물을 대신 만드는 것이 아니라, 고객·기획·디자인·개발이 같은
              화면을 보며 방향성 리스크를 줄이는 것입니다.
            </p>
            <p>
              동시에 Harness, Memory System 같은 작업 구조를 실험하며 AI의 한계를
              인지하고, AI가 맡을 영역과 사람이 판단해야 할 영역의 경계를 계속
              찾아가고 있습니다.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3">
          {workflowCards.map((card) => (
            <article
              key={card.title}
              className="rounded-lg border border-white/10 bg-white/[0.018] p-5 md:p-6"
            >
              <h3 className="text-xl font-normal text-white">{card.title}</h3>
              <p className="mt-4 break-keep text-sm font-normal leading-7 text-white/55">
                {card.body}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-6 rounded-lg border border-white/10 bg-background/70 p-4 md:mt-8 md:p-6">
          <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center">
            {workflowFlow.map((item, index) => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-full rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-sm font-normal text-white/60 md:w-auto">
                  {item}
                </span>
                {index < workflowFlow.length - 1 ? (
                  <span className="hidden text-white/30 md:inline">→</span>
                ) : null}
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <Tag key={tool}>{tool}</Tag>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
