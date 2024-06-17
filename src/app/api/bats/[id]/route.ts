import { NextRequest, NextResponse } from "next/server";
import { BATS_DATA } from "../data";
import { ApiError } from "next/dist/server/api-utils";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const index = BATS_DATA.findIndex((bat) => bat.id === id);
  if (index === -1) {
    return NextResponse.json(
      { message: "No item found" },
      { status: 500 }
    );
  }
  BATS_DATA.splice(index, 1);
  return NextResponse.json({ ok: true }, { status: 200 });
}
