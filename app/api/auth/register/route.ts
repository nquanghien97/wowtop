import prisma from "@/lib/db";
import { createToken } from "@/lib/token";
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { password, full_name, province, district, ward, address, phone_number, mother_dob, child_dob } = await req.json();

  if (!password || !full_name || !province || !phone_number || !mother_dob || !child_dob || !district || !ward || !address) {
    return NextResponse.json({
      success: false,
      message: "Vui lòng nhập đầy đủ thông tin"
    }, { status: 400 });
  }

  try {
    const user_exist = await prisma.user.findUnique({
      where: { phone_number }
    });

    if (user_exist) {
      return NextResponse.json({
        success: false,
        message: "Tài khoản đã tồn tại!"
      }, { status: 400 });
    }

    const hashPassword = await bcrypt.hash(password, 12)
    const user = await prisma.user.create({
      data: {
        password: hashPassword,
        full_name,
        province,
        district,
        ward,
        address,
        mother_dob,
        child_dob,
        phone_number,
      }
    })

    const accessToken = await createToken(user.id, user.role);

    return NextResponse.json({
      success: true,
      message: "Đăng ký thành công",
      accessToken
    }, { status: 200 });

  } catch (err: any) {
    return NextResponse.json({
      success: false,
      message: "Server error, please try again.",
      error: err.message,
    }, { status: 500 });
  }
}
