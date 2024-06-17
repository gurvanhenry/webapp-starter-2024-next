import { NextResponse, NextRequest } from "next/server";
import { BATS_DATA } from "./data";

export async function GET() {
  return NextResponse.json(BATS_DATA);
}

export async function POST(req: NextRequest) {
  const { text } = await req.json();
  BATS_DATA.push({ text, id: (BATS_DATA.length + 1).toString() });
  return NextResponse.json({ ok: true }, { status: 201 });
}
