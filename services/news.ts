import { NewsEntity } from "@/entities/news";

export async function getNews({ page, page_size }: { page?: number, page_size?: number }) {
  const params = new URLSearchParams();
  if (page) params.append('page', page.toString());
  if (page_size) params.append('page_size', page_size.toString());
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/news?${params.toString()}`)
  return res.json()
}

export async function getNewsBySlug(slug: string): Promise<NewsEntity> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/news/${slug}`)
  return res.json()
}