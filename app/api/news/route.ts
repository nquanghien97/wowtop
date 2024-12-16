import { createSlug } from "@/utils/createSlug";
import prisma from "../../../lib/db";
import { NextResponse } from "next/server";
import { deleteFile, uploadFile } from "@/utils/fileUpload";

export async function POST(req: Request) {
  let filenames: string[] = [];
  // const authorId = req.headers.get('X-User-ID');
  // if (!authorId) {
  //   return NextResponse.json({ status: 401, headers: { 'Content-Type': 'application/json' } })
  // }
  try {
    const formData = await req.formData();
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const files = Array.from(formData.values()).filter((value): value is File => value instanceof File);
    const slug = createSlug(title);

    if (files.length === 0) {
      return NextResponse.json({ message: "Không file nào được chọn" }, { status: 400 });
    }
    filenames = await uploadFile(files, "news");
    const newNews = await prisma.news.create({
      data: {
        title,
        content,
        slug,
        authorId: +1,
        imageUrl: `/images/news/${filenames[0]}`
      }
    })
    return NextResponse.json({ newNews }, { status: 200 })
  } catch (err) {
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
  const title = url.searchParams.get('title') || '';

  const page = pageParam ? parseInt(pageParam, 10) : null;
  const page_size = page_sizeParam ? parseInt(page_sizeParam, 10) : null;

  let skip: number | undefined;
  let take: number | undefined;

  if (page !== null && page_size !== null) {
    skip = (page - 1) * page_size;
    take = page_size;
  }
  const whereCondition = {
    ...(title && { title: { contains: title } }),
  };
  try {
    const news = await prisma.news.findMany({
      skip,
      take,
      orderBy: {
        createdAt: 'desc'
      },
      where: whereCondition
    })
    const total = await prisma.news.count()
    return NextResponse.json(
      {
        data: news,
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