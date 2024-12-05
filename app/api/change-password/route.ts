import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function PUT(req: NextRequest) {
  const user_id = req.headers.get('x-user-id')
  try {
    const { old_password, new_password } = await req.json();
    
    if (!user_id) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }
    if (!old_password || !new_password) {
      return NextResponse.json({ success: false, message: 'Mật khẩu cũ và mật khẩu mới không được để trống' }, { status: 400 });
    }
    const exist_user = await prisma.user.findUnique({
      where: {
        id: +user_id
      }
    })
    if (!exist_user) {
      return NextResponse.json({ success: false, message: 'Người dùng không tồn tại' }, { status: 404 });
    }

    const isMatchPassword = await bcrypt.compare(old_password, exist_user.password)
    if (!isMatchPassword) {
      return NextResponse.json({ success: false, message: 'Mật khẩu cũ không chính xác' }, { status: 400 });
    }
    await prisma.user.update({
      where: {
        id: +user_id
      },
      data: {
        password: await bcrypt.hash(new_password, 12)
      }
    })
    return NextResponse.json(
      {
        message: 'Cập nhật mật khẩu thành công',
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
