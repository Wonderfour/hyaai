import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-foreground/[.06] blur-3xl" />
          <div className="absolute -bottom-24 right-[-120px] h-[360px] w-[360px] rounded-full bg-foreground/[.08] blur-3xl" />
        </div>
        <Container>
          <div className="py-16 sm:py-20 lg:py-24 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/70 px-3 py-1 text-xs text-foreground/70">
                <span className="size-1.5 rounded-full bg-foreground/60" />
                高强度 · 耐候 · 可定制
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                专注绳网产品与安全防护解决方案
              </h1>
              <p className="text-foreground/75 leading-relaxed">
                覆盖建筑临边防护、工业安全防坠、体育训练攀爬、物流捆绑固定等多场景。支持尺寸、孔径、材质、颜色与配件定制。
              </p>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/products">查看产品与方案</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  获取报价与打样
                </ButtonLink>
                <ButtonLink href="/applications" variant="ghost">
                  了解应用案例 →
                </ButtonLink>
              </div>
              <div className="grid grid-cols-3 gap-3 pt-2 text-xs text-foreground/65">
                <div className="rounded-2xl border border-foreground/10 bg-background/60 p-3">
                  <div className="text-base font-semibold text-foreground">≥ 5000</div>
                  <div>可选规格组合</div>
                </div>
                <div className="rounded-2xl border border-foreground/10 bg-background/60 p-3">
                  <div className="text-base font-semibold text-foreground">7–15 天</div>
                  <div>常规交期</div>
                </div>
                <div className="rounded-2xl border border-foreground/10 bg-background/60 p-3">
                  <div className="text-base font-semibold text-foreground">批量/定制</div>
                  <div>可打样</div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-foreground/10 bg-gradient-to-br from-foreground/[.06] to-transparent p-6">
              <div className="rounded-2xl border border-foreground/10 bg-background/70 p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">快速选型</div>
                  <div className="text-xs text-foreground/60">支持定制参数</div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 text-sm">
                  {[
                    { t: "安全防护网", d: "建筑/高空作业防坠落" },
                    { t: "货物捆绑网", d: "物流/车载固定" },
                    { t: "围网与隔离网", d: "场地边界/设备隔离" },
                    { t: "训练攀爬网", d: "体能/拓展训练" },
                  ].map((x) => (
                    <div
                      key={x.t}
                      className="rounded-2xl border border-foreground/10 bg-background p-4 hover:bg-foreground/[.03] transition-colors"
                    >
                      <div className="font-medium">{x.t}</div>
                      <div className="text-foreground/70 text-xs mt-1">{x.d}</div>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl bg-foreground/[.03] p-4 text-xs text-foreground/70 leading-relaxed">
                  需要选型建议？把使用场景、尺寸、承载要求发给我们，我们给你一份可落地的规格建议与报价区间。
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16 border-y border-foreground/10">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                t: "材质与工艺",
                d: "尼龙/涤纶/聚乙烯等多材质可选，支持热定型、包边与多种连接方式。",
              },
              {
                t: "质量与检测",
                d: "按需提供拉力/耐磨/耐候等检测方案，满足不同场景安全冗余。",
              },
              {
                t: "交付与服务",
                d: "从打样到批量一站式，支持图纸/样品来图来样定制与售后响应。",
              },
            ].map((x) => (
              <div key={x.t} className="rounded-3xl border border-foreground/10 p-6">
                <div className="font-semibold">{x.t}</div>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                  {x.d}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <div className="text-sm text-foreground/70">推荐方案</div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                常见场景的绳网组合
              </h2>
            </div>
            <ButtonLink href="/products" variant="secondary">
              进入产品页 →
            </ButtonLink>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                t: "建筑临边防护",
                d: "临边防护网 + 立网 + 连接扣件（可按楼层尺寸定制）",
              },
              {
                t: "工业设备隔离",
                d: "围网/隔离网 + 加固绳 + 快装挂点（便于维护拆装）",
              },
              {
                t: "物流车载固定",
                d: "弹力捆绑网 + 织带包边 + 挂钩（提升装卸效率）",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-3xl border border-foreground/10 p-6 hover:bg-foreground/[.02] transition-colors"
              >
                <div className="font-semibold">{x.t}</div>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                  {x.d}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-foreground/10 bg-foreground/[.03] p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <div className="font-semibold">拿到一份可执行的规格建议</div>
              <div className="text-sm text-foreground/70">
                发送场景/尺寸/承载需求，我们 1 个工作日内回复。
              </div>
            </div>
            <div className="flex gap-3">
              <ButtonLink href="/contact">立即咨询</ButtonLink>
              <ButtonLink href="/about" variant="secondary">
                了解我们
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
