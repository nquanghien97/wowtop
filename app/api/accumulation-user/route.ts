import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const user_id = req.headers.get('x-user-id')
  const { code } = await req.json();
  try {
    if (!user_id) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }
    const check_code = await prisma.accumulation_code.findUnique({
      where: {
        code
      }
    })
    const increment_points = 5
    if (!check_code) {
      return NextResponse.json({ success: false, message: 'Mã tích điểm không hợp lệ' }, { status: 400 });
    }
    if (check_code.status === "EXPIRED") {
      return NextResponse.json({ success: false, message: 'Mã tích điểm đã hết hạn' }, { status: 404 });
    }
    if (check_code.status === "USED") {
      return NextResponse.json({ success: false, message: 'Mã tích điểm đã được sử dụng' }, { status: 404 });
    }
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(user_id)
      }
    })
    if (!user) {
      return NextResponse.json({ success: false, message: 'Người dùng không tồn tại' }, { status: 401 });
    }
    await prisma.$transaction([
      prisma.user.update({
        where: {
          id: parseInt(user_id)
        },
        data: {
          points_accumulation: user?.points_accumulation + increment_points
        }
      }),
      prisma.accumulation_code.update({
        where: {
          code
        },
        data: {
          status: "USED"
        }
      })
    ])
    return NextResponse.json({ success: true, message: 'Tích điểm thành công' }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const pageParam = url.searchParams.get('page');
  const page_sizeParam = url.searchParams.get('page_size');
  const user_id = req.headers.get('x-user-id');
  
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
    
    // Sử dụng $transaction để thực hiện cả hai truy vấn đồng thời
   const data = await prisma.accumulation_code.findMany({
    skip,
    take,
    where: {
      user_id: +user_id
    },
    orderBy: {
      created_at: "asc"
    }
   })

    return NextResponse.json(
      { data },
      { status: 200 }
    );
  } catch (err: any) {
    console.error('Error fetching news:', err);
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}