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
      <section className="lg:mb-16">
        <div className="max-w-6xl m-auto md:px-4">
          <div className="mb-4">
            <h2 className="text-3xl md:text-5xl bg-text py-4 font-bold uppercase text-center">Những sai lầm trong tăng chiều cao</h2>
          </div>
          <div className="p-3 bg-[#f6f0de] border-2 border-[#fcf2d9] rounded-2xl flex flex-wrap justify-center relative">
            <Image src="/PT.webp" alt="" width={175} height={175} className="absolute bottom-[-10%] left-[-10%] max-md:hidden" />
            <div className="w-full md:w-1/3 p-4">
              <div className="flex justify-center items-center mb-4">
                <Image src="/h4.png" alt="h4" width={136} height={136} />
              </div>
              <div>
                <h4 className="text-[#002A9E] font-semibold text-center text-xl mb-4">Chỉ quan tâm cao về lượng</h4>
                <p className="text-[#002A9E]">
                  Chiều cao về centimet rất quan trọng, nhưng nếu Chất lượng xương không được đảm bảo, trẻ sẽ dễ bị loãng xương và các bệnh về xương khác. Wowtop giúp cao hơn từ nguyên bào xương, cải thiện chiều cao cả về lượng và chất.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="flex justify-center items-center mb-4">
                <Image src="/h5.png" alt="h5" width={136} height={136} />
              </div>
              <div>
                <h4 className="text-[#002A9E] font-semibold text-center text-xl mb-4">Canxi, Khoáng chất là đủ</h4>
                <p className="text-[#002A9E]">
                  Chiều cao do khung xương quyết định. Canxi & khoáng chất chỉ là nguyên liệu cho xương hình thành. Cần có CBP, CPP thúc đẩy nguyên bào xương hoạt động, thu hút và hấp thụ tốt Canxi & khoáng chất thì khung xương mới dài hơn, chắc khỏe hơn.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="flex justify-center items-center mb-4">
                <Image src="/h1.png" alt="h1" width={136} height={136} />
              </div>
              <div>
                <h4 className="text-[#002A9E] font-semibold text-center text-xl mb-4">Uống sữa là đủ để cao</h4>
                <p className="text-[#002A9E]">
                  Sữa là giải pháp dinh dưỡng tối ưu. Tuy nhiên vẫn cần kết hợp luyện tập & sinh hoạt để tăng chiều cao. Wowtop có đội ngũ Healthcoach đồng hành cùng con từ chế độ dinh dưỡng tới vận động để con đạt chiều cao tối đa.
                </p>
              </div>
            </div>
            <div className="w-full md:w-2/5 p-4">
              <div className="flex justify-center items-center mb-4">
                <Image src="/h3.png" alt="h3" width={136} height={136} />
              </div>
              <div>
                <h4 className="text-[#002A9E] font-semibold text-center text-xl mb-4">Tin rằng GEN quyết định chiều cao</h4>
                <p className="text-[#002A9E]">
                  GEN chỉ quyết định 23% Dinh dưỡng, luyện tập và chế độ sinh hoạt mới thực sự giúp con cao vượt trội.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="flex justify-center items-center mb-4">
                <Image src="/h2.png" alt="h2" width={136} height={136} />
              </div>
              <div>
                <h4 className="text-[#002A9E] font-semibold text-center text-xl mb-4">Bỏ qua giai đoạn vàng</h4>
                <p className="text-[#002A9E]">
                  Giai đoạn 0 – 5 tuổi và giai đoạn trước dậy thì là các mốc tăng chiều cao quan trọng ở trẻ, cần được đặc biệt lưu ý và bổ sung dinh dưỡng tối đa.
                </p>
              </div>
            </div>
          </div>
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
      <Experience />
    </main>
  )
}
