import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const res = new NextResponse(JSON.stringify({ success: true }), { status: 200 });
  
  res.headers.set(
    'Set-Cookie',
    'token=; Path=/; HttpOnly; Secure; Max-Age=0; SameSite=Strict'
  );

  return res;
}
