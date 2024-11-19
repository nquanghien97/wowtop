import prisma from "../../../lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { fullName, phoneNumber, productName, quantity, province, district, ward, address } = await req.json();
  try {
    await prisma.order.create({
      data: {
        fullName,
        phoneNumber,
        productName,
        quantity,
        province,
        district,
        ward,
        address
      }
    })
    return NextResponse.json({ message: 'Đặt mua thành công' }, { status: 200 })
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

  const skip = (page - 1) * page_size;
  const take = page_size;
  try {
    const order = await prisma.order.findMany({
      skip,
      take,
      orderBy: {
        createdAt: 'desc'
      }
    })
    const total = await prisma.order.count()
    return NextResponse.json(
      {
        data: order,
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