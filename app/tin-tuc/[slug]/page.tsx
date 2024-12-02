import { NewsEntity } from "@/entities/news"
import { getNewsBySlug } from "@/services/news"
import { formatDate } from "@/utils/formatDate"
import { Metadata } from "next"

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { data } = await getNewsBySlug(params.slug) as unknown as { data: NewsEntity };

  return {
    metadataBase: new URL('https://wowtop.vn'),
    title: data.title || 'Tin tức',
    description: data.title || 'Wowtop',
    keywords: 'Wowtop',
    robots: {
      follow: true,
      index: true,
    },
    openGraph: {
      locale: 'vi_VN',
      title: data.title || 'Wowtop',
      url: `https://wowtop.vn/tin-tuc/${params.slug}`,
      siteName: 'Wowtop',
      type: 'article',
    },
  };
}


async function NewsDetail({ params }: { params: { slug: string } }) {
  const { data } = await getNewsBySlug(params.slug) as unknown as { data: NewsEntity }
  return (
    <div className="my-4">
      <div className="max-w-6xl m-auto shadow-xl my-4">
        <div className="py-8 md:px-[160px] px-4">
          <h2 className="text-[40px] text-[#2C5D6C] font-bold">{data.title}</h2>
          <div className="bg-[#f2f2f2] px-8 py-4 rounded-xl">
            <p className="text-[#888] text-sm">{formatDate(data.createdAt)}</p>
          </div>
          <div className="my-10 text-justify !text-lg content" dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
      </div>
    </div>
  )
}

export default NewsDetail