import prisma from "@/lib/db";
import { StatusCode } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { code } = await req.json();
  const user_id = req.headers.get('x-user-id');
  try {
    if (!user_id) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(user_id)
      }
    })

    if(user?.role !== 'ADMIN') return NextResponse.json({ success: false, message: 'Bạn không có quyền' }, { status: 401 })

    const exist_code = await prisma.accumulation_code.findUnique({
      where: {
        code
      }
    })
    if (exist_code) {
      return NextResponse.json({ success: false, message: 'Mã đăng ký đã tồn tại' }, { status: 404 });
    }
    await prisma.accumulation_code.create({
      data: {
        user_id: parseInt(user_id),
        code,
      }
    })
    return NextResponse.json({ success: true, message: 'Code đã đăng ký thành công' }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const pageParam = url.searchParams.get('page');
  const page_sizeParam = url.searchParams.get('page_size');
  const statusParam = url.searchParams.get('status') as unknown as StatusCode;
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
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(user_id)
      }
    })
    
    if(user?.role !== 'ADMIN') return NextResponse.json({ success: false, message: 'Bạn không có quyền' })

    const whereCondition = {
      status: statusParam,
    };

    // Sử dụng $transaction để thực hiện cả hai truy vấn đồng thời
    const [total, codes] = await prisma.$transaction([
      prisma.accumulation_code.count(),
      prisma.accumulation_code.findMany({
        skip,
        take,
        where: whereCondition,
        orderBy: {
          created_at: 'desc', // Sắp xếp theo thời gian tạo, tùy chỉnh theo nhu cầu
        },
      }),
    ]);

    return NextResponse.json(
      { data: codes, total, page, page_size },
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