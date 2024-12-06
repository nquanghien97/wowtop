import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function PUT(req: NextRequest) {
  const url = new URL(req.url);
  const phone_number = url.searchParams.get('phone_number');
  try {
    if(!phone_number) return NextResponse.json({ success: false, message: 'Số điện thoại không được để trống' }, { status: 400 })
    const { password } = await req.json();
    
    if (!password) {
      return NextResponse.json({ success: false, message: 'Mật khẩu không được để trống' }, { status: 400 });
    }

    await prisma.user.update({
      where: {
        phone_number
      },
      data: {
        password: await bcrypt.hash(password, 12)
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
