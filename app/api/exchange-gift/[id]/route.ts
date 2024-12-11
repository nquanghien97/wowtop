import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: { params: { id: number } }) {
  const user_id = req.headers.get('x-user-id');
  const { id } = params
  try {
    if(!user_id) return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(user_id)
      }
    })
    if (user?.role !== 'ADMIN') return NextResponse.json({ success: false, message: 'Bạn không có quyền' }, { status: 401 })
    const { status } = await req.json()
    await prisma.exchangedGift.update({
      where: { id: +id },
      data: {
        status
      }
    })
    return NextResponse.json({ success: true, message: 'Cập nhật trạng thái thành công' });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}