import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: { params: { code: string } }) {
  const { code } = params
  const { status, new_code } = await req.json()
  try {
    const code_exist = await prisma.accumulation_code.findUnique({
      where: {
        code
      }
    })
    if(!code_exist) {
      return NextResponse.json({ message: 'Mã code này không tồn tại' }, { status: 404 });
    }
    const data_update = {
      status,
      ...(new_code && ({
        code: new_code
      }))
    }
    await prisma.accumulation_code.update({
      where: {
        code
      },
      data: data_update
    })
    return NextResponse.json(
      {
        message: 'Cập nhật trạng thái code thành công',
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

export async function DELETE(req: Request, { params }: { params: { code: string } }) {
  const { code } = params
  try {
    await prisma.accumulation_code.delete({
      where: {
        code
      }
    })
    return NextResponse.json(
      {
        message: 'Xóa code thành công',
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

export async function GET(req: Request, { params }: { params: { code: string } }) {
  const { code } = params;
  try {
    const data = await prisma.accumulation_code.findUnique({
      where: {
        code
      }
    })
    return NextResponse.json(
      {
        data,
        message: 'get code thành công',
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
