import { NextResponse, NextRequest } from "next/server";

const data = [
  { text: "bat in 🟥", id: 1 },
  { text: "bat 💽", id: 2 },
];

export async function GET() {
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const { text } = await req.json();
  data.push({ text, id: data.length + 1 });
  return NextResponse.json({ ok: true });
}
