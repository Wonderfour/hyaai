import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "应用案例",
  description: "绳网在建筑、工业、体育与物流场景的应用方式与落地要点。",
};

const cases = [
  {
    title: "建筑临边防护",
    points: ["按楼层尺寸定制", "边缘包边加固", "挂点与连接件配套"],
  },
  {
    title: "仓储与物流固定",
    points: ["弹力/无弹可选", "快速挂钩安装", "耐磨与防刮处理"],
  },
  {
    title: "体育训练与拓展",
    points: ["节点加固与防松", "承载余量设计", "不同年龄段安全方案"],
  },
  {
    title: "设备隔离与防护",
    points: ["模块化拼接", "便于检修拆装", "耐候与耐化学选型"],
  },
];

export default function ApplicationsPage() {
  return (
    <Container>
      <div className="py-14 sm:py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              应用案例
            </h1>
            <p className="text-foreground/75 leading-relaxed max-w-2xl">
              这里展示常见落地场景与关键要点。我们也可以基于你的现场条件给出更具体的安装与规格建议。
            </p>
          </div>
          <ButtonLink href="/contact" variant="secondary">
            说说你的场景 →
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {cases.map((c) => (
            <div
              key={c.title}
              className="rounded-3xl border border-foreground/10 p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-lg font-semibold">{c.title}</div>
                <div className="size-10 rounded-2xl bg-foreground/[.06]" />
              </div>
              <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 size-1.5 rounded-full bg-foreground/40" />
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-foreground/10 bg-foreground/[.03] p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="font-semibold">需要我们给出选型与安装建议？</div>
            <div className="text-sm text-foreground/70">
              提供尺寸、用途、承载需求与使用环境，我们快速回传规格建议。
            </div>
          </div>
          <div className="flex gap-3">
            <ButtonLink href="/products">先看产品</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              直接咨询
            </ButtonLink>
          </div>
        </div>
      </div>
    </Container>
  );
}

