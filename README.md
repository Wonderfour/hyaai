这是一个基于 **Next.js (App Router) + Tailwind CSS** 的“绳网官网”项目，用于展示绳网产品、方案、应用案例与联系方式。

## 本地启动

安装依赖并启动开发服务器：

```bash
npm install
npm run dev
```

然后打开 `http://localhost:3000`。

## 页面结构

- `src/app/page.tsx`：首页（Hero/优势/方案/CTA）
- `src/app/products/page.tsx`：产品与方案
- `src/app/applications/page.tsx`：应用案例
- `src/app/about/page.tsx`：关于我们
- `src/app/contact/page.tsx`：联系我们（表单）
- `src/app/api/contact/route.ts`：联系表单回执接口（示例）

## 构建与校验

```bash
npm run lint
npm run build
```
