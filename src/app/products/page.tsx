import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "产品与方案",
  description: "绳网产品目录与典型解决方案：安全防护网、货物捆绑网、围网隔离网、训练攀爬网等。",
};

const products = [
  {
    title: "安全防护网",
    desc: "建筑临边/高空作业防坠落防护，支持立网/平网、包边与连接扣件。",
    tags: ["建筑安全", "高强度", "可定制"],
  },
  {
    title: "货物捆绑网",
    desc: "车载/仓储/物流固定，弹力/无弹可选，提升装卸效率与运输安全。",
    tags: ["物流固定", "耐磨", "易安装"],
  },
  {
    title: "围网与隔离网",
    desc: "场地围挡、设备隔离与防护，支持快速挂点与加固方案。",
    tags: ["隔离防护", "耐候", "模块化"],
  },
  {
    title: "训练攀爬网",
    desc: "体能训练、拓展、儿童/成人攀爬，支持节点加固与安全冗余设计。",
    tags: ["体育训练", "安全冗余", "多规格"],
  },
];

export default function ProductsPage() {
  return (
    <Container>
      <div className="py-14 sm:py-16">
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            产品与方案
          </h1>
          <p className="text-foreground/75 leading-relaxed max-w-2xl">
            下面是常见绳网产品类型。你可以把使用场景、尺寸、承载要求发给我们，我们会给出选型建议与报价区间。
          </p>
          <div className="flex gap-3">
            <ButtonLink href="/contact">获取报价</ButtonLink>
            <ButtonLink href="/applications" variant="secondary">
              查看案例
            </ButtonLink>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {products.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border border-foreground/10 p-6 hover:bg-foreground/[.02] transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="text-lg font-semibold">{p.title}</div>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="size-10 rounded-2xl bg-foreground/[.06]" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-foreground/10 bg-background px-3 py-1 text-xs text-foreground/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-foreground/10 bg-foreground/[.03] p-8">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { t: "可定制参数", d: "尺寸、孔径、材质、颜色、包边、挂点、配件。" },
              { t: "交付形态", d: "打样/小批/批量；按图纸或样品定制。" },
              { t: "适配建议", d: "按承载与安全冗余给出规格建议与安装要点。" },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl bg-background/70 p-5">
                <div className="font-semibold">{x.t}</div>
                <div className="mt-1 text-sm text-foreground/70">{x.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

