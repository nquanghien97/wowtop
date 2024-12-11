import React from 'react'
import Banner from './Banner'
import SendCodeForm from './SendCodeForm';
import Image from 'next/image'
import { getAllGifts } from '@/services/gift';
import { GiftEntity } from '@/entities/gift';
import { Metadata } from 'next';
import ExchangeButton from './ExchangeButton';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  metadataBase: new URL('https://wowtopmilk.com.vn'),
  title: 'TÍCH ĐIỂM ĐỔI QUÀ CÙNG WOWTOP',
  description: 'TÍCH ĐIỂM ĐỔI QUÀ CÙNG WOWTOP',
  keywords: 'Wowtop',
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    locale: 'vi_VN',
    title: 'Wowtop',
    url: 'https://wowtopmilk.com.vn/',
    siteName: 'Wowtop',
    type: 'website',
    images: [
      {
        url: 'https://wowtopmilk.com.vn/artboard-13.png',
        width: 380,
        height: 210,
        alt: 'Wowtop thumbnail',
      },
    ],
  },
  icons: {
    icon: [
      {
        rel: 'icon',
        url: '/favicon.ico'
      }
    ]
  }
}

async function page() {
  const cookieStore = cookies()
  const token = cookieStore.get('token')
  const { data } = await getAllGifts() as unknown as { data: GiftEntity[] }
  return (
    <main className="bg-[url(/BG-1.png)] bg-[length:100%_100%] py-4">
      <Banner />
      <section className="max-w-7xl m-auto py-8">
        <div>
          <p className="mb-2 text-center text-3xl">Nhập mã của bạn</p>
          <SendCodeForm />
        </div>
      </section>
      <section>
        <Image src="/Heading-1.png" alt="Heading-1" width={652} height={86} className="m-auto mb-4" />
        <div className="max-w-7xl m-auto mb-4">
          <div className="flex max-lg:flex-col flex-wrap">
            {data.map(item => (
              <div key={item.id} className="px-4 lg:w-1/4 mb-4">
                <div className="bg-[#fffce9] rounded-xl shadow-md flex flex-col">
                  <div className="p-5 h-[270px]">
                    <Image src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item.imageUrl}`} alt={item.name} width={264} height={264} className="hover:scale-110 duration-300" />
                  </div>
                  <div className="h-1/2">
                    <p className="mt-4 text-center text-2xl text-[#07489E]">{item.name}</p>
                    <p className="mt-4 text-center text-3xl text-[#600D7F] font-bold">{item.point} điểm</p>
                    <p className="mt-4 text-center">Còn quà: {`<`}{item.quantity}{`>`}</p>
                    <ExchangeButton gift_id={item.id} token={token?.value} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default page