import { formatDate } from "@/utils/formatDate"
import Image from "next/image"
import Link from "next/link";
import { getNews } from '@/services/news';
import { NewsEntity } from "@/entities/news";
import { truncateText } from "@/utils/truncateText";

async function Experience() {
  const { data } = await getNews({ page: 1, page_size: 5 }) as { data: NewsEntity[] }
  const dataWithoutFirstLastItem = data.slice(1, -1)
  const dataWithoutLastItem = data.slice(0, -1);

  return (
    <section className="pb-8">
      <div className="max-w-6xl m-auto px-4">
        <div className="bg-text font-bold text-4xl uppercase text-center mb-4">
          <p className="py-2">Kinh nghiệm</p>
          <p className="mb-2">TĂNG CHIỀU CAO VƯỢT TRỘI CHO BÉ</p>
        </div>
        <div className="flex gap-4 max-md:flex-col">
          <div className="w-full md:w-3/4">
            <div className="mb-4">
              <h2 className="text-3xl font-bold">Bí kíp tăng chiều cao</h2>
            </div>
            <div className="flex mb-7 h-[2px] bg-[#ccc] w-4/5" />
            {data.length === 0 ? (
              <div>Không có dữ liệu</div>
            ) : (
              <div className="flex gap-4 flex-col md:flex-row">
                <div className="w-full md:w-2/5 flex flex-col">
                  <Link href={`/tin-tuc/${data[0].slug}`}>
                    <Image src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data[0].imageUrl}`} alt={data[0].title} width={350} height={220} />
                  </Link>
                  <Link href={`/tin-tuc/${data[0].slug}`} className="mt-2">
                    <p className="text-[#84571B] font-semibold mb-2">{data[0].title}</p>
                  </Link>
                  <div className="text-justify text-sm font-semibold text-[#3f3c3c] line-clamp-3 md:line-clamp-4 italic" dangerouslySetInnerHTML={{ __html: truncateText(data[0].content, 200) }} />
                  <div className="text-[#84571B]">
                    <small>{formatDate(data[0].createdAt)}</small>
                  </div>
                  <div>
                    <Link className="mt-3 text-[#84571B] px-4 py-2 rounded-md border-[1px] border-[#065691] inline-block" href={`/tin-tuc`} >
                      Tất cả bài viết
                    </Link>
                  </div>
                </div>
                <div className="w-full md:w-3/5">
                  {dataWithoutFirstLastItem.map(item => (
                    <div key={item.id} className="flex mb-4">
                      <div className="flex w-1/2 pr-4">
                        <Link href={`/tin-tuc/${item.slug}`} className="w-full">
                          <Image src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item.imageUrl}`} alt={item.title} width={240} height={200} className="w-full" />
                        </Link>
                      </div>
                      <div className="flex flex-col w-1/2">
                        <Link href={`/tin-tuc/${item.slug}`} className="text-[#84571B] font-semibold mb-2">{item.title}</Link>
                        <div className="text-justify line-clamp-3 mr-4 text-sm font-semibold text-[#3f3c3c] italic overflow-hidden" dangerouslySetInnerHTML={{ __html: truncateText(item.content, 100) }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="w-full md:w-1/4">
            <div className="mb-4">
              <h2 className="text-3xl font-bold">Tin mới</h2>
            </div>
            <div className="flex mb-7 h-[2px] bg-[#ccc] w-4/5" />
            <ul className="list-decimal max-md:px-4 pl-4">
              {data.length === 0 ? (
                <p>Không có dữ liệu</p>
              ) : (
                dataWithoutLastItem.map(item => (
                  <li key={item.id} className="mb-4">
                    <Link href={`/tin-tuc/${item.slug}`} className="text-[#84571B] font-semibold mb-2 line-clamp-2">{item.title}</Link>
                    <div className="text-justify text-sm font-semibold text-[#3f3c3c] line-clamp-3 italic overflow-hidden" dangerouslySetInnerHTML={{ __html: truncateText(item.content, 200) }} />
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        {/* {data.length > 0 && (
          <div className="flex gap-4 max-md:flex-col max-lg:hidden">
            <Link className="md:w-2/5 overflow-hidden" href={`/tin-tuc/${data[data.length - 1].slug}`}>
              <Image src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data[data.length - 1].imageUrl}`} alt={data[data.length - 1].title} width={440} height={276} className="w-full" />
            </Link>
            <div className="md:w-3/5 flex flex-col">
              <div className="flex-1">
                <div>
                  <Link href={`/tin-tuc/${data[data.length - 1].slug}`} className="text-[#84571B] font-bold">{data[data.length - 1].title}</Link>
                </div>
                <small className="text-[#9f9e9a]">{`Ngày đăng: ${formatDate(data[data.length - 1].createdAt)}`}</small>
                <div className="text-justify line-clamp-5 text-sm font-semibold text-[#3f3c3c] italic" dangerouslySetInnerHTML={{ __html: data[data.length - 1].content }} />
              </div>
              <div className="flex">
                <Link className="mt-3 text-[#84571B] px-4 py-2 rounded-md border-[1px] border-[#065691] inline-block" href={`/tin-tuc`} >
                  Xem thêm
                </Link>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </section>
  )
}

export default Experience