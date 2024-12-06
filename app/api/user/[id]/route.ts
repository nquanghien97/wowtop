import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: number } }) {
  const { id } = params
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