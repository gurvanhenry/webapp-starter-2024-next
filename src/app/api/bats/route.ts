import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { text: "bat in 🟥", id: 1 },
    { text: "bat 💽", id: 2 },
  ]);
}
