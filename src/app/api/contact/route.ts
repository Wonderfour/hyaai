import { NextResponse } from "next/server";

type Payload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  message?: unknown;
};

function asTrimmedString(v: unknown) {
  return typeof v === "string" ? v.trim() : "";
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Payload | null;
  if (!body) {
    return NextResponse.json({ error: "请求体无效。" }, { status: 400 });
  }

  const name = asTrimmedString(body.name);
  const phone = asTrimmedString(body.phone);
  const email = asTrimmedString(body.email);
  const message = asTrimmedString(body.message);

  if (!name) {
    return NextResponse.json({ error: "请填写联系人姓名。" }, { status: 400 });
  }
  if (!message) {
    return NextResponse.json({ error: "请填写需求描述。" }, { status: 400 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "邮箱格式不正确。" }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    received: {
      name,
      phone,
      email,
      messageLength: message.length,
    },
  });
}

