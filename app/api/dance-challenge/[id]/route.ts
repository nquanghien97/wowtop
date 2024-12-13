import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, { params }: { params: { id: number } }) {
  const { id } = params
  try {
    const data = await prisma.daneChallenge.findUnique({
      where: {
        id: +id,
      }
    })
    if (!data) {
      return NextResponse.json({ message: 'Đơn hàng không tồn tại' }, { status: 404 });
    }
    await prisma.daneChallenge.delete({
      where: {
        id: +id
      }
    })
    return NextResponse.json(
      {
        message: 'Xóa đơn hàng thành công',
      },
      { status: 200 }
    );
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: 'Có lỗi xảy ra' }, { status: 500 });
    }
  }
}