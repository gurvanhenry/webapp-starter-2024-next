import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: [
      { name: "bat1", id: 1 },
      { name: "bat2", id: 2 },
      { name: "bat3", id: 3 },
      { name: "bat4", id: 4 },
      { name: "bat5", id: 5 },
    ],
  });
}
