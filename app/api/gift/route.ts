import prisma from "@/lib/db";
import { deleteFile, uploadFile } from "@/utils/fileUpload";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const user_id = req.headers.get('x-user-id');
  let filenames: string[] = []
  try {
    if (!user_id) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(user_id)
      }
    })
    if (user?.role !== 'ADMIN') return NextResponse.json({ success: false, message: 'Bạn không có quyền' }, { status: 401 })

    const formData = await req.formData();
    const name = formData.get('name') as string;
    const point = formData.get('point') as string;
    const quantity = formData.get('quantity') as string;
    const files = Array.from(formData.values()).filter((value): value is File => value instanceof File);

    if (files.length === 0) {
      return NextResponse.json({ message: "Không file nào được chọn" }, { status: 400 });
    }

    filenames = await uploadFile(files, "gifts");

    const gift = await prisma.gift.create({
      data: {
        name,
        imageUrl: `/images/gifts/${filenames[0]}`,
        point: parseInt(point),
        quantity: parseInt(quantity)
      }
    });

    return NextResponse.json({ gift }, { status: 200 })
  } catch (err: any) {
    if (filenames.length > 0) {
      await Promise.all(filenames.map((filename) => deleteFile(filename)));
    }
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 })
    } else {
      return NextResponse.json({ message: "Có lỗi xảy ra" }, { status: 500 })
    }
  }
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const pageParam = url.searchParams.get('page');
  const page_sizeParam = url.searchParams.get('page_size')
  const name = url.searchParams.get('name') || '';

  const page = pageParam ? parseInt(pageParam, 10) : null;
  const page_size = page_sizeParam ? parseInt(page_sizeParam, 10) : null;

  let skip: number | undefined;
  let take: number | undefined;

  if (page !== null && page_size !== null) {
    skip = (page - 1) * page_size;
    take = page_size;
  }
  const whereCondition = {
    ...(name && { name: { contains: name } }),
  };

  try {
    const gifts = await prisma.gift.findMany({
      skip,
      take,
      where: whereCondition,
      orderBy: {
        created_at: 'asc'
      }
    })
    const total = await prisma.gift.count({ where: whereCondition });
    return NextResponse.json({ data: gifts, paging: { page, page_size, total } }, { status: 200 })
  } catch (err: any) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 })
    } else {
      return NextResponse.json({ message: "Có lỗi xảy ra" }, { status: 500 })
    }
  }
}