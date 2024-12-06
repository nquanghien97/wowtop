import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const phone_number = url.searchParams.get('phone_number');

  try {
    if(!phone_number) return NextResponse.json({ message: 'Missing phone_number' }, { status: 404 })

    const user = await prisma.user.findUnique({
      where: {
        phone_number
      },
    })
    if(!user) return NextResponse.json({ message: 'Số điện thoại chưa được đăng ký' }, { status: 404 })
    return NextResponse.json(
      {
        data: user,
      },
      { status: 200 }
    )
  } catch (err: any) {
    return NextResponse.json({
      message: err.message
    }, { status: 500 })
  }
}