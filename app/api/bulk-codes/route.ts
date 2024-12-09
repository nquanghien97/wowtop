import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { codes } = await req.json(); // `codes` là một mảng mã code
  const user_id = req.headers.get('x-user-id');

  try {
    if (!user_id) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(user_id),
      },
    });

    if (user?.role !== 'ADMIN') {
      return NextResponse.json({ success: false, message: 'Bạn không có quyền' }, { status: 403 });
    }

    if (!Array.isArray(codes) || codes.length === 0) {
      return NextResponse.json({ success: false, message: 'Danh sách mã code không hợp lệ' }, { status: 400 });
    }

    // Lọc ra các mã code đã tồn tại
    const existingCodes = await prisma.accumulation_code.findMany({
      where: {
        code: {
          in: codes,
        },
      },
      select: { code: true },
    });

    const existingCodeSet = new Set(existingCodes.map((item) => item.code));

    // Lọc ra các mã code hợp lệ để thêm mới
    const newCodes = codes.filter((code) => !existingCodeSet.has(code));

    if (newCodes.length === 0) {
      return NextResponse.json({ success: false, message: 'Tất cả mã code đã tồn tại' }, { status: 409 });
    }

    // Thêm mới mã code
    await prisma.accumulation_code.createMany({
      data: newCodes.map((code) => ({
        user_id: parseInt(user_id),
        code,
      })),
    });

    return NextResponse.json(
      {
        success: true,
        message: `${newCodes.length} mã code đã được đăng ký thành công`,
        addedCodes: newCodes,
        existingCodes: Array.from(existingCodeSet),
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error('Error adding accumulation codes:', err);
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
