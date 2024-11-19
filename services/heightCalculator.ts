import { InformationEntity } from "@/entities/information";

export async function postInformations(data: InformationEntity) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/height-calculator`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    const errorResponse = await res.json(); // Lấy thêm thông tin lỗi từ body nếu có
    throw new Error(errorResponse.message || 'Something went wrong!');
  }
  return res.json();
}

export async function getInformations({ page = 1, page_size = 10, code, fullName, phoneNumber, parentName }: { page?: number, page_size?: number, code?: string, fullName?: string, phoneNumber?: string, parentName?: string }) {
  const params = new URLSearchParams();
  if (page) params.append('page', page.toString());
  if (page_size) params.append('page_size', page_size.toString());
  if (code) params.append('code', code.toString());
  if (fullName) params.append('fullName', fullName.toString());
  if (phoneNumber) params.append('phoneNumber', phoneNumber.toString());
  if (parentName) params.append('parentName', parentName.toString());

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/height-calculator?${params.toString()}`)
  return res.json();
}