import prisma from "../../../lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { tiktok_link, facebook_link, youtube_link, full_name, phone_number, province, district, ward, address } = await req.json();
  try {
    await prisma.daneChallenge.create({
      data: {
        tiktok_link,
        facebook_link,
        youtube_link,
        full_name,
        phone_number,
        province,
        district,
        ward,
        address
      }
    })
    return NextResponse.json({ message: 'Đăng ký dùng thử công' }, { status: 200 })
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 })
    } else {
      return NextResponse.json({ message: "Có lỗi xảy ra" }, { status: 500 })
    }
  }
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get('page') ?? '1', 10);
  const page_size = parseInt(url.searchParams.get('page_size') ?? '10', 10);
  const phone_number = url.searchParams.get('phone_number');
  const full_name = url.searchParams.get('full_name');

  const skip = (page - 1) * page_size;
  const take = page_size;
  try {
    const whereCondition: any = {
      ...(phone_number && { phone_number }),
      ...(full_name && { full_name: { contains: full_name } }),
    }
    const data = await prisma.daneChallenge.findMany({
      skip,
      take,
      where: whereCondition,
      orderBy: {
        createdAt: 'desc'
      }
    })
    const total = await prisma.daneChallenge.count({
      where: whereCondition
    })
    return NextResponse.json(
      {
        data: data,
        paging: {
          page,
          page_size,
          total
        }
      },
      { status: 200 }
    )
  } catch (err) {
    return NextResponse.json({
      message: "Something went wrong"
    }, { status: 500 })
  }
}