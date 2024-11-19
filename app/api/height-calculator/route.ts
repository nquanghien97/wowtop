import prisma from "../../../lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // const authorId = req.headers.get('X-User-ID');
  // if (!authorId) {
  //   return NextResponse.json({ status: 401, headers: { 'Content-Type': 'application/json' } })
  // }
  const now = new Date();
  const year = now.getFullYear().toString().slice(-2); // lấy 2 số cuối của năm
  const month = (`0${now.getMonth() + 1}`).slice(-2); // định dạng tháng 2 chữ số
  const day = (`0${now.getDate()}`).slice(-2); // định dạng ngày 2 chữ số

  const { parentName, fatherHeight, motherHeight, phoneNumber, province, district, ward, address, fullName, date_of_birth, currentHeight, currentWeight, gender, currentProduct, sport, timeSleep } = await req.json();
  try {
    const count = await prisma.heightCalculator.count({
      where: {
        createdAt: {
          gte: new Date(now.getFullYear(), now.getMonth(), now.getDate()), // từ đầu ngày
          lt: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1), // đến cuối ngày
        },
      },
    });
    const code = `WT${year}${month}${day}${(`000${count + 1}`).slice(-3)}`;
    const data = await prisma.heightCalculator.create({
      data: {
        code,
        parentName,
        phoneNumber,
        fatherHeight: fatherHeight.toString(),
        motherHeight: motherHeight.toString(),
        province,
        district,
        ward,
        address,
        fullName,
        gender,
        date_of_birth,
        currentHeight: currentHeight.toString(),
        currentWeight: currentWeight.toString(),
        currentProduct,
        sport,
        timeSleep
      }
    })
    return NextResponse.json({ data }, { status: 200 })
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
  const page = url.searchParams.get('page');
  const page_size = url.searchParams.get('page_size');
  const code = url.searchParams.get('code');
  const phoneNumber = url.searchParams.get('phoneNumber');
  const fullName = url.searchParams.get('fullName');
  const parentName = url.searchParams.get('parentName');

  const skip = page && page_size ? (parseInt(page, 10) - 1) * parseInt(page_size, 10) : undefined;
  const take = page_size ? parseInt(page_size, 10) : undefined;
  try {
    const data = await prisma.heightCalculator.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      where: {
        ...(code && { code: { contains: code } }),
        ...(phoneNumber && { phoneNumber: { contains: phoneNumber } }),
        ...(fullName && { fullName: { contains: fullName } }),
        ...(parentName && { parentName: { contains: parentName } })
      },
      skip,
      take
    })
    const total = await prisma.heightCalculator.count()
    return NextResponse.json(
      {
        data,
        paging: {
          page,
          page_size,
          total
        }
      },
      { status: 200 }
    )
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 })
    } else {
      return NextResponse.json({ message: "Có lỗi xảy ra" }, { status: 500 })
    }
  }
}