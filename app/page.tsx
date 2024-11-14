import Banner from '@/components/HomePage/Banner'
import Certificate from '@/components/HomePage/Certificate'
import Feedback from '@/components/HomePage/Feedback';
import FormOrder from '@/components/HomePage/FormOrder';
import { getNews } from '@/services/news';
import Image from 'next/image'
import Link from 'next/link';
import { NewsEntity } from '@/entities/news';
import Experience from '@/components/HomePage/Experience';

export default async function Home() {
  return (
    <main>
      <section className="mb-8 mt-4 bg-cover md:h-[660px]">
        <div className="max-w-6xl m-auto px-6 flex items-center h-full relative">
          <p className="bg-text text-base md:text-5xl max-w-[200px] md:max-w-[600px] font-bold">
            WOWTOP PREMIUM NUTRITIONAL GROWTH MILK FORMULA FOR 1+ YEARS OLD
          </p>
          <Image src="/lon-gau@2x-8.png" alt="" width={544} height={802} className="w-1/2 h-full md:w-full" />
        </div>
      </section>
      <section className="mb-8 h-[450px] md:h-[1050px] bg-[length:100%_100%] pt-16 relative">
        <Image src="/nha-may@2x-100.jpg" width={2400} height={1800} alt='nhà máy' className="absolute inset-0 h-full w-full" />
        <div className="px-4 relative z-10">
          <div className="bg-[url('/asset_10.png')] bg-[length:100%_100%] text-center py-4">
            <h2 className="uppercase text-4xl text-[#84571B] font-bold">Nhà máy sản xuất WOWTOP tại NewZealand</h2>
          </div>
        </div>
      </section>
      <FormOrder />
    </main>
  )
}
