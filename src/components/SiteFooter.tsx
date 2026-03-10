import Link from "next/link";
import { Container } from "@/components/Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/10">
      <Container>
        <div className="py-10 grid gap-8 md:grid-cols-3">
          <div className="space-y-2">
            <div className="font-semibold">绳网</div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              面向工业安全、建筑防护、体育训练、物流捆绑等场景的绳网产品与定制服务。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <div className="font-medium">导航</div>
              <div className="flex flex-col gap-1 text-foreground/70">
                <Link className="hover:text-foreground" href="/products">
                  产品与方案
                </Link>
                <Link className="hover:text-foreground" href="/applications">
                  应用案例
                </Link>
                <Link className="hover:text-foreground" href="/about">
                  关于我们
                </Link>
                <Link className="hover:text-foreground" href="/contact">
                  联系我们
                </Link>
              </div>
            </div>
            <div className="space-y-2">
              <div className="font-medium">服务</div>
              <div className="flex flex-col gap-1 text-foreground/70">
                <span>尺寸定制</span>
                <span>材质选型</span>
                <span>打样与批量</span>
                <span>交付与售后</span>
              </div>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="font-medium">联系方式</div>
            <div className="text-foreground/70 space-y-1">
              <div>电话：400-000-0000</div>
              <div>邮箱：sales@example.com</div>
              <div>地址：某某市某某区某某路 88 号</div>
            </div>
          </div>
        </div>

        <div className="pb-8 text-xs text-foreground/60 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} 绳网官网. All rights reserved.</div>
          <div className="flex gap-4">
            <span>ICP备案号：粤 ICP 备 00000000 号</span>
            <span>隐私政策</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

