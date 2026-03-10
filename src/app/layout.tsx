import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: {
    default: "绳网官网｜高强度绳网与安全防护解决方案",
    template: "%s｜绳网官网",
  },
  description:
    "提供工业/建筑/体育/物流等场景绳网产品与定制服务：安全防护网、货物捆绑网、攀爬训练网、围网等。",
  metadataBase: new URL("https://example.com"),
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className="antialiased"
      >
        <div className="min-h-dvh flex flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
