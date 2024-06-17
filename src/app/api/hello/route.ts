import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ api2: true });
}

export async function POST(req: Request) {
  const { message } = await req.json();
  return NextResponse.json({
    'well-done': 'you did it!',
    'mmessage-received': JSON.stringify(message),
  });
}
