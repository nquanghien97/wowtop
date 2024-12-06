import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { param: undefined | string } }) {
  const url = new URL(req.url);
  const type = url.searchParams.get('type');
  const { param } = params

  let search: { id?: number; phone_number?: string } | null = null;
  if (!param) return

  if (type === 'user_id') {
    search = { id: +param };
  } else if (type === 'phone_number') {
    search = { phone_number: param.toString() };
  } else {
    return NextResponse.json(
      { message: 'Invalid type parameter. Must be either "user_id" or "phone_number".' },
      { status: 400 }
    );
  }

  try {
    const user = await prisma.user.findUnique({
      where: search as any,
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