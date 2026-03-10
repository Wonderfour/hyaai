import Link from "next/link";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";

const nav = [
  { href: "/products", label: "产品与方案" },
  { href: "/applications", label: "应用案例" },
  { href: "/about", label: "关于我们" },
  { href: "/contact", label: "联系我们" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex size-8 items-center justify-center rounded-xl bg-foreground text-background">
              绳
            </span>
            <span className="tracking-tight">绳网</span>
            <span className="text-foreground/60 text-sm hidden sm:inline">
              Rope & Net
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-foreground/[.04] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink
              href="/contact"
              variant="secondary"
              className="hidden sm:inline-flex"
            >
              获取报价
            </ButtonLink>
            <ButtonLink href="/products">查看产品</ButtonLink>
          </div>
        </div>
      </Container>
    </header>
  );
}

