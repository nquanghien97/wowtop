import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { revalidateTag } from 'next/cache'

export async function GET(req: Request) {
  const user_id = req.headers.get('x-user-id');
  try {
    if (!user_id) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }
    const user = await prisma.user.findUnique({
      where: {
        id: +user_id
      },
      select: {
        id: true,
        phone_number: true,
        full_name: true,
        mother_dob: true,
        child_dob: true,
        address: true,
        province_id: true,
        province: true,
        district_id: true,
        district: true,
        ward_id: true,
        ward: true,
        points_accumulation: true,
      }
    })
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

export async function PUT(req: Request) {
  const user_id = req.headers.get('x-user-id');
  const { full_name, mother_dob, child_dob, province_id, province, district_id, district, ward_id, ward, address } = await req.json();

  try {
    if (!user_id) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }
    await prisma.user.update({
      where: {
        id: +user_id
      },
      data: {
        full_name,
        mother_dob,
        child_dob,
        province_id,
        province,
        district_id,
        district,
        ward_id,
        ward,
        address,
      }
    })
    revalidateTag('user-data')
    return NextResponse.json(
      {
        success: true,
        message: 'Cập nhật thông tin thành công'
      },
      { status: 200 }
    )
  } catch (err: any) {
    return NextResponse.json({
      message: err.message
    }, { status: 500 })
  }
}