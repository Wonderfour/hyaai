"use client";

import { useMemo, useState } from "react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const initial: FormState = { name: "", phone: "", email: "", message: "" };

function isEmailLike(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string>("");

  const disabled = useMemo(() => {
    if (status === "submitting") return true;
    if (!form.message.trim()) return true;
    if (!form.name.trim()) return true;
    return false;
  }, [form.message, form.name, status]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.name.trim()) return setError("请填写联系人姓名。");
    if (!form.message.trim()) return setError("请填写需求描述。");
    if (form.email.trim() && !isEmailLike(form.email)) {
      return setError("邮箱格式不正确。");
    }

    try {
      setStatus("submitting");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error || "提交失败，请稍后再试。");
      }
      setStatus("success");
      setForm(initial);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "提交失败，请稍后再试。");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="space-y-1">
          <div className="text-sm text-foreground/80">联系人 *</div>
          <input
            value={form.name}
            onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
            className="w-full rounded-2xl border border-foreground/15 bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-foreground/15"
            placeholder="如：张先生"
            autoComplete="name"
          />
        </label>
        <label className="space-y-1">
          <div className="text-sm text-foreground/80">电话</div>
          <input
            value={form.phone}
            onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
            className="w-full rounded-2xl border border-foreground/15 bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-foreground/15"
            placeholder="如：13800000000"
            autoComplete="tel"
          />
        </label>
      </div>

      <label className="space-y-1 block">
        <div className="text-sm text-foreground/80">邮箱</div>
        <input
          value={form.email}
          onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
          className="w-full rounded-2xl border border-foreground/15 bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-foreground/15"
          placeholder="如：sales@company.com"
          autoComplete="email"
        />
      </label>

      <label className="space-y-1 block">
        <div className="text-sm text-foreground/80">需求描述 *</div>
        <textarea
          value={form.message}
          onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
          className="min-h-32 w-full resize-y rounded-2xl border border-foreground/15 bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-foreground/15"
          placeholder="请描述：使用场景、尺寸（长宽/孔径）、承载要求、使用环境（室内/室外/耐候）、数量与交期。"
        />
      </label>

      {error ? (
        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-300">
          {error}
        </div>
      ) : null}

      {status === "success" ? (
        <div className="rounded-2xl border border-foreground/10 bg-foreground/[.03] px-4 py-3 text-sm text-foreground/80">
          已提交，我们会尽快联系你。
        </div>
      ) : null}

      <button
        type="submit"
        disabled={disabled}
        className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors bg-foreground text-background hover:bg-foreground/90 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "提交中…" : "提交需求"}
      </button>
    </form>
  );
}

