import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container>
      <div className="py-20 text-center space-y-4">
        <div className="text-4xl font-semibold tracking-tight">404</div>
        <p className="text-foreground/75">页面不存在或已被移动。</p>
        <div>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors"
          >
            返回首页
          </Link>
        </div>
      </div>
    </Container>
  );
}

