import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "关于我们",
  description: "绳网产品的选型、定制、打样与交付团队介绍。",
};

export default function AboutPage() {
  return (
    <Container>
      <div className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              关于我们
            </h1>
            <p className="text-foreground/75 leading-relaxed">
              我们专注绳网类产品的方案选型与定制交付。面向不同承载、耐候、耐磨、安装方式的需求，提供可落地的规格建议、打样与批量供货。
            </p>
            <div className="flex gap-3">
              <ButtonLink href="/contact">联系合作</ButtonLink>
              <ButtonLink href="/products" variant="secondary">
                浏览产品
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-3xl border border-foreground/10 bg-foreground/[.03] p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { t: "服务范围", d: "选型建议 / 定制打样 / 批量交付" },
                { t: "常见材质", d: "尼龙 / 涤纶 / 聚乙烯等" },
                { t: "可选工艺", d: "包边加固 / 热定型 / 多挂点" },
                { t: "适用行业", d: "建筑 / 工业 / 体育 / 物流" },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl bg-background/70 p-5">
                  <div className="font-semibold">{x.t}</div>
                  <div className="mt-1 text-sm text-foreground/70">{x.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            {
              t: "以场景为中心",
              d: "同一个“网”在不同环境下的耐候、耐磨、安装方式差异很大，我们优先从场景拆解需求。",
            },
            {
              t: "以安全为底线",
              d: "对防护类产品给出安全冗余建议与注意事项，确保规格选型可执行、可交付。",
            },
            {
              t: "以交付为结果",
              d: "从打样、参数确认到批量出货，全流程对齐验收口径，减少返工与风险。",
            },
          ].map((x) => (
            <div
              key={x.t}
              className="rounded-3xl border border-foreground/10 p-6"
            >
              <div className="font-semibold">{x.t}</div>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                {x.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

