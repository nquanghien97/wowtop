import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: number } }) {
  const { id } = params


  if (!id) return NextResponse.json(
    {
      message: "Missing user_id",
    },
    { status: 404 }
  )


  try {
    const user = await prisma.user.findUnique({
      where: {
        id: +id
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

export async function DELETE(req: Request, { params }: { params: { id: number } }) {
  const { id } = params;
  if (!id) {
    return NextResponse.json(
      { message: 'User ID is required.' },
      { status: 400 }
    )
  }
  try {
    await prisma.user.delete({
      where: {
        id: +id
      }
    })
    return NextResponse.json({
      message: 'Xóa người dùng thành công'
    })
  } catch (err: any) {
    return NextResponse.json({
      message: err.message
    }, { status: 500 })
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const { full_name, mother_dob, child_dob, province_id, province, district_id, district, ward_id, ward, address } = await req.json();

  try {
    if (!id) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }
    await prisma.user.update({
      where: {
        id: +id
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