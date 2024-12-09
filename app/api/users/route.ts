import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const user_id = req.headers.get('x-user-id');
  const url = new URL(req.url);
  const pageParam = url.searchParams.get('page');
  const page_sizeParam = url.searchParams.get('page_size');
  const phone_number = url.searchParams.get('phone_number');
  const full_name = url.searchParams.get('full_name');

  // Chuyển đổi các tham số thành số nguyên, nếu có
  const page = pageParam ? parseInt(pageParam, 10) : null;
  const page_size = page_sizeParam ? parseInt(page_sizeParam, 10) : null;
  try {
    let skip: number | undefined;
    let take: number | undefined;

    if (page !== null && page_size !== null) {
      skip = (page - 1) * page_size;
      take = page_size;
    }

    if (!user_id) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const whereCondition: any = {
      role: { not: 'ADMIN' },
      ...(phone_number && { phone_number }),
      ...(full_name && { full_name: { contains: full_name } }),
    }

    const user = await prisma.user.findMany({
      where: whereCondition,
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
        created_at: true
      },
      orderBy: {
        created_at: 'asc'
      },
      skip,
      take
    })
    const total = await prisma.user.count({
      where: whereCondition
    })
    return NextResponse.json(
      {
        data: user,
        paging: {
          page,
          page_size,
          total
        }
      },
      { status: 200 }
    )
  } catch (err: any) {
    return NextResponse.json({
      message: err.message
    }, { status: 500 })
  }
}