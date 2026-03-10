import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "联系我们",
  description: "提交需求，获取绳网选型建议与报价。",
};

export default function ContactPage() {
  return (
    <Container>
      <div className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              联系我们
            </h1>
            <p className="text-foreground/75 leading-relaxed">
              你可以通过表单提交需求，我们会根据场景给出可执行的规格建议与报价区间。也欢迎直接电话/邮箱联系。
            </p>
            <div className="rounded-3xl border border-foreground/10 bg-foreground/[.03] p-6 space-y-2 text-sm">
              <div className="font-semibold">快速联系方式</div>
              <div className="text-foreground/70 space-y-1">
                <div>电话：400-000-0000</div>
                <div>邮箱：sales@example.com</div>
                <div>工作时间：周一至周五 9:00–18:00</div>
              </div>
            </div>
            <div className="rounded-3xl border border-foreground/10 p-6 text-sm">
              <div className="font-semibold">提交时建议包含</div>
              <ul className="mt-3 space-y-2 text-foreground/70">
                {[
                  "使用场景（建筑/工业/体育/物流等）",
                  "尺寸（长宽/孔径/绳径）与安装方式",
                  "承载与安全冗余要求",
                  "数量、交期与是否需要打样",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="mt-2 size-1.5 rounded-full bg-foreground/40" />
                    <span className="leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-foreground/10 bg-background/70 p-6 sm:p-8">
            <div className="font-semibold text-lg">需求表单</div>
            <p className="mt-2 text-sm text-foreground/70">
              提交后我们会尽快联系你。
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

