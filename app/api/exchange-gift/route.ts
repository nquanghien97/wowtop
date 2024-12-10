import prisma from "@/lib/db"
import { revalidateTag } from "next/cache"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const user_id = req.headers.get('x-user-id')
  try {
    if (!user_id) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 })
    }
    const { gift_id } = await req.json()
    const gift = await prisma.gift.findUnique({
      where: {
        id: +gift_id
      }
    })
    if (!gift) {
      return NextResponse.json({ success: false, message: 'Gift not found' }, { status: 404 })
    }
    const user = await prisma.user.findUnique({
      where: {
        id: +user_id
      }
    })
    if (!user) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 })
    }

    if (user.points_accumulation < gift.point) {
      return NextResponse.json({ success: false, message: 'Bạn không đủ điểm' }, { status: 403 })
    }

    await prisma.$transaction([
      prisma.gift.update({
        where: {
          id: +gift_id
        },
        data: {
          quantity: gift.quantity - 1
        }
      }),
      prisma.user.update({
        where: {
          id: +user_id
        },
        data: {
          points_accumulation: user.points_accumulation - gift.point
        }
      }),
      prisma.exchangedGift.create({
        data: {
          user_id: +user_id,
          gift_id: +gift_id
        }
      })
    ])
    revalidateTag('fetch-gift')
    return NextResponse.json({ success: true, message: 'Đổi quà thành công!!' })
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 })
    } else {
      return NextResponse.json({ message: "Có lỗi xảy ra" }, { status: 500 })
    }
  }
}
export async function GET(req: Request) {
  const user_id = req.headers.get('x-user-id');
  const url = new URL(req.url);
  const pageParam = url.searchParams.get('page');
  const page_sizeParam = url.searchParams.get('page_size')
  const exchanged_user_id = url.searchParams.get('exchanged_user_id');
  const gift_id = url.searchParams.get('gift_id');

  const page = pageParam ? parseInt(pageParam, 10) : null;
  const page_size = page_sizeParam ? parseInt(page_sizeParam, 10) : null;

  let skip: number | undefined;
  let take: number | undefined;

  if (page !== null && page_size !== null) {
    skip = (page - 1) * page_size;
    take = page_size;
  }
  const whereCondition = {
    ...(exchanged_user_id && { user_id: +exchanged_user_id }),
    ...(gift_id && { gift_id: +gift_id }),
  };
  try {
    if(!user_id) return {
      status: 401,
      body: JSON.stringify({ success: false, message: 'Unauthorized' })
    }
    const exchanged_data = await prisma.exchangedGift.findMany({
      where: whereCondition,
      include: {
        gift: {
          select: {
            id: true,
            name: true,
          }
        },
        user: {
          select: {
            id: true,
            phone_number: true,
            full_name: true,
          }
        }
      }
    })
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 })
    } else {
      return NextResponse.json({ message: "Có lỗi xảy ra" }, { status: 500 })
    }
  }
}