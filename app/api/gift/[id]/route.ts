// import prisma from "@/lib/db";
import { createSlug } from "@/utils/createSlug";
import prisma from "../../../../lib/db"
import { NextResponse } from "next/server";
import { deleteFile, uploadFile } from "@/utils/fileUpload";

export async function PUT(req: Request, { params }: { params: { id: number } }) {
  const { id } = params;
  let filenames: string[] = [];
  try {
    if (!id) {
      return NextResponse.json(
        {
          message: 'Gift id is required',
        },
        { status: 400 }
      );
    }
    const oldGift = await prisma.gift.findUnique({
      where: { id: +id },
    });

    const formData = await req.formData();
    const name = formData.get('name') as string;
    const point = formData.get('point') as string;
    const quantity = formData.get('quantity') as string;
    const files = Array.from(formData.values()).filter((value): value is File => value instanceof File);
    if (files.length === 0) {
      const updatedGift = await prisma.$transaction(async (tx: any) => {
        const new_gift = await tx.gift.update({
          where: { id: +id },
          data: {
            name,
            point: +point,
            quantity: +quantity
          },
        });

        return new_gift;
      });
      return NextResponse.json(
        { data: updatedGift },
        { status: 200 }
      );
    }
    await deleteFile(oldGift?.imageUrl || '');

    filenames = await uploadFile(files, "gifts");
    const updatedGift = await prisma.$transaction(async (tx: any) => {
      const gift = await tx.gift.update({
        where: { id: +id },
        data: {
          name,
          point: +point,
          quantity: +quantity,
          imageUrl: `/images/gifts/${filenames[0]}`,
        },
      });
      return gift;
    })
    return NextResponse.json(
      { data: updatedGift },
      { status: 200 }
    );

  } catch (err) {
    if (filenames.length > 0) {
      await deleteFile(filenames[0]);
    }
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: 'Có lỗi xảy ra' }, { status: 500 });
    }
  }
}

export async function GET(req: Request, { params }: { params: { id: number } }) {
  const { id } = params
  try {
    const gift = await prisma.gift.findUnique({
      where: {
        id: +id
      }
    })
    return NextResponse.json({ message: 'Lấy thông tin thành công', data: gift }, { status: 200 });
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: 'Có lỗi xảy ra' }, { status: 500 });
    }
  }
}

export async function DELETE(req: Request, { params }: { params: { id: number } }) {
  const { id } = params
  try {
    const gift = await prisma.gift.findUnique({
      where: {
        id: +id
      }
    })
    await prisma.gift.delete({
      where: {
        id: +id
      }
    })
    await deleteFile(gift?.imageUrl || "")
    return NextResponse.json(
      {
        message: 'Xóa thành công',
      },
      { status: 200 }
    );
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: 'Có lỗi xảy ra' }, { status: 500 });
    }
  }
}